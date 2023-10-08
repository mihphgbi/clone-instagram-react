import React, {Fragment} from 'react'
import {Grid} from "@mui/material";

function Newsfeed () {
    return (
        <Fragment>
            <Grid container>
                <Grid sx={{border: '1px solid black'}}>
                    This is newsfeed
                </Grid>
            </Grid>
        </Fragment>
    )
}
export default Newsfeed;
