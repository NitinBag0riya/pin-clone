import React, { useEffect } from 'react'
import { Col } from 'react-bootstrap'
import { getPhotos } from '../../apis/FetchFromUnsplash'

export function Posts(){
    useEffect( () => {
        getPhotos().then(res => console.log(res)).catch(e => console.log(e))
    }, [])
    return(
        <Col xs={12} md={8}>
            xs=12 md=8
        </Col>
    )
}
