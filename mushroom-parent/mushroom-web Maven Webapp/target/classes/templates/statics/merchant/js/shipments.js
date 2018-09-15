$(function(){
	AttColor();
	
	$("#blue").submit(function(){
		$("#texts").val(UE.getEditor('contents').getContent())
//		$("#img_1").val($("#img1").attr("src"));
//		$("#img_2").val($("#img2").attr("src"));
//		$("#img_3").val($("#img3").attr("src"));
//		$("#img_4").val($("#img4").attr("src"));
//		alert($("#img_1").val())
	})
	
	$("#picpath1").click(function(){
	      
	})
	
	
})
function xmTanUploadImg(obj,i) {
                var file = obj.files[0];
                
                console.log(obj);console.log(file);
                console.log("file.size = " + file.size);  //file.size 单位为byte

                var reader = new FileReader();

                reader.onload = function (e) {
                    console.log("成功读取....");
                    var img = null;
                    if(i == 1){
                    	img = document.getElementById("img1");
                    	$(".operate").eq(0).css("display","none");
                    }else if(i == 2){
                    	img = document.getElementById("img2");
                    	$(".operate").eq(1).css("display","none");
                    }else if(i == 3){
                    	img = document.getElementById("img3");
                    	$(".operate").eq(2).css("display","none");
                    }else if(i == 4){
                    	img = document.getElementById("img4");
                    	$(".operate").eq(3).css("display","none");
                    }
                    img.src = e.target.result;
                    //或者 img.src = this.result;  //e.target == this
                }

                reader.readAsDataURL(file)
            }




