import React, { useEffect, useState } from 'react'
import Header from '../../layout/Header'
import { Container, Col, Row } from 'react-bootstrap'
import { Posts } from '../../components/Pins'
import { getPhotos } from '../../apis/FetchFromUnsplash'
import { useSelector } from 'react-redux'

export function Home(){
    const [photos, setPhotos ] = useState([])
    const pins = useSelector(state => state.pins)

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
    <p>{JSON.stringify(pins)}</p>
        <Container onScroll={e => loadMorePhotos(e)} style={{height:'100vH', backgroundColor:'coral',overflow : 'scroll'}}>
            <Posts data={photos} />
        </Container>
        </>
    )
}