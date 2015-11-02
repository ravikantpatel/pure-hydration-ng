
<%
	String context = request.getContextPath();
%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta name="viewport" http-equiv="Content-Type"
	content="text/html; charset=utf-8; width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0; " />
<title>Hydrate My Company - Manage Resources</title>

<jsp:include page="/WEB-INF/jsp/common/include.jsp"></jsp:include>
</head>
<body>
	<jsp:include page="/WEB-INF/jsp/common/header.jsp"></jsp:include>
	<jsp:include page="/WEB-INF/jsp/common/menu.jsp"></jsp:include>

	<div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
		<div class="row">
			<ol class="breadcrumb">
				<li><a href="#"><span class="glyphicon glyphicon-home"></span></a></li>
				<li class="active">Manage Resources / Products</li>
			</ol>
		</div>
		<!--/.row-->

		<div class="row">
			<div class="col-lg-12">&nbsp;</div>
		</div>
		<!--/.row-->

		<div class="row">
			<div class="col-lg-12">
				<div class="panel panel-default">
					<div class="panel-heading">
						Product List <a href="loadProductDetail.do"
							class="btn btn-primary">New</a>
					</div>
					<div class="panel-body">
					<div id="divError" class="form-group" style="color: red;"></div>
					<div id="divMessage" class="form-group" style="color: green;"></div>
						<table id="productListTable" data-search="true"
							data-pagination="true" data-show-refresh="false"
							data-show-toggle="false" data-show-columns="false"
							data-search="true" data-select-item-name="productId"
							data-sort-name="productId" data-sort-order="desc">
							<thead>
								<tr>
									<th data-field="productId" data-checkbox="true"
										class="bs-checkbox" style="width: 36px;"></th>
									<th data-field="productName" data-sortable="true">Product Name</th>
									<th data-field="description" data-sortable="true">Description</th>
									<th data-field="image" data-sortable="true">Image</th>
									<th data-field="link" data-sortable="false">Edit</th>
								</tr>
							</thead>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<script type="text/javascript">
	setActiveMenu('superAdminManageResources');
	
	$( document ).ready(function() {
		getRows = function () {
			var rows = [];
			'<c:if test="${!empty productDetailsList}">';
			'<c:forEach var="product" items="${productDetailsList}">';
			rows.push({
				productId: '${product.productId}',
				productName: '${product.productName}',
				description: '${product.description}',
				image: '<img src="/static/Product/${product.productId}_${product.image}" width="50%" style="height: 50px;width: 50px;">',
				link: '<form id="myform" method="post" action="loadProductDetail.do"><input type="hidden" name="productId" value="${product.productId}" /><a href="#" onclick="this.parentNode.submit()">Edit</a></form>'
            });
			'</c:forEach>';
			'</c:if>';
			
			return rows;
		};
		
		$table = $('#productListTable').bootstrapTable({
	    	data: getRows()
	    });
	});
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
$('#divMessage').html('${error}');
//-->
</script>
</c:if>
</body>
</html>