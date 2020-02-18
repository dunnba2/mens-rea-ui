import React, { SyntheticEvent } from 'react';
import { Form, FormGroup, Col, Input, Button } from 'reactstrap';
import { Redirect } from 'react-router-dom';

interface ILoginState {
    username: string
    password: string
}

interface ILoginProps {
    updateCurrentUser: (u: string, p: string) => void
    loginMessage: string
    loggedIn: boolean
}

export class LoginComponent extends React.Component<any, ILoginState> {
    constructor(props: any) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    updateUsername = (event: any) => {
        this.setState({
            ...this.state,
            username: event.target.value
        })
    }

    updatePassword = (event: any) => {
        this.setState({
            ...this.state,
            password: event.target.value
        })
    }

    submitLogin = async (event: SyntheticEvent) => {
        event.preventDefault()
        await this.props.updateCurrentUser(this.state.username, this.state.password)
     
        let { from } = this.props.location.state || { from: {pathname: "/"}}

        if (this.props.loggedIn) {
            this.props.history.push(from)
        }
    }

    render() {
        return (
            <div className="main">
                <h1>Mens Rea</h1>
                <h2>Please Log In</h2>
                <div className="content">
                    <div className="content-sm">
                        <Form onSubmit={this.submitLogin}>
                            <FormGroup row>
                                <Col sm={12}>
                                    <Input required
                                        type="text"
                                        name="Username"
                                        id="exampleUsername"
                                        placeholder="Username"
                                        value={this.state.username}
                                        onChange={this.updateUsername} />
                                </Col>
                            </FormGroup>
                            <FormGroup row >
                                <Col sm={12}>
                                    <Input required
                                        type="password"
                                        name="password"
                                        id="examplePassword"
                                        placeholder="Password"
                                        value={this.state.password}
                                        onChange={this.updatePassword} />
                                </Col>
                            </FormGroup>
                            <Button className="mr-button">Login</Button>
                        </Form>
                        <br /><br />
                    </div>
                </div>
                <p>{this.props.loginMessage}</p>}
            </div>
        )
    }
}