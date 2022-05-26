import styled from "styled-components";
import { css } from "styled-components";

/**
 - membuat variable button (component)
 - buat element button dan beri styling
 - styleing menggunakan tagged tamplate
 */
const Button = styled.button`
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  background-color: ${({ theme, variant }) =>
    // PROPS VARIANT
    theme.colors[variant] || theme.colors["primary"]};

  // PROPS FULL
  ${({ full }) =>
    full &&
    css`
      display: block;
      width: 100%;
    `}
`;

export default Button;
