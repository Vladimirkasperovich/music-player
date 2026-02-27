import { type RefObject, useEffect, useRef } from 'react';

export const useOutsideClick = <T extends HTMLElement>(
  enable: boolean,
  handler: () => void,
): RefObject<T | null> => {
  const ref = useRef<T>(null);
  const handlerRef = useRef(handler);
  useEffect(() => {
    const listener = (evt: MouseEvent) => {
      if (!enable) return;
      if (ref.current && !ref.current.contains(evt.target as Node)) {
        handlerRef.current();
      }
    };

    document.addEventListener('click', listener, true);
    return () => {
      document.removeEventListener('click', listener, true);
    };
  }, [enable]);

  return ref;
};
