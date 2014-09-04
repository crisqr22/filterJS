$(document).on('ready', init)

function init() {


}


$("#btnsearch").on("click", search);

function search(){
	$('.render').empty();
	var articulos = $("article");
	var campana = $("#camp").val();
	var year = $("#year").val();
	var filtro = $("article").filter('[campana=' + campana +   ']' + '[ano=' + year +   ']' );
	articulos.sort();
	filtro.each(function(index, element){
		$('.render').append(element);
	});	
	$(".box").hide();
	return false;
}

function renderDatos(data) {
	console.log(data.titulo);
}

