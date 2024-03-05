//Given an array of N integers, and an integer K, find the number of pairs of elements in the array whose sum is equal to K.

class Solution {
    getPairsCount(arr,n,k){
       var valMap = new Map();
       var combo = 0
       for(let i = 0; i<n;i++){
           if(valMap.has(arr[i])){
               valMap.set(arr[i], valMap.get(arr[i])+1)
           }else{
               valMap.set(arr[i], 1)
           }
       }
       for(let i = 0; i<n;i++){
           let needed = k - arr[i];
           valMap.set(arr[i], valMap.get(arr[i])-1)
           let temp = valMap.get(needed);
           if(temp != undefined){
           combo = combo + temp;
           }
       }
       return combo;
    }
}

class Solution {
    getPairsCount(arr,n,k){
       var valMap = new Map();
       var combo = 0
       for(let i = 0; i<n;i++){
           if(valMap.has(arr[i])){
               valMap.set(arr[i], valMap.get(arr[i])+1)
           }else{
               valMap.set(arr[i], 1)
           }
       }
       for(let i = 0; i<n;i++){
           let needed = k - arr[i];
           valMap.set(arr[i], valMap.get(arr[i])-1)
           let temp = valMap.get(needed);
           if(temp != undefined){
           combo = combo + temp;
           }
       }
       return combo;
    }
}