import React from "react";
import Text from "../components/Text";
import styled from "styled-components";
import { backgroundColorChanger } from "../utils/animations";
import { MarginMediumTb } from "../components/ContentPadders";
import { useSprings, animated, interpolate, useTransition } from "react-spring";
import useInterval from "../hooks/useInterval";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ScrollableView = styled.div`
  position: absolute;
  top: 0;
  -webkit-overflow-scrolling: touch;
  min-height: calc(100%);
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
`;

const TitleSection = styled.section`
  animation: ${backgroundColorChanger} 75s linear infinite;
  display: flex;
  justify-content: center;
  padding: ${(props) => props.theme.spacing.medium};
  position: absolute;
  width: 100%;
  z-index: 3;
  min-height: 100%;
`;

const MaxWidth = styled.div`
  max-width: 900px;
`;

const AnimatedPadder = styled(({ ...props }) => <animated.div {...props} />)`
  padding: ${(props) => props.theme.spacing.smallx} 0;
`;

const AnimatedMotto = styled(({ ...props }) => <animated.div {...props} />)`
  position: absolute;
`;

const MottoWrapper = styled.div`
  position: relative;
  padding-bottom: ${(props) => props.theme.spacing.smallx};
  align-items: center;
  display: flex;
  justify-content: center;
  flex-flow: column;
`;

const to = (i) => ({
  x: 0,
  y: i == 2 ? 50 : i * 20,
  scale: 1,
  rot: 0,
  opacity: 1,
  delay: i * Math.floor(Math.random() * 195 + 1),
});

const from = (i) => ({
  x: 0,
  rot: 0,
  scale: 1.5,
  opacity: i >= 2 ? 0.1 : 1,
  y: i >= 3 ? 0 : -1000,
});

const mottos = [
  "How does mRNA-vaccines work? 💉",
  "Is scepticism legit? 🤨",
  "What makes mRNA-vaccines effective? 🦠",
];

export default function Welcome() {
  const [currentMotto, setCurrentMotto] = React.useState(mottos[0]);
  const [currentMottoCounter, setCurrentMottoCounter] = React.useState(0);

  useInterval(() => {
    if (currentMottoCounter === mottos.length) {
      setCurrentMottoCounter(0);
    } else {
      setCurrentMottoCounter(currentMottoCounter + 1);
    }
  }, 3500);

  React.useEffect(() => {
    setCurrentMotto(mottos[currentMottoCounter]);
  }, [currentMottoCounter]);

  const [props] = useSprings(3, (i) => ({
    ...to(i),
    from: from(i),
  }));

  const transitions = useTransition(currentMotto, (i) => i, {
    from: { left: -150, opacity: 0 },
    enter: { left: -2, opacity: 1 },
    leave: { left: 150, opacity: 0 },
  });

  return (
    <ScrollableView>
      <TitleSection>
        <MaxWidth>
          {props.map(({ rot, x, y, scale, opacity }, i) => {
            switch (i) {
              case 0:
                return (
                  <AnimatedPadder
                    style={{
                      opacity: opacity,
                      transform: interpolate(
                        [x, y],
                        (x, y) => `translate3d(${x}px, ${y}px, 0)`
                      ),
                    }}
                    key={i}
                  >
                    <MarginMediumTb>
                      <Text
                        variant="title"
                        element="h1"
                        textColor="white"
                        size="huge"
                        gutterBottom
                        fontType="alternative"
                        withIconLeft
                      >
                        <FontAwesomeIcon icon="virus" /> Vacci.no
                      </Text>
                    </MarginMediumTb>
                  </AnimatedPadder>
                );
              case 1:
                return (
                  <AnimatedPadder
                    style={{
                      opacity: opacity,
                      transform: interpolate(
                        [x, y],
                        (x, y) => `translate3d(${x}px, ${y}px, 0)`
                      ),
                    }}
                    key={i}
                  >
                    <MottoWrapper>
                      {transitions.map(({ item, key, props }) => (
                        <AnimatedMotto
                          style={{
                            ...props,
                            width: "100%",
                          }}
                          key={key}
                        >
                          <Text
                            element="h2"
                            variant="title"
                            textColor="white"
                          >
                            {item}
                          </Text>
                        </AnimatedMotto>
                      ))}
                    </MottoWrapper>
                  </AnimatedPadder>
                );
              case 2:
                return (
                  <AnimatedPadder
                    style={{
                      opacity: opacity,
                      transform: interpolate(
                        [x, y],
                        (x, y) => `translate3d(${x}px, ${y}px, 0)`
                      ),
                    }}
                    key={i}
                  >
                    <Text size="bigger" textColor="white">
                      This is just a placeholder while the actual website is
                      being created - stay tuned! 🎉
                    </Text>
                  </AnimatedPadder>
                );
              default:
                return null;
            }
          })}
        </MaxWidth>
      </TitleSection>
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          width: "100vw",
          textAlign: "center",
          zIndex: 200,
        }}
      >
        <Text size="small" textColor="white">
          Created with ❤ by students at NTNU
        </Text>
      </div>
    </ScrollableView>
  );
}
