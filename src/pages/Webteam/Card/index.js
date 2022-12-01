import { styled } from "@mui/material";
import React from "react";
import { colors } from "../../../constants";
import { ReactComponent as GitSvg } from "../../../assets/memberCardSvgs/git.svg";
import { ReactComponent as InSvg } from "../../../assets/memberCardSvgs/in.svg";
import { ReactComponent as MailSvg } from "../../../assets/memberCardSvgs/mail.svg";
import { ReactComponent as WebSvg } from "../../../assets/memberCardSvgs/web.svg";
import noprofile from "../../../assets/noprofile.png";
import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";

const nameModder = (name) => {
  const totalLength = name.length;
  if (totalLength < 14) {
    return { fname: name, lname: "" };
  }
  const parts = name.split(" ");
  if (parts.length === 1) {
    return { fname: name, lname: "" };
  }
  let lLen = parts[0].length;
  let rLen = totalLength - lLen - 1;
  let stopAfter = 0;
  let min = Math.max(lLen, rLen);
  let i = 1;
  while (i < parts.length) {
    lLen += parts[i].length + 1;
    rLen -= parts[i].length + 1;
    if (min > Math.max(lLen, rLen)) {
      min = Math.max(lLen, rLen);
      stopAfter = i - 1;
    }
    i += 1;
  }
  let fName = parts[0],
    lName = parts[stopAfter + 1];
  i = 1;
  while (i <= stopAfter) {
    fName += " " + parts[i];
    i += 1;
  }
  i = stopAfter + 2;
  while (i < parts.length) {
    lName += " " + parts[i];
    i += 1;
  }
  return { fname: fName, lname: lName };
};

const CardLayout = styled("div")({
  backgroundColor: colors.dark,
  height: "19.2rem",
  width: "16.2rem",
  boxShadow: `0 0 16px ${colors.primary}BB`,
  borderRadius: "0.8rem",
  transformStyle: "preserve-3d",
  perspective: "1000px",
});

const Front = styled("div")({
  height: "100%",
  width: "100%",
  overflow: "hidden",
  position: "relative",
  webkitBackfaceVisibility: "hidden",
  backfaceVisibility: "hidden",
  transformStyle: "preserve-3d",
});

const ImgHolder = styled("div")({
  height: "15rem",
  width: "15rem",
  overflow: "hidden",
  marginInline: "auto",
  marginTop: "0.5rem",
  borderRadius: "0.6rem",
});
const Img = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "contain",
});

const Slide = styled("div")(({ hover }) => ({
  transition: "all 0.3s ease-in-out",
  width: "100%",
  height: hover ? "19.2rem" : "2rem",
  position: "absolute",
  backgroundColor: colors.dark,
  top: hover ? "0" : "16rem",
  zIndex: 2,
  borderRadius: hover ? "0.8rem" : "0",
}));

const Slider = styled("div")(({ hover }) => ({
  width: "100%",
  borderRadius: "0.6rem",
  height: "100%",
  zIndex: 3,
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  top: hover ? "0" : "15.5rem",
  transition: "all 0.3s ease-in-out",
}));

const NameContainer = styled("div")(({ hover }) => ({
  width: "100%",
  height: "3.7rem",
  marginTop: hover ? "0.8rem" : "0",
  transition: "all 0.3s ease-in-out",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

const FirstName = styled("div")({
  fontFamily: "Poppins",
  fontSize: "1.2rem",
  zIndex: 3,
  fontWeight: 1000,
  width: "100%",
  textAlign: "center",
  height: "fit-content",
  lineHeight: "100%",
});
const SingleName = styled("div")({
  fontFamily: "Poppins",
  fontSize: "1.2rem",
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
  fontSize: "0.9rem",
  textAlign: "center",
  fontFamily: "Poppins",
  fontWeight: 700,
  margin: "0.8rem 0 1.2rem",
  padding: "0.4rem",
});

const SubtitleFlip = styled("div")({
  width: "100%",
  fontSize: "1rem",
  textAlign: "center",
  fontFamily: "Poppins",
  fontWeight: 700,
  margin: "0.8rem 0 1.2rem",
  padding: "0.4rem",
  color: colors.light,
  backgroundColor: colors.primaryDark,
});

const Domain = styled("div")({
  width: "100%",
  color: colors.light,
  fontSize: "1rem",
  fontFamily: "Poppins",
  fontWeight: 500,
  marginBlock: "0.2rem",
  textAlign: "center",
});

const Icons = styled("div")({
  position: "absolute",
  display: "flex",
  width: "fit-content",
  left: 0,
  right: 0,
  bottom: "1rem",
  marginInline: "auto",
  gap: "0.8rem",
  marginTop: "1.6rem",
});
const Card = (props) => {
  const [hover, setHover] = React.useState(false);
  const namesplit = nameModder(props.member.name.toUpperCase());
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
      navigator.userAgent
    );
  return (
    <CardLayout
      onMouseEnter={() => {
        if (!isMobile) setHover(true);
      }}
      onMouseLeave={() => {
        if (!isMobile) setHover(false);
      }}
      onClick={() => {
        if (isMobile) setHover(!hover);
      }}
    >
      <Front>
        <ScopedCssBaseline sx={{ background: "transparent" }}>
          <ImgHolder>
            {props.member.imageLink ? (
              <Img src={props.member.imageLink} loading="lazy" />
            ) : (
              <Img src={noprofile} loading="lazy" />
            )}
          </ImgHolder>
          <Slide hover={hover} />
          <Slider hover={hover}>
            <NameContainer hover={hover}>
              {namesplit.lname === "" ? (
                <SingleName>{namesplit.fname}</SingleName>
              ) : (
                <>
                  <FirstName>{namesplit.fname}</FirstName>
                  <FirstName>{namesplit.lname}</FirstName>
                </>
              )}
            </NameContainer>
            <div
              style={{
                height: "6rem",
              }}
            >
              {props.member.position ? (
                <Subtitle>{props.member.position}</Subtitle>
              ) : null}
              {props.member.additional &&
                props.member.additional.map((domain, index) => (
                  <Domain key={index}>{domain}</Domain>
                ))}
            </div>
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
          </Slider>
        </ScopedCssBaseline>
      </Front>
    </CardLayout>
  );
};

export default Card;
