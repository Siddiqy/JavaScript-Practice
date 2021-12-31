document.addEventListener('DOMContentLoaded', () => {
  let input = document.querySelector('.input-box');
  let search = document.querySelector('.search');
  let searchIcon = document.querySelector('#search-icon');
  let gallery = document.querySelector('.gallery-view');

  input.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
      input.classList.add('input-box-top');
      requestApi();
    }
  });

  searchIcon.addEventListener('click', () => { 
    input.classList.add('input-box-top');
    requestApi();
  });

  function requestApi() {
    
    gallery.textContent = " ";

    fetch('https://api.unsplash.com/search/photos?query='+ search.value +'&per_page=30&client_id=g1vQHpZyFw2rH-MAOXvhhpb_tPimmQcceXsgo4Ap20c')
    .then(response => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })
    .then(data => {
      loadImages(data);
    })
    .catch(error => console.log(error));
  }

  function loadImages(data) {
    
    for(let i = 0; i < data.results.length; i++) {
      
      let image = document.createElement("div");
      image.className = "img";
      image.style.backgroundImage = "url("+data.results[i].urls.raw + "&w=1366&h=768" +")";
      image.addEventListener("dblclick", () => {
        window.open(data.results[i].links.download, "_blank");
      });

      gallery.appendChild(image);
    }
  }
});