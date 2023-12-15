import PropTypes from 'prop-types'

const Label = ({htmlFor, title}) => {
    return (
        <label htmlFor={htmlFor} 
        className="text-xl font-semibold">{title}</label>
    )
}

Label.propTypes = {
    htmlFor: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default Label;