//颜色尺码
function AttColor(){
	$.getJSON("business/attColor.json",null,getAttList);
}
//遍历颜色尺码
function getAttList(data){
	$(data.attColor).each(function(){
		$("#color").append("<div class='attcolor'><label><input type='checkbox' id='Checkbox0' style='float: left;top:0px;' class='color checkbox check_item' name='attcolor' value='"+this.attribute_value_name+"'><span style='float: left;margin-top: -2px;'>"+this.attribute_value_name+"</span></label></div>");
	});
	$(data.attSize).each(function(){
		$("#size").append("<div class='attsiza'><label><input type='checkbox' id='Checkbox1' style='float: left;top:0px;' class='size checkbox check_item' name='attsiza' value='"+this.attribute_value_name+"'><span style='float: left;margin-top: -2px;'>"+this.attribute_value_name+"</span></label></div>");
	});
	
	$(".color").click(function(){
		 var parent=$(this).parents('.Father_Item');
	        var _this=$('.checkbox',this);
	        // 是否全选
	        $('.checkbox',parent).each(function() {
	            var bCheck2=true;
	            if (_this.hasClass('check_all')) {
	                if (_this.get(0).checked) {
	                    bCheck2=true;
	                    $('.check_item',parent).prop('checked', bCheck2);
	                }else{
	                    bCheck2=false;
	                    $('.check_item',parent).prop('checked', bCheck2);
	                }
	                return false;
	            } else {
	                if ((!this.checked)&&(!$(this).hasClass('check_all'))) {
	                    bCheck2 = false;
	                    $('.check_all',parent).prop('checked', bCheck2);
	                    return false;
	                }
	            }
	            $('.check_all',parent).prop('checked', bCheck2);
	        });

	        step.Creat_Table();
	        $(".controls *").css("border","1px solid #CCCCCC")
	})
	$(".size").click(function(){
		 var parent=$(this).parents('.Father_Item');
	        var _this=$('.checkbox',this);
	        // 是否全选
	        $('.checkbox',parent).each(function() {
	            var bCheck2=true;
	            if (_this.hasClass('check_all')) {
	                if (_this.get(0).checked) {
	                    bCheck2=true;
	                    $('.check_item',parent).prop('checked', bCheck2);
	                }else{
	                    bCheck2=false;
	                    $('.check_item',parent).prop('checked', bCheck2);
	                }
	                return false;
	            } else {
	                if ((!this.checked)&&(!$(this).hasClass('check_all'))) {
	                    bCheck2 = false;
	                    $('.check_all',parent).prop('checked', bCheck2);
	                    return false;
	                }
	            }
	            $('.check_all',parent).prop('checked', bCheck2);
	        });

	        step.Creat_Table();
	        $(".controls *").css("border","1px solid #CCCCCC")
	})
	
	
	
	var step = {
        // 信息组合
        Creat_Table: function() {
            step.hebingFunction();
            var SKUObj = $('.Father_Title');
            var arrayTile = new Array(); // 表格标题数组
            var arrayInfor = new Array(); // 盛放每组选中的CheckBox值的对象
            var arrayColumn = new Array(); // 指定列，用来合并哪些列
            var bCheck = true; // 是否全选，只有全选，表格才会生成
            var columnIndex = 0;

            $.each(SKUObj, function(i, item) {
                arrayColumn.push(columnIndex++);
                arrayTile.push(SKUObj.eq(i).text().replace('：', ''));
                var itemName = '.Father_Item' + i;
                var bCheck2 = true; // 是否全选

                // 获取选中的checkbox的值
                var order = new Array();
                $(itemName + ' .check_item:checked').each(function() {
                    order.push($(this).val());
                });

                arrayInfor.push(order);
                if (order.join() == '') {
                    bCheck = false;
                }
            })

            // 开始生成表格
            if (bCheck) {
                $('#createTable').html('');
                var table = $('<table id="process" class="columnList"></table>');
                table.appendTo($('#createTable'));
                var thead = $('<thead></thead>');
                thead.appendTo(table);
                var trHead = $('<tr></tr>');
                trHead.appendTo(thead);
                // 创建表头
                var str = '';
                $.each(arrayTile, function(index, item) {
                    str += '<th width="100">' + item + '</th>';
                })
                str += '<th  width="200">价格</th><th width="100">数量</th>';
                trHead.append(str);
                var tbody = $('<tbody></tbody>');
                tbody.appendTo(table);

                var zuheDate = step.doExchange(arrayInfor);
                if (zuheDate.length > 0) {
                    //创建行
                    $.each(zuheDate, function(index, item) {
                        var td_array = item.split(',');
                        var tr = $('<tr></tr>');
                        tr.appendTo(tbody);
                        var str = '';
                        $.each(td_array, function(i, values) {
                        	if(i == 0){
                        		str += '<td>' + values + '<input type="hidden" name="color" value='+values+'></td>';
                        	}else{
                        		str += '<td>' + values + '<input type="hidden" name="size" value='+values+'></td>';
                        	}
                        });
                        str += '<td ><input name="money" class="money inpbox inpbox-mini" type="text"></td>';
                        str += '<td ><input name="num" class="num inpbox inpbox-mini" type="text"></td>';
                        tr.append(str);
                    });
                    //input失焦事件
                    $(function() {
                    	$('.money').blur(function(){
                			var money = new Array();
                			//money.length = 0;  
                			$(".money").each(function(){
                				//alert($(this).val())
                				money.push($(this).val());
                			})
                			money = money.sort();
                			
                			for (var i = 0; i < money.length; i++) {
								if(money[i] != "" ){
									$("#price").val(money[i])
									break;
								}
							}
                			
                		});  
                    	//数量
                    	$('.num').blur(function(){
                    		var num = new Array();
                			$(".num").each(function(){
                				
                				if($(this).val() == null || $(this).val() == ""){
                					num.push(0);
                				}else{
                					num.push(parseInt($(this).val()));
                				}
                				
                			})
                			nums = 0;
                			for (var i = 0; i < num.length; i++) {
								nums = nums + num[i];
							}
                			$("#quantity").val(nums);
                    	})
                	})
                }

                //结束创建Table表
                arrayColumn.pop(); //删除数组中最后一项
                //合并单元格
                $(table).mergeCell({
                    // 目前只有cols这么一个配置项, 用数组表示列的索引,从0开始
                    cols: arrayColumn
                });
            } else {
                //未全选中,清除表格
                document.getElementById('createTable').innerHTML = "";
            }
        },
        hebingFunction: function() {
            $.fn.mergeCell = function(options) {
                return this.each(function() {
                    var cols = options.cols;
                    for (var i = cols.length - 1; cols[i] != undefined; i--) {
                        mergeCell($(this), cols[i]);
                    }
                    dispose($(this));
                })
            };

            function mergeCell($table, colIndex) {
                $table.data('col-content', ''); // 存放单元格内容
                $table.data('col-rowspan', 1); // 存放计算的rowspan值 默认为1
                $table.data('col-td', $()); // 存放发现的第一个与前一行比较结果不同td(jQuery封装过的), 默认一个"空"的jquery对象
                $table.data('trNum', $('tbody tr', $table).length); // 要处理表格的总行数, 用于最后一行做特殊处理时进行判断之用
                // 进行"扫面"处理 关键是定位col-td, 和其对应的rowspan
                $('tbody tr', $table).each(function(index) {
                    // td:eq中的colIndex即列索引
                    var $td = $('td:eq(' + colIndex + ')', this);
                    // 获取单元格的当前内容
                    var currentContent = $td.html();
                    // 第一次时走次分支
                    if ($table.data('col-content') == '') {
                        $table.data('col-content', currentContent);
                        $table.data('col-td', $td);
                    } else {
                        // 上一行与当前行内容相同
                        if ($table.data('col-content') == currentContent) {
                            // 上一行与当前行内容相同则col-rowspan累加, 保存新值
                            var rowspan = $table.data('col-rowspan') + 1;
                            $table.data('col-rowspan', rowspan);
                            // 值得注意的是 如果用了$td.remove()就会对其他列的处理造成影响
                            $td.hide();
                            // 最后一行的情况比较特殊一点
                            // 比如最后2行 td中的内容是一样的, 那么到最后一行就应该把此时的col-td里保存的td设置rowspan
                            // 最后一行不会向下判断是否有不同的内容
                            if (++index == $table.data('trNum'))
                                $table.data('col-td').attr('rowspan', $table.data('col-rowspan'));
                        }
                        // 上一行与当前行内容不同
                        else {
                            // col-rowspan默认为1, 如果统计出的col-rowspan没有变化, 不处理
                            if ($table.data('col-rowspan') != 1) {
                                $table.data('col-td').attr('rowspan', $table.data('col-rowspan'));
                            }
                            // 保存第一次出现不同内容的td, 和其内容, 重置col-rowspan
                            $table.data('col-td', $td);
                            $table.data('col-content', $td.html());
                            $table.data('col-rowspan', 1);
                        }
                    }
                })
            }
            // 同样是个private函数 清理内存之用
            function dispose($table) {
                $table.removeData();
            }
        },
        doExchange: function(doubleArrays) {
            // 二维数组，最先两个数组组合成一个数组，与后边的数组组成新的数组，依次类推，知道二维数组变成以为数组，所有数据两两组合
            var len = doubleArrays.length;
            if (len >= 2) {
                var arr1 = doubleArrays[0];
                var arr2 = doubleArrays[1];
                var len1 = arr1.length;
                var len2 = arr2.length;
                var newLen = len1 * len2;
                var temp = new Array(newLen);
                var index = 0;
                for (var i = 0; i < len1; i++) {
                    for (var j = 0; j < len2; j++) {
                        temp[index++] = arr1[i] + ',' + arr2[j];
                    }
                }
                var newArray = new Array(len - 1);
                newArray[0] = temp;
                if (len > 2) {
                    var _count = 1;
                    for (var i = 2; i < len; i++) {
                        newArray[_count++] = doubleArrays[i];
                    }
                }
                return step.doExchange(newArray);
            } else {
                return doubleArrays[0];
            }
        }
    }
	//居中
	$(".controls").css("text-align","center");
	
	
	
	
	
	
	
	
}









