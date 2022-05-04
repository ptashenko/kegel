const updateStorage = (tableName, data) => {
  localStorage.setItem(tableName, JSON.stringify(data));
};

const addItem = (tableName, item) => {
  updateStorage(tableName, item);
};

const getItem = (tableName) => {
  const data = localStorage.getItem(tableName);
  return data !== null ? JSON.parse(data) : [];
};

export {
  addItem,
  updateStorage,
  getItem,
};
