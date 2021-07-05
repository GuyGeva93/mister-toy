
const gToys = [
  {
    _id: 8010,
    name: "placerat mi",
    price: 64,
    type: "Educational",
    createdAt: "1972-02-27T06:16:43.906Z",
    inStock: false
  },
  {
    _id: 8011,
    name: "risus convallis",
    price: 61,
    type: "Funny",
    createdAt: "1988-08-20T15:24:13.325Z",
    inStock: false
  },
  {
    _id: 8012,
    name: "tortor porta",
    price: 75,
    type: "Funny",
    createdAt: "1990-05-03T06:33:11.661Z",
    inStock: false
  },
  {
    _id: 8013,
    name: "tortor lorem",
    price: 84,
    type: "Funny",
    createdAt: "1985-02-13T08:59:13.496Z",
    inStock: false
  }
]

export const storageService = {
  query,
  get,
  post,
  put,
  remove,
  postMany
}

function query(entityType) {
  var entities = JSON.parse(localStorage.getItem(entityType)) || gToys
  return Promise.resolve(entities);
}

function get(entityType, entityId) {
  return query(entityType)
    .then(entities => entities.find(entity => entity._id === entityId))
}

function post(entityType, newEntity) {
  newEntity._id = _makeId()
  return query(entityType)
    .then(entities => {
      entities.push(newEntity);
      _save(entityType, entities)
      return newEntity;
    })
}

function postMany(entityType, newEntities) {
  return query(entityType)
    .then(entities => {
      entities.push(...newEntities);
      _save(entityType, entities)
      return entities;
    })
}

function put(entityType, updatedEntity) {
  return query(entityType)
    .then(entities => {
      const idx = entities.findIndex(entity => entity._id === updatedEntity._id);
      entities.splice(idx, 1, updatedEntity)
      _save(entityType, entities)
      return updatedEntity;
    })
}

function remove(entityType, entityId) {
  return query(entityType)
    .then(entities => {
      const idx = entities.findIndex(entity => entity._id === entityId);
      entities.splice(idx, 1)
      _save(entityType, entities)
    })
}

function _save(entityType, entities) {
  localStorage.setItem(entityType, JSON.stringify(entities))
}

function _makeId(length = 5) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}