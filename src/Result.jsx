import React from 'react'

export const Result = (props) => {
    // source unsplash api to get random images 
    const img = `https://source.unsplash.com/${props.width}x${props.height}/?${props.name}`

    return (
        <>
        <div className="container-fluid images_area">
        <div className="img_box row">
            <div className="col my-3">
            <img src={img} alt="Img" />
            </div>
        </div>
        </div>
        </>
    )
}
