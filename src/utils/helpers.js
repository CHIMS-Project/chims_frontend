export const saveToBrowser = (key, value) => localStorage.setItem(key, value);

export const getFromBrowser = (key) => localStorage.getItem(key);

export const isSavedInBrowser = (key) => localStorage.getItem(key) !== null;

export const toJSON = (obj) => JSON.stringify(obj);

export const JSONtoObj = (JsonValue) => JSON.parse(JsonValue);

export const saveToken = (token) => saveToBrowser("utk", token);

export const getToken = () => getFromBrowser("utk");

export const isTokenSaved = () => isSavedInBrowser("utk");

export const removeToken = () => localStorage.removeItem("utk");
