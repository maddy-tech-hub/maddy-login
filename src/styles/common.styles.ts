import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 440px;
  margin-top: 1.75rem;
  background: rgba(255, 255, 255, 0.92);
  padding: 2rem;
  border-radius: 28px;
  border: 1px solid rgba(13, 27, 51, 0.08);
  box-shadow: 0 30px 80px rgba(8, 24, 48, 0.12);
  backdrop-filter: blur(14px);
`;

export const Input = styled.input`
  margin-bottom: 1rem;
  padding: 14px 16px;
  font-size: 1rem;
  border: 1px solid #d6e0f0;
  border-radius: 14px;
  background-color: #f9fbff;
  transition: all 0.25s ease;
  cursor: text;

  &:hover {
    border-color: #9fb6e4;
  }

  &:focus {
    outline: none;
    border-color: #117eff;
    background-color: #fff;
    box-shadow: 0 0 0 4px rgba(17, 126, 255, 0.14);
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #e9ecef;
    border-color: #dcdcdc;
    color: #6c757d;
  }
`;

export const Button = styled.button`
  min-height: 50px;
  padding: 14px;
  font-size: 1rem;
  font-weight: 700;
  background: linear-gradient(135deg, #117eff 0%, #2d4fd4 100%);
  color: white;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.3s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 18px 30px rgba(17, 126, 255, 0.22);
  }

  &:disabled {
    background: #c8d4e8;
    cursor: not-allowed;
    opacity: 0.7;
    box-shadow: none;
    transform: none;
  }
`;

export const Footer = styled.div`
  margin-top: 1rem;
  font-size: 0.92rem;
  color: #5a6986;

  a {
    color: #117eff;
    text-decoration: none;
    font-weight: 700;

    &:hover {
      color: #2d4fd4;
      text-decoration: underline;
    }
  }
`;

export const OTPContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;

  input {
    width: 46px;
    height: 54px;
    font-size: 1.4rem;
    text-align: center;
    border: 1px solid #d6e0f0;
    border-radius: 14px;
    cursor: pointer;

    &:focus {
      border-color: #117eff;
      box-shadow: 0 0 0 4px rgba(17, 126, 255, 0.14);
    }
  }
`;

export const ErrorMessage = styled.div`
  color: #d92d20;
  margin-bottom: 12px;
  font-size: 14px;
  text-align: left;
`;

export const GeneralError = styled.div`
  color: #d92d20;
  text-align: left;
  margin-bottom: 12px;
`;

export const BackButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 0.95rem;
  color: #117eff;
  cursor: pointer;
  padding: 8px 0 16px;
  text-align: left;
  align-self: flex-start;

  &:hover {
    color: #2d4fd4;
    text-decoration: underline;
  }

  &:focus {
    outline: none;
  }
`;
