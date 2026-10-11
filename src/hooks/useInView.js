import { useState, useEffect, useRef } from 'react';

export const useInView = (options = { threshold: 0.02, rootMargin: '150px' }) => {
  const [isInView, setIsInView] = useState(true);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);

    observer.observe(el);
    return () => observer.disconnect();
  }, [options?.threshold, options?.rootMargin]);

  return [ref, isInView];
};

export default useInView;
