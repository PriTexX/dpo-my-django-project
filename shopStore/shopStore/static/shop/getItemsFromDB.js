function getData(from, to, elementToInsertData) {
    const URL = `http://127.0.0.1:8000/shop/getDataFromDB?from=${from}&to=${to}`;
  
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
          const DOMcontainer = document.createDocumentFragment()
          for (object of data.objects){
              const el = wrapData(object)
              DOMcontainer.appendChild(el)
          }
          elementToInsertData.appendChild(DOMcontainer)
      })
      .catch((err) => {throw err});
  }
  
  function wrapData(data, elementToInsertData){
      const element = document.createElement('div')
      element.classList.add('card')
      element.style = 'width: 18rem'
      const html = 
      `
      
      <a href="aboutItem/${data.id}"><img
      src="${data.image_url}"
      class="card-img-top"
      alt="..."
      /></a>
      <div class="card-body">
          <a href="aboutItem/${data.id}"><span class="my-card-title">${data.name}</span></a>
          <div class="price">
            ${isDiscounted(data.prev_price, data.price)}  
          </div>
          <div class="card-btn not-added-to-cart btn btn-primary ms-auto">
              <div class="my-plus"><div class="fa-solid fa-plus"></div></div>
              <div class="cart-count"><span>1</span> <small>шт.</small></div>
              <div class="minus"><div class="fa-solid fa-minus"></div></div>
              <div class="my-2-plus fa-solid fa-plus"></div>
              </div>
      </div>
      
      `
      element.innerHTML = html
      initCard(element)
  
      return element;
  }
  
function isDiscounted(prev_price, price){
    if (prev_price){
        return `
        <span class="price__small">${prev_price}</span><span class="price__big">${price}</span>
        `
    }
    else {
        return `
        <span class="price__normal">${price}</span>
        `
    }
}