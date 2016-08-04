//Fonction qui permet de dégager les zones sans bombes
//Si la case est 0, et que d'autres autour aussi, va explorer.
function explodeZeros(cell){

	var col = parseInt(cell.attr('class').match(/\bcol(\d+)\b/)[1]);		//Récupère le n° de colonne
	var row = parseInt(cell.attr('class').match(/\brow(\d+)\b/)[1]);		//Récupère le n° de ligne
	
	//Sélection des cases autour
	var selectors = [
		'.col'+(col-1)+'.row'+(row-1),
		'.col'+col+'.row'+(row-1),
		'.col'+(col+1)+'.row'+(row-1),
		'.col'+(col-1)+'.row'+row,
		'.col'+(col+1)+'.row'+row,
		'.col'+(col-1)+'.row'+(row+1),
		'.col'+col+'.row'+(row+1),
		'.col'+(col+1)+'.row'+(row+1)
	];
	
	//Pour chacune des cases
	$.each(selectors, function(key){
		
		//Prend le sélecteur concerné
		var current_cell = $(selectors[key]);
		
		//Si le texte indique 0 ET que la case est cachée, alors on enlève la classe "cache" et on rappelle la méthode
		//On s'arrête lorsqu'on trouve autre chose que 0
		if(current_cell.text() == "0" && current_cell.hasClass('cache')){
			current_cell.removeClass('cache');
			explodeZeros(current_cell);
		} else {
			current_cell.removeClass('cache');		
		}		
	});
}  