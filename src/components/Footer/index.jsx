import React, { Component } from 'react'
import styles from './footer.scss'

import classnames from 'classnames'

class Footer extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <footer className={styles.root}>
        {this.props.nombre}
      </footer>
    )
  }
}

export default Footer
