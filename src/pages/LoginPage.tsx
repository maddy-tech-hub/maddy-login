import React, { useState, useEffect } from 'react';
import { AuthTemplate } from '../components/AuthTemplate';
import {
  Input,
  Form,
  Footer,
  Button,
  ErrorMessage,
} from '@src/styles/common.styles';
import { loginUser } from '@src/redux/slices/userSlice';
import { AppDispatchType } from '@src/redux/store';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Loader from '../components/Misc/Loader';
import PopupModal from '@src/components/Misc/PopupModal';
import { validateField } from '@src/services/validationService';
import { setToken } from '@src/redux/slices/authSlice';
import { useIntl } from 'react-intl';
import AuthField from '@src/features/auth/components/AuthField';
import AuthFooterLink from '@src/features/auth/components/AuthFooterLink';
import { emitShellEvent } from '@src/shared/lib/shell/eventBus';
import { persistSessionSnapshot } from '@src/shared/lib/sessionStorage';

const LoginPage: React.FC = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatchType>();
  const navigate = useNavigate();
  const intl = useIntl();
  const t = (id: string, fallback: string) => {
    const message = intl.formatMessage({ id });
    return message === id ? fallback : message;
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [fieldErrors, setFieldErrors] = useState({
    username: '',
    password: '',
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    const allValid =
      Object.values(fieldErrors).every((error) => error === '') &&
      username.trim() !== '' &&
      password.trim() !== '';
    setIsButtonDisabled(!allValid);
  }, [fieldErrors, username, password]);

  const handleInputChange = (field: string, value: string) => {
    if (field === 'username') setUsername(value);
    if (field === 'password') setPassword(value);

    setFieldErrors((prev) => ({
      ...prev,
      [field]: validateField(field, value),
    }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    setLoading(true);
    try {
      const data = await dispatch(
        loginUser({ email: username, password })
      ).unwrap();

      if (data.status) {
        dispatch(setToken(data.token));
        persistSessionSnapshot({
          token: data.token,
          user: data,
        });
        emitShellEvent('maddy:auth-changed', {
          token: data.token,
          user: data,
        });
        setIsSuccessModalOpen(true);
      } else {
        setErrorMessage(
          data.message || t('loginFailed', 'Login failed. Please try again.')
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
    navigate('/');
  };

  return (
    <AuthTemplate
      title={t('loginPageTitle', 'Welcome back')}
      subtitle="Sign in to access the portfolio platform, account tools, and reusable product demos."
    >
      {loading && <Loader text={t('loggingIn', 'Logging in...')} />}
      <Form onSubmit={handleLogin}>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <AuthField
          type="text"
          placeholder={t('username', 'Username')}
          value={username}
          error={fieldErrors.username}
          onChange={(value) => handleInputChange('username', value)}
        />
        <AuthField
          type="password"
          placeholder={t('password', 'Password')}
          value={password}
          error={fieldErrors.password}
          onChange={(value) => handleInputChange('password', value)}
        />
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <Link
            style={{
              color: '#007bff',
              cursor: 'pointer',
              paddingBottom: '10px',
              fontWeight: 700,
            }}
            to="/forget"
          >
            {t('forgotPassword', 'Forgot Password?')}
          </Link>
        </div>
        <Button type="submit" disabled={isButtonDisabled}>
          {loading
            ? t('loggingIn', 'Logging in...')
            : t('loginButton', 'Login')}
        </Button>
      </Form>
      <AuthFooterLink
        prefix={t('notAMember', 'Not a member?')}
        href="/signup"
        label={t('signUpNow', 'Sign up now')}
      />
      {isSuccessModalOpen && (
        <PopupModal
          isOpen={isSuccessModalOpen}
          onClose={handleModalClose}
          buttonText={t('ok', 'OK')}
          message={t('loginSuccessMessage', 'Login successful! Welcome back.')}
        />
      )}
    </AuthTemplate>
  );
};

export default LoginPage;
