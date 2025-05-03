import { useState, useEffect, RefObject } from 'react';

interface InViewOptions {
  threshold?: number;
  rootMargin?: string;
}

export const useInView = (
  ref: RefObject<Element>,
  options: InViewOptions = { threshold: 0.1, rootMargin: '0px' }
): boolean => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: options.threshold,
        rootMargin: options.rootMargin,
      }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options.threshold, options.rootMargin]);

  return isInView;
};