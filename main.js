var photoArray = [];
var page = 1;
data();
function data() {
    const myheaders = new Headers();
    // myheaders.append('Authorization', 'Bearer ETnS0SprqU6-h4vaPmVUxO0SJ4bOZGyqO7QU');
    fetch('http://localhost:3000/photos/' + page, {
            method: 'GET',
            headers: myheaders,
        })
        .then(Response => Response.json())
        .then(result => {
            photoArray = photoArray.concat(result);
            addData();
            page++;
            console.log(photoArray);
        });
}
function addData() {
    const doc = photoArray.map((element, index) => {
        return `<img src= ${element.url} data-id= ${index} onclick="overlayPhoto(event)">`;
    });
    document.getElementById('subCont').innerHTML = doc.join('');
    document.getElementById('btn').scrollIntoView({
        behavior: 'smooth'
      });
}
// function overlayPhoto(x) {
//     let overlay = document.getElementById("overlay");
//     document.getElementById("overlay").style.display = "block";
//     let index = x.target.getAttribute('data-id');
//     document.getElementById("photoLay").innerHTML = `<span id="close" onclick="Close()">&times;</span><img src= ${photoArray.url}"><span class="text-block">${photoArray[index].title}</span>`;
//     overlay.scrollIntoView({  behavior: 'smooth'  });
// }
// function Close() {
//     document.getElementById("overlay").style.display = "none";
//     document.getElementById('btn').scrollIntoView({ behavior: 'smooth' });
// }