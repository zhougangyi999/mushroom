<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>  
    <%
String path1 = request.getContextPath();
String basePath1 = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path1+"/";
%>
<%@ include file="head.jsp" %>
<div class="header_mid clearfix">
	<div class="wrap">
		<a rel="nofollow" href="${pageContext.request.contextPath }" class="logo" title="潮时尚首页"  style="background-image: none;">
			<img src="<%=basePath1 %>statics/img/223.jpg" alt="潮时尚，我的买手街">
		</a>
		<div class="normal-search-content">
			<div class="top_nav_search" id="nav_search_form">
				<!--搜索框 -->
				<div class="search_inner_box clearfix">
					<div class="selectbox" data-v="1">
						<span class="selected">搜商品</span>
						<ol>
							<li class="current" data-index="bao">
								<a href="#">商品</a>
							</li>
							<li data-index="shop">
								<a href="#">店铺</a>
							</li>
						</ol>
					</div>
					<form action="${pageContext.request.contextPath }/sos.html" method="get" id="top_nav_form">
						<input type="text"   name="q" class="ts_txt fl" data-def="百搭半袖上衣" value= "${q }"  >
						<input type="submit" value="搜  索" class="ts_btn">
						<input type="hidden" name="t" value="bao" id="select_type">
						<input type="hidden" name="ptp" value="">
					</form>
					<div class="top_search_hint is-not-ie8-hack"></div>
				</div>

				<div class="ts_hotwords">
					<a rel="nofollow" class="ts_hotword" href="${pageContext.request.contextPath }/sos.html?q=折叠电吹风" style="color: #666;">折叠电吹风</a>
					 
				</div>
			</div>
		</div>
		<div class="mid_fr">
			
			<img src="https://s10.mogucdn.com/mlcdn/c45406/180608_554jfj38ek5j9e470k06bh8a15l94_440x180.png" alt="潮时尚，我的买手街">
			
		</div>
	</div>
</div>
<!------------------------------------------------ 固定搜索框-------------------------------------->
<div id="J_sticky_container" class="sticky-search-container lets-rock">
	<div class="wrap clearfix">
		<div class="logo-wrap clearfix">
			<a rel="nofollow" href="" class="logo" title="潮时尚|我的买手街">
				 
				<img src="<%=basePath1 %>statics/img/logo3.png" alt="潮时尚，我的买手街">
			</a>
		</div>
		<div class="sticky-search-content">
			<div class="top_nav_search" id="nav_search_form">
				<!--搜索框 -->
				<div class="search_inner_box clearfix">
					<div class="selectbox" data-v="1">
						<span class="selected">搜商品</span>
						<ol>
							<li class="current" data-index="bao">
								<a href="#">商品</a>
							</li>
							<li data-index="shop">
								<a href="#">店铺</a>
							</li>
						</ol>
					</div>
					<form action="${pageContext.request.contextPath }/sos.html" method="get" id="top_nav_form">
						<input type="text" data-tel="search_book" name="q" class="ts_txt fl" data-def="百搭半袖上衣" value="${q }" autocomplete="off" def-v="" >
						<input type="submit" value="搜  索" class="ts_btn">
 5
 
					</form>
					<div class="top_search_hint is-not-ie8-hack"></div>
				</div>
				<div class="ts_hotwords">
					<a rel="nofollow" class="ts_hotword" href="${pageContext.request.contextPath }/sos.html?q=折叠电吹风">折叠电吹风</a>
				 
				</div>
			</div>
		</div>
	</div>
</div>


<script type="text/javascript">
  	$(function() {
		$("#J_sticky_container").hide();
		$(window).scroll(function(e){
		
			var windosH=$(window).height();
			var  tos=parseInt($(this).scrollTop());
		 
			if(tos>higths("#body_wrap")){
				$("#J_sticky_container").show();
			}else{
				$("#J_sticky_container").hide();
			}
		});
		
	})
 
  	//获得图层高度
	function higths(id){
		return parseInt($(id).offset().top);//内容区的top
	}
  </script>
