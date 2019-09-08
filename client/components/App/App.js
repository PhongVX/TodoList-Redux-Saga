import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import './App.scss'

export default class App extends Component {
    render() {
        return (
            <div>
                <div className="hello">
                    <p>Hello Div AAAA</p>
                    <Button variant="contained" color="secondary">Material UI Button</Button>
                    <div>
                        <div>
                            ReactJS
                        </div>  
                        <div>
                            AngularJS
                        </div>  
                        <div>
                            VueJS
                        </div>  
                    </div>
                </div>
            </div>
        )
    }
}
