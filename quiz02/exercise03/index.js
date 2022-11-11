const photos = [
    { image_url: 'images/poppies.jpg', is_favorite: true },
    { image_url: 'images/dogwoods.jpg', is_favorite: true },
    { image_url: 'images/blossom.jpg', is_favorite: false },
    { image_url: 'images/field3.jpg', is_favorite: false },
    { image_url: 'images/field4.jpg', is_favorite: false },
    { image_url: 'images/branch.jpg', is_favorite: true },
    { image_url: 'images/red.jpg', is_favorite: true },
    { image_url: 'images/purple2.jpg', is_favorite: false },
    { image_url: 'images/field1.jpg', is_favorite: false },
    { image_url: 'images/purple.jpg', is_favorite: true },
    { image_url: 'images/jar.jpg', is_favorite: true },
    { image_url: 'images/green.jpg', is_favorite: false },
    { image_url: 'images/green1.jpg', is_favorite: true },
    { image_url: 'images/purple1.jpg', is_favorite: false },
    { image_url: 'images/magnolias.jpg', is_favorite: false },
    { image_url: 'images/daisy1.jpg', is_favorite: true }
];

    const template = `
        <div class="images">
            <img src="images/poppies.jpg">

            <img src="images/dogwoods.jpg">

            <img src="images/branch.jpg">

            <img src="images/red.jpg">
        </div>
        
        <div>

            <img src="images/purple.jpg">

            <img src="images/jar.jpg">

            <img src="images/green1.jpg">

            <img src="images/daisy1.jpg">
    </div>
    `;

    document.querySelector(".images").innerHTML = template;
    

// write a program, using any kind of loop you want, 
// that draws all of the pictures to the screen 
// where the is_favorite property is set to true. 
// 8 photos should be displayed.