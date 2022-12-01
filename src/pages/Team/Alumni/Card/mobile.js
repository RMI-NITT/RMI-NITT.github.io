import { Box, Divider, styled } from "@mui/material";
import React from "react";
import { colors } from "../../../../constants";
import { ReactComponent as GitSvg } from "../../../../assets/memberCardSvgs/git.svg";
import { ReactComponent as InSvg } from "../../../../assets/memberCardSvgs/in.svg";
import { ReactComponent as MailSvg } from "../../../../assets/memberCardSvgs/mail.svg";
import { ReactComponent as WebSvg } from "../../../../assets/memberCardSvgs/web.svg";
import { ReactComponent as FlipOne } from "../../../../assets/memberCardSvgs/flipsvg1.svg";
import { ReactComponent as FlipTwo } from "../../../../assets/memberCardSvgs/flipsvg2.svg";
import noprofile from "../../../../assets/noprofile.png";
import { Link } from "react-router-dom";
import { nameModder } from ".";

const CardLayout = styled("div")({
  backgroundColor: colors.dark,
  height: "fit-content",
  width: "95%",
  margin: "auto",
  boxShadow: `0 0 16px ${colors.primary}BB`,
  borderRadius: "0.8rem",
  transformStyle: "preserve-3d",
  perspective: "1000px",
  cursor: "pointer",
});

const Front = styled("div")({
  display: "flex",
  flexDirection: "row",
  webkitBackfaceVisibility: "hidden",
  backfaceVisibility: "hidden",
  transformStyle: "preserve-3d",
});

const ImgHolder = styled("div")({
  height: "100%",
  flex: 1,
  overflow: "hidden",
  padding: "0.8rem",
  paddingRight: 0,
  alignItems: "center",
});

const ContentHolder = styled("div")({
  height: "100%",
  flex: 1,
  overflow: "hidden",
  padding: "0.8rem",
  paddingLeft: 0,
  paddingRight: 0,
});

const Img = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "contain",
  borderRadius: "0.3rem",
});

const NameContainer = styled("div")({
  width: "100%",
  height: "3.5rem",
  padding: "1rem",
  transition: "all 0.3s ease-in-out",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

const FirstName = styled("div")({
  fontFamily: "Poppins",
  fontSize: "0.9rem",
  zIndex: 3,
  fontWeight: 1000,
  width: "100%",
  textAlign: "center",
  height: "fit-content",
  lineHeight: "100%",
});
const SingleName = styled("div")({
  fontFamily: "Poppins",
  fontSize: "0.9rem",
  zIndex: 3,
  fontWeight: 1000,
  width: "100%",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Subtitle = styled("div")({
  width: "100%",
  color: colors.primary,
  fontSize: "0.8rem",
  textAlign: "center",
  fontFamily: "Poppins",
  fontWeight: 700,
  margin: "0.1rem 0 2rem",
  padding: "0.2rem",
});
const Icons = styled("div")({
  display: "flex",
  width: "fit-content",
  gap: "0.7rem",
});

const Back = styled("div")({
  backgroundColor: colors.primary,
  height: "100%",
  width: "100%",
  overflow: "hidden",
  position: "absolute",
  webkitBackfaceVisibility: "hidden",
  backfaceVisibility: "hidden",
  top: 0,
  display: "flex",
  flexDirection: "row",
  // justifyContent: "space-evenly",
  transform: "rotateY(180deg)",
  borderRadius: "0.8rem",
  transformStyle: "preserve-3d",
});

const DomainContainer = styled("div")((props) => ({
  height: "100%",
  display: "flex",
  flex: 1,
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "0.6rem",
  background: props.domain ? colors.dark : colors.primary,
}));

const Domain = styled("div")({
  width: "100%",
  color: colors.light,
  fontSize: "0.8rem",
  fontFamily: "Poppins",
  fontWeight: 600,
  marginBlock: "0.2rem",
  textAlign: "center",
});
const SubtitleFlip = styled("div")((props) => ({
  width: "100%",
  fontSize: "0.9rem",
  textAlign: "center",
  fontFamily: "Poppins",
  fontWeight: "bolder",
  padding: "0.4rem",
  margin: "0.1rem 0 0.8rem",
  color: colors.light,
  backgroundColor: colors.primaryDark,
}));

const Project = styled("div")({
  width: "100%",
  color: colors.dark,
  fontSize: "0.6rem",
  fontFamily: "Poppins",
  fontWeight: 800,
  marginBlock: "0.2rem",
  textAlign: "center",
  textDecoration: "none",
});
const ProjectContainer = styled("div")({
  width: "100%",
  height: "100%",
  display: "block",
  justifyContent: "stretch",
});
const CardMobile = (props) => {
  const [flip, setFlip] = React.useState(false);
  const namesplit = nameModder(props.member.name.toUpperCase());
  return (
    <CardLayout
      onClick={() => {
        setFlip((flip) => !flip);
      }}
      sx={{
        transition: "transform 0.4s",
        transform: flip ? "rotateY(180deg)" : "rotateY(0)",
      }}
    >
      <Front>
        <ImgHolder>
          {props.member.imageLink ? (
            <Img src={props.member.imageLink} loading="lazy" />
          ) : (
            <Img src={noprofile} loading="lazy" />
          )}
        </ImgHolder>
        <ContentHolder>
          <NameContainer>
            {namesplit.lname === "" ? (
              <SingleName>{namesplit.fname}</SingleName>
            ) : (
              <>
                <FirstName>{namesplit.fname}</FirstName>
                <FirstName>{namesplit.lname}</FirstName>
              </>
            )}
          </NameContainer>
          <Box>
            {props.member.position ? (
              <Subtitle>{props.member.position}</Subtitle>
            ) : null}
            <Icons>
              {props.member.github ? (
                <a href={props.member.github} target="_blank" rel="noreferrer">
                  <GitSvg />
                </a>
              ) : null}
              {props.member.linkedIn ? (
                <a
                  href={props.member.linkedIn}
                  target="_blank"
                  rel="noreferrer"
                >
                  <InSvg />
                </a>
              ) : null}
              {props.member.email ? (
                <a
                  href={`mailto:${props.member.email}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MailSvg />
                </a>
              ) : null}
              {props.member.personalPage ? (
                <a
                  href={props.member.personalPage}
                  target="_blank"
                  rel="noreferrer"
                >
                  <WebSvg />
                </a>
              ) : null}
            </Icons>
          </Box>
        </ContentHolder>
        <FlipOne
          style={{
            width: "2.2rem",
            height: "2.2rem",
            position: "absolute",
            bottom: 0,
            right: 0,
            zIndex: 2,
          }}
        />
      </Front>
      <Back></Back>
    </CardLayout>
  );
};

export default CardMobile;
