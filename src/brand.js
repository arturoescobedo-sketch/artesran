import { useEffect } from 'react';

export const APP_NAME = 'ARTESRAN';
export const REPO_URL = 'https://github.com/arturoescobedo-sketch/artesran';

// Sets the browser tab title to "<page> | ARTESRAN".
export function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | ${APP_NAME}` : APP_NAME;
  }, [title]);
}
