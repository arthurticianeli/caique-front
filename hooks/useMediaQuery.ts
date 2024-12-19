import { useEffect, useState } from 'react';

const useMediaQuery = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [isSmall, setIsSmall] = useState<boolean>(false);
    const [isTablet, setIsTablet] = useState<boolean>(false);
    const [isDesktopLg, setIsDesktopLg] = useState<boolean>(false);
    const [isDesktopXl, setIsDesktopXl] = useState<boolean>(false);

    useEffect(() => {
        const mobileQuery = window.matchMedia('(max-width: 576px)');
        const smallQuery = window.matchMedia('(min-width: 577px) and (max-width: 767px)');
        const tabletQuery = window.matchMedia('(min-width: 768px) and (max-width: 1024px)');
        const desktopLgQuery = window.matchMedia('(min-width: 1025px) and (max-width: 1440px)');
        const desktopXlQuery = window.matchMedia('(min-width: 1441px)');

        const handleMediaQueryChange = () => {
            setIsMobile(mobileQuery.matches);
            setIsSmall(smallQuery.matches);
            setIsTablet(tabletQuery.matches);
            setIsDesktopLg(desktopLgQuery.matches);
            setIsDesktopXl(desktopXlQuery.matches);
        };

        // Set the initial state
        handleMediaQueryChange();

        // Listen for changes
        mobileQuery.addEventListener('change', handleMediaQueryChange);
        smallQuery.addEventListener('change', handleMediaQueryChange);
        tabletQuery.addEventListener('change', handleMediaQueryChange);
        desktopLgQuery.addEventListener('change', handleMediaQueryChange);
        desktopXlQuery.addEventListener('change', handleMediaQueryChange);

        // Cleanup listeners on unmount
        return () => {
            mobileQuery.removeEventListener('change', handleMediaQueryChange);
            smallQuery.removeEventListener('change', handleMediaQueryChange);
            tabletQuery.removeEventListener('change', handleMediaQueryChange);
            desktopLgQuery.removeEventListener('change', handleMediaQueryChange);
            desktopXlQuery.removeEventListener('change', handleMediaQueryChange);
        };
    }, []);

    return { isMobile, isSmall, isTablet, isDesktopLg, isDesktopXl };
};

export default useMediaQuery;