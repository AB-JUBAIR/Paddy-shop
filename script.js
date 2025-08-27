console.log("js is conneceted");

// load ApI for Categories
const loadCategories = async () => {
  try {
    const res = await fetch(
      "https://openapi.programming-hero.com/api/peddy/categories"
    );
    const data = await res.json();
    displayCategories(data.categories);
  } catch (error) {
    console.error("Something wrong Check  API Categories Button", error);
  }
};

// load api for pet card
const loadPatDetails = async () => {
  try {
    const res = await fetch(
      "https://openapi.programming-hero.com/api/peddy/pets"
    );
    const data = await res.json();
    displayPetDetais(data.pets);
  } catch (error) {
    console.error("Somthing Wrong in API for pat details card", error);
  }
};

//  pets API by Pets (dog , bird, cat)
const petsCategories = async (category) => {
  try {
    const res = await fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`);
    const data = await res.json();
    displayPetDetais(data.data);
  } catch (error) {
    console.error("Somthing Wrong in API for pets API by Id", error);
  }
};

// for click the category button
const btnclick = (id) => {
  petsCategories(id);
};

// display categories
const displayCategories = (data) => {
  const CatBtnContainer = document.getElementById("categoriesBtn");
  data.forEach((item) => {
    const CatBtn = document.createElement("div");
    CatBtn.innerHTML = `<button onclick="btnclick('${item.category}')" class="btn lg:px-14 md:px-8 py-2 h-14"><img class="h-full " src="${item.category_icon}" alt=""><p class ="text-xl">${item.category} </p></button>`;
    CatBtnContainer.append(CatBtn);
  });
};
// for click detail button
 const pet = (data) =>{
  
const petcontainer = document.getElementById('modalcontainar')
const div = document.createElement("div")
div.innerHTML = `
<img class = "w-3xl object-center p-2 border-2 rounded-2xl" src="${data.image}" alt="">
<button> clse </button>

`
petcontainer.append(div)

const motal = document.getElementById('Modalbtn')
motal.click();
    console.log(data);
  }

  //  pet API by id
const petsById = async (id) => {
  try {
    alert(id)
    const res = await fetch(`https://openapi.programming-hero.com/api/peddy/pet/${id}`);
    const data = await res.json();
   pet(data.petData);
  } catch (error) {
    console.error("Somthing Wrong in API for pets API by Id", error);
  }
};


//  display All pets
const displayPetDetais = (data) => {
  const petscontainer = document.getElementById("PetsDisplay");
  petscontainer.innerHTML = "";
  data.forEach((item) => {
    console.log(item);

    const petCard = document.createElement("div");
    petCard.innerHTML = `
       <div class="card p-1 pt-4 mb-4 border shadow-sm">
                    <figure class="px-4">
                        <img class ="w-auto h-60 object-cover rounded-xl mx-4" src="${item.image}"
                            alt="Shoes" />
                    </figure>
                    <div class=" px-4 rounded-xl ">
                        <h2 class="card-title py-2 pl-2">${item.category}</h2>
                        <div class="gray-font flex flex-col gap-1">
                            <div class="flex items-center gap-1"><img class="h-7"
                                    src="https://img.icons8.com/dotty/80/hachiko.png" alt="hachiko" />
                                <p class="text-start textx">Breed: ${item.breed}</p>
                            </div>
                            <div class="flex items-center gap-1"><img class="h-7"
                                    src="https://img.icons8.com/pulsar-line/48/birth-date.png" />
                                <p class="text-start textx">Birth: ${item.date_of_birth}</p>
                            </div>
                            <div class="flex items-center gap-1"><img class="h-7"
                                    src="https://img.icons8.com/dotty/80/gender.png" />
                                <p class="text-start textx">Gender: ${item.gender}</p>
                            </div>
                            <div class="flex items-center gap-1"><img class="h-7" src="https://img.icons8.com/dotty/80/average-2.png" alt="average-2" />
                                <pclass="text-start textx">Price: ${item.price}$</p>
                            </div>
                        </div>
                    </div>
                        <div class="flex justify-between border-t pt-1.5 p-2 ">
                            <button class="btn "><img class="w-6"
                                    src="https://img.icons8.com/stickers/100/facebook-like-skin-type-1.png"
                                    alt="facebook-like-skin-type-1" /></button>
                            <button class="btn btnColor"> Adopt</button>
                            <button class="btn btnColor modalClass" onclick ="petsById('${item.petId}')">Details</button>    
                        </div>
                </div>
      `;
    petscontainer.append(petCard);
  });
};

loadCategories();
loadPatDetails();
