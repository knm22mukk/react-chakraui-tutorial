import { Center, Spinner, useDisclosure, Wrap, WrapItem } from '@chakra-ui/react';
import { FC, useCallback, useEffect } from 'react';
import { useAllUsers } from '../../hooks/useAllUsers';
import { useSelectUsers } from '../../hooks/useSelectUsers';
import { UserCard } from '../organisms/layout/user/UserCard';
import { UserDetailModal } from '../organisms/layout/user/UserDetailModal';
import { HeaderLayout } from '../template/HeaderLayout';

export const UserManagement: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUsers, users, loading } = useAllUsers();
  const { onSelectUser, selectedUser } = useSelectUsers();

  useEffect(() => getUsers(), []);

  const onClickUser = useCallback(
    (id: number) => {
      onSelectUser({ id, users, onOpen });
    },
    [users, onSelectUser, onOpen],
  );

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
              <UserCard
                id={user.id}
                imageUrl='/logo192.png'
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal user={selectedUser} isOpen={isOpen} onClose={onClose} />
    </HeaderLayout>
  );
};
