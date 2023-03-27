import Layout from "components/Layout/Layout";
import ErrorPage from "pages/404/404";
import About from "pages/About/About";
import Main from "pages/Main/Main";
import FormPage from "pages/FormPage/FormPage";
import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/form" element={<FormPage />} />
          </Routes>
        </Layout>
      </div>
    );
  }
}
