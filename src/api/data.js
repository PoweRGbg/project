
import createApi from './api.js';

const api = createApi(null, null, (msg) => alert(msg));

const endpoints = {
    MEALS: 'data/meals',
    ITEM_BY_ID: 'data/meals',
    MY_MEALS: 'data/meals?where=_ownerId%3D%22{userId}%22',
};

export const login = api.login.bind(api);
export const register = api.register.bind(api);
export const logout = api.logout.bind(api);

export async function getMeals() {
    return await api.get(endpoints.MEALS);
}

export async function getMeal(itemId) {
    return await api.get(endpoints.ITEM_BY_ID +'/' + itemId);
}

export async function createItem(item) {
    return await api.post(endpoints.MEALS, item);
}

export async function editItem(id, item) {
    return await api.put(endpoints.ITEM_BY_ID +'/'+ id, item);
}

export async function deleteItem(id, item) {
    return await api.delete(endpoints.ITEM_BY_ID +'/'+ id, item);
}

export async function getMyMeal(userId) {
    console.log(endpoints.MEALS + `?where=_ownerId%3D%22${userId}%22`);
    return await api.get(endpoints.MEALS + `?where=_ownerId%3D%22${userId}%22`);
}