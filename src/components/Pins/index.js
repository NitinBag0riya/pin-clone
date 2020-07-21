import React, { useEffect, useState } from 'react'
import { Col, Image, Button } from 'react-bootstrap'
import { getPhotos } from '../../apis/FetchFromUnsplash'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { SavePinModal } from './SavePinModal';
import { useSelector, useDispatch } from 'react-redux';
import { REMOVE_SAVED_PIN } from '../State/types';

export function Posts(props){    
    const [ images, setImages] = useState([])
    // const images = useSelector(state => state.pins)
    const [modalShow, setModalShow] = useState(false);
    const [selectedPin, setSelectedPin] = useState([])
    const dispatch = useDispatch()

    useEffect( () => {
        setImages(props.data)
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

    const hidePin = (id) => {
        dispatch({
            type : REMOVE_SAVED_PIN,
            payload : id
        })
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
                <Col key={image.id}  xs={ (props?.hideModalButton) ? 12 : 6 } md={ (props?.hideModalButton) ? 12: 3 } className="photo-container">
                    
                    <h6>{image.heading || ''}</h6>
                    
                    {/* for lazy loading images load effect */}
                    <LazyLoadImage
                        effect="blur"
                        alt={image.alt_description} 
                        src={image?.urls?.small}
                        className="photo-grid"
                    />
                    <div className="callToActionBtns">
                        {/* condition checking making single componet works and act diff according to preview and display in grid pane */}
                        {
                            (props?.hideModalButton) 
                            ? '' 
                            : <Button variant="primary" onClick={() => verifyPinData(true, image)}>
                                Save Pin
                            </Button>
                        }

                        {
                            (props?.hideModalButton) 
                            ? <Button variant="danger" onClick={() => hidePin(image.id)}>
                                    Remove Pin
                              </Button> 
                            : <Button variant="danger" onClick={() => hidePin(image.id)}>
                                Hide Pin
                              </Button>
                        }
                            
                    </div>
                    
                </Col>
            )
         }
        </>
    )
}
