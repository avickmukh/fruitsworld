import React from 'react'
import Link from 'next/link'
import styles from '@/styles/Header.module.css'

export default function Header() {
  return (
    <header className={styles?.header}>
    <div className={styles?.logo}>
        <Link href='/'>
        <a>Fruits</a>
        </Link>
    </div>
      <nav>
        <ul>
            <li>
                <Link href='/fruits'>
                    <a>Fruits</a>
                    </Link>
            </li>
        </ul>
      </nav>
    </header>
  );
}
