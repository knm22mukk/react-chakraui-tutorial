import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login } from '../components/pages/Login';
import { Page404 } from '../components/pages/Page404';
import { LoginUserProvider } from '../providers/LoginUserProvider';
import { homeRoutes } from './HomeRoutes';

export const Router: FC = () => {
  return (
    <LoginUserProvider>
      <Routes>
        <Route path='/' element={<Login />} />
        {homeRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.children} />
        ))}
        <Route path='/*' element={<Page404 />} />
      </Routes>
    </LoginUserProvider>
  );
};
