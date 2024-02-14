

function greet (name){
    console.log (`Hello ${name}`);
}

function techWizzardry (callback, ...rest) {
    rest.map (callback);
}

// Create a function that accepts:
// A callback function
// Three name parameters ✔
// It should call the callback function (in this case, the greeting function we made), passing each name 