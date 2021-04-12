import React, { useEffect } from "react";
import Background, { BackdropBackground } from "../../styleguide/Background";
import Flex from "../../styleguide/Flex";
import Padding from "../../styleguide/Padding";
import StyledImage from "../../styleguide/StyledImage";
import Text from "../../styleguide/Text";
import MainMatter from "../Content/MainMatter";
import srcOldPerson from "../../assets/images/4_old_person.png";
import srcMildFeverPerson from "../../assets/images/2_person_with_mild_fever.png";
import srcScepticalPerson from "../../assets/images/1_sceptical_person_cropped.png";
import Margin from "../../styleguide/Margin";
import StyledLink from "../../styleguide/StyledLink";
import CustomBackground from "../../styleguide/CustomBackground";
import HideIf from "../../styleguide/HideIf";
import {
  BackgroundImage,
  BackgroundImageContainer,
} from "../../styleguide/BackgroundImage";
import bgDyingSection from "../../assets/images/cemetery.jpg";
import bgMadeTooFast from "../../assets/images/production.jpg";
import bgHoldingHands from "../../assets/images/6_vaccinated_holding_hands.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Concerns: React.FC = () => {
  const [moreDetails, setMoreDetails] = React.useState<Boolean>(false);

  React.useEffect(() => {
    document.title = "Vaccine Concerns | Vacci.no";
  }, []);

  return (
    <MainMatter>
      <Background background="surface" fullWidth>
        <Padding all="xl">
          <Text variant="title" element="h1" color="onSurface">
            Vaccine concerns
          </Text>
          <Text
            variant="subtitle"
            element="h2"
            color="onBackgroundContrast"
            gutterTop="s"
          >
            Are you concerned about the Covid-19 vaccine?
          </Text>

          <Flex breakAt={800}>
            <Flex basis={70} direction="column" breakAt={800}>
              <Text color="onSurface" gutterTop="m">
                Having concerns about unknown and unfamiliar things is part of
                human nature. So if you do have concerns about the Covid-19
                vaccine, you are propably a human.
              </Text>

              <Text color="onSurface" gutterTop="m">
                However, I am guessing you would agree, that when it comes to
                making decisions important both for your own, as well as the
                public health, you should not base your decision on whether
                something is unfamiliar or not. Rather, you should educate
                yourself, and become familiar with it.
              </Text>

              <Text color="onSurface" gutterTop="m">
                Luckily, that is what we are here to help you with! We will try
                look at the concerns you might have, and try to give you the
                most relevant and accurate information out there - as well as
                letting you know where information might be lacking.
              </Text>
              <Text color="onSurface" gutterTop="m" gutterBottom="m">
                We will not tell you whether or not you, in the end, should be
                concerned about taking the vaccine. We can only hope that after
                this presentation your attitude towards the vaccines is more
                informed, and that this information will guide your final
                decisions in vaccine taking.
              </Text>
            </Flex>
            <Flex basis={30}>
              <Flex align="center" justify="center" fullWidth>
                <StyledImage src={srcScepticalPerson} height="250px" />
              </Flex>
            </Flex>
          </Flex>
        </Padding>
        <BackdropBackground background="secondary" />
        <Padding left="l" right="l" fullWidth>
          <Background background="surface">
            <Padding all="l">
              <Margin top="l">
                <Flex fullWidth align="center" wrap="wrap" breakAt={400}>
                  <Flex basis={70} breakAt={500} direction="column">
                    <Text variant="subtitle" element="h2" color="onSurface">
                      Concern 1: Side effects
                    </Text>
                    <Text gutterTop="m" color="onSurface" gutterBottom="m">
                      A main concern about the Covid-19 vaccine is the side
                      effects. Indeed, some people get side effects from the
                      vaccines. Almost all of them mild, while a few are more
                      severe. There are several ways to get information about
                      the prevalence and severity of these side effects. Here we
                      will look at some that can give us some necessary
                      pointers.
                    </Text>
                  </Flex>
                  <Flex basis={30} align="center" justify="center">
                    <StyledImage src={srcOldPerson} height="250px" />
                  </Flex>
                </Flex>
              </Margin>
            </Padding>
          </Background>
        </Padding>
        <CustomBackground background={"primary"} alpha={"0.1"}>
          <Padding all="xl">
            <Text variant="title" element="h1" color="onSurface">
              A Dive Into the Numbers
            </Text>
            <Flex breakAt={500}>
              <Flex direction="column" basis={70}>
                <Text color="onSurface" gutterTop="m">
                  In a report from legemiddelverket (updated march 2nd), they
                  found that while there have been 510 000 administered vaccine
                  shots in Norway, there were only 3636 reports of suspected
                  side effects{" "}
                  <Text color="onSurface" element="span" bold>
                    [1]
                  </Text>
                  .
                </Text>

                <Text color="onSurface" gutterTop="m">
                  This is however not necessarily an accurate representations of
                  the number of people who get side effects, as it is not likely
                  that everyone who experienced side effects reported them.
                  Also, it is not certain whether the symptoms reported is
                  linked to the vaccine.
                </Text>

                <Text color="onSurface" gutterTop="m">
                  Other studies have found that just over 50 % of people who are
                  vaccinated in Norway get mild side effects like soreness where
                  the vaccine was taken, headaches and tiredness. Many also
                  report experiencing muscle achings and chills. A bit less than
                  5 % experience more severe local and systemic side effects,
                  which affected their daily life (for the few days they
                  experienced it).
                </Text>
                <Text color="onSurface" gutterTop="m">
                  A very small number of people, 2-11 cases out of a million
                  administrations to be exact, experience severe allergic
                  reactions to corona vaccines. In "normal" vaccine this
                  prevalence is lower, at about 0,8 out of every one million
                  administrations. Because of this, every institutions that is
                  allowed to administer vaccines, needs to have functioning
                  protocols for dealing with possible allergic reactions{" "}
                  <Text color="onSurface" element="span" bold>
                    [2]
                  </Text>
                  .
                </Text>

                <Text color="onSurface" gutterTop="m" bold>
                  References
                </Text>
                <Text color="onSurface" variant="pico" gutterTop="m">
                  <StyledLink
                    href="https://legemiddelverket.no/Documents/Bivirkninger%20og%20sikkerhet/Rapporter%20og%20oversikter/Koronavaksiner/20210302Rapport%20over%20meldte%20bivirkninger%20av%20koronavaksine.pdf"
                    textDecoration="underline"
                  >
                    [1] Legemiddelverket
                  </StyledLink>
                </Text>
                <Text color="onSurface" variant="pico" gutterTop="m">
                  <StyledLink
                    href=" https://www.dagensmedisin.no/artikler/2021/02/18/flere-far-anafylaksi-med-koronavaksine--kan-skyldes-fyllstoff/"
                    textDecoration="underline"
                  >
                    [2] Dagens Medisin
                  </StyledLink>
                </Text>
              </Flex>
              <Flex basis={30} direction="column">
                <HideIf screenSize="m">
                  <Margin top="m" />
                </HideIf>
                <Margin bottom="m" fullWidth>
                  <Flex align="center" justify="center" fullWidth>
                    <StyledImage src={srcMildFeverPerson} height="250px" />
                  </Flex>
                </Margin>
                <Margin bottom="m" fullWidth>
                  <Flex
                    align="center"
                    justify="center"
                    fullWidth
                    direction="column"
                  >
                    <Text variant="title" color="primary" element="h3">
                      50%
                    </Text>
                    <Text color="onSurface" gutterTop="s">
                      Experience mild symptoms
                    </Text>
                  </Flex>
                </Margin>
                <Margin bottom="m" fullWidth>
                  <Flex
                    align="center"
                    justify="center"
                    fullWidth
                    direction="column"
                  >
                    <Text variant="title" color="secondary" element="h3">
                      {"<5%"}
                    </Text>
                    <Text color="onSurface" gutterTop="s">
                      Moderate side effects
                    </Text>
                  </Flex>
                </Margin>
                <Margin bottom="m" fullWidth>
                  <Flex
                    align="center"
                    justify="center"
                    fullWidth
                    direction="column"
                  >
                    <Text variant="title" color="secondary" element="h3">
                      {"2-11 of 1 million"}
                    </Text>
                    <Text color="onSurface" gutterTop="s">
                      Severe side effects
                    </Text>
                  </Flex>
                </Margin>
              </Flex>
            </Flex>
          </Padding>
        </CustomBackground>

        <CustomBackground background={"surface"} alpha={"1"}>
          <BackgroundImage src={bgDyingSection} height="250px">
            <Flex align="center" justify="center" fullWidth fullHeight>
              <BackgroundImageContainer>
                <CustomBackground alpha="0.85" background="surface">
                  <Padding all="l">
                    <Text
                      color="onSurface"
                      variant="subtitle"
                      textAlign="center"
                    >
                      Can you die from taking the vaccine?
                    </Text>
                  </Padding>
                </CustomBackground>
              </BackgroundImageContainer>
            </Flex>
          </BackgroundImage>
          <Padding all="xl">
            <Text color="onSurface" gutterTop="m">
              This question unfortunately is not easy to give a straight forward
              answer to.
            </Text>

            <Text color="onSurface" gutterTop="m">
              Why? Well, the thing is, people, at some point in their life, die.
              Especially old people.
            </Text>

            <Text color="onSurface" gutterTop="m">
              In the continually updated report from legemiddelverket (updated
              02/03), they note that 111 people "in need of nursing" (old and/or
              sick) people in Norway have died within three weeks after they got
              the covid vaccine (not mRNA specifically) . But, out of the people
              older than 75 years old, about 85 die every day (before Corona as
              well). This makes it very hard to determine whether or not
              reactions to the vaccine could be one of the causes of death.
            </Text>
            <Text color="onSurface" gutterTop="m">
              Legemiddelverket has put down a team of external expert to look
              into if there is a possible causal connection of the deaths and
              the vaccination. But so far, the numbers are not alarming, and in
              adminstration of the vaccine to older and sick people, the
              benefits are still concidered to greatly outweigh the risks.{" "}
              <Text color="onSurface" element="span" bold>
                [1]
              </Text>
              .
            </Text>

            <Text color="onSurface" gutterTop="m" bold>
              Reference
            </Text>
            <Text color="onSurface" variant="pico" gutterTop="m">
              <StyledLink
                href="https://legemiddelverket.no/Documents/Bivirkninger%20og%20sikkerhet/Rapporter%20og%20oversikter/Koronavaksiner/20210302Rapport%20over%20meldte%20bivirkninger%20av%20koronavaksine.pdf"
                textDecoration="underline"
              >
                [1] Legemiddelverket
              </StyledLink>
            </Text>
          </Padding>
        </CustomBackground>
        <Background background="background">
          <Padding top="xl" bottom="xl">
            <CustomBackground background="primary" alpha="0.1">
              <Padding all="xl">
                <Text color="onSurface" variant="title">
                  Can it alter your DNA?
                </Text>
                <Text color="onSurface" gutterTop="m">
                  Finally a question with a straightforward answer:{" "}
                  <Text bold element="span" color="onSurface">
                    No.
                  </Text>
                </Text>

                <Text color="onSurface" gutterTop="m">
                  Long story short, our DNA is in the nucleus of the cell, and
                  the mRNA of vaccine can't enter this part of the cell.
                </Text>

                <Text color="onSurface" gutterTop="m" bold>
                  Don't believe us? Fine, read more about it in these high
                  quality scientific peer-reviewed papers:
                </Text>
                <Text color="onSurface" variant="pico" gutterTop="m">
                  <StyledLink
                    href="https://www.nature.com/articles/nrd4278"
                    textDecoration="underline"
                  >
                    https://www.nature.com/articles/nrd4278
                  </StyledLink>
                </Text>
                <Text color="onSurface" variant="pico" gutterTop="m">
                  <StyledLink
                    href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7218962/"
                    textDecoration="underline"
                  >
                    https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7218962/
                  </StyledLink>
                </Text>
                <Text color="onSurface" variant="pico" gutterTop="m">
                  <StyledLink
                    href="https://www.nature.com/articles/nrd.2017.243"
                    textDecoration="underline"
                  >
                    https://www.nature.com/articles/nrd.2017.243
                  </StyledLink>
                </Text>
              </Padding>
            </CustomBackground>
          </Padding>
        </Background>

        <BackgroundImage src={bgMadeTooFast} height="auto">
          <CustomBackground background="primary" alpha="0.5">
            <HideIf screenSize="m">
              <Padding all="m">
                <Flex
                  direction="column"
                  align="center"
                  justify="center"
                  fullWidth
                >
                  <Text variant="subtitle" element="h2" color="onPrimary">
                    Concern 2: Made too fast?
                  </Text>

                  <Text
                    variant="body"
                    element="p"
                    color="onPrimary"
                    gutterTop="s"
                  >
                    Let's look into that.
                  </Text>
                </Flex>
              </Padding>
            </HideIf>
            <HideIf screenSize="s">
              <Flex fullWidth justify="center">
                <Flex basis={72} direction="column">
                  <Padding all="l">
                    <Text variant="title" element="h2" color="onPrimary">
                      Concern 2: Made too fast?
                    </Text>
                    <Text variant="body" element="p" color="onPrimary">
                      Some are scared that the vaccine making, testing and
                      approval have all happened too fast.
                    </Text>
                    <Text
                      variant="body"
                      element="p"
                      color="onPrimary"
                      gutterTop="s"
                    >
                      Let's look into that.
                    </Text>
                  </Padding>
                </Flex>
              </Flex>
            </HideIf>
          </CustomBackground>
        </BackgroundImage>
        <CustomBackground background="surface">
          <Padding all="l">
            <Margin top="l">
              <Flex fullWidth breakAt={600} justify="center">
                <Flex basis={70} direction="column">
                  <Text color="onSurface">
                    Normally the development of a new vaccine takes several
                    years. The Pfizer/BioNtech vaccine took well under a year.
                    How can that be, and can it really be as safe as other
                    vaccines?
                  </Text>

                  <Text color="onSurface" gutterTop="m">
                    One reason that it has been possible to make the vaccines so
                    fast, is the enormous amount of recources put into the
                    development of the vaccines (it was important enough for a
                    lot of people/countries wth a lot of money). mRNA vaccine
                    can by default also be made faster - the only thing that
                    needs to be changed for making a new vaccine for a new
                    disease is to change the strain of mRNA within it. Another
                    reason is some revised procedures for approval of vaccines
                    that have been put in place during this pandemic. Let's look
                    into those. But first, we'll give you an introduction to the
                    general road to approval for vaccines.
                  </Text>

                  <Text color="onSurface" gutterTop="m">
                    The European Medicines Agency's (EMA) main policy is that it
                    will approve a vaccine when the benefits and the risks of
                    the vaccine are concider to outweigh the risk of illness and
                    death from the disease. This risks and benefits needs to be
                    well documented, and there are strict criteria for what
                    documentation is needed. The until now approved vaccines
                    (BioNtech/Pfizer, Moderna and Astra-Zenica) have all been
                    evaluated to meet this criteria.
                    <Text color="onSurface" element="span" bold>
                      {" "}
                      [1]
                    </Text>
                  </Text>
                  <Text color="onSurface" gutterTop="m">
                    The new corona vaccines also have had to hold up to the same
                    strict standards as mentioned above. But, there is one
                    difference:
                  </Text>
                  <Text color="onSurface" gutterTop="m">
                    For vaccine to be approved, normally, all and sufficient
                    information about the vaccine's benefits and risks had to be
                    sent in at once, before the EMA would start concidering it
                    for approval. Because of the importance of getting a vaccine
                    for corona fast, they came up with a faster way that would
                    still ensure that the vaccine was safe and effective.
                  </Text>

                  <Text color="onSurface" gutterTop="m">
                    It was decided that the vaccine manufacturers could send in
                    the data from the testing as they got it, and then the EMA
                    will decide when there is sufficient evidence that the
                    benefits and risks weighs out more strongly than the risks
                    for sickness and death from the virus. This process has been
                    named "rolling review".
                  </Text>
                  <Text color="onSurface" gutterTop="m">
                    They are not given a "final" approvement at this stage, but
                    rather a conditional one. This means that the manufacturers
                    have to continue to study the effect and side effects of the
                    vaccines, until the EMA decides that the information is
                    sufficient enough to give it a final approval.
                  </Text>
                  <Text color="onSurface" gutterTop="m" bold>
                    References
                  </Text>
                  <Text color="onSurface" variant="pico" gutterTop="m">
                    <StyledLink
                      href="https://legemiddelverket.no/godkjenning/koronavaksiner/godkjenningsprosessen-for-vaksiner-mot-covid-19#dette-vet-vi-p%C3%A5-godkjenningstidspunktet- "
                      textDecoration="underline"
                    >
                      [1] Vaccine Approval Process
                    </StyledLink>
                  </Text>
                </Flex>
              </Flex>
            </Margin>
          </Padding>
        </CustomBackground>

        <CustomBackground background={"primary"} alpha={"0.1"}>
          <CustomBackground alpha="0.85" background="secondary">
            <Padding all="xl">
              <Text color="onSecondary" variant="title" textAlign="center">
                Concern 3: Long term side-effects?
              </Text>
              <Text color="onSecondary" textAlign="center" gutterTop="m" italic>
                What do we know about possible long term side effects?
              </Text>
            </Padding>
          </CustomBackground>
          <Padding all="l">
            <Margin top="l">
              <Flex fullWidth breakAt={600} justify="center">
                <Flex basis={70} direction="column">
                  <Text color="onSurface">
                    It is inherently impossible to predict the outcome of
                    something not yet tested with an absolute certainty.
                    Therefore, a certain answer to the questions- if there are
                    long term side effects, what they might be, how often they
                    occur- cannot be given.
                  </Text>

                  <Text color="onSurface" gutterTop="m">
                    We can however with some degree of certainity predict the
                    answers of these question, based on important knowledge: As
                    several hundred million people have been vaccinated since
                    mid 2020, with strict continous protocols of monitoring side
                    effects and risk, most side effects would likely have been
                    caught by now. Also, no previous vaccines has been seen to
                    trigger side effects with an onset longer than 6 months
                    after injection (reference needed).
                  </Text>

                  <Text color="onSurface" gutterTop="m">
                    One aspect to concider is the history of vaccines. How
                    adverse have long term side effects of vaccines been?
                  </Text>
                  <Text color="onSurface" gutterTop="m">
                    The short answer is, there have been some few, but long term
                    side effects of the vaccines have highly been outweighed by
                    the reduced risk of getting long term side effects caused by
                    the deseases itself.
                    <Text color="onSurface" element="span" bold>
                      {" "}
                      [1]
                    </Text>
                  </Text>
                  <Text color="onSurface" gutterTop="m">
                    A lot of people still have the long term side effects of the
                    swine flue vaccine in mind, and are worried the same thing
                    might happen with this one.
                  </Text>
                  <Margin top="m" bottom="m" fullWidth>
                    <CustomBackground
                      background="error"
                      alpha="0.6"
                      clickable
                      fullWidth
                    >
                      {!moreDetails && (
                        <Padding
                          all="m"
                          onClick={() => setMoreDetails(!moreDetails)}
                        >
                          <Text
                            variant="body"
                            element="p"
                            color="onPrimary"
                            textAlign="center"
                            bold
                          >
                            Reports on the swineflu vaccine side-effects{" "}
                            <Text
                              element="span"
                              color="onPrimary"
                              gutterLeft="s"
                              bold
                            >
                              <FontAwesomeIcon icon="chevron-down" />
                            </Text>
                          </Text>
                        </Padding>
                      )}
                      {moreDetails && (
                        <>
                          <Padding all="m">
                            <Text
                              variant="body"
                              color="onPrimary"
                              textAlign="center"
                              bold
                            >
                              Swine Flu Vaccine Reported Side-effects
                            </Text>
                          </Padding>
                          <Padding left="l" right="l" top="m" bottom="m">
                            <Text variant="body" color="onPrimary">
                              Some reports have indeed found that getting the
                              swine flue vaccine increased the risk of
                              developing narcolepsia (falling asleep at strange
                              times). And while this is very tragic for the
                              people affacted, it needs to be seen in context of
                              the long term effects, and death rate seen in
                              people who got the actual swine flu virus. While
                              it was a five fold greater risk of developing
                              narcolepsia after having the vaccines (one or two
                              cases per 100 000 vaccinated), there was a two
                              fold increase in risk of getting chronic fatigue
                              syndrom, as well as a two fold greater risk for
                              developing Guillain-Barre syndrome. The same went
                              for miscarriages.{" "}
                              <Text element="span" bold color="onPrimary">
                                [2]
                              </Text>{" "}
                              Also, keep in mind that the vaccine stopped the
                              outbreak and saved lives.
                            </Text>
                          </Padding>

                          <Padding
                            all="m"
                            onClick={() => setMoreDetails(!moreDetails)}
                          >
                            <Text
                              variant="body"
                              color="onPrimary"
                              gutterTop="s"
                              textAlign="center"
                              bold
                            >
                              Hide
                            </Text>
                          </Padding>
                        </>
                      )}
                    </CustomBackground>
                  </Margin>

                  <Text color="onSurface" gutterTop="m">
                    As the corona vaccines has been administered to several
                    hundrer million people{" "}
                    <Text element="span" bold color="onSurface">
                      [3]
                    </Text>
                    , and with people having been tested since mid 2020, the
                    vaccine seems to be very safe. On the other hand, new
                    research{" "}
                    <Text element="span" bold color="onSurface">
                      [4]
                    </Text>{" "}
                    looked at 1500 people who were discharged from the hospital
                    after being infected with Covid-19, and found that 73 % of
                    them still reported symptoms after the desease, with the
                    most common being exhaustion and musclue fatigue (63%).
                  </Text>
                  <Text color="onSurface" gutterTop="m" bold>
                    References
                  </Text>
                  <Text color="onSurface" variant="pico" gutterTop="m">
                    <StyledLink
                      href="https://ourworldindata.org/vaccination#vaccines-save-lives "
                      textDecoration="underline"
                    >
                      [1] Our World In Data: Vaccines Save Lives
                    </StyledLink>
                  </Text>
                  <Text color="onSurface" variant="pico" gutterTop="m">
                    <StyledLink
                      href="https://www.fhi.no/nyheter/2017/pandemi/"
                      textDecoration="underline"
                    >
                      [2] https://www.fhi.no/nyheter/2017/pandemi/
                    </StyledLink>
                  </Text>
                  <Text color="onSurface" variant="pico" gutterTop="m">
                    <StyledLink
                      href="https://ourworldindata.org/covid-vaccinations"
                      textDecoration="underline"
                    >
                      [3] https://ourworldindata.org/covid-vaccinations
                    </StyledLink>
                  </Text>
                  <Text color="onSurface" variant="pico" gutterTop="m">
                    <StyledLink
                      href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(20)32656-8/fulltext"
                      textDecoration="underline"
                    >
                      [4] The Lancet article
                    </StyledLink>
                  </Text>
                </Flex>
              </Flex>
            </Margin>
          </Padding>
        </CustomBackground>
        <StyledImage src={bgHoldingHands} width="100%" height={"400px"} />

        <CustomBackground background="primary" alpha="0.5" fullWidth>
          <Padding top="m" bottom="m">
            <Flex direction="column" align="center" justify="center" fullWidth>
              <Text variant="title" element="h2" color="onPrimary">
                Side-effects aside
              </Text>
            </Flex>
          </Padding>
        </CustomBackground>
        <CustomBackground background="primary" alpha="0.7" fullWidth>
          <Flex fullWidth breakAt={600} justify="center">
            <Flex basis={80} direction="column">
              <Padding all="xl">
                <Text color="onPrimary">
                  After all this talk about side effects and dangers of taking
                  the corona vaccine, maybe taking it doesn't sound too
                  tempting?
                </Text>

                <Text color="onPrimary" gutterTop="l">
                  Well, remember when we looked into if you could die from
                  taking the corona vaccine? The answer seemed to be something
                  like: There might be a very small risk of that if you are very
                  old and frail and/ or terminally ill. There also might be no
                  risk at all.
                </Text>

                <Text color="onPrimary" gutterTop="l">
                  If we flipped the coin and asked if it is possible to die from
                  covid-19 itself, the answer would be: Yes, it seems like just
                  under 1% of people who get covid-19 dies.
                </Text>

                <Text color="onPrimary" gutterTop="l">
                  To make your final decision on whether or not to take the
                  vaccine you need to do this sort of weighing the benefits and
                  risks of both getting the vaccine and getting versus not
                  getting corona.
                </Text>

                <Text color="onPrimary" gutterTop="l" italic>
                  A solid question to ask yourself in this context could be this
                  one:
                </Text>
                <Margin top="m" bottom="m">
                  <CustomBackground alpha="0.2" background="tertiary">
                    <Padding all="m">
                      <Text color="onPrimary" bold textAlign="center">
                        Would I rather risk getting covid-19 with all its
                        symptoms, rather than risking getting side effects from
                        taking the vaccine?
                      </Text>
                    </Padding>
                  </CustomBackground>
                </Margin>

                <Text color="onPrimary" gutterTop="l">
                  There is also another dimension of what to concider; the fact
                  that it seems like 50- 80 % of a population needs to be
                  vaccinated for it being likely that the virus can no longer
                  spread.
                </Text>

                <Text color="onPrimary" gutterTop="l" italic>
                  This should lead to you also asking yourself the question:
                </Text>

                <Margin top="m" bottom="m">
                  <CustomBackground alpha="0.2" background="tertiary">
                    <Padding all="m">
                      <Text color="onPrimary" bold textAlign="center">
                        Do I feel that the personal risks of side effects from
                        taking the vaccines overweighs the global benefits of
                        getting rid of this pandemic?
                      </Text>
                    </Padding>
                  </CustomBackground>
                </Margin>

                <Text color="onPrimary" gutterTop="l">
                  The evidence seems to show; herd immunity through vaccination
                  is the fastest and best way to get rid of this pandemic, and
                  we need 50-80 % of all us to get vaccinated. Will you be one
                  of those?
                </Text>

                <Text color="onPrimary" gutterTop="l" bold>
                  Thanks for hanging along. We hope you are more informed now
                  than you were before. Happy deciding!{" "}
                </Text>
              </Padding>
            </Flex>
          </Flex>
        </CustomBackground>
      </Background>
    </MainMatter>
  );
};

export default Concerns;
