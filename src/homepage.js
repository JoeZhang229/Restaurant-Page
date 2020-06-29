const homepage = () => {
    const content = document.getElementById("content");
    const subContent = document.getElementById("subcontent");

    const pic = document.createElement("img");

    pic.src = "Pizza_Image.jpg"
    pic.width = "400";
    pic.height = "400";
    subContent.appendChild(pic);

}

export default homepage;