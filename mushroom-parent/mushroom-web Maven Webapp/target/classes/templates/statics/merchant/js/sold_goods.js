
loadAll();
var TotalPageCount=null;
var pageNO=null;
var pages=null;
//查询所有订单
function loadAll(pageNo,startPrice, endPrice, otitle, ordernum, ouname,status) {
	$.getJSON("shopidOrders", {
		"startPrice" : startPrice,
		"endPrice" : endPrice,
		"otitle" : otitle,
		"ordernum" : ordernum,
		"ouname" : ouname,
		"pageNow" : pageNo,
		"status":status}, getAttList, "JSON");
}

//显示数据
function getAttList(json) {
	//alert(json);
	TotalPageCount=json.totol;
	pageNO=json.pageNum;
	pages=json.pages;
	fenye(pages,TotalPageCount,pageNO);
	/*$('.M-box').pagination({
		pageCount:pages,
		totalData:TotalPageCount,
		current:pageNO,
	    mode: 'unfixed'
	});*/
	var orders = "";
	var index=0;
	$.each(json.list, function(is, datab) {
		
		var s = "";
		
		$.each(json.listpa, function(i, data) {
			
			if (data.order_item_num == datab.order_num) {
				index++;
				//alert(i+":"+data.order_item_num);
				s += "<tr>" +
					"<td class='item-title-are1'>" +
					"<a href=''>" +
					" <img src='" + data.order_img + "'  class='commodity_table_div_tr_table_img'/>" + //主图
					"</a>" +
					"</td>" +
					"<td class='item-title-area2'> " +
					"<div class='item-title-area2_2'>" +
					"<p>" +
					"<a target='_blank' href='' >" + data.oiname + "</a>" +
					"</p>" +
					"</div>" +
					"</td>" +
					"<td class='item-title-area3'>" +
					"<span style='color: red;'>" + data.price_old + "</span>" + //单价
					"</td>" +
					"<td class='item-title-area4'>" + data.item_num + "</td>" + //数量
					"<td class='item-title-area5'> 待发货</td>" + //订单状态
					"<td class='item-title-area6'>" + data.price + "</td>" + //实收金额

					"<td class='item-title-area7'>" +
					"<a href='' >" + data.username + "</a>" + //购买用户
					"</td>" +
					"</tr>";

			}


		})


		if(index!=0){
			orders += "<table class='commodity_table_div_tr_table' >" +
			"<tr  style='padding-left: 110px;     background: -webkit-linear-gradient(top,#ffffff,#e9f4ff);'>" +
			"<td colspan='8' > 订单号:" + datab.order_num + "</td>" +
			"<td class='item-title-area8'>" +
			"<a href='consignment_index.html?id=" + datab.order_num + "' >发货</a>" + //评价数
			"</td>" +
			"</tr>" + s
			+ "</table>";
		}
		
		index=0;
			
			


	});
	$(".commodity_table_div_tr_table").html(orders);
	
	
		

	
}

function agin(i){
	//alert(i)
	var status=-9;
	var date=new Date;
	var year=date.getFullYear(); 
	var month=date.getMonth()+1;
	month =(month<10 ? "0"+month:month); 
	var mo="0"+month*1-3;
	var mydate = (year.toString()+"-"+month.toString());
	var myda = (year.toString()+"-"+("0"+mo));
	if(i=='1'){
		$("input[name='endPrice']").val(mydate);
		$("input[name='startPrice']").val(myda);		
	}else if(i=='2'){
		status=1;
	}else if(i=='3'){
		status=2;
	}else if(i=='4'){
		status=3;
	}else if(i=='5'){
		status=7;
	}else if(i=='6'){
		status=6;
	}else if(i=='7'){
		status=7;
	}else if(i=='8'){
		status=-2;
	}else if(i=='9'){
		$("input[name='endPrice']").val(myda);
		
	}
	showDom(1,status);
}

function showDom(pageno,status) {
	var otitle = $(":input[name='otitle']").val().trim();
	var status = status
	var ordernum = $("input[name='ordernum']").val();
	var startPrice = $("input[name='startPrice']").val();
	var endPrice = $("input[name='endPrice']").val();
	var ouname = $("input[name='ouname']").val();
	
	
	if (startPrice != null && startPrice != "" && endPrice != null && endPrice != "") {
		if (parseInt(startPrice) > parseInt(endPrice)) {
			$(":input[name='startPrice']").val(endPrice);
			$(":input[name='endPrice']").val(startPrice);
		}
	}else{
		startPrice=0;
		endPrice=0;
	}
	
	
	loadAll(pageno,startPrice, endPrice, otitle, ordernum, ouname,status);

}
function fenye(pages,TotalPageCount,pageNO){
	$('.M-box').pagination({
		pageCount:pages,
		totalData:TotalPageCount,
		current:pageNO,
	    mode: 'fixed'
	});
}





