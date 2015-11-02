<div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">			
	<div class="row">
		<ol class="breadcrumb">
			<li><a href="companyAdminDashboard.do"><span class="glyphicon glyphicon-home"></span></a></li>
			<li class="active">Reports / Actual vs Goal</li>
		</ol>
	</div><!--/.row-->
	
	<div class="row">
		<div class="col-lg-12">
			&nbsp;
		</div>
	</div><!--/.row-->
			
	
	<div class="row">
		<div class="col-lg-12">
			<div class="panel panel-default">
				<div class="panel-heading">Actual vs Goal <a href="exportActualVsGoalAdminReportToExcel.do?fromDate=${fromDate}&toDate=${toDate}" class="btn btn-default">Export</a></div>
				<div class="col-md-8">
					
					<form class="form-inline" name="actualVsGoalDetail" id="actualVsGoalDetail" action="actualVsGoalDetailAdminReport.do" method="post">
					<div class="form-group">
						<label>Date Range</label>
						<input type="text" value="" id="fromDate" tabindex="1" name="fromDate" class="form-control" style="width:200px;" value="${fromDate}"/>
					</div>
					<div class="form-group">
						<input type="text" value="" id="toDate" tabindex="2" name="toDate" class="form-control" style="width:200px;" value="${toDate}"/>
					</div>
					<div class="form-group">
						<a href="javascript:void(0)" class="btn btn-primary" onclick="getReportDetail();" style="float:right;">Submit</a>
					</div>
					</form>
					
				</div>
				<div class="col-md-8">
					<div id="divError" class="form-group" style="color: red;"></div>
					<div id="divMessage" class="form-group" style="color: green;"></div>
				</div>
				<div class="panel-body">
					<table id="actualVsGoalDetailTable" data-search="true" data-pagination="true" data-show-refresh="false"
						data-show-toggle="false" data-show-columns="false"
						data-search="true">
						<thead>
							<tr>
								<th data-field="name" data-sortable="true">Name</th>
								<th data-field="department" data-sortable="true">Department</th>
								<th data-field="location" data-sortable="true">Location</th>
								<th data-field="group" data-sortable="true">Group</th>
								<th data-field="gender" data-sortable="true">Gender</th>
								<th data-field="waterIntake" data-sortable="true">Amount Logged (${liquidUnit})</th>
								<th data-field="goal" data-sortable="true">Goal (${liquidUnit})</th>
								<th data-field="date" data-sortable="true">Date Time</th>
							</tr>
						</thead>
						
					</table>
				</div>
			</div>
		</div>
	</div><!--/.row-->	
	
</div><!--/.main-->

<script type="text/javascript">
<!--
setActiveMenu('companyAdminDashboard');

$( document ).ready(function() {
	getRows = function () {
		var rows = [];
		'<c:if test="${!empty userWaterIntakeList}">';
		'<c:forEach var="waterIntake" items="${userWaterIntakeList}">';
		rows.push({
			name:'${waterIntake.firstName}',
			department:'${waterIntake.departmentName}',
			location:'${waterIntake.locationName}',
			group:'${waterIntake.groupName}',
			gender:'${waterIntake.gender}',
			waterIntake: '${waterIntake.waterIntake}',
			goal: '${waterIntake.goal}',
			date: '<fmt:formatDate pattern="MM/dd/yyyy HH:mm a" value="${waterIntake.dateTime}" />'
        });
		'</c:forEach>';
		'</c:if>';
		
		return rows;
	};
	
	$table = $('#actualVsGoalDetailTable').bootstrapTable({
    	data: getRows()
    });
});

$('#fromDate').datetimepicker({
	dayOfWeekStart : 1,
	lang:'en',
	timepicker:false,
	format:'m/d/Y',
	value:'${fromDate}'
});
$('#toDate').datetimepicker({
	dayOfWeekStart : 1,
	lang:'en',
	timepicker:false,
	format:'m/d/Y',
	value:'${toDate}'
});
	
function getReportDetail() {
	if($('#fromDate').val()!='' && $('#toDate')!=null) {
		document.getElementById('actualVsGoalDetail').submit();
	} else {
		$('#divError').css('display','block');
		$('#divError').html('Please select Date Range.');
	}
}
//-->
</script>
<c:if test="${error ne null }">
<script type="text/javascript">
<!--
$('#divError').css('display','block');
$('#divError').html('${error}');
//-->
</script>
</c:if>

<c:if test="${paramValues.error[0] ne null }">
<script type="text/javascript">
<!--
$('#divError').css('display','block');
$('#divError').html('${error}');
//-->
</script>
</c:if>

<c:if test="${message ne null }">
<script type="text/javascript">
<!--
$('#divMessage').css('display','block');
$('#divMessage').html('${message}');
//-->
</script>
</c:if>

<c:if test="${paramValues.message[0] ne null }">
<script type="text/javascript">
<!--
$('#divMessage').css('display','block');
$('#divMessage').html('${paramValues.message[0]}');
//-->
</script>
</c:if>
</body>
</html>