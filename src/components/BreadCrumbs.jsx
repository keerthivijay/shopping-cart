import { useLocation, Link } from "react-router";
import data from '../config/breadCrumbs.json';

const BreadCrumbs = () => {

    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);
    const route = pathnames[0];
    const breadCrumbs = data[route];

    return(
        <div className="breadcrumbs">
            {breadCrumbs?.map((value,index) => (
                value.url!=''?<span key={index}><Link to={value.url} >{value.label}</Link><span className="bc-spit">{"/"}</span></span>
                :<span key={index}>{value.label}</span>
            ))}
        </div>
    )
}

export default BreadCrumbs;