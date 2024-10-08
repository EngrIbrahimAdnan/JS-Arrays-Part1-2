let groceries = ["bananas", "apples", "kiwis","oranges","watermelon", "pineapple"]

console.log(groceries[1]);
console.log(groceries.length);
console.log(groceries[groceries.length-1]);
console.log(groceries.pop());

//what can I say... I like them fruits
groceries.push("avocado","pitaya")
console.log(groceries);

//assign the first three elements to "firstThreeItems"
firstThreeItems=groceries.slice(0,3);
console.log(firstThreeItems);

//delete third element in array
groceries.splice(2,1);
console.log(groceries);

//Add a new element at start....and yes, Jabuticaba is a fruit
groceries.splice(0,0,"Jabuticaba");
console.log(groceries);

//Replacing first two fruits with "ketchup" and "Chili"
groceries.splice(0,2,"ketchup", "Chili");
console.log(groceries);