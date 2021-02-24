import React from "react";
import { Avatar, AvatarImage } from "../../styleguide/Avatar";
import Card from "../../styleguide/Card";
import Margin from "../../styleguide/Margin";
import Padding from "../../styleguide/Padding";
import Text from "../../styleguide/Text";
import little_my from "../../assets/little_my.png";
import moomin from "../../assets/moomin.png";
import sniff from "../../assets/sniff.jpg";
import moominmamma from "../../assets/moominmamma.jpg";
import moominpappa from "../../assets/moominpappa.jpg";
import snufkin from "../../assets/snufkin.jpg";
import Story from "../Story/Story";
import Flex from "../../styleguide/Flex";
import Background from "../../styleguide/Background";
import StyledLink from "../../styleguide/StyledLink";
import { List, ListItem } from "../../styleguide/List";
import Testimonial from "../Interview/Testimonial";

const Content: React.FC = () => {
  return (
    <Flex wrap="wrap" gap={10} direction="row-reverse" breakAt={1000}>
      <Flex flex={3} direction="column" gap={10}>
        <Flex fullWidth>
          <Text variant="title" element="h2" color="onBackground">
            A brief introduction to mRNA
          </Text>
        </Flex>
        <Flex fullWidth>
          <Story />
        </Flex>
        <Flex fullWidth>
          <Text variant="title" element="h2" color="onBackground">
            On the street interviews
          </Text>
        </Flex>
        <Flex wrap="wrap" gap={15} breakAt={700}>
          <Flex basis={32} fullWidth>
            <Testimonial
              src={moominmamma}
              name="Moominmamma"
              age={44}
              text={
                "Yes yes - me and Moominpappa got the shot last weekend. I felt nothing, but Moominpappa cried a little. Don't tell him I said that."
              }
            />
          </Flex>
          <Flex basis={32} fullWidth>
            <Testimonial
              src={snufkin}
              name="Snufkin"
              age={28}
              text={
                "Yes. Yes, I'll take it. But first I need to fish some fishes."
              }
            />
          </Flex>
          <Flex basis={32} fullWidth>
            <Testimonial
              src={sniff}
              name="Sniff"
              age={19}
              text={"Haha, yikes! Guess I'll take it when it's my turn."}
            />
          </Flex>
          <Flex basis={32} fullWidth>
            <Testimonial
              src={little_my}
              name="Little My"
              age={12}
              text={
                "Hmm.. Hold on, what do I gain from that? Maybe I'll sell my place in the que to someone else."
              }
            />
          </Flex>
          <Flex basis={32} fullWidth>
            <Testimonial
              src={moominpappa}
              name="Moominpappa"
              age={52}
              text={
                "Yes, already got it. Didn't hurt a bit. Don't worry folks!"
              }
            />
          </Flex>
          <Flex basis={32} fullWidth>
            <Testimonial
              src={moomin}
              name="Moomin"
              age={14}
              text={"Guess I'm not old enough yet to have an opinion about it."}
            />
          </Flex>
        </Flex>
      </Flex>

      <Flex flex={1} direction="column" justify="space-between" gap={10}>
        <Card background="primary" fullWidth>
          <Padding all="m">
            <Text variant="subtitle" element="h2">
              About mRNA vaccines
            </Text>
            <Text gutterTop="m">
              mRNA vaccines are a new type of vaccine to protect against
              infectious diseases. To trigger an immune response, many vaccines
              put a weakened or inactivated germ into our bodies. Not mRNA
              vaccines. Instead, they teach our cells how to make a protein—or
              even just a piece of a protein—that triggers an immune response
              inside our bodies. That immune response, which produces
              antibodies, is what protects us from getting infected if the real
              virus enters our bodies.
            </Text>
            <Margin top="s">
              <Text variant="pico" element="span">
                Source{" "}
                <StyledLink href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/different-vaccines/mrna.html">
                  <Text gutterLeft="s" variant="pico" element="span" bold>
                    CDC.gov
                  </Text>
                </StyledLink>
              </Text>
            </Margin>
          </Padding>
        </Card>
        <Card background="primary" fullWidth>
          <Padding all="m">
            <Text variant="subtitle" element="h2">
              mRNA vaccine facts
            </Text>
            <Text gutterTop="m" bold>
              They cannot give someone COVID-19.
            </Text>
            <List>
              <ListItem>
                <Text>
                  mRNA vaccines do not use the live virus that causes COVID-19.
                </Text>
              </ListItem>
            </List>
            <Text gutterTop="m" bold>
              They do not affect or interact with our DNA in any way.
            </Text>
            <List>
              <ListItem>
                <Text>
                  mRNA never enters the nucleus of the cell, which is where our
                  DNA (genetic material) is kept.
                </Text>
              </ListItem>
              <ListItem>
                <Text>
                  The cell breaks down and gets rid of the mRNA soon after it is
                  finished using the instructions.
                </Text>
              </ListItem>
            </List>

            <Margin top="s">
              <Text variant="pico" element="span">
                Source{" "}
                <StyledLink href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/different-vaccines/mrna.html">
                  <Text gutterLeft="s" variant="pico" element="span" bold>
                    CDC.gov
                  </Text>
                </StyledLink>
              </Text>
            </Margin>
          </Padding>
        </Card>
      </Flex>
    </Flex>
  );
};

export default Content;
