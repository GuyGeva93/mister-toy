import { storageService } from "./async-storage-service"

export const toyService = {
  query,
  getById,
  save,
  remove,
  getEmptyToy
}

function query() {
  // return axios.get('/api/toy')
  //   .then(res => res.data)
  return storageService.query()
}

function getById(toyId) {
  return axios.get(`/api/toy/${toyId}`)
    .then(res => res.data)
}

function save(toy) {
  if (toy._id) {
    return axios.put(`/api/toy`, toy)
      .then(res => res.data)
  } else {
    return axios.post(`/api/toy`, toy)
      .then(res => res.data)
  }
}

function remove(toyId) {
  return axios.delete(`/api/toy/${toyId}`)
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
