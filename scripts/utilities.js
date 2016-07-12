function forEach(pointsArray, callBackFunction) {
    for(i = 0; i < pointsArray.length; i++){
        callBackFunction(pointsArray[i]);
    }
}