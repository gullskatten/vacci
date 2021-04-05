import React from "react";
import styled from "styled-components";
import Text from "../../styleguide/Text";
import StyledLink from "../../styleguide/StyledLink";
import Padding from "../../styleguide/Padding";
import Card from "../../styleguide/Card";
import Divider from "../../styleguide/Divider";
import Flex from "../../styleguide/Flex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useHistory } from "react-router-dom";

interface Props {
  src: any;
}

const StoryWireframe = styled.div<Props>`
  width: 100%;
  height: 250px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-image: url(${(props) => props.src});
  background-size: 100% 100%;
  cursor: pointer;

  @media all and (max-width: 475px) {
    height: 200px;
  }
`;

interface StoryCardProps {
  src: any;
  href: string;
  title: string;
  description: string;
  withIcon?: IconProp;
}

const StoryCard: React.FC<StoryCardProps> = ({
  src,
  title,
  href,
  description,
  withIcon,
}) => {
  const history = useHistory();

  const onListItemClicked = () => {
    history.push(href);
  };

  return (
    <Card
      width={400}
      height={450}
      background="surface"
      onClick={onListItemClicked}
    >
      <StoryWireframe src={src}></StoryWireframe>
      <Padding all="m" fullWidth>
        <Flex fullWidth justify="space-between" align="center">
          <Text variant="subtitle" element="h3">
            <StyledLink href={href} color="onSurface" textDecoration="unset">
              {title}
            </StyledLink>
          </Text>
          {withIcon && (
            <Text variant="subtitle" element="span" color="primary">
              <FontAwesomeIcon icon={withIcon} />
            </Text>
          )}
        </Flex>

        <Divider color="background" fullWidth lineWidth={1} />
        <Text gutterTop="s" gutterBottom="m" color="onSurface">
          {description}
        </Text>
      </Padding>
    </Card>
  );
};

export default StoryCard;
