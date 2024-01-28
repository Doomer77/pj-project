import { getTags } from '../pages/api/tags'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import mouseIcon from '../assets/images/mouse.svg'
import logo from '../assets/images/logo.png'
import styles from '@/styles/Home.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import TagList from '@/components/shared/tag-list/TagList'
import { Button } from '@/components/ui/button/Button'
import { Tag } from '@/components/shared/tag-list/props'

export default function Home() {
  const [tags, setTags] = useState<Tag[]>([])

  useEffect(() => {
    getTags().then((data) => {
      setTags(data)
    })
  }, [])

  return (
    <>
      <Head>
        <title>P.J.Web Desing</title>
      </Head>
      <main>
        <section className={styles.header_section}>
          <header className={styles.header}>
            <div className={styles.log_box}>
              <Link href="/" className={styles.nav_link_logo}>
                <Image src={logo} alt="" className={styles.logo} />
                <p className={styles.presentation_big}>Fox Developer Portal</p>
              </Link>
            </div>
            <nav className={styles.nav_box}>
              <ul className={styles.nav_list}>
                <li className={styles.nav_item}>
                  <Link href="/home" className={styles.nav_link}>
                    Главная
                  </Link>
                </li>
                <li className={styles.nav_item}>
                  <Link href="/blog" className={styles.nav_link}>
                    Статьи
                  </Link>
                </li>
                <li className={styles.nav_item}>
                  <Link href="/exemples" className={styles.nav_link}>
                    Разработка
                  </Link>
                </li>
                <li className={styles.nav_list_item}>
                  <Link href="/registration" className={styles.nav_link}>
                    Регистрация
                  </Link>
                </li>
                <li className={styles.nav_list_item}>
                  <Link href="/login" className={styles.nav_link}>
                    Войти
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
          <div className={styles.presentation}>
            <div className={styles.presentation_block}>
              <p className={styles.presentation_small}>
                <span className={styles.presentation_small_heading}>
                  Fox Developer Portal
                </span>
              </p>
              <p className={styles.presentation_small}>
                Российский портал для разработчиков.
              </p>
              <p className={styles.presentation_small}>
                Присоединяйтесь к команде авторов и пишите полезные статьи по
                разработке.
              </p>
              <Button text="Создать статью" />
            </div>
          </div>
          <div className={styles.mouse_down}>
            <Image src={mouseIcon} alt="Вниз" className={styles.mouse_icon} />
          </div>
        </section>
        <section className={styles.tags}>
          <TagList tags={tags} />
        </section>
      </main>
    </>
  )
}
