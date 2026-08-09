import { useLocation, Link } from "react-router";
import data from '../config/breadCrumbs.json';

const BreadCrumbs = () => {

    const route = useLocation().pathname.split('/').filter((x) => x)[0];
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