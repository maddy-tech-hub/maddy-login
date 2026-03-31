# maddy-login

Authentication microfrontend for the Maddy platform.

## Ownership

This repo owns:
- login
- signup
- forgot-password
- auth form validation
- auth-related API calls
- auth-related local state
- auth-to-shell events

This repo does not own:
- shell routing decisions outside auth routes
- shared layout widgets
- header/footer/profile/cards
- shell Redux internals

## Local Development

Requirements:
- Node `24.14.1`
- npm `10+`

Install and run:

```powershell
cd "D:\Repository's\Maddy tech site\maddy-login"
npm install
npm run start:dev
```

Default local port:
- `3001`

## Remote Contract

Module Federation container:
- `auth_remote`

Exposed modules:
- `./LoginScreen`
- `./SignupScreen`
- `./ForgetScreen`

## Shell Communication

The auth MFE communicates with the shell through browser events.

Emitted events:
- `maddy:auth-changed`
- `maddy:navigate`

Payloads are defined in:
- [eventBus.ts](/D:/Repository's/Maddy tech site/maddy-login/src/shared/lib/shell/eventBus.ts)

## Folder Direction

Recommended ownership inside this repo:
- `src/app`: app wiring and remote entry wrappers
- `src/features/auth`: auth feature code
- `src/services/api`: auth API clients
- `src/hooks`: auth-specific hooks
- `src/shared/components`: reusable auth UI parts
- `src/styles`: auth styling
