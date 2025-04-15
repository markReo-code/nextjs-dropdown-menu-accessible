import { useEffect, useRef } from "react";

export function useDrawerResize(
    setIsOpen: (val: boolean) => void,
    setDrawerActiveIndex: (index: number | null) => void
) {
    const prevWidth = useRef<number | null>(null);

    useEffect(() => {
        prevWidth.current = window.innerWidth; // 前回のブラウザ幅を記憶

        const handleResize = () => {
            const width = window.innerWidth; //現在のブラウザ幅

            if (prevWidth.current !== null && prevWidth.current < 769 && width >= 769) {
                setIsOpen(false);
                setDrawerActiveIndex(null);
            }

            prevWidth.current = width;　//今回の幅を保存 → 次回比較用に更新
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize)
        
    },[setIsOpen, setDrawerActiveIndex]);
}