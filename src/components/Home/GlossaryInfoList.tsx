import { IconProp } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import { List, ListItem } from "../../styleguide/List";
import Text from "../../styleguide/Text";

const GlossaryInfoList: React.FC = () => {
  return (
    <List fullWidth>
      <ListItem>
        <Text variant="body" element="h3" color="onSurface" bold>
          Quick Explanations
        </Text>
      </ListItem>
      <ListItem>
        <Text variant="pico" element="p" color="onSurface">
          <Text
            variant="pico"
            element="span"
            color="secondary"
            gutterRight="s"
            bold
          >
            DNA:
          </Text>
          Our genetic information is stored in a molecule called DNA. We can
          think of the DNA as a cookbook.
        </Text>
      </ListItem>
      <ListItem>
        <Text variant="pico" element="p" color="onSurface">
          <Text
            variant="pico"
            element="span"
            color="secondary"
            gutterRight="s"
            bold
          >
            RNA:
          </Text>
          Pieces of our DNA are copied into RNA. We can think of RNA as a copy
          of a specific recipe page in the cookbook. A subgroup of RNAs is
          called messenger RNA (mRNA). This subgroup is responsible for the
          production of proteins. Interestingly, some viruses use RNA as their
          storage for genetic material. This means that they skip the need for
          DNA.
        </Text>
      </ListItem>
      <ListItem>
        <Text variant="pico" element="p" color="onSurface">
          <Text
            variant="pico"
            element="span"
            color="secondary"
            gutterRight="s"
            bold
          >
            Proteins:
          </Text>
          Building blocks of all organisms. We can think of proteins as the dish
          that is specified by our DNA, the cookbook.
        </Text>
      </ListItem>
    </List>
  );
};

export default GlossaryInfoList;
