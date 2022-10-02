const slider = document.querySelector(".slider input");
const dragline = document.querySelector(".slider .drag-line");
const imgsl = document.querySelector(".images .img-2");
const image_input = document.querySelector("#image-input");
const image_input_left = document.querySelector("#image-input-Left");

function slude()
{
   // console.log("Check In");
    let sliderVale = slider.value;
    dragline.style.left = sliderVale + "%";
    imgsl.style.width = sliderVale+ "%";
}

image_input.addEventListener("change", function() {
    const reader = new FileReader();
    if(reader === null) return;

    reader.addEventListener("load", () => {
      const uploaded_image = reader.result;
      document.querySelector(".img-1").style.backgroundImage = `url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
  });

  image_input_left.addEventListener("change", function() {
    const reader = new FileReader();
    if(reader === null) return;
    reader.addEventListener("load", () => {
      const uploaded_image = reader.result;
      document.querySelector(".img-2").style.backgroundImage = `url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
  });