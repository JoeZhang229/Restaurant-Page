const initialLoad = () => {
    const content = document.getElementById("content");
    const subContent = document.createElement("div");

    const title = document.createElement("h1");
    const text = document.createElement("h2");
    const pic = document.createElement("img");

    const tabs = document.createElement("ul");
    const tabs_Menu = document.createElement("li");
    const tabs_Contact = document.createElement("li");
    const tabs_About = document.createElement("li");
    
    title.textContent = "Pizza That!";
    title.setAttribute("id", "title");

    text.textContent = "Socially distanced pizza for friends";

    tabs_Menu.textContent = "Menu";
    tabs_Menu.setAttribute("id", "Menu");
    tabs.appendChild(tabs_Menu);

    tabs_Contact.textContent = "Contact";
    tabs_Contact.setAttribute("id", "Contact");
    tabs.appendChild(tabs_Contact);

    tabs_About.textContent = "About";
    tabs_About.setAttribute("id", "About");
    tabs.appendChild(tabs_About);

    subContent.setAttribute("id", "subcontent");

    pic.src = "Pizza_Image.jpg"
    pic.width = "400";
    pic.height = "400";
    subContent.appendChild(pic);


    content.appendChild(title);
    content.appendChild(text);
    content.appendChild(tabs);
    content.appendChild(subContent);
}

export default initialLoad