import { MutableRefObject, useEffect, useRef, useState } from "react";

interface UseInViewOptions {
    root?: Element | null;
    rootMargin?: string;
    threshold?: number | number[];
}

const useInView = (options?: UseInViewOptions): [MutableRefObject<null | HTMLElement>, boolean] => {
    const [inView, setInView] = useState(false);
    const ref = useRef<null | HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setInView(entry.isIntersecting);
            },
            options
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [options]);

    return [ref, inView];
};

export default useInView;
