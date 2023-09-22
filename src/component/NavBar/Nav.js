import React, {Fragment, useState} from 'react'
import {Box, CardMedia, ListItemIcon, ListItemText, MenuItem, MenuList} from "@mui/material";
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
            <div className={'nav-wrapper'}>
                <div className={'logo-box-container'}>
                    <Box className={'logo-box-wrapper'}>
                        <a href={''}>
                            <CardMedia title={'logo'}
                                       image={logo}
                                       className={'logo-img'}
                                       sx={{width:'110px', height:'30px'}}/>
                        </a>
                    </Box>
                </div>
                <div className={'menu-container'}>
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
                </div>
                <div className={'more-option-container'}>
                    <MenuList className={'menu-wrapper menu-more'}>
                        <MenuItem className={'menu-item'} onClick={handleClick} selected={selectedItem}>
                            <ListItemIcon>
                                <CardMedia title={'Profile'}
                                           image={more_icon}
                                           className={'menu-icon'}/>
                            </ListItemIcon>
                            <ListItemText>More</ListItemText>
                        </MenuItem>
                    </MenuList>
                </div>
            </div>
        </Fragment>
    )
}
export default Nav;
