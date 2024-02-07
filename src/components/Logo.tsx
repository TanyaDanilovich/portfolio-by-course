import styled from 'styled-components'
import logo from '../assets/png/logo-default-228x67.png'

type props = {
    // height?: string
    // width?: string
}
export const Logo = ({}: props) => {
    return <StyledLogo src={logo} />
}

type StyledLogoProps = {
    // height?: string
    // width?: string
}
const StyledLogo = styled.img<StyledLogoProps>`
    height: 100%;
`
