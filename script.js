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
    const res = await fetch(
      `https://openapi.programming-hero.com/api/peddy/category/${category}`
    );
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
/**
 * 
 * {
    "petId": 3,
    "category": "Rabbit",
    "date_of_birth": "2022-04-20",
    "price": 1500,
    "image": "https://i.ibb.co.com/s3PXSwD/pet-3.jpg",
    "gender": "Male",
    "pet_details": "This male African Grey rabbit is a small, friendly companion born on April 20, 2022. He prefers a calm environment and enjoys gentle handling. Partially vaccinated, he's a great choice for rabbit lovers who want a peaceful, easygoing pet. Priced at $1500, he's perfect for a quiet home environment.",
    "vaccinated_status": "Partially",
    "pet_name": "Coco"
} 
 */





// display categories
const displayCategories = (data) => {
  const CatBtnContainer = document.getElementById("categoriesBtn");
  data.forEach((item) => {
    const CatBtn = document.createElement("div");
    CatBtn.innerHTML = `<button onclick="btnclick('${item.category}')" class="btn lg:px-14 md:px-8 py-2 h-14"><img class="h-full " src="${item.category_icon}" alt=""><p class ="text-xl">${item.category} </p></button>`;
    CatBtnContainer.append(CatBtn);
    console.log(data);
    
  });
};





// for click detail button
const pet = (data) => {
  const petcontainer = document.getElementById("modalcontainar");
  petcontainer.innerHTML = "";
  const div = document.createElement("div");
  div.innerHTML = `
<img class = "w-3xl object-center p-2 border-2 rounded-2xl" src="${data.image}" alt="">

<div>
    
  <div class="gray-font">
           <h2 class="card-title py-2 pl-2 font-bold text-black">${data.pet_name}</h2>
      <div class="gray-font flex flex-1/2 gap-5">
             <div>
                   <div class="flex items-center gap-1"><img class="h-5"src="https://img.icons8.com/dotty/80/hachiko.png" alt="hachiko" />
                   <p class="text-start ">Breed: ${data.category}</p> </div>
                          <div class="flex items-center gap-1"><img class="h-5"src="https://img.icons8.com/dotty/80/hachiko.png" alt="hachiko" />
                                <p class="text-start ">Breed: ${data.breed}</p></div>
                            <div class="flex items-center gap-1"><img class="h-5"src="https://img.icons8.com/pulsar-line/48/birth-date.png" />
                                <p class="text-start ">Birth: ${data.date_of_birth}</p></div>
              </div>
                           <div>
                                      <div class="flex items-center gap-1"><img class="h-5"
                                              src="https://img.icons8.com/dotty/80/gender.png" />
                                          <p class="text-start ">Gender: ${data.gender}</p>
                                      </div>
                                      <div class="flex items-center gap-1"><img class="h-5" src="https://img.icons8.com/dotty/80/average-2.png" alt="average-2" />
                                          <pclass="text-start ">Price: ${data.price}$</p>
                                      </div>
                                      <div class="flex items-center gap-1"><img class="h-5" src="https://img.icons8.com/dotty/80/average-2.png" alt="average-2" />
                                          <pclass="text-start "> vaccinated Status: ${data.vaccinated_status}</p>
                                      </div>
                           </div>
            </div>
   </div>
          <h3 class ="text-xl font-bold pt-2"> Details information: </h3>
          <p class="text-xs gray-font">${data.pet_details}</p>
</div>


`;
  petcontainer.append(div);
  const motal = document.getElementById("Modalbtn");
  motal.click();

};




//--------------------------------add to card a pet
const addpet = (data)  => {
console.log(data);
const petscontainerToCard =document.getElementById("addpetCart")
const pet = document.createElement("div")
pet.classList = "p-2 rounded-xl"
pet.innerHTML =`
<img class="rounded-xl object-cover " src="${data}" alt="">
`
petscontainerToCard.append(pet)
}




//  pet API by id
const petsById = async (id) => {
  try {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/peddy/pet/${id}`
    );
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
  console.log(data);
  if (data.length > 0 ) {
    
    data.forEach((item) => {
      
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
                            <button class="btn" onclick="addpet('${item.image}')"><img class="w-6" src="https://img.icons8.com/stickers/100/facebook-like-skin-type-1.png"
                                    alt="facebook-like-skin-type-1" /></button>
                            <button class="btn btnColor"> Adopt</button>
                            <button class="btn btnColor modalClass" onclick ="petsById('${item.petId}')">Details</button>    
                        </div>
                </div>
      `;
    petscontainer.append(petCard);
  });
  
} else {
  let count = 0;
 if (count == 0) {
   const NotAvailable = document.getElementById('PetsDisplay')
  petCard =document.createElement ('div')
      petCard.innerHTML = `
            <div class="flex flex-col w-xs px-14 py-10 m-16 relative left-6 bg-green-200 rounded-2xl border-red-700">
        <img src="images/error.webp" alt=""><p class="text-3xl"> Not available right now.</p>
        </div>
      `
      NotAvailable.append(petCard)
      count++;
 }
    }

};

loadCategories();
loadPatDetails();
