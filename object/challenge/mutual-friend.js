function setup (arr){
    let friends = {};
    //Write your code here
    const newArr = arr.slice();
    for (let i=0; i<newArr.length; i++) {
        friends = newArr[i];
    }
    return friends;
}

// input array
arr = [
    ['A' , 'B'],
    ['A' , 'C'],
    ['A' , 'D'],
    ['B' , 'D'],
];

friends = setup(arr);
console.log(friends);
