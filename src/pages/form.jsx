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
} from "framework7-react";

const Form = () => (
  <Page name="form">
    <BlockTitle>Form Example</BlockTitle>
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

      <ListInput
        label="Appointment Date"
        type="date"
        placeholder="What day would you like to schedule for."
        defaultValue="2014-04-30"
      ></ListInput>

      <ListItem title="Toggle">
        <Toggle slot="after" />
      </ListItem>

      <ListInput type="textarea" label="Textarea" placeholder="Bio"></ListInput>
      <ListInput
        type="textarea"
        label="Resizable"
        placeholder="Bio"
        resizable
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
  </Page>
);

export default Form;
