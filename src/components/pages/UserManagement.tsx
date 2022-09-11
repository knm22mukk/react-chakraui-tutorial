import { Center, Spinner, Wrap, WrapItem } from '@chakra-ui/react';
import { FC, useEffect } from 'react';
import { useAllUsers } from '../../hooks/useAllUsers';
import { UserCard } from '../organisms/layout/user/UserCard';
import { HeaderLayout } from '../template/HeaderLayout';

export const UserManagement: FC = () => {
  const { getUsers, users, loading } = useAllUsers();

  useEffect(() => getUsers(), []);

  return (
    <HeaderLayout>
      {loading ? (
        <Center h='100vh'>
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id} mx='auto'>
              <UserCard imageUrl='/logo192.png' userName={user.username} fullName={user.name} />
            </WrapItem>
          ))}
        </Wrap>
      )}
    </HeaderLayout>
  );
};
