import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { getReviews } from '../../remote/mens-rea-app/mens-rea-get-reviews';
import Displayreviews from './DisplayReviews';



const ReviewComponent = (props: any) => {
    const {
        bookTitle,
        mediaId
    } = props

    
    const [modal, setModal] = useState(false);
    const [reviews, setReviews] = useState(Object)
    const toggle = () => setModal(!modal);

    const getList = async () => {
        let list = await getReviews(mediaId)
        setReviews(list)
        toggle() 
    }

    const displayList = reviews.map((item:any) => 
        <Displayreviews review={item.review} recommended={item.recommended} />
    ) 

    return (
        <>
            <Button className="mr-button"  onClick={getList}>Write A Review</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader >{bookTitle}</ModalHeader>
                <ModalBody>
                    { () => reviews.map((item:any) => 
        <Displayreviews review={item.review} recommended={item.recommended} />
    ) }
                </ModalBody>
                <ModalFooter>
                    <Button toggle={toggle} color="primary">Close</Button>
                </ModalFooter>
            </Modal>
        </>
    )
} 

export default ReviewComponent