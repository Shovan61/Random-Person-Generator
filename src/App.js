import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import RandomContainer from './RandomContainer';

const useStyles = makeStyles({
    root: {
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    upperblack: {
        position: 'fixed',
        top: '0',
        height: '45%',
        width: '100%',
        backgroundColor: '#444',
        zIndex: '-1',
    },
});

function App() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.upperblack}></div>
            <RandomContainer />
        </div>
    );
}

export default App;
