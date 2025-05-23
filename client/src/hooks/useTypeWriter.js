import { useEffect, useState } from 'react';

export default function useTypewriterWithBackspace(words, speed = 50, pause = 1500) {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (!isDeleting && charIndex < currentWord.length) {
      timeout = setTimeout(() => {
        setText((prev) => prev + currentWord[charIndex]);
        setCharIndex((i) => i + 1);
      }, speed);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((i) => i - 1);
      }, speed);
    } else {
      timeout = setTimeout(() => {
        setIsDeleting((prev) => !prev);

        if (!isDeleting) {
          // wait to delete after finishing typing
          return;
        }

        // move to next word after deleting
        setWordIndex((i) => (i + 1) % words.length);
      }, pause);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex, words, speed, pause]);

  return text;
}
