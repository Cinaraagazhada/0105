//get method 
let API_URL = "https://northwind.vercel.app/api/categories";
export async function getByCategories(params) {
    
    
    let global_data;
   await fetch(API_URL).then(response => response.json())
    .then(data => {
        let loading = document.querySelector(".loader");
        loading.style.display = "none";
        global_data = data;
        
        
    })
    return global_data;

}

getByCategories();

// deleteBtn 

export async function deleteCategories(id) {
    let global_data;
    await fetch(`${API_URL}/${id}`,{
        method: 'DELETE',
    })
}


// Post 

export async function PostCategories(params) {
    let global_data;
    await fetch(API_URL , {
        method : "POST",
        headers : {
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify(params)
    
    })
}

// Put 

export async function PutByCategories(id,categories) {
    let global_data;
    await fetch(`${API_URL}/${id}` ,{
        method : "PUT",
        headers: {
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify(categories)
    })
}