import { useEffect, useState } from "react";

const useScreenWidth = () => {
    const [screenWidth, setScreenWidth] = useState(0);

    useEffect(() => {
        if (window !== undefined) {
            const handleResize = () => {
                let resolutionWidth = 0;
                resolutionWidth = window?.innerWidth;
                setScreenWidth(resolutionWidth);
            }

            window?.addEventListener("resize", handleResize);
            handleResize();
            return () => {
                window?.removeEventListener("resize", handleResize);
            }
        }
    }, []);

    return {
        screenWidth
    }
}

export default useScreenWidth;