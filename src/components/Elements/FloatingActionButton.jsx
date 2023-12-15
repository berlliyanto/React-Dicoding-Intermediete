import PropTypes from "prop-types"

const FloatingActionButton = ({onClick, icon}) => {
    return (
        <button className="fixed bottom-5 right-5 flex justify-center items-center h-14 w-14 rounded-full bg-slate-400 shadow-lg 
        hover:bg-slate-500"
        onClick={onClick}>
            {icon}
        </button>
    )
}

FloatingActionButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    icon: PropTypes.element.isRequired
}

export default FloatingActionButton