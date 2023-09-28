import React, {Fragment, useState} from 'react'
import {Box, CardMedia, ListItemIcon, ListItemText, MenuItem, MenuList} from "@mui/material";
import logo from "../../assets/logo.svg";
//style
import './nav-style.scss';
import {NAV_MENU_ITEM} from "../../constant/nav";

function Nav () {
    const [selectedItem, setSelectedItem] = useState('');
    const handleClick = (name) => {
        setSelectedItem(name)
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
                        <MenuItem className={'menu-item'}
                                  onClick={() => handleClick(NAV_MENU_ITEM.HOME.name)}
                                  selected={selectedItem === NAV_MENU_ITEM.HOME.name}>
                            <ListItemIcon>
                                <CardMedia title={'Home'}
                                           image={NAV_MENU_ITEM.HOME.image}
                                           className={'menu-icon'}
                                />
                            </ListItemIcon>
                            <ListItemText>{NAV_MENU_ITEM.HOME.name}</ListItemText>
                        </MenuItem>

                        <MenuItem className={'menu-item'}
                                  onClick={() => handleClick(NAV_MENU_ITEM.SEARCH.name)}
                                  selected={selectedItem === NAV_MENU_ITEM.SEARCH.name}>
                            <ListItemIcon>
                                <CardMedia title={'Search'}
                                           image={NAV_MENU_ITEM.SEARCH.image}
                                           className={'menu-icon'}/>
                            </ListItemIcon>
                            <ListItemText>{NAV_MENU_ITEM.SEARCH.name}</ListItemText>
                        </MenuItem>

                        <MenuItem className={'menu-item'}
                                  onClick={() => handleClick(NAV_MENU_ITEM.EXPLORE.name)}
                                  selected={selectedItem === NAV_MENU_ITEM.EXPLORE.name}>
                            <ListItemIcon>
                                <CardMedia title={'Explore'}
                                           image={NAV_MENU_ITEM.EXPLORE.image}
                                           className={'menu-icon'}
                                />
                            </ListItemIcon>
                            <ListItemText>{NAV_MENU_ITEM.EXPLORE.name}</ListItemText>
                        </MenuItem>

                        <MenuItem className={'menu-item'}
                                  onClick={() => handleClick(NAV_MENU_ITEM.REELS.name)}
                                  selected={selectedItem === NAV_MENU_ITEM.REELS.name}>
                            <ListItemIcon>
                                <CardMedia title={'Reels'}
                                           image={NAV_MENU_ITEM.REELS.image}
                                           className={'menu-icon'}/>
                            </ListItemIcon>
                            <ListItemText>{NAV_MENU_ITEM.REELS.name}</ListItemText>
                        </MenuItem>

                        <MenuItem className={'menu-item'}
                                  onClick={() => handleClick(NAV_MENU_ITEM.MESSAGES.name)}
                                  selected={selectedItem === NAV_MENU_ITEM.MESSAGES.name}>
                            <ListItemIcon>
                                <CardMedia title={'Messages'}
                                           image={NAV_MENU_ITEM.MESSAGES.image}
                                           className={'menu-icon'}/>
                            </ListItemIcon>
                            <ListItemText>{NAV_MENU_ITEM.MESSAGES.name}</ListItemText>
                        </MenuItem>

                        <MenuItem className={'menu-item'}
                                  onClick={() => handleClick(NAV_MENU_ITEM.NOTIFICATIONS.name)}
                                  selected={selectedItem === NAV_MENU_ITEM.NOTIFICATIONS.name}>
                            <ListItemIcon>
                                <CardMedia title={'Notifications'}
                                           image={NAV_MENU_ITEM.NOTIFICATIONS.image}
                                           className={'menu-icon'}/>
                            </ListItemIcon>
                            <ListItemText>{NAV_MENU_ITEM.NOTIFICATIONS.name}</ListItemText>
                        </MenuItem>

                        <MenuItem className={'menu-item'}
                                  onClick={() => handleClick(NAV_MENU_ITEM.CREATE.name)}
                                  selected={selectedItem === NAV_MENU_ITEM.CREATE.name}>
                            <ListItemIcon>
                                <CardMedia title={'Create'}
                                           image={NAV_MENU_ITEM.CREATE.image}
                                           className={'menu-icon'}/>
                            </ListItemIcon>
                            <ListItemText>{NAV_MENU_ITEM.CREATE.name}</ListItemText>
                        </MenuItem>

                        <MenuItem className={'menu-item'}
                                  onClick={() => handleClick(NAV_MENU_ITEM.PROFILE.name)}
                                  selected={selectedItem === NAV_MENU_ITEM.PROFILE.name}>
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
                        <MenuItem className={'menu-item'}
                                  onClick={() => handleClick(NAV_MENU_ITEM.MORE.name)}
                                  selected={selectedItem === NAV_MENU_ITEM.MORE.name}>
                            <ListItemIcon>
                                <CardMedia title={'Profile'}
                                           image={NAV_MENU_ITEM.MORE.image}
                                           className={'menu-icon'}/>
                            </ListItemIcon>
                            <ListItemText>{NAV_MENU_ITEM.MORE.name}</ListItemText>
                        </MenuItem>
                    </MenuList>
                </div>
            </div>
        </Fragment>
    )
}
export default Nav;
