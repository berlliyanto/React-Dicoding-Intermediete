import PropTypes from 'prop-types'

const TextField = ({name, id, onChange}) => {
    return (
        <input type="text" name={name} id={id} onChange={onChange} placeholder='Cari catatan...'
            className="ring-1 ring-slate-500 rounded-md outline-none focus:ring-blue-400 
            p-2"
        />
    )
}

TextField.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func
}

export default TextField