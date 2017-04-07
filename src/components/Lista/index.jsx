import React, { Component, PropTypes } from 'react'

import styles from './lista.scss'
import classnames from 'classnames'

import ListaItem from '../ListaItem'

const propTypes = {
  lista: PropTypes.array.isRequired,
  menuActivo: PropTypes.number.isRequired,
  onActive: PropTypes.func.isRequired
}

class Lista extends Component {
  constructor(props) {
    super(props)

    //this.onActive = this.onActive.bind(this)
  }


  render(){
    return(
      <div>
        {
          this.props.lista.map(
            item=>{
              return(
                <ListaItem
                  key={item.id}
                  id={item.id}
                  text={item.text}
                  activo={item.activo}
                  onActive={()=>this.props.onActive(item.id)}
                  menuActivo={this.props.menuActivo}
                />
              )
            }
          ).reverse()
        }
      </div>
    )
  }
}

Lista.propTypes = propTypes

export default Lista
