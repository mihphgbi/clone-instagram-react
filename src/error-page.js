import {useRouteError} from "react-router-dom";
import {Fragment} from "react";
import {connect} from "react-redux";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return(
        <Fragment>
            <div id="error-page">
                <h1>The page have some errors</h1>
                <p>{error.statusText || error.message}</p>
            </div>
        </Fragment>
    );
}
