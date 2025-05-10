import Image from 'next/image'
import React from 'react'
import Hero from '@/../public/hero.png'
import styles from './page.module.css'

const Home = () => {
  return (
    <div  className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design for your digital products.</h1>
        <p className={styles.desc}>
          Turning your idea into reality. We bring together the teams from the
          global tech industry.
        </p>
        <button className={styles.button}> See Our Works</button>
      </div>

      <div className={styles.item}>
      <Image src={Hero} alt='Hero Image' className={styles.img} />
      </div>
    </div>
  )
}

export default Home
