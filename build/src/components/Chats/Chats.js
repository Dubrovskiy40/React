import { useState } from "react";

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccessibilityNew from '@material-ui/icons/AccessibilityNew';

import ListSubheader from '@material-ui/core/ListSubheader';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));

const Chats = () => {
    const classes = useStyles();
    const [listChats] = useState(
        [
            {id: 1, name: 'Штурмовики'},
            {id: 2, name: 'Джедаи'},
            {id: 3, name: 'Принцесса Лея 18+'},
            {id: 4, name: 'Дроны'},
            {id: 5, name: 'Ситхи'}
        ]
    );

    return (
        <div className={classes.root}>
            <List component="nav" aria-label="main mailbox folders">
                <ul className={classes.ul}>
                    <ListSubheader>{`Список чатов:`}</ListSubheader>
                    {listChats.map(chat => (
                        <ListItem button key={chat.id}>
                            <ListItemIcon>
                                <AccessibilityNew />
                            </ListItemIcon>
                        <ListItemText primary={chat.name} />
                        </ListItem>
                    ))}
                </ul>
            </List>
            {/* <ul>
                {listChats.map((chat) => <li key={chat.id}><a href='#1'>{chat.name}</a></li>)}
            </ul> */}
        </div>
    );
}
export default Chats;