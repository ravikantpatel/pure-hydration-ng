<% String context = request.getContextPath(); %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta name="viewport" http-equiv="Content-Type"  content="text/html; charset=utf-8; width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0; " />
<title>Hydrate My Company - Dashboard</title>

<jsp:include page="/WEB-INF/jsp/common/include.jsp"></jsp:include>
<script src="<%=context%>/resources/js/jquery-loader.js"></script>
<link rel="stylesheet" href="<%=context%>/resources/css/remodal.css"/>
<link rel="stylesheet" href="<%=context%>/resources/css/remodal-default-theme.css"/>
<script src="<%=context%>/resources/js/remodal.js"></script>
<script src="<%=context%>/resources/js/remodal_test.js"></script>

</head>

<body>

<jsp:include page="/WEB-INF/jsp/common/header.jsp"></jsp:include>

<jsp:include page="/WEB-INF/jsp/common/menu.jsp"></jsp:include>

<div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">			
	<div class="row">
		<ol class="breadcrumb">
			<li><a href="companyUserDashboard.do"><span class="glyphicon glyphicon-home"></span></a></li>
			<li class="active">Dashboard</li>
		</ol>
	</div><!--/.row-->
	
	<div class="row">
		<div class="col-lg-12">
			&nbsp;
		</div>
	</div><!--/.row-->
       
    <div class="row">
		<div class="col-lg-12">
			<div class="alert bg-primary" role="alert">
				<span class="glyphicon glyphicon-info-sign"></span> Welcome to the Client Portal! See this <a href="#" data-remodal-target="videoModal">Video Tutorial</a> to get started! <a href="#" class="pull-right" data-dismiss="alert"><span class="glyphicon glyphicon-remove"></span></a>
				<p><a href="#" data-remodal-target="modal" id="test"></a></p>
				<p><a href="#" data-remodal-target="modalWarning" id="modalWarning"></a></p>
			</div>
		</div>
	</div><!--/.row-->
	<div class="row">
		<div class="col-md-6">
			<div class="panel panel-blue panel-widget ">
				<div class="row no-padding">
					<div class="col-sm-3 col-lg-5 widget-left">
						<em class="glyphicon glyphicon-tint glyphicon-l"></em>
					</div>
					<div class="col-sm-9 col-lg-7 widget-right">
						<div class="large">${totalUserWaterLogged} ${liquidUnit}</div>
						<div class="text-muted">Water Logged Today (<a href="loadWaterIntake.do">add</a>)</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="col-md-6">
			<div class="panel panel-red panel-widget">
				<div class="row no-padding">
					<div class="col-sm-3 col-lg-5 widget-left">
						<em class="glyphicon glyphicon-stats glyphicon-l"></em>
					</div>
					<div class="col-sm-9 col-lg-7 widget-right">
						<div class="large">${goalAchievedInMonth}</div>
						<div class="text-muted">Goals Achieved This Month</div>
					</div>
				</div>
			</div>
		</div>
	</div><!--/.row-->
		
	<div class="row">
		<div class="col-md-8">
		
			<div class="panel panel-default">
				<div class="panel-heading">My Water Intake History (<a href="actualVsGoalDetailReport.do">actual vs goal</a>)</div>
				<div class="panel-body">
					<div class="canvas-wrapper">
						<canvas class="main-chart" id="waterIntakeHistoryChart" height="200" width="600"></canvas>
					</div>
				</div>
			</div>
			
		</div><!--/.col-->
		
		<div class="col-md-4">
		
			<div class="panel panel-blue">
				<div class="panel-heading dark-overlay"><span class="glyphicon glyphicon-user"></span>Top 5 Users</div>
				<div class="panel-body">
					<ul class="todo-list">
					<c:forEach var="user" items="${top5CompanyUser}">
					<li class="todo-list-item">
						<div class="checkbox">
							<c:choose>
							<c:when test="${user[1] eq userId}">
							<strong>Me</strong>
							</c:when>
							<c:otherwise>
							${user[2]} ${user[3]}
							</c:otherwise>
							</c:choose>
						</div>
					</li>
					</c:forEach>
					<c:if test="${userRank ne null and userRank gt 0}">
					<li class="todo-list-item">
						<div class="checkbox">
							<strong>${userRank}. Me</strong>
						</div>
					</li>
					</c:if>
					</ul>
				</div>
				
			</div>
						
		</div><!--/.col-->
	</div>
</div><!--/.main-->
<div class="remodal" data-remodal-id="modal" data-remodal-options="closeOnEscape: false , closeOnOutsideClick: false" style="width:40% !important;">
<!--   						<a id="close" data-remodal-action="close" class="remodal-close"></a> -->
  						<form id="myform" method="post" action="addBluePrintDetails.do">
							<div class="row">
								<div class="login-panel panel panel-default">
									<div align="left" class="panel-heading">21 Day Blue Print</div>
									<input type="hidden" id="bluePrintId" name="bluePrintId" value="${bluePrint.bluePrintId}"/>
									<input type="hidden" id="totalInputs" name="totalInputs" value="0"/>
									<div class="panel-body">
									<div align="left" style="font-weight: bold;">Day ${bluePrint.day} of 21</div>
										<fieldset>
<!-- 										<div align="left" id="error1" class="form-group" style="color: red;"> -->
<%-- 										<c:if test="${error1 ne null}"> --%>
<%-- 											${error1} --%>
<%-- 										</c:if> --%>
<!-- 										</div> -->

<!-- 										<div align="left" id="message1" class="form-group" style="color: green;"> -->
<%-- 										<c:if test="${message1 ne null}"> --%>
<%-- 											${message1} --%>
<%-- 										</c:if> --%>
<!-- 										</div> -->
										
