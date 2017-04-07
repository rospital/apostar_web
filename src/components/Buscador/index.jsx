import React, { Component } from 'react'

import styles from './buscador.scss'
import classnames from 'classnames'

class Buscador extends Component{
  constructor() {
    super()
  }

  render(){
    return(
      <div className={styles.contenedor}>
        Buscador
        <button className={styles.button}>
          Agregar
        </button>
      </div>
    )
  }
}

export default Buscador
