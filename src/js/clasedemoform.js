$('#buttoncoursesSend').on('click', function(e){
    e.preventDefault()
    var nombres = $('#nombreCompleto').val()
    var email = $('#email').val()
    var telefono = $('#celular').val()
    var mensaje = $('#mensaje').val()    
    var data = {
        to: 'contactenos@yes.edu.co',
        name: nombres,
        email: email,
        subject: 'Formulario de notificación clase demo sin costo',
        from: 'contacto@yes.edu.co',
        phone: telefono,
        template: `<div>
            <h1>Usted recibió una solicitud de contácto de clase demo sin costo.</h1>
            <p><strong>Nombre:</strong> ${nombres}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Teléfono:</strong> ${telefono}</p>
            <p><strong>curso:</strong> ${mensaje}</p>
        </div>`
    }
    axios.post('http://138.197.16.248:5001/sendmail', data)
    .then(function(res) {
        console.log(res);
        $('#nombreCompleto').val('')
        $('#email').val('')
        $('#celular').val('')
        $('#mensaje').val('')

    })
    .catch(function(err) {console.error(err)})
}) 

