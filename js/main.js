/*
** MAIN JS
*/
$( document ).ready(function() {

// Icon set
const icons = [
    {
      name: 'cat',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'crow',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dog',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dove',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dragon',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'horse',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'hippo',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'fish',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'carrot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'apple-alt',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'lemon',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'pepper-hot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'user-astronaut',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-graduate',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-ninja',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-secret',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
];

const colors = [
  'red',
  'blue',
  'yellow',
];

   //CHI?
   //Riferimento al contenitore (container) nel dom, dove inserirò le mie icone.
   const container = $('.icons');

   //CHE COSA voglio fare?
   //1. Printare icons sullo schermo
   // printIcons(icons, container);

   //2. Printare icons con colori diversi
   const coloredIcons = colorIcons(icons, colors);
   printIcons(coloredIcons, container);

   //3. Itero le icone per typo
   const select = $('#type');
   const types = getType(icons);

    //Generazione opzioni, non mi serve un valore ma voglio eseguire un'azione nel dom.
    genOption(types, select);

    //Gestore di evento al cambio di select
    select.change(() => {
        //seleziono il valore di quando faccio il cambio select( all, vegetable...)
        const selected = select.val();
        console.log(selected);

        //ottengo un array di icone filtrate utilizzando un filter
        const filteredIcons = filterIcons(coloredIcons, selected);
        printIcons(filteredIcons, container);
    });

}); // => FINE DOC READY!



/*DICHIARAZIONE FUNZIONI*/

//PRINT0 ICONS SULLO SCHERMO
function printIcons(icons, container) {

  //Per pulire lo schermo, il reset, prime delle iterazioni e al cambio select.
  

  //Per ogni iterazione pesco all elemento  attuale i valori tra parentesi.
  icons.forEach((element) => {
      const {family, prefix, name, color} = element;

      //Definisco ciò che andrò a iniettare nel document
      const html =
      `<div class="icon">
        <i class="${family} ${prefix}${name}"
        style="color: ${color}"></i>
        <div class="title">${name}</div>
      </div>`;

      //ho creato l'output ora voglio fare un'azione, inserirlo.
      //prendo il riferimento che ho fatto all'inizio in jquery
      //E ci inserisco ciò che ho appena generato, l'html!
      container.append(html);
  });
}


//COLORO LE ICONE
function colorIcons(icons, colors) {

    //Ottengo i type differenti degli oggetti
    const types = getType(icons);
    console.log(types);

    //Assegno un colore all'icone in base al loro tipo
    const coloredIcons = icons.map((element) => {
        const indexType = types.indexOf(element.type);

        return {
          ...element,
          color: colors[indexType],
        };
    });

    return coloredIcons;
}


//OTTENGO I TYPES DELLE ICONE
function getType(icons) {

   const types = [];

   //Voglio iterare sulle icone per capire che type hanno
   icons.forEach((element) => {
     if (! types.includes(element.type))
        types.push(element.type);
     // const {type} = element;
   });

   return types;
}


//GENERO OPZIONI PER TYPES
function genOption(types, select) {

  types.forEach((element) => {
    select.append(`<option value="${element} ">${element}</option>`)
  });
}


//FILTRO LE ICONE PER COLORE E TIPO
function filterIcons(coloredIcons, selected) {

  if (selected === 'all') {
    return coloredIcons;
  }

  const filtered = coloredIcons.filter((element) => {
    return element.type === selected;
  });

  return filtered;
}
