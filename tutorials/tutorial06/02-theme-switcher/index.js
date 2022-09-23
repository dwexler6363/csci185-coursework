const defaultTheme = ev => {
    // your code here.
    console.log("default theme function trigger");
    // what do i want to target?
            //body tag
                // i want to chaange the body tag by targeting its class
   document.querySelector("body").className = "default";           
};

const oceanTheme = ev => {
   // your code here.
   console.log("ocean theme function trigger");
   document.querySelector("body").className = "ocean"; 
};

const desertTheme = ev => {
   // your code here.
   console.log("desert theme function trigger");
   document.querySelector("body").className = "desert"; 
};

const highContrastTheme = ev => {
    // your code here.
    console.log("highContrast theme function trigger");
    document.querySelector("body").className = "high-contrast";
}; 

/*
    Hints: 
    1. Attach the event handlers (functions) above to the click event
       of each of the four buttons (#default, #ocean, #desert, 
        and #high-contrast) in index.html.
    2. Then, modify the  body of each function so that it
       sets the className property of the body tag based on 
       the button that was clicked.
*/