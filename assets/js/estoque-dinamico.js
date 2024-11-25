const apiEstoqueUrl = "https://my-json-server.typicode.com/MarceloSavitskiJunior/mockdatajson/estoque";

async function fetchEstoqueData() {
    try {
        const response = await fetch(apiEstoqueUrl);
        if (!response.ok) throw new Error("Erro ao buscar os dados da API de estoque.");
        const cars = await response.json();
        
        renderEstoque(cars);
    } catch (error) {
        console.error("Erro:", error);
        const carContainer = document.querySelector(".carros");
        carContainer.innerHTML = "<p>Não foi possível carregar os veículos no momento. Tente novamente mais tarde.</p>";
    }
}

function renderEstoque(cars) {
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
        carDescription.textContent = car.description ? car.description : "Entre em contato para mais detalhes.";

        const carPrice = document.createElement("p");
        carPrice.textContent = `Preço: ${car.price}`;
        carPrice.style.color = "green";
        carPrice.style.fontWeight = "bold";

        const carYear = document.createElement("p");
        carYear.textContent = `Ano: ${car.year}`;
        carYear.style.color = "gray";

        const whatsappButton = document.createElement("a");
        whatsappButton.href = `https://wa.me/5546988110811?text=Gostaria%20de%20saber%20mais%20sobre%20o%20veículo%20${encodeURIComponent(car.name)}`;
        whatsappButton.target = "_blank";
        whatsappButton.classList.add("cta-button");
        whatsappButton.textContent = "Quero esse!";

        carDiv.appendChild(carImg);
        carDiv.appendChild(carTitle);
        carDiv.appendChild(carDescription);
        carDiv.appendChild(carPrice);
        carDiv.appendChild(carYear);
        carDiv.appendChild(whatsappButton);

        carContainer.appendChild(carDiv);
    });
}

document.addEventListener("DOMContentLoaded", fetchEstoqueData);
