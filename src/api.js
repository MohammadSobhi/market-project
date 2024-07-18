import { getAccessToken, setAccessToken, removeAccessToken } from "./components/AuthRequired";

export async function checkIfAdmin(token){
    try {
        const response = await fetch('http://127.0.0.1:8000/profile/checkadmin', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }

}

export async function login(credentials){
    try {
        const response = await fetch('http://127.0.0.1:8000/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `username=${credentials.username}&password=${credentials.password}` })
        const data = await response.json();
        return data
        console.log(data);
    } catch (error) {
        console.log(error)
    }
}



export async function signup(credentials){
    try {
        const response = await fetch('http://127.0.0.1:8000/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(
                credentials,               
            )})        
        const data = await response.json();
        return data
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


export async function createProduct(token,productData){
    try {
        const response = await fetch('http://127.0.0.1:8000/product/', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body : JSON.stringify(
                productData
            ) 
           })
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


export async function updateProductInfo(token,id,body){
    try {
        const response = await fetch(`http://127.0.0.1:8000/product/${id}`, {
            method: 'PUT',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            } ,
            body : JSON.stringify(
                body
            )
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }

}


export async function deleteProduct(token,id){ 
    try {
        const response = await fetch(`http://127.0.0.1:8000/product/${id}`, {
            method: 'DELETE',
            headers: {
                'accept': 'application/json',
                'Authorization': `Bearer ${token}`
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





export async function getMyProfile(token){
    try {
        const response = await fetch('http://127.0.0.1:8000/profile/myprofile', {
            method: 'GET',
            headers: {
                'accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }

}


export async function editMyProfile(token, body){
    try {
        const response = await fetch('http://127.0.0.1:8000/profile/editmyprofile', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(body) 
        })
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error)
    }
}


export async function deleteMyProfile(token){///idk why not working 
    try {
        const response = await fetch('http://127.0.0.1:8000/profile/deleteuser', {
            method: 'DELETE',
            headers: {
                'accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }

}


export async function getMyCart(token){
    try {
        const response = await fetch('http://127.0.0.1:8000/cart/getCart', {
            method: 'GET',
            headers: {
                'accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }

}


export async function addToCart(productId,amount,token){
    try {
        const response = await fetch(`http://127.0.0.1:8000/cart/addProducttToCart/${productId}/${amount}`, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }

}