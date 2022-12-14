import axios from 'axios';
import { useCallback, useState } from 'react';
import { User } from '../types/api/User';
import { useNavigate } from 'react-router-dom';
import { useMessage } from './useMessage';
import { useLoginUser } from './useLoginUser';

export const useAuth = () => {
  const navigate = useNavigate();
  const { showMessage } = useMessage();
  const { setLoginUser } = useLoginUser();

  const [loading, setLoading] = useState(false);

  const login = useCallback((id: string) => {
    axios
      .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (res.data) {
          const isAdmin = res.data.id === 10 ? true : false;
          setLoginUser({ ...res.data, isAdmin });
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
