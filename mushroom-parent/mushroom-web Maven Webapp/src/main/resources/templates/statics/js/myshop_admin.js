! function(t) {
	function e(t, e) {
		this.init(t, e)
	}

	function a() {
		function e(e) {
			return t.trim(e).replace(/(<|>|'|"|window|alert|eval|$|jQuery)/gi, "")
		}
		h.on("keyup keydown", function(o) {
			var n = t(this),
				i = t("#select_type");
			if(!i.length || "bao" === i.val() || "5" === i.val()) switch(o.keyCode) {
				case 40:
					if("keyup" == o.type || !l.data("isshow")) break;
					g.chooseIndex = g.chooseIndex + 1 > g.tipLength - 1 ? 0 : ++g.chooseIndex;
					var s = v.changeListTab(g.chooseIndex);
					h.val(s);
					break;
				case 38:
					if("keyup" == o.type || !l.data("isshow")) break;
					g.chooseIndex = g.chooseIndex - 1 < 0 ? g.tipLength - 1 : --g.chooseIndex;
					var s = v.changeListTab(g.chooseIndex);
					h.val(s);
					break;
				case 13:
					if("keyup" == o.type) break;
					o.preventDefault(), a.submitBefore(g.chooseType, g.chooseIndex), d.submit();
					break;
				case 37:
					break;
				case 39:
					break;
				default:
					clearTimeout(r), r = setTimeout(function() {
						var t = e(n.val());
						v.resetFactory(t)
					}, 500)
			}
		}).on("focus", function() {
			var a = t(this),
				o = t("#select_type");
			if(r && clearTimeout(r), !o.length || "bao" === o.val() || "5" === o.val()) {
				var n = e(a.val());
				clearTimeout(r), r = setTimeout(function() {
					v.resetFactory(n)
				}, 300)
			}
		}).on("blur", function() {
			t("body").bind("click", function(e) {
				t(e.target).parents(".seatch_type_msearch").length || (l.empty().data("isshow", !0).hide(), t("body").unbind("click"))
			})
		}), l.on("mouseenter", ".search_tip li", function(e) {
			var a = t(this),
				o = a.index();
			g.chooseIndex = o, v.changeListTab(o)
		}).on("click", ".search_tip li", function(e) {
			var o = t(this).find(".title").text();
			t(e.target).hasClass("prop") && (o += " " + t(e.target).text()), a.submitBefore(g.chooseType, g.chooseIndex), h.val(o), d.submit()
		}), l.on("click", ".hot_list li", function() {
			var e = t(this);
			return a.submitBefore(v.hotTypeName, e.index()), h.val(e.find("span").html()), d.submit(), !1
		}), l.on("click", ".local_del", function(e) {
			var a = t(this),
				o = a.parent();
			f.del(o.find(".title").attr("title"));
			var n = f.getTenItem();
			return v.updateLocalContent(a, n), g.chooseIndex = -1, g.tipLength = n.length, !1
		}).on("click", ".local_title .del_all", function() {
			var e = t(this);
			return f.set(), v.destoryLocalContent(e), e.remove(), g.chooseIndex = -1, g.tipLength = 0, !1
		}), o.on("click", ".selectbox a", function(e) {
			e.preventDefault(), v.changeType(t(this))
		}).on("mouseenter", ".selectbox", function() {
			l.hide(), t(this).addClass("sele_hover")
		}).on("mouseleave", ".selectbox", function() {
			t(this).removeClass("sele_hover")
		}), d.submit(function() {
			var o = t(this),
				n = e(h.val()),
				i = h.attr("def-v");
			if("" == n || n == i) {
				if("" == n && "shop" == t("#select_type").val()) return !1;
				var s = h.data("def");
				h.val(s || "");
				var r = '<input type="hidden" name="from" value="searchplacehold" id="TJ">';
				t("#top_nav_form").append(r), setTimeout(function() {
					t("#TJ").remove()
				}, 1e3)
			} else n == t.trim(h.val()) && "bao" == t("#select_type").val() && f.addOne(n);
			if(d.find(".emptyvalue").remove(), o.data("index") > -1 && null !== o.data("type")) {
				var c = '<input type="hidden" class="emptyvalue" name="from" value="' + o.data("type") + "querytip" + o.data("index") + '">';
				d.append(c)
			}
			return v.destoryContent(), a.submitAfter(), !1
		}), v.showStickySearch() && v.initStickySearch()
	}
	var o = t("#nav_search_form") || [];
	if(o.length > 0 && !(window.M && M.pc && M.pc.__SEARCHBAR_JS_HAS_LOAD__)) {
		M.pc.__SEARCHBAR_JS_HAS_LOAD__ = !0;
		var n = "//list.mogujie.com/module/mget?code=sketch,hotWord",
			i = "//list.mogujie.com/module/mget?code=tips";
		t && t.fn && !t.fn.serializeObject && (t.fn.serializeObject = function() {
			var e = {},
				a = this.serializeArray();
			return t.each(a, function() {
				void 0 !== e[this.name] ? (e[this.name].push || (e[this.name] = [e[this.name]]), e[this.name].push(this.value || "")) : e[this.name] = this.value || ""
			}), e
		});
		var s = function() {
			var t = this;
			t.init()
		};
		s.prototype = {
			constructor: s,
			init: function() {
				var t = this;
				t.requestLogo(), t.fixIe()
			},
			requestLogo: function() {
				var e = this,
					a = "//mce.mogucdn.com/jsonp/multiget/3?pids=14360",
					o = "https://s10.mogucdn.com/p1/170301/idid_ifrwimrvmqygkzrvmuzdambqhayde_440x180.png",
					n = t(".header_mid .wrap .mid_fr"),
					i = t(".header_mid .wrap .logo");
				M.http.jsonp({
					url: a,
					timeout: 2e4,
					jsonpCallback: "__GET_SEARCHBAR_IMG__"
				}).then(function(a) {
					if(a && a.success && a.data && a.data[14360] && a.data[14360].list && a.data[14360].list[0]) {
						var s = a.data[14360].list[0];
						if(s.link && "" != s.link && (i.attr("href", s.link), t(".sticky-search-container .wrap .logo").attr("href", s.link)), s.logoImg && "" != s.logoImg) {
							var r = new Image;
							r.src = s.logoImg, i.css({
								"background-image": "none"
							}), i.html('<img src="' + s.logoImg + '" alt="\u8611\u83c7\u8857\uff0c\u6211\u7684\u4e70\u624b\u8857">')
						}
						if(s.sLogoImg && "" != s.sLogoImg && t(".sticky-search-container .logo-wrap .logo img").attr("src", s.sLogoImg), s.codeImg && "" != s.codeImg) {
							var c = new Image;
							c.src = s.codeImg, e.insertImg(n, s.codeImg, s.codeLink)
						} else e.insertImg(n, o, "");
						s.codeBg && "" != s.codeBg && n.css({
							"background-image": 'url("' + s.codeBg + '")'
						})
					} else e.insertImg(n, o, "")
				})["catch"](function() {
					e.insertImg(n, o, "")
				})
			},
			insertImg: function(t, e, a) {
				a ? t.html('<a href="' + a + '" target="_blank" class="code_wrap"><img src="' + e + '" alt="\u8611\u83c7\u8857\uff0c\u6211\u7684\u4e70\u624b\u8857"></a>') : t.html('<img src="' + e + '" alt="\u8611\u83c7\u8857\uff0c\u6211\u7684\u4e70\u624b\u8857">')
			},
			fixIe: function() {
				var e = M.ua.ie67 || M.ua.ie8;
				e || t(".top_nav_search .top_search_hint").addClass("is-not-ie8-hack")
			},
			inputTextHide: function(e, a) {
				e.focus(function() {
					var e = t(this);
					t.trim(e.val()) == t.trim(e.attr("def-v")) && e.val(""), a && e.addClass(a)
				}), e.blur(function() {
					var e = t(this);
					"" == t.trim(e.val()) && (e.val(e.attr("def-v")), a && e.removeClass(a))
				})
			},
			getStore: function(t) {
				if(!window.localStorage) return !1;
				var e = window.localStorage.getItem(t),
					a = JSON.parse(e);
				return a
			},
			setStore: function(t, e) {
				if(!window.localStorage) return !1;
				var a = JSON.stringify(e);
				window.localStorage.setItem(t, a)
			}
		};
		var r, c = new s,
			l = t(".top_search_hint"),
			h = o.find(".ts_txt"),
			d = t("#top_nav_form"),
			u = t("#select_type"),
			p = o.find(".selectbox"),
			m = {
				nowHost: window.location.host,
				defultHost: "http://search.mogujie.com",
				listHost: "http://list.mogujie.com/s",
				template: function(t) {
					return '<div class="search_tip_box fl">' + t + "</div>"
				},
				addUrlParam: function(t, e) {
					var a = /\?/.test(t),
						o = "";
					for(var n in e) o += "&" + n + "=" + e[n];
					if(!a && o) {
						var i = o.split("");
						i.shift(), o = i.join(""), t += "?"
					}
					return t += o
				},
				listItemTemp: function(t) {
					var e = '<div class="mr300 tip_wrap"> ';
					e += t.titleName && "" != t.titleName ? ' <h3 class="search_tip_title">' + t.titleName + "</h3> " : " ", e += ' <ul class="search_tip"> ';
					var a = t.items;
					if(a)
						for(var o, n = -1, i = a.length - 1; i > n;) {
							o = a[n += 1], e += " ";
							var s = o.acm,
								r = o.query,
								c = o.color || "#333",
								l = o.highcolor,
								h = o.bold,
								d = o.italic,
								u = o.link || "http://list.mogujie.com/s";
							u = m.addUrlParam(u, {
								q: r,
								acm: s
							}), c = c && "#" === c.slice(0, 1) ? c : "#" + c, l = l ? "#" === l.slice(0, 1) ? l : "#" + l : "";
							var p = c ? "color: " + c + ";" : "",
								f = l ? "background-color: " + l + ";" : "",
								g = h ? "font-weight: bold;" : "",
								v = d ? "font-style: italic;" : "";
							if(10 > n) {
								e += ' <li> <a href="' + u + '" style="' + p + g + v + f + '" class="title" title="' + o.query + '" >' + o.query + "</a> ";
								var _ = o.tags;
								if(_)
									for(var y, w = -1, k = _.length - 1; k > w;) y = _[w += 1], e += " ", y.tag && "" != y.tag && (e += ' <a href="http://list.mogujie.com/s?q=' + o.query + " " + y.tag + "&acm=" + o.acm + '" class="prop" title="' + y.tag + '"><span>' + y.tag + "</sapn></a> "), e += " ";
								e += " </li> "
							}
							e += " "
						}
					return e += " </ul></div>"
				},
				localItemTemp: function(t) {
					var e = '<div class="mr300 tip_wrap"> <h3 class="search_tip_title local_title clearfix"> ';
					t.items.length && (e += ' <span class="del_all">\u5220\u9664</span> '), e += '\u5386\u53f2\u8bb0\u5f55</h3> <ul class="search_tip"> ';
					var a = t.items;
					if(a)
						for(var o, n = -1, i = a.length - 1; i > n;) {
							if(o = a[n += 1], e += " ", 10 > n) {
								e += ' <li class="local_item"> <a href="javascript:;" class="title" title="' + o + '" >' + o + "</a> ";
								var s = o.props;
								if(s)
									for(var r, c = -1, l = s.length - 1; l > c;) r = s[c += 1], e += ' <span class="prop">' + r + "</span> ";
								e += ' <span class="nums local_del">x</span> </li> '
							}
							e += " "
						}
					return e += " </ul></div>"
				},
				hotKeyTpl: function(t) {
					var e = '<div class="search_hot_wrap"> <h3 class="search_tip_title hot_title">\u70ed\u95e8\u5173\u952e\u8bcd</h3> <ul class="hot_list clearfix"> ',
						a = t.items;
					if(a)
						for(var o, n = -1, i = a.length - 1; i > n;) o = a[n += 1], e += " ", 10 > n && (e += " <li><span>" + o.title + "</span></li> "), e += " ";
					return e += " </ul></div>"
				},
				emptyTpl: function() {
					return '<div class="mr300 tip_wrap"><p class="tip_none">\u6682\u65e0\u76f8\u5173\u70ed\u95e8\u5173\u952e\u8bcd</p></div>'
				}
			},
			f = {
				keyName: "_search_local_history",
				keyShowName: "_search_local_history_show",
				maxLength: 20,
				showLength: 10,
				isshow: function() {
					return !0
				},
				abtest: function(t) {
					c.setStore(this.keyShowName, 1)
				},
				get: function() {
					return c.getStore(this.keyName) || []
				},
				getTenItem: function() {
					var t = this.get();
					return t.slice(0, this.showLength)
				},
				set: function(t) {
					c.setStore(this.keyName, t || [])
				},
				addOne: function(e) {
					if(e = t.trim(e), "" != e) {
						var a = this.get(),
							o = t.inArray(e, a); - 1 == o ? (a.unshift(e), a.length > this.maxLength && a.pop()) : (a.splice(o, 1), a.unshift(e)), this.set(a)
					}
				},
				del: function(e) {
					e = t.trim(e);
					var a = this.get(),
						o = t.inArray(e, a);
					o > -1 && (a.splice(o, 1), this.set(a))
				}
			};
		GetQueryString = function(t) {
			var e = new RegExp("(^|&)" + t + "=([^&]*)(&|$)", "i"),
				a = window.location.search.substr(1).match(e);
			return null != a ? decodeURIComponent(a[2]) : ""
		}, e.prototype.init = function(t, e) {
			this.chooseIndex = -1, this.chooseType = t, this.tipLength = e || 0
		};
		var g = new e("undefined"),
			v = {
				ajaxKey: 0,
				hotKeyArr: [],
				isShopHost: function() {
					var e = t("#M_searchbar_flag_isshop") || [],
						a = e.val();
					return !!(e && e.length > 0 && a && "shop" === a)
				},
				showStickySearch: function() {
					var e = (location.pathname, t("#body_wrap")),
						a = e.length > 0 ? e.offset().top : 150;
					return 150 > a && (a = 150), "show" == t("#J_searchbar_flag").val() ? (this.stickyTargetTop = a, !0) : !1
				},
				initSearchForm: function(e) {
					var a = d.find(".ts_txt"),
						o = GetQueryString("q");
					o && a.attr("def-v", "").val(o), M.http.jsonp({
						url: n,
						jsonpCallback: "__GET_HOTWORD_BASEWORD__"
					}).then(function(n) {
						if(n && n.success && "SUCCESS" == n.returnCode && n.data) {
							var i = n.data.sketch && n.data.sketch.data || {},
								s = n.data.hotWord && n.data.hotWord.data || [],
								r = i && i.frontword || "",
								c = i && i.query || "",
								l = i && i.acm || "",
								h = l ? [l] : [];
							o || a.attr("def-v", r).val(r), a.attr("data-def", c), a.attr("data-acm", l);
							var d = "";
							if(t(s).each(function(t, e) {
									var a = e.acm,
										o = e.query,
										n = e.frontword,
										i = e.color || "#666",
										s = e.highcolor,
										r = (e.tag, e.bold),
										c = e.italic,
										l = e.link || "http://list.mogujie.com/s";
									l = m.addUrlParam(l, {
										q: o,
										from: "hotword",
										acm: a
									}), i = i && "#" === i.slice(0, 1) ? i : "#" + i, s = s ? "#" === s.slice(0, 1) ? s : "#" + s : "";
									var u = i ? "color: " + i + ";" : "",
										p = s ? "background-color: " + s + ";" : "",
										f = r ? "font-weight: bold;" : "",
										g = c ? "font-style: italic;" : "",
										v = ['<a rel="nofollow" class="ts_hotword" href="', l, '" style="' + u + f + g + p + '">', n, "</a>"].join("");
									d += v, a && h.push(a)
								}), t(".ts_hotwords").html(d), window.logger && window.logger.log) {
								var u = window.logger.log;
								try {
									u("0x00000000", {
										acms: h
									})
								} catch(p) {}
							}
						}
						t.isFunction(e) && e(n)
					})["catch"](function() {})
				},
				resetFactory: function(t) {
					this.isShopHost() ? this.resetShopContent(t) : f.isshow() ? this.resetListContent(t) : this.resetOldContent(t)
				},
				searchReaultLogger: function(t) {
					if(t && t.data && t.data.tips && t.data.tips.data) {
						for(var e = t.data.tips.data || {}, a = Math.min(e.length, 10), o = {
								acm: [],
								index: [],
								tags: [],
								query: []
							}, n = 0; a > n; n++) {
							var i = e[n];
							o.acm.push(i.acm), o.index.push(n), o.query.push(i.query);
							for(var s = i.tags || [], r = [], c = 0; c < s.length; c++) r.push(s[c].tag);
							o.tags.push(r)
						}
						if(window.logger && window.logger.log) {
							var l = window.logger.log;
							try {
								l("000000120", o)
							} catch(h) {}
						}
					}
				},
				resetListContent: function(a) {
					function o(t) {
						n(function() {
							s()
						})
					}

					function n(o) {
						var n = f.getTenItem();
						return "" == t.trim(a) ? (c.push(r.renderLocalContent(n)), void(t.isFunction(o) && o())) : void M.http.jsonp({
							url: i,
							data: {
								keyWord: a
							},
							jsonpCallback: "__GET_SEARCH_RESULT_1__"
						}).then(function(a) {
							if(h >= r.ajaxKey && a && a.success && a.data && a.data.tips && a.data.tips.data) {
								var n = a.data.tips.data || [],
									i = n.length,
									s = n.slice(0, 10);
								0 == i ? c.push(r.renderEmptyContent()) : (c.push(r.renderSearchContent(s)), g = new e(r.searchTypeName, i)), r.searchReaultLogger(a)
							}
							t.isFunction(o) && o()
						})["catch"](function() {})
					}

					function s() {
						var t = m.template(c.join("")) || "";
						l.html(t), r.showContentBox()
					}
					var r = this,
						c = [],
						h = ++r.ajaxKey;
					o(r.hotKeyArr)
				},
				resetShopContent: function(a) {
					function o(o) {
						M.http.jsonp({
							url: i,
							data: {
								keyWord: a
							},
							jsonpCallback: "__GET_SEARCH_RESULT_2__"
						}).then(function(a) {
							if(d >= s.ajaxKey && a && a.success && a.data && a.data.tips && a.data.tips.data) {
								var n = a.data.tips.data || [],
									i = n.length,
									l = n.slice(0, 10);
								0 == i ? r.push(s.renderEmptyContent()) : (r.push(s.renderSearchContent(l, c)), g = new e(h, i)), s.searchReaultLogger(a)
							}
							t.isFunction(o) && o()
						})["catch"](function() {})
					}

					function n() {
						var t = m.template(r.join("")) || "";
						l.html(t), s.showContentBox()
					}
					var s = this,
						r = [],
						c = "",
						h = "" != a ? s.searchTypeName : s.hotTypeName,
						d = ++s.ajaxKey;
					o(function() {
						n()
					})
				},
				resetOldContent: function(a) {
					function o(o) {
						M.http.jsonp({
							url: i,
							data: {
								keyWord: a
							},
							jsonpCallback: "__GET_SEARCH_RESULT_3__"
						}).then(function(a) {
							if(d >= s.ajaxKey && a && a.success && a.data && a.data.tips && a.data.tips.data) {
								var n = a.data.tips.data || [],
									i = n.length,
									l = n.slice(0, 10);
								0 == i ? r.push(s.renderEmptyContent()) : (r.push(s.renderSearchContent(l, c)), g = new e(h, i)), s.searchReaultLogger(a)
							}
							t.isFunction(o) && o()
						})["catch"](function() {})
					}

					function n() {
						var t = m.template(r.join("")) || "";
						l.html(t), l.find(".tip_wrap").removeClass("mr300").addClass("mr300_fix"), s.showContentBox()
					}
					var s = this,
						r = [],
						c = "" != a ? "\u641c\u7d22\u7ed3\u679c" : "\u70ed\u95e8\u5173\u952e\u8bcd",
						h = "" != a ? s.searchTypeName : s.hotTypeName,
						d = ++s.ajaxKey;
					o(function() {
						n()
					})
				},
				searchTypeName: "",
				renderSearchContent: function(t, e) {
					return m.listItemTemp({
						titleName: e || null,
						items: t
					})
				},
				localTypeName: "local",
				renderLocalContent: function(t) {
					return m.localItemTemp({
						items: t
					})
				},
				updateLocalContent: function(t, e) {
					var a = t.parent(),
						o = t.parents(".search_tip");
					if(a.length && o.length)
						if(e.length < f.showLength) a.remove();
						else {
							var n = e[f.showLength - 1];
							a.find(".title").attr("title", n).html(n), a.appendTo(o)
						}
				},
				destoryLocalContent: function(t) {
					var e = t.parents(".tip_wrap").find(".search_tip");
					e.length && e.empty()
				},
				hotTypeName: "default",
				renderHotContent: function(t) {
					for(var e = [], a = 0; a < t.length; a++) e.push({
						title: t[a]
					});
					return m.hotKeyTpl({
						items: e
					})
				},
				renderEmptyContent: function() {
					return m.emptyTpl()
				},
				destoryContent: function() {
					l.empty().hide()
				},
				getContentPosition: function(t, e) {
					var a = e.offset(),
						o = t.data("fixleft"),
						n = t.data("fixtop");
					o && (a.left += parseInt(o)), n && (a.top -= parseInt(n));
					var i = e.width() - 34;
					t.css({
						left: a.left,
						top: a.top + e.height() + 2,
						width: i
					}).addClass("hasposition")
				},
				showContentBox: function() {
					l.show().data("isshow", !0)
				},
				changeListTab: function(t) {
					var e = l.find(".search_tip li"),
						a = e.eq(t);
					return e.removeClass("checked"), a.addClass("checked"), a.find(".title").text()
				},
				changeType: function(t) {
					var e = t.parent(),
						a = e.attr("data-index"),
						o = t.text();
					if(u.val(a), p.find(".selected").text("\u641c" + o), e.siblings("li").removeClass("current"), e.addClass("current"), "shop" == a) h.val() == h.attr("def-v") && h.val("");
					else if("" == h.val()) {
						var n = h.attr("def-v");
						h.val(n)
					}
					4 == a ? "shop.mogujie.com" === m.nowHost ? d.attr("action", m.defultHost + "/group/search/") : d.attr("action", "/group/search/") : "shop.mogujie.com" === m.nowHost ? d.attr("action", m.listHost) : "shop" == a ? d.attr("action", "http://list.mogujie.com/book/search/shop") : d.attr("action", m.listHost), p.removeClass("sele_hover")
				},
				initStickySearch: function() {
					var e = t("#nav_search_form"),
						a = ['<div id="J_sticky_container" class="sticky-search-container">', '<div class="wrap clearfix">', '<div class="logo-wrap clearfix">', '<a rel="nofollow" href="http://www.mogujie.com" class="logo" title="\u8611\u83c7\u8857|\u6211\u7684\u4e70\u624b\u8857"><img src="https://s10.mogucdn.com/p1/170301/idid_ifqtam3chbrgkzrvmuzdambqgyyde_224x70.png" alt="\u8611\u83c7\u8857\uff0c\u6211\u7684\u4e70\u624b\u8857"></a>', "</div>", '<div class="sticky-search-content"></div>', "</div>", "</div>"].join("");
					t("body").append(a);
					var o = t(".sticky-search-container");
					t(window).off("scroll.sticky").on("scroll.sticky", function() {
						t(document).scrollTop() > v.stickyTargetTop ? o.hasClass("lets-rock") || o.find(".sticky-search-content").append(e).end().addClass("lets-rock") : o.hasClass("lets-rock") && (t(".normal-search-content").append(t("#nav_search_form")), o.find(".sticky-search-content").empty().end().removeClass("lets-rock"))
					})
				}
			};
		a.submitBefore = function(t, e) {
			d.data({
				type: t,
				index: e
			})
		}, a.submitAfter = function() {
			d.removeData("type index");
			var e = t.trim(d.find("input[name=t]").val());
			d.find("input[name=t]").remove(), g.chooseType = "undefined", g.chooseIndex = -1;
			var a = t.map(d.serializeObject(), function(t, e) {
					return [e, encodeURIComponent(t)].join("=")
				}).join("&"),
				o = "";
			if("shop" == e) o = "http://list.mogujie.com/book/search/shop?" + a;
			else {
				var n = h.attr("data-acm") || "",
					i = h.val() || "",
					s = h.attr("data-def") || "";
				o = n && i && s && s == i ? "http://list.mogujie.com/s?acm=" + n + "&" + a : "http://list.mogujie.com/s?" + a
			}
			logger && logger.generatePtpParams && (o = logger.generatePtpParams(o)), window.location.href = o
		};
		var _ = function() {
			c.inputTextHide(h, "ts_high"), "www.mogujie.com" === m.nowHost || p.parents(".store_header").length || d.attr("action", m.listHost), d.find(".ts_btn").attr("disabled", !1), a()
		};
		v.initSearchForm(_)
	}
}(jQuery);
! function(s) {
	function e(i) {
		if(a[i]) return a[i].exports;
		var o = a[i] = {
			exports: {},
			id: i,
			loaded: !1
		};
		return s[i].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports
	}
	var a = {};
	return e.m = s, e.c = a, e.p = "", e(0)
}([function(s, e, a) {
	function i(s) {
		var e = "" + s,
			a = d.exec(e);
		if(!a) return e;
		var i, o = "",
			t = 0,
			l = 0;
		for(t = a.index; t < e.length; t++) {
			switch(e.charCodeAt(t)) {
				case 34:
					i = "&quot;";
					break;
				case 38:
					i = "&amp;";
					break;
				case 39:
					i = "&#39;";
					break;
				case 60:
					i = "&lt;";
					break;
				case 62:
					i = "&gt;";
					break;
				default:
					continue
			}
			l !== t && (o += e.substring(l, t)), l = t + 1, o += i
		}
		return l !== t ? o + e.substring(l, t) : o
	}

	function o(s) {
		return $.Deferred(function(e) {
			switch(s.ret) {
				case c.Code.SessionInvalid:
					logger.goTo("//portal.mogujie.com/user/login?redirect_url=" + window.location.href);
					break;
				case "SUCCESS":
					e.resolve();
					break;
				default:
					e.reject(s.msg)
			}
		})
	}
	a(1);
	var t = a(3),
		l = a(4),
		n = a(5),
		r = a(6),
		p = window.M || {},
		c = window.MWP || window.M.MWP,
		d = /["'&<>]/,
		h = "",
		f = {
			init: function() {
				h = $("#shopId").val() || window.___shopId, this.setMoguTalk(), this.getShopInfoDom(), this.getShopInfoDetailDom(), this.getTopBannerNavDom(), this.eventInit()
			},
			setMoguTalk: function() {
				$("#mogutalk_widget_box") && $("#mogutalk_widget_box").html('<div class="mogutalk_widget_btn kefu fl mogutalk_widget4" data-bid="' + h + '#23" data-style="widget4" data-from="shop-header"></div>')
			},
			eventInit: function() {
				var s = this;
				s._shopFollow = $(".J-shop-follow"), $(".J-show-user-detail").on("mouseover", function() {
					$(".J-shop-user-info-detail").show(), $(".J-user-info-box").css({
						background: "#fff"
					})
				}), $(".J-user-info-box").on("mouseleave", function() {
					$(".J-shop-user-info-detail").hide(), $(".J-user-info-box").css({
						background: "#fff"
					})
				}), $(".J-searchInShop").on("click", function() {
					document.getElementById("J_SearchInShopForm") && document.getElementById("J_SearchInShopForm").remove();
					var s = document.createElement("form"),
						e = $("#headerSeachValue").val();
					e = i(e), s.innerHTML = '<input type="hidden" name="q" class="search-key" value="' + e + '" />', s.setAttribute("id", "J_SearchInShopForm"), s.setAttribute("target", "_blank"), s.setAttribute("action", $("#shopSearchUrl").val()), s.setAttribute("method", "GET"), document.body.appendChild(s), s.submit()
				}), $(".J-shop-follow").on("click", function() {
					c && c.request("mwp.shopfavorite.collectShop", "1", {
						shopId: h
					}).then(function(e) {
						o(e).then(function() {
							"SUCCESS" === e.ret && e.data && (s._shopFollow.hasClass("shop-followed") ? s._shopFollow.removeClass("shop-followed").text("\u6536\u85cf\u5e97\u94fa") : s._shopFollow.addClass("shop-followed").text("\u5df2\u6536\u85cf"))
						})
					})
				})
			},
			getShopInfoDom: function() {
				var s = this;
				s._shopFollow = $(".J-shop-follow");
				var e = {
					shopId: h,
					shopType: "mgjpc"
				};
				c && c.request("mwp.shopappservice.shopHead", "1", e).then(c.filterResult).then(function(e) {
					$(".J-shop-user-info").append(t(e)), 1 === e.isFans && s._shopFollow.addClass("shop-followed").text("\u5df2\u6536\u85cf")
				})
			},
			getShopInfoDetailDom: function() {
				var s = {
					shopId: h,
					shopType: "mgjpc"
				};
				c && c.request("mwp.shopappservice.shopDetail", "1", s).then(c.filterResult).then(function(s) {
					$(".J-shop-user-info-detail").append(l(s))
				})
			},
			getTopBannerNavDom: function() {
				var s = this,
					e = {
						shopId: h,
						shopType: "mgjpc",
						preview: p.fn.getQueryString("preview")
					};
				c && c.request("mwp.shopappservice.asynShopHead", "2", e).then(c.filterResult).then(function(e) {
					s.setTopBannerDom(e.topBanner), s.setTopNavDom(e.topNav);
					var a = 63;
					$(".J-top-nav-title").each(function(s, e) {
						a += $(e).width(), a > 1200 && $(e) && $(e).remove()
					})
				})
			},
			setTopBannerDom: function(s) {
				var e = s.formData.bgImg.models[0].img || "https://s10.mogucdn.com/p2/160918/upload_14ijkcfc73248keahj3072397i4j8_1920x150.jpg";
				$(".J-shop-top-banner").append(n({
					img: e
				}))
			},
			setTopNavDom: function(s) {
				var e = s.formData.form.models[0].nav || {};
				$(".J-shop-top-nav").append(r(e)), $(".J-top-nav-title").on("mouseover", function() {
					$(this).find(".category-list").show()
				}).on("mouseleave", function() {
					$(this).find(".category-list").hide()
				}), $(".category-list").on("mouseleave", function() {
					$(this).hide()
				}), $(".category-list").find("li").on("mouseover", function() {
					$(this).find(".sub-list").show()
				}).on("mouseleave", function() {
					$(this).find(".sub-list").hide()
				}), $(".sub-list").on("mouseleave", function() {
					$(this).hide()
				})
			}
		};
	s.exports = f.init()
}, function(s, e) {}, , function(s, e) {
	s.exports = function(s) {
		var e = '<a href="' + s.shopBaseUrl + '" class="avatar" title="' + s.uname + '"> <img class="face fl" src="' + s.avatar + '"></a><div class="name-score-wrap"> <div class="name-wrap fl"> <a href="' + s.shopBaseUrl + '" class="name fl" title="' + s.uname + '">' + s.uname + '</a> <p class="mark"> ';
		return s.tag && -1 !== s.tag && (e += ' <img src="' + s.tag + '" alt="\u5e97\u94fa\u8ba4\u8bc1"> '), e += ' </p> </div> <div class="score-wrap"> <p class="star"> ', s.level >= 1 && (e += " <i></i> "), e += " ", s.level >= 2 && (e += " <i></i> "), e += " ", s.level >= 3 && (e += " <i></i> "), e += " ", s.level >= 4 && (e += " <i></i> "), e += " ", s.level >= 5 && (e += " <i></i> "), e += " </p> ", s.dsr && s.dsr.pkDsr && (e += ' <p class="descript"> <span class="cat"> \u63cf\u8ff0<b class="', 1 !== s.dsr.pkDsr.desc && (e += "low"), e += '">' + s.dsr.shopDsr.desc + '</b> </span> <span class="cat"> \u8d28\u91cf<b class="', 1 !== s.dsr.pkDsr.quality && (e += "low"), e += '">' + s.dsr.shopDsr.quality + '</b> </span> <span class="cat"> \u670d\u52a1<b class="', 1 !== s.dsr.pkDsr.service && (e += "low"), e += '">' + s.dsr.shopDsr.service + "</b> </span> </p> "), e += " </div></div>"
	}
}, function(s, e) {
	s.exports = function(s) {
		var e = ' <div class="info-box fl"> ';
		return s.shopInfo && (e += ' <ol class="li li3"> ', s.shopInfo.area && (e += ' <li><span class="tag">\u6240\u5728\u5730\u533a\uff1a</span>' + s.shopInfo.area + "</li> "), s.goodsTotal && (e += '<li><span class="tag">\u5546\u54c1\u6570\uff1a</span>' + s.goodsTotal + "</li>"), e += " ", s.shopFansTotal && (e += ' <li><span class="tag">\u6536\u85cf\u6570\uff1a</span>' + s.shopFansTotal + "</li> "), e += " ", "hidden" !== s.shopSaleTotal && (e += ' <li><span class="tag">\u9500\u552e\u91cf\uff1a</span>' + s.shopSaleTotal + "</li> "), e += " ", s.shopInfo.enterTimeData && (e += ' <li><span class="tag">\u521b\u5efa\u65f6\u95f4\uff1a</span>' + s.shopInfo.enterTimeData + "</li> "), e += " ", s.deposit && "hidden" !== s.deposit && s.deposit > 0 && (e += ' <li><span class="tag">\u5e97\u94fa\u4fdd\u8bc1\u91d1\uff1a</span>\u5df2\u7f34\u7eb3</li> '), e += " ", s.identify && 1 === s.identify.shopType && s.identify.idenImg && (e += ' <li class="pl20"> <img class="shop-individual-licen" src="' + s.identify.idenImg + '" alt="" /> </li> '), e += " ", s.identify && 2 === s.identify.shopType && s.identify.idenImg && (e += ' <li class="company-info clearfix"> <span class="tag">\u516c\u53f8\u540d\uff1a</span><span class="c-name">' + s.identify.companyName + "</span> </li> "), e += " ", s.identify && 2 === s.identify.shopType && s.identify.idenImg && (e += ' <li> <span class="tag">\u5de5\u5546\u6267\u7167\uff1a</span><a class="shop-company-licen" href="' + s.identify.companyLicense + '" target="_blank"><img src="' + s.identify.idenImg + '" alt="" /></a> </li> '), e += " ", s.identify && s.identify.foodImg && (e += ' <li><span class="tag" style="width:120px">\u98df\u54c1\u7ecf\u8425\u8bb8\u53ef\u8bc1\uff1a</span><a class="shop-company-licen" href="' + s.identify.foodImg + '" target="_blank"><img src="' + s.identify.foodIcon + '" alt="" /></a></li> '), e += ' <li class="tc mt10 mb3"><a class="go-detail" href="' + s.shopCreditUrl + '" target="_blank" rel="nofollow">\u67e5\u770b\u8be6\u60c5</a></li> </ol> '), e += " </div> ", s.dsr && s.dsr.pkDsr && (e += ' <ol class="li li1"> <li class="title">\u52a8\u6001\u8bc4\u5206</li> <li>\u63cf\u8ff0\u76f8\u7b26\uff1a <span class="', e += 1 === s.dsr.pkDsr.desc ? "num" : "low", e += '"> ' + s.dsr.shopDsr.desc + ' </span> </li> <li>\u8d28\u91cf\u6ee1\u610f\uff1a <span class="', e += 1 === s.dsr.pkDsr.quality ? "num" : "low", e += '"> ' + s.dsr.shopDsr.quality + ' </span> </li> <li>\u670d\u52a1\u5468\u5230\uff1a <span class="', e += 1 === s.dsr.pkDsr.service ? "num" : "low", e += '"> ' + s.dsr.shopDsr.service + " </span> </li> </ol> "), e += " ", s.dsr && s.dsr.pkDsr && (e += ' <ol class="li li2"> <li class="title">\u6bd4\u540c\u884c\u5e73\u5747</li> <li> <span class="tag ', e += 1 === s.dsr.pkDsr.desc ? "up" : "down", e += '"> ', e += 1 === s.dsr.pkDsr.desc ? "\u9ad8" : "\u4f4e", e += " </span> " + s.dsr.exAverageDsr.desc + ' </li> <li> <span class="tag ', e += 1 === s.dsr.pkDsr.quality ? "up" : "down", e += '"> ', e += 1 === s.dsr.pkDsr.quality ? "\u9ad8" : "\u4f4e", e += " </span> " + s.dsr.exAverageDsr.quality + ' </li> <li> <span class="tag ', e += 1 === s.dsr.pkDsr.service ? "up" : "down", e += '"> ', e += 1 === s.dsr.pkDsr.service ? "\u9ad8" : "\u4f4e", e += " </span> " + s.dsr.exAverageDsr.service + " </li> </ol> "), e += " ", s.dsr && s.dsr.service && (e += ' <ol class="li li4"  v-if="shopDetailInfo.dsr"> <li class="title">\u672c\u5e97</li> <li>\u5e73\u5747\u53d1\u8d27\u65f6\u95f4\uff1a <span class="', e += s.dsr.pkDsr.shopShip <= 0 ? "num" : "low", e += '"> ' + s.dsr.service.shopShip + ' </span>\u5929 </li> <li>\u9000\u8d27\u7387\uff1a <span class="', e += s.dsr.pkDsr.shopBack <= 0 ? "num" : "low", e += '"> ' + s.dsr.service.shopBack + ' % </span> </li> <li>\u6709\u6548\u6295\u8bc9\u7387\uff1a <span class="', e += s.dsr.pkDsr.shopComplain <= 0 ? "num" : "low", e += '"> ' + s.dsr.service.shopComplain + " % </span> </li> </ol> "), e += " ", s.dsr && s.dsr.service && (e += ' <ol class="li li5"> <li class="title">\u884c\u4e1a</li> ', s.dsr.service.averageShip && (e += " <li> " + s.dsr.service.averageShip + " \u5929 </li> "), e += " ", s.dsr.service.averageBack && (e += " <li> " + s.dsr.service.averageBack + " \uff05 </li> "), e += " ", s.dsr.service.averageComplain && (e += " <li> " + s.dsr.service.averageComplain + " \uff05 </li> "), e += " </ol> "), e += "</div>"
	}
}, function(s, e) {
	s.exports = function(s) {
		var e = '<div class="top-banner-img" style="background-image: url(' + s.img + '); background-repeat: no-repeat; background-size: cover; background-position: center center"></div>';
		return e
	}
}, function(s, e) {
	s.exports = function(s) {
		var e = '<div class="top-nav"><div class="nav-mask"></div><ul><li><a href="' + s.shopurl + '">\u9996\u9875</a></li>';
		if(s.isShow) {
			if(e += '<li class="J-top-nav-title"><a href="' + s.shopTotal + '">\u5168\u90e8\u5546\u54c1', s.total && s.total.length && (e += '<em class="arrow"></em>'), e += "</a>", s.total && s.total.length) {
				e += '<ol class="category-list">';
				var a = s.total;
				if(a)
					for(var i, o = -1, t = a.length - 1; t > o;) {
						if(i = a[o += 1], e += '<li><a href="' + i.link + '">' + i.name + "</a>", i.subList && i.subList.length) {
							e += '<dl class="sub-list">';
							var l = i.subList;
							if(l)
								for(var n, r = -1, p = l.length - 1; p > r;) n = l[r += 1], e += '<dd><a href="' + n.link + '">' + n.name + "</a></dd>";
							e += "</dl>"
						}
						e += "</li>"
					}
				e += "</ol>"
			}
			e += "</li>"
		}
		var c = s.nav;
		if(c)
			for(var d, o = -1, h = c.length - 1; h > o;)
				if(d = c[o += 1], s.isShow && 6 > o || !s.isShow && 7 > o) {
					if(e += '<li class="J-top-nav-title"><a href="' + d.link + '" class="', "shopEventTab" === d.type && (e += "event-red"), e += '">' + d.name, d.subList && d.subList.length && (e += '<em class="arrow"></em>'), e += "</a>", d.subList && d.subList.length > 0) {
						e += '<ol class="category-list">';
						var f = d.subList;
						if(f)
							for(var n, r = -1, u = f.length - 1; u > r;) n = f[r += 1], e += '<li><a href="' + n.link + '">' + n.name + "</a></li>";
						e += "</ol>"
					}
					e += "</li>"
				}
		return e += "</ul></div>"
	}
}]);