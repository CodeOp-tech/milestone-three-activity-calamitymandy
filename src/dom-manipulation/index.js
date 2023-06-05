/*
 * Usa todo lo que has aprendido para manipular el DOM usando sólo JavaScript
 * para completar las preguntas debajo cuando hagas "submit" en el formulario:
 * 1. Cambia el estilo del elemento <body> para que todo el texto tenga una
 * font-family: "Verdana, sans-serif".
 * 2. Asegúrate que todos los elementos <span> muestren el contenido que has
 * introducido en los inputs.
 * 3. Haz un loop que cambie la clase de cada <li> a "list-item"
 * 5. Crea un nuevo elemento <img>, haz que el atributo src sea una imagen
 * tuya y añádelo a la parte superior de la sección "Sobre mi".
 * Si necesitas añadir algún elemento adicional al index.html, puedes hacerlo,
 * pero crédito extra si lo logras sin añadir elementos adicionales.
 * 5. Bonus - Modifica y añade estilo al layout para que tu página "Sobre mi"
 * tenga una aspecto más pulido.
 */

function handleSubmit(event) {
  event.preventDefault();
  elem = event.target;

  //Cambiar el estilo del elemento <body>
  const bodyElem = document.querySelector("body");
  //bodyElem.classList.add("fontVerdana");
  bodyElem.setAttribute(
    "style",
    "font-family: Verdana, Geneva, Tahoma, sans-serif; text-align: center; background: #6bc8c9; margin: 100px;"
  );

  //Mostrar en <span> el contenido de los inputs.
  const spanResto = document.getElementById("restaurant");
  const spanBorhood = document.getElementById("neighborhood");
  const spanHometown = document.getElementById("hometown");
  const inputResto = elem.elements.restaurantsInput.value;
  const inputBorhood = elem.elements.neighborhoodInput.value;
  const inputHometown = elem.elements.hometownInput.value;
  spanResto.textContent = inputResto;
  spanBorhood.textContent = inputBorhood;
  spanHometown.textContent = inputHometown;
  //console.log(elem.elements.restaurantsInput.value);

  //loop que cambie la clase de cada <li> a "list-item"
  let liElem = document.querySelector("li");
  while (liElem) {
    liElem.classList.add("list-item");
    liElem = liElem.nextElementSibling;
  }
  //Crear elem <img> con src: imagen tuya y añadir a "Sobre mi".
  const imgElem = document.createElement("img");
  imgElem.setAttribute("src", "./IMG_5562.JPG");
  imgElem.setAttribute("height", "200px");
  console.log(bodyElem.children);
  bodyElem.insertBefore(imgElem, bodyElem.children[1]);

  //Modifica y añade estilo
  let inputElem = document.querySelectorAll("input");
  inputElem[0].setAttribute("style", "width: 100%; margin: 15px");
  inputElem[1].setAttribute("style", "width: 100%; margin: 15px");
  inputElem[2].setAttribute("style", "width: 100%; margin: 15px");

  const ulElem = document.querySelector("ul");
  ulElem.setAttribute(
    "style",
    "border-color: lightslategrey; border-style: solid; border-radius: 10px; padding: 20px;"
  );
  //alert("Submit!");
}

let form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);
