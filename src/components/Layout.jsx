import '../App.css'
import "../assets/styleGlobal.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import Container from "./Container";

function Layout(){

    return (
        <>
            <Header></Header>
            <Menu></Menu>
            <Container></Container>
            <Footer></Footer>
        </>
    )
}

export default Layout;