function ck() {

	//*****************************************************************点击全选时
	$(".allCheckBox").click(function() {
		//alert()
		var flag = $(this).is(":checked");
		if (flag) { //复选全部
			//取消选中
			$(".allCheckBox").prop("checked", true);
			$(".selector").each(function() {
				//prop新特性 修改值1.6以上jQuery
				$(this).prop("checked", true)
			});
		} else if (!flag) {
			$(".allCheckBox").prop("checked", false);
			$(".selector").each(function() {
				$(this).prop("checked", false)
			});
		}
	});
	//**********************************************************点击商品单选取消全部
	$("tr").find(".selector").click(function() {
		//获取全部商品个数
		var len = $(".selector").length;

		//获得被选中的个数
		var checkLen = $("#saleList").find("input:checked").length;

		if (len == checkLen) {

			$(".allCheckBox").prop("checked", true);
		} else {
			$(".allCheckBox").prop("checked", false);
		}
	});
	$(".trbor").hover(
		function() {
			$(this).find(".edit-item-title").show();
			$(this).find(".item-price-area").css("background", "url(../statics/merchant/img/TB1xCFxGXXXXXXhXFXXAz6UFXXX-16-16.png)  right 0");
		},
		function() {
			$(this).find(".edit-item-title").hide();
			$(this).find(".item-price-area").css("background", "url() no-repeat right 0");

		}
	);


	//标题




	$(function(){
		$(document).bind('click', function(e) {
	        var e = e ; //浏览器兼容性   
	        var elem = e.target  ;
	        while (elem) { //循环判断至跟节点，防止点击的是div子元素  
        	
	        if (elem.id && elem.id =="a") {  
	            return;  
	        }  
	        elem = elem.parentNode;  
	        } 
	        
	  });
		
	}); 
}
//**************************************************************************增加商品
var massege = null;
	//**************************************************************************商品操作
	$(".delete").click(function() {
		//删除商品
		if (checkLen = $("#saleList").find("input:checked").length <= 0) {
			massege = "请选择商品再进行操作";
			mase();
		} else {
			if (confirm("确定要删除选择的商品吗?")) 
				red("del");
			
		}

	});
	//上架商品
	$(".shanja").click(function() {
		if (checkLen = $("#saleList").find("input:checked").length <= 0) {
			massege = "请选择商品再进行操作";
			mase();
		} else {
			red("shanja");
		}

	});
	
	$(".xiaja").click(function() {
		if (checkLen = $("#saleList").find("input:checked").length <= 0) {
			massege = "请选择商品再进行操作";
			mase();
		} else {
			red("xiaja");
		}

	});
	
	
ck();
mase();

function red(staut){
	 var arr = new Array();
     $(".selector:checkbox[checked]").each(function(i){
         arr[i] = $(this).val();
         
     });
    
    $.getJSON("comdityDel",$(".selector:checkbox[checked]").serialize()+"&staut="+staut,function(data){
    	if(data)
    		massege = "商品操作成功";
    	else
    		massege = "网络异常，请稍后再试";
		mase();
    })
     
    showDom(1);
	
}


