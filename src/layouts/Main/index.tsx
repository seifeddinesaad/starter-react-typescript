import React from 'react';

type Props = {
  children: React.ReactNode;
};

const index = (props: Props) => {
  return <div className="h-screen w-screen bg-slate-200 text-black">{props.children}</div>;
};

export default index;
