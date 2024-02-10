import { getTags } from '../pages/api/tags'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import mouseIcon from '../assets/images/mouse.svg'
import styles from '@/styles/Home.module.scss'
import Image from 'next/image'
import TagList from '@/components/shared/tag-list/TagList'
import { Button } from '@/components/ui/button/Button'
import { Tag } from '@/components/shared/tag-list/props'
import { Header } from '@/components/header/Header'

export default function Home(): JSX.Element {
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
          <Header variant="ghost" />
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
