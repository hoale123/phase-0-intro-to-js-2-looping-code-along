function writeCards(array, event) {
    const newArray = [];
    for(let i = 0; i < array.length; i++){
        newArray.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
    }
    return newArray;
}
function countDown(num) {
    // let i = num;
    while (num >= 0) {
        console.log(num--)
    }
}