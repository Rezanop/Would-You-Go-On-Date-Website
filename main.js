document.addEventListener("DOMContentLoaded", () => {
    // select no button
    var noButton = document.getElementById("noButton");

    // add the random number to the x and y of the button
    // the total should not go over the width or the height
    var runAway = function(event) {
        var container = document.getElementById("container")
        var positionInfo = container.getBoundingClientRect();
        var containerHeight = positionInfo.height - 300;
        var containerWidth = positionInfo.width - 300;

        console.log("Width: ", containerWidth)
        console.log("Height: ", containerHeight)
        var buttonX = event.clientX
        var buttonY = event.clientY
        var randomNumberX = Math.random() * 100;
        var randomForNegativeX = Math.random();
        var randomNumberY = Math.random() * 100;
        var randomForNegativeY = Math.random();

        if(randomForNegativeX >= 0.5) {
            randomNumberX = randomNumberX * -1;
        }

        var newButtonX = buttonX + randomNumberX;
        if(newButtonX > containerWidth) {
            newButtonX = containerWidth
        }
        if(newButtonX <0) {
            newButtonX = 0;
        }

        if(randomForNegativeY >= 0.5) {
            randomNumberY = randomNumberY * -1;
        }
       
        var newButtonY = buttonY + randomNumberY;
        if(newButtonY > containerHeight) {
            newButtonY = containerHeight
        }

        if(newButtonY <0) {
            newButtonY = 0;
        }


        noButton.style.left = newButtonX + "px";
        noButton.style.top = newButtonY + "px";

        console.log("screen width: ", window.innerWidth)
        console.log("screen height: ", window.innerHeight)


        console.log("X: ", newButtonX)
        console.log("Y: ", newButtonY)
    }
    

    // add eventlistener to the button - mouseover
    noButton?.addEventListener("mouseover", runAway)
    noButton?.addEventListener("mousedown", runAway)
    noButton?.addEventListener("mousemove", runAway)


    
  });

