import React from 'react';
import styled from 'styled-components';

const AuthLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const AuthLink = styled.a`
  margin: 10px 0;
  text-decoration: none;
  color: #007bff;
  font-size: 18px;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const AuthLinks: React.FC = () => (
  <AuthLinksContainer>
    <AuthLink href="/login">Login</AuthLink>
    <AuthLink href="/signup">Sign Up</AuthLink>
    <AuthLink href="/forgot-password">Forgot Password</AuthLink>
  </AuthLinksContainer>
);

export default AuthLinks;
