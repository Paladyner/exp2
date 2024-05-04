import { Layout } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import HeaderScreen1 from "../Header/HeaderScreen1";
import FooterScreen from "../Footer/FooterScreen";
const AboutUs = () => {
    return (
        <Layout>
            <Header>
                <HeaderScreen1 />
            </Header>
            <Content>
                <div className="flex justify-between">
                    <div><img className=" max-w-lg m-10 align-middle" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.R4rTQz8L67dsqGlG5hdmLgHaEo%26pid%3DApi&f=1&ipt=6a308f83274642b924b1ab77dd3af25ea6bb803481c450ea48b2474301d8e59b&ipo=images"></img></div>
                    <div className="m-auto px-8">
                        <h1 className="text-center text-3xl">==========Our Mission==========</h1 >
                        <div className="text-left text-xl mx-2.5 text-ellipsis">Hello and welcome to [SHOP NAME], the place to find the best [PRODUCTS CATEGORY NAME] for every taste and occasion.
                            We thoroughly check the quality of our goods, working only with reliable suppliers so that you only receive the best quality product.

                            <br />We at [SHOP NAME] believe in high quality and exceptional customer service. But most importantly, we believe shopping is a right, not a luxury,
                            so we strive to deliver the best products at the most affordable prices, and ship them to you regardless of where you are located.</div>
                    </div>
                </div>
            </Content>
            <Footer>
                <FooterScreen />
            </Footer>
        </Layout>
    );
};

export default AboutUs;