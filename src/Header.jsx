import {AppBar, Toolbar, Typography} from "@mui/material";
import AcUnitIcon from '@mui/icons-material/AcUnit';
const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography sx={{flex: 1}}>
                    This is our header
                </Typography>
                <AcUnitIcon></AcUnitIcon>

            </Toolbar>
        </AppBar>
    )

}

export default Header;