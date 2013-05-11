$(function(){

	/*Function hide and show all block .block */
	$('.toggle_block').click(function(event){
		var toggle_button = $(this);
		var block = toggle_button.parent().parent();
		block.children('.content').slideToggle(400, function(){
			if(block.children('.content').is(":visible")){
				toggle_button.children('i').removeClass().addClass('icon-up-circle');
			}else{
				toggle_button.children('i').removeClass().addClass('icon-down-circle');
			}
		});
		return false;
	});

});