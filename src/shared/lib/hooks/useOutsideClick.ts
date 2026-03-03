import { type RefObject, useEffect, useRef } from 'react';

export const useOutsideClick = <T extends HTMLElement>(
  enable: boolean,
  handler: () => void,
): RefObject<T | null> => {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!enable) return;
    const listener = (evt: MouseEvent) => {
      const elem = ref.current;
      if (!elem) return;
      if (!elem.contains(evt.target as Node)) {
        handler();
      }
    };

    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [enable, handler]);

  return ref;
};
