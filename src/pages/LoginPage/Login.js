import React from 'react'
import {connect} from "react-redux";
import {Grid} from "@mui/material";

function Login () {
    return (
        <div>
            <Grid container>
                <Grid sx={{border: '1px solid black'}}>
                    This is test
                </Grid>
            </Grid>
        </div>
    )
}
const mapStateToProps = (state) => {}
export default connect (mapStateToProps,{})(Login);