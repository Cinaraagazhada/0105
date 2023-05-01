import {
    PostCategories,
}
    from "./httprequest.js";


    let inputDesc = document.querySelector("#exampleFormControlInput1");
    let inputName = document.querySelector("#exampleFormControlInput2");
    let addBtn = document.querySelector("#addBtn");

    addBtn.addEventListener("click" , (e) =>{
        e.preventDefault();
        const products = {
            name : inputName.value,
            description : inputDesc.value
        };
        //empty input

        inputName.value = "";
        inputDesc.value = "";
        PostCategories(products)
    })