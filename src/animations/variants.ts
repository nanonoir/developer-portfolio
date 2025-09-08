import type { Direction } from "../types";

export const mainContainer = (direction: Direction) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      staggerDirection: direction === 'down' ? 1 : -1,
    } as const,
  }
});

export const secondaryContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    }
  }
};

export const fadeInUp = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    }
  }
};

export const fadeInRight = {
  hidden: { x: 400, opacity: 0},
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 50,
      damping: 10,
      delay: 0.5
    } as const,
  }
};

export const fadeInLeft = {
  hidden: { x: -200, opacity: 0},
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 50,
      damping: 10,
    } as const,
  }
};