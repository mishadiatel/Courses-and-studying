'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderCountry = function(data, className=''){
    const html = `
            <article class="country ${className}">
            <img class="country__img" src="${data.flags.png}" />
            <div class="country__data">
                <h3 class="country__name">${data.name.common}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
                <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
                <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
            </div>
            </article>` ;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = '1';
}

const renderError = function(msg){
    countriesContainer.insertAdjacentText('beforeend', msg);
    countriesContainer.style.opacity = 1;
}


// const getCountryAndNeighbour = function(country){

//     //ajax call country 1
//     const request =  new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//     request.send();
//     request.addEventListener('load', function(){
//         const [data] = JSON.parse(this.responseText);
//         console.log(data);

//         //render country 1
//         renderCountry(data);

//         //get neighbour country
//         const [neighbour] = data.borders;
//         if(!neighbour) return;

//         //ajax call country 2
//         const request2 =  new XMLHttpRequest();
//         request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//         request2.send();
//         request2.addEventListener('load', function(){
//             const [data2] = JSON.parse(this.responseText);
//             console.log(data2);

//             //render country 1
//             renderCountry(data2, 'neighbour');
//             // console.log(this.responseText);
//         });

//         // //get neighbour country
//         // const neighbours = data.borders;
//         // if(!neighbours) return;

//         // //ajax call country 
//         // neighbours.forEach(neighbour =>{
//         //     const request2 =  new XMLHttpRequest();
//         //     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//         //     request2.send();
//         //     request2.addEventListener('load', function(){
//         //         const [data2] = JSON.parse(this.responseText);
//         //         console.log(data2);

//         //         //render country 
//         //         renderCountry(data2, 'neighbour');
//         //         // console.log(this.responseText);
//         //     });
//         // });
//     });
// }
// getCountryAndNeighbour('portugal');
// getCountryAndNeighbour('usa');
// getCountryAndNeighbour('ukraine');


// const request = fetch(`https://restcountries.com/v3.1/name/portugal`);
// console.log(request);
// const getCountryData = function(country){
//     fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function(response){
//         console.log(response);
//         return response.json();
//     })
//     .then(function(data){
//         console.log(data);
//         renderCountry(data[0]);
//     })
// }



// const getCountryData = function(country){
//     //country 1
//     fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then((response) =>{
//         console.log(response);
//         if(!response.ok){
//             throw new Error(`Country not found (${response.status})`);
//         }
//         return response.json();
//     })
//     .then((data) =>{
//         renderCountry(data[0]);
        
//         // const neighbour = data[0].borders[0];
//         const neighbour = `sgksfvc`;
//         if(!neighbour) return;
//         // country 2
//         return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then((response) => {
//         if(!response.ok){
//             throw new Error(`Country not found (${response.status})`);
//         }
//         return response.json()
//     })
//     .then(data => {
//         console.log(data)
//         renderCountry(data[0], 'neighbour')
//     })
//     .catch(err =>{
//          renderError(`Somsthing went wrong ${err.message}. Try again`);
//          console.error(`${err}`);
//     })
//     .finally(() =>{
//         countriesContainer.style.opacity = '1';
//     })
// }
const getJSON = function(url, errorMsg='Somthing went wrong'){
    return fetch(url).then((response) =>{
        // console.log(response);
        if(!response.ok){
            throw new Error(`${errorMsg} (${response.status})`);
        }
        return response.json();
    });
}

const getCountryData = function(country){
    //country 1
    getJSON(`https://restcountries.com/v3.1/name/${country}`, `Country not found`)
    .then((data) =>{
        renderCountry(data[0]);
        
        const neighbour = data[0].borders;
        if(!neighbour) throw new Error(`No neighbour found`);
        // country 2
        return getJSON(`https://restcountries.com/v3.1/alpha/${neighbour[0]}`, `
        Country not found`);
    })
    .then(data => {
        console.log(data)
        renderCountry(data[0], 'neighbour')
    })
    .catch(err =>{
         renderError(`Somsthing went wrong ${err.message}. Try again`);
         console.error(`${err}`);
    })
    .finally(() =>{
        countriesContainer.style.opacity = '1';
    })
}

