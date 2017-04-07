import React, { Component } from 'react'
//import { HashRouter, Match } from 'react-router'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import 'font-awesome/scss/font-awesome.scss'
import 'normalize-css'
import styles from './app.scss'

import Header from  '../Header'
import Main from '../Main'
import Login from '../Login'

import api from '../../api.js'
//

import Footer from  '../Footer'

class App extends Component {
  constructor(){
    super()

    this.state = {
      user: null,
      user_bd: null
    }
    this.handleOnAuth = this.handleOnAuth.bind(this)
    this.handleSendForm = this.handleSendForm.bind(this)
  }

  // async componentDidMount(){
  //   const user = await api.eventos.getSingle(1)
  //
  //   this.setState({
  //     user,
  //     page: this.state.page + 1,
  //     nombre: user.data[0].local
  //   })
  //
  // }

  async componentDidMount(){

    if(!this.state.user){
      const [
        user_bd
      ] = await Promise.all([
        api.usuarios.getAdmin(1)
      ])
      this.setState({
        user: null,
        user_bd: user_bd
      })
    }

  }

  handleOnAuth(){

  }

  handleSendForm(event){
    event.preventDefault

    let userName = event.target.email.value
    let userPass = event.target.password.value
    let bdName = this.state.user_bd.email
    let bdPass = this.state.user_bd.password

    if(userName == bdName && userPass == bdPass){
      this.setState({
        user: this.state.user_bd
      })
    } else {
      this.setState({ user: null })
    }
  }
  render(){
    return (
      <Router>
        <div className={styles.root}>


        <Route exact path='/' render={()=>{
          if(this.state.user){
            return(
              <div className={styles.content}>
                <Header user={this.state.user}/>
                <Main/>
                <Footer />
              </div>
            )
          }else{
            return(
                <Login
                  onAuth={this.handleOnAuth}
                  onSendForm={this.handleSendForm}
                />
            )
          }
        }}/>
        <Route exact path='/list/:menu/:pagina' render={({ params })=>{
          return(
            <Main user={this.state.user}/>
          )
        }}/>
        <Route exact path='/edit/:menu/:id' render={()=>{
          return(
            <Main user={this.state.user}/>
          )
        }}/>


        </div>
      </Router>
    )
  }
}

export default App
