import React, {Component, PropTypes} from 'react'

import classnames from 'classnames'
import styles from './menu-item.scss'

const propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

class MenuItem extends Component
{
  constructor(props){
      super(props)
  }
  render(){
    return(
        <li className={styles.root}>

          <span className={classnames(styles.fa, styles["fa-"+this.props.icon])}/>
          <span className={styles.text}>{this.props.text}</span>
        </li>
    )
  }
}

MenuItem.propTypes = propTypes

export default MenuItem
