const messages: Record<string, Record<string, string>> = {
  en: {
    // Existing messages...
    loginFailed: 'Login failed. Please try again.',
    unexpectedError: 'An unexpected error occurred. Please try again.',
    loginPageTitle: 'Login',
    loggingIn: 'Logging in...',
    username: 'Username',
    password: 'Password',
    forgotPassword: 'Forgot Password?',
    loginButton: 'Login',
    notAMember: 'Not a member?',
    signUpNow: 'Sign up now',
    loginSuccessMessage: 'Login successful! Welcome back.',
    verifyOtp: 'Verify OTP',
    enterOtp: 'Enter OTP',
    otpError: 'Please enter a 6-digit OTP.',
    resendOtpError: 'Failed to resend OTP. Please try again later.',
    invalidOtp: 'Invalid OTP. Please try again.',
    resendOtp: 'Resend OTP',
    processing: 'Processing...',
    back: 'Back',
    didNotReceiveOtp: 'Didn’t receive the OTP?',
    fullName: 'Full Name',
    email: 'Email',
    phoneNumber: 'Phone Number',
    alreadyMember: 'Already have an account?',
    signupSuccessMessage: 'Account created successfully! You can now log in.',
    verifyingOtp: 'Verifying OTP...',
    resetPasswordError: 'Failed to reset password. Please try again.',
    loading: 'Loading...',
    
    // Success modal
    ok: 'OK',

    // Field Validation Errors
    usernameRequired: 'Username is required.',
    passwordRequired: 'Password is required.',
    invalidUsername: 'Invalid username.',
    invalidPassword: 'Invalid password.',
    fullNameRequired: 'Full name is required.',
    emailRequired: 'Email is required.',
    emailInvalid: 'Invalid email format.',
    passwordInvalid: 'Password must contain at least 8 characters, including uppercase, lowercase, and a number.',
    phoneNumberRequired: 'Phone number is required.',
    phoneNumberInvalid: 'Invalid phone number format.',
    
    // General Errors
    generalError: 'An error occurred. Please try again later.',
    userAlreadyExists: 'An account with this email already exists.',
    forgetPasswordError: 'Unable to send the password reset email. Please try again later.',
    
    // Forget/Reset Password Specific
    enterEmail: 'Enter your email address',
    submitEmail: 'Submit email',
    currentPassword: 'Current password',
    newPassword: 'New password',
    confirmNewPassword: 'Confirm new password',
    resetPassword: 'Reset password',
    backToLogin: 'Back to login',
    passwordResetSuccess: 'Your password has been reset successfully. You can now log in.',
    submitting: 'Submitting...',
    resetting: 'Resetting...',
    
    // Forget Page - Specific to your provided ForgetPage component
    forgetPasswordTitle: 'Forgot Password',
    resetPasswordTitle: 'Reset Password',
    resetPasswordInstruction: 'Please enter your current password and your new password to reset it.',
  },
  fr: {
    // Existing messages...
    loginFailed: 'Échec de la connexion. Veuillez réessayer.',
    unexpectedError: "Une erreur inattendue s'est produite. Veuillez réessayer.",
    loginPageTitle: 'Se connecter',
    loggingIn: 'Connexion...',
    username: "Nom d'utilisateur",
    password: 'Mot de passe',
    forgotPassword: 'Mot de passe oublié ?',
    loginButton: 'Se connecter',
    notAMember: 'Pas encore membre?',
    signUpNow: 'Inscrivez-vous maintenant',
    loginSuccessMessage: 'Connexion réussie! Bienvenue à nouveau.',
    verifyOtp: 'Vérifier OTP',
    enterOtp: 'Entrez OTP',
    otpError: 'Veuillez entrer un OTP de 6 chiffres.',
    resendOtpError: "Échec de l'envoi de l'OTP. Veuillez réessayer plus tard.",
    invalidOtp: 'OTP invalide. Veuillez réessayer.',
    resendOtp: "Renvoyer l'OTP",
    processing: 'Traitement...',
    back: 'Retour',
    didNotReceiveOtp: "Vous n'avez pas reçu l'OTP ?",
    fullName: 'Nom complet',
    email: 'Email',
    phoneNumber: 'Numéro de téléphone',
    alreadyMember: 'Vous avez déjà un compte?',
    signupSuccessMessage: 'Compte créé avec succès ! Vous pouvez maintenant vous connecter.',
    verifyingOtp: "Vérification de l'OTP...",
    resetPasswordError: "Échec de la réinitialisation du mot de passe. Veuillez réessayer.",
    loading: 'Chargement...',
    
    // Success modal
    ok: 'D\'accord',

    // Field Validation Errors
    fullNameRequired: 'Le nom complet est requis.',
    emailRequired: 'L\'email est requis.',
    emailInvalid: 'Format d\'email invalide.',
    passwordInvalid: 'Le mot de passe doit contenir au moins 8 caractères, y compris une majuscule, une minuscule et un chiffre.',
    phoneNumberRequired: 'Le numéro de téléphone est requis.',
    phoneNumberInvalid: 'Format du numéro de téléphone invalide.',
    
    // General Errors
    generalError: 'Une erreur est survenue. Veuillez réessayer plus tard.',
    userAlreadyExists: 'Un compte avec cet email existe déjà.',
    
    // Forget/Reset Password Specific
    enterEmail: 'Entrez votre adresse e-mail',
    submitEmail: 'Envoyer l\'e-mail',
    currentPassword: 'Mot de passe actuel',
    newPassword: 'Nouveau mot de passe',
    confirmNewPassword: 'Confirmer le nouveau mot de passe',
    resetPassword: 'Réinitialiser le mot de passe',
    backToLogin: 'Retour à la connexion',
    passwordResetSuccess: 'Votre mot de passe a été réinitialisé avec succès. Vous pouvez maintenant vous connecter.',
    submitting: 'Soumission...',
    resetting: 'Réinitialisation...',
    
    // Forget Page - Specific to your provided ForgetPage component
    forgetPasswordTitle: 'Mot de passe oublié',
    resetPasswordTitle: 'Réinitialiser le mot de passe',
    resetPasswordInstruction: 'Veuillez entrer votre mot de passe actuel et votre nouveau mot de passe pour le réinitialiser.',
  },
};
