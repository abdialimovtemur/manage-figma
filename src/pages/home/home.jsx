import React from 'react'
import style from './home.module.css'
import Header from '../../components/header/header'
import Hero from '../../components/hero/hero'
import About from '../../components/about/about'
import Said from '../../components/said/said'
import Team_work from '../../components/team_work/team_work'

export const Home = () => {
  return (
    <div>
      <div className={style.main_card}><Header/></div>
      <div><Hero/></div>
      <div><About/></div>
      <div><Said/></div>
      <div><Team_work/></div>
    </div>

  )
}