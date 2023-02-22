export function setSessionState(key: string, value: string) {
  window.sessionStorage.setItem(key, value);
}

export function removeSessionState(key: string) {
  window.sessionStorage.removeItem(key);
}

export function getSessionState(key: string): string | null {
  return window.sessionStorage.getItem(key);
}
