const contact = () => {
        const content = document.getElementById("content");
        const subContent = document.getElementById("subcontent");
        const container = document.createElement("div");

    const info = [
        {
            title: "Contact Us!"
        },
        {
            title: "Hours",
            details: ["Monday to Thursday: 11:00am - 4:00pm", "Friday to Sunday: 12:00pm - 4:00pm"]
        },
        {
            title: "Phone",
            details: "(555)123-4567"
        },
        {
            title: "Address",
            details: "456 Friendship Drive, Cheesytown, CA, US"
        }
    ];

    for (let unit of info) {
        const subHeader = document.createElement("h3");
        const text = document.createElement("p");

        container.classList.add('unit')

        subHeader.textContent = unit["title"];
        text.textContent = unit["details"];

        container.append(subHeader, text);
    }

    subContent.appendChild(container);

};

export default contact