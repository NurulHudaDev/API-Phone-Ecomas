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
            <div class="card-body">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <h5 class="card-title mt-4">Phone Name: ${phone.phone_name}</h5>
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
    console.log(info);
    const details = document.getElementById('details');
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card" style="width: 20rem;">
    <div class="card-body">
    <img src="${info.image}" class="card-img-top" alt="...">
    <div class="mt-4">
    <p><span class="fw-bold">Brand: </span>${info.brand}</p>
    <p><span class="fw-bold">name: </span>${info.name}</p>
    <p><span class="fw-bold">storage: </span>${info.mainFeatures.storage}</p>
    <p><span class="fw-bold">chipSet: </span>${info.mainFeatures.chipSet}</p>
    <p><span class="fw-bold">displaySize: </span>${info.mainFeatures.displaySize}</p>
    <p><span class="fw-bold">memory: </span>${info.mainFeatures.memory}</p>
    <p><span class="fw-bold">sensors: </span>${info.mainFeatures.sensors}</p>
    <p class="fw-bold">others</p>
   <div>
      <p><span class="fw-bold">Bluetooth: </span>${info.others.Bluetooth}</p>
      <p><span class="fw-bold">GPS: </span>${info.others.GPS}</p>
      <p><span class="fw-bold">NFC: </span>${info.others.NFC}</p>
      <p><span class="fw-bold">Radio: </span>${info.others.Radio}</p>
      <p><span class="fw-bold">USB: </span>${info.others.USB}</p>
      <p><span class="fw-bold">WLAN: </span>${info.others.WLAN}</p>
      <p><span class="fw-bold">releaseDate: </span>${info.others.releaseDate}</p>
      <p><span class="fw-bold">slug: </span>${info.others.slug}</p>
   </div>
  </div>
    </div>
  </div>
    `
    details.appendChild(div);
}
