import React from 'react'
import { ToastHeader } from 'reactstrap'

const Displayreviews = (props:any) => {
    return (
        <>
            <div>
                <p>{props.review}</p>
                <br />
                <ToastHeader icon={props.recommended === true ? "primary" : "danger"}>Recommended</ToastHeader>
            </div>
            <br />
        </>
    )
}

export default Displayreviews