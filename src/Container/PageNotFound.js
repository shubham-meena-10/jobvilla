import { Link } from "react-router-dom";


const PageNotFound = () => {
    return (
        <>
            <div className="row d-flex justify-content-center h-50 m-0 p-0">
                <div className="col d-flex justify-content-center align-items-center mt-5">
                    <img style={{ marginLeft: "90px" }} src="404-error-1.gif" alt="404 error"></img>
                </div>
            </div>
            <div style={{ marginLeft: "90px" }} className="d-flex justify-content-evenly mt-5">
                <Link to={'/home'}><button className="btn btn-outline-primary">&#8592; Back</button></Link>
                <button className="btn btn-outline-primary" onClick={() => window.location.reload(false)}>Reload</button>
            </div>
        </>
    )
}

export default PageNotFound;
