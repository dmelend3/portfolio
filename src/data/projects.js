import basictodo from "../assets/projects/01.png"
import todob from "../assets/projects/02.png"
import todot from "../assets/projects/03.png"
import inventory from "../assets/projects/04.png"
import vuetodo from "../assets/projects/05.png"

const projects = [
  {
    name: "Basic Todo App",
    description: "A Vanilla HTML, JS, and CSS Todo Application",
    image: basictodo,
    hashtags:["todo", "html5", "css", "javascript"],
    url:"https://basictodo.danielmelendez.xyz/"
  },
  {
    name: "Basic Todo App with Bootstrap",
    description: "A Todo Application in Vanilla Javascript and Bootstrap",
    image:todob,
    hashtags:["todo", "html5", "javascript", "bootstrap"],
    url:"https://todob.danielmelendez.xyz/"
  },
  {
    name: "Basic Todo App with Tailwind",
    description: "A Todo Application in Vanilla Javascript and TailwindCSS",
    image: todot,
    hashtags:["todo", "html5", "javascript", "tailwind"],
    url:"https://todot.danielmelendez.xyz/"
  },
  {
    name: "Basic Inventory App",
    description: "A Basic Inventory App in Vue.js",
    image: inventory,
    hashtags:["todo", "html5", "javascript", "tailwind"],
    url:"https://inventory.danielmelendez.xyz/"
  },
  {
    name: "Basic Todo App with Tailwind and Vue.js",
    description: "A Todo Application in Vue.js and TailwindCSS",
    image: vuetodo,
    hashtags:["todo", "vuejs", "javascript", "tailwind"],
    url:"https://vuetodo.danielmelendez.xyz/"
  }
]

export default projects