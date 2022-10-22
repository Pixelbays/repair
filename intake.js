//The page has finished loading
const element = document.getElementById("ticket-number");
$(document).ready(function ()
{
  if (element.textContent.includes('#15426')) {
    //Do a loop (for each checkbox)
  	$('input[type=checkbox]').each(function ()
  		{
        		//Check if the box is checked
        		var x = $(this).is(':checked');

        		//Get the option name
        		var option = $(this).val();

             	//if checkbox is checked
        		if(x === true)
              	{
                 		//Do something if the box is checked
                    	alert(option+" is checked");
             		}
        		//if checkbox is NOT checked
        		else
                	{
                 		//Do something if the box is not checked
                    	alert(option+" is not checked");

                    	//Hide the choice
                    	$(this).parent().hide();
             		}
  		});
  }

})
