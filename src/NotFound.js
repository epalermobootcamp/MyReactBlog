import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return (

        <div className="notfound">
            <h2>Sorry</h2>
            <p>Page can not be found</p>
            <Link to="/">Back to Home</Link>
        </div>
    );
}

export default NotFound;