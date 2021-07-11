import axios from 'axios'
import { httpService } from './http-service'

export const toyService = {
  query,
  getById,
  save,
  remove,
  getEmptyToy,
}

const TOY_URL = 'http://localhost:3030/api/toy'

async function query(filterBy) {
  try {
    const toys = await httpService.get('toy', { params: { filterBy } })
    return toys
  } catch (err) {
    console.log('Cannot get toys', err);
  }
}

async function getById(toyId) {
  try {
    const toy = await httpService.get(`toy/${toyId}`)
    return toy
  } catch (err) {
    console.log('Cannot get toy', err)
  }
}

async function save(toy) {
  // toy.createdAt = Date.now()
  if (toy._id) {
    const res = await httpService.put(`toy/${toy._id}`, {toy})
    return res
  } else {
    const res = await httpService.post('toy', {toy})
    return res
  }
}

async function remove(toyId) {
  const res = await httpService.delete(`toy/${toyId}`)
  return res
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

