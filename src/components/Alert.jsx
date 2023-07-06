import "bootstrap/dist/css/bootstrap.min.css"
export function Alert(props) {
    return (
        <div className={"alert alert-warning"} role={"alert"}>
            {props.text}
        </div>
    )
}