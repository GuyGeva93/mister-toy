import axios from "axios"

export const toyService = {
  query,
  getById,
  save,
  remove,
  getEmptyToy
}

function query() {
  return axios.get('http://localhost:3000/api/toy')
    .then(res => res.data)
}

function getById(toyId) {
  return axios.get(`http://localhost:3000/api/toy/${toyId}`)
    .then(res => res.data)
}

function save(toy) {
  if (toy._id) {
    return axios.put(`http://localhost:3000/api/toy`, toy)
      .then(res => res.data)
  } else {
    return axios.post(`http://localhost:3000/api/toy`, toy)
      .then(res => res.data)
  }
}

function remove(toyId) {
  return axios.delete(`http://localhost:3000/api/toy/${toyId}`)
    .then(res => res.data)
}

function getEmptyToy() {
  const toy = {
    _id: '',
    name: '',
    price: null,
    type: '',
    createdAt,
    inStock: ''
  }
  return toy
}
