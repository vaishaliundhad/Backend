//  async function uploadImage(){
//     const fileInput = document.getElementById("uploadInput");
//     const file = fileInput.files[0];

//     const formdata = new FormData();
//     formdata.append("image" , file);

//     const response = await fetch("http://127.0.0.1:8888" , {
//         method:"POST",
//         body:formdata
//     });

//     const data = await response.json();
//     const imageUrl = data.imageUrl[0];

//     localStorage.setItem("cloudImage" , imageUrl)
//     showImage()
//  }

//  function showImage(){
//     const img = localStorage.getItem("cloudImage");
//     if(img){
//         document.getElementById("savedImage").src=img;
//     }
//  }

//  window.onload = showImage;

function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = err => reject(err);
        reader.readAsDataURL(file);
    });
}

async function uploadImage(){
    const fileInput = document.getElementById("uploadInput");
    const files = fileInput.files;

    if (files.length === 0) {
        alert("Please select a file.");
        return;
    }

    let savedImages = JSON.parse(localStorage.getItem("cloudImages")) || [];

    for (let file of files) {
        const base64 = await fileToBase64(file);
        savedImages.push(base64);

        //cloudinary upload
        const formData = new FormData();
        formData.append("file" , file);
        formData.append("upload_preset", "my_present_name"); 


        try{

            const response =await fetch("https://api.cloudinary.com/v1_1/dbpyiwkag/image/upload" ,{
                method:"POST",
                body:formData
            });

            const data = await response.json();
            console.log("cloudinary image url:" , data.secure_url);
            
        }
        catch(err){
            console.error("Cloudinary upload error:", err);console.log();
            
        }
    }

    // Save updated array of base64 images to localStorage
    localStorage.setItem("cloudImages", JSON.stringify(savedImages));
    showImages();
}

function showImages() {
    const savedImages = JSON.parse(localStorage.getItem("cloudImages")) || [];
    const container = document.getElementById("savedImages");
    container.innerHTML = ''; 

    savedImages.forEach(imgBase64 => {
        const img = document.createElement("img");
        img.src = imgBase64;
        img.width = 100; 
        img.style.margin="5px"
        container.appendChild(img);
    });
}

// localStorage.clear()
window.onload = showImages;