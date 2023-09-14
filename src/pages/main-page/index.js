import React from 'react'
import {connect} from "react-redux";
import {Grid} from "@mui/material";

function MainPage () {
    return (
        <div>
            <Grid container>
                <Grid sx={{border: '1px solid black'}}>
                    This is test123
                </Grid>
            </Grid>
        </div>
    )
}
const mapStateToProps = (state) => {}
export default connect (mapStateToProps,{})(MainPage);