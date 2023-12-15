import PropTypes from 'prop-types';
import NavLinks from './NavLinks';

const NavBar = ({ title }) => {
    return (
        <header className='container sticky m-auto overflow-hidden rounded-b-lg'>
            <NavLinks title={title} />
        </header>
    )
}

NavBar.propTypes = {
    title: PropTypes.string.isRequired,
}

export default NavBar;