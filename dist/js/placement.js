$('.items__respuesta').on('click',function(){
    $(this).siblings().removeClass('select-Answer');
    $(this).addClass('select-Answer');
    
})

function placement(valor){
	document.getElementById('placement__test').style.display=valor;
	$(document).on('keydown',function(e){
		if(e.which == 27){
			document.getElementById('placement__test').style.display="none";
		}
	});
}



$('#placementSend').on('click', function() {

    var answers = document.getElementsByClassName('select-Answer')
    var arrayAsk =[];
    var asks;
    for(i =0; i < answers.length; i++) {
        var answer = answers[i]
        if(answer.dataset.answer) {
            var ask = answer.parentNode.previousSibling.previousSibling.children[0].innerText 
            arrayAsk.push({
                question: ask
            })       
        }
    }
    console.log(arrayAsk.length)
    if(arrayAsk.length >= 0 && arrayAsk.length <= 11){

        console.log(arrayAsk.length)

        
        $('#resultado').html(arrayAsk.length);
        $('#nivel').text('Nivel Intro');

        
        

    }else if(arrayAsk.length >11 && arrayAsk.length <= 14){
        console.log(arrayAsk.length)

        $('#resultado').html(arrayAsk.length);
        $('#nivel').text('Nivel Básico');


    }else if(arrayAsk.length >14 && arrayAsk.length <= 17){
        console.log(arrayAsk.length)

        $('#resultado').html(arrayAsk.length);
        $('#nivel').text('Nivel Intermedio');

        

    }else if(arrayAsk.length >17 && arrayAsk.length <= 20){
        console.log(arrayAsk.length)

        $('#resultado').html(arrayAsk.length);
        $('#nivel').text('Nivel Avanzado');

        

    }else if(arrayAsk.length >20 && arrayAsk.length <= 25){
        console.log(arrayAsk.length)


        $('#resultado').html(arrayAsk.length);
        $('#nivel').text('Niveles Conversacionales');

    }
})




// $('#continuar').on('click', function(e){
//     e.preventDefault()

// })










$('#continuar').on('click', function(e){
    e.preventDefault()
    var nombres = $('#namept').val()
    var documento = $('#documentopt').val()
    var email = $('#emailpt').val()
    var telefono = $('#celularpt').val()

    var resultado = document.getElementById('resultado').innerHTML
    var nivel = document.getElementById('nivel').innerHTML
    var total = 25 ;

    var data = {
        to: 'contactenos@yes.edu.co',
        name: nombres,
        email: email,
        subject: 'Placement Test',
        from: 'contactenos@yes.edu.co',
        phone: telefono,
        template: `<div>
            <h1>Placement Test</h1>
            <p><strong>Nombre: </strong> ${nombres}</p>
            <p><strong>Documento: </strong> ${documento}</p>
            <p><strong>Email: </strong> ${email}</p>
            <p><strong>Teléfono: </strong> ${telefono}</p>

            <p><strong>Resultado: </strong> ${resultado} / ${total}</p>
            <p><strong>Nivel: </strong> ${nivel}</p>
            
        </div>`
    }
    axios.post('http://138.197.16.248:5001/sendmail', data)
    .then(function(res) {
        console.log(res);
        $('#namept').val('')
        $('#emailpt').val('')
        $('#celularpt').val('')
        $('#documentopt').val('')
        // $('#placement__test').css({
        //     'display':  'none'
        // })
        
        $('#modaltest').addClass('pt-active')

        if($('#modaltest').hasClass('pt-active')){
            $('#placement__test').css({
                'display':  'none'
            })
            setTimeout(function(){
                $('#modaltest').removeClass('pt-active')
            },10000)
        }


    })
    .catch(function(err) {console.error(err)})
}) 