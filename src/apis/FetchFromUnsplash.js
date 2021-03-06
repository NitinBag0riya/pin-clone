import Unsplash from 'unsplash-js';


const unsplash = new Unsplash({ accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY});

export const getPhotos = function(page){
    return unsplash.photos.listPhotos(page, 15)
}

export const getPhotosUsingKeyword = function(keyword, page = 1){
    return unsplash.search.photos(keyword, page, 50)
}