import { Container, styled } from "@mui/material";
import React, { useContext } from "react";
import { fontStyles, colors } from "../../../constants";
import { ReactComponent as InSvg } from "../../../assets/memberCardSvgs/in.svg";
import { ReactComponent as MailSvg } from "../../../assets/memberCardSvgs/mail.svg";
import { ReactComponent as WebSvg } from "../../../assets/memberCardSvgs/web.svg";
import { AppContext } from "../../../store/context";

const FacadLayout = styled("div")({
  display: "flex",
  flexDirection: "column",
});

const Icons = styled("div")({
  display: "flex",
  width: "fit-content",
  bottom: "1rem",
  gap: "0.8rem",
  marginTop: "1rem",
});

const Main = styled("div")({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  marginBlock: "4rem",
  gap: "4rem",
  "@media (max-width: 767px)": {
    flexDirection: "column",
    marginBottom: "0rem",
  },
});

const Img = styled("img")({
  width: "16rem",
  height: "16rem",
  borderRadius: "0.8rem",
  boxShadow: `0 0 16px ${colors.primary}BB`,
});

const ProfHeading = styled("div")({
  display: "flex",
  flexDirection: "column",
});

const Name = styled("div")({
  ...fontStyles.heading,
  fontSize: "2.2rem",
});

const Position = styled("div")({
  ...fontStyles.content,
  color: colors.grey,
});

const Department = styled("div")({
  ...fontStyles.content,
});

const Contents = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  "@media (max-width: 767px)": {
    padding: "4rem",
  },
});

const contents = [
  {
    heading: "Qualification",
    type: "bullets",
    content: [
      {
        subHeading: "",
        data: [
          "BE Mechanical (CIT, Coimbatore)1989",
          "ME Manufacturing Technology (REC, Tiruchirappalli) 1992",
          "PhD Mechanical (NIT, Tiruchirappalli) 2009",
        ],
      },
      {
        subHeading: "Project",
        data: [
          "BE Mechanical (CIT, Coimbatore)1989",
          "ME Manufacturing Technology (REC, Tiruchirappalli) 1992",
          "PhD Mechanical (NIT, Tiruchirappalli) 2009",
        ],
      },
    ],
  },
  {
    heading: "Qualification",
    type: "para",
    content: [
      {
        subHeading: "Consultancy Project",
        data: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        subHeading: "",
        data: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      },
    ],
  },
];

const ContentLayout = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  alignItems: "center",
});
const ContentHeading = styled("div")({
  ...fontStyles.heading,
  fontSize: "1.6rem",
  marginLeft: "1.6rem",
  marginBottom: "0.6rem",
  "@media (max-width: 767px)": {
    marginLeft: "0rem",
    fontSize: "1.4rem",
  },
});

const ContentContent = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "1.6rem",
});

const Paragraph = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "0.6rem",
});
const ParagraphTitle = styled("div")({
  ...fontStyles.heading,
  fontSize: "1.4rem",
  color: colors.grey,
  fontWeight: 500,
  marginLeft: "1.6rem",
  fontStyle: "italic",
  "@media (max-width: 767px)": {
    fontSize: "1.2rem",
    marginLeft: "0rem",
  },
});
const ParagraphContent = styled("div")({
  ...fontStyles.content,
  marginLeft: "1.6rem",
  "@media (max-width: 767px)": {
    fontSize: "0.9rem",
    marginLeft: "0rem",
  },
});

const BulletsContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "0.6rem",
});

const Bullet = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  gap: "1rem",
});

const BulletPoint = styled("div")({
  minWidth: "0.6rem",
  minHeight: "0.6rem",
  backgroundColor: colors.primary,
  borderRadius: "100%",
  marginTop: "0.6rem",
});
const BulletContent = styled("div")({
  ...fontStyles.content,
  "@media (max-width: 767px)": {
    fontSize: "0.9rem",
  },
});

const Content = ({ data }) => {
  return (
    <ContentLayout>
      <Container maxWidth="lg">
        <ContentHeading>{data.header}</ContentHeading>
        <ContentContent>
          {data.type === "para"
            ? data.subdata.map((para, id) => (
                <Paragraph key={id}>
                  {para.subheading !== "" && (
                    <ParagraphTitle>{para.subheading}</ParagraphTitle>
                  )}
                  <ParagraphContent>{para.data}</ParagraphContent>
                </Paragraph>
              ))
            : data.subdata.map((bull, id) => (
                <Paragraph key={id}>
                  {bull.subheading !== "" && (
                    <ParagraphTitle>{bull.subheading}</ParagraphTitle>
                  )}
                  <BulletsContainer>
                    {bull.data.map((bulletPoint, idx) => (
                      <Bullet key={idx}>
                        <BulletPoint />
                        <BulletContent>{bulletPoint}</BulletContent>
                      </Bullet>
                    ))}
                  </BulletsContainer>
                </Paragraph>
              ))}
        </ContentContent>
      </Container>
    </ContentLayout>
  );
};

const index = () => {
  const { facultyAdvisor } = useContext(AppContext);
  return (
    <FacadLayout>
      <Main>
        <Img src={facultyAdvisor.imageLink} />
        <ProfHeading>
          <Name>{facultyAdvisor.name}</Name>
          <Position>{facultyAdvisor.position}</Position>
          <Department>{facultyAdvisor.department}</Department>
          <Icons>
            {facultyAdvisor.linkedIn !== "" && (
              <a
                href={facultyAdvisor.linkedIn}
                target="_blank"
                rel="noreferrer"
              >
                <InSvg style={{ width: "1.6rem" }} />
              </a>
            )}
            {facultyAdvisor.email !== "" && (
              <a
                href={"mailto:" + facultyAdvisor.email}
                target="_blank"
                rel="noreferrer"
              >
                <MailSvg style={{ width: "1.6rem" }} />
              </a>
            )}
            {facultyAdvisor.personalPage !== "" && (
              <a
                href={facultyAdvisor.personalPage}
                target="_blank"
                rel="noreferrer"
              >
                <WebSvg style={{ width: "1.6rem" }} />
              </a>
            )}
          </Icons>
        </ProfHeading>
      </Main>
      <Contents>
        {facultyAdvisor.details.map((content, id) => (
          <Content data={content} key={id} />
        ))}
      </Contents>
    </FacadLayout>
  );
};

export default index;
