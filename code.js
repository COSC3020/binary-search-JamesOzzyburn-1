function binarySearch(list, element) {
    if(list.length == 0) return -1; //If the list is empty return -1

    var lowerBound = 0; //Our lower search bound
    var higherBound = list.length - 1; //Our upper search bound
    var middle; //The middle of our search

    while(lowerBound <= higherBound) {
        middle = lowerBound + Math.floor((higherBound - lowerBound) / 2); //Gets us the middle of the array
        
        if(list[middle] === element) return middle //If the list element at position middle is what we are looking for return the middle postition
        
        else if(list[middle] > element) higherBound = middle - 1; //If the list at position middle is greater then the element we need to search left so move our higer bound down one
        
        else lowerBound = middle + 1; //If the list at position middle is less then the element we need to search right so move our lower bound up one
    }
    return -1; //return -1 if the element we are looking for cannot be found
}