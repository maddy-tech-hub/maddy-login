import React, { FC } from 'react';
import styled from 'styled-components';
import loginBanner from '../assets/banner.jpg';

interface AuthTemplateProps {
  children: React.ReactNode;
  title?: string;
}

const TemplateWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  background:
    radial-gradient(circle at top left, rgba(12, 94, 252, 0.12), transparent 30%),
    linear-gradient(180deg, #f5f8ff 0%, #eef3ff 100%);
`;

const LeftPanel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px;
`;

const RightPanel = styled.div`
  flex: 1;
  background: url(${loginBanner}) no-repeat center center/cover;
  background-size: cover;
  background-position: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(6, 19, 54, 0.08), rgba(6, 19, 54, 0.52));
  }

  @media (max-width: 960px) {
    display: none;
  }
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #102347;

  img {
    width: 40px;
  }
`;

export const AuthTemplate: React.FC<AuthTemplateProps> = ({
  children,
  title,
}) => {
  return (
    <TemplateWrapper>
      <LeftPanel>
        <Logo>{title}</Logo>
        {children}
      </LeftPanel>
      <RightPanel />
    </TemplateWrapper>
  );
};
