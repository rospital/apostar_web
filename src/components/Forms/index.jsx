import React, { Component, PropTypes } from 'react'

import styles from './forms.scss'

const propTypes = {
  onSendForm: PropTypes.func.isRequired
}

class Forms extends Component{
  constructor() {
    super()
  }


  render(){
    return(
      <form className={styles.root} onSubmit={this.props.onSendForm}>
        <label className={styles.label}>
          <div>Nombre</div>
          <input type="text" name="email" className={styles.text} />
        </label>
        <div className={styles.botones}>
          <button className={styles.button} type='submit'>
            Enviar
          </button>
        </div>

      </form>
    )
  }
}

Forms.propTypes = propTypes

export default Forms
