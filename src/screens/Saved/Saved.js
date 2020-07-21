import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Col, Button } from 'react-bootstrap'
import { REMOVE_USER_SELECTION_PHOTOS } from '../../components/State/types'
import Header from '../../layout/Header'

export function SavedPins(){
    const dispatch = useDispatch()
    const  [localSavedPins, setLocalSavedPins] = useState([]) 
    const savedPins = useSelector(state => state.savedPins)


    const removePin = (id) => {
        
        let updatedPins = localSavedPins.filter( pin => pin.id !== id)
        //updating localSavedPins state
        setLocalSavedPins(updatedPins)

        //updating reduxState for localState
        dispatch({
            type : REMOVE_USER_SELECTION_PHOTOS,
            payload : updatedPins
        })
    }

    useEffect( () => {
        const fetchPins = JSON.parse(window.localStorage.getItem('savedPins')) || []
        setLocalSavedPins(fetchPins)
    },[])


    return(
        <>
        <Header isOnSavedRoute={true} />

        {
            localSavedPins.map( image =>                 
                <Col key={image.id}  xs={6} md={3} className="photo-container">
                    
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
                        <Button variant="danger" onClick={() => removePin(image.id)}>
                            Remove Pin
                        </Button>                             
                            
                    </div>
                    
                </Col>
            )
        }
        </>
    )    
}