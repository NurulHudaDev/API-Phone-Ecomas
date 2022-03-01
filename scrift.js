const searchButton = () =>{
    const input = document.getElementById('seach-input');
    const searchText = input.value;
    const error = document.getElementById('error');
    if(searchText == ''){
        error.innerText = 'please type text';
        mein.innerText = '';
        
    }
    else if(searchText <= 0){
        error.innerText = 'please type text';
        input.value = '';
        mein.innerText = '';
    }
    else{
        fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
        .then(res => res.json())
        .then(data => phoneDisply(data.data.slice(0, 20))) 
        input.value = '';
        error.innerText = '';
        mein.innerText = '';
    }
        
}

const phoneDisply = (phones) =>{
    // console.log(phones.data[0])
    const mein = document.getElementById('mein');
    phones.forEach(phone => {
        const div = document.createElement('div');
        div.classList.add('col-lg-4');
        div.classList.add('g-5');
        div.innerHTML = `
            <div class="card" style="width: 18rem;">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">Phone Name: ${phone.phone_name}</h5>
            <p class="card-text">Bernd: ${phone.brand}</p>
            <button onclick="detailsButton('${phone.slug}')" type="button" class="btn btn-primary">Details</button>
            </div>
            </div>
    `
    mein.appendChild(div);
    })
    
}

const detailsButton = (id) =>{
    fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    .then(res => res.json())
    .then(data => detailsDisply(data.data))
    details.innerHTML = ''

}

const detailsDisply = (info) =>{
    const details = document.getElementById('details');
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card" style="width: 18rem;">
    <img src="${info.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title"></h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
    `
    details.appendChild(div);
}
