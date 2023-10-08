import React, {Fragment} from 'react'
import {Grid} from "@mui/material";

function Story () {
    return (
        <Fragment>
            <Grid container>
                <Grid sx={{border: '1px solid black'}}>
                    This is story
                </Grid>
            </Grid>
        </Fragment>
    )
}
export default Story;
