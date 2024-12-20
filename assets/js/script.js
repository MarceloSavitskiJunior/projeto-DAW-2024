const apiUrl = "https://my-json-server.typicode.com/MarceloSavitskiJunior/mockdatajson/cars";

async function fetchCarData() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Erro ao buscar os dados da API.");
        const cars = await response.json();
        
        renderCars(cars);
    } catch (error) {
        console.error("Erro:", error);
        const carContainer = document.querySelector(".carros");
        carContainer.innerHTML = "<p>Não foi possível carregar os veículos no momento. Tente novamente mais tarde.</p>";
    }
}

function renderCars(cars) {
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

        const carPrice = document.createElement("p");
        carPrice.textContent = car.price ? `Preço: ${car.price}` : "";
        carPrice.style.color = "green";
        carPrice.style.fontWeight = "bold";

        carDiv.appendChild(carImg);
        carDiv.appendChild(carTitle);
        carDiv.appendChild(carDescription);
        carDiv.appendChild(carPrice);

        carContainer.appendChild(carDiv);
    });
}

document.addEventListener("DOMContentLoaded", fetchCarData);
