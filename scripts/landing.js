var pointsArray = document.getElementsByClassName('point');

var animatePoints = function(points) {

    var revealPoint = function(indexOfPoints) {       
        points[indexOfPoints].style.opacity = 1;
        points[indexOfPoints].style.transform = "scaleX(1) translateY(0)";
        points[indexOfPoints].style.msTransform = "scaleX(1) translateY(0)";
        points[indexOfPoints].style.WebkitTransform = "scaleX(1) translateY(0)";
    }
        for(var i = 0; i < points.length; i++){
            revealPoint(i);
        }
};   

window.onload = function() {
    var sellingPoints = document.getElementsByClassName('selling-points') [0];
    
    window.addEventListener('scroll', function(event) {
        console.log("Current offset from the top is " + sellingPoints.getBoundingClientRect().top + " pixels");
    });
 }