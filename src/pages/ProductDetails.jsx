import React from "react";
import {useParams} from "react-router-dom"
export default function ProductDetails() {
    const params = useParams()
    return(
        <h1>{params.id} details is here</h1>
    )
};
