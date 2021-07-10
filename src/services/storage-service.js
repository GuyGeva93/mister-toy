export const sessionStorage = {
  saveToStorage,
  loadFromStorage,
  deleteFromStorage
}

function saveToStorage(key, data) {
  var json = JSON.stringify(data);
  sessionStorage.setItem(key, json);
}

function loadFromStorage(key) {
  var json = sessionStorage.getItem(key);
  var data = JSON.parse(json);
  return data;
}

function deleteFromStorage(key) {
  sessionStorage.removeItem(key);
}