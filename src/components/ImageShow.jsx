function ImageShow({ image }) {
    console.log(image)
    return (
        <>
        
                <img className="" src={image.urls.small} alt={image.alt_description} />
         
        </>
    )
}

export default ImageShow