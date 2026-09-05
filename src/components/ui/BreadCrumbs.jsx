import { useLocation, Link } from "react-router";
import './BreadCrumbs.css';

const BreadCrumbs = ({breadCrumbsObj}) => {

    const route = useLocation().pathname.split('/').filter((x) => x)[0];
    const breadCrumbs = breadCrumbsObj[route];

    return(
        <div className="breadcrumbs">
            {breadCrumbs?.map((value,index) => (
                value.url!=''?<span key={index}><Link to={value.url} >{value.label}</Link><span className="breadcrumbs-spit">{"/"}</span></span>
                :<span key={index}>{value.label}</span>
            ))}
        </div>
    )
}

export default BreadCrumbs;