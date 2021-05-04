let contentArray = [5,6,7,'hello','javascript'];
let numArry = [];
let stringArr = [];
let unknownArr = [];
let numCounter = 0;
let stringCounter = 0;
let UNKCounter = 0;
function switcher(function1 , function2) {
    contentArray.forEach(item =>{
            if ( typeof item === 'number') {
                numArry.push(item);
                numCounter++;
            } else if ( typeof item === 'string') {
                 stringArr.push(item);
                 stringCounter++;
                } else {
                 unknownArr.push(item);
                 UNKCounter++;
                }
            });
    function1(function2 , numCounter ,stringCounter ,UNKCounter);
}
function counterPrinter(checker , count1 = 0, count2 = 0, count3 = 0) {
    console.log(count1 +'\n'+count2+'\n'+count3);
    checker(count1 ,count2,count3);
}
function counterChecker(count1, count2, count3) {
    if (count1 == numArry.length && count2 == stringArr.length && count3== unknownArr.length )  {
        console.log('Yes');
    } else {
        console.log('No');
    }
}
switcher(counterPrinter, counterChecker);