function mase() {
	if (massege != null && massege != 0 && massege != "请选择商品再进行操作" || massege != "" && massege != 0 && massege != "请选择商品再进行操作") {
		$("#massege").stop().fadeIn().text("商品操作成功!");
	} else if (massege == "请选择商品再进行操作") {
		$("#massege").stop().fadeIn().text(massege);
	} else if (massege <= 0 && massege != "") {
		//$("#massege").stop().fadeIn().text("数据操作异常请确认");
	}
	massege = null;
	setTimeout(function() {
		$("#massege").stop().fadeOut();
	}, 3000);
}
//修改标题
function titleUpdate(titId, titleText) {
	$.ajax({
		url : "servlet/Commodity?operation=warehouse&opr=titleUpdate&currPageNo=" + myPage.currPageNo + "&operation=titleUpdate" + "&titId=" + titId + "&titleText=" + titleText,
		type : "post",
		dataType : "JSON",
		success : getlist,
		complete : ck
	});
}
//修改价格
function titlePrice(titId, titleText) {
	$.ajax({
		url : "servlet/Commodity?operation=warehouse&opr=titlePrice&currPageNo=" + myPage.currPageNo + "&operation=titlePrice" + "&titId=" + titId + "&titleText=" + titleText,
		type : "post",
		dataType : "JSON",
		success : getlist,
		complete : ck
	});
}
//修改库存
function titleNum(titId, titleText) {
	$.ajax({
		url : "servlet/Commodity?operation=warehouse&opr=titleNum&currPageNo=" + myPage.currPageNo + "&operation=titlePrice" + "&titId=" + titId + "&titleText=" + titleText,
		type : "post",
		dataType : "JSON",
		success : getlist,
		complete : ck
	});
}
function ckYes(id) {
	var texs = $("#newtextid" + id).val().trim();
	$("#newPri" + id).prevAll().show();
	$("#newPri" + id).hide();
	if (texs == "") return;
	titleUpdate(id, texs);
}
function numYees(id) {
	var texs = $("#nextPri" + id).val().trim();

	$("#newPri" + id).prevAll().show();
	$("#newPri" + id).hide();
	if (texs == "") return;
	titlePrice(id, texs);
//titleUpdate(id,texs);
}
function numYeesPri(id) {
	var texs = $("#nextNumTex" + id).val().trim();
	$("#newNum" + id).prevAll().show();
	$("#newNum" + id).hide();
	if (texs == "") return;
	titleNum(id, texs);
//titleUpdate(id,texs);
}





loadAll();


function lpl(){
	$("select[name=category]").html("<option value='0' selected=''>全部类目</option>");
	$.getJSON("merchandise",
			function(json){
				$.each(json, function(i, item) {
					var kl="<option value='"+item.cid+"'>"+item.mc+"/"+item.bc+"/"+item.cc+"</option>"
					$("select[name=category]").append(kl)
				})
	},"JSON")
	
}

