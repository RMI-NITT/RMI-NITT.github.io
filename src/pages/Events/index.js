import React, { useEffect } from "react";
import PageWrapper from "../../components/PageWrapper";
import Section from "../../components/Section";
import SectionCustom from "../../components/SectionCustom";
import { AppContext } from "../../store/context";

const index = ({ title }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
  const { events } = React.useContext(AppContext).events;
  return (
    <PageWrapper>
      <Section title={"Workshops and Events"}>
        RMI firmly believes that besides all the work we do as a team to
        innovate and create the up and coming tech, it is highly necessary to
        give back to the community. We organise several workshops and events
        every year with the vision to make newcomers feel welcome and not alien
        to the field of Robotics. Some of our most important workshops and
        events include: Genesis, InHoTTs, Following, RMI Hackathon, Robovigyan,
        Pragyan Exhibition
      </Section>
      <br />
      <br />
      <br />
      {events.map((event, i) => (
        <SectionCustom
          title={event.title}
          bg={event.images[0]}
          i={i}
          key={i}
          id={`${event.title}`}
          images={event.images}
          subtitle={event.subtitle}
        >
          {event.content}
        </SectionCustom>
      ))}
    </PageWrapper>
  );
};

export default index;
