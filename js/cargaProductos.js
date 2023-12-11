traeProductos();

function traeProductos(){
        const url='https://camposguille.pythonanywhere.com/productos';
        fetch(url)
        .then(response => response.json())
        .then(data => {
            this.productos = data;
            tarjetas(data);
            this.cargando=false
        })
        .catch(err => {
            console.error(err);
            this.error=true
        })
}

function tarjetas(data){
        for(let aux=0; aux<data.length;aux++) { 
            const flex = document.querySelector(".fichas");
            const template = document.getElementById("ficha").content;
            const clone = template.cloneNode(true);
            const fragment = document.createDocumentFragment();
            let descripcion=data[aux].descripcion;
            let precio=data[aux].precio;
            let imagen=data[aux].imagen;
            clone.querySelector(".formato-img").setAttribute("src", `${imagen}`);
            clone.querySelector(".formato-descr").innerHTML = `${descripcion}`;
            clone.querySelector(".formato-precio").innerHTML = `${precio}`;
            fragment.appendChild(clone);
            flex.appendChild(fragment);
        }   
}