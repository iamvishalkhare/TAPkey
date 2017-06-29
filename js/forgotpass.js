function forgotpass()
{
	document.getElementById("forgot_display").innerHTML = '<img src="http://localhost/dashboard/tapkey/img/ring.gif">';
	//document.getElementById("error_display").innerHTML = '<img src="http://scanitjsr.org/tapkey/tapkey/img/ring.gif">';
	var id = document.getElementById("rgn").value;      //fetching value in E-Mail Field
	if(id.length==0)                      //if stuid or password is empty
	{
		document.getElementById("forgot_display").innerHTML = '<div><div class="alert alert-danger fade in"><a href="#" class="close" data-dismiss="alert" aria-label="close">&#215;</a><strong>Registration Number</strong> can not be empty  </div></div>';
	}
	else if (id.length<10 || id.substring(0,2) != 20 || !isNaN(id.substring(4,6)))    //checking if stuid is in correct format or not
	{
		document.getElementById("forgot_display").innerHTML = '<div><div class="alert alert-danger fade in"><a href="#" class="close" data-dismiss="alert" aria-label="close">&#215;</a>Please Provide a valid Registration Number</div></div>';
	}
	else                                                     //if front-end validation of both fields is OK. Move to backend validation i.e. check if stuid and password are correct or not.
	{
		forgotpassCheckDB();
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
function forgotpassCheckDB()
{
	if(xmlHttp.readyState==0 || xmlHttp.readyState==4)     						  //If object state is either 0 OR 4 i.e. object not engaged otherwise.
	{
		
		var id = document.getElementById("rgn").value.toUpperCase();    // Reading from User
		var url = "http://localhost/dashboard/tapkey/php/forgotpass.php?id="+id;  //Sending Data to php script for validation
		//var url = "http://" + document.domain + "/tapkey/tapkey/php/forgotpass.php?id="+id;  //Sending Data to php script for validation
		xmlHttp.open("GET",url, true);                                            //Preparing to send request
		xmlHttp.onreadystatechange = handleServerResponseForgotPass;                   //Handling response that will come from php script
		xmlHttp.send(null);                                                       //sending values to php script
	}
	else
	{
		setTimeout('forgotpassCheckDB()', 1000);                                     //If reasyState is NOT 0 or 4 then repeat then wait and check again after 1 second.
	}
}
function handleServerResponseForgotPass()
{
	if(xmlHttp.readyState==4 || xmlHttp.readyState==0)                              //If object state is either 0 OR 4 i.e. object not engaged otherwise.
	{
		if(xmlHttp.status==200)                                                   //status 200 means everything went OK
		{
			if(xmlHttp.responseText.indexOf("stuidnotexist")==0)
			{
				document.getElementById("forgot_display").innerHTML = '<div><div class="alert alert-danger fade in"><a href="#" class="close" data-dismiss="alert" aria-label="close">&#215;</a>The Registration Number you have entered does not match any account. <b>Please Contact Administrator</b></div></div>';
			}
			else if(xmlHttp.responseText.indexOf("noemail")==0)
			{
				document.getElementById("forgot_display").innerHTML = '<div><div class="alert alert-danger fade in"><a href="#" class="close" data-dismiss="alert" aria-label="close">&#215;</a>You haven\'t entered your E-Mail Address yet. Reset password cannot be sent to you. <b>Please Contact Administrator</b></div></div>';
			}
			else if(xmlHttp.responseText.indexOf("success")==0)
			{
				document.getElementById("forgot_display").innerHTML = '<div><div class="alert alert-success fade in"><a href="#" class="close" data-dismiss="alert" aria-label="close">&#215;</a>Your Password was successfully reset and sent to your E-Mail</b></div></div>';
			}
			else if(xmlHttp.responseText.indexOf("error")==0)
			{
				document.getElementById("forgot_display").innerHTML = '<div><div class="alert alert-danger fade in"><a href="#" class="close" data-dismiss="alert" aria-label="close">&#215;</a>An Error Occured.<b> Please Contact Administrator.</b></div></div>';
			}
			else if(xmlHttp.responseText.indexOf("mailfailed")==0)
			{
				document.getElementById("forgot_display").innerHTML = '<div><div class="alert alert-danger fade in"><a href="#" class="close" data-dismiss="alert" aria-label="close">&#215;</a>Password cannot be reset at the moment. <b>Please Contact Administrator</b></div></div>';
			}
			else
			{
				document.getElementById("forgot_display").innerHTML = xmlHttp.responseText;
			}
		}
		else
		{
			alert(xmlHttp.status);
		}
	}
}