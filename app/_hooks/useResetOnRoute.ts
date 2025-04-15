import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function useResetOnRoute(
    setIsOpen: (val: boolean) => void,
    setDrawerActiveIndex: (index: number | null) => void,
    setPcActiveIndex: (index: number | null) => void
) {

    const pathname = usePathname();

    useEffect(() => {
        // 追記 start
        if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
        }
        //追記 end

        setIsOpen(false);
        setDrawerActiveIndex(null)
        setPcActiveIndex(null)
    }, [pathname, setIsOpen, setDrawerActiveIndex, setPcActiveIndex]);
}