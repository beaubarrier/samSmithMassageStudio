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
    <Block className="center">
      <BlockTitle className="center">
        Payment is due <b>before</b> services are rendered. <br></br>
        <br></br>I accept
        <br></br>
        Cash, credit card*, Zelle*, and Venmo*<br></br>
        <br></br>
      </BlockTitle>
      * There is a $10 surcharge for using Credit/Debit Card, Zelle, or Venmo.
    </Block>
    <Block>
      <Button
        large
        fill
        round
        color="purple"
        text="Schedule Appointment"
        style={{ width: "95%", marginLeft: "2.5%" }}
      ></Button>
    </Block>
  </Page>
);

export default Form;
