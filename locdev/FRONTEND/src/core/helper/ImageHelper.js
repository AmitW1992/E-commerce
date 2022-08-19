import React from 'react'

 const ImageHelper = ({product}) => {
    const imageurl = product ? product.image
    : `http://127.0.0.1:8000/media/images/w400.webp`
    return (
    <div className="rounded border border-success p-2"> 
        <img
        src={imageurl}
        style={{"height" : "100%", "width" : "100%"}}
        // style={{ maxHeight:"100%",maxwidth:"100%" }}
        className="mb-4 rounded"
        alt=""
        />
    </div>
  );
};

export default ImageHelper;