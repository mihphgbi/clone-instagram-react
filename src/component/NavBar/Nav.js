import React, {Fragment} from 'react'
import {connect} from "react-redux";
import {Box, CardMedia, Grid, ListItemIcon, ListItemText, MenuItem, MenuList} from "@mui/material";
import logo from "../../assets/Instagram_logo.svg";
//style
import './nav-style.scss';

function Nav () {
    return (
        <Fragment>
            <Grid container>
                <Grid container item xs={12}>
                    <Box class={'logo-box'}>
                        <CardMedia title={'logo'}
                                   image={logo}
                                   sx={{width:'100px', height:'30px'}}/>
                    </Box>
                </Grid>
                <Grid container item xs={12}>
                    <MenuList>
                        <MenuItem>
                            <ListItemIcon>
                                <CardMedia title={'Home'}/>
                            </ListItemIcon>
                            <ListItemText>Home</ListItemText>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                A
                            </ListItemIcon>
                            <ListItemText>Search</ListItemText>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                A
                            </ListItemIcon>
                            <ListItemText>Explore</ListItemText>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                A
                            </ListItemIcon>
                            <ListItemText>Messages</ListItemText>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                A
                            </ListItemIcon>
                            <ListItemText>Notifications</ListItemText>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                A
                            </ListItemIcon>
                            <ListItemText>Create</ListItemText>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                A
                            </ListItemIcon>
                            <ListItemText>Profile</ListItemText>
                        </MenuItem>
                    </MenuList>
                </Grid>
            </Grid>
        </Fragment>
    )
}
const mapStateToProps = (state) => {}
export default connect (mapStateToProps,{})(Nav);