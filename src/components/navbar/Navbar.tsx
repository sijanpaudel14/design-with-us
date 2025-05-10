"use client"
import Link from 'next/link'
import React from 'react'
import { links } from '@/utils/navdata'
import styles from './navbar.module.css'


const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href='/' className={styles.logo}>DesignWithUs</Link>
      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} className={styles.link} href={link.url}>
            {link.title}
          </Link>
        ))}
        <button className={styles.logout}
          onClick={() => {
            console.log('Logout')
          }}
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default Navbar
