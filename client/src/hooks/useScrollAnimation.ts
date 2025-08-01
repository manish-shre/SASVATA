import { useEffect, useRef } from 'react';

export const useScrollAnimation = <T extends HTMLElement = HTMLElement>(
  animationType: 'fade-in-up' | 'fade-in-left' | 'fade-in-right' | 'scale-in' = 'fade-in-up', 
  stagger: number = 0
) => {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation class with delay
            setTimeout(() => {
              entry.target.classList.add(`animate-${animationType}`);
            }, stagger * 1000);
            
            // Stop observing after animation
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [animationType, stagger]);

  return elementRef;
}; 