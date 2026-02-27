import products from "./js/products.js";
import Handlebars from "handlebars";
import allProducts from "./template.hbs?raw"

const container = document.querySelector(".market-menu-js")
const templateFn = Handlebars.compile(allProducts);
const markup = templateFn({items:products})

console.log(markup);


container.innerHTML = markup