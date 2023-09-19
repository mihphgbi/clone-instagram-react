import {Fragment} from "react";
import Nav from "../../component/NavBar/Nav";
import {Grid} from "@mui/material";
import "../Layout/layout.scss";

function Layout (Component) {
    return (
        <Fragment>
            <Grid container>
                <Grid container className={'nav-wrapper'}>
                    <Nav/>
                </Grid>
                <Grid container className={'component-wrapper'}>
                    <Component/>
                </Grid>
            </Grid>
        </Fragment>
    )
}
export default Layout
