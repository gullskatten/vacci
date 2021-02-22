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
      <Margin gutterBase="l">
        <Card background="primary">
          <CardAvatar>
            <Avatar>
              <AvatarImage src={esp} />
            </Avatar>
          </CardAvatar>

          <Padding gutterBase="l">
            <Text variant="subtitle" element="h2" color="onPrimary">
              Espen Gudmundsen (27)
            </Text>
            <Text element="p" gutterTop="m" color="onPrimary">
              Jeg føler meg trygg på at vaksinen er trygg! Liker ikke sprøyter
              da...
            </Text>
          </Padding>
        </Card>
      </Margin>
      <Margin gutterBase="l">
        <Card background="secondary">
          <CardAvatar>
            <Avatar>
              <AvatarImage src={esp} />
            </Avatar>
          </CardAvatar>

          <Padding gutterBase="l">
            <Text variant="subtitle" element="h2" color="onPrimary">
              Espen Gudmundsen (27)
            </Text>
            <Text element="p" gutterTop="m" color="onPrimary">
              I feel that the vaccine is safe! I don't like needles however...
            </Text>
          </Padding>
        </Card>
      </Margin>
      <Flex justify="space-between" direction="row">
        <Card background="primary">
          <Padding gutterBase="l">
            <Text variant="subtitle" element="h2" color="onPrimary">
              Who?
            </Text>
            <Text element="p" gutterTop="m" color="onPrimary">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Text>
          </Padding>
        </Card>
        <Card background="secondaryVariant">
          <Padding gutterBase="l">
            <Text variant="subtitle" element="h2" color="onPrimary">
              Why is this important?
            </Text>
            <Text element="p" gutterTop="m" color="onPrimary">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc.{" "}
            </Text>
          </Padding>
        </Card>
      </Flex>
    </>
  );
};

export default Content;
