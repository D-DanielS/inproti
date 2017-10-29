function formModal(valor){
	document.getElementById('modal').style.display=valor;
	$(document).on('keydown',function(e){
		if(e.which == 27){
			document.getElementById('modal').style.display="none";
		}
	});
}

function claseDemo(valor){
	document.getElementById('classdemo').style.display=valor;
	$(document).on('keydown',function(e){
		if(e.which == 27){
			document.getElementById('classdemo').style.display="none";
		}
	});
}

function yfactorModal(valor){
	document.getElementById('modalYF').style.display=valor;
	$(document).on('keydown',function(e){
		if(e.which == 27){
			document.getElementById('modalYF').style.display="none";
		}
	});
}



