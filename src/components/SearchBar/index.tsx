import React from 'react';
interface Props {
  placeholder: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Index: React.FC<Props> = ({ placeholder, onChange }) => {
  return (
    <div className="search-bar">
      <input type="text" placeholder={placeholder} onChange={onChange} />
      <button>
        <i className="fa fa-search"></i>
      </button>
    </div>
  );
};

export default Index;
