import React, { Component, PropTypes } from 'react'
import styles from './header.scss'

import classnames from 'classnames'

import ProfileBar from '../ProfileBar'

const propTypes = {
  user: PropTypes.object.isRequired
}

class Header extends Component {
  constructor(props){
    super(props)
  }

  // handleOpenText(event){
  //   event.preventDefault()
  //   this.setState({ openText: true})
  // }

  render(){
    return(
      <header className={styles.root}>
        <div className={styles["column-left"]}>
          <h1 className={styles.logo}>ApostarWeb</h1>
        </div>
        <div className={classnames(styles["column-right"])}>
          <div className={classnames(styles["sub-header-left"])}>
            <span className={classnames(styles["fa-gear"], styles.fa, styles.icono)}></span>
            Configuración
          </div>
          <ProfileBar
            username={this.props.user.nombre}
          />
        </div>

      </header>
    )
  }
}

Header.propTypes = propTypes

export default Header
