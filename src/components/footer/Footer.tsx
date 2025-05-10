import React from 'react'
import styles from './footer.module.css'  
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <p>© 2025 DesignWithUS. All rights reserved.</p>
        <Link href="#">Privacy Policy | Terms of Service</Link>
      </div>
      <div className={styles.social}>
        <Image src="/1.png" className={styles.icon} alt='Design with us Facebook Account' width={15} height={15}  />
        <Image src="/2.png" className={styles.icon} alt='Design with us Instagram Account' width={15} height={15}  />
        <Image src="/3.png" className={styles.icon} alt='Design with us Twitter Account' width={15} height={15}  />
        <Image src="/4.png" className={styles.icon} alt='Design with us Youtube Account' width={15} height={15}  />
      </div>
    </div>
  )
    


}

export default Footer
