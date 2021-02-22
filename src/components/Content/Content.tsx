import React from "react";
import { Avatar, AvatarImage } from "../../styleguide/Avatar";
import Card from "../../styleguide/Card";
import Margin from "../../styleguide/Margin";
import Padding from "../../styleguide/Padding";
import Text from "../../styleguide/Text";
import esp from "../../assets/esp.jpg";
import CardAvatar from "../../styleguide/CardAvatar";
import Flex from "../../styleguide/Flex";

const Content: React.FC = () => {
  return (
    <>
      <Margin gutterTop="s">
        <Card background="primaryVariant">
          <Padding gutterBase="m">
            <Text variant="title" element="h1">
              Hei
            </Text>
            <Text variant="subtitle" element="h2">
              An amazing story
            </Text>
            <Margin gutterTop="s">
              <Text variant="body" element="p">
                Note that the development build is not optimized. To create a
                production build, use yarn build.
              </Text>
            </Margin>
          </Padding>
        </Card>
      </Margin>
    </>
  );
};

export default Content;
