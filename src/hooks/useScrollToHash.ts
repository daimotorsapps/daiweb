import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useScrollToHash() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const timer = setTimeout(() => {
                const element = document.getElementById(location.hash.slice(1));
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }, 100);
            return () => clearTimeout(timer);
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [location]);
}
