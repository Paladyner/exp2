import React from "react";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import FooterScreen from "../component/UI/Footer/FooterScreen";
import HeaderScreen2 from "../component/UI/Header/HeaderScreen2";

const MainScreen2 = ({ children }) => {
    return (
        <Layout>
            <Header>
                <HeaderScreen2 />
            </Header>
            <Content className="mx-auto  my-auto">{children}</Content>
            <Footer>
                <FooterScreen />
            </Footer>
        </Layout>


    );
};
export default MainScreen2;
