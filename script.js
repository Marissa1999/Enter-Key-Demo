$(document).ready(function()
{

   $(document).on("keypress", "#hello", function(enter)
   {
	   
        if(enter.which == 13)
		{
            var inputVal = $(this).val();
            console.log("You've entered: " + inputVal);
			alert("You've entered: " + inputVal);
        }
		
   });


});