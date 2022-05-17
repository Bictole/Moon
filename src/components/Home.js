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
            backgroundImg="model-s.jpg"
            leftBtnText="Lorem Ipsum"
            rightBtnText="Lorem Ipsum"
        />

        <Section 
            title="MOON 2"
            description="Beyond The Cloud"
            backgroundImg="model-y.jpg"
            leftBtnText="Lorem Ipsum"
            rightBtnText="Lorem Ipsum"
        />

        <Section 
            title="MOON 3"
            description="Beyond The Cloud"
            backgroundImg="model-3.jpg"
            leftBtnText="Lorem Ipsum"
            rightBtnText="Lorem Ipsum"
        />

        <Section 
            title="MOON 4"
            description="Beyond The Cloud"
            backgroundImg="model-x.jpg"
            leftBtnText="Lorem Ipsum"
            rightBtnText="Lorem Ipsum"
        />
    </Container>
  )
}

export default Home