import React, { useRef } from 'react'
import { Modal, Button, InputGroup, Form, Row, Image } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { USER_UPLOAD_PIN } from '../State/types';

export function UploadPin(props) {
    let titleRef = useRef('')
    let imagePath = useRef('')

    const dispatch  = useDispatch()


    const uploadPinToState = () => {

        const formattedPinObject = {
            id: Math.floor(Math.random() * 1000), 
            alt_description: titleRef.current.value,
            heading : titleRef.current.value,
            urls: {
                full: imagePath.current.value,
                raw: imagePath.current.value,
                regular: imagePath.current.value,
                small: imagePath.current.value,
                thumb: imagePath.current.value,
            }
        }
        

        dispatch({
          type : USER_UPLOAD_PIN,
          payload : formattedPinObject
        })

        props.onHide()
    }

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Upload Pin
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>Pin Title</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control type="text" placeholder=" Title..." ref={titleRef} />
        </InputGroup>

        <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>Image</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control type="text" placeholder=" Enter Image Url..." ref={imagePath} />
        </InputGroup>

        {/* preview of image */}
        <Row>
            <Image src={imagePath || 'holder.js/171x180' } thumbnail />
        </Row>
          
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={ () => uploadPinToState() }>Upload</Button>
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }