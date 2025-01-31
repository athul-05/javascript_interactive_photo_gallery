function upDate(previewPic) {
    // 1) Change the URL for the background image of the div with id="image" to the source file of the preview image
    document.getElementById('image').style.backgroundImage = "url(" + previewPic.src + ")";
    
    // 2) Change the text of the div with id="image" to the alt text of the preview image
    document.getElementById('image').innerHTML = previewPic.alt;
}

function unDo() {
    // 1) Update the URL for the background image of the div with id="image" back to the original image.
    // Use the original URL for the background image (from gallery.css)
    document.getElementById('image').style.backgroundImage = "url('')";  // Empty URL resets it

    // 2) Change the text of the div with id="image" back to the original text.
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";  // Default text
}
