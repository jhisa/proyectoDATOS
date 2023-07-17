let listaContactos = new ListaContactos();



class ListaContactos {
  constructor() {
    this.cabeza = null;
  }

 Function agregar(nombre, telefono, correo) {
    let contacto = new Contacto(nombre, telefono, correo);
    if (this.cabeza === null) {
      this.cabeza = contacto;
    } else {
      let actual = this.cabeza;
      while (actual.siguiente !== null) {
        actual = actual.siguiente;
      }
      actual.siguiente = contacto;
    }
  }


function eliminarContacto() {
  let nombre = document.getElementById("nombre").value;
  if (listaContactos.eliminar(nombre)) {
    actualizarTabla();
    alert("Contacto eliminado.");
  } else {
    alert("Contacto no encontrado.");
  }
}

function buscarContacto() {
  let nombre = document.getElementById("nombre").value;
  let contacto = listaContactos.buscar(nombre);
  if (contacto !== null) {
    alert(contacto.nombre + ", " + contacto.telefono + ", " + contacto.correo);
  } else {
    alert("Contacto no encontrado.");
  }
}

function listarContactos() {
  let tabla = document.getElementById("tablaContactos");
  tabla.innerHTML = "<tr><th>Nombre</th><th>Teléfono</th><th>Correo electrónico</th></tr>";
  tabla.innerHTML += listaContactos.listar();
}

function actualizarTabla() {
  let tabla = document.getElementById("tablaContactos");
  tabla.innerHTML = "<tr><th>Nombre</th><th>Teléfono</th><th>Correo electrónico</th></tr>";
  tabla.innerHTML += listaContactos.listar();
  document.getElementById("nombre").value = "";
  document.getElementById("telefono").value = "";
  document.getElementById("correo").value = "";
}