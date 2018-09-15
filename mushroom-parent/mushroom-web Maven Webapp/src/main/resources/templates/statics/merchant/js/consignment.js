function GetQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]);
	return null;
}



function loadAll() {
	var id = GetQueryString("id");
	$("#order-numberas").html("订单编号：" + id);
	$("input[name=order_num]").val(id);
	$.getJSON("consignmentAll", {
		"id" : id
	}, function(json) {
		var hh = "";
		var address = "";
		var uid = "";
		$.each(json, function(i, sm) {
			hh += "<td>"
				+ "<div id='orderdetail1' class='orderdetail'>"
				+ "<div class='img'>"
				+ "<a href='' target='_blank'> <img width='50'"
				+ "src='" + sm.order_img + "' alt='0404040'>"
				+ "</a>"
				+ "</div>"
				+ "<ul class='des' style='width: 260px; overflow: hidden;'>"
				+ "<li>"
				+ "<!-- 商品名 --> <a href='' target='_blank'"
				+ "title='" + sm.oiname + "'>" + sm.oiname + "</a> <!-- 颜色 -->"
				+ "<p>颜色:红</p>"
				+ "</li>"
				+ "<!-- 价格 数量 -->"
				+ "<li class='total'><span> " + sm.price + " ×"
				+ "<em>" + sm.item_num + "</em>"
				+ "</span></li>"
				+ "</ul>"
				+ "</div>"
				+ "</td>"

			address = "";
			uid = sm.userid;

		})

		$("#orderAlls").html(hh);
		loadAdd(uid);
	}, "JSON");

}


function apptenAP(json) {
	//alert("sabbs")
	var hh = "";
	var sk = "";
	$.each(json, function(i, sm) {
		

		if (sm.isDefault_take == 1) {
			sk = sm.name1 + sm.name2 + sm.name3 + sm.address + ",&nbsp;&nbsp;" + sm.postalCode + ",&nbsp;&nbsp;" + sm.reserved1 + ",&nbsp;&nbsp;" + sm.collectPhone;
			$("#logisacceptAdd1").html(sk);

			$("#logisacceptAdd2").html(sk);
			bindHidd(sm.name1, sm.name2, sm.name3, sm.address, sm.postalCode, sm.reserved1, sm.collectPhone);
		
		
			hh += "<tr class='lsls'>" +
			"<td><input class='sellerContactId' onclick='changesb(this)' name='sellerContactId' checked='checked'  type='radio' value=" + i + "></td>" +
			"<td class='name'>" + sm.reserved1 + "</td>" +
			"<td class='adss'>" + sm.name1 + sm.name2 + sm.name3 + sm.address + "</td>" +
			"<td class='no' >" + sm.postalCode + "</td>" +
			"<td></td>" +
			"<td class='phome'>" + sm.collectPhone + "</td>" +
			"</tr>"
		
		}else{
			hh += "<tr class='lsls'>" +
			"<td><input class='sellerContactId' onclick='changesb(this)' name='sellerContactId'  type='radio' value=" + i + "></td>" +
			"<td class='name'>" + sm.reserved1 + "</td>" +
			"<td class='adss'>" + sm.name1 + sm.name2 + sm.name3 + sm.address + "</td>" +
			"<td class='no' >" + sm.postalCode + "</td>" +
			"<td></td>" +
			"<td class='phome'>" + sm.collectPhone + "</td>" +
			"</tr>"


			
		}
		

	})
	$("#addsm").html(hh);


}




function addreAll(json) {
	//alert("sb")
	var sk = "";
	$.each(json, function(i, sm) {
		//alert("sb"+i)
		sk = "<span id='receiverInfo:87824626616' class='logis:receInfo'>"
			+ sm.name1 + sm.name2 + sm.name3 + sm.address + ",&nbsp;&nbsp;" + sm.postalCode + ",&nbsp;&nbsp;" + sm.reserved1 + ",&nbsp;&nbsp;" + sm.collectPhone + "</span>"
			+ "<a href='#' class='logisedit1' id='87824626616'>修改收货信息</a> <input"
			+ "ic='test' value='' type='hidden'>";
		$("#userap").html(sk);
		$(".order-name").html("买家：" + sm.reserved1);

		
		$("input[name=_fmw.r.87824626616.adr]").val(sm.name1 + sm.name2 + sm.name3 + sm.address);
		$("input[name=_fmw.r.87824626616.c]").val(sm.postalCode);
		$("input[name=_fmw.r.87824626616.mo]").val(sm.collectPhone);
		$("input[name=_fmw.r.87824626616.z]").val(sm.reserved1);
	})
}

