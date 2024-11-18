import React from "react";
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.log(error);

    return (
        <div>
            <h1>This is Error page</h1>
            <p>
                ki bapar ekhane ki cao? vule cole asle home page fire jete nicer
                button capo
            </p>
            <h2 className="text-2xl">
                Status: {error.status} | Message: {error.statusText}
            </h2>
            <Link to="/">Go Home</Link>
        </div>
    );
}
