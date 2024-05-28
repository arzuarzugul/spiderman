const arrows = document.querySelectorAll(".arrow");
const movieList = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
    let clickCounter =0;
    const imageItem =movieList[i].querySelectorAll("img").length;
   
    
        arrow.addEventListener("click", function () {
           
            clickCounter++;
         if(imageItem-(4+clickCounter)>=0{ 
            movieLists[i].style.transform = ´translateX(${movieList[i].computedStyleMap().get
            ("transform")[0].x.value-300}px)´;
        
    }else{
        movieLists[i].style.transform = ´translateX;
    }
});
 
});
/*dark mode*/
const ball = document.querySelector(".toggle-ball")
ball.addEventListener("click",function(){
    console.log("click");
})
