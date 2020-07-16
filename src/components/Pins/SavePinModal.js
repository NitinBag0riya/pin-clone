import React, { useEffect, useState } from 'react'
import { Modal, Button, Image, InputGroup, FormControl } from 'react-bootstrap';

export function SavePinModal(props) {
  const [ pin, setPin] = useState([])
    useEffect( () => {
        setPin(props.data)
        console.log(props.data)
    }, [props.data])

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
            <FormControl />
          </InputGroup>

          </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4 className="small-font-size">Full Image Path : {pin?.urls?.full}</h4>
            <Image src={pin?.urls?.small} />
          </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Save Pin</Button>
        </Modal.Footer>
      </Modal>
    );
  }