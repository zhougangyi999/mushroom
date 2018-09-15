loadAll();

function loadAll(pageNo,product_name,outId,category,startPrice,endPrice,startNum,endNum,status,itemStepAudit) {
				$.getJSON("merchandise_in_warehouse", {
				"pageNow" : pageNo,"product_name":product_name,"outId":outId,
				"category":category,"startPrice":startPrice,"endPrice":endPrice,
				"startNum":startNum,"endNum":endNum,"status":status,"itemStepAudit":itemStepAudit
				}, function(json) {
					$("#saleList").html("");
					
					$("#TotalPageCount").html(json.totol);
					$("#pageNO").val(json.pageNum);
		
					$.each(json.list, function(index, itme) {
						var ok = "<tr  style='padding-left: 110px;    margin-top: 40px;'>" +
							"<td><input class='selector' type='checkbox'  name='selector'  value='" + itme.commodity_id + "' /></td>" +
							"</tr><tr class='trbor'  ><td class='item-title-are1'>" +
							//商品地址
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

function lk() {
	$("#saleList").html("");
	loadAll($("#pageNO").val());
}
function showDom() {
	$("#saleList").html("");
	var product_name = $("input[name='product_name']").val()
	var status = $("input[name='status']").val()
	var outId = $("input[name='outId']").val()
	var startPrice = $("input[name='startPrice']").val()
	var endPrice = $("input[name='endPrice']").val()
	var startNum = $("input[name='startNum']").val()
	var endNum = $("input[name='endNum']").val()
	var itemStepAudit = $("input[name='itemStepAudit']").val()
	var category = $("input[name='category']").val()
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
	
	loadAll(1, product_name, outId, category, startPrice, endPrice, startNum, endNum, status, itemStepAudit);

}