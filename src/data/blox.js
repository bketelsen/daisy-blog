import data from './data.json';

export function getProfile(profile) {
    return data.profiles.find(p => p.id === profile);
}
export function getArticle(id) {
    return data.articles.find(p => p.id === id);
}
export function getCategory(id) {
    return data.categories.find(p => p.id === id);
}
