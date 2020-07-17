import React from 'react'
import { Navbar, Nav, Form, Col } from 'react-bootstrap';
import { getPhotosUsingKeyword } from '../apis/FetchFromUnsplash';
import { useDispatch } from 'react-redux';
import { USER_SELECTION_PHOTOS } from '../components/State/types';
import { debounce } from 'nitin-js'

function Header(props){
    const dispatch  = useDispatch()
    const fetchPhotos = (keyword) => {
        getPhotosUsingKeyword(keyword).then(response => response.json()).then(images => {
            dispatch({
                type : USER_SELECTION_PHOTOS,
                payload : images.results
              })
        }).catch(e => console.log(e))
    }

    const searchUsingQuery = (query) => {
        if(query.length > 3){
            getPhotosUsingKeyword(query).then(response => response.json()).then(images => {
                dispatch({
                    type : USER_SELECTION_PHOTOS,
                    payload : images.results
                  })
            }).catch(e => console.log(e))
        }else{
            alert('Please enter atleast 3 keyword')
        }
    }
    const debouceUserSearch = debounce(searchUsingQuery, 1000)

    return(
        <>
        <Navbar bg="dark" className="navbar-sticky-" expand="lg" sticky="top">
            <Navbar.Brand href="#home">PinterestClone</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link onClick={ () => fetchPhotos('latest') }>Latest</Nav.Link>
                <Nav.Link onClick={ () => fetchPhotos('covid') }>Covid-19</Nav.Link>
                <Nav.Link onClick={ () => props.toggleSavedPins()}>Saved Pins</Nav.Link>
                <Form inline>
                    <Form.Row>
                        <Col xs={7} md={12}>
                        <Form.Control onChange={e => debouceUserSearch(e.target.value)} placeholder="City, Animal etc" />
                        </Col>
                    </Form.Row>
                </Form>
                </Nav>                                    
            </Navbar.Collapse>
        </Navbar>
        </>
    )
}


export default Header;