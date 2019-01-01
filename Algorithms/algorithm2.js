// this is part 2 of the assignment. Copy/paste the starter code from the platform like seen below 
//and edit the code to make it work.

//Challenge 1. Print 1 to x
function printUpTo(x){
    // your code here

    for(var i=1; i<=x; i++){
      if(x>0){
        console.log(i);

      }
      
      else{
        console.log("negative number")
        return false;
      }
         
    }
  }
printUpTo(1000); // should print all the integers from 1 to 1000
y = printUpTo(-10); // should return false
console.log(y); // should print false


//Challenge 2. PrintSum
function printSum(x){
    var sum = 0;
    //your code here

    for(var i=0; i<=x; i++){
        sum= sum + i;
        console.log(i);
    }
    return sum
  }
y = printSum(255) // should print all the integers from 0 to 255 and with each integer print the sum so far.
console.log(y) // should print 32640
  
//Challenge 3. PrintSumArray

function printSumArray(x){
    var sum = 0;
    for(var i=0; i<x.length; i++) {
      //your code here
      sum = sum + x[i];
    }
    return sum;
  }
  console.log( printSumArray([1,2,3]) ); // should log 6
  
 //Challenge 4. Create a function that returns the largest element in a given array.  For example largestElement( [1,30,5,7] ) should return 30.
 
function maxNumber (x){
    var max = x[0];
    for(var i=0; i<x.length;i++){
       
        if(max< x[i]){
        
            max = x[i];

        }

    }

    return max;

}

maxNumber([1,30,5,7]);

 