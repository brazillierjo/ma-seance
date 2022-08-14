import { Key, Value } from "../types/LocalStorageTypes";

export const setInLocalStorage = (key: Key, value: Value) => {
	localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLocalStorage = (key: Key) => {
	const value = localStorage.getItem(key);
	return value ? JSON.parse(value) : null;
};

export const removeFromLocalStorage = (key: Key) => {
	localStorage.removeItem(key);
};
