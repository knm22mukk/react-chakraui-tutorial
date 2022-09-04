import axios from 'axios';
import { useCallback, useState } from 'react';
import { User } from '../types/api/User';
import { useNavigate } from 'react-router-dom';
import { useMessage } from './useMessage';

export const useAuth = () => {
  const navigate = useNavigate();
  const { showMessage } = useMessage();

  const [loading, setLoading] = useState(false);

  const login = useCallback((id: string) => {
    axios
      .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (res.data) {
          navigate('/home');
          showMessage({ title: 'ログインしました。', status: 'success' });
        } else {
          showMessage({ title: 'ユーザーが見つかりません。', status: 'error' });
        }
      })
      .catch(() => {
        showMessage({ title: 'ログインできません。', status: 'error' });
      })
      .finally(() => setLoading(false));
  }, []);
  return { login, loading };
};
