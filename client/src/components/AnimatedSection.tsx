import React, { ReactNode } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: ReactNode;
  animationType?: 'fade-in-up' | 'fade-in-left' | 'fade-in-right' | 'scale-in';
  stagger?: number;
  className?: string;
  as?: React.ElementType;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animationType = 'fade-in-up',
  stagger = 0,
  className = '',
  as: Component = 'div'
}) => {
  const ref = useScrollAnimation<HTMLElement>(animationType, stagger);

  return (
    <Component
      ref={ref}
      className={`animate-on-scroll ${className}`}
    >
      {children}
    </Component>
  );
};

export default AnimatedSection; 