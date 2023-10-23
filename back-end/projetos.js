const url = 'http://localhost:3000/projetos'
fetch(url)
 .then((req) => req.json())
 .then((data) => mostraProdutos(data));

function mostraProdutos(produtos){
 const htmlProdutos = produtos.map(
 (produto) =>`<div class="card item" style="width: 18rem;">
 <h4>${produto.nome}</h4><br>
 <form action="paginadeprojeto.html">
 <input type="submit" value="saber mais" />
</form>
 </div>`
 );
 document.getElementById('app').innerHTML = htmlProdutos;
}