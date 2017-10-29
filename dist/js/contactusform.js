$('#buttonContacto').on('click', function(e){
    e.preventDefault()
    var nombre = $('#nombre').val()
    var apellido = $('#apellido').val()
    var email = $('#email').val()
    var telefono = $('#telefono').val()
    var ciudad = $('#ciudad').val()
    var comoseentero = $('#comoseentero').val()
    var mensaje = $('#mensaje').val()
    var data = {
        to: 'contactenos@yes.edu.co',
        name: nombre + apellido,
        email: email,
        subject: 'Formulario de Contácto Instituto YES',
        from: 'contactenos@yes.edu.co',
        phone: telefono,
        template: `<div>
            <h1>Usted recibió una solicitud de Contácto Insituto YES</h1>
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Apellido:</strong> ${apellido}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Teléfono:</strong> ${telefono}</p>
            <p><strong>Ciudad:</strong> ${ciudad}</p>
            <p><strong>Como Se Entero del Yes:</strong> ${comoseentero}</p>
            <p><strong>Mensaje:</strong> ${mensaje}</p>
            
        </div>`
    }
    axios.post('http://138.197.16.248:5001/sendmail', data)
    .then(function(res) {
        console.log(res);
        $('#nombre').val('')
        $('#apellido').val('')
        $('#email').val('')
        $('#telefono').val('')
        $('#ciudad').val('')
        $('#comoseentero').val('')
        $('#mensaje').val('')
    })
    .catch(function(err) {console.error(err)})
})

