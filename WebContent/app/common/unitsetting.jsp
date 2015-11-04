<%@page import="com.hydration.enity.Role"%>
<%@page import="com.hydration.enity.Unit"%>
<% String context = request.getContextPath(); %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<c:set var="superAdminRole" value="<%=Role.ROLE.getRoleValue(Role.ROLE.SUPER_ADMIN)%>"></c:set>
<c:set var="companyAdminRole" value="<%=Role.ROLE.getRoleValue(Role.ROLE.COMPANY_ADMIN)%>"></c:set>
<c:set var="companyUserRole" value="<%=Role.ROLE.getRoleValue(Role.ROLE.COMPANY_USER)%>"></c:set>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta name="viewport" http-equiv="Content-Type"  content="text/html; charset=utf-8; width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0; " />
<title>Hydrate My Company - Unit Settings</title>

<jsp:include page="/WEB-INF/jsp/common/include.jsp"></jsp:include>

</head>

<body>

<jsp:include page="/WEB-INF/jsp/common/header.jsp"></jsp:include>

<jsp:include page="/WEB-INF/jsp/common/menu.jsp"></jsp:include>

<div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">			
	<div class="row">
		<ol class="breadcrumb">
			<c:if test="${userRole eq superAdminRole}">
			<li><a href="superAdminDashboard.do"><span class="glyphicon glyphicon-home"></span></a></li>
			</c:if>
			<c:if test="${userRole eq companyAdminRole}">
			<li><a href="companyAdminDashboard"><span class="glyphicon glyphicon-home"></span></a></li>
			</c:if>
			<c:if test="${userRole eq companyUserRole}">
			<li><a href="companyUserDashboard.do"><span class="glyphicon glyphicon-home"></span></a></li>
			</c:if>
			<li class="active">Unit Settings</li>
		</ol>
	</div><!--/.row-->
	
	<div class="row">
		<div class="col-lg-12">
			&nbsp;
		</div>
	</div><!--/.row-->
	
	<!--  -->
	<div class="row">
		<div class="col-lg-12">
			<div class="panel panel-default">
				<div class="panel-heading">Unit Settings</div>
				<div class="panel-body">
				<form name="unitSettingDetail" id="unitSettingDetail" action="updateUnitSetting.do" method="post">
					<c:if test="${message ne null}">
						<div class="form-group" style="color: green;">${message}</div>
					</c:if>
					<div id="divError" class="form-group" style="color: red;"></div>
					<div id="divMessage" class="form-group" style="color: green;"></div>
						
					<div class="col-md-6">
						
						<div class="form-group">
								<label>Liquid</label>
								<select name="liquidUnit" id="liquidUnit" tabindex="1" class="form-control" style="width:200px;">
									<option value="<%=Unit.LIQUID_ML%>" ><%=Unit.LIQUID_ML%></option>
									<option value="<%=Unit.LIQUID_US_OZ%>"><%=Unit.LIQUID_US_OZ%></option>
									<option value="<%=Unit.LIQUID_UK_OZ%>"><%=Unit.LIQUID_UK_OZ%></option>
								</select>
								<script type="text/javascript">
								<!--
								$('#liquidUnit').val('${liquidUnit}');
								//-->
								</script>
							</div>
						
                            <button id="submit" type="submit" class="btn btn-primary" tabindex="3">Update</button>
                            <button type="reset" class="btn btn-default" tabindex="4">Reset</button>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label>Weight</label>
								<select name="weightUnit" id="weightUnit" tabindex="2" class="form-control" style="width:200px;">
									<option value="<%=Unit.WEIGHT_KG%>"><%=Unit.WEIGHT_KG%></option>
									<option value="<%=Unit.WEIGHT_LBS%>"><%=Unit.WEIGHT_LBS%></option>
								</select>
								<script type="text/javascript">
								<!--
								$('#weightUnit').val('${weightUnit}');
								//-->
								</script>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div><!-- /.col-->
	</div><!-- /.row -->
	<!--  -->
	
	
	</div><!--/.main -->
       

<c:if test="${userRole ne superAdminRole}">
<script type="text/javascript">
setActiveMenu('superAdminDashboard');
</script>
</c:if>
<c:if test="${userRole ne companyAdminRole}">
<script type="text/javascript">
setActiveMenu('companyAdminDashboard');
</script>
</c:if>
<c:if test="${userRole ne companyUserRole}">
<script type="text/javascript">
setActiveMenu('companyUserDashboard');
</script>
</c:if>

</body>
</html>