import React, { useEffect, useState } from 'react'
import Header from '../../layout/Header'
import { Container, Col, Row } from 'react-bootstrap'
import { Posts } from '../Posts/Posts'
import { getPhotos } from '../../apis/FetchFromUnsplash'

export function Home(){
    const [photos, setPhotos ] = useState([])

    useEffect( () => {
        getPhotos().then(response => response.json()).then(images => setPhotos(images)).catch(e => console.log(e))
    }, [])

    const loadMorePhotos = (e) => {
        const element = e.target;
        if( element.scrollHeight - element.scrollTop === element.clientHeight){
            getPhotos().then(response => response.json()).then(images => setPhotos(photos.concat(images))).catch(e => console.log(e))
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