import { useState } from 'react';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction  from '@material-ui/core/BottomNavigationAction';
import { Typography } from '@material-ui/core';
import RestoreIcon from '@material-ui/icons/Restore';
import FolderIcon from '@material-ui/icons/Folder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1
    },
    wrap: {
        paddingTop: 50
    }
    }));

const Footer = () => {
    const classes = useStyles()
    const [value, setValue] = useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue)
    };

    return (
        <footer className={classes.wrap}>
            <Typography variant='h6' align='center' gutterBottom>Баловства ради компонент этот создан был</Typography>
            <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
                <BottomNavigationAction label='Recents' value='recents' icon={<RestoreIcon />} />
                <BottomNavigationAction label='Favorites' value='favorites' icon={<FavoriteIcon />} />
                <BottomNavigationAction label='Nearby' value='nearby' icon={<LocationOnIcon />} />
                <BottomNavigationAction label='Folder' value='folder' icon={<FolderIcon />} />
            </BottomNavigation>
            <Typography align='center' color='textSecondary' component='p' variant='subtitle1'>
                Dubrovskiy&#9989;
            </Typography>
        </footer>
    )
}
export default Footer;