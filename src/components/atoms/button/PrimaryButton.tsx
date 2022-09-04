import { Button } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  disAbled?: boolean;
  loading?: boolean;
  onClick: () => void;
};

export const PrimaryButton: FC<Props> = (props) => {
  const { children, onClick, disAbled = false, loading = false } = props;
  return (
    <Button
      bg='teal.400'
      color='white'
      _hover={{ opacity: '0.8' }}
      onClick={onClick}
      disabled={disAbled || loading}
      isLoading={loading}
    >
      {children}
    </Button>
  );
};
