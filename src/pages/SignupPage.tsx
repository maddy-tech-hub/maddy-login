import React, { useState, useEffect, useCallback } from 'react';
import { AuthTemplate } from '../components/AuthTemplate';
import {
  Input,
  Form,
  Footer,
  Button,
  OTPContainer,
  ErrorMessage,
  GeneralError,
  BackButton,
} from '@src/styles/common.styles';
import {
  registerUser,
  confirmOtp,
  resendOtp,
} from '@src/redux/slices/userSlice';
import { useDispatch } from 'react-redux';
import { AppDispatchType } from '@src/redux/store';
import { validateField, isFormValid } from '@src/services/validationService';
import Loader from '@src/components/Misc/Loader';
import PopupModal from '@src/components/Misc/PopupModal';
import { useNavigate, Link } from 'react-router-dom';
import { useIntl } from 'react-intl';
import AuthField from '@src/features/auth/components/AuthField';
import AuthFooterLink from '@src/features/auth/components/AuthFooterLink';
import OtpInputGroup from '@src/features/auth/components/OtpInputGroup';

const SignupPage: React.FC = () => {
  const intl = useIntl();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    phone: '',
  });

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatchType>();
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [apiErrors, setApiErrors] = useState<Record<string, string>>({});
  const [generalError, setGeneralError] = useState<string | null>(null);
  const [isOtpStep, setIsOtpStep] = useState(false);
  const [otp, setOtp] = useState(Array(6).fill(''));
  const [otpError, setOtpError] = useState<string | null>(null);
  const [resendTimer, setResendTimer] = useState(30);
  const [isResendDisabled, setIsResendDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  useEffect(() => {
    if (isResendDisabled && resendTimer > 0) {
      const timer = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isResendDisabled, resendTimer]);

  useEffect(() => {
    if (resendTimer === 0) {
      setIsResendDisabled(false);
    }
  }, [resendTimer]);

  const handleInputChange = useCallback((field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setFormErrors((prev) => ({
      ...prev,
      [field]: validateField(field, value),
    }));
    setApiErrors((prev) => ({ ...prev, [field]: '' }));
  }, []);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    const { isValid, errors } = isFormValid(formData);
    setFormErrors(errors);

    if (!isValid) return;

    try {
      setLoading(true);
      setGeneralError(null);

      const result = await dispatch(registerUser(formData)).unwrap();

      if (result.status) {
        setApiErrors({});
        setIsOtpStep(true);
        setResendTimer(30);
        setIsResendDisabled(true);
      } else {
        setGeneralError(result.Message);
      }
    } catch (error: any) {
      if (error) {
        setGeneralError(error);
      } else {
        setGeneralError(intl.formatMessage({ id: 'unexpectedError' }));
      }
    } finally {
      setLoading(false);
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1 && /^[0-9]*$/.test(value)) {
      const updatedOtp = [...otp];
      updatedOtp[index] = value;
      setOtp(updatedOtp);
      setOtpError(null);

      if (value && index < otp.length - 1) {
        const nextInput = document.getElementById(`otp-input-${index + 1}`);
        nextInput?.focus();
      }
    }

    if (!value && index > 0) {
      const prevInput = document.getElementById(`otp-input-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const enteredOtp = otp.join('');
    if (enteredOtp.length !== 6) {
      setOtpError(intl.formatMessage({ id: 'otpError' }));
      return;
    }

    try {
      setLoading(true);
      const result = await dispatch(
        confirmOtp({ email: formData.email, otp: enteredOtp })
      ).unwrap();

      if (result.status) {
        setIsSuccessModalOpen(true);
      } else {
        setOtpError(result.Message);
      }
    } catch {
      setOtpError(intl.formatMessage({ id: 'invalidOtp' }));
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    try {
      setResendTimer(30);
      setIsResendDisabled(true);
      const result = await dispatch(
        resendOtp({ email: formData.email })
      ).unwrap();

      if (!result.status) {
        setGeneralError(intl.formatMessage({ id: 'resendOtpError' }));
      }
    } catch {
      setGeneralError(intl.formatMessage({ id: 'unexpectedError' }));
    }
  };

  const handleModel = async () => {
    setIsSuccessModalOpen(false);
    navigate('/login');
  };

  const handleBack = () => {
    setIsOtpStep(false);
  };

  return (
    <AuthTemplate
      title={
        isOtpStep
          ? intl.formatMessage({ id: 'verifyOtp' })
          : intl.formatMessage({ id: 'signUp' })
      }
    >
      {loading && <Loader />}
      {isOtpStep ? (
        <Form onSubmit={handleOtpSubmit}>
          <BackButton onClick={handleBack}>
            {intl.formatMessage({ id: 'back' })}
          </BackButton>
          <h2 style={{ textAlign: 'center' }}>
            {intl.formatMessage({ id: 'enterOtp' })}
          </h2>
          {otpError && <ErrorMessage>{otpError}</ErrorMessage>}
          <OtpInputGroup value={otp} onChange={handleOtpChange} />
          <Button type="submit" disabled={loading}>
            {loading
              ? intl.formatMessage({ id: 'verifyingOtp' })
              : intl.formatMessage({ id: 'verifyOtp' })}
          </Button>
          <Footer>
            {intl.formatMessage({ id: 'didNotReceiveOtp' })}{' '}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (!isResendDisabled) handleResendOtp();
              }}
              style={{
                pointerEvents: isResendDisabled ? 'none' : 'auto',
                opacity: isResendDisabled ? 0.5 : 1,
              }}
            >
              {intl.formatMessage({ id: 'resendOtp' })}{' '}
              {isResendDisabled && `(${resendTimer}s)`}
            </a>
          </Footer>
        </Form>
      ) : (
        <Form onSubmit={handleSignup}>
          {generalError && <GeneralError>{generalError}</GeneralError>}
          <AuthField
            type="text"
            placeholder={intl.formatMessage({ id: 'fullName' })}
            value={formData.fullName}
            error={formErrors.fullName}
            onChange={(value) => handleInputChange('fullName', value)}
          />
          <AuthField
            type="email"
            placeholder={intl.formatMessage({ id: 'email' })}
            value={formData.email}
            error={formErrors.email}
            onChange={(value) => handleInputChange('email', value)}
          />
          {apiErrors.email && <ErrorMessage>{apiErrors.email}</ErrorMessage>}
          <AuthField
            type="password"
            placeholder={intl.formatMessage({ id: 'password' })}
            value={formData.password}
            error={formErrors.password}
            onChange={(value) => handleInputChange('password', value)}
          />
          <AuthField
            type="tel"
            placeholder={intl.formatMessage({ id: 'phoneNumber' })}
            value={formData.phone}
            error={formErrors.phone}
            onChange={(value) => handleInputChange('phone', value)}
          />

          <Button type="submit" disabled={loading}>
            {loading
              ? intl.formatMessage({ id: 'processing' })
              : intl.formatMessage({ id: 'signUp' })}
          </Button>
          <AuthFooterLink
            prefix={intl.formatMessage({ id: 'alreadyMember' })}
            href="/login"
            label={intl.formatMessage({ id: 'login' })}
          />
        </Form>
      )}

      {isSuccessModalOpen && (
        <PopupModal
          isOpen={isSuccessModalOpen}
          onClose={handleModel}
          buttonText={intl.formatMessage({ id: 'ok' })}
          message={intl.formatMessage({ id: 'signupSuccessMessage' })}
        />
      )}
    </AuthTemplate>
  );
};

export default SignupPage;
