import React, {Component} from 'react';

class TodoApp extends Component{
    render () {
        return (
            <div className="TodoApp">
                <WelcomeComponent/>
                <LoginComponent/>
            </div>
        )
    }
}

class WelcomeComponent extends Component {
    render () {
        return <div>Welcome</div>
    }
}

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'saoltupp',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        //this.handleUsernameChange = this.handleUsernameChange.bind(this)
        //this.handlePasswordChange= this.handlePasswordChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleUsernameChange(event) {
        console.log(event.target.name);
        this.setState(
            {
                [event.target.name]
                  :event.target.value
            }
        )
    }

    handleChange(event) {
        console.log(event.target.name);
        this.setState(
            {
                [event.target.name]
                    :event.target.value
            }
        )
    }

    loginClicked() {
        if (this.state.username === 'saoltupp' && this.state.password === 'stuppu') {
            console.log('Successful')
            this.setState({showSuccessMessage: true})
            this.setState({hasLoginFailed: false})
        } else {
            this.setState({showSuccessMessage: false})
            this.setState({hasLoginFailed: true})
            console.log('Failed')
        }
    }

    render() {
        return (
            <div>
                {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
                {this.state.showSuccessMessage && <div>Successful</div>}
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button onClick={this.loginClicked}>Login</button>
            </div>
        )
    }
}

export default TodoApp


/*
import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router';

class TodoApp extends Component{
    render () {
        return (
            <div className="TodoApp">
                <Router>
                    <Route path="/login" component={LoginComponent}/>
                    <Route path="/welcome" component={WelcomeComponent}/>
                </Router>
            </div>
        )
    }
}

class WelcomeComponent extends Component {
    render() {
        return (
            <div className="TodoApp">
                <LoginComponent/>
                <WelcomeComponent/>
        )
    }
}

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'saoltupp',
            password: '',
            hasLoginFailed: false,
            ShowSuccessMessage: false
                }
        }
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
}
    }
    handleChange(event) {
        console.log(event.target.name);
        this.setState(
            {
                [event.target.name]
                    :event.target.value
            }
        )
    }


    loginClicked() {
        if(this.state.username==='saoltupp' && this.state.password==='stuppu') {
            console.log('Successful')
            this.setState({showSuccessMessage: true})
            this.setState({hasLoginFailed: false})
        }
    else {
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailed:true})
            console.log('Failed')
        }
        }

    render() {
        return (
        <div>
            {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
            {this.state.showSuccessMessage && <div>Successful</div>}
            User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button onClick={this.loginClicked}>Login</button>
            </div>
        )
    }
}


export default TodoApp
 */
