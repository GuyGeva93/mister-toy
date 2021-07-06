import axios from 'axios'

export const toyService = {
  query,
  getById,
  save,
  remove,
  getEmptyToy,
}

const TOY_URL = 'http://localhost:3000/api/toy'

function query(filterBy) {

  return axios.get(TOY_URL, { params: { filterBy } })
    .then((res) => res.data)
}

function getById(toyId) {
  return axios.get(`${TOY_URL}/${toyId}`).then((res) => res.data)
}

function save(toy) {
  if (toy._id) {
    return axios.put(TOY_URL, toy).then((res) => res.data)
  } else {
    return axios.post(TOY_URL, toy).then((res) => res.data)
  }
}

function remove(toyId) {
  return axios.delete(`${TOY_URL}/${toyId}`).then((res) => res.data)
}

function getEmptyToy() {
  const toy = {
    _id: '',
    name: '',
    price: null,
    type: '',
    createdAt,
    inStock: '',
  }
  return toy
}
