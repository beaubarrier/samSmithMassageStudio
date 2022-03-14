import React, { useState, useEffect } from "react";

import {
  f7,
  f7ready,
  App,
  Panel,
  Views,
  View,
  Popup,
  Page,
  Navbar,
  Toolbar,
  NavRight,
  Link,
  Block,
  BlockTitle,
  LoginScreen,
  LoginScreenTitle,
  List,
  ListItem,
  ListInput,
  ListButton,
  BlockFooter,
  Fab,
} from "framework7-react";

import routes from "../js/routes";
import store from "../js/store";
import Home from "../pages/Home";
import Schedule from "../pages/form";
const MyApp = () => {
  // Login screen demo data
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [currentPage, setPage] = useState("main");
  const [pageName, setPageName] = useState("Schedule Appointment");

  function pageChange() {
    if (currentPage === "main") {
      return "Schedule Appointment";
    }
  } // Framework7 Parameters
  const f7params = {
    name: "samSmithMassage", // App name
    theme: "auto", // Automatic theme detection
    // App store
    store: store,
    // App routes
    routes: routes,
    // Register service worker (only on production build)
    serviceWorker:
      process.env.NODE_ENV === "production"
        ? {
            path: "/service-worker.js",
          }
        : {},
  };
  const alertLoginData = () => {
    f7.dialog.alert(
      "Username: " + username + "<br>Password: " + password,
      () => {
        f7.loginScreen.close();
      }
    );
  };
  f7ready(() => {
    // Call F7 APIs here
  });
  const pageRender = () => {
    if (currentPage === "main") {
      return <Home />;
    } else if (currentPage === "schedule") {
      return <Schedule />;
    }
  };
  return (
    <App {...f7params}>
      <Fab
        // small
        position="right-bottom"
        text={pageChange()}
        id="fabBtn"
        style={{ width: "57%" }}
        href="#view-home"
        onClick={() => {
          if (currentPage === "main") {
            setPage("schedule");
          } else if (currentPage === "schedule") {
            setPage("main");
          }
          fabBtn.setAttribute("style", "visibility: none");
        }}
      ></Fab>

      {/* <Fab
        // small
        position="right-bottom"
        text={pageChange()}
        id="fabBtn"
        style={{ width: "57%" }}
        href="#view-home"
        onClick={() => {
          if (currentPage === "main") {
            setPage("schedule");
          } else if (currentPage === "schedule") {
            setPage("main");
          }
        }}
      ></Fab> */}
      {/* Tabbar for switching views-tabs */}
      {pageRender()}
      {/* Your main view/tab, should have "view-main" class. It also has "tabActive" prop */}
    </App>
  );
};
export default MyApp;
