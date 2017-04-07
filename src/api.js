import fetch from 'isomorphic-fetch'

//const baseUrl = 'http://jsonplaceholder.typicode.com'
//const baseUrl = 'http://localhost:80/apostar/public'
const baseUrl = 'http://104.236.248.39'

const api = {
  usuarios: {
    async getAdmin(page=1){
      const response = await fetch(`${baseUrl}/usuarioadmin`)
      const data = await response.json()
      //console.log(data)
      return data
    }
  },
  eventos: {
    async getList(page=1){
      const response = await fetch(`${baseUrl}/eventos?_page=${page}`)
      const data = await response.json()
      return data
    },
    async getSingle(id = 1){
      const response = await fetch(`${baseUrl}/partidos`)
      const data = await response.json()
      return data
    },
    async getComment(id = 1){
      const response = await fetch(`${baseUrl}/evento/${id}`)
      const data = await response.json()
      return data
    }
  },
  users: {
    async getSingle(id = 1){
      const response = await fetch(`${baseUrl}/users/${id}`)
      const data = await response.json()
      return data
    },
    async getList(page=1){
      const response = await fetch(`${baseUrl}/usuarioadmin`)

      const data = await response.json()
      console.log(data)
      return data
    },
    async getPosts(id = 1){
      const response = await fetch(`${baseUrl}/users/${id}`)
      const data = await response.json()
      return data
    }
  }
}

export default api
