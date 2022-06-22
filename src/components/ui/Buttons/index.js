import styled, {css} from "styled-components";

const Button = styled.button`
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 10px;
    color: #fff;
    background-color: #06D6A0;
    cursor: pointer;

    /* Make New CSS, if Props Full Exists */
    ${(props) => props.full && css`
    display:block;
    width:100%;
    padding: 0.8rem 1rem;
    `}
`;

export default Button;