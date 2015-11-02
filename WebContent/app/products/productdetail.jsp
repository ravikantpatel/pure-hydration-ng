<%@page import="com.hydration.common.Constants"%>
<% String context = request.getContextPath(); %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta name="viewport" http-equiv="Content-Type"  content="text/html; charset=utf-8; width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0; " />
<title>Hydrate My Company</title>

<jsp:include page="/WEB-INF/jsp/common/include.jsp"></jsp:include>

</head>

<body>

<jsp:include page="/WEB-INF/jsp/common/header.jsp"></jsp:include>

<jsp:include page="/WEB-INF/jsp/common/menu.jsp"></jsp:include>

<div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">			
	<div class="row">
		<ol class="breadcrumb">
			<li><a href="#"><span class="glyphicon glyphicon-home"></span></a></li>
			<c:choose>
			<c:when test="${productDetail.productId ne null}">
			<li class="active">Manage Resources / Products / Edit Product</li>
			</c:when>
			<c:otherwise>
			<li class="active">Manage Resources / Products / Add Product</li>
			</c:otherwise>
			</c:choose>
			
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
				<c:choose>
				<c:when test="${productDetail.productId ne null}">
				<div class="panel-heading">${productDetail.productName} - Edit Product</div>
				</c:when>
				<c:otherwise>
				<div class="panel-heading">New Product</div>
				</c:otherwise>
				</c:choose>
				<div class="panel-body">
				<form name="productDetail" id="productDetail" action="createUpdateProduct.do" method="post" enctype="multipart/form-data">
<%-- 					<c:if test="${message ne null}"> --%>
<%-- 						<div class="form-group" style="color: green;">${message}</div> --%>
<%-- 					</c:if> --%>
					<div id="divError" class="form-group" style="color: red;"></div>
					<div id="divMessage" class="form-group" style="color: green;"></div>
						
					<div class="col-md-6">
						
							<div class="form-group">
								<label>Name</label><label style="color: red;">*</label>
								<input type="hidden" id="productId" name="productId" value="${productDetail.productId}"/>
								<input type="text" id="productName" name="productName" tabindex="1" class="form-control" maxlength="75" value="${productDetail.productName}"/>
							</div>
															
							<div class="form-group">
								<label>Description</label><label style="color: red;">*</label>
								<input type="text" id="description" name="description" tabindex="2" class="form-control" maxlength="150" value="${productDetail.description}"/>
							</div>
                               
                            <c:choose>
							<c:when test="${productDetail.productId ne null}">
                            <button id="submit" type="submit" class="btn btn-primary" tabindex="6" onclick="return addUpdateProduct();">Update</button>
                            </c:when>
                            <c:otherwise>
                            <button id="submit" type="submit" class="btn btn-primary" tabindex="6" onclick="return addUpdateProduct();">Add</button>
                            </c:otherwise>
                            </c:choose>
                            <button type="reset" class="btn btn-default" tabindex="7">Reset</button>
                            <c:if test="${productDetail.productId ne null}">
                            <a href="deleteProduct.do?productId=${productDetail.productId}" class="btn btn-danger" tabindex="8" id="deleteProduct" name="deleteProduct">Delete Product</a>
                            </c:if>
						</div>
						<div class="col-md-6">
								<div class="form-group">
								<label>Product Image</label><label style="color: red;">*</label>
								<c:if test="${productImageUrl ne null}">
                                   <p><img src="${productImageUrl}" width="50%" /></p>
                                   </c:if>
								   <input type="file" id="image" name="image" tabindex="3" />
								   <p class="help-block">Image size: 416px wide by 107px high</p>
								</div>
						</div>
					</form>
				</div>
			</div>
		</div><!-- /.col-->
	</div><!-- /.row -->
</div><!--/.main-->

<script type="text/javascript">
<!--
setActiveMenu('superAdminManageResources');

function addUpdateProduct()
{
	
	var logo = document.getElementsByName('image');
	var fileName;
	
	if($('#productName').val()==''){
		$('#divError').css('display','block');
		$('#divError').html('Please enter mandatory fields.');
		$('#divMessage').css('display','none');
		$('#productName').css('border-color', 'red');
		return false;
	}else{
		$('#productName').css('border-color', '');
		$('#divError').css('display','none');
	}
	
	if($('#description').val()==''){
		$('#divError').css('display','block');
		$('#divError').html('Please enter mandatory fields.');
		$('#divMessage').css('display','none');
		$('#description').css('border-color', 'red');
		return false;
	}else{
		$('#description').css('border-color', '');
		$('#divError').css('display','none');
	}

        if($('#productId').val()==''){
	        if($('#image').val()==''){
		        $('#divError').css('display','block');
		        $('#divError').html('Please select product image.');
		        $('#divMessage').css('display','none');
		        $('#image').css('border', '1px solid red');
		        return false;
	        }else{
	    		$('#image').css('border', '0px solid red');
	    		$('#divError').css('display','none');
	    	}
	}	

	if(logo!=null) {
		fileName=logo.value;
		fileName=fileName.substring(fileName.lastIndexOf('\\') + 1);
		
		if(fileName=='')
	    {
			$('#divError').css('display','block');
			$('#divError').html('Please select image.');	
			$('#divMessage').css('display','none');
			return false;
	    }
		var ext = fileName.substring(fileName.lastIndexOf('.') + 1);
	    if(!(ext=='jpg' || ext=='JPG' || ext=='jpeg' || ext=='JPEG' || ext=='png' || ext=='PNG'))
	    {
	    	$('#divError').css('display','block');
	    	$('#divError').html('Only JPEG or PNG file can be uploaded.');
	    	$('#divMessage').css('display','none');
			return false;
	    }
	    if(!isValidFileName(fileName)){
	    	$('#divError').css('display','block');
	    	$('#divError').html('Image File Name should not contain space or special characters.');
	    	$('#divMessage').css('display','none');
			return false;
	    }
	    if(Number(logo[i].files[0].size) > Number('<%=Constants.MAX_FILE_UPLOAD_SIZE_VALUE%>')){
	    	$('#divError').css('display','block');
	    	$('#divError').html('Image file should not be greater than 100MB.');
	    	$('#divMessage').css('display','none');
			return false;
	    }
		
	}
    return true;
}
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
$('#divMessage').html('${message}');
//-->
</script>
</c:if>
</body>
</html>