//实例化编辑器
//建议使用工厂方法getEditor创建和引用编辑器实例，如果在某个闭包下引用该编辑器，直接调用UE.getEditor('editor')就能拿到相关的实例
//var ue = UE.getEditor('editor');
//var ue = UE.getEditor('container');

function isFocus(e){
    alert(UE.getEditor('contents').isFocus());
    UE.dom.domUtils.preventDefault(e)
}
function setblur(e){
    UE.getEditor('contents').blur();
    UE.dom.domUtils.preventDefault(e)
}
function insertHtml() {
    var value = prompt('插入html代码', '');
    UE.getEditor('contents').execCommand('insertHtml', value)
}
function createEditor() {
    enableBtn();
    UE.getEditor('contents');
}
function getAllHtml() {
    alert(UE.getEditor('contents').getAllHtml())
}
function getContent() {
    var arr = [];
    arr.push("使用editor.getContent()方法可以获得编辑器的内容");
    arr.push("内容为：");
    arr.push(UE.getEditor('contents').getContent());
    alert(arr.join("\n"));
}
function getPlainTxt() {
    var arr = [];
    arr.push("使用editor.getPlainTxt()方法可以获得编辑器的带格式的纯文本内容");
    arr.push("内容为：");
    arr.push(UE.getEditor('contents').getPlainTxt());
    alert(arr.join('\n'))
}
function setContent(isAppendTo) {
    var arr = [];
    arr.push("使用editor.setContent('欢迎使用ueditor')方法可以设置编辑器的内容");
    UE.getEditor('contents').setContent('欢迎使用ueditor', isAppendTo);
    alert(arr.join("\n"));
}
function setDisabled() {
    UE.getEditor('contents').setDisabled('fullscreen');
    disableBtn("contents");
}

