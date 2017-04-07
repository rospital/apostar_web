import React, { Component, PropTypes } from 'react'
import styles from './login.scss'

import classnames from 'classnames'

const propTypes = {
  onAuth: PropTypes.func.isRequired
}

class Login extends Component {
  constructor() {
    super()
  }
  render(){
    return(
      <div className={styles.root}>
        <div className={classnames(styles.contenedor, styles.contenido)}>
          <h2>
            Inicia sesión
          </h2>
          <form className={styles.form} onSubmit={this.props.onSendForm}>
              <label className={styles.label}>
                <div>Email</div>
                <input type="text" name="email" className={styles.text} />
              </label>
              <label className={styles.label}>
                <div>Contraseña</div>
                <input type="password" name="password" className={styles.text} />
              </label>
              <div className={styles.botones}>
                <button
                  onClick={this.props.onAuth}
                  className={styles.button}
                >
                Entrar
                </button>
              </div>
            </form>
        </div>
      </div>
    )
  }
}

Login.propTypes = propTypes

export default Login
