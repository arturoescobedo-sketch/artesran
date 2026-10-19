import { useEffect } from 'react';

export const APP_NAME = 'ARTESRAN';

// Sets the browser tab title to "<page> | ARTESRAN".
export function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | ${APP_NAME}` : APP_NAME;
  }, [title]);
}
