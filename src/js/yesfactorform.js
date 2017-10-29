$('#buttonSendYF').on('click', function(e){
    e.preventDefault()
    var nombres = $('#nombres').val()
    var email = $('#email').val()
    var telefono = $('#telefono').val()
    var fechanacimiento = $('#fechanacimiento').val()
    var ciudad = $('#ciudad').val()
    var mensaje = $('#mensaje').val()
    var data = {
        to: 'contactenos@yes.edu.co',
        name: nombres,
        email: email,
        subject: 'Inscripción the yes Factor',
        from: 'contactenos@yes.edu.co',
        phone: telefono,
        template: `<div>
            <h1>Usted recibió una solicitud de Inscripción the yes factor</h1>
            <p><strong>Nombre:</strong> ${nombres}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Teléfono:</strong> ${telefono}</p>
            <p><strong>Fecha de Nacimiento:</strong> ${fechanacimiento}</p>
            <p><strong>Ciudad:</strong> ${ciudad}</p>
            <p><strong>Mensaje:</strong> ${mensaje}</p>
            
        </div>`
    }
    axios.post('http://138.197.16.248:5001/sendmail', data)
    .then(function(res) {
        console.log(res);
        $('#nombres').val('')
        $('#email').val('')
        $('#telefono').val('')
        $('#fechanacimiento').val('')
        $('#ciudad').val('')
        $('#mensaje').val('')
    })
    .catch(function(err) {console.error(err)})
})

