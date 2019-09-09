import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { MuiThemeProvider } from '@material-ui/core/styles';
import TaskBoard from './TaskBoard';
import theme from '../../commons/Theme'
import './App.scss'

export default class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <TaskBoard/>
            </MuiThemeProvider>
        )
    }
}