lpl();
var TotalPageCount=null;
var pageNO=null;
var pages=null;
function loadAll(pageNo,product_name,outId,category,startPrice,endPrice,startNum,endNum,status,itemStepAudit) {
	//$("#saleList").html("");	category		
	$.getJSON("merchandise_in_warehouse", {
				"pageNow" : pageNo,"product_name":product_name,"outId":outId,
				"category":category,"startPrice":startPrice,"endPrice":endPrice,
				"startNum":startNum,"endNum":endNum,"status":status,"itemStepAudit":itemStepAudit
				}, function(json) {
					$("#saleList").html("");
					TotalPageCount=json.totol;
					pageNO=json.pageNum;
					pages=json.pages;
					fenye(pages,TotalPageCount,pageNO);
					$.each(json.list, function(index, itme) {
						var ok = "<tr  style='padding-left: 110px;    margin-top: 40px;'>" +
							"<td><input class='selector' type='checkbox'  name='selector'  value='" + itme.commodity_id + "' /></td>" +
							"</tr><tr class='trbor'  ><td class='item-title-are1'>" +
							//商品地址.edit-item-title
							"<a href=''><img src="
							+ itme.main_img + " class='commodity_table_div_tr_table_img'/></a></td>" +
							"<td class='item-title-area2'> <div class='item-title-area2_2'><p>" +
							"<a target='_blank' href=''' >" + //商品名称
							itme.title + "</a></p>" +
							"<a   data-id='" + itme.commodity_id + "' class='edit-item-title' title='编辑宝贝标题' href='JavaScript:void(0)'>编辑标题</a>" +
							"<b  id='textid" + itme.commodity_id + "'  class='dataID'>  " +
							" <textarea rows='2' id='newtextid" + itme.commodity_id + "'  maxlength='100'   onkeydown='if(this.value.length>=100) {event.returnValue=false}'  class='new-item-title edit-area' >" +
							itme.title + "</textarea> " +
							"<a href='JavaScript:ckYes(" + itme.commodity_id + ")' class='edit-save'>保存</a>  </b>" +
							"</div><div>" +
							"<img class='J_QRCode'  src='" + json.img_1 + "' width='10px' >   " +
							"<img class='j_MobileHasEdit' src='" + json.img_2 + "' width='10px' >  " +
							"<img class='j_MobileHasEdit' src='" + json.img_3 + "' width='10px' >  " +
							"</div></td><td class='item-title-area3'>  <p class='item-price-area' title='编辑价格'>" +
							"<span style='color: red;'>" + itme.prompt_price + "</span>  </p>" + //价格
							"<b class='priceUP'  id='newPri" + itme.commodity_id + "'   >  " +
							"<input value='" + itme.prompt_price + "' id='nextPri" + itme.commodity_id + "'   onabort=value=value.replace(\/[^\\d]\/g,'')  onKeyUp=value=value.replace(/[^\\d]/g,'')    " +
							"   data-id='" + itme.commodity_id + "' class='new-item-price edit-area'>" +
							"<a href='JavaScript:numYees(" + itme.commodity_id + ")' class='edit-save' >保存</a>"
							+ "<b/> </td><td class='item-title-area4'> <p class='item-price-area' title='编辑价格'>" +
							itme.shopnum + //库存
							"</p><b class='priceUP'   id='newNum" + itme.commodity_id + "'>" +
							"  <input value='" + itme.shopnum + "' class='new-item-price edit-area' id='nextNumTex" + itme.commodity_id + "'     onabort=value=value.replace(\/[^\\d]\/g,'')  onKeyUp=value=value.replace(/[^\\d]/g,'')>" +
							"<a href='JavaScript:numYeesPri(" + itme.commodity_id + ")' class='edit-save' >保存</a>"
							+ "</td><td class='item-title-area5'> " + itme.spu +
							//销量
							"</td><td class='item-title-area6'>" + itme.shopdatetime + "</td><td class='item-title-area7'>" +
							"<a href='' >编辑商品</a></td></tr>"
		
						$("#saleList").append(ok);
					})
		
		
		
		
				});
		
			}

function fenye(pages,TotalPageCount,pageNO){
	$('.M-box').pagination({
		pageCount:pages,
		totalData:TotalPageCount,
		current:pageNO,
	    mode: 'fixed'
	});
}

function lk() {
	
	
	showDom($("#pageNO").val());
}
function showDom(pageNo) {
	var product_name = $("input[name='product_name']").val().trim();
	var status = $("input[name='status']").val()
	var outId = $("input[name='outId']").val()
	var startPrice = $("input[name='startPrice']").val()
	var endPrice = $("input[name='endPrice']").val()
	var startNum = $("input[name='startNum']").val()
	var endNum = $("input[name='endNum']").val()
	var itemStepAudit = $("input[name='itemStepAudit']").val()
	var category = $("select[name='category']").val();
	
	if (startPrice != null && startPrice != "" && endPrice != null && endPrice != "") {
		if (parseInt(startPrice) > parseInt(endPrice)) {
			$("input[name='startPrice']").val(parseInt(endPrice));
			$("input[name='endPrice']").val(parseInt(startPrice));
		}
	}else{
		startPrice=0;
		endPrice=0;
	}
	if (startNum != null && startNum != "" && endNum != null && endNum != "") {
		if (parseInt(startNum) > parseInt(endNum)) {
			$("input[name='startNum']").val(parseInt(endNum));
			$("input[name='endNum']").val(parseInt(startNum));
		}
	}else{
		startNum=0;
		endNum=0
	}
	
	loadAll(pageNo, product_name, outId, category, startPrice, endPrice, startNum, endNum, status, itemStepAudit);

}







