import { useState } from "react";
import type { TouchEvent } from "react";

type UseProjectCarouselOptions = {
    imageCount: number;
    swipeThreshold?: number;
};

export const useProjectCarousel = ({
    imageCount,
    swipeThreshold = 40,
}: UseProjectCarouselOptions) => {
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [touchStartX, setTouchStartX] = useState<number | null>(null);
    const hasMultipleImages = imageCount > 1;

    const goToPreviousImage = () => {
        setActiveImageIndex((currentIndex) =>
            currentIndex === 0 ? imageCount - 1 : currentIndex - 1
        );
    };

    const goToNextImage = () => {
        setActiveImageIndex((currentIndex) =>
            currentIndex === imageCount - 1 ? 0 : currentIndex + 1
        );
    };

    const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
        if (!hasMultipleImages) {
            return;
        }

        setTouchStartX(event.touches[0]?.clientX ?? null);
    };

    const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
        if (!hasMultipleImages || touchStartX === null) {
            return;
        }

        const touchEndX = event.changedTouches[0]?.clientX;

        if (typeof touchEndX !== "number") {
            setTouchStartX(null);
            return;
        }

        const swipeDistance = touchStartX - touchEndX;

        if (Math.abs(swipeDistance) < swipeThreshold) {
            setTouchStartX(null);
            return;
        }

        if (swipeDistance > 0) {
            goToNextImage();
        } else {
            goToPreviousImage();
        }

        setTouchStartX(null);
    };

    return {
        activeImageIndex,
        hasMultipleImages,
        goToNextImage,
        goToPreviousImage,
        handleTouchEnd,
        handleTouchStart,
        setActiveImageIndex,
    };
};
