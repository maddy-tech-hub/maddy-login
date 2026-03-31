import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '@src/styles/common.styles';

interface AuthFooterLinkProps {
  prefix: string;
  href: string;
  label: string;
}

const AuthFooterLink: React.FC<AuthFooterLinkProps> = ({
  prefix,
  href,
  label,
}) => (
  <Footer>
    {prefix}{' '}
    <Link to={href}>{label}</Link>
  </Footer>
);

export default AuthFooterLink;
