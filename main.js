// Make your global todos array here.
// Put a few todos in there to start with!
// This is mostly to give us some data to test our functions with.
let toDoList = ['what to do','how to do', 'where to do']

// Now test it here just by console.logging a particular todo index.
console.log(toDoList[1])

// Next: a function that prints a todo.
// For now, just have this function console log the value passed in!
// (We'll expand this helper later.)
const toDo = function(){
    return console.log(toDoList[1])
}


// Below, call your printTodo with a value of any kind. All it will do is console.log it,
// but soon we'll do more with it!
const todo2 = function(num){
    console.log(toDoList[num])
}

// Now write a function that prints everything on our todo list, INDIVIDUALLY.
// Make SURE to use the above printTodo function!
const todoListFunc = function(){
    for (const item of toDoList){
        console.log(item)
    }
}

//Now test it out by calling your print-everything function. It should print out each item from your todo list array.


// Now please write a function that adds an item to our todo list.
// Could add it anywhere! We'll talk about where it should be added eventually.
const addList = function(newValue){
    toDoList.push(newValue)
}

// Test the above function by calling it with a value,
// then calling your print-everything function and making sure it's in there.


// Now write a function that removes an item at a given index from our todo list.
const removeList = function(num){
    toDoList.splice(1,num)
}

// Test the above function by passing it an index, then calling our print-everything
// function to see if the correct thing was removed.


// Lastly: write a function that clears all items from our array.
const emptyList = function(){
    toDoList = []
}

// Test it by calling it and then calling your print-everything function.
// Nothing should print because the array should be empty now!
