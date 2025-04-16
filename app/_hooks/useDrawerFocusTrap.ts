import { useEffect } from "react";

export function useDrawerFocusTrap(
    isOpen: boolean,
    trapRef: React.RefObject<HTMLElement | null>
) {
    useEffect(() => {
        if (!isOpen) return;

        const trapArea = trapRef.current;
        if (!trapArea) return;

        const focusableSelectors = [
            'a[href]',
            'button:not([disabled])',
            '[tabindex]:not([tabindex="-1"])',
        ];

        const focusableElements = trapArea.querySelectorAll<HTMLElement>(
            focusableSelectors.join(', ')
        );

        const firstEl = focusableElements[0];
        const lastEl = focusableElements[focusableElements.length - 1];

        const handleFocusTrap = (e: KeyboardEvent) => {
            if (e.key !== "Tab") return;

            if (e.shiftKey && document.activeElement === firstEl) {
                e.preventDefault();
                lastEl.focus();
            } else if (!e.shiftKey && document.activeElement === lastEl) {
                e.preventDefault();
                firstEl.focus();
            }
        };

        document.addEventListener("keydown", handleFocusTrap);
        return () => {
            document.removeEventListener("keydown", handleFocusTrap);
        };

    },[isOpen, trapRef]);
}