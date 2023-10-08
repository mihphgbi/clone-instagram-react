import React, {Fragment} from 'react'
import {Grid} from "@mui/material";
import Story from "./story";
import Newsfeed from "./newsfeed";

function MainPage () {
    return (
        <Fragment>
            <Grid container>
                <Grid item>
                    <Story/>
                </Grid>
                <Grid item>
                    <Newsfeed/>
                </Grid>
            </Grid>
        </Fragment>
    )
}
export default MainPage;
