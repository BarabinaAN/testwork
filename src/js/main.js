$(function() {

	var defaultClass = $('.default'),
			disabledClass = $('.disabled'),
			buy = $('.buy');
	

	defaultClass.on('click', function(event) {
		event.preventDefault();
		var selected = $(this).parents('.wrap');
		var info = $(this).children('.main-content__info');

		selected.children('.main-action').toggleClass('hide');
		$(this).toggleClass('selected');

		if ($(this).hasClass('selected')) {
			$(this).hover(
				function(){
					info.children('.selected-color').hide();
					info.children('.default-color').show();
				  $(this).removeClass('selected--hover');
				},
				function(){
					info.children('.selected-color').css('color', '#e52e7a');								
					info.children('.selected-color').show();
					info.children('.default-color').hide();
				  $(this).addClass('selected--hover');
			});		
		}
		else {
			$(this).hover(
				function(){
				  $(this).removeClass('default--hover');
				},
				function(){
					info.children('.default-color').show();
					info.children('.selected-color').hide();
					$(this).removeClass('selected--hover');
				  $(this).addClass('default--hover');
			});	
		}

	});

	buy.on('click', function(event) {
		event.preventDefault();
		var selected = $(this).parents('.wrap');

		selected.children('.main-action').toggleClass('hide');
		selected = selected.children('.default').toggleClass('selected');

			if ($(selected).hasClass('selected')) {
				var info = $(selected).children('.main-content__info');
				$(selected).hover(
					function(){
						info.children('.selected-color').hide();
						info.children('.default-color').show();
					  $(selected).removeClass('selected--hover');
					},
					function(){
						info.children('.selected-color').show();
						info.children('.selected-color').css('color', '#e52e7a');
						info.children('.default-color').hide();
					  $(selected).addClass('selected--hover');
				});		
			}

	});

	var disabledShow = disabledClass.parents('.wrap').children('.main-action');
	if ($('.wrap').has('.disabled')) {			
			disabledShow.children('.default-color').addClass('hide');
			disabledShow.children('.disabled-color').removeClass('hide');
	}

});