function isArrayLengthOdd(numbers){
    return numbers.length % 2 !==0;
}

function isArrayLengthEven(numbers) {
    return numbers.length % 2 ===0;
}    

function addLailaToArray(instructors) {
    instructors.push("Laila");
    return instructors;
}

function eliminateTeam(teams) {
    return teams.pop();
}

function secondHalfOfArrayIfItIsEven(fruits) {
    let newArr, midIndex;
    //if it has even number of elements
    arrLength = fruits.length;
    if (arrLength % 2 === 0){
        midIndex=arrLength/2;

        return newArr = fruits.slice(midIndex,arrLength);
    }
    else{
        return newArr=[];
    }
}


function youGottaCalmDown(shout) {
    if (shout.indexOf('!')!==-1){
        return shout.slice(0,shout.indexOf('!'))+'!';
    }else{
        return shout;
    }
}

//Them fruits....they return
arr = ["bananas", "apples", "kiwis","oranges","watermelon", "pineapple","avocado"];

//console.log(isArrayLengthOdd(arr));
//console.log(isArrayLengthEven(arr));
//console.log(addLailaToArray(arr));
//console.log(eliminateTeam(arr));
//console.log(secondHalfOfArrayIfItIsEven(arr));
//console.log(youGottaCalmDown("Ibrahim!!!!!!!!"));