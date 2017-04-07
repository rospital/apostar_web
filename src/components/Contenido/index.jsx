import React, { Component } from 'react'
import uuid from 'uuid'

import styles from './contenido.scss'

import Buscador from '../Buscador'
import Lista from '../Lista'
import Forms from '../Forms'


class Contenido extends Component {

  constructor(){
    super()

    this.state = {
      menuActivo: 1,
      lista: [
        {
          id:uuid.v4(),
          text: 'Ricardo Ospitaletche',
          activo: true
        },
        {
          id:uuid.v4(),
          text: 'Ricardo Ospitaletche',
          activo: false
        },
        {
          id:uuid.v4(),
          text: 'Ricardo Ospitaletche',
          activo: true
        },
        {
          id:uuid.v4(),
          text: 'Ricardo Ospitaletche',
          activo: true
        },
        {
          id:uuid.v4(),
          text: 'Ricardo Ospitaletche',
          activo: true
        },
        {
          id:uuid.v4(),
          text: 'Ricardo Ospitaletche',
          activo: true
        },
        {
          id:uuid.v4(),
          text: 'Ricardo Ospitaletche',
          activo: true
        },
        {
          id:uuid.v4(),
          text: 'Ricardo Ospitaletche',
          activo: true
        },
        {
          id:uuid.v4(),
          text: 'Ricardo Ospitaletche',
          activo: true
        },
        {
          id:uuid.v4(),
          text: 'Ricardo Ospitaletche',
          activo: true
        }
      ]
    }

    this.handleSendForm = this.handleSendForm.bind(this)
    this.handleActive = this.handleActive.bind(this)
  }



  handleActive(){

  }

  handleSendForm(event){
    event.preventDefault()
    let newItem = {
      id:uuid.v4(),
      text: event.target.email.value,
      activo: true
    }
    this.setState(
      {
        lista: this.state.lista.concat([newItem])
      }
    )
  }


  render () {
    return (
      <section className={styles.root}>
        <Forms
          onSendForm={this.handleSendForm}
        />
        <Buscador />
        <Lista
          lista={this.state.lista}
          onActive={this.handleActive}
          menuActivo={this.state.menuActivo}
        />
      </section>
    )
  }
}

export default Contenido
