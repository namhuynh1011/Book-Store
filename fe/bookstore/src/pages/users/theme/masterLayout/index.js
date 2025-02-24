import { memo } from "react"
import Headers from "../header"
import Footer from "../footer"

const MasterLayout = ({children,  ...props}) => {
    return (
    <div {  ...props}>
        <Headers/>
        {children }
        <Footer/>
    </ div>
    );
};

export default memo(MasterLayout);