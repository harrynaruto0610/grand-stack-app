/*eslint-disable*/
import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import { Box, Container } from '@material-ui/core'

import UserList from '../components/UserList'
import Dashboard from '../components/Dashboard';
import Copyright from './Copyright';


const useStyles = makeStyles((theme) => ({
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
}))

export default function App() {
    const classes = useStyles()

    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/businesses" component={UserList} />
                    <Route exact path="/users" component={UserList} />
                </Switch>

                <Box pt={4}>
                    <Copyright />
                </Box>
            </Container>
        </main>
    )
}
