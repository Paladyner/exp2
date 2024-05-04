import { Layout } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import FooterScreen from "../component/UI/Footer/FooterScreen";
import HeaderScreen1 from "../component/UI/Header/HeaderScreen1";

const MainScreen1 = ({ children }) => {
    return (
        <Layout>
            <Header>
                <HeaderScreen1 />
            </Header>
            <Content className="mx-auto  my-auto">{children}</Content>
            <Footer>
                <FooterScreen />
            </Footer>
        </Layout>
    );
};

export default MainScreen1;
