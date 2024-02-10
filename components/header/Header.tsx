import Link from 'next/link'
import Image from 'next/image'
import logo from '@/assets/images/logo.png'
import styles from './Header.module.scss'
import { HeaderProps } from './HeaderProps'
import cn from 'classnames'

export const Header = ({ variant }: HeaderProps): JSX.Element => {
  return (
    <header
      className={cn(styles.header, {
        [styles.ghost]: variant === 'ghost',
        [styles.violet]: variant === 'violet',
      })}
    >
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
            <Link href="/development" className={styles.nav_link}>
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
  )
}
