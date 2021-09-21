import { useState } from "react";

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccessibilityNew from '@material-ui/icons/AccessibilityNew';
import Button from '@material-ui/core/Button';
import ListSubheader from '@material-ui/core/ListSubheader';

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    chatsBtn: {
        display: 'flex',
        justifyContent: 'space-evenly',
        margin: 10
    }
  }));

const Chats = () => {
    const classes = useStyles();
    const [listChats] = useState(
        [
            {id: 1, name: 'Штурмовики', href: '/chats/stormtroopers'},
            {id: 2, name: 'Джедаи', href: '/chats/jedi'},
            {id: 3, name: 'Принцесса Лея 18+', href: '/chats/princess'},
            {id: 4, name: 'Дроны', href: '/chats/drones'},
            {id: 5, name: 'Ситхи', href: '/chats/sith'}
        ]
    );

    return (
        <>
            <div className={classes.root}>
                <List component="nav" aria-label="main mailbox folders">
                    <ul className={classes.ul}>
                        <ListSubheader>{`Список чатов:`}</ListSubheader>
                        {listChats.map(chat => (
                            <ListItem button key={chat.id}>
                                <ListItemIcon>
                                    <AccessibilityNew />
                                </ListItemIcon>
                            <ListItemText primary={<Link to={chat.href}>{chat.name}</Link>} />
                            </ListItem>
                        ))}
                    </ul>
                </List>
                <div className={classes.chatsBtn}>
                    <Button color='inherit' variant='outlined'>add</Button>
                    <Button color='secondary' variant='contained'>delete</Button>
                </div>
            </div>
        </>
    );
}
export default Chats;