import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';


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


function Header() {
  return (
    <Container>
        <a>
            <img src='/images/logo.svg' alt='/'/>
        </a>

        <Menu>
            <a href='#'>Facility</a>
            <a href='#'>Energy</a>
            <a href='#'>Timeline</a>
            <a href='#'>Money</a>

        </Menu>

        <RightMenu>
            <a href='#'>Team</a>
            <a href='#'>Hackathon</a>
            <CustomMenu />
        </RightMenu>
    </Container>
  )
}

export default Header