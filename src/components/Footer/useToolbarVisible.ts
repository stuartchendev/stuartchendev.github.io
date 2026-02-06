import {useEffect, useState} from "react";

function useToolbarVisible(threshold  = 800) {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        const onScroll = () => {
            setIsVisible(window.scrollY > threshold );
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [threshold]);

    return isVisible;
}

export default useToolbarVisible;