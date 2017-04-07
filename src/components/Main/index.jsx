import React, { Component } from 'react'


import styles from './main.scss'
import classnames from 'classnames'

import AsideIzq from  '../AsideIzq'
import Contenido from  '../Contenido'

class Main extends Component {

  constructor(){
    super()
    this.state = {

    }
  }

  render () {
    return (
      <section className={styles.root}>
        <AsideIzq />
        <Contenido />
      </section>
    )
  }
}

export default Main
