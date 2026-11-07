import { useEffect, useState } from 'react';

/** Minimal History API router: enough for / and /projects/:id. */
export const navigate = (path: string) => {
  if (path === window.location.pathname) return;
  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
  window.scrollTo({ top: 0 });
};

export const usePath = (): string => {
  const [path, setPath] = useState(window.location.pathname);
  useEffect(() => {
    const onChange = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onChange);
    return () => window.removeEventListener('popstate', onChange);
  }, []);
  return path;
};

export const projectPath = (id: string) => `/projects/${id}`;
