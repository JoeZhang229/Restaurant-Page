import initialLoad from './initialLoad';
import homepage from './homepage';
import menuPage from './menu';
import contact from './contact';
import about from './about';

initialLoad();

const clearSubContent = () => {
    document.getElementById("subcontent").textContent = "";
}

document.getElementById("title").addEventListener("click", () => {
    clearSubContent(); 
    homepage();
});

document.getElementById("Menu").addEventListener("click", () => {
    clearSubContent();
    menuPage.loadMenu();
});

document.getElementById("Contact").addEventListener("click", () => {
    clearSubContent();
    contact();
});

document.getElementById("About").addEventListener("click", () => {
    clearSubContent();
    about();
});
console.log("It is working!");