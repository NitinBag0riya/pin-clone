import React, { useEffect, useState } from 'react'
import Header from '../../layout/Header'
import { Container } from 'react-bootstrap'
import { Posts } from '../../components/Pins'
import { getPhotos } from '../../apis/FetchFromUnsplash'

export function Home(){
    const [photos, setPhotos ] = useState([])  
    let pageCounter  = 1  

    useEffect( () => {
        getPhotos().then(response => response.json()).then(images => setPhotos(images)).catch(e => console.log(e))
    }, [])

    const loadMorePhotos = (e) => {
        const element = e.target;
        ++pageCounter;
        if( element.scrollHeight - element.scrollTop === element.clientHeight){
            getPhotos(pageCounter).then(response => response.json()).then(images => setPhotos(photos.concat(images))).catch(e => console.log(e))
        }
    }
    
    return(
        <>
        <Header />
        <Container onScroll={e => loadMorePhotos(e)} style={{height:'100vH', backgroundColor:'coral',overflow : 'scroll'}}>
            <Posts data={photos} />
        </Container>
        </>
    )
}