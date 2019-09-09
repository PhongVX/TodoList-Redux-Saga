import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import taskBoardStyles from './TaskBoard.style'
import {STATUSES} from "../../../constants"

const listTask = [
    {
        id:1,
        title:"Read book",
        description:"Read material ui book",
        status:0
    },
    {
        id:2,
        title:"Play football",
        description:"with my friends",
        status:2
    },
    {
        id:3,
        title:"Play game",
        description:"",
        status:1
    }
]
class TaskBoard extends Component {
    renderBoard(){
        const {classes} = this.props;
        let xhtml = null;
        xhtml = (
            <Grid container spacing={2}>
                {
                    STATUSES.map((status,index)=>{
                        const taskFiltered = listTask.filter(task=>task.status==status.value) 
                        return (
                            <Grid item md={4} xs={12} key={status.value}>
                                <div className={classes.status}>{status.label}</div>
                                <div className={classes.wrapperListTask}>
                                    {
                                        taskFiltered.map(task=>{
                                            return (
                                                <h1>{task.title}</h1>
                                            )
                                        })
                                    }
                                </div>
                            </Grid>
                        )
                    })
                }
            </Grid>
        );
        return xhtml
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.taskboard}>
                {this.renderBoard()}
            </div>
        )
    }
}

export default withStyles(taskBoardStyles)(TaskBoard)
