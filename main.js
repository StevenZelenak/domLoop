console.log("Hello");

const dinosaur = [

    {type:'t-rex', name: 'Wrex'},
    {type:'stegosaurus', name: 'Steg'},
    {type:'velociraptor', name: 'Larry'},
    {type:'somethingmadeupasuarus', name: 'something'}
]

const writeToDom = (divId,textToPrint) =>{

    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;

}

const buildDinoCard = (dino) =>{
    let domString = '';

    for (let i = 0; i < dino.length; i++) {
        domString += '<div class = "dinosaur">';
        domString += `<h3>${dino[i].type}</h3> <p>${dino[i].name}</p> `;
        domString += '</div>';
    }

        //return domString;
    
     writeToDom('dino-barn', domString);
    
}

buildDinoCard(dinosaur);



