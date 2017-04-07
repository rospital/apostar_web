import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router-dom'

import styles from './lista-item.scss'
import classnames from 'classnames'

const propTypes = {
  menuActivo: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onActive: PropTypes.func.isRequired,
}

class ListaItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pressActive: false
    }

    this.onPressActive = this.onPressActive.bind(this)
  }

  onPressActive(){
    this.props.onActive()

    this.setState({
      pressActive: true
    })
  }

  render(){
    let editLink = `/edit/${this.props.menuActivo}/${this.props.id}`

    return(
      <div className={styles.root}>
        <div>
          {this.props.text}
        </div>
        <div className="buttons">
          <Link to={editLink}>
            <div className={classnames(styles.fa, styles["fa-pencil"], styles.icono)}></div>
          </Link>
          <div className={classnames(styles.fa, styles["fa-close"], styles.icono)}></div>
          <div
              className={classnames(styles.fa, styles["fa-check"], styles.icono, (this.state.pressActive)? styles.colorActivo : '')}
              onClick={this.onPressActive}
          >
          </div>


        </div>
      </div>
    )
  }
}

ListaItem.propTypes = propTypes

export default ListaItem
