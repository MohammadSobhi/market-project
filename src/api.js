export async function login(credentials){
    try {
        const response = await fetch('http://127.0.0.1:8000/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `username=${loginFormData.username}&password=${loginFormData.password}` })
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error)
    }
}


export async function getAllUsers(){
    try {
        const response = await fetch('http://127.0.0.1:8000/getAll', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }

}


export async function createProduct(){
    try {
        const response = await fetch('http://127.0.0.1:8000/product/', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImV4cCI6MTcxODI4NTk2M30.pR2WMu4AnVWY4m4CI3F1BP-r3xZSH5eyfGSQe0Q_GKw`
            },
            body : JSON.stringify(
                {
                    "title": "botato",
                    "photo": "string",
                    "price": 0,
                    "description": "string",
                    "amount": 0,
                    "category": "string",
                    "tags": "string"
                  }
            )    })
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }

}



export async function getProducts(page){
    try {
        const response = await fetch(`http://127.0.0.1:8000/product/?page=${page}&limit=10`, {
            method: 'GET',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
            } })
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }

}



export async function getProductInfo(id){
    try {
        const response = await fetch(`http://127.0.0.1:8000/product/${id}`, {
            method: 'GET',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
            } })
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }

}


export async function updateProductInfo(){
    try {
        const response = await fetch('http://127.0.0.1:8000/product/4', {
            method: 'PUT',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImV4cCI6MTcxODI4NTk2M30.pR2WMu4AnVWY4m4CI3F1BP-r3xZSH5eyfGSQe0Q_GKw`
            } ,
            body : JSON.stringify(
                {
                    "title": "string",
                    "photo": "string",
                    "price": 50,
                    "description": "string",
                    "amount": 0,
                    "category": "string",
                    "tags": "string"
                }
            )
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }

}


export async function deleteProduct(){ 
    try {
        const response = await fetch('http://127.0.0.1:8000/product/4', {
            method: 'DELETE',
            headers: {
                'accept': 'application/json',
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImV4cCI6MTcxODI4NTk2M30.pR2WMu4AnVWY4m4CI3F1BP-r3xZSH5eyfGSQe0Q_GKw`
            }
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }

}




export async function rateProduct(){ /// idk why not working 
    try {
        const response = await fetch('http://127.0.0.1:8000/product/rateProduct/4?number_stars=3', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImV4cCI6MTcxODI4NTk2M30.pR2WMu4AnVWY4m4CI3F1BP-r3xZSH5eyfGSQe0Q_GKw`
            }
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }

}





export async function getMyProfile(){
    try {
        const response = await fetch('http://127.0.0.1:8000/profile/myprofile', {
            method: 'GET',
            headers: {
                'accept': 'application/json',
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImV4cCI6MTcxODI4NTk2M30.pR2WMu4AnVWY4m4CI3F1BP-r3xZSH5eyfGSQe0Q_GKw`
            }
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }

}


export async function editMyProfile(){
    try {
        const response = await fetch('http://127.0.0.1:8000/profile/editmyprofile', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json',
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImV4cCI6MTcxODI4NTk2M30.pR2WMu4AnVWY4m4CI3F1BP-r3xZSH5eyfGSQe0Q_GKw`
            },
            body: JSON.stringify({
                "username": "string54",
                "email": "user@example.com",
                "password": "string",
                "first_name": "stringo",
                "last_name": "string",
                "photo": "string",
                "address": "string",
                "role": 0
        }) 
        })
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error)
    }
}


export async function deleteMyProfile(){///idk why not working 
    try {
        const response = await fetch('http://127.0.0.1:8000/profile/deleteuser', {
            method: 'DELETE',
            headers: {
                'accept': 'application/json',
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImV4cCI6MTcxODI4NTk2M30.pR2WMu4AnVWY4m4CI3F1BP-r3xZSH5eyfGSQe0Q_GKw`
            }
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }

}


export async function getMyCart(){
    try {
        const response = await fetch('http://127.0.0.1:8000/cart/getCart', {
            method: 'GET',
            headers: {
                'accept': 'application/json',
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImV4cCI6MTcxODI4NTk2M30.pR2WMu4AnVWY4m4CI3F1BP-r3xZSH5eyfGSQe0Q_GKw`
            }
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }

}


export async function addToCart(){
    try {
        const response = await fetch('http://127.0.0.1:8000/cart/addProducttToCart/4/3', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImV4cCI6MTcxODI4NTk2M30.pR2WMu4AnVWY4m4CI3F1BP-r3xZSH5eyfGSQe0Q_GKw`
            }
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }

}