(async function load(){

  async function getData(url){
    const response = await fetch(url)
    const data = await response.json();
    return data;
  }
  const categorias = await getData('https://raw.githubusercontent.com/OscarLLC/imaginamos.github.io/master/data/categories.json');
  const productos = await getData('https://raw.githubusercontent.com/OscarLLC/imaginamos.github.io/master/data/products.json');

  function templateCategorias(item){
    return(
      `<div class="info__banners">
      <div class="description__image__banner">
        <figure class="figure__banner">
          <img class="image__banner" src="${item.icon}"/>
        </figure>
      </div> 
      <div class="description__title">
        <p class="text__banner">${item.name}</p>
      </div>
    </div>`
    )
  }
  const $categoriasContent = document.getElementById('content__banner');
  categorias.forEach((item) => {
    const HTMLString = templateCategorias(item);
    const html = document.implementation.createHTMLDocument();
    html.body.innerHTML = HTMLString;
    $categoriasContent.append(html.body.children[0])
  });

  
 



})()
