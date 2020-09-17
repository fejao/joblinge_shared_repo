
// $(document).ready( function() {
//     $("#load_london").on("click", function() {
//         $(".article").load("london.html");
//     });
// });

// function load_home() {
//     document.getElementById("content").innerHTML='<object type="text/html" data="home.html" ></object>';
// }

function show_london(){
    document.getElementById('foo').innerHTML = "<object  data=\"london.html\"></object>" ;
    // document.getElementsByClassName('article').innerHTML = "<object  data=\"london.html\"></object>" ;
}

function show_paris(){
    document.getElementById('foo').innerHTML = "<object  data=\"paris.html\"></object>" ;
    // document.getElementsByClassName('article').innerHTML = "<object  data=\"london.html\"></object>" ;
}