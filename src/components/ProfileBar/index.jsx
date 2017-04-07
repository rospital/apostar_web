import React, { Component, PropTypes } from 'react'
import styles from './profilebar.scss'

const propTypes = {
  username: PropTypes.string.isRequired
}

class ProfileBar extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render () {
    return (
      <div className={styles.root}>
        {this.props.username}
      </div>
    )
  }
}

export default ProfileBar
