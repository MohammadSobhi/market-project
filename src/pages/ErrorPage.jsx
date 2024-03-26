import React from "react"
import { Link } from "react-router-dom"

export default function ErrorPage(params) {
    return(
        <div className="error-page-container">
            <h1>404 not found!</h1>
            <Link to="/" className="link-button">Back to the Home Page</Link>
        </div>
    )
};
