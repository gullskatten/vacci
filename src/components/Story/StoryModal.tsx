import React from "react";
import Overlay from "../../styleguide/Overlay";
import styled from "styled-components";
import Margin from "../../styleguide/Margin";
import Text from "../../styleguide/Text";
import { RouteContext } from "../../context/RouteContext";
import { useHistory } from "react-router";
import Modal from "../../styleguide/Modal";
import Flex from "../../styleguide/Flex";
import StyledRouterLink from "../../styleguide/StyledRouterLink";
import Background from "../../styleguide/Background";

const Relative = styled.div`
  position: relative;
`;

const StickyTitle = styled(Background)`
  position: sticky;
  top: 0;
  padding: ${(props) => props.theme.spacing.m}
    ${(props) => props.theme.spacing.l};

  width: 100%;
  z-index: 2;
`;

interface StoryModalProps {
  documentTitle: string;
  modalHeading: string;
  children: React.ReactNode;
}

const StoryModal: React.FC<StoryModalProps> = ({
  modalHeading,
  documentTitle,
  children,
}) => {
  const { setRoute } = React.useContext(RouteContext);
  const history = useHistory();

  React.useEffect(() => {
    document.title = documentTitle;
  }, []);

  const routeToHome = () => {
    history.push("/");
    setRoute("/");
  };

  return (
    <Relative>
      <Flex justify="center" align="center" fullWidth>
        <Margin top="l" fullWidth>
          <Modal>
            <StickyTitle background="surface">
              <Flex fullWidth justify="space-between" align="center">
                <Text variant="title" color="onBackground" element="h1">
                  {modalHeading}
                </Text>
                <Text color="onBackground" element="span">
                  <StyledRouterLink to="/" textDecoration="underline">
                    Close
                  </StyledRouterLink>
                </Text>
              </Flex>
            </StickyTitle>
            <Margin top="m">{children}</Margin>
          </Modal>
        </Margin>
      </Flex>
      <Overlay onClick={routeToHome} />
    </Relative>
  );
};

export default StoryModal;
