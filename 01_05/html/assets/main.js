import {
    getByCategories,
    deleteCategories,
    PutByCategories,
}
    from "./httprequest.js";


let row = document.querySelector(".row");
let tittle;
let bodyy;
let id;
let deleteBtn;
let editBtn;
let search = document.querySelector("#search")
// let input = document.querySelector("inputt")



getByCategories().then(data => {
    data.forEach(element => {
        tittle = element.name;
        bodyy = element.description;
        id = element.id



        row.innerHTML += `<div class="col-4 mb-4" style = "height: 420px">
        <div class="card" style="width: 15rem;">
    <img src="https://metbuat.az/images/metbuat/images_p/1415374.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h4 data-tittle = "${tittle}" class="card-title"><a href="./details.html" style="text-decoration: none;">${tittle}</a></h4>
              <p data-desc = "${bodyy}" class="card-text">${bodyy}</p>
              <div class="buttons " style="display: flex; justify-content: space-around;">
                <button class="btn btn-danger ms-2"   data-id="${id}">Delete</button>
                <button class="btn btn-primary ms-2" data-id="${id}" ><a href="edit.html"class="edit" >Edit</a></button>
            </div>
            </div>
          </div> 
       </div> `
    });


    let mytitle;





    //delete 
    Array.from(row.children).forEach(element => {
        deleteBtn = element.children[0].children[1].children[2].children[0];
        mytitle = element.children[0].children[1].children[0].children[0];
        editBtn = element.children[0].children[1].children[2].children[1];
        // let a = element.children[0].children[1].children[2].children[2];


        // a.addEventListener("click", () => {
        //     let edit_name = element.children[0].children[1].children[0].getAttribute("data-tittle");
        //     let edit_desc = element.children[0].children[1].children[1].getAttribute("data-desc");
        //     console.log(element);
        //     console.log(edit_name);
        //     console.log(edit_desc);
        // })


        mytitle.addEventListener("click", () => {
            console.log(data);

            localStorage.setItem("currentUser", JSON.stringify(data))
        })

        deleteBtn.addEventListener("click", (e) => {
            let idd = e.target.getAttribute("data-id");
            // console.log(e.target);
            deleteCategories(idd);


            // delete UI
            e.target.parentElement.parentElement.parentElement.remove();
        })
    });

    // put





});
let API_URL = "https://northwind.vercel.app/api/categories";

search.addEventListener("keyup", (e) => {
    fetch(API_URL)
        .then(res => res.json())
        .then(data => {
            row.innerHTML = "";
            let filteredData = data.filter((user) => user.description.trim().toLowerCase().includes(e.target.value.trim().toLowerCase()))
            filteredData.forEach((user) => {
                row.innerHTML += ` <div class="col-4 mb-5" style = "height: 420px">
            <div class="card" style="width: 18rem;">
                <img src="https://th.bing.com/th/id/R.9106fd921b713b1c04ae897e2a11b2b2?rik=Xzc0%2bFe%2f1Vmgzg&pid=ImgRaw&r=0" class="card-img-top" alt="...">
                <div class="card-body">
                  <h4 class="card-title">${user.name}</h4>
                  <p class="card-text">${user.description}</p>
                  <div class="buttons " style="display: flex; justify-content: space-around;">
                    <button class="btn btn-danger ms-2"   data-id="${user.id}">Delete</button>
                    <button class="btn btn-primary ms-2"><a href="edit.html"class="edit" >Edit</a></button>
                </div>
                </div>
              </div> 
           </div> `

            })
        })
})
