import BreadCrumbs from "../components/BreadCrumbs";

function Layout({ children }) {
    return (
        <div className="layout">
            <BreadCrumbs/>
            {children}
        </div>
    );
}

export default Layout;