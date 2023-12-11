console.log(location.search)
var id=location.search.substr(4)
console.log(id)
const { createApp } = Vue
createApp({
data() {
return {
id:0,
descripcion:"",
imagen:"",
stock:0,
precio:0,
url:'https://camposguille.pythonanywhere.com/productos/'+id,
}
},
methods: {
fetchData(url) {
fetch(url)
.then(response => response.json())
.then(data => {

console.log(data)
this.id=data.id
this.descripcion = data.descripcion;
this.imagen=data.imagen
this.stock=data.stock
this.precio=data.precio
})
.catch(err => {
console.error(err);
this.error=true
})
},
modificar() {
let producto = {
descripcion:this.descripcion,
precio: this.precio,
stock: this.stock,
imagen:this.imagen
}
var options = {
body: JSON.stringify(producto),
method: 'PUT',
headers: { 'Content-Type': 'application/json' },
redirect: 'follow'
}
fetch(this.url, options)
.then(function () {
window.location.href = "./prod.html";
})
.catch(err => {
console.error(err);
alert("Error al Modificar")
})
}
},
created() {
this.fetchData(this.url)
},
}).mount('#app')