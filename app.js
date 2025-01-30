let overlay;

function abrirModal() {
    let body = document.querySelector('body');

    overlay = document.createElement('div');
    overlay.classList.add('overlay');

    let modal = document.createElement('div');
    modal.classList.add('modal');
    overlay.appendChild(modal);

    modal.innerHTML = `
        <span class='close' onclick='cerrarModal();'>X</span>
        <div class='modal-content'>
            <label>Nombre:</label>
            <input type='text' id='nombre' required><br>

            <label>Telefono:</label>
            <input type='number' id='telefono' required><br>

            <label>Correo:</label>
            <input type='email' id='email' required><br>
            
            <button class='btn'>Guardar Paciente</button>
        </div>
    `;

    overlay.style.display = 'flex';
    body.appendChild(overlay);
}

function cerrarModal() {
    if(overlay){
        overlay.style.display = 'none';
    }
}
