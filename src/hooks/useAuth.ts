import axios from 'axios';
import { useCallback, useState } from 'react';
import { User } from '../types/api/User';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const login = useCallback((id: string) => {
    axios
      .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (res.data) {
          navigate('/home');
        } else {
          alert('ユーザーが見つかりませんでした。');
        }
      })
      .catch(() => alert('ログインできません'))
      .finally(() => setLoading(false));
  }, []);
  return { login, loading };
};
