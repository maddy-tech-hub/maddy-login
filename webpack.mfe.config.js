/* eslint-disable @typescript-eslint/no-var-requires */
const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('./package.json').dependencies


module.exports = {
        mfePlugin: new ModuleFederationPlugin({
            name: 'auth_remote',
            library: { type: 'global', name: 'auth_remote' },
            filename: 'remoteEntry.js',
            exposes: {
                "./LoginScreen": "./src/app/remotes/LoginScreen.tsx",
                "./SignupScreen": "./src/app/remotes/SignupScreen.tsx",
                "./ForgetScreen": "./src/app/remotes/ForgetScreen.tsx",
             },             
            remotes: {},
            shared: {
                react: { singleton: true, requiredVersion: deps.react },
                'react-dom': {
                    singleton: true,
                    requiredVersion: deps['react-dom'],
                },
                'react-router-dom': {
                    singleton: true,
                    requiredVersion: deps['react-router-dom'],
                },
                'styled-components': {
                    singleton: true,
                    requiredVersion: deps['styled-components'],
                },
            },
        })
};
