function setState(countryId, stateId) {
	if($('#'+countryId).val()!='') {
		$.ajax( {
			type: "post",
			url : 'getStateList.do',
			cache: false,
			data : 'countryId='+$('#'+countryId).val(),
			success : function(returndata) {
				response = eval('(' + returndata + ')');
				if(response.stateList)
				{
					$('#'+stateId).empty();
					$('#'+stateId).append($('<option>', {
					    value: '',
					    text: '--Select--'
					}));
					
					for (i=0; i<response.stateList.length; i++){
						var stateDtl=response.stateList[i].split(',');
						$('#'+stateId).append($('<option>', {
						    value: stateDtl[0].split('=')[1],
						    text: stateDtl[1].split('=')[1]
						}));
					}
				} else {
					alert(response.error);
				}
			},
			error:function() {
			}
	  	});
	} else {
		alert('Please select country.');
	}
}

function setCity(stateId, cityId) {
	if($('#'+stateId).val()!='') {
		$.ajax( {
			type: "post",
			url : 'getCityList.do',
			cache: false,
			data : 'stateId='+$('#'+stateId).val(),
			success : function(returndata) {
				response = eval('(' + returndata + ')');
				if(response.cityList)
				{
					$('#'+cityId).empty();
					$('#'+cityId).append($('<option>', {
					    value: '',
					    text: '--Select--'
					}));
					
					for (i=0; i<response.cityList.length; i++){
						var cityDtl=response.cityList[i].split(',');
						$('#'+cityId).append($('<option>', {
						    value: cityDtl[0].split('=')[1],
						    text: cityDtl[1].split('=')[1]
						}));
					}
				} else {
					alert(response.error);
				}
			},
			error:function() {
			}
	  	});
	} else {
		alert('Please select state.');
	}
}

function isValidFileName(fileName)
{
  if (!fileName || fileName=="") { return  true; }
  re1 = /[^0-9[^a-z-_.]/gi;
  if(fileName.search(re1) < 0)
  {
  	return true;
  }
  else
  {
  	return false;
  }
}

function validateEmailId(emailId){
	var filter=/^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
	if (filter.test(emailId))
		testresults=true;
	else{
		testresults=false;
	}
	return testresults;
}

function isValidName(name)
{
  if (!name || name=="") { return  true; }
  re1 = /[^0-9[^a-z-_ .]/gi;
  if(name.search(re1) < 0)
  {
  	return true;
  }
  else
  {
  	return false;
  }
  return (name.search(re1) < 0 ? true : false);
}