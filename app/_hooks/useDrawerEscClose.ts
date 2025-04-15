import { useEffect } from "react";

export function useDrawerEscClose(
    isOpen: boolean,
    setIsOpen: (val: boolean) => void,
    setDrawerActiveIndex: (index: number | null) => void
) {
    useEffect(() => {
        if(!isOpen) return;

        const handleEscKey = (e:KeyboardEvent) => {
            if(e.key === "Escape") {
                setIsOpen(false);
                setDrawerActiveIndex(null);
                console.log("Escキーで閉じる")
            }
        };

        document.addEventListener("keydown", handleEscKey);
        return () => document.removeEventListener("keydown", handleEscKey)

    },[isOpen, setIsOpen, setDrawerActiveIndex]);
}