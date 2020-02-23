import React, { SyntheticEvent, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import { submitReview } from '../../remote/mens-rea-app/mens-rea-submit-review';



export const SubmitReviewComponent = (props:any) => {
    const {
            userId,
            mediaId,
            bookTitle,
            review,
            recommended  
    } = props

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const updateReview = (event: any) => {
        props.setState({
            ...props.state,
            review:event.target.value
        })
    }

    const updateRecommended = (event:any) => {
        props.setState({
            ...props.state,
            recommended:event.target.value === 'true' ? true : false
        })
    }

    const submitNewReview = async (event: SyntheticEvent) => {
        event.preventDefault()
        let response: any = await submitReview(userId, mediaId, recommended, props.review)
        if (response.status === 200) {
            props.history.push("/media")
        }
    }

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader >{props.bookTitle}</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="exampleText">Review</Label>
                            <Input type="textarea" name="text" id="exampleText" value={props.review} onChange={props.updateReview} />
                        </FormGroup>
                        <FormGroup tag="fieldset">
                            <Label>Radio Buttons</Label>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="radio1" value="true" onChange={props.updateRecommended}/>{' '}Yes</Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="radio2" value='false' onChange={updateRecommended}/>{' '}No</Label>
                            </FormGroup>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onSubmit={submitNewReview}>Submit</Button>{' '}
                    <Button color="secondary">Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}