function loadAdd(uid) {
	//alert(uid);
	$.getJSON("consignmentadd", {
		"uid" : uid
	}, function(json) {
		if (uid == 0)
			apptenAP(json);
		else
			addreAll(json);

	}, "JSON");
}

function bindHidd(name1, name2, name3, address, postalCode, reserved1, collectPhone) {
	$("input[name=region1]").val(name1);
	$("input[name=region2]").val(name2);
	$("input[name=region3]").val(name3);
	$("input[name=address]").val(address);
	$("input[name=postalCode]").val(postalCode);
	$("input[name=applyPhone]").val(collectPhone);
	$("input[name=applyName]").val(reserved1);
	$("input[name=id]").val(GetQueryString("id"));



}


var index = 0;
$(".accept").click(function() {
	index = 0;
	$("#contactSelector").show().css({
		"z-index" : "20",
		"position" : "absolute",
		"top" : "60px",
		"right" : "-0px"
	})
});
$(".refund").click(function() {
	index = 1;
	$("#contactSelector").show().css({
		"z-index" : "20",
		"position" : "absolute",
		"top" : "85px",
		"right" : "-0px"
	});
});

$(function() {

	$(":input[name=sameLogisCompanyId]").change(function() {
		//alert($(":input[name=sameLogisCompanyId]").val())
		$("#companyName").html($(":input[name=sameLogisCompanyId]").val());

	})

	

	/*	$("input[name=sellerContactId").change(function() {
			alert("sb");
			var texts = $(this).parent().nextAll(".adss").text()+" , &nbsp;&nbsp;";
						texts+=$(this).parent().nextAll(".no").text()+" , &nbsp;&nbsp;";
						texts+=$(this).parent().nextAll(".name").text()+" , &nbsp;&nbsp;";
						texts+=$(this).parent().nextAll(".phome").text();
			if (index == 0) {
				$("#logisacceptAdd1").html(texts);	
			} else {
				$("#logisacceptAdd2").html(texts)
			}
			$("#contactSelector").css("display", "none");
		});*/

	
	//刷新
	$(".refresh_box").click(function() {});
	//关闭
	$(".close_select_box").click(function() {
		$("#contactSelector").hide();
	});
	//选择地址

	var ck = 0
	$(".J_ConsignTrigger").click(function() {
		if (ck == 0) {
			if ($('input').is(':focus')) return false;
			$("#trigger-onSTY").removeClass("trigger-onst");
			$(this).parent().next().hide();
			$("#trigger-onSTY").addClass("trigger-on-up");
			ck = 1;
		} else {
			if ($('input').is(':focus')) return false;
			$("#trigger-onSTY").removeClass("trigger-on-up");
			$("#trigger-onSTY").addClass("trigger-onst");
			$(this).parent().next().show();
			ck = 0;
		}
	})
})

$(function() {
	var tex = $(".info").val();
	$(".info").focus(function() {


		$(this).val("");
	});
	$(".info").blur(function() {
		texs = $(this).val();
		if (texs == "") $(this).val(tex);

	})
});


function changesb(elv){
	//alert($(elv).parent().html());
	var texts = $(elv).parent().nextAll(".adss").text()+" , &nbsp;&nbsp;";
	texts+=$(elv).parent().nextAll(".no").text()+" , &nbsp;&nbsp;";
	texts+=$(elv).parent().nextAll(".name").text()+" , &nbsp;&nbsp;";
	texts+=$(elv).parent().nextAll(".phome").text();
	if (index == 0) {
		$("#logisacceptAdd1").html(texts);	
	} else {
		$("#logisacceptAdd2").html(texts)
	}
	$("#contactSelector").css("display", "none");
}

loadAdd(0);

loadAll();