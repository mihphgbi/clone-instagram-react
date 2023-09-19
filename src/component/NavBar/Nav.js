import React, {Fragment, useState} from 'react'
import {connect} from "react-redux";
import {Box, CardMedia, Grid, ListItemIcon, ListItemText, MenuItem, MenuList, Typography} from "@mui/material";
import logo from "../../assets/logo.svg";
import more_icon from "../../assets/more-icon.svg";
//style
import './nav-style.scss';
import {NAV_MENU_ITEM} from "../../constant/nav";

function Nav () {
    const [selectedItem, setSelectedItem] = useState(false);
    const handleClick = (value) => {
        console.log("========")
        setSelectedItem(value)
    }
    return (
        <Fragment>
            <Grid container>
                <Grid container item xs={12}>
                    <Box className={'logo-box'}>
                        <a href={''}>
                            <CardMedia title={'logo'}
                                       image={logo}
                                       className={'logo-img'}
                                       sx={{width:'110px', height:'30px'}}/>
                        </a>
                    </Box>
                </Grid>
                <Grid container item xs={12}>
                    <MenuList className={'menu-wrapper'}>
                        <MenuItem className={'menu-item'} onClick={handleClick} selected={selectedItem}>
                            <ListItemIcon>
                                <CardMedia title={'Home'}
                                           image={NAV_MENU_ITEM.HOME.image}
                                           className={'menu-icon'}
                                />
                            </ListItemIcon>
                            <ListItemText>{NAV_MENU_ITEM.HOME.name}</ListItemText>
                        </MenuItem>

                        <MenuItem className={'menu-item'} onClick={handleClick} selected={selectedItem}>
                            <ListItemIcon>
                                <CardMedia title={'Search'}
                                           image={NAV_MENU_ITEM.SEARCH.image}
                                           className={'menu-icon'}/>
                            </ListItemIcon>
                            <ListItemText>{NAV_MENU_ITEM.SEARCH.name}</ListItemText>
                        </MenuItem>

                        <MenuItem className={'menu-item'} onClick={handleClick} selected={selectedItem}>
                            <ListItemIcon>
                                <CardMedia title={'Explore'}
                                           image={NAV_MENU_ITEM.EXPLORE.image}
                                           className={'menu-icon'}
                                />
                            </ListItemIcon>
                            <ListItemText>{NAV_MENU_ITEM.EXPLORE.name}</ListItemText>
                        </MenuItem>

                        <MenuItem className={'menu-item'} onClick={handleClick} selected={selectedItem}>
                            <ListItemIcon>
                                <CardMedia title={'Reels'}
                                           image={NAV_MENU_ITEM.REELS.image}
                                           className={'menu-icon'}/>
                            </ListItemIcon>
                            <ListItemText>{NAV_MENU_ITEM.REELS.name}</ListItemText>
                        </MenuItem>

                        <MenuItem className={'menu-item'} onClick={handleClick} selected={selectedItem}>
                            <ListItemIcon>
                                <CardMedia title={'Messages'}
                                           image={NAV_MENU_ITEM.MESSAGES.image}
                                           className={'menu-icon'}/>
                            </ListItemIcon>
                            <ListItemText>{NAV_MENU_ITEM.MESSAGES.name}</ListItemText>
                        </MenuItem>

                        <MenuItem className={'menu-item'} onClick={handleClick} selected={selectedItem}>
                            <ListItemIcon>
                                <CardMedia title={'Notifications'}
                                           image={NAV_MENU_ITEM.NOTIFICATIONS.image}
                                           className={'menu-icon'}/>
                            </ListItemIcon>
                            <ListItemText>{NAV_MENU_ITEM.NOTIFICATIONS.name}</ListItemText>
                        </MenuItem>

                        <MenuItem className={'menu-item'} onClick={handleClick} selected={selectedItem}>
                            <ListItemIcon>
                                <CardMedia title={'Create'}
                                           image={NAV_MENU_ITEM.CREATE.image}
                                           className={'menu-icon'}/>
                            </ListItemIcon>
                            <ListItemText>{NAV_MENU_ITEM.CREATE.name}</ListItemText>
                        </MenuItem>

                        <MenuItem className={'menu-item'} onClick={handleClick} selected={selectedItem}>
                            <ListItemIcon>
                                <CardMedia title={'Profile'}
                                           image={NAV_MENU_ITEM.PROFILE.image}
                                           className={'menu-icon'}/>
                            </ListItemIcon>
                            <ListItemText>{NAV_MENU_ITEM.PROFILE.name}</ListItemText>
                        </MenuItem>
                    </MenuList>
                </Grid>
                <Grid container item xs={12}>
                    <MenuList className={'menu-wrapper'}>
                        <MenuItem className={'menu-item'} onClick={handleClick} selected={selectedItem}>
                            <ListItemIcon>
                                <CardMedia title={'Profile'}
                                           image={more_icon}
                                           className={'menu-icon'}/>
                            </ListItemIcon>
                            <ListItemText>More</ListItemText>
                        </MenuItem>
                    </MenuList>
                </Grid>
            </Grid>
        </Fragment>
    )
}
const mapStateToProps = (state) => {}
export default connect (mapStateToProps,{})(Nav);
