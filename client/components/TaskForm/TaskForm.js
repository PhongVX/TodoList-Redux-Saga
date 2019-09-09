import React, { Component } from 'react'
import taskFormStyles from './TaskForm.style'
import { withStyles } from '@material-ui/styles'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'

class TaskForm extends Component {
    render() {
        const {open} = this.props
        return (
            <Dialog open={open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                <DialogContent>
                    <h1>Dialog Content</h1>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                        Cancel
            </Button>
                    <Button onClick={this.handleClose} color="primary">
                        Ok
            </Button>
                </DialogActions>
            </Dialog>
        )
    }
}

export default withStyles(taskFormStyles)(TaskForm)