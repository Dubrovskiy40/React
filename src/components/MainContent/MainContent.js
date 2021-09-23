import { Container, Typography, Paper, Grid } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

import imgFon from './fon.jpg';

const useStyles = makeStyles((theme) => ({
    wrap: {
        paddingTop: 80
    },
    mainFeaturesPost: {
        position: 'relative',
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPositionn: 'center'
    },
    mainFeaturesPostContent: {
        position: 'relative',
        padding: theme.spacing(4),
        justifyContent: 'space-around'
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundOverlay: "rgba(0, 0, 0, .3)"
    },
}));

const MainContent = () => {
    const classes = useStyles();
    return (
        <main className={classes.wrap}>
            <Paper className={classes.mainFeaturesPost}
            style={{ backgroundImage: `url(${imgFon})` }}>
                <Container fixed>
                    <div className={classes.overlay} />
                    <Grid container>
                        <Grid item xs={12}>
                            <div className={classes.mainFeaturesPostContent}>
                                <Typography component='h1' color='inherit' gutterBottom>
                                    'Выбирай на чей путь станешь ты, юный падаван ;-)'
                                </Typography>
                                <Typography component='h5' color='inherit' paragraph>
                                    Джедай-человек, обладающий Силой.
                                    Он справедливый, добрый всегда,
                                    Джедай никогда не бывает унылый,
                                    Ему нипочем холода и года.
                                    Джедай-это храбрый и преданный воин,
                                    Он никогда не устает.
                                    Рыцарь Джедай всегда спокоен,
                                    Он друзей не предает.
                                    Бывает также и Темный Джедай,
                                    Он несправедлив и предан Злу.
                                    Ты же свой путь сам выбирай,
                                    Сделай шаг на свою тропу!
                                    Как отличить Зло от Добра?
                                    Неужели ответа ты не найдешь?
                                    Так же, как и слона от козла:
                                    Иди по чувству-и поймешь.
                                </Typography>
                            </div>
                        </Grid>
                    </Grid> 
                </Container>
            </Paper>
        </main>
    )
};
export default MainContent;