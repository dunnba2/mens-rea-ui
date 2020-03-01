import React, { SyntheticEvent, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import { submitReview } from '../../remote/mens-rea-app/mens-rea-submit-review';


const SubmitReviewComponent = (props: any) => {
    const {
        bookTitle,
        userId,
        mediaId
    } = props

    const [modal, setModal] = useState(false);
    const [review, setReview] = useState('');
    const [recommended, setRecommended] = useState(false);

    const toggle = () => setModal(!modal);

    const updateReview = (event:any) => setReview(event.target.value) 
  

    const submitNewReview = async (event: SyntheticEvent) => {
        event.preventDefault()
        let response: any = await submitReview(userId, mediaId, recommended, review)
        console.log(response);
        toggle();

    }

    return (
        <div>
            <Button className="mr-button" onClick={toggle}>Write A Review</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader >{bookTitle}</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="exampleText">Review</Label>
                            <Input required type="textarea" name="text" id="exampleText" onChange={updateReview} />
                        </FormGroup>
                        <FormGroup tag="fieldset">
                            <Label>Do you recommend {bookTitle}?</Label>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="radio1" onChange={() => setRecommended(true)} />{' '}Yes</Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="radio2" onChange={() => setRecommended(false)} />{' '}No</Label>
                            </FormGroup>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button  color="primary" onClick={submitNewReview}>Submit</Button>{' '}
                    <Button onClick={toggle} color="secondary">Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default SubmitReviewComponent;
