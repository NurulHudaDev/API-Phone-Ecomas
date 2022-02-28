const searchButton = () =>{
    const searchText = document.getElementById('seach-input').value;

        fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
        .then(res => res.json())
        .then(data => phoneDisply(data))  
}

const phoneDisply = (phones) =>{
    console.log(phones.data[0])
    const mein = document.getElementById('mein');
    const div = document.createElement('div');
    div.innerHTML = `
         <div class="card" style="width: 18rem;">
                <img src="${phones.data[0].image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Phone Name: ${phones.data[0].phone_name}</h5>
                  <p class="card-text">Bernd: ${phones.data[0].brand}</p>
                  <button type="button" class="btn btn-primary">Details</button>
                </div>
        </div>
    `
    mein.appendChild(div);
}
