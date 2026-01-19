
const searchBtn = document.querySelector('#search-btn');
const searchBox = document.querySelector('#search-box');
const boxes = document.querySelectorAll('.menu .box');
const cartbtn = document.querySelectorAll('.cart-btn');

// Fazer a busca funcionar
if (searchBox) {
    searchBox.oninput = () => {
        let valor = searchBox.value.toLowerCase(); // Pega o que você digitou
        
        boxes.forEach(cafe => {
            let nomeCafe = cafe.querySelector('h3').innerText.toLowerCase();
            
            // Se o nome do café tiver as letras que você digitou, ele aparece
            if (nomeCafe.includes(valor)) {
                cafe.style.display = "block";
            } else {
                cafe.style.display = "none"; // Se não, ele some
            }
        });
    };
}