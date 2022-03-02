const searchButton = () =>{
    // search input
    const input = document.getElementById('seach-input');
    const searchText = input.value;
    const error = document.getElementById('error');
    // error
    if(searchText == ''){
        error.innerText = 'please type text';
        mein.innerText = '';
        details.innerText = '';
        
    }
    else{
        fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
        .then(res => res.json())
        .then(data => phoneDisply(data.data.slice(0, 20))) 
        input.value = '';
        error.innerText = '';
        mein.innerText = '';
        details.innerText = '';
    }
        
}
// main card
const phoneDisply = (phones) =>{
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
    // error
    if(phones == 0){
        error.innerText = 'Result not found'; 
    }
    
}
// details
const detailsButton = (id) =>{
    fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    .then(res => res.json())
    .then(data => detailsDisply(data.data))
    details.innerHTML = ''
}
// details card
const detailsDisply = (info) =>{
    console.log(info);
    const details = document.getElementById('details');
    const div = document.createElement('div');
    // details
    div.innerHTML = `
    <div class="card" style="width: 20rem;">
    <div class="card-body">
    <img src="${info.image}" class="card-img-top" alt="...">
    <div class="mt-4">
    <p><span class="fw-bold">Brand: </span>${info.brand}</p>
    <p><span class="fw-bold">name: </span>${info.name}</p>
    <p><span class="fw-bold">storage: </span>${info.mainFeatures.storage}</p>
    <p><span class="fw-bold">chipSet: </span>${info.mainFeatures.chipSet}</p>
    <p><span class="fw-bold">display Size: </span>${info.mainFeatures.displaySize}</p>
    <p><span class="fw-bold">memory: </span>${info.mainFeatures.memory}</p>
    <p><span class="fw-bold">sensors: </span>${info.mainFeatures.sensors}</p>
    <h5 class="fw-bold">others</h5>
    <div>
   <div>
   <p><span class="fw-bold">release Date: </span>${info.releaseDate ? info.releaseDate : 'Not release date'} </p>
      <p><span class="fw-bold">Bluetooth: </span>${info.Bluetooth ? info.Bluetooth : 'Not release date'}</p>
      <p><span class="fw-bold">GPS: </span>${info.GPS ? info.GPS : 'Not release date'}</p>
      <p><span class="fw-bold">NFC: </span>${info.NFC ? info.NFC : 'Not release date'}</p>
      <p><span class="fw-bold">Radio: </span>${info.Radio ? info.Radio : 'Not release date'}</p>
      <p><span class="fw-bold">USB: </span>${info.USB ? info.USB : 'Not release date'}</p>
      <p><span class="fw-bold">WLAN: </span>${info.WLAN ? info.WLAN : 'Not release date'}</p>
      <p><span class="fw-bold">slug: </span>${info.slug ? info.slug: 'Not release date'}</p>
   </div>
   </div>
  </div>
    </div>
  </div>
    `
    details.appendChild(div);
}