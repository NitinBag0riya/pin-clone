import Unsplash from 'unsplash-js';


const unsplash = new Unsplash({ accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY});

export const getPhotos = function(){
    return unsplash.photos.listPhotos(2, 5, "latest")
}

export const getPhotosUsingKeyword = function(keyword){
    return unsplash.search.photos(keyword)
}