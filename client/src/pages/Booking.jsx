import React from 'react'
import styled from 'styled-components'
import Controller from '../components/BookingComponents/Controller'
import Navbar from '../components/Navbar'

const Container = styled.article`
    width: 100%;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    row-gap: 4rem;
`

const Booking = () => {
  return (
    <Container>
        <Navbar />
        <Controller />
    </Container>
  )
}

export default Booking