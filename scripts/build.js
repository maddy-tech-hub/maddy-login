const { execSync } = require('child_process');
const environment = process.env.ENVIRONMENT || 'development';
const env = {
  ...process.env,
  NODE_ENV: environment,
};

if (environment === 'production') {
    execSync('npx webpack --config webpack.config.js --mode production', {
      env,
      stdio: 'inherit',
    });
} else {
    execSync('npx webpack --config webpack.config.js --mode development', {
      env,
      stdio: 'inherit',
    });
}
