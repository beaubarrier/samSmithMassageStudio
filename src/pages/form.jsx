import React from "react";
import {
  Page,
  Navbar,
  List,
  ListInput,
  ListItem,
  Toggle,
  BlockTitle,
  Row,
  Button,
  Range,
  Block,
  Fab,
} from "framework7-react";

const Form = () => (
  <Page name="form">
    <Fab
      // small
      position="right-top"
      text="Close"
      id="fabBtn"
      // style={{ width: "57%" }}
      onClick={() => {
        if (currentPage === "main") {
          setPage("schedule");
        } else if (currentPage === "schedule") {
          setPage("main");
        }
        fabBtn.setAttribute("style", "visibility: none");
      }}
    ></Fab>
    <BlockTitle>Personal Information</BlockTitle>
    <List noHairlinesMd>
      <ListInput
        label="First Name"
        type="text"
        placeholder="Your first name"
      ></ListInput>
      <ListInput
        label="Last Name"
        type="text"
        placeholder="Your last name"
      ></ListInput>

      <ListInput label="E-mail" type="email" placeholder="E-mail"></ListInput>

      <ListInput label="Phone" type="tel" placeholder="Phone"></ListInput>
    </List>
    <BlockTitle>Desired Appointment Date</BlockTitle>
    <List>
      <ListInput
        label="Select Date"
        type="date"
        placeholder="What day would you like to schedule for."
        defaultValue="2014-04-30"
      ></ListInput>
    </List>
    <BlockTitle>Session Type</BlockTitle>
    <List>
      <ListItem
        radio
        name="masType"
        value="InHome"
        title="In Home Massage"
      ></ListItem>
      <ListItem
        radio
        name="masType"
        value="InStudio"
        title="In Studio"
      ></ListItem>
    </List>
    <BlockTitle>Session Length</BlockTitle>
    <List>
      <ListItem
        radio
        name="timeLength"
        value="1Hour"
        title="One Hour"
      ></ListItem>
      <ListItem
        radio
        name="timeLength"
        value="90Minute"
        title="90 Minute"
      ></ListItem>
      <ListItem
        radio
        name="timeLength"
        value="TwoHour"
        title="Two Hour"
      ></ListItem>
    </List>
    <BlockTitle>Additional Information</BlockTitle>
    <List>
      <ListInput
        type="textarea"
        label=""
        placeholder="Is there anything you'd like to let me know?"
      ></ListInput>
    </List>
    <Block>
      <Button
        large
        fill
        round
        text="Schedule Appointment"
        style={{ width: "97%", float: "center" }}
      ></Button>
    </Block>
  </Page>
);

export default Form;
