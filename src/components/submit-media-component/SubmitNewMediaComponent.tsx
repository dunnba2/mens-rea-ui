import React, { SyntheticEvent } from 'react';
import { submitNewMedia } from '../../remote/mens-rea-app/mens-rea-submit-new-media';
import { Form, FormGroup, Col, Input, Button } from 'reactstrap';

interface ISubmitNewMediaState {
    title: string
    creator: string
    year: string
    targetAudience: string
    userRating: number
    mediaType: string
    submissionMessage: string
}

export class SubmitNewMediaComponent extends React.Component<any, ISubmitNewMediaState> {
    constructor(props: any) {
        super(props)
        this.state = {
            title: '',
            creator: '',
            year: '',
            targetAudience: '',
            userRating: 0,
            mediaType: '',
            submissionMessage: ''
        }
    }

    updateTitle = (event: any) => {
        this.setState({
            ...this.state,
            title: event.target.value
        })
    }

    updateCreator = (event: any) => {
        this.setState({
            ...this.state,
            creator: event.target.value
        })
    }

    updateYear = (event: any) => {
        this.setState({
            ...this.state,
            year: event.target.value
        })
    }

    updateTargetAudience = (event: any) => {
        this.setState({
            ...this.state,
            targetAudience: event.target.value
        })
    }

    updateUserRating = (event: any) => {
        this.setState({
            ...this.state,
            userRating: event.target.value
        })
    }

    udpateMediaType = (event: any) => {
        this.setState({
            ...this.state,
            mediaType: event.target.value
        })
    }

    submitMedia = async (event: SyntheticEvent) => {
        event.preventDefault()
        let response: any = await submitNewMedia(this.state.title, this.state.creator, this.state.year, this.state.mediaType, this.state.userRating, this.state.targetAudience)
        this.setState({
            ...this.state,
            submissionMessage: response.submissionMessage
        })
    }

    resetFields = () => {
        this.setState({
            ...this.state,
            title: '',
            creator: '',
            year: '',
            targetAudience: '',
            userRating: 0,
            mediaType: ''
        })
    }

    render() {
        return (
            <div className="main">
                <h1>
                    Mens Rea
                    </h1>
                <h2>Submit New Media</h2>>
                <div className="content">
                    <div className="content-sm">
                        <Form id="newmedia" onSubmit={this.submitMedia}>
                            <FormGroup row>
                                <h4>Media Title</h4>
                                <Col sm={12}>
                                    <Input required
                                        type="text"
                                        name="title"
                                        id="title"
                                        placeholder="Title"
                                        value={this.state.title}
                                        onChange={this.updateTitle} />
                                </Col>
                            </FormGroup>
                            <FormGroup row >
                                <h4>Creator</h4>
                                <Col sm={12}>
                                    <Input required
                                        type="text"
                                        name="creator"
                                        id="creator"
                                        placeholder="Creator"
                                        value={this.state.creator}
                                        onChange={this.updateCreator} />
                                </Col>
                            </FormGroup>
                            <FormGroup row >
                                <h4>Year</h4>
                                <Col sm={12}>
                                    <Input required
                                        type="text"
                                        name="year"
                                        id="year"
                                        placeholder="Year"
                                        value={this.state.year}
                                        onChange={this.updateYear} />
                                </Col>
                            </FormGroup>
                            <FormGroup row >
                                <h4>Target Audience</h4>
                                <Col sm={12}>
                                    <Input required
                                        type="text"
                                        name="targetaudience"
                                        id="targetaudience"
                                        placeholder="Target Audience"
                                        value={this.state.targetAudience}
                                        onChange={this.updateTargetAudience} />
                                </Col>
                            </FormGroup>
                            <FormGroup row >
                                <h4>User Rating</h4>
                                <Col sm={12}>
                                    <Input required
                                        type="number"
                                        name="userrating"
                                        id="userrating"
                                        min="1" max="5"
                                        placeholder="User Rating"
                                        value={this.state.userRating}
                                        onChange={this.updateUserRating} />
                                </Col>
                            </FormGroup>
                            <FormGroup row >
                                <h4>Media Type</h4>
                                <Col sm={12}>
                                    <Input type="select" name="select" id="mediatype" value={this.state.mediaType} onChange={this.udpateMediaType}>
                                        <option >Choose an Option</option>
                                        <option value='Book'>Book</option>
                                        <option value='Movie'>Movie</option>
                                        <option value='Show'>TV Show</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <Button onSubmit={this.resetFields} className="mr-button">Submit</Button>
                        </Form>
                        <br /><br />
                    </div>
                    <p>{this.state.submissionMessage}</p>
                </div>
                
            </div>
        )
    }
}