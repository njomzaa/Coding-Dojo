
//1.Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.

function array(){

var newArray=[];

for(var i=1;i<=255;i++){
    newArray.push(i);
}

return newArray;

}

x=array();
console.log(x);

//2.Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.

function even(){

    var sum=0;
    for (var i=1;i<=1000;i++){
        if(i%2===0){
            sum = sum + i;
        }

        }

        return sum;
}


x=even();
console.log(x);

//3.Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).

function odd(){
    var sum = 0;

    for (var i=1; i<=5000; i++){
        if(i%2===1){
        sum += i;
        }
    }

    return sum;
}

console.log(odd());

//4.Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).

function sumArray(x){
    var sum = 0;
    for (var i = 0;i<x.length;i++){
        sum = sum + x[i];
    }

    return sum;
}


console.log(sumArray([-5,2,5,12]));


//5.Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)

function findMax(arr){

    var max = arr[0];

    for (var i=0; i=arr.length; i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return arr[i];

}

console.log(findMax([-3,3,5,7]));

//6.Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)

function average (arr){
    var sum = 0;
    for (var i= 0;i<arr.length;i++){

        sum = sum + arr[i];

    }

    return sum/arr.length
}

console.log(average([1,3,5,7,20]));

//7.Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.

function oddNumbers(){
    var newArray=[];
    for (var i=1;i<50;i++){
        if(i%2===1){
          newArray.push(i);
        }
    }
          return newArray;
}

console.log(oddNumbers()); 

//8.Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).

function greater (arr,y) {

    var count=0;

    for (var i=0; i<arr.length; i++){

        if(arr[i]>y){
            count++;
        }
    }

    return count;

}


console.log(greater([1, 3, 5, 7],3));

//9.Squares - Given an array with multiple values, write a function that replaces each value in the array with the product of the original value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])

function production (arr){

    var newArray =[];
    for (var i=0;i<arr.length;i++){
        newArray.push(arr[i]*arr[i]);
    }

    return newArray;
}

console.log(production([1,5,10,-2]));


//10.Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])


function negativeNumbers (arr){
    for (var i=0; i<arr.length; i++){
         if(arr[i]<0){
           arr[i]=0;
         }
        }

        return arr;
}


y = negativeNumbers ([1,5,10,-2]);
console.log(y);

//11.Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])

function minMaxAvg (arr){
    var max = arr[0];
    var min = arr[0];
    var sum = arr[0];
    for (var i=1;i<arr.length;i++){
        sum= sum + arr[i];

        //find maximum
        if(arr[i]>max){
             max=arr[i];
        }
       //find minimum
        else if (arr[i]<min){
            min=arr[i];
        }
        

    }
     console.log("Max: "+ max+ " Min: " + min + " Avg: " + sum/arr.length);

}

minMaxAvg([1,5,10,-2]);

//12.Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).

function swap (arr){
    //for (var i=0;i<arr.length;i++){
        [arr[0], arr[arr.length-1]] = [arr[arr.length-1], arr[0]];
        
        

    //}

  return arr;
}

console.log(swap([1,5,10,-2]));


//13.Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].

function numbstring(arr){

    for (i=0;i<arr.length;i++){
        if(arr[i]<0){
            arr[i]="Dojo"
        }
    }

    return arr;

}

console.log(numbstring([-1,-3,2]));