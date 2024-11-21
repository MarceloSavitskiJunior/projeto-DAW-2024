const apiUrl = "https://my-json-server.typicode.com/MarceloSavitskiJunior/mockdatajson/cars";

async function fetchCarData() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Error fetching data from API");
        const cars = await response.json();
        
        renderCars(cars);
    } catch (error) {
        console.error("Erro:", error);
    }
}

function renderCars(cars) {
    console.log(cars);
    
    const carContainer = document.querySelector(".carros");

    carContainer.innerHTML = "";

    cars.forEach(car => {

        const carDiv = document.createElement("div");
        carDiv.classList.add("car");

        const carImg = document.createElement("img");
        carImg.src = car.imagePath;
        carImg.alt = car.name;

        const carTitle = document.createElement("h2");
        carTitle.textContent = car.name;

        const carDescription = document.createElement("p");
        carDescription.textContent = car.description;
        carDescription.style.color = "black"

        carDiv.appendChild(carImg);
        carDiv.appendChild(carTitle);
        carDiv.appendChild(carDescription);

        carContainer.appendChild(carDiv);
    });
}

document.addEventListener("DOMContentLoaded", fetchCarData);
