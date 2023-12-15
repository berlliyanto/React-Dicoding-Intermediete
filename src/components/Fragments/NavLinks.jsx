import { Link, useLocation } from "react-router-dom"
import PropTypes from 'prop-types'

const NavLinks = ({ title }) => {
    const { pathname } = useLocation();
    return (
        <nav className='flex justify-between items-center px-4 py-6 bg-slate-200 shadow-sm'>
            <Link to={"/"}
                className="text-xl font-bold hover:text-slate-900 active:scale-95 duration-300">{title}</Link>
            {
                pathname != '/arsip'
                &&
                <Link to={"/arsip"}
                    className="text-xl font-bold hover:text-slate-900 active:scale-95 duration-300">Arsip Saya</Link>
            }
        </nav>
    )
}

NavLinks.propTypes = {
    title: PropTypes.string.isRequired,
}

export default NavLinks;