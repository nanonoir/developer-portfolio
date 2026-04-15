let currentScrollAnimationFrame: number | null = null;

const easeInOutCubic = (progress: number) => {
    if (progress < 0.5) {
        return 4 * progress * progress * progress;
    }

    return 1 - Math.pow(-2 * progress + 2, 3) / 2;
};

export const scrollToSection = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);

    if (!targetElement) {
        return;
    }

    const headerElement = document.querySelector("[data-site-header]") as HTMLElement | null;
    const headerHeight = headerElement?.offsetHeight ?? 0;
    const targetTop = window.scrollY + targetElement.getBoundingClientRect().top - headerHeight;
    const nextScrollTop = Math.max(targetTop, 0);

    const targetHash = `#${sectionId}`;

    if (window.location.hash !== targetHash) {
        window.history.pushState(null, "", targetHash);
    }

    if (currentScrollAnimationFrame !== null) {
        window.cancelAnimationFrame(currentScrollAnimationFrame);
        currentScrollAnimationFrame = null;
    }

    const startY = window.scrollY;
    const distance = nextScrollTop - startY;

    if (Math.abs(distance) < 4) {
        window.scrollTo(0, nextScrollTop);
        return;
    }

    const duration = 650;
    const startTime = performance.now();

    const animateScroll = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeInOutCubic(progress);
        const nextY = startY + distance * easedProgress;

        window.scrollTo(0, nextY);

        if (progress < 1) {
            currentScrollAnimationFrame = window.requestAnimationFrame(animateScroll);
            return;
        }

        window.scrollTo(0, nextScrollTop);
        currentScrollAnimationFrame = null;
    };

    currentScrollAnimationFrame = window.requestAnimationFrame(animateScroll);
};
