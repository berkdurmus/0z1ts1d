import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Videos from "./components/Videos";
import Articles from "./components/Articles";
import Article from "./components/Article";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router style={{ backgroundColor: "black" }}>
      <Switch style={{ backgroundColor: "black" }}>
        <Route path="/makale/:title" style={{ backgroundColor: "black" }}>
          <main
            className="text-gray-400 bg-black body-font"
            style={{ backgroundColor: "black" }}
          >
            {" "}
            <Navbar path="/" style={{ backgroundColor: "black" }} />
            <Article style={{ backgroundColor: "black" }} />
            <Contact style={{ backgroundColor: "black" }} />
          </main>
        </Route>
        <Route path="/" style={{ backgroundColor: "black" }}>
          <main
            className="text-gray-400 bg-black body-font"
            style={{ backgroundColor: "black" }}
          >
            {" "}
            <Navbar style={{ backgroundColor: "black" }} />
            <About style={{ backgroundColor: "black" }} />
            <Projects style={{ backgroundColor: "black" }} />
            <Skills style={{ backgroundColor: "black" }} />
            <Articles style={{ backgroundColor: "black" }} />
            <Videos style={{ backgroundColor: "black" }} />
            <Contact style={{ backgroundColor: "black" }} />
          </main>
        </Route>
      </Switch>
    </Router>
  );
}
