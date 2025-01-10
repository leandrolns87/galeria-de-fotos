const images = [
  {
      "name": "Lady with a Teddy",
      "src": "https://images.pexels.com/photos/3348748/pexels-photo-3348748.jpeg"
  },
  {
      "name": "Girl with camera",
      "src": "https://images.pexels.com/photos/3812944/pexels-photo-3812944.jpeg"
  },
  {
      "name": "Beautiful Girl with Glasses",
      "src": "https://images.pexels.com/photos/2100063/pexels-photo-2100063.jpeg"
  },
  {
      "name": "Redhead with frackles",
      "src": "https://images.pexels.com/photos/3228213/pexels-photo-3228213.jpeg"
  },
  {
      "name": "Girl in black dress",
      "src": "https://images.pexels.com/photos/1385472/pexels-photo-1385472.jpeg"
  },
  {
      "name": "Girl Sitting on Chair",
      "src": "https://images.pexels.com/photos/4725133/pexels-photo-4725133.jpeg"
  },
  {
    "name": "Imagem da noite",
    "src": "https://cdn.pixabay.com/photo/2024/12/12/18/32/landscape-9263545_640.jpg"
    },    
    {
        "name": "Flores",
        "src": "https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830_1280.jpg"
    }, 
    {
        "name": "Garotinha",
        "src": "https://cdn.pixabay.com/photo/2017/07/18/18/01/little-girl-2516578_960_720.jpg"
    }, 
    {
        "name": "Passáros",
        "src": "https://cdn.pixabay.com/photo/2022/01/17/01/19/cherry-blossoms-6943659_960_720.jpg"
    },     
];

const gallery = document.querySelector('.gallery');
const searchInput = document.getElementById('search');

function createImageElement(image) {
  const imgContainer = document.createElement('div');
  imgContainer.classList.add('image-container');

  const img = document.createElement('img');
  img.src = image.src;

  const name = document.createElement('p');
  name.classList.add('image-name');
  name.textContent = image.name;

  imgContainer.appendChild(img);
  imgContainer.appendChild(name);
  gallery.appendChild(imgContainer);
}

// Cria as imagens na galeria
images.forEach(createImageElement);

searchInput.addEventListener('input', (event) => {
  const searchTerm = event.target.value.toLowerCase();
  const imageContainers = document.querySelectorAll('.image-container');

  imageContainers.forEach(container => {
      const name = container.querySelector('.image-name').textContent.toLowerCase();
      container.style.display = name.includes(searchTerm) ? 'block' : 'none';
  });
});