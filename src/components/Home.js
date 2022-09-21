import React from 'react'
import styled from 'styled-components'

import Section from "./Section"

const Container = styled.div`
height: 100vh;
`

function Home() {
  return (
    <Container>
        <Section 
            title="MOON"
            description="Beyond The Cloud"
            backgroundImg="white_satellite.jpg"
            leftBtnText="Moon Operating"
            rightBtnText="Online Network"
        />

        <Section 
            title="MOON 2"
            description="Beyond The Cloud"
            backgroundImg="ceo.png"
            leftBtnText="A Mission"
            rightBtnText="Above the Cloud"
        />

        <Section 
            title="MOON 3"
            description="Beyond The Cloud"
            backgroundImg="rocket.png"
            leftBtnText="To Reach"
            rightBtnText="The Stars"
        />
    </Container>
  )
}

export default Home