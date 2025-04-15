"use client";

import Link from "next/link";
import { NavItem } from "@/app/_constants/navData";
import styles from "./index.module.css";

type Props = {
  label: string;
  subItems?: NavItem["subItems"];
  isActive: boolean;
  onToggle: () => void;
  index: number;
};

export default function DropdownMenu({
  label,
  subItems,
  isActive,
  onToggle,
  index,
}: Props) {
  const panelId = `dropdown-panel-${index + 1}`;

  return (
    <>
      <button
        onClick={onToggle}
        className={styles.btn}
        type="button"
        aria-controls={panelId}
        aria-expanded={isActive}
        aria-label={`${label}のメニュー`}
      >
        <span className={`${styles.label} u-hover-line`}>{label}</span>
        <svg
          className={styles.arrow}
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="7"
          viewBox="0 0 11 7"
          fill="none"
        >
          <path
            d="M1 1L5.5 6L10 1"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div
        id={panelId}
        className={`${styles.panel} ${isActive ? styles.active : ""}`}
        aria-hidden={!isActive}
        // inert={!isActive ? "" : undefined}
      >
        <div className={styles.panelInner}>
          <ul className={styles.list}>
            {subItems?.map((subItem) => (
              <li key={subItem.label} className={styles.item}>
                <Link href={subItem.href} className={styles.link}>
                  <span className="u-hover-line">{subItem.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
