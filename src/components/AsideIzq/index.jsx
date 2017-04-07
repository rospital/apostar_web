import React, { Component } from 'react'


import MenuList from '../MenuList'

import styles from './asideizq.scss'

class AsideIzq extends Component {

  constructor(){
    super()
    this.state = {
      menu: [
        {
          id:1,
          text: 'Publicadores',
          icon: 'edit'
        },
        {
          id:2,
          text: 'Vendedores',
          icon: 'group'
        },
        {
          id:3,
          text: 'Tickets',
          icon: 'money'
        },
        {
          id:4,
          text: 'Eventos',
          icon: 'futbol-o'
        }
      ]
    }
  }

  render () {
    return (
      <aside className={styles.root}>
        <MenuList menu={this.state.menu} />
      </aside>
    )
  }
}

export default AsideIzq
