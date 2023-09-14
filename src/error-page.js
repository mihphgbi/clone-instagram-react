import {useRouteError} from "react-router-dom";
import {Fragment} from "react";
import {connect} from "react-redux";

export default function ErrorPage() {
    // const error = useRouteError();
    // console.error("Aaaaaaaaa",error);

    return(
        <Fragment>
            <div id="error-page">
                <h1>Sorry, this page isn't available.</h1>
                <p>The link you followed may be broken, or the page may have been removed. <a href={'/'}>Go back to Instagram</a>.</p>
                {/*<p>{error?.statusText || error?.message}</p>*/}
            </div>
        </Fragment>
    );
}
