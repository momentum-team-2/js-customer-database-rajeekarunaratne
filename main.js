let flexContainerElem = document.querySelector('.flex-container')
for (let customer of customers){
    let customerName =  customer["name"]["first"] + ' ' + customer["name"]["last"]
    let customerAddress = customer["location"]["street"] + ' ' + customer["location"]["city"] + ' ' + customer["location"]["state"] + ' ' + customer["location"]["postcode"]
    let customerEmail = customer["email"]
    let customerDOB = customer["DOB"]  
    let emailElem = document.createElement("p")
    let nameElem = document.createElement("h3")
    let cardElem = document.createElement("div")
    let addressElem = document.createElement("p")
    let dobElem = document.createElement("p")
    cardElem.innerHTML = cardElem.innerHTML + createImageElement(customer.picture.medium)
    nameElem.innerHTML = customerName;
    emailElem.innerHTML = customerEmail
    addressElem.innerHTML = customerAddress
    dobElem.innerHTML = customerDOB
    cardElem.classList.add('card-bordered')
    cardElem.appendChild(nameElem)
    cardElem.appendChild(emailElem)
    cardElem.appendChild(addressElem)
    cardElem.appendChild(dobElem)
    flexContainerElem.appendChild(cardElem);
}

function createImageElement (url) {
    return `<img src=${url}>`
}