function setEnabled() {
    UE.getEditor('contents').setEnabled();
    enableBtn();
}

function getText() {
    //当你点击按钮时编辑区域已经失去了焦点，如果直接用getText将不会得到内容，所以要在选回来，然后取得内容
    var range = UE.getEditor('contents').selection.getRange();
    range.select();
    var txt = UE.getEditor('contents').selection.getText();
    alert(txt)
}

function getContentTxt() {
    var arr = [];
    arr.push("使用editor.getContentTxt()方法可以获得编辑器的纯文本内容");
    arr.push("编辑器的纯文本内容为：");
    arr.push(UE.getEditor('contents').getContentTxt());
    alert(arr.join("\n"));
}
function hasContent() {
    var arr = [];
    arr.push("使用editor.hasContents()方法判断编辑器里是否有内容");
    arr.push("判断结果为：");
    arr.push(UE.getEditor('contents').hasContents());
    alert(arr.join("\n"));
}
function setFocus() {
    UE.getEditor('contents').focus();
}
function deleteEditor() {
    disableBtn();
    UE.getEditor('contents').destroy();
}
function disableBtn(str) {
    var div = document.getElementById('btns');
    var btns = UE.dom.domUtils.getElementsByTagName(div, "button");
    for (var i = 0, btn; btn = btns[i++];) {
        if (btn.id == str) {
            UE.dom.domUtils.removeAttributes(btn, ["disabled"]);
        } else {
            btn.setAttribute("disabled", "true");
        }
    }
}
function enableBtn() {
    var div = document.getElementById('btns');
    var btns = UE.dom.domUtils.getElementsByTagName(div, "button");
    for (var i = 0, btn; btn = btns[i++];) {
        UE.dom.domUtils.removeAttributes(btn, ["disabled"]);
    }
}

function getLocalData () {
    alert(UE.getEditor('contents').execCommand( "getlocaldata" ));
}

function clearLocalData () {
    UE.getEditor('contents').execCommand( "clearlocaldata" );
    alert("已清空草稿箱")
}








