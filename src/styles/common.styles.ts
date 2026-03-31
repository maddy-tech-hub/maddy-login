import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 420px;
  background: rgba(255, 255, 255, 0.92);
  padding: 2rem;
  border-radius: 24px;
  border: 1px solid rgba(16, 35, 71, 0.08);
  box-shadow: 0 30px 80px rgba(16, 35, 71, 0.12);
  backdrop-filter: blur(14px);

  &:hover {
    box-shadow: 0 34px 90px rgba(16, 35, 71, 0.16);
  }
`;

export const Input = styled.input`
  margin-bottom: 1rem;
  padding: 14px 16px;
  font-size: 1rem;
  border: 1px solid #ced8ee;
  border-radius: 14px;
  background-color: #f8fbff;
  transition: all 0.3s ease;
  cursor: text;

  &:hover {
    background-color: #f4f8ff;
    border-color: #8aa7df;
  }

  &:focus {
    outline: none;
    border-color: #0c5efc;
    background-color: #fff;
    cursor: text;
    box-shadow: 0 0 0 4px rgba(12, 94, 252, 0.16);
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #e9ecef;
    border-color: #dcdcdc;
    color: #6c757d;
  }
`;

export const Button = styled.button`
  padding: 14px;
  font-size: 1rem;
  font-weight: 600;
  background: linear-gradient(135deg, #0c5efc 0%, #2448d8 100%);
  color: white;
  border: none;
  border-radius: 14px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.3s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 18px 30px rgba(12, 94, 252, 0.24);
  }

  &:disabled {
    background: #b0c4de;
    cursor: not-allowed;
    opacity: 0.6;
    box-shadow: none;
    transform: none;
  }
`;

export const Footer = styled.div`
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #4f5d7a;

  a {
    color: #0c5efc;
    text-decoration: none;
    font-weight: 600;

    &:hover {
      color: #2448d8;
      text-decoration: underline;
    }
  }
`;

export const OTPContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;

  input {
    width: 40px;
    height: 50px;
    font-size: 1.5rem;
    text-align: center;
    border: 1px solid #ced8ee;
    border-radius: 12px;
    cursor: pointer;

    &:focus {
      border-color: #0c5efc;
      box-shadow: 0 0 0 4px rgba(12, 94, 252, 0.16);
    }
  }
`;

export const ErrorMessage = styled.div`
  color: #d92d20;
  margin-bottom: 16px;
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
  font-size: 1rem;
  color: #0c5efc;
  cursor: pointer;
  padding: 8px 16px;
  text-align: left;
  display: inline-block;
  margin-bottom: 1rem;
  margin-left: 0; /* Ensure no left margin */
  align-self: flex-start; /* Align to the start of the container */

  &:hover {
    color: #2448d8;
    text-decoration: underline;
  }

  &:focus {
    outline: none;
  }
`;
