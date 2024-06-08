// Función para abrir la ventana modal
function openModal() {
    document.getElementById('myModal').style.display = 'block';
}

// Función para cerrar la ventana modal al hacer clic en el botón de cerrar 
function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

// Función que se ejecuta al confirmar la acción
function confirmAction() {
    alert('Acción confirmada.');
    closeModal();
}

// Función que se ejecuta al cancelar la acción
function cancelAction() {
    alert('Acción cancelada.');
    closeModal();
}


// Extra Cierra la ventana modal si se hace clic fuera de ella
window.onclick = function(event) {
    if (event.target == document.getElementById('myModal')) {
        closeModal();
    }
}
