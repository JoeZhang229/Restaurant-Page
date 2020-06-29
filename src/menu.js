const menuPage = (() => {
    const loadMenu = () => {
        const content = document.getElementById("content");
        const subContent = document.getElementById("subcontent");

        const container = document.createElement("main");

        for (let unit of menuContents) {
            let menu = addContent(unit);
            container.appendChild(menu);
        }

        subContent.appendChild(container);
        content.appendChild(subContent);
    }
    
    const menuContents = [
    {
        title: "Sauce Bases",
        options: ["Tomato", "Cream", "Pesto", "None"]

    },
    {
        title: "Cheeses",
        options: ["Fresh Mozzarella", "Gruyure", "Low Moisture Mozzarella", "Cheddar", "Parmasan"]

    },
    {
        title: "Toppings",
        options: ["Mushrooms", "Salami", "Proscuitto", "Pepperoni", "Pineapple", "Sausage", "Olives", "Garlic", "Bell Peppers"]
    },
    {
        title: "Premades",
        options: ["Margherita" , "Marinara", "NY style Cheese", "NY style Pepperoni"]
    }
    ];

    const addContent = (menu) => {
        let section = document.createElement("section");

        let h2 = document.createElement("h2");
        h2.textContent = menu.title;

        let ul = document.createElement("ul");
        
        for (let options of menu.options) {
            let li = document.createElement("li");
            li.textContent = options;
            ul.appendChild(li);
        }

        section.append(h2, ul);

        return section;
    };

    return { loadMenu };
})();

export default menuPage