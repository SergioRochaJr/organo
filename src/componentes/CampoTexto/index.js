import  './CampoTexto.css'

const CampoTexto = (props) => {
    return (
        <div className="CampoTexto">
            <label>
                {props.label}
            </label>
            <input placeholder = {props.placeholder}/>
        </div>
    )
}

export default CampoTexto