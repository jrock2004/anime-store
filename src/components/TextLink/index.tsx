import { ReactElement, ReactNode } from 'react';
import { Link } from 'react-router-dom';

export type TextLinkType = {
  children: ReactNode;
  to: string;
};

export const TextLink = ({ children, to }: TextLinkType): ReactElement => {
  return (
    <Link className="text-indigo-600" data-testid="home-link" to={to}>
      {children}
    </Link>
  );
};
