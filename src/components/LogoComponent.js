import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Logo = styled.h1`
display: inline-block;
font-family: 'Pacifico',cursive;
z-index:3;
transition: transform .2s;
color: #5b615f;
&:hover {
  transform: scale(1.2);
}
`

function LogoComponent() {
    return (
        <NavLink to="/">
            <Logo>
                MOON
            </Logo>
        </NavLink>
    )
}

export default LogoComponent