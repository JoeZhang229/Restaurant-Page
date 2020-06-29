const about = () => {
    const subContent = document.getElementById("subcontent");
    const mainHeader = document.createElement("h2");
    const text = document.createElement("p");

    mainHeader.textContent = "About Us"
    text.textContent = "We are a place that strives for quality, one slice at a time."

    subContent.append(mainHeader, text);
}

export default about