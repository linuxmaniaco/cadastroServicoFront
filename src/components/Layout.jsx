import '../App.css'
import "../assets/styleGlobal.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import Container from "./Container";


function Layout(listas){

    return (
        <>
            <Header />
            <Menu></Menu>
            <Container listas={listas.listas}></Container>
            {console.log("Log do layout",listas.listas)}
            <Footer></Footer>
        </>
    )
}

export default Layout;