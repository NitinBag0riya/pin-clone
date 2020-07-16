import React, { useEffect, useState } from 'react'
import { Col, Image, Button } from 'react-bootstrap'
import { getPhotos } from '../../apis/FetchFromUnsplash'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { SavePinModal } from './SavePinModal';

export function Posts(props){    
    const [ images, setImages] = useState([])
    const [modalShow, setModalShow] = useState(false);
    const [selectedPin, setSelectedPin] = useState([])

    useEffect( () => {
        setImages(props.data)
        console.log('data changed!', props.data)
    }, [props])


    const verifyPinData = (flag, data) => {
        if(flag){
            setModalShow(flag)
            setSelectedPin(data)
        }else{
            setModalShow(flag)
            setSelectedPin([])
        }
        
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
                    <LazyLoadImage
                        effect="blur"
                        alt={image.alt_description} 
                        src={image?.urls?.small}
                    />
                    <Button variant="primary" onClick={() => verifyPinData(true, image)}>
                        Launch vertically centered modal
                    </Button>
                </Col>
            )
         }
        </>
    )
}
