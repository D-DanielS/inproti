
$('#buttonSend').on('click', function(e){
    e.preventDefault()
    var nombres = $('#nombres').val()
    var curso = $('#curso').val()
    var telefono = $('#telefono').val()
    var email = $('#email').val()
    var data = {
        to: 'contactenos@yes.edu.co',
        name: nombres,
        email: email,
        subject: 'Empieza a estudiar inglés o francés',
        from: 'contactenos@yes.edu.co',
        phone: telefono,
        template: `<div>
            <h1>Usted recibió una solicitud para iniciar un curso.</h1>
            <p><strong>Nombre:</strong> ${nombres}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>curso:</strong> ${curso}</p>
            <p><strong>Teléfono:</strong> ${telefono}</p>
        </div>`
    }
    axios.post('http://138.197.16.248:5001/sendmail', data)
    .then(function(res) {
        console.log(res);
        $('#nombres').val('')
        $('#email').val('')
        $('#telefono').val('')
        $('#curso').val('')
    })
    .catch(function(err) {console.error(err)})
})

