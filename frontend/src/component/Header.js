import { IoCartOutline } from "react-icons/io5";
import { TbCircleDashedPercentage } from "react-icons/tb";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { IoMdHome } from "react-icons/io";
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import "./Header.css";

const NavbarLinks = ({ image, content, newClass }) => {
    return (
        <div className={`nav-links-container ${newClass}`}>
            {image}
            <p>{content}</p>
        </div>
    )
}

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }} height="4rem" marginBottom="30px">
            <AppBar position="static" sx={{ bgcolor: "white", color: "black" }}>
                <Toolbar>
                    <Box className="logo">
                        <img src="https://medingen.in/migfulllogo.png" />
                        <Typography variant="h6" color="black">Medingen</Typography>
                    </Box>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box className="line-container">
                        <NavbarLinks newClass="home-new" image={<IoMdHome className="nav-img" />} content="Home" />
                        <NavbarLinks newClass="" image={<TbCircleDashedPercentage className="nav-img" />} content="Offers" />
                        <NavbarLinks newClass="" image={<MdOutlineNotificationsActive className="nav-img" />} content="Notification" />
                        <NavbarLinks newClass="" image={<VscAccount className="nav-img" />} content="Profile" />
                    </Box>
                    <Box sx={{ flexGrow: 1 }} />
                    <IoCartOutline className="cart-img" />
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header