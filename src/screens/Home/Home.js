import React, { useEffect, useState } from 'react'
import Header from '../../layout/Header'
import { Container, Row } from 'react-bootstrap'
import { Posts } from '../../components/Pins'
import { getPhotos } from '../../apis/FetchFromUnsplash'
import { SavedPins } from '../Saved/Saved'
import { UploadPin } from '../../components/Pins/UploadPin'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_PIN } from '../../components/State/types'

export function Home(){
    // const [photos, setPhotos ] = useState([])  
    const photos = useSelector(state => state.pins)
    const [ uploadPinModal, setUploadPinModal] = useState(false)

    const dispatch = useDispatch()

    let pageCounter  = 1  

    useEffect( () => {
        getPhotos().then(response => response.json()).then(images => {
            dispatch({
                type : ADD_PIN,
                payload : images
              })
        }).catch(e => console.log(e))
    }, [])

    const loadMorePhotos = (e) => {
        const element = e.target;
        ++pageCounter;
        if( element.scrollHeight - element.scrollTop === element.clientHeight){
            getPhotos(pageCounter).then(response => response.json()).then(images => {
                dispatch({
                    type : ADD_PIN,
                    payload : images
                  })
            }).catch(e => console.log(e))
        }
    }


    const toggleUploadPinModal = () => {
        setUploadPinModal(!uploadPinModal)
    }
    
    return(
        <>
        <Header uploadPins={toggleUploadPinModal} />
        <Container fluid onScroll={e => loadMorePhotos(e)} className="pins-container">
            <Row>
                <Posts data={photos} />
            </Row>
        </Container>
        

        {/* upload user pins with image url  */}
        <UploadPin
            show={uploadPinModal}
            onHide={() => toggleUploadPinModal()}
        />
        
        </>
    )
}