const { execSync } = require('child_process');
const environment = process.env.ENVIRONMENT || 'development';

if (environment === 'production') {
    execSync('export NODE_ENV=production && npx webpack --config webpack.config.js --mode production');
} else {
    execSync('export NODE_ENV=development && npx webpack --config webpack.config.js --mode development');
}

