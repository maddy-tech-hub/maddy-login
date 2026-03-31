import React, { useState } from 'react';
import { AuthTemplate } from '../components/AuthTemplate';
import {
  Input,
  Form,
  Footer,
  Button,
  ErrorMessage,
} from '@src/styles/common.styles';
import { useDispatch } from 'react-redux';
import { AppDispatchType } from '@src/redux/store';
import { useNavigate, Link } from 'react-router-dom';
import Loader from '../components/Misc/Loader';
import PopupModal from '@src/components/Misc/PopupModal';
import { forgetPassword, resetPassword } from '@src/redux/slices/userSlice';
import { useIntl } from 'react-intl';
import AuthField from '@src/features/auth/components/AuthField';
import AuthFooterLink from '@src/features/auth/components/AuthFooterLink';

const ForgetPage: React.FC = () => {
  const intl = useIntl();
  const t = (id: string, fallback: string) => {
    const message = intl.formatMessage({ id });
    return message === id ? fallback : message;
  };
  const dispatch = useDispatch<AppDispatchType>();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
      const data = await dispatch(forgetPassword({ email })).unwrap();
      if (data.status) {
        setIsEmailSubmitted(true);
      } else {
        setErrorMessage(
          data.message ||
            t(
              'forgetPasswordError',
              'Unable to send the password reset email. Please try again later.'
            )
        );
      }
    } catch (err: any) {
      setErrorMessage(
        err.message ||
          t('unexpectedError', 'An unexpected error occurred. Please try again.')
      );
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
      const data = await dispatch(
        resetPassword({
          email,
          currentPassword,
          password: newPassword,
          confirmPassword,
        })
      ).unwrap();

      if (data.status) {
        setIsSuccessModalOpen(true);
      } else {
        setErrorMessage(
          data.message ||
            t('resetPasswordError', 'Failed to reset password. Please try again.')
        );
      }
    } catch (err: any) {
      setErrorMessage(
        err.message ||
          t('unexpectedError', 'An unexpected error occurred. Please try again.')
      );
    } finally {
      setLoading(false);
    }
  };

  const handleModalClose = () => {
    setIsSuccessModalOpen(false);
    navigate('/login');
  };

  return (
    <AuthTemplate
      title={
        isEmailSubmitted
          ? t('resetPassword', 'Reset password')
          : t('forgetPassword', 'Forgot password')
      }
      subtitle="Recover your access and get back into the platform with a simple reset flow."
    >
      {loading && <Loader text={t('processing', 'Processing...')} />}{' '}
      {/* Show loader when loading */}
      {!isEmailSubmitted ? (
        <Form onSubmit={handleEmailSubmit}>
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}{' '}
          <AuthField
            type="email"
            placeholder={t('enterEmail', 'Enter your email address')}
            value={email}
            onChange={setEmail}
          />
          <Button type="submit" disabled={loading}>
            {loading
              ? t('submitting', 'Submitting...')
              : t('submitEmail', 'Submit email')}
          </Button>
        </Form>
      ) : (
        <Form onSubmit={handlePasswordReset}>
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}{' '}
          <AuthField
            type="password"
            placeholder={t('currentPassword', 'Current password')}
            value={currentPassword}
            onChange={setCurrentPassword}
          />
          <AuthField
            type="password"
            placeholder={t('newPassword', 'New password')}
            value={newPassword}
            onChange={setNewPassword}
          />
          <AuthField
            type="password"
            placeholder={t('confirmNewPassword', 'Confirm new password')}
            value={confirmPassword}
            onChange={setConfirmPassword}
          />
          <Button type="submit" disabled={loading}>
            {loading
              ? t('resetting', 'Resetting...')
              : t('resetPassword', 'Reset password')}
          </Button>
        </Form>
      )}
      <AuthFooterLink
        prefix={t('backToLogin', 'Back to login')}
        href="/login"
        label={t('login', 'Login')}
      />
      {isSuccessModalOpen && (
        <PopupModal
          isOpen={isSuccessModalOpen}
          onClose={handleModalClose}
          buttonText={t('ok', 'OK')}
          message={t(
            'passwordResetSuccess',
            'Your password has been reset successfully. You can now log in.'
          )}
        />
      )}
    </AuthTemplate>
  );
};

export default ForgetPage;
