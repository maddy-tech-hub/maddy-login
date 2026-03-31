import React from 'react';
import { OTPContainer, Input } from '@src/styles/common.styles';

interface OtpInputGroupProps {
  value: string[];
  onChange: (index: number, value: string) => void;
}

const OtpInputGroup: React.FC<OtpInputGroupProps> = ({ value, onChange }) => (
  <OTPContainer>
    {value.map((digit, index) => (
      <Input
        id={`otp-input-${index}`}
        key={index}
        type="text"
        maxLength={1}
        value={digit}
        onChange={(event) => onChange(index, event.target.value)}
      />
    ))}
  </OTPContainer>
);

export default OtpInputGroup;
