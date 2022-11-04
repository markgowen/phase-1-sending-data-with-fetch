// Add your code here
function submitData(userName, email) {
    return fetch(('http://localhost:3000/users'), {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({name: userName, email: email})
         })
    .then((response) => {
        return response.json();
    })
    .then((object) => {
        document.body.innerHTML = object["id"]
    })
    .catch((err) => {
        document.body.innerHTML = err.message
    })

}

submitData()