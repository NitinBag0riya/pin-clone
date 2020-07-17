import React, { useEffect, useState } from 'react'
import { Col, Image, Button } from 'react-bootstrap'
import { getPhotos } from '../../apis/FetchFromUnsplash'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { SavePinModal } from './SavePinModal';
import { useSelector } from 'react-redux';

export function Posts(props){    
    const [ images, setImages] = useState([])
    const [modalShow, setModalShow] = useState(false);
    const [selectedPin, setSelectedPin] = useState([])
    const photos = useSelector(state => state.photos)

    useEffect( () => {
        if(photos.length){
            setImages(photos)
        }else{
            setImages(props.data)
        }        
        // console.log('data changed!', props.data)
    }, [props,photos])


    const verifyPinData = (flag, data) => {
        if(flag){
            setModalShow(flag)
            setSelectedPin(data)
        }else{
            setModalShow(flag)
            setSelectedPin([])
        }
        
    }

    const hidePin = (id) => {
        const filteredImages  = images.filter( image => image.id !== id)
        setImages(filteredImages)
    }

    return(
        <>

        <SavePinModal
            show={modalShow}
            onHide={() => verifyPinData(false)}
            data = {selectedPin}
        />

         {
            images.map( image =>                 
                <Col key={image.id} xs={12} md={8}>
                    
                    <h4>{image.heading || ''}</h4>

                    <LazyLoadImage
                        effect="blur"
                        alt={image.alt_description} 
                        src={image?.urls?.small}
                    />

                    {
                        (props?.hideModalButton) 
                        ? '' 
                        : <Button variant="primary" onClick={() => verifyPinData(true, image)}>
                            Save Pin
                          </Button>
                    }

                        <Button variant="danger" onClick={() => hidePin(image.id)}>
                            Hide Pin
                          </Button>
                    
                </Col>
            )
         }
        </>
    )
}
