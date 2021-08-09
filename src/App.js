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
    <Router>
      <Switch>
        <Route path="/makale/:title">
          <main className="text-gray-400 bg-black body-font">
            {" "}
            <Navbar path="/" />
            <Article />
          </main>
        </Route>
        <Route path="/">
          <main className="text-gray-400 bg-black body-font">
            {" "}
            <Navbar />
            <About />
            <Projects />
            <Skills />
            <Articles />
            <Videos />
            <Contact />
          </main>
        </Route>
      </Switch>
    </Router>
  );
}
