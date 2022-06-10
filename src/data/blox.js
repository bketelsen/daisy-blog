import data from './data.json';

export function getProfile(id) {
    return data.profiles.find(p => p.id === id);
}
export function getArticle(id) {
    return data.articles.find(p => p.id === id);
}
export function getCategory(id) {
    return data.categories.find(p => p.id === id);
}
export function getImage(id) {
    return data.images.find(p => p.id === id);
}
