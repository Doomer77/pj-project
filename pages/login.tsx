import { useEffect, useState } from 'react'
import { login, User } from './api/login'
import { Header } from '@/components/header/Header'
import styles from '@/styles/Login.module.scss'
import Head from 'next/head'

export default function Login(): JSX.Element {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  useEffect(() => {
    login('foo@foo.ru', '123').then((data) => {
      console.log(data)
    })
  }, [])

  return (
    <>
      <Head>
        <title>P.J.Web Desing</title>
      </Head>
      <section className={styles.login}>
        <Header variant="violet" />
      </section>
    </>
  )
}
