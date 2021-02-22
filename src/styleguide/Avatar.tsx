import styled from "styled-components";

const Avatar = styled.div`
  height: 70px;
  width: 70px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #ffffff;
`;

const AvatarImage = styled.img`
  object-fit: cover;
  height: inherit;
  width: inherit;
`;

export { Avatar, AvatarImage };
