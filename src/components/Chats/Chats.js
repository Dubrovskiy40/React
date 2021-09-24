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

import { useDispatch } from 'react-redux';
import { addChat } from "../../actions/chatsActions";
import { deleteChat } from "../../actions/chatsActions";

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

const Chats = ({ chats }) => {
    const classes = useStyles();
    // const [listChats] = useState(
    //     [
    //         {id: 1, name: 'Штурмовики', href: '/chats/{id}'},
    //         {id: 2, name: 'Джедаи', href: '/chats/{id}'},
    //         {id: 3, name: 'Принцесса Лея 18+', href: '/chats/{id}'},
    //         {id: 4, name: 'Дроны', href: '/chats/{id}'},
    //         {id: 5, name: 'Ситхи', href: '/chats/{id}'}
    //     ]
    // );

    const dispatch = useDispatch();

    const [text, setText] = useState();

    const handlerAdd = (e) => {
        console.log('addChat', chats.id);
        // dispatch({type: "ADD_CHAT_ITEM"});
        e.preventDefault();
        dispatch(addChat(chats.name));
    };
    const handlerDelete = () => {
        console.log('deleteChat', chats.id);
        // dispatch({ type: "DELETE_CHAT_ITEM", payload: id });
        dispatch(deleteChat(chats.id));
    };

    return (
        <>
            <div className={classes.root}>
                <List component="nav" aria-label="main mailbox folders">
                    <ul className={classes.ul}>
                        {/* <ListSubheader>{`Список чатов:`}</ListSubheader>
                        {listChats.map(chat => (
                            <ListItem button key={chat.id}>
                                <ListItemIcon>
                                    <AccessibilityNew />
                                </ListItemIcon>
                            <ListItemText primary={<Link to={chat.href}>{chat.name}</Link>} />
                            </ListItem>
                        ))} */}
                        <ListSubheader>{`Список чатов:`}</ListSubheader>
                        <ListItem button key={chats.id}>
                            <ListItemIcon>
                                <AccessibilityNew />
                            </ListItemIcon>
                            <ListItemText primary={<Link to={chats.href}>{chats.name}</Link>} />
                        </ListItem>
                    </ul>
                </List>
                <div className={classes.chatsBtn}>
                    <form onSubmit={handlerAdd}>
                        <input value={text} onChange={(e) => setText(e.target.value)} type="text" />
                        <Button color='inherit' variant='outlined' type="submit">add</Button>
                    </form>
                    <Button color='secondary' variant='contained' onClick={handlerDelete}>delete</Button>
                </div>
            </div>
        </>
    );
}
export default Chats;