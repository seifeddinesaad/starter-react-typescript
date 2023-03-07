import React from 'react';

type Props = {
  children: React.ReactElement;
};

function Fragment({ children }: Props) {
  return <>{children}</>;
}

export default Fragment;
