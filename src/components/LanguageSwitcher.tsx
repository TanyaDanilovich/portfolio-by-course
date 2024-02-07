import styled from 'styled-components'

type props = {
    // height?: string
    // width?: string
}
export const LanguageSwitcher = ({}: props) => {
    return (
        <select>
            <option>ru</option>
            <option>en</option>
            <option>pl</option>
            <option>by</option>
        </select>
    )
}

// type StyledMenuProps = {
//
// };
// const StyledMenu = styled.nav<StyledMenuProps>``;
//
// type StyledMenuListProps = {
//   // height?: string
//   // width?: string
// };
// const StyledMenuList = styled.ul<StyledMenuListProps>`
//   display: flex;
//   gap: 20px
// `;
//
// type StyledMenuItemProps = {
//   // height?: string
//   // width?: string
// };
// const StyledMenuItem = styled.li<StyledMenuItemProps>`
//   list-style: none;
// `;
