import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function useFocusOnRouteChange() {
    const pathname = usePathname();

    useEffect(() => {
        
        const body = document.querySelector("body");

        if (body) {
            body.setAttribute("tabindex", "-1");
            body.focus();
            body.removeAttribute("tabindex");
        }
    },[pathname]);
}