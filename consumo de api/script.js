const listaCards = document.querySelector('#listaCards')
let produtos = [];
/* 
<div class="card m-3" style="width: 300px; heigth: 500px;">
    <img src="asd.jpg" style="max-height: 200px;" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.</p>
    </div>
</div> 
*/
fetch('https://fakestoreapi.com/products/')
    .then(res => res.json())
    .then(res => {
        produtos = res
        console.log(produtos)
        produtos.forEach(item => {
            let card = document.createElement('div')
            card.classList = ('card m-3');
            card.style = "width: 300px; max-heigth: 400px;";

            let imagem = document.createElement('img')
            imagem.src = item.image;
            imagem.style = 'max-height: 200px;'
            imagem.classList = ('card-img-top')

            let div2 = document.createElement('div');
            div2.classList = ('card-body')
            div2.style = 'height: 200px; overflow: scroll;'

            let h5 = document.createElement('h4')
            h5.classList = ('card-title')
            h5.innerHTML = item.title

            let p = document.createElement('p')
            p.classList = ('card-text')
            p.innerHTML = item.description

            let p2 = document.createElement('p')
            p2.classList = ('card-text')
            p2.innerHTML = item.price

            div2.appendChild(h5)
            div2.appendChild(p)
            div2.appendChild(p2)

            card.appendChild(imagem)
            card.appendChild(div2)

            document.querySelector('#produtos').appendChild(card)
        });

    });
