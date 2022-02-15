import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import experiences from './images/experiences.png';

import Posts from './components/Posts/posts.js';
import Form from './components/Form/form.js';

const App = () => {
    return (
        <Container maxidth="lg">
            <AppBar position="static" color="inherit">
                <Typography variant="h2" align="center">Experiencias</Typography>
                <img src={experiences} alt="experiences" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;