// btn.addEventListener('click', function(){
//     getCountryData('portugal');
// });

// getCountryData('australia');



/**
 * ///////////////////////////////////////////////
 * ///////////////////////////////////////////////
 * PART 1 
 * //////////////////////////////////////////////
 * //////////////////////////////////////////////
 */

// const wereAmI = function(lat, lng){
//     fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(res => res.json)
//     .then(data => {
//         console.log(data)
//     })
// }

// wereAmI()

// console.log('test start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('resolwed promise 1')
// .then((res) => console.log(res));
// Promise.resolve('Resolves promise 2')
// .then(res =>{
//     for(let i = 0; i < 1000000; i++){}
//     console.log(res);
// })
// console.log('test end');

// const lotteryPromise = new Promise(function(resolve, reject){
//     console.log(`Lotter draw is happening`);
//     setTimeout(function(){
//         if(Math.random() >= 0.5){
//             resolve(`You WIN`);
//         }else{
//             reject(new Error('You lost your money'));
//         }
//     }, 2000)
// });
// lotteryPromise.then((res) => console.log(res)).catch(err => console.error(err));

// const wait = function(seconds){
//     // setTimeout(()=> {}, seconds*1000);
//     return new Promise(function(resolve){
//         setTimeout(resolve, seconds*1000);
//     })
// }

// wait(2).then(()=>{
//      console.log('I waited for two seconds');
//     return wait(1);  
// }).then(()=>console.log('I waited 1 second'))



// const getPosition = function(){
//     return new Promise(function(resolve, reject){
//         // navigator.geolocation.getCurrentPosition(
//             // position => resolve(position), 
//             // err => reject(err));
//         navigator.geolocation.getCurrentPosition(resolve, reject)
//     });
// }
// // getPosition().then(pos => console.log(pos));
// const whereAmI = function () {
//     getPosition().then(pos => {
//         const {latitude: lat, longitude: lng} = pos.coords;
//         return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     })
    
//       .then(res => {
//         if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//         return res.json();
//       })
//       .then(data => {
//         console.log(data);
//         console.log(`You are in ${data.city}, ${data.countryname}`);
//         return fetch(`https://restcountries.eu/rest/v2/name/${data.countryname}`);
//       })
//       .then(res => {
//         if (!res.ok) throw new Error(`Country not found (${res.status})`);
//         return res.json();
//       })
//       .then(data => renderCountry(data[0]))
//       .catch(err => console.error(`${err.message} 💥`));
//   };

// btn.addEventListener('click', whereAmI);

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// const wait = function(seconds){
//     // setTimeout(()=> {}, seconds*1000);
//     return new Promise(function(resolve){
//         setTimeout(resolve, seconds*1000);
//     })
// }

// const imageContainer = document.querySelector('.images');

// const createImage = function(imgPath){
//     return new Promise(function(resolve, reject){
//         const img = document.createElement('img');
//         img.src = imgPath;
//         img.addEventListener('load', function(){
//             imageContainer.append(img);
//             resolve(img);
//         });
//         img.addEventListener('error', function(){
//             reject(new Error('Image not found'));
//         })
//     });
// }

// let currentImage;
// createImage("./img/img-1.jpg").then(img => {
//     currentImage = img;
//     console.log('Image 1 loaded');
//     return wait(2);
// })
// .then(() =>{
//     currentImage.style.display = 'none';
//     return createImage('./img/img-2.jpg');
// })
// .then(img => {
//     currentImage = img;
//     console.log('Image 1 loaded');
//     return wait(2);
// })
// .then(() =>{
//     currentImage.style.display = 'none';
//     // return createImage('./img/img-2.jpg');
// })
// .catch(err => console.error(err))

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

