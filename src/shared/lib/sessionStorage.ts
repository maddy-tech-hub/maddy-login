interface SessionSnapshot {
  token: string;
  user: Record<string, unknown>;
}

const SESSION_STORAGE_KEY = 'maddy.session';

export const persistSessionSnapshot = (snapshot: SessionSnapshot): void => {
  window.localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(snapshot));
};

export const clearSessionSnapshot = (): void => {
  window.localStorage.removeItem(SESSION_STORAGE_KEY);
};
