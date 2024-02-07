import styled from 'styled-components'

type props = {
    // height?: string
    // width?: string
}
export const Menu = ({}: props) => {
    return (
        <StyledMenu>
            <StyledMenuList>
                <StyledMenuItem>
                    <a>My skills</a>
                </StyledMenuItem>

                <StyledMenuItem>
                    <a>Works</a>
                </StyledMenuItem>

                <StyledMenuItem>
                    <a>Testimonials</a>
                </StyledMenuItem>

                <StyledMenuItem>
                    <a>Contact</a>
                </StyledMenuItem>
            </StyledMenuList>
        </StyledMenu>
    )
}

type StyledMenuProps = {}
const StyledMenu = styled.nav<StyledMenuProps>``

type StyledMenuListProps = {
    // height?: string
    // width?: string
}
const StyledMenuList = styled.ul<StyledMenuListProps>`
    display: flex;
    gap: 20px;
`

type StyledMenuItemProps = {
    // height?: string
    // width?: string
}
const StyledMenuItem = styled.li<StyledMenuItemProps>`
  list-style: none;
  cursor: pointer;
`
