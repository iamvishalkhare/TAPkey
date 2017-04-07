function resumefunc()
{
	document.getElementById("error_display3").innerHTML = '<img src="http://localhost/dashboard/TAPkey/img/ring.gif">';
	var x = document.getElementById("resume");
	if (typeof x.files[0] === 'undefined')
	{
		document.getElementById("error_display3").innerHTML = '<div><div class="alert alert-danger fade in"><a href="#" class="close" data-dismiss="alert" aria-label="close">&#215;</a>File toh select kr le.</div></div>';	
	}
	var ext = x.files[0].name.split(".");
	if (ext[1] != "pdf")
	{
		document.getElementById("error_display3").innerHTML = '<div><div class="alert alert-danger fade in"><a href="#" class="close" data-dismiss="alert" aria-label="close">&#215;</a>Oopss...!!! Seems like the file you have choosen is not a PDF file.</div></div>';	
	}
	else if (x.files[0].size > 2097152)
	{
		document.getElementById("error_display3").innerHTML = '<div><div class="alert alert-danger fade in"><a href="#" class="close" data-dismiss="alert" aria-label="close">&#215;</a>File is too Big. Please choose a file below 2 MB</div></div>';	
	}
	else if(x.files[0].size === 0)
	{
		document.getElementById("error_display3").innerHTML = '<div><div class="alert alert-danger fade in"><a href="#" class="close" data-dismiss="alert" aria-label="close">&#215;</a>Seems Like your doesn\'t contain any data. Please check and upload a valid resume. </div></div>';		
	}
    //document.getElementById("error_display3").innerHTML = x.files[0].name + "size" + x.files[0].size;
	else
	{
		//processCheckDBresume();
	}
}
var xmlHttp = createXmlHttpRequestObject();                  //Calling the function to vaidate input credentials
function createXmlHttpRequestObject()                        
{
	var xmlHttp;

	if(window.ActiveXObject)                                 //If user is using internet Explorer
	{
		try
		{
			xmlHttp = new ActiveXObject("Microsoft.xmlHttp");
		}
		catch(e)
		{
			xmlHttp=false;
		}
	}
	else                                                   //If user is NOT using internet Explorer but any other browser
	{
		try
		{
			xmlHttp = new XMLHttpRequest();
		}
		catch(e)
		{
			xmlHttp=false;
		}
	}

	if(!xmlHttp)                                           //If Object can not be initialized.
		{
			alert("Can not create object");
		}
	else
	{
		return xmlHttp;
	}
}

function processCheckDBresume()
{
	if(xmlHttp.readyState==0 || xmlHttp.readyState==4)     						  //If object state is either 0 OR 4 i.e. object not engaged otherwise.
	{
		
		var file = document.getElementById("resume");
		var url = "http://localhost/dashboard/TAPkey/php/uploadresume.php?file="+file;  //Sending Data to php script for validation
		xmlHttp.open("GET",url, true);                                            //Preparing to send request
		xmlHttp.onreadystatechange = handleServerResponseResume;                   //Handling response that will come from php script
		xmlHttp.send(null);                                                       //sending values to php script
	}
	else
	{
		setTimeout('processCheckDBresume()', 1000);                                     //If reasyState is NOT 0 or 4 then repeat then wait and check again after 1 second.
	}
}


function handleServerResponseResume()
{
	if(xmlHttp.readyState==4||xmlHttp.readyState==0)                              //If object state is either 0 OR 4 i.e. object not engaged otherwise.
	{
		if(xmlHttp.status==200)                                                   //status 200 means everything went OK
		{
			if(xmlHttp.responseText.indexOf("stuidnotexist")==0)
			{
				document.getElementById("error_display").innerHTML = '<div><div class="alert alert-danger fade in"><a href="#" class="close" data-dismiss="alert" aria-label="close">&#215;</a>The Registration Number you have entered does not match any account. <b>Please Contact Administrator</b></div></div>';
			}
			else if(xmlHttp.responseText.indexOf("wrongpassword")==0)
			{
				document.getElementById("error_display").innerHTML = '<div><div class="alert alert-danger fade in"><a href="#" class="close" data-dismiss="alert" aria-label="close">&#215;</a>Sorry..!!! Password you entered is wrong. <b>Please Contact Administrator</b></div></div>';
			}
			else if(xmlHttp.responseText.indexOf("authenticated")==0)
			{
				window.location = "http://localhost/dashboard/TAPkey/php/welcome.php"
			}
			else
			{
				document.getElementById("error_display").innerHTML = xmlHttp.responseText;
			}
		}
		else
		{
			alert("xmlHttp.status!=200");
		}
	}
}