const whereAmI = async function(country){
    // fetch(`https://restcountries.com/v3.1/name/${country}`)
    // .then((res) => console.log(res));
    try{
        const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
        if(!res.ok) throw new Error('Problem getting country');
        const data = await res.json();
        // console.log(data);
        renderCountry(data[0]);
        return `you are in ${data[0].name.common}`
    }catch(err){
        console.error(err.message);
        renderError(`something went wrong ${err.message}`);
        throw err;
    }
    
}
// console.log('1: Will get a location');
// // const city = whereAmI('portugal');
// // console.log(city);
// whereAmI('portugal').then((city) => console.log(`2: ${city}`))
// .catch(err => console.error(`2: ${err.message}`))
// .finally(() => console.log('Finished get a location'));


// console.log('1: Will get a location');
// const fnc = async function(){
//     try{
//         const city = await whereAmI('portugal');
//         console.log(`2: ${city}`);
//     }catch(err){
//         console.error(`2: ${err.message}`);
//     }
//     console.log('3: Finished get a location');
// }
// fnc();

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

// const get3Countries = async function(c1, c2, c3){
//     try{
//         // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
//         // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
//         // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
//         // console.log(data1.capital, data2.capital, data3.capital);

//         const data = await Promise.all([getJSON(`https://restcountries.com/v3.1/name/${c1}`),
//         getJSON(`https://restcountries.com/v3.1/name/${c2}`),
//         getJSON(`https://restcountries.com/v3.1/name/${c3}`)]);
//         console.log(data.map(d => d[0].capital[0]));
        
//     }catch(err){
//         console.error(err);
//     }
// }

// get3Countries('portugal', 'canada', 'tanzania');

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

// const fnc = async function(){
//     const res = await Promise.race([
//         getJSON(`https://restcountries.com/v3.1/name/italy}`),
//         getJSON(`https://restcountries.com/v3.1/name/egypt}`),
//         getJSON(`https://restcountries.com/v3.1/name/mexico}`)]);
//     console.log(res[0]);
// }

// fnc();

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

    const wait = function(seconds){
        // setTimeout(()=> {}, seconds*1000);
        return new Promise(function(resolve){
            setTimeout(resolve, seconds*1000);
        })
    }
    
    const imageContainer = document.querySelector('.images');
    
    const createImage = function(imgPath){
        return new Promise(function(resolve, reject){
            const img = document.createElement('img');
            img.src = imgPath;
            img.addEventListener('load', function(){
                imageContainer.append(img);
                resolve(img);
            });
            img.addEventListener('error', function(){
                reject(new Error('Image not found'));
            })
        });
    }
    
    // let currentImage;
    // createImage("./img/img-1.jpg").then(img => {
    //     currentImage = img;
    //     console.log('Image 1 loaded');
    //     return wait(2);
    // })
    // .then(() =>{
    //     currentImage.style.display = 'none';
    //     return createImage('./img/img-2.jpg');
    // })
    // .then(img => {
    //     currentImage = img;
    //     console.log('Image 1 loaded');
    //     return wait(2);
    // })
    // .then(() =>{
    //     currentImage.style.display = 'none';
    //     // return createImage('./img/img-2.jpg');
    // })
    // .catch(err => console.error(err))

    // const loadNPause = async function(){
    //     try{
    //         //load image 1
    //         let img = await createImage("img/img-1.jpg");
    //         console.log('Image 1 loaded');
    //         await wait(2);
    //         img.style.display = 'none';

    //         //load image 2
    //         img = await createImage("img/img-2.jpg");
    //         console.log('Image 2 loaded');
    //         await wait(2);
    //         img.style.display = 'none';
    //     }catch(err){
    //         console.error(err);
    //     }
    // }
    // loadNPause();

    const loadAll = async function(imgArr){
        try{
            const imgs = imgArr.map(async img => await createImage(img));
            // console.log(imgs);
            const imgsEl = await Promise.all(imgs);
            console.log(imgsEl);
            imgsEl.forEach(img => img.classList.add('parallel'));
        }catch(err){
            console.error(err);
        }
    }
    loadAll(["img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg"]);
