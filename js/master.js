// JavaScript Document





(function(){
	$('.thumbInfo img').on('click', function(){ 
		$.getJSON('includes/ajax.php', function(data){
		console.log(data);
		//console.log(this);
		
		$('.modelName').text(data.modelName); 
		$('.priceInfo').text(data.pricing);
        $('.modelDetails').text(data.modelDetails); 
		
		});
	});
		

})();