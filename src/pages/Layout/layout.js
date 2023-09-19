import {Fragment} from "react";
import Nav from "../../component/NavBar/Nav";
import {Grid} from "@mui/material";

function Layout (Component) {
    return (
        <Fragment>
            <Grid container style={{height: '100%'}}>
                <Grid container item xs={2} style={{height: '100%', padding: '8px 12px 20px', borderRight: '1px solid rgb(219,219,219)'}}>
                    <Nav/>
                </Grid>
                <Grid container item xs={10}>
                    <Component/>
                </Grid>
            </Grid>
        </Fragment>
    )
}
export default Layout
