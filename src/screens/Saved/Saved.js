import React from 'react'
import { Posts } from '../../components/Pins'
import { useSelector } from 'react-redux'

export function SavedPins(){
    const pins = useSelector(state => state.pins)

    return(
        <Posts data={pins} hideModalButton={true} />
    )
}