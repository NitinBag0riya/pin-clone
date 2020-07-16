import React from 'react'
import Header from '../../layout/Header'
import { Container, Col, Row } from 'react-bootstrap'
import { Posts } from '../Posts/Posts'

export function Home(){
    return(
        <>
        <Header />
        <Container>
        <Row>
            <Posts />
        </Row>
        </Container>
        </>
    )
}