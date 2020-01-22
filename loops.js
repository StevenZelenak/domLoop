console.log("Here");

const color = ['red', 'blue', 'yellow', 'orange', 'green'];

const colorLoop = (arr) => {

    let domString = '';

    for (let index = 0; index < arr.length; index++) {
        domString += `<h1>${arr[index]}</h1>`;
        
    }

    console.log(domString);
}

colorLoop(color);

const instructors = [
    {first: 'Zoe', last: 'ames'},
    {first: 'Mury', last: 'ames'},
    {first: 'Steven', last: 'ames'}
]

const nameLoop = (name) =>{
   
    let domString = '';

    for (let index = 0; index < name.length; index++) {
        domString += `<h2>${name[index].first} ${name[index].last}</h2>`;
        
    }

    console.log(domString);


}

nameLoop(instructors);