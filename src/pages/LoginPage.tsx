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
        // Use intl to get localized message
        setErrorMessage(
          data.message || intl.formatMessage({ id: 'loginFailed' })
        );
      }
    } catch (err: any) {
      // Use intl to get localized error message
      setErrorMessage(
        err.message || intl.formatMessage({ id: 'unexpectedError' })
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
    <AuthTemplate title={intl.formatMessage({ id: 'loginPageTitle' })}>
      {loading && <Loader text={intl.formatMessage({ id: 'loggingIn' })} />}
      <Form onSubmit={handleLogin}>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <AuthField
          type="text"
          placeholder={intl.formatMessage({ id: 'username' })}
          value={username}
          error={fieldErrors.username}
          onChange={(value) => handleInputChange('username', value)}
        />
        <AuthField
          type="password"
          placeholder={intl.formatMessage({ id: 'password' })}
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
            }}
            to="/forget"
          >
            {intl.formatMessage({ id: 'forgotPassword' })}
          </Link>
        </div>
        <Button type="submit" disabled={isButtonDisabled}>
          {loading
            ? intl.formatMessage({ id: 'loggingIn' })
            : intl.formatMessage({ id: 'loginButton' })}
        </Button>
      </Form>
      <AuthFooterLink
        prefix={intl.formatMessage({ id: 'notAMember' })}
        href="/signup"
        label={intl.formatMessage({ id: 'signUpNow' })}
      />
      {isSuccessModalOpen && (
        <PopupModal
          isOpen={isSuccessModalOpen}
          onClose={handleModalClose}
          buttonText={intl.formatMessage({ id: 'ok' })}
          message={intl.formatMessage({ id: 'loginSuccessMessage' })}
        />
      )}
    </AuthTemplate>
  );
};

export default LoginPage;
