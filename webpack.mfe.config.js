/* eslint-disable @typescript-eslint/no-var-requires */
const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('./package.json').dependencies


module.exports = {
        mfePlugin: new ModuleFederationPlugin({
            name: 'maddy_login',
            library: { type: 'global', name: 'maddy_login' },
            filename: 'remoteEntry.js',
            exposes: {
                "./LoginComponent": "./src/pages/LoginPage.tsx",
                "./SignupComponent": "./src/pages/SignupPage.tsx",
                "./ForgetComponent": "./src/pages/ForgetPage.tsx",
             },             
            remotes: {},
            shared: {
                ...deps,
                react: { singleton: true,  requiredVersion: deps.react },
                'react-dom': {
                    singleton: true,
                    requiredVersion: deps['react-dom'],
                },
                'styled-components': {
                    singleton: true,
                    requiredVersion: deps['styled-components'],
                },
            },
        })
};
