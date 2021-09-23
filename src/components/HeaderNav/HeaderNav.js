import { AppBar, Container, Toolbar, IconButton, Typography, Box } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(1)
    },
    title: {
        flexGrow: 1
    }
    }));

const HeaderNav = () => {
    const classes = useStyles();
    return (
        <AppBar position='fixed'>
            <Container fixed>
                <Toolbar>
                    <IconButton edge='start'
                    color='inherit' arial-label='menu' className={classes.menuButton}>
                        <MenuIcon />  
                    </IconButton>
                    <Typography variant ='h6' className={classes.title}>Чаты true джедаев</Typography>
                    <Box mr={3}>
                        <Button color='inherit' variant='outlined'>Log in</Button>
                    </Box>
                    <Button color='secondary' variant='contained'>Sign up</Button>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default HeaderNav;