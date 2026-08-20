import Footer from '../components/Footer.jsx'
import Menu from '../components/Menu.jsx'
import Header from '../components/Header.jsx'
import BreadCrumbs from "../components/BreadCrumbs";

function Layout({ children }) {
    return (
        <>
            <Header />
            <div className="layout">
                <BreadCrumbs/>
                {children}
            </div>
            <Footer />
        </>
    );
}

export default Layout;