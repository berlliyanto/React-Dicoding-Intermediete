import { Fragment } from "react"
import Label from "../Elements/Label"
import TextField from "../Elements/TextField"
import PropTypes from 'prop-types'

const TextSearch = ({title, htmlFor, name, id, onChange}) => {
    return (
        <div className="flex flex-col gap-3">
            <Label title={title} htmlFor={htmlFor} />
            <TextField name={name} id={id} onChange={onChange} />
        </div>
    )
}

TextSearch.propTypes = {
    title: PropTypes.string.isRequired,
    htmlFor: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func
}

export default TextSearch;
