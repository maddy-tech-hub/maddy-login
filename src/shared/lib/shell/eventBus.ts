export interface ShellNavigationDetail {
  path: string;
  replace?: boolean;
}

export interface ShellAuthChangedDetail {
  token: string | null;
  user?: Record<string, unknown> | null;
}

interface ShellEventMap {
  'maddy:navigate': ShellNavigationDetail;
  'maddy:auth-changed': ShellAuthChangedDetail;
}

type ShellEventName = keyof ShellEventMap;

export const emitShellEvent = <TEventName extends ShellEventName>(
  eventName: TEventName,
  detail: ShellEventMap[TEventName]
): void => {
  window.dispatchEvent(new CustomEvent(eventName, { detail }));
};
