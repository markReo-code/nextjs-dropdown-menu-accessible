"use client";

import {  useRef, useState } from "react";
import { useResetOnRoute } from "@/app/_hooks/useResetOnRoute";
import { useDrawerResize } from "@/app/_hooks/useDrawerResize";
import { useDrawerEscClose } from "@/app/_hooks/useDrawerEscClose";
import { useDrawerFocusTrap } from "@/app/_hooks/useDrawerFocusTrap";
import Link from "next/link";
import { navItems } from "@/app/_constants/navData";
import styles from "./index.module.css";
import HeaderNav from "../HeaderNav";
import Drawer from "../Drawer";
import DrawerButton from "../DrawerButton";

export default function Header() {
  // 状態（useState）
  const [pcActiveIndex, setPcActiveIndex] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [drawerActiveIndex, setDrawerActiveIndex] = useState<number | null>(null);

  // 参照（useRef）
  const headerInnerRef = useRef<HTMLDivElement>(null); 

   // カスタムフック（useXxx）
  useResetOnRoute(setIsOpen, setDrawerActiveIndex, setPcActiveIndex);
  useDrawerResize(setIsOpen, setDrawerActiveIndex);
  useDrawerEscClose(isOpen, setIsOpen, setDrawerActiveIndex);
  useDrawerFocusTrap(isOpen, headerInnerRef);

  return (
    <header className={styles.header}>
      <div className={styles.inner} ref={headerInnerRef}>
        <div className={`${styles.logo} ${isOpen ? styles.open : ""}`}>
          <Link href="/">Brand</Link>
        </div>

        <HeaderNav
          navItems={navItems}
          pcActiveIndex={pcActiveIndex}
          setPcActiveIndex={setPcActiveIndex}
        />

        <Drawer
          isOpen={isOpen}
          navItems={navItems}
          drawerActiveIndex={drawerActiveIndex}
          setDrawerActiveIndex={setDrawerActiveIndex}
        />

        <DrawerButton isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </header>
  );
}
