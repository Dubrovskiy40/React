import React from "react";
import { useState, useEffect, useRef } from 'react';
import { FormControl } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Chats from "../Chats/Chats";
import {makeStyles} from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

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

const Form = ({messageList, messageText, fooText, messageAuthor, fooAuthor, setML, answer}) => {
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
        console.log('Список сообщений', messageList);
    };
    useEffect(() => {
        ref?.current.focus(); // '?' - если ref == undefined, то дальше свойства браться не будут...
    }, [messageText]);

    const chengeCheckbox = () => {
        setChecked(!checked);
        setHidden(!hidden);
    };

    return (
        <>
        <FormControl>
            <div>
                <Grid container spacing={10}>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <Chats />
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <h3>Сообщение отправь свое, если мысль умная посетила тебя</h3>
                            <input 
                                type="text"
                                placeholder="На верном пути ты"
                                value={messageText}
                                onChange={event => fooText(event.target.value)}
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
                                onChange={event => fooAuthor(event.target.value)}
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
                    </Grid>
                </Grid>
            </div>
        </FormControl>
        </>
    );
}
export default Form;
