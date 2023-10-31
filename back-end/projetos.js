const url = 'http://localhost:3000/projetos'
fetch(url)
 .then((req) => req.json())
 .then((data) => mostraProdutos(data));


 function mostraProdutos(produtos){
 const htmlProdutos = produtos.map(
 (produto) =>`  <div class="backgroundcimagem2 flex-column p-3 col-2 text-white">
 <div>
 <h3>
   Projeto 2
 </h3>
 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus expedita commodi nulla! Esse nemo sapiente dolores ea id </p>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>
</div>
</div>`
 );
 document.getElementById('app').innerHTML = htmlProdutos;
}
 
// function mostraProdutos(produtos){
//  const htmlProdutos = produtos.map(
//  (produto) =>`<div class="card item" style="width: 18rem;">
//  <h4>${produto.nome}</h4><br>
//  <form action="paginadeprojeto.html">
//  <input type="submit" value="saber mais" />
// </form>
//  </div>`
//  );
//  document.getElementById('app').innerHTML = htmlProdutos;
// }