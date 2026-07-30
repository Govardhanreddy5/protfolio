import { useEffect, useState } from 'react';

const KONAMI_CODE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a'
];

export function useKonamiCode(onSuccess: () => void) {
  const [sequence, setSequence] = useState<string[]>([]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setSequence((prev) => {
        const updated = [...prev, e.key];
        if (updated.length > KONAMI_CODE.length) {
          updated.shift();
        }

        if (updated.join(',').toLowerCase() === KONAMI_CODE.join(',').toLowerCase()) {
          onSuccess();
          return [];
        }
        return updated;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onSuccess]);
}
