import styled, { css } from "styled-components";
import { IColors } from "../../styled";

interface ListProps {
  fullWidth?: boolean;
}

const List = styled.ul<ListProps>`
  margin: 0;
  padding: 0;
  list-style: none;

  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `}
`;

interface ListItemProps {
  background?: keyof IColors;
  clickable?: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: ${(props) => `${props.theme.spacing.m} ${props.theme.spacing.m}`};
  background-color: ${(props) =>
    props.theme.colors[props.background ? props.background : "surface"]};

  border-bottom: 1px solid #cdcdcd;

  &::last-child {
    border-bottom: 0;
  }

  ${(props) =>
    props.clickable &&
    css`
      cursor: pointer;
    `}
`;

export { List, ListItem };
