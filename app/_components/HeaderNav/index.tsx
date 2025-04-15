"use client";

import { useRef } from "react";
import { useOutsideClick } from "@/app/_hooks/useOutsideClick";
import Link from "next/link";
import styles from "./index.module.css";
import { NavItem } from "@/app/_constants/navData";
import DropdownMenu from "@/app/_components/DropdownMenu";

type Props = {
    navItems: NavItem[];
    pcActiveIndex: number | null;
    setPcActiveIndex: (index: number | null) => void;
}

export default function HeaderNav({ navItems, pcActiveIndex, setPcActiveIndex}: Props) {

    const navRef = useRef<HTMLDivElement>(null);

    useOutsideClick(navRef, () => {
        setPcActiveIndex(null);
    });
   
    return (
        <nav className={styles.nav} ref={navRef}>
            <ul className={styles.list}>
                {navItems.map((item, index) => (
                    <li key={item.label} className={styles.item}>
                        {item.subItems ? (
                             <DropdownMenu 
                               label={item.label} 
                               subItems={item.subItems}
                               isActive={pcActiveIndex === index}
                               onToggle={() => setPcActiveIndex(pcActiveIndex === index ? null : index)}
                               index={index}
                             />
                        ) : item.href ? (
                            <Link href={item.href} className={styles.link}>
                                <span className={`${styles.label} u-hover-line`}>{item.label}</span>
                            </Link>
                        ) : null}
                    </li>
                ))}
            </ul>
        </nav>
    )
}