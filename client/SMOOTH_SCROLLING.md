# Smooth Scrolling Features

This project now includes enhanced smooth scrolling animations and effects to improve user experience.

## Features Added

### 1. Enhanced CSS Smooth Scrolling
- **Custom scrollbar**: Styled scrollbar with brand colors
- **Smooth scroll behavior**: Enhanced with better timing functions
- **Scroll padding**: Accounts for fixed navbar

### 2. Scroll-Triggered Animations
- **Fade In Up**: Elements animate from bottom to top
- **Fade In Left**: Elements animate from left side
- **Fade In Right**: Elements animate from right side
- **Scale In**: Elements scale up from smaller size
- **Staggered animations**: Multiple elements animate with delays

### 3. Scroll Progress Indicator
- **Top progress bar**: Shows scroll progress at the top of the page
- **Gradient colors**: Uses brand colors for visual appeal
- **Smooth updates**: Real-time progress updates

### 4. Enhanced Scroll-to-Top
- **Floating button**: Appears when scrolling down
- **Smooth animation**: Smooth scroll to top functionality
- **Hover effects**: Interactive hover animations

### 5. Hover Animations
- **Smooth transitions**: All interactive elements have smooth hover effects
- **Scale effects**: Subtle scale animations on hover
- **Transform effects**: Smooth transform animations

## Usage

### Using the Custom Hook
```tsx
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const MyComponent = () => {
  const ref = useScrollAnimation<HTMLDivElement>('fade-in-up', 0.2);
  
  return (
    <div ref={ref} className="animate-on-scroll">
      Content here
    </div>
  );
};
```

### Using the AnimatedSection Component
```tsx
import AnimatedSection from '../components/AnimatedSection';

const MyComponent = () => {
  return (
    <AnimatedSection 
      animationType="fade-in-left" 
      stagger={0.1}
      className="my-custom-class"
    >
      Content here
    </AnimatedSection>
  );
};
```

### Animation Types
- `fade-in-up`: Element fades in from bottom
- `fade-in-left`: Element fades in from left
- `fade-in-right`: Element fades in from right
- `scale-in`: Element scales in from smaller size

### Stagger Delays
- `0`: No delay
- `0.1`: 100ms delay
- `0.2`: 200ms delay
- `0.3`: 300ms delay
- etc.

## CSS Classes Available

### Animation Classes
- `.animate-on-scroll`: Base class for scroll animations
- `.animate-fade-in-up`: Fade in from bottom animation
- `.animate-fade-in-left`: Fade in from left animation
- `.animate-fade-in-right`: Fade in from right animation
- `.animate-scale-in`: Scale in animation

### Stagger Classes
- `.stagger-1`: 100ms delay
- `.stagger-2`: 200ms delay
- `.stagger-3`: 300ms delay
- `.stagger-4`: 400ms delay
- `.stagger-5`: 500ms delay

### Utility Classes
- `.smooth-hover`: Smooth hover transitions
- `.scroll-progress`: Scroll progress indicator styling

## Components Enhanced

1. **HeroSection**: Logo and title animations
2. **About**: Staggered section animations
3. **Navbar**: Enhanced hover effects
4. **ScrollToTop**: Floating scroll-to-top button
5. **App**: Scroll progress indicator

## Browser Support

- Modern browsers with Intersection Observer API support
- Fallback for older browsers (animations won't trigger but content remains visible)
- Custom scrollbar works in WebKit browsers (Chrome, Safari, Edge)

## Performance

- Uses Intersection Observer API for efficient scroll detection
- Animations are optimized with CSS transforms
- Minimal JavaScript overhead
- Animations stop observing after triggering to improve performance 