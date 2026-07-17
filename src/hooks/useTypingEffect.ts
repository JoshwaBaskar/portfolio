import { useEffect, useState } from 'react';

function useTypingEffect(strings: string[], speed = 80, delSpeed = 40, pause = 2000) {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    const current = strings[index];
    const timeout = setTimeout(() => {
      if (!deleted) {
        setText(current.slice(0, text.length + 1));
        if (text === current) {
          setDeleted(true);
        }
      } else {
        if (text === '') {
          setDeleted(false);
          setIndex((prev) => (prev + 1) % strings.length);
        } else {
          setText(current.slice(0, text.length - 1));
        }
      }
    }, deleted ? delSpeed : text === current ? pause : speed);

    return () => clearTimeout(timeout);
  }, [text, deleted, index, strings, speed, delSpeed, pause]);

  return text;
}

export default useTypingEffect;
