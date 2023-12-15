import { Fragment } from "react"
import NavBar from "../Fragments/NavBar"
import Footer from "../Elements/Footer"
import PropTypes from "prop-types";

const MainLayout = ({children, title}) => {
    return (
        <Fragment>
            <NavBar title={title} />
            {children}
            <Footer />
        </Fragment>
    )
}

MainLayout.propTypes = {
    children: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired
}

export default MainLayout;