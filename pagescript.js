//select overlay , popupbox , button
var popupoverlay=document.querySelector(".overlay")
var popupbox=document.querySelector(".popupbox")
var addbtn=document.getElementById("add-popupbox")
addbtn.addEventListener("click", function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})
var cancelpopup=document.getElementById("cancel-popup")
cancelpopup.addEventListener("click", function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})
//select box, add book, book-title-input, book-author-input, book-description-input.

var box=document.querySelector(".box")
var addbook=document.getElementById("addbook")
var title=document.getElementById("book-title-input")
var author=document.getElementById("book-author-input")
var description=document.getElementById("book-description-input")
addbook.addEventListener("click", function(event){
 event.preventDefault()
 var div=document.createElement("div")
 div.setAttribute("class","page-box")
 div.innerHTML=`<h2 style="font-family: Verdana, Geneva, Tahoma, sans-serif;">${title.value}</h2>
    <h5>${author.value}</h5>
    <p>${description.value}</p>
<button onclick="deletepage(event)">Delete</button>`
box.append(div)
popupoverlay.style.display="none"
popupbox.style.display="none"

})


function deletepage(event){
    event.target.parentElement.remove()
}