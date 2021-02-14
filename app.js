// first grab all the elements
const uploadImage = document.getElementById('uploadImage');
const uploadedImage = document.getElementById('uploadedImage');
const classifyBtn = document.getElementById('classify');
const results = document.getElementById('results');


// all the necessary functions will be here
// load the image model
const classifier = ml5.imageClassifier('MobileNet', () => {
    console.log('model is loaded!!!')
})

const getImageClassified = () => {
    classifier.classify(uploadedImage,(error, result) => {
        if(error) console.error(error)
        else{
            results.innerHTML = `The image is of a <span class='result-label'>${result[0].label}</span> with the confidence of <span class='result-label'>${Math.floor(result[0].confidence * 100)}% </span>`
        }
    })
}


const displayImage = () => {
    const file = uploadImage.files[0]
   
    // changeing result text
    results.innerHTML = 'Press classify button to classify the image';

    //displaying preview of the image
    const reader = new FileReader();
    reader.addEventListener('load', () => {
        uploadedImage.src = reader.result
    });
    reader.readAsDataURL(file)
}

// all the event management is done here
uploadImage.addEventListener('change', displayImage)
classifyBtn.addEventListener('click', getImageClassified)