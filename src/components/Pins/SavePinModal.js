import React, { useEffect, useState, useRef } from 'react'
import { Modal, Button, Image, InputGroup, FormControl, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { ADD_PIN, USER_SELECTION_PHOTOS } from '../State/types';

export function SavePinModal(props) {
  const [ pin, setPin] = useState([])
  let titleRef = useRef('')
  const dispatch  = useDispatch()

    useEffect( () => {
        setPin(props.data)
    }, [props.data])

  const saveAndHideModel = () => {
    dispatch({
      type : USER_SELECTION_PHOTOS,
      payload : {...pin, heading : titleRef.current.value}
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
          
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>Pin Title</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control type="text" placeholder=" Trending..." ref={titleRef} />
          </InputGroup>

          </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4 className="small-font-size">Full Image Path : {pin?.urls?.full}</h4>
            <Image src={pin?.urls?.small} />
          </Modal.Body>
        <Modal.Footer>
          <Button onClick={e => saveAndHideModel()}>Save Pin</Button>
        </Modal.Footer>
      </Modal>
    );
  }