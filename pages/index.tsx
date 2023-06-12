import Head from 'next/head'
import logo from '../assets/images/logo.svg'
import mouseIcon from '../assets/images/mouse.svg'
import blogIcon from '../assets/images/blog.svg'
import exempleIcon from '../assets/images/examples.svg'
import regIcon from '../assets/images/reg.svg'
import inputIcon from '../assets/images/input.svg'
import styles from '@/styles/Home.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>P.J.Web Desing</title>
      </Head>
      <main>
        <section className={styles.header_section}>
          <header className={styles.header}>
            <div className={styles.log_box}>
              <Link href="/">
                <Image src={logo} alt="Разработка сайтов и приложений" />
              </Link>
            </div>
            <nav className={styles.nav_box}>
              <ul className={styles.nav_list}>
                <li className={styles.nav_item}>
                  <Image
                    src={blogIcon}
                    alt="Блог"
                    className={styles.nav_icon}
                  />
                  <Link href="/blog" className={styles.nav_link}>
                    Блог
                  </Link>
                </li>
                <li className={styles.nav_item}>
                  <Image
                    src={exempleIcon}
                    alt="Примеры работ"
                    className={styles.nav_icon}
                  />
                  <Link href="/exemples" className={styles.nav_link}>
                    Примеры работ
                  </Link>
                </li>
              </ul>
            </nav>
            <div className={styles.nav_user}>
              <ul className={styles.nav_list_user}>
                <li className={styles.nav_list_item}>
                  <Image
                    src={regIcon}
                    alt="Регистрация"
                    className={styles.nav_icon}
                  />
                  <Link href="/registration" className={styles.nav_link}>
                    Регистрация
                  </Link>
                </li>
                <li className={styles.nav_list_item}>
                  <Image
                    src={inputIcon}
                    alt="Авторизация"
                    className={styles.nav_icon}
                  />
                  <Link href="/login" className={styles.nav_link}>
                    Войти
                  </Link>
                </li>
              </ul>
            </div>
          </header>
          <div className={styles.presentation}>
            <h1 className={styles.presentation_big}>P.J.PARTS web Desing</h1>
            <h2 className={styles.presentation_small}>
              разработка и сопровождение
              <br /> современных сайтов и приложений
            </h2>
            <button className={styles.presentation_btn}>заказать проект</button>
          </div>
          <div className={styles.mouse_down}>
            <Image src={mouseIcon} alt="Вниз" className={styles.mouse_icon} />
          </div>
        </section>
      </main>
    </>
  )
}
