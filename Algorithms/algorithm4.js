
//1.Given an array and a value Y, count and print the number of array values greater than Y.
function greater (arr,Y){
    var count=0;
    for (var i=0; i<arr.length;i++){
        
        if(arr[i]>Y){
          
            count++;
            console.log("Value greater than Y is: " + arr[i]);
        }
     }
     return count + " values of an array are greater than Y";
}
 
x = greater([2,5,4,8,10],5);
console.log(x);

//2.Given an array, print the max, min and average values for that array.

function min_avg_max (arr){
  var max = arr[0];
  var min = arr[0];
  var sum=arr[0];

    for (var i=1; i<arr.length; i++){
        if (max<arr[i]){
            max=arr[i];
        }

        if (min>arr[i]){
            min=arr[i]
    
        }
        sum= sum + arr[i];
    }
    var avg = sum/arr.length;
    var arrnew = [max,min,avg];
    return arrnew;
    
}


y=min_avg_max([2,5,4,8,10]);
console.log(y);



//3.Given an array of numbers, create a function that returns a new array where negative values were replaced with the string ‘Dojo’.  
//For example, replaceNegatives( [1,2,-3,-5,5]) should return [1,2, "Dojo", "Dojo", 5].
function neg_replaces(x){

    for (var i=0; i<x.length; i++){
     
     if (x[i] < 0) {
         x[i] = "Dojo";
     }
   
    }
return x;

}

console.log (neg_replaces([1,2,-3,-5,5]));

/*4. Given array, and indices start and end, remove values in that index range, working in-place
 (hence shortening the array).  For example, removeVals([20,30,40,50,60,70],2,4) should return [20,30,70].*/

 function removals(arr,x,y){

    for (var i=0; i<arr.length; i++){


        if ( i === x || i === y) {
         arr.splice(i,1);
        
        }
     
  
    }

    return arr;
 }

z = removals([20,30,40,50,60,70],2,4);

console.log(z);
