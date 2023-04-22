// Replace any negative array values with 'Dojo'
function swapString(arr){

var swap = 'Dojo'

    for (var i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            arr[i] = swap;
        }
    }
    return arr;
}