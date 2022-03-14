import React, { useState } from "react";
import { getDevice } from "framework7";
import {
  Page,
  PageContent,
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  NavRight,
  Link,
  Toolbar,
  Block,
  BlockTitle,
  List,
  ListItem,
  Row,
  Col,
  Button,
  Fab,
  FabButton,
  FabButtons,
  Icon,
  Menu,
  Card,
  CardHeader,
} from "framework7-react";
import samLogo from "/assets/samSmithLogo.png";
import samPic from "/assets/samPic.png";

const device = getDevice();

// const ColoredLine = ({ color }) => (
//   <hr
//     id="hrLine"
//     style={{
//       color: "black",
//       backgroundColor: "rgb(57, 57, 57)",
//       height: 1,
//       borderRadius: 10,
//       width: "90%",
//       border: "none",
//       marginTop: "100px",
//       marginBottom: "60px",
//       marginRight: "5.5%",
//     }}
//   />
// );
const iosPage = () => {
  const [pageName, setPageName] = useState("Schedule Appointment");
  const [currentPage, setPage] = useState("main");

  function pageChange() {
    if (currentPage === "main") {
      return "Schedule Appointment";
    } else if (currentPage === "schedule") {
      return "Close";
    }
  }
  if (device.ios) {
    return (
      <Page name="home">
        {/* <Fab
          // small

          position="right-bottom"
          text={pageChange()}
          href="/form"
          id="fabBtn"
          style={{ width: "57%" }}
        ></Fab> */}
        {/* Top Navbar */}
        {/* <PageContent> */}
        <img src={samLogo} id="samLogo" />
        <Block>
          <img src={samPic} id="samPic" />
        </Block>
        {/* <Fab
          // small
          position="right-bottom"
          text="Schedule Appointment"
          id="fabBtn"
          style={{ width: "57%" }}
          link="/scheduleApt"
        >
        </Fab> */}

        <Block id="flavorText" className="center">
          <BlockTitle className="center">About Me</BlockTitle>
          {/* <i> */}
          After getting my certifications from Anthem Massage School, I was
          mentored by an established local spa owner for two years before
          starting my own practice. I have over 10 years experience and I
          specialize in therapeutic, myofacial, deep tissue, Sweedish, and
          lymphatic massage. Maybe say something here about the different types
          of ppl youve helped or something idk.
          {/* </i> */}
        </Block>
        {/* ************************************************************************ */}

        {/* <BlockTitle className="center">Packages</BlockTitle> */}
        {/* <Card className="center" id="mainCard"> */}
        <Block>
          <BlockTitle className="center">In Home Massage</BlockTitle>
          <Card className="center" id="inHomeCard">
            <CardHeader className="center">
              In home massage is a minimum of one hour, and starts at $100.
            </CardHeader>
            $130 for 90 minutes.<br></br> $160 for two hours.
          </Card>
        </Block>
        <Block>
          <BlockTitle className="center">In Studio Massage</BlockTitle>
          <Card className="center">
            <CardHeader className="center" id="inStudioCard">
              In studio massage is a minimum of one hour, and starts at $80.
            </CardHeader>
            $100 for 90 minutes.<br></br>$140 for two hours!
          </Card>
        </Block>
        <Block className="center">
          <BlockTitle className="center">
            Payment is due <b>before</b> services are rendered. <br></br>
            <br></br>I accept
            <br></br>
            Cash, credit card*, Zelle*, and Venmo*<br></br>
            <br></br>
          </BlockTitle>
          * There is a $10 surcharge for using credit card, Zelle, or Venmo.
        </Block>
        <Block>
          <br></br>
        </Block>
        {/* </Card> */}
        {/* </PageContent> */}
        {/* Toolbar */}
        {/* <List>
      <ListItem
        title="Dynamic (Component) Route"
        link="/dynamic-route/blog/45/post/125/?foo=bar#about"
      />
      <ListItem
        title="Default Route (404)"
        link="/load-something-that-doesnt-exist/"
      />
      <ListItem
        title="Request Data & Load"
        link="/request-and-load/user/123456/"
      />
    </List> */}
      </Page>
    );
  }
};
const Home = () => {
  return (
    <div>
      <div>{iosPage()}</div>
    </div>
  );
};
export default Home;