<%-- 										<div align="left" class="form-group">${bluePrint.description}</div> --%>
										<div class="form-group" id="myDiv"></div>
<!-- 										<div class="form-group"> -->
<!-- 											<input id="input0" name="input0" class="form-control" type="text" maxlength="75" autofocus/> -->
<!-- 										</div> -->
										<table width="100%" border="0" cellpadding="0" cellspacing="0">
											<tr>
        										<td align="left" valign="middle">
        										<input id="send" type="submit" value="Submit" class="left mrg_left_70 btn btn-primary" />
        										<input id="cancel" type="submit" value="cancel" class="left btn" />
<!--         										<input data-remodal-action="cancel" id="cancel" type="reset" class="left btn" value="Cancel"/> -->
        										</td>
      										</tr>						
      									</table>
										</fieldset>
									</div>
								</div>
							</div><!-- /.row -->
							</form>
					</div><!--  -->
					
<div class="remodal" data-remodal-id="videoModal" data-remodal-options="closeOnEscape: false , closeOnOutsideClick: false" style="
    background-color: transparent;">
	<a id="close" href="companyUserDashboard.do" class="remodal-close" style="top:13px !important;left:47px !important;"></a>
	<iframe width="560" height="315" src="https://www.youtube.com/embed/NIYcjACYNzI" frameborder="0" allowfullscreen></iframe>
</div><!--  -->

<div class="remodal" data-remodal-id="modalWarning" data-remodal-options="closeOnEscape: true , closeOnOutsideClick: true" style="
    background-color: transparent;">
	<form id="myform" method="post" action="requestResetPassword.do">
		<div class="row">
			<div class="login-panel panel panel-default">
				<div class="panel-body">
					<fieldset>
						<div align="left" id="message1" class="form-group">Set Weight, Activity Level, Weather/Temperature and Water intake goal fields from My Profile before adding Water log.<br/></div>
							<table width="100%" border="0" cellpadding="0" cellspacing="0">
								<tr>
        						<td align="left" valign="middle">
									<input data-remodal-action="cancel" id="cancel" type="reset" class="left mrg_left_70 btn btn-primary" value="Ok" align="left"/>
								</td>
								</tr>
							</table>
					</fieldset>
				</div>
			</div>
		</div><!-- /.row -->
	</form>
</div><!--  -->

<script type="text/javascript">

$(function(){
	if('${warning}'=='waterLog'){
		$('#modalWarning').click();
	}
	if('${day}'!=""){
		$('#test').click();
		var ni = document.getElementById('myDiv');
		var newdiv = document.createElement('div');
		newdiv.setAttribute('id','test');
		newdiv.setAttribute('class','form-group');
		newdiv.setAttribute('align','left');
		var descriptionArray='${bluePrint.description}'.split("<br/>");
		var length=descriptionArray.length;
		var i;
		var innerHtmlString;
		innerHtmlString='<table>'
		for(i=0;i<length;i++)
		{
			if(length==1){
				innerHtmlString+=descriptionArray[i];
			}else{
				innerHtmlString+='<tr><td width="80%">';
				innerHtmlString+=descriptionArray[i]+'&nbsp;&nbsp;&nbsp;&nbsp;';
				innerHtmlString+='</td><td width="20%">';
				if(descriptionArray[i]!=''){
					innerHtmlString+='<input id=\'input'+i+'\' name=\'input'+i+'\' type=\'radio\' value=\'yes\'/>Yes &nbsp;<input id=\'input'+i+'\' name=\'input'+i+'\' type=\'radio\' value=\'no\'/>No<br/>';
// 					newdiv.innerHTML+='<input id=\'input'+i+'\' name=\'input'+i+'\' class=\'form-control\' type=\'text\' maxlength=\'75\' />';
					$('#totalInputs').val(i+1);
				}
				innerHtmlString+='</td><tr>';
			}
		}
		innerHtmlString+='</table>'
		newdiv.innerHTML=innerHtmlString;
		ni.appendChild(newdiv);
	}
});

<!--
setActiveMenu('companyUserDashboard');

var chartLabel=new Array();
var actualData=new Array();
var goalData=new Array();
'<c:forEach var="history" items="${waterIntakeHistory}" varStatus="counter">';
chartLabel['${counter.index}']='${history[0]}';
actualData['${counter.index}']='${history[1]}';
goalData['${counter.index}']='${history[2]}';
'</c:forEach>';

var waterIntakeHistoryChartData = {
		
		labels : chartLabel,
		datasets : [
			{
				label: "User water intake",
				fillColor : "rgba(48, 164, 255, 0.2)",
				strokeColor : "rgba(48, 164, 255, 1)",
				pointColor : "rgba(48, 164, 255, 1)",
				pointStrokeColor : "#fff",
				pointHighlightFill : "#fff",
				pointHighlightStroke : "rgba(48, 164, 255, 1)",
				data : actualData
			},
			{
				label: "User goal",
				fillColor : "rgba(220,220,220,0.2)",
				strokeColor : "rgba(220,220,220,1)",
				pointColor : "rgba(220,220,220,1)",
				pointStrokeColor : "#fff",
				pointHighlightFill : "#fff",
				pointHighlightStroke : "rgba(220,220,220,1)",
				data : goalData
			}
		]

	}
	
window.onload = function(){
	var chart1 = document.getElementById("waterIntakeHistoryChart").getContext("2d");
	window.myLine = new Chart(chart1).Line(waterIntakeHistoryChartData, {
		responsive: true
	});
};
//-->
</script>

</body>
</html>