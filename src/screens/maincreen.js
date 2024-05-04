import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import FooterScreen from "../component/UI/Footer/FooterScreen";
import HeaderScreen from "../component/UI/Header/HeaderScreen";
import Login from './Login';
import useToken from '../useToken';


const MainScreen = ({ children }) => {
  const { token, setToken } = useToken();

  // if (!token) {
  //   return <Login setToken={setToken} />
  // }

  return (
    <Layout>
      <Header>
        <HeaderScreen />
      </Header>
      <Content className="mx-auto  my-auto">{children}</Content>
      <Footer>
        <FooterScreen />
      </Footer>
    </Layout>


  );
};

export default MainScreen;
