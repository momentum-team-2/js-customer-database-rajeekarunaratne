let flexContainerElem = document.querySelector('.flex-container')
for (let customer of customers){
    let customerName =  customer["name"]["first"] + ' ' + customer["name"]["last"]
    let customerAddress = customer["location"]["street"] + ' ' + customer["location"]["city"] + ' ' + customer["location"]["state"] + ' ' + customer["location"]["postcode"]
    let customerEmail = customer["email"]
    let customerDOB = customer["DOB: " + moment(customer.dob).format("MMM D, YYYY")] 
    let customerSince = customer["Customer since: " + moment(customer.registered).format("MMM D, YYYY")] 
    let emailElem = document.createElement("p")
    let nameElem = document.createElement("h3")
    let cardElem = document.createElement("div")
    let addressElem = document.createElement("p")
    let dobElem = document.createElement("p")
    let sinceElem = document.createElement("p")
    cardElem.innerHTML = cardElem.innerHTML + createImageElement(customer.picture.medium)
    nameElem.innerHTML = customerName;
    emailElem.innerHTML = customerEmail
    addressElem.innerHTML = customerAddress
    dobElem.innerHTML = customerDOB
    sinceElem.innerHTML = customerSince
    cardElem.classList.add('card-bordered')
    cardElem.appendChild(nameElem)
    cardElem.appendChild(emailElem)
    cardElem.appendChild(addressElem)
    cardElem.appendChild(dobElem)
    cardElem.appendChild(sinceElem)
    flexContainerElem.appendChild(cardElem);
}

function createImageElement (url) {
    return `<img src=${url}>`
}

