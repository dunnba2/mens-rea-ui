import React, { SyntheticEvent } from "react";
import { Jumbotron, Form, FormGroup, Col, Input, Button } from "reactstrap";


interface IRegisterState {
    username: string
    password: string
    email: string
}

interface IRegisterProps {
    createNewUser: (u: string, p: string, e: string) => void
    registerMessage: string
}

export class RegisterComponent extends React.Component<IRegisterProps, IRegisterState> {
    constructor(props:any) {
        super(props)
        this.state = {
            username: '',
            password: '',
            email: ''
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

    updateEmail = (event: any) => {
        this.setState({
            ...this.state,
            email: event.target.value
        })
    }

    submitRegister = async (event: SyntheticEvent) => {
        event.preventDefault()
        this.props.createNewUser(this.state.username, this.state.password, this.state.email)
    }

    render() {
        return (
            <div>
                <Jumbotron>
                    <h2 className="display-4">
                        <strong>Mens Rea Register</strong>
                    </h2>
                    <p className="lead">Something catchy here tbd</p>
                </Jumbotron>
                <div className="d-flex justify-content-center">
                <Form  onSubmit={this.submitRegister}>
                    <FormGroup row>
                        <Col sm={12}>
                            <Input required
                                type="text"
                                name="Username"
                                id="Username"
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
                                id="Password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.updatePassword} />
                        </Col>
                    </FormGroup>
                    <FormGroup row >
                        <Col sm={12}>
                            <Input required
                                type="text"
                                name="email"
                                id="Email"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.updateEmail} />
                        </Col>
                    </FormGroup>
                    <Button color="secondary">Register</Button>
                </Form>
                </div>
                <p>{this.props.registerMessage}</p>
            </div>
        )
    }
}