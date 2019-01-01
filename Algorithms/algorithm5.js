

//1.Return the given array, after setting any negative values to zero.  For example resetNegatives( [1,2,-1, -3]) should return [1,2,0,0].

function resetNegatives (x){
    for (var i=0;i<x.length;i++){
        if (x[i]<0) {
            x[i]=0;

        }
    }

    return x;
}

y=resetNegatives([1,2,-1,-3]);
console.log(y);

//2.Given an array, move all values forward by one index, dropping the first and leaving a ‘0’ value at the end.
//For example moveForward( [1,2,3]) should return [2,3,0].

function forward(arr){
  var arr1=[];
    for(i=0;i<arr.length;i++){
        arr1.push(arr[i]-1);
        
    }
      return arr1;
}

x=forward([1,2,3]);
console.log(x);

//3.Given an array, return an array with values in a reversed order.
  //For example, returnReversed([1,2,3]) should return [3,2,1].

  function reversed(x){
     var newArray = [];
     for(var i=x.length-1;i>=0;i--){
         newArray.push(x[i]);
     }
     return newArray;
  }

  x=reversed([1,2,3])
  console.log(x);

  //4.Create a function that changes a given array to list each original element twice, retaining original order.
  //  Have the function return the new array. 

    function double(arr){
      var newArray = [];
      arr.forEach(
          function(x) {
              newArray.push(x,x);
          }
      );

      return newArray;

  }

  console.log(double([4,"Ulysses", 42, false]));