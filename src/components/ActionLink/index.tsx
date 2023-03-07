import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  label?: string;
  icon?: string;
  className?: string;
  url?: string;
  onClickAction?: any;
};

const ActionLink = ({ label, icon, className, url, onClickAction }: Props) => {
  return (
    <Link
      to={url || '#'}
      className={`action-link${className != null ? ` ${className}` : ''}`}
      onClick={onClickAction}
    >
      <span>{label}</span>
      {icon && <span className="material-icons">{icon}</span>}
    </Link>
  );
};

ActionLink.propTypes = {};

export default ActionLink;
