// function modalIndex(valor){
// 	document.getElementById('modalindex').style.display=valor;
// 	$(document).on('keydown',function(e){
// 		if(e.which == 27){
// 			document.getElementById('modalindex').style.display="none";
// 		}
// 	});
// }

function modalTime() {
    (function(document, window, $){
        document.addEventListener('keydown',function(e) {
            if (e.which === 27) {
                console.log(e.which)
                // removeModal();
                $('#modalindex').css({
    
                    'display': 'none'
                });
            
            }
        });


        function removeModal() {
            $('#modalindex').css({
                'display': 'none'
            });
        }

        var closeX = document.getElementById('cerrarindex');
        closeX.addEventListener('click',function(){
            removeModal();
        });
        setTimeout(function() {
            $('#modalindex').css({
                'display': 'none'
            });

        },20000);
    })(document, window, jQuery);


}

modalTime();


