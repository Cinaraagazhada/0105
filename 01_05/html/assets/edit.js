import {
    PutByCategories,
    getByCategories
}
    from "./httprequest.js";


let inputEditDesc = document.querySelector("#ChangeNameInput");
let inputEditName = document.querySelector("#ChangeDescInput");
let editBtn = document.querySelector("#editBtn");
let row = document.querySelector(".row");
let tittle;
let bodyy;
let id;

getByCategories().then(data => {
    data.forEach(element => {
        tittle = element.name;
        bodyy = element.description;
        id = element.id



        row.innerHTML += `<div class="col-4 mb-4" style = "height: 420px display ="none">
        <div class="card" style="width: 20rem;">
            <img src="https://th.bing.com/th/id/R.9106fd921b713b1c04ae897e2a11b2b2?rik=Xzc0%2bFe%2f1Vmgzg&pid=ImgRaw&r=0" class="card-img-top" alt="...">
            <div class="card-body">
              <h4 data-tittle = "${tittle}" class="card-title"><a href="./details.html" style="text-decoration: none;">${tittle}</a></h4>
              <p data-desc = "${bodyy}" class="card-text">${bodyy}</p>
              <div class="buttons " style="display: flex; justify-content: space-around;">
                <button class="btn btn-danger ms-3"   data-id="${id}">Delete</button>
                <button class="btn btn-primary ms-3" data-id="${id}" ><a href="edit.html"class="edit" >Edit</a></button>
            </div>
            </div>
          </div> 
       </div> `
       let edit_name = element.name;
       let edit_desc = element.description
       
        inputEditName.value = edit_name;
        inputEditDesc.value = edit_desc
        console.log(edit_name);
        console.log(edit_desc);
       Array.from(row.children).forEach(element => {
        



       })
    })
})


editBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const products = {
        name: inputEditName.value,
        description: inputEditDesc.value,
    };
    console.log(id, products);
    PutByCategories(id, products)
})