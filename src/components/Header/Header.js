import * as React from 'react';
import { Link } from "react-router-dom";
import './Header.scss';
import logo from '../../assets/images/logo admin.png'
import Button from '@mui/material/Button';
import { MdOutlineMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import SearchBox from "../SearchBox/SearchBox";
import { MdLightMode } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { IoShieldHalfSharp } from "react-icons/io5";
import PersonAdd from '@mui/icons-material/PersonAdd';
import Logout from '@mui/icons-material/Logout';
import Divider from '@mui/material/Divider';
import { useAppContext } from '../../context/context';
import { useEffect, useState } from 'react';




const Header = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [isOpenNotificationDrop, setIsOpenNotificationDrop] = React.useState(false);
    const openMyAcc = Boolean(anchorEl);
    const openNotifications = Boolean(isOpenNotificationDrop);
    const { isToggleSidebar, setIsToggleSidebar, themeMode, setThemeMode, isLogin, setIsLogin } = useAppContext();

    const handleOpenMyAccDrop = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMyAccDrop = () => {
        setAnchorEl(null);
    };

    const handleOpenNotificationsDrop = () => {
        setIsOpenNotificationDrop(true)
    }

    const handleCloseNotificationsDrop = () => {
        setIsOpenNotificationDrop(false)
    }

    return (
        <>
            <header className="d-flex align-items-center">
                <div className="container-fluid w-100">
                    <div className="row d-flex align-items-center w-100">
                        <div className="col-sm-2 part1">
                            <Link to={'/'} className="d-flex align-items-center logoWrapper logo">
                                <img src={logo} />
                                <span className="ml-2">HK_ADMIN</span>
                            </Link>
                        </div>
                        <div className="col-sm-3 d-flex align-items-center part2">
                            <Button
                                className="rounded-circle mr-3"
                                onClick={() => setIsToggleSidebar(!isToggleSidebar)}>
                                {
                                    isToggleSidebar === false ?
                                        <MdOutlineMenu /> : <MdOutlineMenuOpen />
                                }
                            </Button>
                            <SearchBox />
                        </div>
                        <div className="col-sm-7 d-flex align-items-center 
                        justify-content-end part3">
                            <Button className="rounded-circle mr-3" onClick={() => setThemeMode(!themeMode)}>
                                <MdLightMode />
                            </Button>
                            <Button className="rounded-circle mr-3"><IoCartOutline /></Button>
                            <Button className="rounded-circle mr-3"><MdOutlineMailOutline /></Button>
                            <div className='dropdownWrapper position-relative'>
                                <Button className="rounded-circle mr-3"
                                    onClick={handleOpenNotificationsDrop}
                                ><FaRegBell /></Button>
                                <Menu
                                    anchorEl={isOpenNotificationDrop}
                                    className='notifications dropdown_list'
                                    id="notifications"
                                    open={openNotifications}
                                    onClose={handleCloseNotificationsDrop}
                                    onClick={handleCloseNotificationsDrop}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >
                                    <div className='head pl-3 pb-0'>
                                        <h4>Orders (12)</h4>
                                    </div>
                                    <Divider className='mb-1' />

                                    <div className='scroll'>
                                        <MenuItem onClick={handleCloseMyAccDrop}>
                                            <div className='d-flex'>
                                                <div>
                                                    <div className="userImg">
                                                        <span className='rounded-circle'>
                                                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className='dropdownInfo'>
                                                    <h4>
                                                        <span>
                                                            <b> Admin1 </b>
                                                            added to his favorite list
                                                            <b> Leather belt steve madden</b>
                                                        </span>
                                                    </h4>
                                                    <p className='text-sky mb-0'>few seconds ago</p>
                                                </div>
                                            </div>
                                        </MenuItem>
                                        <MenuItem onClick={handleCloseMyAccDrop}>
                                            <div className='d-flex'>
                                                <div>
                                                    <div className="userImg">
                                                        <span className='rounded-circle'>
                                                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className='dropdownInfo'>
                                                    <h4>
                                                        <span>
                                                            <b> Admin1 </b>
                                                            added to his favorite list
                                                            <b> Leather belt steve madden</b>
                                                        </span>
                                                    </h4>
                                                    <p className='text-sky mb-0'>few seconds ago</p>
                                                </div>
                                            </div>
                                        </MenuItem>
                                        <MenuItem onClick={handleCloseMyAccDrop}>
                                            <div className='d-flex'>
                                                <div>
                                                    <div className="userImg">
                                                        <span className='rounded-circle'>
                                                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className='dropdownInfo'>
                                                    <h4>
                                                        <span>
                                                            <b> Admin1 </b>
                                                            added to his favorite list
                                                            <b> Leather belt steve madden</b>
                                                        </span>
                                                    </h4>
                                                    <p className='text-sky mb-0'>few seconds ago</p>
                                                </div>
                                            </div>
                                        </MenuItem>
                                        <MenuItem onClick={handleCloseMyAccDrop}>
                                            <div className='d-flex'>
                                                <div>
                                                    <div className="userImg">
                                                        <span className='rounded-circle'>
                                                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className='dropdownInfo'>
                                                    <h4>
                                                        <span>
                                                            <b> Admin1 </b>
                                                            added to his favorite list
                                                            <b> Leather belt steve madden</b>
                                                        </span>
                                                    </h4>
                                                    <p className='text-sky mb-0'>few seconds ago</p>
                                                </div>
                                            </div>
                                        </MenuItem>
                                        <MenuItem onClick={handleCloseMyAccDrop}>
                                            <div className='d-flex'>
                                                <div>
                                                    <div className="userImg">
                                                        <span className='rounded-circle'>
                                                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className='dropdownInfo'>
                                                    <h4>
                                                        <span>
                                                            <b> Admin1 </b>
                                                            added to his favorite list
                                                            <b> Leather belt steve madden</b>
                                                        </span>
                                                    </h4>
                                                    <p className='text-sky mb-0'>few seconds ago</p>
                                                </div>
                                            </div>
                                        </MenuItem>
                                        <MenuItem onClick={handleCloseMyAccDrop}>
                                            <div className='d-flex'>
                                                <div>
                                                    <div className="userImg">
                                                        <span className='rounded-circle'>
                                                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className='dropdownInfo'>
                                                    <h4>
                                                        <span>
                                                            <b> Admin1 </b>
                                                            added to his favorite list
                                                            <b> Leather belt steve madden</b>
                                                        </span>
                                                    </h4>
                                                    <p className='text-sky mb-0'>few seconds ago</p>
                                                </div>
                                            </div>
                                        </MenuItem>
                                        <MenuItem onClick={handleCloseMyAccDrop}>
                                            <div className='d-flex'>
                                                <div>
                                                    <div className="userImg">
                                                        <span className='rounded-circle'>
                                                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className='dropdownInfo'>
                                                    <h4>
                                                        <span>
                                                            <b> Admin1 </b>
                                                            added to his favorite list
                                                            <b> Leather belt steve madden</b>
                                                        </span>
                                                    </h4>
                                                    <p className='text-sky mb-0'>few seconds ago</p>
                                                </div>
                                            </div>
                                        </MenuItem>
                                    </div>
                                    <div className='pl-3 pr-3 pt-2 pb-1 w-100'>
                                        <Button className='btn-blue w-100'>
                                            View all notifications
                                        </Button>
                                    </div>
                                </Menu>
                            </div>

                            {
                                isLogin === false ?
                                    <Link to={'/login'}>
                                        <Button className='btn-blue btn-lg btn-round'>Sign In</Button>
                                    </Link>
                                    :
                                    <div className="myAccWrapper">
                                        <Button className="myAcc d-flex align-items-center "
                                            onClick={handleOpenMyAccDrop}
                                        >
                                            <div className="userImg">
                                                <span className="rounded-circle">
                                                    <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" />
                                                </span>
                                            </div>
                                            <div className="userInfo">
                                                <h4>Admin</h4>
                                                <p className="mb-0">@admin1</p>
                                            </div>
                                        </Button>
                                        <Menu
                                            anchorEl={anchorEl}
                                            id="account-menu"
                                            open={openMyAcc}
                                            onClose={handleCloseMyAccDrop}
                                            onClick={handleCloseMyAccDrop}
                                            slotProps={{
                                                paper: {
                                                    elevation: 0,
                                                    sx: {
                                                        overflow: 'visible',
                                                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                        mt: 1.5,
                                                        '& .MuiAvatar-root': {
                                                            width: 32,
                                                            height: 32,
                                                            ml: -0.5,
                                                            mr: 1,
                                                        },
                                                        '&::before': {
                                                            content: '""',
                                                            display: 'block',
                                                            position: 'absolute',
                                                            top: 0,
                                                            right: 14,
                                                            width: 10,
                                                            height: 10,
                                                            bgcolor: 'background.paper',
                                                            transform: 'translateY(-50%) rotate(45deg)',
                                                            zIndex: 0,
                                                        },
                                                    },
                                                },
                                            }}
                                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                        >
                                            <MenuItem onClick={handleCloseMyAccDrop}>
                                                <ListItemIcon>
                                                    <PersonAdd fontSize="small" />
                                                </ListItemIcon>
                                                My Account
                                            </MenuItem>
                                            <MenuItem onClick={handleCloseMyAccDrop}>
                                                <ListItemIcon>
                                                    <IoShieldHalfSharp />
                                                </ListItemIcon>
                                                Reset Password
                                            </MenuItem>
                                            <MenuItem onClick={handleCloseMyAccDrop}>
                                                <ListItemIcon>
                                                    <Logout fontSize="small" />
                                                </ListItemIcon>
                                                Logout
                                            </MenuItem>
                                        </Menu>
                                    </div>
                            }
                        </div>
                    </div>
                </div>

            </header>
        </>
    )
}

export default Header;