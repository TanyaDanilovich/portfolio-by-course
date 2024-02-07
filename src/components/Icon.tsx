import styled from 'styled-components'
import iconSprite from '../assets/svg/sprite.svg'
import {theme} from '../styles/Theme.styled';

type props = {
    id: string
    height?: string
    width?: string
    viewBox?: string
    sprite?: string
}
export const Icon = ({
                         id,
                         sprite = iconSprite,
                         width = '50',
                         height = '50',
                         viewBox,
                     }: props) => {
    return (

            <StyledIcon
                width = {width}
                height = {height}
                viewBox = {`0 0 ${width} ${height}` || viewBox}
                fill = "none"
                xmlns = "http://www.w3.org/2000/svg"

            >
                <use href = {`${sprite}#${id}`}/>
            </StyledIcon>

    )
}

type StyledIconProps = {

    // height?: string
    // width?: string
}
const StyledIcon = styled.svg<StyledIconProps>`
  fill: ${theme.colors.primary};
`