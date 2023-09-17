import React, {Fragment, useState} from 'react'
import {connect} from "react-redux";
import {Box, CardMedia, Grid, ListItemButton, ListItemIcon, ListItemText, MenuItem, MenuList} from "@mui/material";
import logo from "../../assets/Instagram_logo.svg";
import home from "../../assets/home_icon.svg";
import search from "../../assets/Search.svg";
//style
import './nav-style.scss';

function Nav () {
    const [selectedItem, setSelectedItem] = useState();
    const handleClick = (value) => {
        console.log("========")
        setSelectedItem(value)
    }
    return (
        <Fragment>
            <Grid container>
                <Grid container item xs={12}>
                    <Box className={'logo-box'}>
                        <CardMedia title={'logo'}
                                   image={logo}
                                   sx={{width:'100px', height:'30px'}}/>
                    </Box>
                </Grid>
                <Grid container item xs={12}>
                    <MenuList className={'menu-wrapper'}>
                        <MenuItem className={'menu-item'} onClick={handleClick} selected={selectedItem}>
                            <ListItemIcon>
                                <CardMedia title={'Home'} image={home} sx={{width:'22px', height:'22px'}}/>
                            </ListItemIcon>
                            <ListItemText>Home</ListItemText>
                        </MenuItem>
                        <MenuItem className={'menu-item'} onClick={handleClick} selected={selectedItem}>
                            <ListItemIcon>
                                <CardMedia title={'Home'} image={search} sx={{width:'22px', height:'22px'}}/>
                            </ListItemIcon>
                            <ListItemText>Search</ListItemText>
                        </MenuItem>
                        <MenuItem className={'menu-item'} onClick={handleClick} selected={selectedItem}>
                            <ListItemIcon>
                                A
                            </ListItemIcon>
                            <ListItemText>Explore</ListItemText>
                        </MenuItem>
                        <MenuItem className={'menu-item'} onClick={handleClick} selected={selectedItem}>
                            <ListItemIcon>
                                A
                            </ListItemIcon>
                            <ListItemText>Messages</ListItemText>
                        </MenuItem>
                        <MenuItem className={'menu-item'} onClick={handleClick} selected={selectedItem}>
                            <ListItemIcon>
                                A
                            </ListItemIcon>
                            <ListItemText>Notifications</ListItemText>
                        </MenuItem>
                        <MenuItem className={'menu-item'} onClick={handleClick} selected={selectedItem}>
                            <ListItemIcon>
                                A
                            </ListItemIcon>
                            <ListItemText>Create</ListItemText>
                        </MenuItem>
                        <MenuItem className={'menu-item'} onClick={handleClick} selected={selectedItem}>
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