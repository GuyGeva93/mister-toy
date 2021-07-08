import axios from 'axios'

export const toyService = {
  query,
  getById,
  save,
  remove,
  getEmptyToy,
}

const TOY_URL = 'http://localhost:3000/api/toy'

async function query(filterBy) {
  try {
    const toys = await axios.get(TOY_URL, { params: { filterBy } })
    return toys.data
  } catch (err) {
    console.log('Cannot get toys', err);
  }
}

function getById(toyId) {
  return axios.get(`${TOY_URL}/${toyId}`).then((res) => res.data)
}

function save(toy) {
  toy.createdAt = Date.now()
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
    _id: null,
    name: '',
    price: null,
    type: '',
    createdAt: '',
    inStock: true,
  }
  return Promise.resolve(toy)
}
