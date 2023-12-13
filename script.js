// fech and print info file


// fetch("user.json")
// .then(  response => response.text())
// .then(result => console.log(result))

// // fech and print converted data from file
// fetch("user.json")
// .then( response => response.json())
// .then(result => console.log(result))

// // fetch and print data from github api

// fetch ("https://api.github.com/users/dkoncius")
// .then(response => response.json())
// .then(result => console.log(result))


// fetch and print data in DOM
// fetch ('https://api.github.com/users/dkoncius')
// .then(response => response.json())
// .then(result => {
//     const h1 = document.querySelector("h1")
//     h1.innerText = result.name


//     const img = document.createElement("img")
//     img.scr = result.avatar_url
//     img.width = 300
//     document.body.append(img)

//     if(result.message == "not found"){
//         alert("not found")
//     }
//     console.log(result)

// })

// 1. Jums paskambino pažinčių portalas – jiems reikia staigiai sukurti front-endą, kuris pasiimtų duomenis iš https://randomuser.me/api/ ir juos atvaizduotų panašioje kortelėje kaip čia (dizainas neturi atitikti, bet padarykit tvarkingai - jį galite pilnai su HTML pasirašyti, bet norintiems sudėtingiau - pabandykite su JS sukurti html elementus).


// fetch ('https://api.github.com/users/dkoncius')
// .then(response => response.json())
// .then(result => {
//     const h1 = document.querySelector("h1")
//     h1.innerText = result.name


//     const img = document.createElement("img")
//     img.scr = result.avatar_url
//     img.width = 300
//     document.body.append(img)

//     if(result.message == "not found"){
//         alert("not found")
//     }
//     console.log(result)

// })


fetch("https://randomuser.me/api/")
  .then(res => res.json())
  .then(data => {
    const img = document.createElement("img");
    img.src = data.results[0].picture.large;
    document.body.append(img);

    const nameAgeContainer = document.createElement("div");
    nameAgeContainer.classList.add("name-age-container");
    document.body.append(nameAgeContainer);

    const h1 = document.createElement("h1");
    h1.innerText = `${data.results[0].name.first} ${data.results[0].name.last}`;
    nameAgeContainer.append(h1);

    const pAge = document.createElement("p");
    pAge.innerText = `years: ${data.results[0].dob.age}`;
    nameAgeContainer.append(pAge);

    const pEmail = document.createElement("p");
    pEmail.innerText = `Email: ${data.results[0].email}`;
    document.body.append(pEmail);

    console.log(data.results[0]);
  })
  .catch(e => console.log(e.message));
