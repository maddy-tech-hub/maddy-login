import React from 'react';
import { Input, ErrorMessage } from '@src/styles/common.styles';

interface AuthFieldProps {
  type: string;
  placeholder: string;
  value: string;
  error?: string;
  maxLength?: number;
  onChange: (value: string) => void;
  id?: string;
}

const AuthField: React.FC<AuthFieldProps> = ({
  type,
  placeholder,
  value,
  error,
  maxLength,
  onChange,
  id,
}) => (
  <>
    <Input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      maxLength={maxLength}
      onChange={(event) => onChange(event.target.value)}
    />
    {error ? <ErrorMessage>{error}</ErrorMessage> : null}
  </>
);

export default AuthField;
