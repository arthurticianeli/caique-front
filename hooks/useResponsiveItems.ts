import { useEffect, useState } from "react";

const useResponsiveItems = (): number => {
    const [itemsToShow, setItemsToShow] = useState(2);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 450) {
                setItemsToShow(4);
            } else if (window.innerWidth < 768) {
                setItemsToShow(6);
            } else if (window.innerWidth < 992) {
                setItemsToShow(6);
            } else if (window.innerWidth < 1200) {
                setItemsToShow(8);
            } else {
                setItemsToShow(10);
            }
        };

        handleResize(); // Chama a função uma vez para definir o estado inicial
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return itemsToShow;
};

export default useResponsiveItems;
