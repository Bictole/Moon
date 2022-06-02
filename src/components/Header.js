import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { NavLink } from 'react-router-dom'



const Container = styled.div`
min-height: 60px;
position: fixed;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 20px;
top: 0;
left: 0;
right: 0;
z-index: 1;
`

const Menu = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex: 1;

a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
}

@media (max-width: 768px) {
    display: none;
}
`

const RightMenu = styled.div`
display: flex;
align-items: center;

a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
}
`

const CustomMenu = styled(MenuIcon)`
cursor: pointer;
`

const BurgerNav = styled.div`
position: fixed;
top: 0;
bottom: 0;
right: 0;
background: white;
width: 300px;
z-index: 16;
list-style: none;
padding 20px;
display: flex;
flex-direction: column;
text-align: start;
transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
transition: transform 0.2s ease-in;

li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
        font-weight: 600;
    }
}
`

const CustomClose = styled(CloseIcon)`
cursor: pointer;
`

const CloseWrapper = styled.div`
display: flex;
justify-content: flex-end;
`

const Logo = styled.h1`
display: inline-block;
font-family: 'Pacifico',cursive;
z-index:3;
transition: transform .2s;
&:hover {
  transform: scale(1.2);
}
`

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);

    return (
        <Container>
            <NavLink to="/">
                <Logo>
                    MOON
                </Logo>
            </NavLink>

            <Menu>
                <a href='/Energy'>Energy</a>
                <a href='/Timeline'>Timeline</a>
                <a href='/Facility'>Facility</a>
                <a href='/Aled'>Aled</a>
            </Menu>

            <RightMenu>
                <a href='/Team'>Team</a>
                <a href='/Hackathon'>Hackathon</a>
                <CustomMenu onClick={() => setBurgerStatus(true)}/>
            </RightMenu>

            <BurgerNav show={burgerStatus}>
                
                <CloseWrapper>
                    <CustomClose onClick={() => setBurgerStatus(false)}/>
                </CloseWrapper>
                
                <li><a href='/Energy'>Energy</a></li>
                <li><a href='/Timeline'>Timeline</a></li>
                <li><a href='/Facility'>Facility</a></li>
                <li><a href='/Aled'>Aled</a></li>

                <li><a href='/Aled'>Aled</a></li>
                <li><a href='/Aled'>Aled</a></li>
                <li><a href='/Aled'>Aled</a></li>
                <li><a href='/Aled'>Aled</a></li>

            </BurgerNav>

        </Container>
    )
}

export default Header