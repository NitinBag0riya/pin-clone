import React, { useEffect, useState } from 'react'
import Header from '../../layout/Header'
import { Container, Row } from 'react-bootstrap'
import { Posts } from '../../components/Pins'
import { getPhotos } from '../../apis/FetchFromUnsplash'
import { SavedPins } from '../Saved/Saved'

export function Home(){
    const [photos, setPhotos ] = useState([])  
    const [ showSavedPins, setShowSavedPins] = useState(false)

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

    const toggleSavedPins = () => {
        setShowSavedPins(!showSavedPins)
    }
    
    return(
        <>
        <Header toggleSavedPins={toggleSavedPins} />
        <Container fluid onScroll={e => loadMorePhotos(e)} className="pins-container">
            <Row>
                <Posts data={photos} />
            </Row>
        </Container>

        {
            (showSavedPins)
            ?   <div className="sidebar-saved-pin">
                    <h4>  Saved Pins</h4>
                    <SavedPins />
                </div>        
        : ''
        }
        
        </>
    )
}