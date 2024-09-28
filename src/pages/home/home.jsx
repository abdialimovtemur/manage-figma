import React from 'react'
import style from './home.module.css'
import Header from '../../components/header/header'

export const Home = () => {
  return (
    <h1 className={style.main_card}><Header/></h1>
  )
}