import React from "react";
import { useState, useEffect, useRef } from 'react';
import { FormControl } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Chats from "../Chats/Chats";
import {makeStyles} from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { Route } from "react-router-dom";

import { useSelector } from 'react-redux';

const useStyles = makeStyles(() => ({
    paper: {
        display: 'flex',
        flexDirection: 'column'
    },
    btn: {
        marginTop: 10,
        marginBottom: 10
    },
    label: {
        marginTop: 10
    },
    answer: {
        padding: 20,
        color: 'blue'
    }
}));

const Form = ({messageList, setML, answer}) => {
    const [messageText, setMessageText] = useState('');
    const [messageAuthor, setMessageAuthor] = useState('');

    const [checked, setChecked] = useState(false);
    const [hidden, setHidden] = useState(true);
    const ref = useRef(null);
    const classes = useStyles();
    const updateText = () => {
        const message = {
            id: (messageList.length + 1),
            text: messageText || '-',
            author: hidden ? '-' : messageAuthor
        };
        setML(prev => [...prev, message]);
        setMessageText('');
        setMessageAuthor('');
        console.log('Список сообщений', messageList);
    };
    useEffect(() => {
        ref?.current.focus(); // '?' - если ref == undefined, то дальше свойства браться не будут...
    }, [messageText]);

    const chengeCheckbox = () => {
        setChecked(!checked);
        setHidden(!hidden);
    };

    const chats = useSelector((state) => state.chatsList);
    console.log('1111', chats);
    
    return (
        <FormControl>
            <div>
                <Grid container spacing={10}>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            {chats.map((chat) =>(
                                <Chats key={chat.id} id={chat.id} name={chat.name} href={chat.href}/>
                            ))}
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Route path="/chats/" component={Form}>
                            <Paper className={classes.paper}>
                                <h3>Сообщение отправь свое, если мысль умная посетила тебя</h3>
                                <input 
                                    type="text"
                                    placeholder="На верном пути ты"
                                    value={messageText}
                                    onChange={event => setMessageText(event.target.value)}
                                    ref={ref}
                                />
                                <FormControlLabel
                                    control={
                                    <Checkbox
                                        onChange={chengeCheckbox}
                                        checked={checked}
                                        name="checkedB"
                                        color="primary"
                                        
                                    />
                                    }
                                    label="Имя свое указать пожелай ты"
                                />
                                <input  
                                    hidden={hidden} 
                                    type="text" 
                                    placeholder="Войти в историю"
                                    value={messageAuthor}
                                    onChange={event => setMessageAuthor(event.target.value)}
                                />
                                <Button variant="contained" 
                                    color="primary" 
                                    onClick={updateText} 
                                    type='button'
                                    className={classes.btn}
                                >
                                    Да пребудет сила
                                </Button>
                                <h5 className={classes.answer}>{answer}</h5>
                            </Paper>
                        </Route>
                    </Grid>
                </Grid>
            </div>
        </FormControl>
    );
}
export default Form;
