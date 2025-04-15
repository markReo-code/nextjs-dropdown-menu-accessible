
import { useRef } from "react";
import { useOutsideClick } from "@/app/_hooks/useOutsideClick";
import Link from "next/link";
import { NavItem } from "@/app/_constants/navData";
import styles from "./index.module.css";
import DropdownMenu from "@/app/_components/DropdownMenu";

type Props = {
  isOpen: boolean;
  navItems: NavItem[];
  drawerActiveIndex: number | null;
  setDrawerActiveIndex: (index: number | null) => void;
};

export default function Drawer({ isOpen, navItems, drawerActiveIndex, setDrawerActiveIndex }: Props) {

  const drawerListRef = useRef<HTMLUListElement>(null);

  useOutsideClick(drawerListRef, () => {
    if (isOpen) {
      setDrawerActiveIndex(null);
    }
  });

  return (
    <div
      id="drawer"
      className={`${styles.drawer} ${isOpen ? styles.open : ""}`}
      aria-hidden={!isOpen}
    >
      <div className={styles.inner}>
        <ul className={styles.list} ref={drawerListRef}>
          {navItems.map((item, index) => (
            <li key={item.label} className={styles.item}>
              {item.subItems ? (
                  <DropdownMenu
                    label={item.label}
                    subItems={item.subItems}
                    isActive={drawerActiveIndex === index}
                    onToggle={() =>
                      setDrawerActiveIndex(drawerActiveIndex === index ? null : index)
                    }
                    index={index}
                  />
              ) : item.href ? (
                <Link href={item.href} className={styles.link}>
                  <span className={styles.label}>{item.label}</span>
                </Link>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
