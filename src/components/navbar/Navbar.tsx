"use client"
import Link from 'next/link'
import React from 'react'
import { links } from '@/utils/navdata'

const Navbar = () => {
  return (
    <div>
      <Link href='/'>DesignWithUs</Link>
      <div>
        {links.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
        <button
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
