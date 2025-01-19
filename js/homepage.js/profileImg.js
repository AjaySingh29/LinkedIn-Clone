function previewImage(event) {
  const file = event.target.files[0];
  const previewContainer = document.getElementById("previewContainer");
  const previewContainer2 = document.getElementById("previewContainer2");
  const previewContainer3 = document.getElementById("previewContainer3");
  const previewContainer4 = document.getElementById("previewContainer4");
  const previewContainers = document.querySelectorAll(".previewContainer");
  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.onload = (e) => {
      previewContainer.innerHTML = `<img src="${e.target.result}" alt="Preview" style="width: 40px;">`;
      previewContainer2.innerHTML = `<img src="${e.target.result}" alt="Preview" style="width: 75px; height: 75px";>`;
      previewContainer3.innerHTML = `<img src="${e.target.result}" alt="Preview" style="width: 50px; height: 50px;">`;
      previewContainer4.innerHTML = `<img src="${e.target.result}" alt="Preview" style="width: 50px; height: 50px;">`;
      previewContainers.forEach((preview)=>{
        preview.innerHTML = `<img src="${e.target.result}" alt="Preview" style="width: 40px; height: 40px;">`;
      })
     
    };
    reader.readAsDataURL(file);
  } else {
    previewContainer.innerHTML = "File not supported";
  }
}

document.getElementById("profileImg").addEventListener("change", previewImage);
