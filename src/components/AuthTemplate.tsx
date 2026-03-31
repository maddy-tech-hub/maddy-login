import React from 'react';
import styled from 'styled-components';
import loginBanner from '../assets/banner.jpg';

interface AuthTemplateProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

const TemplateWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  background:
    radial-gradient(circle at top left, rgba(17, 126, 255, 0.12), transparent 28%),
    linear-gradient(180deg, #f5f8ff 0%, #eef3ff 100%);
`;

const LeftPanel = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const Content = styled.div`
  width: min(460px, 100%);
`;

const Eyebrow = styled.p`
  margin: 0 0 0.75rem;
  color: #117eff;
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
`;

const Title = styled.h1`
  margin: 0;
  color: #0d1b33;
  font-size: clamp(2rem, 3vw, 2.8rem);
  line-height: 1.05;
`;

const Subtitle = styled.p`
  margin: 0.9rem 0 0;
  color: #5a6986;
  line-height: 1.8;
`;

const RightPanel = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 2rem;
  background: url(${loginBanner}) no-repeat center center/cover;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background:
      linear-gradient(180deg, rgba(6, 19, 54, 0.16), rgba(6, 19, 54, 0.78)),
      radial-gradient(circle at top right, rgba(17, 126, 255, 0.18), transparent 28%);
  }

  @media (max-width: 960px) {
    display: none;
  }
`;

const HighlightCard = styled.div`
  position: relative;
  z-index: 1;
  max-width: 24rem;
  padding: 1.35rem;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.16);
  backdrop-filter: blur(14px);
  color: #f8fbff;
`;

const HighlightTitle = styled.h3`
  margin: 0;
  font-size: 1.35rem;
`;

const HighlightCopy = styled.p`
  margin: 0.75rem 0 0;
  color: rgba(248, 251, 255, 0.82);
  line-height: 1.75;
`;

export const AuthTemplate: React.FC<AuthTemplateProps> = ({
  children,
  title,
  subtitle,
}) => {
  return (
    <TemplateWrapper>
      <LeftPanel>
        <Content>
          <Eyebrow>Secure account access</Eyebrow>
          <Title>{title}</Title>
          <Subtitle>
            {subtitle ||
              'Access the portfolio platform, account flows, and reusable product modules through a clean auth experience.'}
          </Subtitle>
          {children}
        </Content>
      </LeftPanel>
      <RightPanel>
        <HighlightCard>
          <HighlightTitle>React frontends. .NET APIs. Product-ready UX.</HighlightTitle>
          <HighlightCopy>
            The same care used in the portfolio redesign carries into the auth
            surfaces: clear hierarchy, approachable forms, and maintainable
            implementation.
          </HighlightCopy>
        </HighlightCard>
      </RightPanel>
    </TemplateWrapper>
  );
};
