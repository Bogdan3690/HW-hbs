import products from "./data";
import Handlebars from "handlebars";
import allProducts from "./template/my-template.hbs?raw";

const container = document.querySelector(".market-menu-js")
console.log(container);

const templateFn = Handlebars.compile(allProducts);
const markup = templateFn({ items:products })

container.innerHTML = markup;
console.log(markup);