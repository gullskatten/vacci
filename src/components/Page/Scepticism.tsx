import React from "react";
import Card from "../../styleguide/Card";
import Padding from "../../styleguide/Padding";
import Text from "../../styleguide/Text";

interface ScepticismItem {
  title: string;
  body: string;
  words: number;
  isBlue?: boolean;
}

const Scepticism: React.FC<ScepticismItem> = ({
  title,
  body,
  words,
  isBlue,
}) => {
  return (
    <div>
      <Card background="error">
        <Padding all="m">
          <Text variant="title" color="onBackground">
            {title}
          </Text>
          <Text variant="body" color="onBackground">
            {body} ({words})
          </Text>
        </Padding>
      </Card>
    </div>
  );
};

export default Scepticism;
