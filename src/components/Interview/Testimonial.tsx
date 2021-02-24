import React from "react";
import { Avatar, AvatarImage } from "../../styleguide/Avatar";
import Card from "../../styleguide/Card";
import CardAvatar from "../../styleguide/CardAvatar";
import Padding from "../../styleguide/Padding";
import Text from "../../styleguide/Text";

interface Props {
  src: any;
  name: string;
  age: number;
  text: string;
}

const Testimonial: React.FC<Props> = ({ src, name, age, text }) => {
  return (
    <Card background="secondary" fullWidth>
      <CardAvatar>
        <Avatar>
          <AvatarImage src={src}></AvatarImage>
        </Avatar>
      </CardAvatar>
      <Padding all="m">
        <Text element="h2" bold>
          {name} ({age})
        </Text>
        <Text gutterTop="m">{text}</Text>
      </Padding>
    </Card>
  );
};

export default Testimonial;
