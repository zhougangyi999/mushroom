<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
    
<%@ taglib  uri="http://java.sun.com/jsp/jstl/core"  prefix="c"  %>
		<div class="mgj_rightbar J_sidebar mini" data-ptp="_sidebar" style="right: -30px;">
			<!--空的右侧边栏-->
			<div id="mgj_rightbar_top_blank" class="mgj_rightbar_960"></div>
			<!--方便定margin的空dediv-->
			<div id="mgj_rightbar_blank_div"></div>
			<!--用户头像-->
			<div class="sidebar-item mgj-my-avatar">
				<a target="_blank" href="javascript:void(0);" rel="nofollow">
					<div class="img"> <img width="20" height="20" src="javascript:void(0);" alt=""> </div>
				</a>
			</div>
			<!--购物车-->
			<div class="sidebar-item mgj-my-cart" style="left: -30px;">
				<a target="_blank" href="javascript:void(0);" rel="nofollow"> <i class="s-icon"></i>
					<div class="s-txt">购物车</div>
					<div class="num" style="display: none;"></div>
				</a>
			</div>
			<!--优惠券-->
			<div class="sidebar-item mgj-my-coupon">
				<a target="_blank" rel="nofollow" href="javascript:void(0);"> <i class="s-icon"></i>
					<div class="s-txt">优惠券</div>
					<div class="num" style="display: none;"></div>
				</a>
			</div>
			<!--钱包-->
			<div class="sidebar-item mgj-my-wallet">
				<a target="_blank" rel="nofollow" href="javascript:void(0);"> <i class="s-icon"></i>
					<div class="s-txt">钱包</div>
				</a>
			</div>
			<!--足迹-->
			<div class="sidebar-item mgj-my-browserlog">
				<a target="_blank" rel="nofollow" href="javascript:void(0);"> <i class="s-icon"></i>
					<div class="s-txt">足迹</div>
				</a>
			</div>
			<div class="mgj-my-browserlog" id="qrcode">
				<a target="_blank" rel="nofollow" href="javascript:void(0);"> <i class="qr-icon"></i> </a>
				<div id="detail-qrcode"><img src="javascript:void(0);"></div>
			</div>
			<div class="sideBottom">
				<!--回到顶部-->
				<div class="sidebar-item mgj-back2top" style="left: -30px;">
					<a rel="nofollow" href="javascript:;"><i class="s-icon"></i></a>
				</div>
			</div>
		</div>
		
		<div id="header" class="J_sitenav site-top-nav" data-ptp="_head">
			<div class="wrap">
				<a href="${pageContext.request.contextPath }" rel="nofollow" class="home fl">潮时尚首页</a>
				<ul class="header-top">
					<c:if test="${!empty userSession}">
						<li class="s1 has-icon user-meta">
						<a rel="nofollow" href="${pageContext.request.contextPath }/Orders/orderlist.html?id=0&currPageNo=0">${userSession.name} </a>
						<a rel="nofollow" href="javascript:void(0);" target="_blank"> </a> <i class="icon-delta"></i>
						<ol class="ext-mode" id="menu-personal">
							<li class="s2">
								<a   rel="nofollow" href="${pageContext.request.contextPath }/Orders/orderlist.html?id=0&currPageNo=0">个人中心</a>
							</li>
							<li class="s2">
								<a rel="nofollow" href="${pageContext.request.contextPath }/user/tuchu">退出</a>
							</li>
						</ol>
					</li>
					</c:if>
					<c:if test="${empty userSession}">
						<li class="s1 show-nologin"> 
							<a rel="nofollow" class="J_nav_btn_login" href="${pageContext.request.contextPath }/user/login">登录</a> 
						</li>
					</c:if>
					
					
					<li class="s1 has-line message-center">
						<a rel="nofollow" href="javascript:;" class="ext-module mogutalk_btn J_msg open_msg micon" data-from="shopwidget_message" data-trace="global,shopwidget_message,click">消息<span class="num m_num" style="display: none;"></span> </a>
					</li>
					<li class="s1 has-icon has-line user-fav">
						<a rel="nofollow" href="javascript:;">我的收藏</a> <i class="icon-delta"></i>
						<ul class="ext-mode">
							<li class="s2">
								<a target="_blank" rel="nofollow" href="javascript:void(0);">收藏的商品</a>
							</li>
							<li class="s2">
								<a target="_blank" rel="nofollow" href="javascript:void(0);">收藏的小店</a>
							</li>
							<li class="s2">
								<a target="_blank" rel="nofollow" href="javascript:void(0);">浏览足迹</a>
							</li>
						</ul>
					</li>
					<li class="s1 myorder has-line">
						<a href="${pageContext.request.contextPath }/Orders/orderlist.html?id=0&currPageNo=0" target="_blank" class="text display_u" rel="nofollow">我的订单</a>
					</li>
					<li class="s1 has-line shopping-cart-v2">
						<a class="cart-info-wrap" href="javascript:void(0);" target="_blank" rel="nofollow"><span class="cart_info">购物车</span></a> <i class="icon-delta"></i> <span class="shopping-cart-loading"></span> </li>
					<li class="s1 has-line has-icon custom-item">
						<a rel="nofollow" href="javascript:void(0);" target="_blank">客户服务</a> <i class="icon-delta"></i>
						<ol class="ext-mode">
							<li class="s2">
								<a target="_blank" rel="nofollow" href="javascript:void(0);">消费者服务</a>
							</li>
							<li class="s2">
								<a target="_blank" rel="nofollow" href="javascript:void(0);">商家服务</a>
							</li>
							<li class="s2">
								<a target="_blank" rel="nofollow" href="javascript:void(0);">规则中心</a>
							</li>
						</ol>
					</li>
					<li class="s1 has-line has-icon myxiaodian">
						<a href="${pageContext.request.contextPath }/business/seller_center_main" rel="nofollow" target="_blank" class="text display_u">商家后台</a> <i class="icon-delta"></i>
						<ol class="ext-mode">
							<li class="s2">
								<a target="_blank" rel="nofollow" href="javascript:void(0);">管理后台</a>
							</li>
							<li class="s2">
								<a target="_blank" rel="nofollow" href="javascript:void(0);">商家社区</a>
							</li>
							<li class="s2">
								<a target="_blank" rel="nofollow" href="javascript:void(0);">商家培训</a>
							</li>
							<li class="s2">
								<a target="_blank" rel="nofollow" href="javascript:void(0);">市场入驻</a>
							</li>
						</ol>
					</li>
				</ul>
			</div>
		</div>
		

		