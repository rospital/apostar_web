import React, { Component, PropTypes } from 'react'

import styles from './menu-list.scss'

import MenuItem from '../MenuItem'

const propTypes = {
  menu: PropTypes.array.isRequired
}

class MenuList extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <ul className={styles.root}>
        {this.props.menu.map(item => {
          return(
              <MenuItem
                key={item.id}
                text={item.text}
                icon={item.icon}
              />
          )
        })}
      </ul>
    )
  }
}

MenuList.propTypes = propTypes

export default MenuList
