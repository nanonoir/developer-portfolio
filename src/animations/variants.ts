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

export const heroArtFadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.35,
      ease: "easeOut",
    } as const,
  }
};

export const heroArtSpiral = {
  animate: {
    rotate: [-2, 1.5, -1, 2, -2],
    x: [0, 10, 4, -8, 0],
    y: [0, -8, 6, 10, 0],
  },
  transition: {
    duration: 14,
    ease: "easeInOut",
    repeat: Infinity,
  } as const,
};

export const aboutArtFadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.2,
      ease: "easeOut",
    } as const,
  }
};

export const aboutArtFloat = {
  animate: {
    y: [0, -12, 0, 8, 0],
    rotate: [-1.2, 0.6, -0.4, 1.2, -1.2],
  },
  transition: {
    duration: 10,
    ease: "easeInOut",
    repeat: Infinity,
  } as const,
};

export const footerReactSpin = {
  animate: { rotate: 360 },
  transition: {
    duration: 10,
    ease: "linear",
    repeat: Infinity,
  } as const,
};

export const footerTypeScriptWobble = {
  animate: { rotate: [-4, 4, -4] },
  transition: {
    duration: 2.8,
    ease: "easeInOut",
    repeat: Infinity,
  } as const,
};

export const footerTailwindWave = {
  animate: {
    x: [0, 2, -2, 0],
    y: [0, -1, 1, 0],
    rotate: [0, 2, -2, 0],
  },
  transition: {
    duration: 3.2,
    ease: "easeInOut",
    repeat: Infinity,
  } as const,
};

export const heroChevronPulse = {
  animate: {
    opacity: [0.2, 1, 0.2],
  },
  transition: {
    duration: 1.2,
    ease: "easeInOut",
    repeat: Infinity,
  } as const,
};
