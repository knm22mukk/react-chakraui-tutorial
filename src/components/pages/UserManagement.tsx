import { Wrap, WrapItem } from '@chakra-ui/react';
import { FC } from 'react';
import { UserCard } from '../organisms/layout/user/UserCard';
import { HeaderLayout } from '../template/HeaderLayout';

export const UserManagement: FC = () => {
  return (
    <HeaderLayout>
      <Wrap p={{ base: 4, md: 10 }}>
        <WrapItem>
          <UserCard
            imageUrl='https://source.unsplash.com/random/'
            userName='mukk'
            fullName='mukk mukk'
          />
        </WrapItem>
      </Wrap>
    </HeaderLayout>
  );
};
