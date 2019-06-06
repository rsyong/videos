! function(e, t) {
	"object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.WhiteBoard = t() : e.WhiteBoard = t()
}(window, function() {
	return function(e) {
		var t = {};

		function n(r) {
			if(t[r]) return t[r].exports;
			var i = t[r] = {
				i: r,
				l: !1,
				exports: {}
			};
			return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
		}
		return n.m = e, n.c = t, n.d = function(e, t, r) {
			n.o(e, t) || Object.defineProperty(e, t, {
				configurable: !1,
				enumerable: !0,
				get: r
			})
		}, n.r = function(e) {
			Object.defineProperty(e, "__esModule", {
				value: !0
			})
		}, n.n = function(e) {
			var t = e && e.__esModule ? function() {
				return e.default
			} : function() {
				return e
			};
			return n.d(t, "a", t), t
		}, n.o = function(e, t) {
			return Object.prototype.hasOwnProperty.call(e, t)
		}, n.p = "", n(n.s = 480)
	}([function(e, t, n) {
		"use strict";
		var r, i = n(9),
			o = (r = i) && r.__esModule ? r : {
				default: r
			};
		var a = n(73),
			s = n(68);
		n(87);
		var u, c, l = n(12),
			f = l.getGlobal(),
			d = /\s+/;
		l.deduplicate = function(e) {
			var t = [];
			return e.forEach(function(e) {
				-1 === t.indexOf(e) && t.push(e)
			}), t
		}, l.capFirstLetter = function(e) {
			return e ? (e = "" + e).slice(0, 1).toUpperCase() + e.slice(1) : ""
		}, l.guid = (u = function() {
			return(65536 * (1 + Math.random()) | 0).toString(16).substring(1)
		}, function() {
			return u() + u() + u() + u() + u() + u() + u() + u()
		}), l.extend = function(e, t, n) {
			for(var r in t) void 0 !== e[r] && !0 !== n || (e[r] = t[r])
		}, l.filterObj = function(e, t) {
			var n = {};
			return l.isString(t) && (t = t.split(d)), t.forEach(function(t) {
				e.hasOwnProperty(t) && (n[t] = e[t])
			}), n
		}, l.copy = function(e, t) {
			return t = t || {}, e ? (Object.keys(e).forEach(function(n) {
				l.exist(e[n]) && (t[n] = e[n])
			}), t) : t
		}, l.copyWithNull = function(e, t) {
			return t = t || {}, e ? (Object.keys(e).forEach(function(n) {
				(l.exist(e[n]) || l.isnull(e[n])) && (t[n] = e[n])
			}), t) : t
		}, l.findObjIndexInArray = function(e, t) {
			e = e || [];
			var n = t.keyPath || "id",
				r = -1;
			return e.some(function(e, i) {
				if(s(e, n) === t.value) return r = i, !0
			}), r
		}, l.findObjInArray = function(e, t) {
			var n = l.findObjIndexInArray(e, t);
			return -1 === n ? null : e[n]
		}, l.mergeObjArray = function() {
			var e = [],
				t = [].slice.call(arguments, 0, -1),
				n = arguments[arguments.length - 1];
			l.isArray(n) && (t.push(n), n = {});
			var r, i = n.keyPath = n.keyPath || "id";
			for(n.sortPath = n.sortPath || i; !e.length && t.length;) e = (e = t.shift() || []).slice(0);
			return t.forEach(function(t) {
				t && t.forEach(function(t) {
					-1 !== (r = l.findObjIndexInArray(e, {
						keyPath: i,
						value: s(t, i)
					})) ? e[r] = l.merge({}, e[r], t) : e.push(t)
				})
			}), n.notSort || (e = l.sortObjArray(e, n)), e
		}, l.cutObjArray = function(e) {
			var t = e.slice(0),
				n = arguments.length,
				r = [].slice.call(arguments, 1, n - 1),
				i = arguments[n - 1];
			l.isObject(i) || (r.push(i), i = {});
			var o, a = i.keyPath = i.keyPath || "id";
			return r.forEach(function(e) {
				l.isArray(e) || (e = [e]), e.forEach(function(e) {
					e && (i.value = s(e, a), -1 !== (o = l.findObjIndexInArray(t, i)) && t.splice(o, 1))
				})
			}), t
		}, l.sortObjArray = function(e, t) {
			var n = (t = t || {}).sortPath || "id";
			a.insensitive = !!t.insensitive;
			var r, i, o, u = !!t.desc;
			return o = l.isFunction(t.compare) ? t.compare : function(e, t) {
				return r = s(e, n), i = s(t, n), u ? a(i, r) : a(r, i)
			}, e.sort(o)
		}, l.emptyFunc = function() {}, l.isEmptyFunc = function(e) {
			return e === l.emptyFunc
		}, l.notEmptyFunc = function(e) {
			return e !== l.emptyFunc
		}, l.splice = function(e, t, n) {
			return [].splice.call(e, t, n)
		}, l.reshape2d = function(e, t) {
			if(Array.isArray(e)) {
				l.verifyParamType("type", t, "number", "util::reshape2d");
				var n = e.length;
				if(n <= t) return [e];
				for(var r = Math.ceil(n / t), i = [], o = 0; o < r; o++) i.push(e.slice(o * t, (o + 1) * t));
				return i
			}
			return e
		}, l.flatten2d = function(e) {
			if(Array.isArray(e)) {
				var t = [];
				return e.forEach(function(e) {
					t = t.concat(e)
				}), t
			}
			return e
		}, l.dropArrayDuplicates = function(e) {
			if(Array.isArray(e)) {
				for(var t = {}, n = []; e.length > 0;) {
					t[e.shift()] = !0
				}
				for(var r in t) !0 === t[r] && n.push(r);
				return n
			}
			return e
		}, l.onError = function(e) {
			throw new function(e) {
				"object" === (void 0 === e ? "undefined" : (0, o.default)(e)) ? (this.callFunc = e.callFunc || null, this.message = e.message || "UNKNOW ERROR") : this.message = e, this.time = new Date, this.timetag = +this.time
			}(e)
		}, l.verifyParamPresent = function(e, t, n, r) {
			n = n || "";
			var i = !1;
			switch(l.typeOf(t)) {
				case "undefined":
				case "null":
					i = !0;
					break;
				case "string":
					"" === t && (i = !0);
					break;
				case "StrStrMap":
				case "object":
					Object.keys(t).length || (i = !0);
					break;
				case "array":
					t.length ? t.some(function(e) {
						if(l.notexist(e)) return i = !0, !0
					}) : i = !0
			}
			i && l.onParamAbsent(n + e, r)
		}, l.onParamAbsent = function(e, t) {
			l.onParamError("缺少参数 " + e + ", 请确保参数不是 空字符串、空对象、空数组、null或undefined, 或数组的内容不是 null/undefined", t)
		}, l.verifyParamAbsent = function(e, t, n, r) {
			n = n || "", void 0 !== t && l.onParamPresent(n + e, r)
		}, l.onParamPresent = function(e, t) {
			l.onParamError("多余的参数 " + e, t)
		}, l.verifyParamType = function(e, t, n, r) {
			var i = l.typeOf(t).toLowerCase();
			l.isArray(n) || (n = [n]);
			var o = !0;
			switch(-1 === (n = n.map(function(e) {
				return e.toLowerCase()
			})).indexOf(i) && (o = !1), i) {
				case "number":
					isNaN(t) && (o = !1);
					break;
				case "string":
					"numeric or numeric string" === n.join("") && (o = !!/^[0-9]+$/.test(t))
			}
			o || l.onParamInvalidType(e, n, "", r)
		}, l.onParamInvalidType = function(e, t, n, r) {
			n = n || "", t = l.isArray(t) ? (t = t.map(function(e) {
				return '"' + e + '"'
			})).join(", ") : '"' + t + '"', l.onParamError('参数"' + n + e + '"类型错误, 合法的类型包括: [' + t + "]", r)
		}, l.verifyParamValid = function(e, t, n, r) {
			l.isArray(n) || (n = [n]), -1 === n.indexOf(t) && l.onParamInvalidValue(e, n, r)
		}, l.onParamInvalidValue = function(e, t, n) {
			l.isArray(t) || (t = [t]), t = t.map(function(e) {
				return '"' + e + '"'
			}), l.isArray(t) && (t = t.join(", ")), l.onParamError("参数 " + e + "值错误, 合法的值包括: [" + JSON.stringify(t) + "]", n)
		}, l.verifyParamMin = function(e, t, n, r) {
			t < n && l.onParamError("参数" + e + "的值不能小于" + n, r)
		}, l.verifyParamMax = function(e, t, n, r) {
			t > n && l.onParamError("参数" + e + "的值不能大于" + n, r)
		}, l.verifyArrayMax = function(e, t, n, r) {
			t.length > n && l.onParamError("参数" + e + "的长度不能大于" + n, r)
		}, l.verifyEmail = (c = /^\S+@\S+$/, function(e, t, n) {
			c.test(t) || l.onParamError("参数" + e + "邮箱格式错误, 合法格式必须包含@符号, @符号前后至少要各有一个字符", n)
		}), l.verifyTel = function() {
			var e = /^[+\-()\d]+$/;
			return function(t, n, r) {
				e.test(n) || l.onParamError("参数" + t + "电话号码格式错误, 合法字符包括+、-、英文括号和数字", r)
			}
		}(), l.verifyBirth = function() {
			var e = /^(\d{4})-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;
			return function(t, n, r) {
				e.test(n) || l.onParamError("参数" + t + '生日格式错误, 合法为"yyyy-MM-dd"', r)
			}
		}(), l.onParamError = function(e, t) {
			l.onError({
				message: e,
				callFunc: t
			})
		}, l.verifyOptions = function(e, t, n, r, i) {
			if(e = e || {}, t && (l.isString(t) && (t = t.split(d)), l.isArray(t))) {
				"boolean" != typeof n && (i = n || null, n = !0, r = "");
				var o = n ? l.verifyParamPresent : l.verifyParamAbsent;
				t.forEach(function(t) {
					o.call(l, t, e[t], r, i)
				})
			}
			return e
		}, l.verifyParamAtLeastPresentOne = function(e, t, n) {
			t && (l.isString(t) && (t = t.split(d)), l.isArray(t) && (t.some(function(t) {
				return l.exist(e[t])
			}) || l.onParamError("以下参数[" + t.join(", ") + "]至少需要传入一个", n)))
		}, l.verifyParamPresentJustOne = function(e, t, n) {
			t && (l.isString(t) && (t = t.split(d)), l.isArray(t) && 1 !== t.reduce(function(t, n) {
				return l.exist(e[n]) && t++, t
			}, 0) && l.onParamError("以下参数[" + t.join(", ") + "]必须且只能传入一个", n))
		}, l.verifyBooleanWithDefault = function(e, t, n, r, i) {
			l.undef(n) && (n = !0), d.test(t) && (t = t.split(d)), l.isArray(t) ? t.forEach(function(t) {
				l.verifyBooleanWithDefault(e, t, n, r, i)
			}) : void 0 === e[t] ? e[t] = n : l.isBoolean(e[t]) || l.onParamInvalidType(t, "boolean", r, i)
		}, l.verifyFileInput = function(e, t) {
			return l.verifyParamPresent("fileInput", e, "", t), l.isString(e) && ((e = document.getElementById(e)) || l.onParamError("找不到要上传的文件对应的input, 请检查fileInput id " + e, t)), e.tagName && "input" === e.tagName.toLowerCase() && "file" === e.type.toLowerCase() || l.onParamError("请提供正确的 fileInput, 必须为 file 类型的 input 节点 tagname:" + e.tagName + ", filetype:" + e.type, t), e
		}, l.verifyFileType = function(e, t) {
			l.verifyParamValid("type", e, l.validFileTypes, t)
		}, l.verifyCallback = function(e, t, n) {
			d.test(t) && (t = t.split(d)), l.isArray(t) ? t.forEach(function(t) {
				l.verifyCallback(e, t, n)
			}) : e[t] ? l.isFunction(e[t]) || l.onParamInvalidType(t, "function", "", n) : e[t] = l.emptyFunc
		}, l.verifyFileUploadCallback = function(e, t) {
			l.verifyCallback(e, "uploadprogress uploaddone uploaderror uploadcancel", t)
		}, l.validFileTypes = ["image", "audio", "video", "file"], l.validFileExts = {
			image: ["bmp", "gif", "jpg", "jpeg", "jng", "png", "webp"],
			audio: ["mp3", "wav", "aac", "wma", "wmv", "amr", "mp2", "flac", "vorbis", "ac3"],
			video: ["mp4", "rm", "rmvb", "wmv", "avi", "mpg", "mpeg"]
		}, l.filterFiles = function(e, t) {
			var n, r, i = "file" === (t = t.toLowerCase()),
				o = [];
			return [].forEach.call(e, function(e) {
				if(i) o.push(e);
				else if(n = e.name.slice(e.name.lastIndexOf(".") + 1), (r = e.type.split("/"))[0] && r[1]) {
					(r[0].toLowerCase() === t || -1 !== l.validFileExts[t].indexOf(n)) && o.push(e)
				}
			}), o
		};
		var p, h, v = l.supportFormData = l.notundef(f.FormData);
		l.getFileName = function(e) {
			return e = l.verifyFileInput(e), v ? e.files[0].name : e.value.slice(e.value.lastIndexOf("\\") + 1)
		}, l.getFileInfo = (p = {
			ppt: 1,
			pptx: 2,
			pdf: 3
		}, function(e) {
			var t = {};
			if(!(e = l.verifyFileInput(e)).files) return t;
			var n = e.files[0];
			return v && (t.name = n.name, t.size = n.size, t.type = n.name.match(/\.(\w+)$/), t.type = t.type && t.type[1].toLowerCase(), t.transcodeType = p[t.type] || 0), t
		}), l.sizeText = (h = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "BB"], function(e) {
			var t, n = 0;
			do {
				t = (e = Math.floor(100 * e) / 100) + h[n], e /= 1024, n++
			} while (e > 1);
			return t
		}), l.promises2cmds = function(e) {
			return e.map(function(e) {
				return e.cmd
			})
		}, l.objs2accounts = function(e) {
			return e.map(function(e) {
				return e.account
			})
		}, l.teams2ids = function(e) {
			return e.map(function(e) {
				return e.teamId
			})
		}, l.objs2ids = function(e) {
			return e.map(function(e) {
				return e.id
			})
		}, l.getMaxUpdateTime = function(e) {
			var t = e.map(function(e) {
				return +e.updateTime
			});
			return Math.max.apply(Math, t)
		}, l.genCheckUniqueFunc = function(e, t) {
			return e = e || "id", t = t || 1e3,
				function(t) {
					this.uniqueSet = this.uniqueSet || {}, this.uniqueSet[e] = this.uniqueSet[e] || {};
					var n = this.uniqueSet[e],
						r = t[e];
					return !n[r] && (n[r] = !0, !0)
				}
		}, l.fillPropertyWithDefault = function(e, t, n) {
			return !!l.undef(e[t]) && (e[t] = n, !0)
		}, e.exports = l
	}, function(e, t, n) {
		"use strict";
		t.__esModule = !0, t.default = function(e, t) {
			if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
	}, function(e, t, n) {
		"use strict";
		var r = {
			info: {
				hash: "1eb7eaefc2ae42b41a38b757b8d0a730c46e5067",
				shortHash: "1eb7eaef",
				version: "6.3.0",
				sdkVersion: "52",
				nrtcVersion: "4.5.0",
				nrtcSdkVersion: "1",
				protocolVersion: 1
			},
			agentVersion: "2.8.0.906",
			lbsUrl: "https://lbs.netease.im/lbs/webconf.jsp",
			roomserver: "roomserver.netease.im",
			connectTimeout: 8e3,
			xhrTimeout: 8e3,
			socketTimeout: 8e3,
			reconnectionDelay: 1600,
			reconnectionDelayMax: 8e3,
			reconnectionJitter: .01,
			reconnectiontimer: null,
			heartbeatInterval: 8e3,
			cmdTimeout: 8e3,
			defaultReportUrl: "https://dr.netease.im/1.gif",
			isWeixinApp: !1,
			isNodejs: !1,
			isRN: !1,
			PUSHTOKEN: "",
			PUSHCONFIG: {},
			CLIENTTYPE: 16,
			PushPermissionAsked: !1,
			iosPushConfig: null,
			androidPushConfig: null,
			netDetectAddr: "https://roomserver-dev.netease.im/v1/sdk/detect/local"
		};
		r.weixinNetcall = r.nrtcNetcall = {
			checkSumUrl: "https://nrtc.netease.im/demo/getChecksum.action",
			getChannelInfoUrl: "https://nrtc.netease.im/nrtc/getChannelInfos.action"
		}, r.formatSocketUrl = function(e) {
			var t = e.url,
				n = e.secure ? "https" : "http";
			return -1 === t.indexOf("http") ? n + "://" + t : t
		}, r.uploadUrl = "https://nos.netease.com", r.chunkUploadUrl = null, r.commonMaxSize = 104857600, r.chunkSize = 4194304, r.chunkMaxSize = 4194304e4, r.replaceUrl = "https://{bucket}-nosdn.netease.im/{object}", r.downloadHost = "nos.netease.com", r.downloadUrl = "https://{bucket}-nosdn.netease.im/{object}", r.httpsEnabled = !1, r.threshold = 0, r.genUploadUrl = function(e) {
			return r.uploadUrl + "/" + e
		}, r.genChunkUploadUrl = function(e) {
			return r.chunkUploadUrl ? r.chunkUploadUrl + "/" + e.bucket + "/" + e.objectName : ""
		}, r.genDownloadUrl = function(e, t) {
			var n = e.bucket,
				i = (e.tag, e.expireSec),
				o = +new Date,
				a = i ? "&survivalTime=" + i : "",
				s = r.replaceUrl + "?createTime=" + o + a;
			return(s = r.genNosProtocolUrl(s)).replace("{bucket}", n).replace("{object}", t)
		}, r.genFileUrl = function(e) {
			var t = e.bucket,
				n = e.objectName;
			return r.genNosProtocolUrl(r.replaceUrl).replace("{bucket}", t).replace("{object}", n)
		}, r.genNosProtocolUrl = function(e) {
			return /^http/.test(e) ? r.httpsEnabled && 0 !== e.indexOf("https://") && (e = e.replace("http", "https")) : e = r.httpsEnabled ? "https://" + e : "http://" + e, e
		}, e.exports = r
	}, function(e, t, n) {
		"use strict";
		t.__esModule = !0;
		var r = a(n(164)),
			i = a(n(160)),
			o = a(n(9));

		function a(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		t.default = function(e, t) {
			if("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : (0, o.default)(t)));
			e.prototype = (0, i.default)(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (r.default ? (0, r.default)(e, t) : e.__proto__ = t)
		}
	}, function(e, t, n) {
		"use strict";
		t.__esModule = !0;
		var r, i = n(9),
			o = (r = i) && r.__esModule ? r : {
				default: r
			};
		t.default = function(e, t) {
			if(!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !t || "object" !== (void 0 === t ? "undefined" : (0, o.default)(t)) && "function" != typeof t ? e : t
		}
	}, function(e, t, n) {
		"use strict";
		t.__esModule = !0;
		var r, i = n(121),
			o = (r = i) && r.__esModule ? r : {
				default: r
			};
		t.default = function() {
			function e(e, t) {
				for(var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), (0, o.default)(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}()
	}, function(e, t, n) {
		var r = n(42)("wks"),
			i = n(29),
			o = n(8).Symbol,
			a = "function" == typeof o;
		(e.exports = function(e) {
			return r[e] || (r[e] = a && o[e] || (a ? o : i)("Symbol." + e))
		}).store = r
	}, function(e, t) {
		var n = e.exports = {
			version: "2.5.5"
		};
		"number" == typeof __e && (__e = n)
	}, function(e, t) {
		var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
		"number" == typeof __g && (__g = n)
	}, function(e, t, n) {
		"use strict";
		t.__esModule = !0;
		var r = a(n(106)),
			i = a(n(96)),
			o = "function" == typeof i.default && "symbol" == typeof r.default ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof i.default && e.constructor === i.default && e !== i.default.prototype ? "symbol" : typeof e
			};

		function a(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		t.default = "function" == typeof i.default && "symbol" === o(r.default) ? function(e) {
			return void 0 === e ? "undefined" : o(e)
		} : function(e) {
			return e && "function" == typeof i.default && e.constructor === i.default && e !== i.default.prototype ? "symbol" : void 0 === e ? "undefined" : o(e)
		}
	}, , , function(e, t, n) {
		"use strict";
		(function(e) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.url2origin = t.uniqueID = t.off = t.removeEventListener = t.on = t.addEventListener = t.format = t.regWhiteSpace = t.regBlank = t.emptyFunc = t.f = t.emptyObj = t.o = void 0;
			var r, i = n(9),
				o = (r = i) && r.__esModule ? r : {
					default: r
				};
			t.getGlobal = a, t.detectCSSFeature = function(e) {
				var t = !1,
					n = "Webkit Moz ms O".split(" "),
					r = document.createElement("div"),
					i = null;
				e = e.toLowerCase(), void 0 !== r.style[e] && (t = !0);
				if(!1 === t) {
					i = e.charAt(0).toUpperCase() + e.substr(1);
					for(var o = 0; o < n.length; o++)
						if(void 0 !== r.style[n[o] + i]) {
							t = !0;
							break
						}
				}
				return t
			}, t.fix = s, t.getYearStr = u, t.getMonthStr = c, t.getDayStr = l, t.getHourStr = f, t.getMinuteStr = d, t.getSecondStr = p, t.getMillisecondStr = h, t.dateFromDateTimeLocal = function(e) {
				return e = "" + e, new Date(e.replace(/-/g, "/").replace("T", " "))
			}, t.getClass = g, t.typeOf = b, t.isString = y, t.isNumber = function(e) {
				return "number" === b(e)
			}, t.isBoolean = function(e) {
				return "boolean" === b(e)
			}, t.isArray = _, t.isFunction = w, t.isDate = C, t.isRegExp = function(e) {
				return "regexp" === b(e)
			}, t.isError = function(e) {
				return "error" === b(e)
			}, t.isnull = S, t.notnull = O, t.undef = k, t.notundef = A, t.exist = I, t.notexist = T, t.isObject = M, t.isEmpty = function(e) {
				return T(e) || (y(e) || _(e)) && 0 === e.length
			}, t.containsNode = function(e, t) {
				if(e === t) return !0;
				for(; t.parentNode;) {
					if(t.parentNode === e) return !0;
					t = t.parentNode
				}
				return !1
			}, t.calcHeight = function(e) {
				var t = e.parentNode || document.body;
				(e = e.cloneNode(!0)).style.display = "block", e.style.opacity = 0, e.style.height = "auto", t.appendChild(e);
				var n = e.offsetHeight;
				return t.removeChild(e), n
			}, t.remove = function(e) {
				e.parentNode && e.parentNode.removeChild(e)
			}, t.dataset = function(e, t, n) {
				if(!I(n)) return e.getAttribute("data-" + t);
				e.setAttribute("data-" + t, n)
			}, t.target = function(e) {
				return e.target || e.srcElement
			}, t.createIframe = function(e) {
				var t;
				if((e = e || {}).name) try {
					(t = document.createElement('<iframe name="' + e.name + '"></iframe>')).frameBorder = 0
				} catch(n) {
					(t = document.createElement("iframe")).name = e.name
				} else t = document.createElement("iframe");
				e.visible || (t.style.display = "none");
				w(e.onload) && x(t, "load", function n(r) {
					if(!t.src) return;
					e.multi || N(t, "load", n);
					e.onload(r)
				});
				(e.parent || document.body).appendChild(t);
				var n = e.src || "about:blank";
				return setTimeout(function() {
					t.src = n
				}, 0), t
			}, t.html2node = function(e) {
				var t = document.createElement("div");
				t.innerHTML = e;
				var n = [],
					r = void 0,
					i = void 0;
				if(t.children)
					for(r = 0, i = t.children.length; r < i; r++) n.push(t.children[r]);
				else
					for(r = 0, i = t.childNodes.length; r < i; r++) {
						var o = t.childNodes[r];
						1 === o.nodeType && n.push(o)
					}
				return n.length > 1 ? t : n[0]
			}, t.scrollTop = function(e) {
				I(e) && (document.documentElement.scrollTop = document.body.scrollTop = e);
				return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
			}, t.forOwn = j, t.mixin = W, t.isJSON = B, t.parseJSON = function e(t) {
				try {
					B(t) && (t = JSON.parse(t)), M(t) && j(t, function(n, r) {
						switch(b(r)) {
							case "string":
							case "object":
								t[n] = e(r)
						}
					})
				} catch(e) {
					console.log("error:", e)
				}
				return t
			}, t.simpleClone = function(e) {
				var t = [],
					n = JSON.stringify(e, function(e, n) {
						if("object" === (void 0 === n ? "undefined" : (0, o.default)(n)) && null !== n) {
							if(-1 !== t.indexOf(n)) return;
							t.push(n)
						}
						return n
					});
				return JSON.parse(n)
			}, t.merge = function() {
				for(var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
				return n.forEach(function(t) {
					W(e, t)
				}), e
			}, t.fillUndef = function(e, t) {
				return j(t, function(t, n) {
					k(e[t]) && (e[t] = n)
				}), e
			}, t.checkWithDefault = function(e, t, n) {
				var r = e[t] || e[t.toLowerCase()];
				T(r) && (r = n, e[t] = r);
				return r
			}, t.fetch = function(e, t) {
				return j(e, function(n, r) {
					I(t[n]) && (e[n] = t[n])
				}), e
			}, t.string2object = function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ",",
					n = {};
				return e.split(t).forEach(function(e) {
					var t = e.split("="),
						r = t.shift();
					r && (n[decodeURIComponent(r)] = decodeURIComponent(t.join("=")))
				}), n
			}, t.object2string = L, t.genUrlSep = function(e) {
				return e.indexOf("?") < 0 ? "?" : "&"
			}, t.object2query = function(e) {
				return L(e, "&", !0)
			}, t.isFileInput = F, t.getKeys = function(e, t) {
				var n = Object.keys(e);
				t && n.sort(function(t, n) {
					var r = F(e[t]),
						i = F(e[n]);
					return r === i ? 0 : r ? 1 : -1
				});
				return n
			};
			t.o = {}, t.emptyObj = {}, t.f = function() {}, t.emptyFunc = function() {}, t.regBlank = /\s+/gi, t.regWhiteSpace = /\s+/gi;

			function a() {
				return "undefined" != typeof window ? window : void 0 !== e ? e : {}
			}

			function s(e, t) {
				t = t || 2;
				for(var n = "" + e; n.length < t;) n = "0" + n;
				return n
			}

			function u(e) {
				return "" + e.getFullYear()
			}

			function c(e) {
				return s(e.getMonth() + 1)
			}

			function l(e) {
				return s(e.getDate())
			}

			function f(e) {
				return s(e.getHours())
			}

			function d(e) {
				return s(e.getMinutes())
			}

			function p(e) {
				return s(e.getSeconds())
			}

			function h(e) {
				return s(e.getMilliseconds(), 3)
			}
			var v, m;
			t.format = (v = /yyyy|MM|dd|hh|mm|ss|SSS/g, m = {
				yyyy: u,
				MM: c,
				dd: l,
				hh: f,
				mm: d,
				ss: p,
				SSS: h
			}, function(e, t) {
				return e = new Date(e), isNaN(+e) ? "invalid date" : (t = t || "yyyy-MM-dd").replace(v, function(t) {
					return m[t](e)
				})
			});

			function g(e) {
				return Object.prototype.toString.call(e).slice(8, -1)
			}

			function b(e) {
				return g(e).toLowerCase()
			}

			function y(e) {
				return "string" === b(e)
			}

			function _(e) {
				return "array" === b(e)
			}

			function w(e) {
				return "function" === b(e)
			}

			function C(e) {
				return "date" === b(e)
			}

			function S(e) {
				return null === e
			}

			function O(e) {
				return null !== e
			}

			function k(e) {
				return void 0 === e
			}

			function A(e) {
				return void 0 !== e
			}

			function I(e) {
				return A(e) && O(e)
			}

			function T(e) {
				return k(e) || S(e)
			}

			function M(e) {
				return I(e) && "object" === b(e)
			}
			var P = t.addEventListener = function(e, t, n) {
					e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, n)
				},
				x = t.on = P,
				E = t.removeEventListener = function(e, t, n) {
					e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent && e.detachEvent("on" + t, n)
				},
				N = t.off = E;

			function j() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
					t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {},
					n = arguments[2];
				for(var r in e) e.hasOwnProperty(r) && t.call(n, r, e[r])
			}

			function W(e, t) {
				j(t, function(t, n) {
					e[t] = n
				})
			}
			var R;
			t.uniqueID = (R = 0, function() {
				return "" + R++
			});

			function B(e) {
				return y(e) && 0 === e.indexOf("{") && e.lastIndexOf("}") === e.length - 1
			}

			function L(e, t, n) {
				if(!e) return "";
				var r = [];
				return j(e, function(e, t) {
					w(t) || (C(t) ? t = t.getTime() : _(t) ? t = t.join(",") : M(t) && (t = JSON.stringify(t)), n && (t = encodeURIComponent(t)), r.push(encodeURIComponent(e) + "=" + t))
				}), r.join(t || ",")
			}
			t.url2origin = function() {
				var e = /^([\w]+?:\/\/.*?(?=\/|$))/i;
				return function(t) {
					return e.test(t || "") ? RegExp.$1.toLowerCase() : ""
				}
			}();

			function F(e) {
				var t = a();
				return e.tagName && "INPUT" === e.tagName.toUpperCase() || t.Blob && e instanceof t.Blob
			}
		}).call(this, n(31))
	}, function(e, t, n) {
		var r = n(16),
			i = n(64),
			o = n(44),
			a = Object.defineProperty;
		t.f = n(15) ? Object.defineProperty : function(e, t, n) {
			if(r(e), t = o(t, !0), r(n), i) try {
				return a(e, t, n)
			} catch(e) {}
			if("get" in n || "set" in n) throw TypeError("Accessors not supported!");
			return "value" in n && (e[t] = n.value), e
		}
	}, function(e, t) {
		var n = {}.hasOwnProperty;
		e.exports = function(e, t) {
			return n.call(e, t)
		}
	}, function(e, t, n) {
		e.exports = !n(21)(function() {
			return 7 != Object.defineProperty({}, "a", {
				get: function() {
					return 7
				}
			}).a
		})
	}, function(e, t, n) {
		var r = n(19);
		e.exports = function(e) {
			if(!r(e)) throw TypeError(e + " is not an object!");
			return e
		}
	}, function(e, t, n) {
		var r = n(8),
			i = n(7),
			o = n(37),
			a = n(20),
			s = n(14),
			u = function(e, t, n) {
				var c, l, f, d = e & u.F,
					p = e & u.G,
					h = e & u.S,
					v = e & u.P,
					m = e & u.B,
					g = e & u.W,
					b = p ? i : i[t] || (i[t] = {}),
					y = b.prototype,
					_ = p ? r : h ? r[t] : (r[t] || {}).prototype;
				for(c in p && (n = t), n)(l = !d && _ && void 0 !== _[c]) && s(b, c) || (f = l ? _[c] : n[c], b[c] = p && "function" != typeof _[c] ? n[c] : m && l ? o(f, r) : g && _[c] == f ? function(e) {
					var t = function(t, n, r) {
						if(this instanceof e) {
							switch(arguments.length) {
								case 0:
									return new e;
								case 1:
									return new e(t);
								case 2:
									return new e(t, n)
							}
							return new e(t, n, r)
						}
						return e.apply(this, arguments)
					};
					return t.prototype = e.prototype, t
				}(f) : v && "function" == typeof f ? o(Function.call, f) : f, v && ((b.virtual || (b.virtual = {}))[c] = f, e & u.R && y && !y[c] && a(y, c, f)))
			};
		u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, e.exports = u
	}, function(e, t, n) {
		var r = n(61),
			i = n(45);
		e.exports = function(e) {
			return r(i(e))
		}
	}, function(e, t) {
		e.exports = function(e) {
			return "object" == typeof e ? null !== e : "function" == typeof e
		}
	}, function(e, t, n) {
		var r = n(13),
			i = n(27);
		e.exports = n(15) ? function(e, t, n) {
			return r.f(e, t, i(1, n))
		} : function(e, t, n) {
			return e[t] = n, e
		}
	}, function(e, t) {
		e.exports = function(e) {
			try {
				return !!e()
			} catch(e) {
				return !0
			}
		}
	}, function(e, t, n) {
		"use strict";
		(function(t) {
			var r, i = n(9),
				o = (r = i) && r.__esModule ? r : {
					default: r
				};
			var a = function() {
				var e = "object" === (void 0 === t ? "undefined" : (0, o.default)(t)) ? t : window,
					n = Math.pow(2, 53) - 1,
					r = /\bOpera/,
					i = Object.prototype,
					a = i.hasOwnProperty,
					s = i.toString;

				function u(e) {
					return(e = String(e)).charAt(0).toUpperCase() + e.slice(1)
				}

				function c(e) {
					return e = h(e), /^(?:webOS|i(?:OS|P))/.test(e) ? e : u(e)
				}

				function l(e, t) {
					for(var n in e) a.call(e, n) && t(e[n], n, e)
				}

				function f(e) {
					return null == e ? u(e) : s.call(e).slice(8, -1)
				}

				function d(e) {
					return String(e).replace(/([ -])(?!$)/g, "$1?")
				}

				function p(e, t) {
					var r = null;
					return function(e, t) {
						var r = -1,
							i = e ? e.length : 0;
						if("number" == typeof i && i > -1 && i <= n)
							for(; ++r < i;) t(e[r], r, e);
						else l(e, t)
					}(e, function(n, i) {
						r = t(r, n, i, e)
					}), r
				}

				function h(e) {
					return String(e).replace(/^ +| +$/g, "")
				}
				return function t(n) {
					var i = e,
						a = n && "object" === (void 0 === n ? "undefined" : (0, o.default)(n)) && "String" != f(n);
					a && (i = n, n = null);
					var u = i.navigator || {},
						v = u.userAgent || "";
					n || (n = v);
					var m, g, b, y, _, w = a ? !!u.likeChrome : /\bChrome\b/.test(n) && !/internal|\n/i.test(s.toString()),
						C = a ? "Object" : "ScriptBridgingProxyObject",
						S = a ? "Object" : "Environment",
						O = a && i.java ? "JavaPackage" : f(i.java),
						k = a ? "Object" : "RuntimeObject",
						A = /\bJava/.test(O) && i.java,
						I = A && f(i.environment) == S,
						T = A ? "a" : "α",
						M = A ? "b" : "β",
						P = i.document || {},
						x = i.operamini || i.opera,
						E = r.test(E = a && x ? x["[[Class]]"] : f(x)) ? E : x = null,
						N = n,
						j = [],
						W = null,
						R = n == v,
						B = R && x && "function" == typeof x.version && x.version(),
						L = p([{
							label: "EdgeHTML",
							pattern: "Edge"
						}, "Trident", {
							label: "WebKit",
							pattern: "AppleWebKit"
						}, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"], function(e, t) {
							return e || RegExp("\\b" + (t.pattern || d(t)) + "\\b", "i").exec(n) && (t.label || t)
						}),
						F = function(e) {
							return p(e, function(e, t) {
								return e || RegExp("\\b" + (t.pattern || d(t)) + "\\b", "i").exec(n) && (t.label || t)
							})
						}(["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Electron", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", {
							label: "Microsoft Edge",
							pattern: "Edge"
						}, "Midori", "Nook Browser", "PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", {
							label: "Samsung Internet",
							pattern: "SamsungBrowser"
						}, "SeaMonkey", {
							label: "Silk",
							pattern: "(?:Cloud9|Silk-Accelerated)"
						}, "Sleipnir", "SlimBrowser", {
							label: "SRWare Iron",
							pattern: "Iron"
						}, "Sunrise", "Swiftfox", "Waterfox", "WebPositive", "Opera Mini", {
							label: "Opera Mini",
							pattern: "OPiOS"
						}, "Opera", {
							label: "Opera",
							pattern: "OPR"
						}, "Chrome", {
							label: "Chrome Mobile",
							pattern: "(?:CriOS|CrMo)"
						}, {
							label: "Firefox",
							pattern: "(?:Firefox|Minefield)"
						}, {
							label: "Firefox for iOS",
							pattern: "FxiOS"
						}, {
							label: "IE",
							pattern: "IEMobile"
						}, {
							label: "IE",
							pattern: "MSIE"
						}, "Safari"]),
						U = J([{
							label: "BlackBerry",
							pattern: "BB10"
						}, "BlackBerry", {
							label: "Galaxy S",
							pattern: "GT-I9000"
						}, {
							label: "Galaxy S2",
							pattern: "GT-I9100"
						}, {
							label: "Galaxy S3",
							pattern: "GT-I9300"
						}, {
							label: "Galaxy S4",
							pattern: "GT-I9500"
						}, {
							label: "Galaxy S5",
							pattern: "SM-G900"
						}, {
							label: "Galaxy S6",
							pattern: "SM-G920"
						}, {
							label: "Galaxy S6 Edge",
							pattern: "SM-G925"
						}, {
							label: "Galaxy S7",
							pattern: "SM-G930"
						}, {
							label: "Galaxy S7 Edge",
							pattern: "SM-G935"
						}, "Google TV", "Lumia", "iPad", "iPod", "iPhone", "Kindle", {
							label: "Kindle Fire",
							pattern: "(?:Cloud9|Silk-Accelerated)"
						}, "Nexus", "Nook", "PlayBook", "PlayStation Vita", "PlayStation", "TouchPad", "Transformer", {
							label: "Wii U",
							pattern: "WiiU"
						}, "Wii", "Xbox One", {
							label: "Xbox 360",
							pattern: "Xbox"
						}, "Xoom"]),
						D = function(e) {
							return p(e, function(e, t, r) {
								return e || (t[U] || t[/^[a-z]+(?: +[a-z]+\b)*/i.exec(U)] || RegExp("\\b" + d(r) + "(?:\\b|\\w*\\d)", "i").exec(n)) && r
							})
						}({
							Apple: {
								iPad: 1,
								iPhone: 1,
								iPod: 1
							},
							Archos: {},
							Amazon: {
								Kindle: 1,
								"Kindle Fire": 1
							},
							Asus: {
								Transformer: 1
							},
							"Barnes & Noble": {
								Nook: 1
							},
							BlackBerry: {
								PlayBook: 1
							},
							Google: {
								"Google TV": 1,
								Nexus: 1
							},
							HP: {
								TouchPad: 1
							},
							HTC: {},
							LG: {},
							Microsoft: {
								Xbox: 1,
								"Xbox One": 1
							},
							Motorola: {
								Xoom: 1
							},
							Nintendo: {
								"Wii U": 1,
								Wii: 1
							},
							Nokia: {
								Lumia: 1
							},
							Samsung: {
								"Galaxy S": 1,
								"Galaxy S2": 1,
								"Galaxy S3": 1,
								"Galaxy S4": 1
							},
							Sony: {
								PlayStation: 1,
								"PlayStation Vita": 1
							}
						}),
						H = function(e) {
							return p(e, function(e, t) {
								var r = t.pattern || d(t);
								return !e && (e = RegExp("\\b" + r + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(n)) && (e = function(e, t, n) {
									var r = {
										"10.0": "10",
										6.4: "10 Technical Preview",
										6.3: "8.1",
										6.2: "8",
										6.1: "Server 2008 R2 / 7",
										"6.0": "Server 2008 / Vista",
										5.2: "Server 2003 / XP 64-bit",
										5.1: "XP",
										5.01: "2000 SP1",
										"5.0": "2000",
										"4.0": "NT",
										"4.90": "ME"
									};
									return t && n && /^Win/i.test(e) && !/^Windows Phone /i.test(e) && (r = r[/[\d.]+$/.exec(e)]) && (e = "Windows " + r), e = String(e), t && n && (e = e.replace(RegExp(t, "i"), n)), e = c(e.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])
								}(e, r, t.label || t)), e
							})
						}(["Windows Phone", "Android", "CentOS", {
							label: "Chrome OS",
							pattern: "CrOS"
						}, "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac", "Windows 98;", "Windows "]);

					function J(e) {
						return p(e, function(e, t) {
							var r = t.pattern || d(t);
							return !e && (e = RegExp("\\b" + r + " *\\d+[.\\w_]*", "i").exec(n) || RegExp("\\b" + r + " *\\w+-[\\w]*", "i").exec(n) || RegExp("\\b" + r + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(n)) && ((e = String(t.label && !RegExp(r, "i").test(t.label) ? t.label : e).split("/"))[1] && !/[\d.]+/.test(e[0]) && (e[0] += " " + e[1]), t = t.label || t, e = c(e[0].replace(RegExp(r, "i"), t).replace(RegExp("; *(?:" + t + "[_-])?", "i"), " ").replace(RegExp("(" + t + ")[-_.]?(\\w)", "i"), "$1 $2"))), e
						})
					}
					if(L && (L = [L]), D && !U && (U = J([D])), (m = /\bGoogle TV\b/.exec(U)) && (U = m[0]), /\bSimulator\b/i.test(n) && (U = (U ? U + " " : "") + "Simulator"), "Opera Mini" == F && /\bOPiOS\b/.test(n) && j.push("running in Turbo/Uncompressed mode"), "IE" == F && /\blike iPhone OS\b/.test(n) ? (D = (m = t(n.replace(/like iPhone OS/, ""))).manufacturer, U = m.product) : /^iP/.test(U) ? (F || (F = "Safari"), H = "iOS" + ((m = / OS ([\d_]+)/i.exec(n)) ? " " + m[1].replace(/_/g, ".") : "")) : "Konqueror" != F || /buntu/i.test(H) ? D && "Google" != D && (/Chrome/.test(F) && !/\bMobile Safari\b/i.test(n) || /\bVita\b/.test(U)) || /\bAndroid\b/.test(H) && /^Chrome/.test(F) && /\bVersion\//i.test(n) ? (F = "Android Browser", H = /\bAndroid\b/.test(H) ? H : "Android") : "Silk" == F ? (/\bMobi/i.test(n) || (H = "Android", j.unshift("desktop mode")), /Accelerated *= *true/i.test(n) && j.unshift("accelerated")) : "PaleMoon" == F && (m = /\bFirefox\/([\d.]+)\b/.exec(n)) ? j.push("identifying as Firefox " + m[1]) : "Firefox" == F && (m = /\b(Mobile|Tablet|TV)\b/i.exec(n)) ? (H || (H = "Firefox OS"), U || (U = m[1])) : !F || (m = !/\bMinefield\b/i.test(n) && /\b(?:Firefox|Safari)\b/.exec(F)) ? (F && !U && /[\/,]|^[^(]+?\)/.test(n.slice(n.indexOf(m + "/") + 8)) && (F = null), (m = U || D || H) && (U || D || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(H)) && (F = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(H) ? H : m) + " Browser")) : "Electron" == F && (m = (/\bChrome\/([\d.]+)\b/.exec(n) || 0)[1]) && j.push("Chromium " + m) : H = "Kubuntu", B || (B = p(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))", "Version", d(F), "(?:Firefox|Minefield|NetFront)"], function(e, t) {
							return e || (RegExp(t + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(n) || 0)[1] || null
						})), (m = ("iCab" == L && parseFloat(B) > 3 ? "WebKit" : /\bOpera\b/.test(F) && (/\bOPR\b/.test(n) ? "Blink" : "Presto")) || /\b(?:Midori|Nook|Safari)\b/i.test(n) && !/^(?:Trident|EdgeHTML)$/.test(L) && "WebKit" || !L && /\bMSIE\b/i.test(n) && ("Mac OS" == H ? "Tasman" : "Trident") || "WebKit" == L && /\bPlayStation\b(?! Vita\b)/i.test(F) && "NetFront") && (L = [m]), "IE" == F && (m = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(n) || 0)[1]) ? (F += " Mobile", H = "Windows Phone " + (/\+$/.test(m) ? m : m + ".x"), j.unshift("desktop mode")) : /\bWPDesktop\b/i.test(n) ? (F = "IE Mobile", H = "Windows Phone 8.x", j.unshift("desktop mode"), B || (B = (/\brv:([\d.]+)/.exec(n) || 0)[1])) : "IE" != F && "Trident" == L && (m = /\brv:([\d.]+)/.exec(n)) && (F && j.push("identifying as " + F + (B ? " " + B : "")), F = "IE", B = m[1]), R) {
						if(y = "global", _ = null != (b = i) ? (0, o.default)(b[y]) : "number", /^(?:boolean|number|string|undefined)$/.test(_) || "object" == _ && !b[y]) f(m = i.runtime) == C ? (F = "Adobe AIR", H = m.flash.system.Capabilities.os) : f(m = i.phantom) == k ? (F = "PhantomJS", B = (m = m.version || null) && m.major + "." + m.minor + "." + m.patch) : "number" == typeof P.documentMode && (m = /\bTrident\/(\d+)/i.exec(n)) ? (B = [B, P.documentMode], (m = +m[1] + 4) != B[1] && (j.push("IE " + B[1] + " mode"), L && (L[1] = ""), B[1] = m), B = "IE" == F ? String(B[1].toFixed(1)) : B[0]) : "number" == typeof P.documentMode && /^(?:Chrome|Firefox)\b/.test(F) && (j.push("masking as " + F + " " + B), F = "IE", B = "11.0", L = ["Trident"], H = "Windows");
						else if(A && (N = (m = A.lang.System).getProperty("os.arch"), H = H || m.getProperty("os.name") + " " + m.getProperty("os.version")), I) {
							try {
								B = i.require("ringo/engine").version.join("."), F = "RingoJS"
							} catch(e) {
								(m = i.system) && m.global.system == i.system && (F = "Narwhal", H || (H = m[0].os || null))
							}
							F || (F = "Rhino")
						} else "object" === (0, o.default)(i.process) && !i.process.browser && (m = i.process) && ("object" === (0, o.default)(m.versions) && ("string" == typeof m.versions.electron ? (j.push("Node " + m.versions.node), F = "Electron", B = m.versions.electron) : "string" == typeof m.versions.nw && (j.push("Chromium " + B, "Node " + m.versions.node), F = "NW.js", B = m.versions.nw)), F || (F = "Node.js", N = m.arch, H = m.platform, B = (B = /[\d.]+/.exec(m.version)) ? B[0] : null));
						H = H && c(H)
					}
					if(B && (m = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(B) || /(?:alpha|beta)(?: ?\d)?/i.exec(n + ";" + (R && u.appMinorVersion)) || /\bMinefield\b/i.test(n) && "a") && (W = /b/i.test(m) ? "beta" : "alpha", B = B.replace(RegExp(m + "\\+?$"), "") + ("beta" == W ? M : T) + (/\d+\+?/.exec(m) || "")), "Fennec" == F || "Firefox" == F && /\b(?:Android|Firefox OS)\b/.test(H)) F = "Firefox Mobile";
					else if("Maxthon" == F && B) B = B.replace(/\.[\d.]+/, ".x");
					else if(/\bXbox\b/i.test(U)) "Xbox 360" == U && (H = null), "Xbox 360" == U && /\bIEMobile\b/.test(n) && j.unshift("mobile mode");
					else if(!/^(?:Chrome|IE|Opera)$/.test(F) && (!F || U || /Browser|Mobi/.test(F)) || "Windows CE" != H && !/Mobi/i.test(n))
						if("IE" == F && R) try {
							null === i.external && j.unshift("platform preview")
						} catch(e) {
							j.unshift("embedded")
						} else(/\bBlackBerry\b/.test(U) || /\bBB10\b/.test(n)) && (m = (RegExp(U.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(n) || 0)[1] || B) ? (H = ((m = [m, /BB10/.test(n)])[1] ? (U = null, D = "BlackBerry") : "Device Software") + " " + m[0], B = null) : this != l && "Wii" != U && (R && x || /Opera/.test(F) && /\b(?:MSIE|Firefox)\b/i.test(n) || "Firefox" == F && /\bOS X (?:\d+\.){2,}/.test(H) || "IE" == F && (H && !/^Win/.test(H) && B > 5.5 || /\bWindows XP\b/.test(H) && B > 8 || 8 == B && !/\bTrident\b/.test(n))) && !r.test(m = t.call(l, n.replace(r, "") + ";")) && m.name && (m = "ing as " + m.name + ((m = m.version) ? " " + m : ""), r.test(F) ? (/\bIE\b/.test(m) && "Mac OS" == H && (H = null), m = "identify" + m) : (m = "mask" + m, F = E ? c(E.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(m) && (H = null), R || (B = null)), L = ["Presto"], j.push(m));
						else F += " Mobile";
					(m = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(n) || 0)[1]) && (m = [parseFloat(m.replace(/\.(\d)$/, ".0$1")), m], "Safari" == F && "+" == m[1].slice(-1) ? (F = "WebKit Nightly", W = "alpha", B = m[1].slice(0, -1)) : B != m[1] && B != (m[2] = (/\bSafari\/([\d.]+\+?)/i.exec(n) || 0)[1]) || (B = null), m[1] = (/\bChrome\/([\d.]+)/i.exec(n) || 0)[1], 537.36 == m[0] && 537.36 == m[2] && parseFloat(m[1]) >= 28 && "WebKit" == L && (L = ["Blink"]), R && (w || m[1]) ? (L && (L[1] = "like Chrome"), m = m[1] || ((m = m[0]) < 530 ? 1 : m < 532 ? 2 : m < 532.05 ? 3 : m < 533 ? 4 : m < 534.03 ? 5 : m < 534.07 ? 6 : m < 534.1 ? 7 : m < 534.13 ? 8 : m < 534.16 ? 9 : m < 534.24 ? 10 : m < 534.3 ? 11 : m < 535.01 ? 12 : m < 535.02 ? "13+" : m < 535.07 ? 15 : m < 535.11 ? 16 : m < 535.19 ? 17 : m < 536.05 ? 18 : m < 536.1 ? 19 : m < 537.01 ? 20 : m < 537.11 ? "21+" : m < 537.13 ? 23 : m < 537.18 ? 24 : m < 537.24 ? 25 : m < 537.36 ? 26 : "Blink" != L ? "27" : "28")) : (L && (L[1] = "like Safari"), m = (m = m[0]) < 400 ? 1 : m < 500 ? 2 : m < 526 ? 3 : m < 533 ? 4 : m < 534 ? "4+" : m < 535 ? 5 : m < 537 ? 6 : m < 538 ? 7 : m < 601 ? 8 : "8"), L && (L[1] += " " + (m += "number" == typeof m ? ".x" : /[.+]/.test(m) ? "" : "+")), "Safari" == F && (!B || parseInt(B) > 45) && (B = m)), "Opera" == F && (m = /\bzbov|zvav$/.exec(H)) ? (F += " ", j.unshift("desktop mode"), "zvav" == m ? (F += "Mini", B = null) : F += "Mobile", H = H.replace(RegExp(" *" + m + "$"), "")) : "Safari" == F && /\bChrome\b/.exec(L && L[1]) && (j.unshift("desktop mode"), F = "Chrome Mobile", B = null, /\bOS X\b/.test(H) ? (D = "Apple", H = "iOS 4.3+") : H = null), B && 0 == B.indexOf(m = /[\d.]+$/.exec(H)) && n.indexOf("/" + m + "-") > -1 && (H = h(H.replace(m, ""))), L && !/\b(?:Avant|Nook)\b/.test(F) && (/Browser|Lunascape|Maxthon/.test(F) || "Safari" != F && /^iOS/.test(H) && /\bSafari\b/.test(L[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(F) && L[1]) && (m = L[L.length - 1]) && j.push(m), j.length && (j = ["(" + j.join("; ") + ")"]), D && U && U.indexOf(D) < 0 && j.push("on " + D), U && j.push((/^on /.test(j[j.length - 1]) ? "" : "on ") + U), H && (m = / ([\d.+]+)$/.exec(H), g = m && "/" == H.charAt(H.length - m[0].length - 1), H = {
						architecture: 32,
						family: m && !g ? H.replace(m[0], "") : H,
						version: m ? m[1] : null,
						toString: function() {
							var e = this.version;
							return this.family + (e && !g ? " " + e : "") + (64 == this.architecture ? " 64-bit" : "")
						}
					}), (m = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(N)) && !/\bi686\b/i.test(N) ? (H && (H.architecture = 64, H.family = H.family.replace(RegExp(" *" + m), "")), F && (/\bWOW64\b/i.test(n) || R && /\w(?:86|32)$/.test(u.cpuClass || u.platform) && !/\bWin64; x64\b/i.test(n)) && j.unshift("32-bit")) : H && /^OS X/.test(H.family) && "Chrome" == F && parseFloat(B) >= 39 && (H.architecture = 64), n || (n = null);
					var G = {};
					return G.description = n, G.layout = L && L[0], G.manufacturer = D, G.name = F, G.prerelease = W, G.product = U, G.ua = n, G.version = F && B, G.os = H || {
						architecture: null,
						family: null,
						version: null,
						toString: function() {
							return "null"
						}
					}, G.parse = t, G.toString = function() {
						return this.description || ""
					}, G.version && j.unshift(B), G.name && j.unshift(F), H && F && (H != String(H).split(" ")[0] || H != F.split(" ")[0] && !U) && j.push(U ? "(" + H + ")" : "on " + H), j.length && (G.description = j.join(" ")), G
				}()
			}();
			e.exports = a
		}).call(this, n(31))
	}, function(e, t) {
		e.exports = {}
	}, , , , function(e, t) {
		e.exports = function(e, t) {
			return {
				enumerable: !(1 & e),
				configurable: !(2 & e),
				writable: !(4 & e),
				value: t
			}
		}
	}, function(e, t) {
		t.f = {}.propertyIsEnumerable
	}, function(e, t) {
		var n = 0,
			r = Math.random();
		e.exports = function(e) {
			return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36))
		}
	}, function(e, t, n) {
		var r = n(62),
			i = n(41);
		e.exports = Object.keys || function(e) {
			return r(e, i)
		}
	}, function(e, t) {
		var n;
		n = function() {
			return this
		}();
		try {
			n = n || Function("return this")() || (0, eval)("this")
		} catch(e) {
			"object" == typeof window && (n = window)
		}
		e.exports = n
	}, , function(e, t) {
		var n = {}.toString;
		e.exports = function(e) {
			return n.call(e).slice(8, -1)
		}
	}, function(e, t, n) {
		var r = n(13).f,
			i = n(14),
			o = n(6)("toStringTag");
		e.exports = function(e, t, n) {
			e && !i(e = n ? e : e.prototype, o) && r(e, o, {
				configurable: !0,
				value: t
			})
		}
	}, function(e, t) {
		e.exports = !0
	}, , function(e, t, n) {
		var r = n(56);
		e.exports = function(e, t, n) {
			if(r(e), void 0 === t) return e;
			switch(n) {
				case 1:
					return function(n) {
						return e.call(t, n)
					};
				case 2:
					return function(n, r) {
						return e.call(t, n, r)
					};
				case 3:
					return function(n, r, i) {
						return e.call(t, n, r, i)
					}
			}
			return function() {
				return e.apply(t, arguments)
			}
		}
	}, function(e, t) {
		t.f = Object.getOwnPropertySymbols
	}, function(e, t, n) {
		var r = n(8),
			i = n(7),
			o = n(35),
			a = n(40),
			s = n(13).f;
		e.exports = function(e) {
			var t = i.Symbol || (i.Symbol = o ? {} : r.Symbol || {});
			"_" == e.charAt(0) || e in t || s(t, e, {
				value: a.f(e)
			})
		}
	}, function(e, t, n) {
		t.f = n(6)
	}, function(e, t) {
		e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
	}, function(e, t, n) {
		var r = n(8),
			i = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
		e.exports = function(e) {
			return i[e] || (i[e] = {})
		}
	}, function(e, t, n) {
		var r = n(42)("keys"),
			i = n(29);
		e.exports = function(e) {
			return r[e] || (r[e] = i(e))
		}
	}, function(e, t, n) {
		var r = n(19);
		e.exports = function(e, t) {
			if(!r(e)) return e;
			var n, i;
			if(t && "function" == typeof(n = e.toString) && !r(i = n.call(e))) return i;
			if("function" == typeof(n = e.valueOf) && !r(i = n.call(e))) return i;
			if(!t && "function" == typeof(n = e.toString) && !r(i = n.call(e))) return i;
			throw TypeError("Can't convert object to primitive value")
		}
	}, function(e, t) {
		e.exports = function(e) {
			if(null == e) throw TypeError("Can't call method on  " + e);
			return e
		}
	}, function(e, t) {
		var n = Math.ceil,
			r = Math.floor;
		e.exports = function(e) {
			return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e)
		}
	}, , function(e, t, n) {
		var r = n(45);
		e.exports = function(e) {
			return Object(r(e))
		}
	}, , function(e, t, n) {
		var r = n(16),
			i = n(102),
			o = n(41),
			a = n(43)("IE_PROTO"),
			s = function() {},
			u = function() {
				var e, t = n(53)("iframe"),
					r = o.length;
				for(t.style.display = "none", n(76).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), u = e.F; r--;) delete u.prototype[o[r]];
				return u()
			};
		e.exports = Object.create || function(e, t) {
			var n;
			return null !== e ? (s.prototype = r(e), n = new s, s.prototype = null, n[a] = e) : n = u(), void 0 === t ? n : i(n, t)
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(104)(!0);
		n(65)(String, "String", function(e) {
			this._t = String(e), this._i = 0
		}, function() {
			var e, t = this._t,
				n = this._i;
			return n >= t.length ? {
				value: void 0,
				done: !0
			} : (e = r(t, n), this._i += e.length, {
				value: e,
				done: !1
			})
		})
	}, , function(e, t, n) {
		var r = n(19),
			i = n(8).document,
			o = r(i) && r(i.createElement);
		e.exports = function(e) {
			return o ? i.createElement(e) : {}
		}
	}, , function(e, t, n) {
		n(99);
		for(var r = n(8), i = n(20), o = n(23), a = n(6)("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), u = 0; u < s.length; u++) {
			var c = s[u],
				l = r[c],
				f = l && l.prototype;
			f && !f[a] && i(f, a, c), o[c] = o.Array
		}
	}, function(e, t) {
		e.exports = function(e) {
			if("function" != typeof e) throw TypeError(e + " is not a function!");
			return e
		}
	}, , function(e, t, n) {
		"use strict";
		t.__esModule = !0;
		var r, i = n(85),
			o = (r = i) && r.__esModule ? r : {
				default: r
			};
		t.default = o.default || function(e) {
			for(var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for(var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
			}
			return e
		}
	}, function(e, t, n) {
		var r = n(28),
			i = n(27),
			o = n(18),
			a = n(44),
			s = n(14),
			u = n(64),
			c = Object.getOwnPropertyDescriptor;
		t.f = n(15) ? c : function(e, t) {
			if(e = o(e), t = a(t, !0), u) try {
				return c(e, t)
			} catch(e) {}
			if(s(e, t)) return i(!r.f.call(e, t), e[t])
		}
	}, function(e, t, n) {
		var r = n(62),
			i = n(41).concat("length", "prototype");
		t.f = Object.getOwnPropertyNames || function(e) {
			return r(e, i)
		}
	}, function(e, t, n) {
		var r = n(33);
		e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
			return "String" == r(e) ? e.split("") : Object(e)
		}
	}, function(e, t, n) {
		var r = n(14),
			i = n(18),
			o = n(101)(!1),
			a = n(43)("IE_PROTO");
		e.exports = function(e, t) {
			var n, s = i(e),
				u = 0,
				c = [];
			for(n in s) n != a && r(s, n) && c.push(n);
			for(; t.length > u;) r(s, n = t[u++]) && (~o(c, n) || c.push(n));
			return c
		}
	}, function(e, t, n) {
		e.exports = n(20)
	}, function(e, t, n) {
		e.exports = !n(15) && !n(21)(function() {
			return 7 != Object.defineProperty(n(53)("div"), "a", {
				get: function() {
					return 7
				}
			}).a
		})
	}, function(e, t, n) {
		"use strict";
		var r = n(35),
			i = n(17),
			o = n(63),
			a = n(20),
			s = n(23),
			u = n(103),
			c = n(34),
			l = n(75),
			f = n(6)("iterator"),
			d = !([].keys && "next" in [].keys()),
			p = function() {
				return this
			};
		e.exports = function(e, t, n, h, v, m, g) {
			u(n, t, h);
			var b, y, _, w = function(e) {
					if(!d && e in k) return k[e];
					switch(e) {
						case "keys":
						case "values":
							return function() {
								return new n(this, e)
							}
					}
					return function() {
						return new n(this, e)
					}
				},
				C = t + " Iterator",
				S = "values" == v,
				O = !1,
				k = e.prototype,
				A = k[f] || k["@@iterator"] || v && k[v],
				I = A || w(v),
				T = v ? S ? w("entries") : I : void 0,
				M = "Array" == t && k.entries || A;
			if(M && (_ = l(M.call(new e))) !== Object.prototype && _.next && (c(_, C, !0), r || "function" == typeof _[f] || a(_, f, p)), S && A && "values" !== A.name && (O = !0, I = function() {
					return A.call(this)
				}), r && !g || !d && !O && k[f] || a(k, f, I), s[t] = I, s[C] = p, v)
				if(b = {
						values: S ? I : w("values"),
						keys: m ? I : w("keys"),
						entries: T
					}, g)
					for(y in b) y in k || o(k, y, b[y]);
				else i(i.P + i.F * (d || O), t, b);
			return b
		}
	}, , , function(e, t) {
		e.exports = function(e, t) {
			var n = t.split(".");
			for(; n.length;) {
				var r = n.shift(),
					i = !1;
				if("?" == r[r.length - 1] && (r = r.slice(0, -1), i = !0), !(e = e[r]) && i) return e
			}
			return e
		}
	}, function(e, t, n) {
		var r = n(46),
			i = Math.min;
		e.exports = function(e) {
			return e > 0 ? i(r(e), 9007199254740991) : 0
		}
	}, , , , function(e, t) {
		e.exports = function e(t, n) {
			"use strict";
			var r, i, o = /(^([+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi,
				a = /(^[ ]*|[ ]*$)/g,
				s = /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,
				u = /^0x[0-9a-f]+$/i,
				c = /^0/,
				l = function(t) {
					return e.insensitive && ("" + t).toLowerCase() || "" + t
				},
				f = l(t).replace(a, "") || "",
				d = l(n).replace(a, "") || "",
				p = f.replace(o, "\0$1\0").replace(/\0$/, "").replace(/^\0/, "").split("\0"),
				h = d.replace(o, "\0$1\0").replace(/\0$/, "").replace(/^\0/, "").split("\0"),
				v = parseInt(f.match(u), 16) || 1 !== p.length && f.match(s) && Date.parse(f),
				m = parseInt(d.match(u), 16) || v && d.match(s) && Date.parse(d) || null;
			if(m) {
				if(v < m) return -1;
				if(v > m) return 1
			}
			for(var g = 0, b = Math.max(p.length, h.length); g < b; g++) {
				if(r = !(p[g] || "").match(c) && parseFloat(p[g]) || p[g] || 0, i = !(h[g] || "").match(c) && parseFloat(h[g]) || h[g] || 0, isNaN(r) !== isNaN(i)) return isNaN(r) ? 1 : -1;
				if(typeof r != typeof i && (r += "", i += ""), r < i) return -1;
				if(r > i) return 1
			}
			return 0
		}
	}, function(e, t) {}, function(e, t, n) {
		var r = n(14),
			i = n(48),
			o = n(43)("IE_PROTO"),
			a = Object.prototype;
		e.exports = Object.getPrototypeOf || function(e) {
			return e = i(e), r(e, o) ? e[o] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null
		}
	}, function(e, t, n) {
		var r = n(8).document;
		e.exports = r && r.documentElement
	}, , , , , , function(e, t, n) {
		"use strict";
		var r = n(30),
			i = n(38),
			o = n(28),
			a = n(48),
			s = n(61),
			u = Object.assign;
		e.exports = !u || n(21)(function() {
			var e = {},
				t = {},
				n = Symbol(),
				r = "abcdefghijklmnopqrst";
			return e[n] = 7, r.split("").forEach(function(e) {
				t[e] = e
			}), 7 != u({}, e)[n] || Object.keys(u({}, t)).join("") != r
		}) ? function(e, t) {
			for(var n = a(e), u = arguments.length, c = 1, l = i.f, f = o.f; u > c;)
				for(var d, p = s(arguments[c++]), h = l ? r(p).concat(l(p)) : r(p), v = h.length, m = 0; v > m;) f.call(p, d = h[m++]) && (n[d] = p[d]);
			return n
		} : u
	}, function(e, t, n) {
		var r = n(17);
		r(r.S + r.F, "Object", {
			assign: n(82)
		})
	}, function(e, t, n) {
		n(83), e.exports = n(7).Object.assign
	}, function(e, t, n) {
		e.exports = {
			default: n(84),
			__esModule: !0
		}
	}, , function(e, t, n) {
		"use strict";
		var r = n(2);
		"undefined" != typeof window && (window.console || r.isWeixinApp || (window.console = {
			log: function() {},
			info: function() {},
			warn: function() {},
			error: function() {}
		}))
	}, function(e, t, n) {
		n(39)("observable")
	}, function(e, t, n) {
		n(39)("asyncIterator")
	}, function(e, t, n) {
		var r = n(18),
			i = n(60).f,
			o = {}.toString,
			a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
		e.exports.f = function(e) {
			return a && "[object Window]" == o.call(e) ? function(e) {
				try {
					return i(e)
				} catch(e) {
					return a.slice()
				}
			}(e) : i(r(e))
		}
	}, function(e, t, n) {
		var r = n(33);
		e.exports = Array.isArray || function(e) {
			return "Array" == r(e)
		}
	}, function(e, t, n) {
		var r = n(30),
			i = n(38),
			o = n(28);
		e.exports = function(e) {
			var t = r(e),
				n = i.f;
			if(n)
				for(var a, s = n(e), u = o.f, c = 0; s.length > c;) u.call(e, a = s[c++]) && t.push(a);
			return t
		}
	}, function(e, t, n) {
		var r = n(29)("meta"),
			i = n(19),
			o = n(14),
			a = n(13).f,
			s = 0,
			u = Object.isExtensible || function() {
				return !0
			},
			c = !n(21)(function() {
				return u(Object.preventExtensions({}))
			}),
			l = function(e) {
				a(e, r, {
					value: {
						i: "O" + ++s,
						w: {}
					}
				})
			},
			f = e.exports = {
				KEY: r,
				NEED: !1,
				fastKey: function(e, t) {
					if(!i(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
					if(!o(e, r)) {
						if(!u(e)) return "F";
						if(!t) return "E";
						l(e)
					}
					return e[r].i
				},
				getWeak: function(e, t) {
					if(!o(e, r)) {
						if(!u(e)) return !0;
						if(!t) return !1;
						l(e)
					}
					return e[r].w
				},
				onFreeze: function(e) {
					return c && f.NEED && u(e) && !o(e, r) && l(e), e
				}
			}
	}, function(e, t, n) {
		"use strict";
		var r = n(8),
			i = n(14),
			o = n(15),
			a = n(17),
			s = n(63),
			u = n(93).KEY,
			c = n(21),
			l = n(42),
			f = n(34),
			d = n(29),
			p = n(6),
			h = n(40),
			v = n(39),
			m = n(92),
			g = n(91),
			b = n(16),
			y = n(19),
			_ = n(18),
			w = n(44),
			C = n(27),
			S = n(50),
			O = n(90),
			k = n(59),
			A = n(13),
			I = n(30),
			T = k.f,
			M = A.f,
			P = O.f,
			x = r.Symbol,
			E = r.JSON,
			N = E && E.stringify,
			j = p("_hidden"),
			W = p("toPrimitive"),
			R = {}.propertyIsEnumerable,
			B = l("symbol-registry"),
			L = l("symbols"),
			F = l("op-symbols"),
			U = Object.prototype,
			D = "function" == typeof x,
			H = r.QObject,
			J = !H || !H.prototype || !H.prototype.findChild,
			G = o && c(function() {
				return 7 != S(M({}, "a", {
					get: function() {
						return M(this, "a", {
							value: 7
						}).a
					}
				})).a
			}) ? function(e, t, n) {
				var r = T(U, t);
				r && delete U[t], M(e, t, n), r && e !== U && M(U, t, r)
			} : M,
			K = function(e) {
				var t = L[e] = S(x.prototype);
				return t._k = e, t
			},
			$ = D && "symbol" == typeof x.iterator ? function(e) {
				return "symbol" == typeof e
			} : function(e) {
				return e instanceof x
			},
			z = function(e, t, n) {
				return e === U && z(F, t, n), b(e), t = w(t, !0), b(n), i(L, t) ? (n.enumerable ? (i(e, j) && e[j][t] && (e[j][t] = !1), n = S(n, {
					enumerable: C(0, !1)
				})) : (i(e, j) || M(e, j, C(1, {})), e[j][t] = !0), G(e, t, n)) : M(e, t, n)
			},
			V = function(e, t) {
				b(e);
				for(var n, r = m(t = _(t)), i = 0, o = r.length; o > i;) z(e, n = r[i++], t[n]);
				return e
			},
			Y = function(e) {
				var t = R.call(this, e = w(e, !0));
				return !(this === U && i(L, e) && !i(F, e)) && (!(t || !i(this, e) || !i(L, e) || i(this, j) && this[j][e]) || t)
			},
			X = function(e, t) {
				if(e = _(e), t = w(t, !0), e !== U || !i(L, t) || i(F, t)) {
					var n = T(e, t);
					return !n || !i(L, t) || i(e, j) && e[j][t] || (n.enumerable = !0), n
				}
			},
			q = function(e) {
				for(var t, n = P(_(e)), r = [], o = 0; n.length > o;) i(L, t = n[o++]) || t == j || t == u || r.push(t);
				return r
			},
			Q = function(e) {
				for(var t, n = e === U, r = P(n ? F : _(e)), o = [], a = 0; r.length > a;) !i(L, t = r[a++]) || n && !i(U, t) || o.push(L[t]);
				return o
			};
		D || (s((x = function() {
			if(this instanceof x) throw TypeError("Symbol is not a constructor!");
			var e = d(arguments.length > 0 ? arguments[0] : void 0),
				t = function(n) {
					this === U && t.call(F, n), i(this, j) && i(this[j], e) && (this[j][e] = !1), G(this, e, C(1, n))
				};
			return o && J && G(U, e, {
				configurable: !0,
				set: t
			}), K(e)
		}).prototype, "toString", function() {
			return this._k
		}), k.f = X, A.f = z, n(60).f = O.f = q, n(28).f = Y, n(38).f = Q, o && !n(35) && s(U, "propertyIsEnumerable", Y, !0), h.f = function(e) {
			return K(p(e))
		}), a(a.G + a.W + a.F * !D, {
			Symbol: x
		});
		for(var Z = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ee = 0; Z.length > ee;) p(Z[ee++]);
		for(var te = I(p.store), ne = 0; te.length > ne;) v(te[ne++]);
		a(a.S + a.F * !D, "Symbol", {
			for: function(e) {
				return i(B, e += "") ? B[e] : B[e] = x(e)
			},
			keyFor: function(e) {
				if(!$(e)) throw TypeError(e + " is not a symbol!");
				for(var t in B)
					if(B[t] === e) return t
			},
			useSetter: function() {
				J = !0
			},
			useSimple: function() {
				J = !1
			}
		}), a(a.S + a.F * !D, "Object", {
			create: function(e, t) {
				return void 0 === t ? S(e) : V(S(e), t)
			},
			defineProperty: z,
			defineProperties: V,
			getOwnPropertyDescriptor: X,
			getOwnPropertyNames: q,
			getOwnPropertySymbols: Q
		}), E && a(a.S + a.F * (!D || c(function() {
			var e = x();
			return "[null]" != N([e]) || "{}" != N({
				a: e
			}) || "{}" != N(Object(e))
		})), "JSON", {
			stringify: function(e) {
				for(var t, n, r = [e], i = 1; arguments.length > i;) r.push(arguments[i++]);
				if(n = t = r[1], (y(t) || void 0 !== e) && !$(e)) return g(t) || (t = function(e, t) {
					if("function" == typeof n && (t = n.call(this, e, t)), !$(t)) return t
				}), r[1] = t, N.apply(E, r)
			}
		}), x.prototype[W] || n(20)(x.prototype, W, x.prototype.valueOf), f(x, "Symbol"), f(Math, "Math", !0), f(r.JSON, "JSON", !0)
	}, function(e, t, n) {
		n(94), n(74), n(89), n(88), e.exports = n(7).Symbol
	}, function(e, t, n) {
		e.exports = {
			default: n(95),
			__esModule: !0
		}
	}, function(e, t) {
		e.exports = function(e, t) {
			return {
				value: t,
				done: !!e
			}
		}
	}, function(e, t) {
		e.exports = function() {}
	}, function(e, t, n) {
		"use strict";
		var r = n(98),
			i = n(97),
			o = n(23),
			a = n(18);
		e.exports = n(65)(Array, "Array", function(e, t) {
			this._t = a(e), this._i = 0, this._k = t
		}, function() {
			var e = this._t,
				t = this._k,
				n = this._i++;
			return !e || n >= e.length ? (this._t = void 0, i(1)) : i(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]])
		}, "values"), o.Arguments = o.Array, r("keys"), r("values"), r("entries")
	}, function(e, t, n) {
		var r = n(46),
			i = Math.max,
			o = Math.min;
		e.exports = function(e, t) {
			return(e = r(e)) < 0 ? i(e + t, 0) : o(e, t)
		}
	}, function(e, t, n) {
		var r = n(18),
			i = n(69),
			o = n(100);
		e.exports = function(e) {
			return function(t, n, a) {
				var s, u = r(t),
					c = i(u.length),
					l = o(a, c);
				if(e && n != n) {
					for(; c > l;)
						if((s = u[l++]) != s) return !0
				} else
					for(; c > l; l++)
						if((e || l in u) && u[l] === n) return e || l || 0;
				return !e && -1
			}
		}
	}, function(e, t, n) {
		var r = n(13),
			i = n(16),
			o = n(30);
		e.exports = n(15) ? Object.defineProperties : function(e, t) {
			i(e);
			for(var n, a = o(t), s = a.length, u = 0; s > u;) r.f(e, n = a[u++], t[n]);
			return e
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(50),
			i = n(27),
			o = n(34),
			a = {};
		n(20)(a, n(6)("iterator"), function() {
			return this
		}), e.exports = function(e, t, n) {
			e.prototype = r(a, {
				next: i(1, n)
			}), o(e, t + " Iterator")
		}
	}, function(e, t, n) {
		var r = n(46),
			i = n(45);
		e.exports = function(e) {
			return function(t, n) {
				var o, a, s = String(i(t)),
					u = r(n),
					c = s.length;
				return u < 0 || u >= c ? e ? "" : void 0 : (o = s.charCodeAt(u)) < 55296 || o > 56319 || u + 1 === c || (a = s.charCodeAt(u + 1)) < 56320 || a > 57343 ? e ? s.charAt(u) : o : e ? s.slice(u, u + 2) : a - 56320 + (o - 55296 << 10) + 65536
			}
		}
	}, function(e, t, n) {
		n(51), n(55), e.exports = n(40).f("iterator")
	}, function(e, t, n) {
		e.exports = {
			default: n(105),
			__esModule: !0
		}
	}, , , , , , , , , , , , , , function(e, t, n) {
		"use strict";
		t.__esModule = !0;
		var r = o(n(273)),
			i = o(n(270));

		function o(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		t.default = function e(t, n, o) {
			null === t && (t = Function.prototype);
			var a = (0, i.default)(t, n);
			if(void 0 === a) {
				var s = (0, r.default)(t);
				return null === s ? void 0 : e(s, n, o)
			}
			if("value" in a) return a.value;
			var u = a.get;
			return void 0 !== u ? u.call(o) : void 0
		}
	}, function(e, t, n) {
		e.exports = {
			default: n(166),
			__esModule: !0
		}
	}, , , , , , , , , , , , , , , , , , , function(e, t, n) {
		"use strict";
		n(174).polyfill(), n(2).isBrowser = !0
	}, , , , , , , , , , function(e, t, n) {
		var r = n(17),
			i = n(7),
			o = n(21);
		e.exports = function(e, t) {
			var n = (i.Object || {})[e] || Object[e],
				a = {};
			a[e] = t(n), r(r.S + r.F * o(function() {
				n(1)
			}), "Object", a)
		}
	}, , , , , , , , function(e, t, n) {
		var r = n(17);
		r(r.S, "Object", {
			create: n(50)
		})
	}, function(e, t, n) {
		n(158);
		var r = n(7).Object;
		e.exports = function(e, t) {
			return r.create(e, t)
		}
	}, function(e, t, n) {
		e.exports = {
			default: n(159),
			__esModule: !0
		}
	}, function(e, t, n) {
		var r = n(19),
			i = n(16),
			o = function(e, t) {
				if(i(e), !r(t) && null !== t) throw TypeError(t + ": can't set as prototype!")
			};
		e.exports = {
			set: Object.setPrototypeOf || ("__proto__" in {} ? function(e, t, r) {
				try {
					(r = n(37)(Function.call, n(59).f(Object.prototype, "__proto__").set, 2))(e, []), t = !(e instanceof Array)
				} catch(e) {
					t = !0
				}
				return function(e, n) {
					return o(e, n), t ? e.__proto__ = n : r(e, n), e
				}
			}({}, !1) : void 0),
			check: o
		}
	}, function(e, t, n) {
		var r = n(17);
		r(r.S, "Object", {
			setPrototypeOf: n(161).set
		})
	}, function(e, t, n) {
		n(162), e.exports = n(7).Object.setPrototypeOf
	}, function(e, t, n) {
		e.exports = {
			default: n(163),
			__esModule: !0
		}
	}, function(e, t, n) {
		var r = n(17);
		r(r.S + r.F * !n(15), "Object", {
			defineProperty: n(13).f
		})
	}, function(e, t, n) {
		n(165);
		var r = n(7).Object;
		e.exports = function(e, t, n) {
			return r.defineProperty(e, t, n)
		}
	}, , , , , , , function(e, t) {
		var n, r, i = e.exports = {};

		function o() {
			throw new Error("setTimeout has not been defined")
		}

		function a() {
			throw new Error("clearTimeout has not been defined")
		}

		function s(e) {
			if(n === setTimeout) return setTimeout(e, 0);
			if((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
			try {
				return n(e, 0)
			} catch(t) {
				try {
					return n.call(null, e, 0)
				} catch(t) {
					return n.call(this, e, 0)
				}
			}
		}! function() {
			try {
				n = "function" == typeof setTimeout ? setTimeout : o
			} catch(e) {
				n = o
			}
			try {
				r = "function" == typeof clearTimeout ? clearTimeout : a
			} catch(e) {
				r = a
			}
		}();
		var u, c = [],
			l = !1,
			f = -1;

		function d() {
			l && u && (l = !1, u.length ? c = u.concat(c) : f = -1, c.length && p())
		}

		function p() {
			if(!l) {
				var e = s(d);
				l = !0;
				for(var t = c.length; t;) {
					for(u = c, c = []; ++f < t;) u && u[f].run();
					f = -1, t = c.length
				}
				u = null, l = !1,
					function(e) {
						if(r === clearTimeout) return clearTimeout(e);
						if((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
						try {
							r(e)
						} catch(t) {
							try {
								return r.call(null, e)
							} catch(t) {
								return r.call(this, e)
							}
						}
					}(e)
			}
		}

		function h(e, t) {
			this.fun = e, this.array = t
		}

		function v() {}
		i.nextTick = function(e) {
			var t = new Array(arguments.length - 1);
			if(arguments.length > 1)
				for(var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
			c.push(new h(e, t)), 1 !== c.length || l || s(p)
		}, h.prototype.run = function() {
			this.fun.apply(null, this.array)
		}, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = v, i.addListener = v, i.once = v, i.off = v, i.removeListener = v, i.removeAllListeners = v, i.emit = v, i.prependListener = v, i.prependOnceListener = v, i.listeners = function(e) {
			return []
		}, i.binding = function(e) {
			throw new Error("process.binding is not supported")
		}, i.cwd = function() {
			return "/"
		}, i.chdir = function(e) {
			throw new Error("process.chdir is not supported")
		}, i.umask = function() {
			return 0
		}
	}, function(e, t, n) {
		(function(t, n) {
			/*!
			 * @overview es6-promise - a tiny implementation of Promises/A+.
			 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
			 * @license   Licensed under MIT license
			 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
			 * @version   v4.2.4+314e4831
			 */
			var r;
			r = function() {
				"use strict";

				function e(e) {
					return "function" == typeof e
				}
				var r = Array.isArray ? Array.isArray : function(e) {
						return "[object Array]" === Object.prototype.toString.call(e)
					},
					i = 0,
					o = void 0,
					a = void 0,
					s = function(e, t) {
						h[i] = e, h[i + 1] = t, 2 === (i += 2) && (a ? a(v) : _())
					};
				var u = "undefined" != typeof window ? window : void 0,
					c = u || {},
					l = c.MutationObserver || c.WebKitMutationObserver,
					f = "undefined" == typeof self && void 0 !== t && "[object process]" === {}.toString.call(t),
					d = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;

				function p() {
					var e = setTimeout;
					return function() {
						return e(v, 1)
					}
				}
				var h = new Array(1e3);

				function v() {
					for(var e = 0; e < i; e += 2) {
						(0, h[e])(h[e + 1]), h[e] = void 0, h[e + 1] = void 0
					}
					i = 0
				}
				var m, g, b, y, _ = void 0;

				function w(e, t) {
					var n = this,
						r = new this.constructor(O);
					void 0 === r[S] && F(r);
					var i = n._state;
					if(i) {
						var o = arguments[i - 1];
						s(function() {
							return B(i, r, o, n._result)
						})
					} else W(n, r, e, t);
					return r
				}

				function C(e) {
					if(e && "object" == typeof e && e.constructor === this) return e;
					var t = new this(O);
					return x(t, e), t
				}
				f ? _ = function() {
					return t.nextTick(v)
				} : l ? (g = 0, b = new l(v), y = document.createTextNode(""), b.observe(y, {
					characterData: !0
				}), _ = function() {
					y.data = g = ++g % 2
				}) : d ? ((m = new MessageChannel).port1.onmessage = v, _ = function() {
					return m.port2.postMessage(0)
				}) : _ = void 0 === u ? function() {
					try {
						var e = Function("return this")().require("vertx");
						return void 0 !== (o = e.runOnLoop || e.runOnContext) ? function() {
							o(v)
						} : p()
					} catch(e) {
						return p()
					}
				}() : p();
				var S = Math.random().toString(36).substring(2);

				function O() {}
				var k = void 0,
					A = 1,
					I = 2,
					T = {
						error: null
					};

				function M(e) {
					try {
						return e.then
					} catch(e) {
						return T.error = e, T
					}
				}

				function P(t, n, r) {
					n.constructor === t.constructor && r === w && n.constructor.resolve === C ? function(e, t) {
						t._state === A ? N(e, t._result) : t._state === I ? j(e, t._result) : W(t, void 0, function(t) {
							return x(e, t)
						}, function(t) {
							return j(e, t)
						})
					}(t, n) : r === T ? (j(t, T.error), T.error = null) : void 0 === r ? N(t, n) : e(r) ? function(e, t, n) {
						s(function(e) {
							var r = !1,
								i = function(e, t, n, r) {
									try {
										e.call(t, n, r)
									} catch(e) {
										return e
									}
								}(n, t, function(n) {
									r || (r = !0, t !== n ? x(e, n) : N(e, n))
								}, function(t) {
									r || (r = !0, j(e, t))
								}, e._label);
							!r && i && (r = !0, j(e, i))
						}, e)
					}(t, n, r) : N(t, n)
				}

				function x(e, t) {
					var n, r;
					e === t ? j(e, new TypeError("You cannot resolve a promise with itself")) : (r = typeof(n = t), null === n || "object" !== r && "function" !== r ? N(e, t) : P(e, t, M(t)))
				}

				function E(e) {
					e._onerror && e._onerror(e._result), R(e)
				}

				function N(e, t) {
					e._state === k && (e._result = t, e._state = A, 0 !== e._subscribers.length && s(R, e))
				}

				function j(e, t) {
					e._state === k && (e._state = I, e._result = t, s(E, e))
				}

				function W(e, t, n, r) {
					var i = e._subscribers,
						o = i.length;
					e._onerror = null, i[o] = t, i[o + A] = n, i[o + I] = r, 0 === o && e._state && s(R, e)
				}

				function R(e) {
					var t = e._subscribers,
						n = e._state;
					if(0 !== t.length) {
						for(var r = void 0, i = void 0, o = e._result, a = 0; a < t.length; a += 3) r = t[a], i = t[a + n], r ? B(n, r, i, o) : i(o);
						e._subscribers.length = 0
					}
				}

				function B(t, n, r, i) {
					var o = e(r),
						a = void 0,
						s = void 0,
						u = void 0,
						c = void 0;
					if(o) {
						if((a = function(e, t) {
								try {
									return e(t)
								} catch(e) {
									return T.error = e, T
								}
							}(r, i)) === T ? (c = !0, s = a.error, a.error = null) : u = !0, n === a) return void j(n, new TypeError("A promises callback cannot return that same promise."))
					} else a = i, u = !0;
					n._state !== k || (o && u ? x(n, a) : c ? j(n, s) : t === A ? N(n, a) : t === I && j(n, a))
				}
				var L = 0;

				function F(e) {
					e[S] = L++, e._state = void 0, e._result = void 0, e._subscribers = []
				}
				var U = function() {
					function e(e, t) {
						this._instanceConstructor = e, this.promise = new e(O), this.promise[S] || F(this.promise), r(t) ? (this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? N(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(t), 0 === this._remaining && N(this.promise, this._result))) : j(this.promise, new Error("Array Methods must be provided an Array"))
					}
					return e.prototype._enumerate = function(e) {
						for(var t = 0; this._state === k && t < e.length; t++) this._eachEntry(e[t], t)
					}, e.prototype._eachEntry = function(e, t) {
						var n = this._instanceConstructor,
							r = n.resolve;
						if(r === C) {
							var i = M(e);
							if(i === w && e._state !== k) this._settledAt(e._state, t, e._result);
							else if("function" != typeof i) this._remaining--, this._result[t] = e;
							else if(n === D) {
								var o = new n(O);
								P(o, e, i), this._willSettleAt(o, t)
							} else this._willSettleAt(new n(function(t) {
								return t(e)
							}), t)
						} else this._willSettleAt(r(e), t)
					}, e.prototype._settledAt = function(e, t, n) {
						var r = this.promise;
						r._state === k && (this._remaining--, e === I ? j(r, n) : this._result[t] = n), 0 === this._remaining && N(r, this._result)
					}, e.prototype._willSettleAt = function(e, t) {
						var n = this;
						W(e, void 0, function(e) {
							return n._settledAt(A, t, e)
						}, function(e) {
							return n._settledAt(I, t, e)
						})
					}, e
				}();
				var D = function() {
					function e(t) {
						this[S] = L++, this._result = this._state = void 0, this._subscribers = [], O !== t && ("function" != typeof t && function() {
							throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
						}(), this instanceof e ? function(e, t) {
							try {
								t(function(t) {
									x(e, t)
								}, function(t) {
									j(e, t)
								})
							} catch(t) {
								j(e, t)
							}
						}(this, t) : function() {
							throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
						}())
					}
					return e.prototype.catch = function(e) {
						return this.then(null, e)
					}, e.prototype.finally = function(e) {
						var t = this.constructor;
						return this.then(function(n) {
							return t.resolve(e()).then(function() {
								return n
							})
						}, function(n) {
							return t.resolve(e()).then(function() {
								throw n
							})
						})
					}, e
				}();
				return D.prototype.then = w, D.all = function(e) {
					return new U(this, e).promise
				}, D.race = function(e) {
					var t = this;
					return r(e) ? new t(function(n, r) {
						for(var i = e.length, o = 0; o < i; o++) t.resolve(e[o]).then(n, r)
					}) : new t(function(e, t) {
						return t(new TypeError("You must pass an array to race."))
					})
				}, D.resolve = C, D.reject = function(e) {
					var t = new this(O);
					return j(t, e), t
				}, D._setScheduler = function(e) {
					a = e
				}, D._setAsap = function(e) {
					s = e
				}, D._asap = s, D.polyfill = function() {
					var e = void 0;
					if(void 0 !== n) e = n;
					else if("undefined" != typeof self) e = self;
					else try {
						e = Function("return this")()
					} catch(e) {
						throw new Error("polyfill failed because global object is unavailable in this environment")
					}
					var t = e.Promise;
					if(t) {
						var r = null;
						try {
							r = Object.prototype.toString.call(t.resolve())
						} catch(e) {}
						if("[object Promise]" === r && !t.cast) return
					}
					e.Promise = D
				}, D.Promise = D, D
			}, e.exports = r()
		}).call(this, n(173), n(31))
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.WHITEBOARD_CONFIG = t.DEFAULT_WHITEBOARD_OPTION = t.WHITEBOARD_CONSTS = void 0;
		var r, i = n(58),
			o = (r = i) && r.__esModule ? r : {
				default: r
			},
			a = n(475),
			s = n(474);
		t.WHITEBOARD_CONSTS = (0, o.default)({}, a.wbMap, s.wbControl), t.DEFAULT_WHITEBOARD_OPTION = {
			debug: !1,
			isCustom: !0,
			container: null,
			remoteContainer: null
		}, t.WHITEBOARD_CONFIG = {
			channelTimeout: 30,
			signalTimeout: 18
		}
	}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function(e) {
			var t = e.util;
			return r = t.notundef, i
		};
		var r = void 0;

		function i(e) {
			r(e.enable) && (this.enable = e.enable ? 1 : 0), r(e.needBadge) && (this.needBadge = e.needBadge ? 1 : 0), r(e.needPushNick) && (this.needPushNick = e.needPushNick ? 1 : 0), r(e.pushContent) && (this.pushContent = "" + e.pushContent), r(e.custom) && (this.custom = "" + e.custom), r(e.pushPayload) && (this.pushPayload = "" + e.pushPayload), r(e.sound) && (this.sound = "" + e.sound), r(e.webrtcEnable) && (this.webrtcEnable = e.webrtcEnable ? 1 : 0), r(e.forceKeepCalling) && (this.forceKeepCalling = e.forceKeepCalling ? 1 : 0)
		}
		e.exports = t.default
	}, function(e, t, n) {
		var r = n(18),
			i = n(59).f;
		n(150)("getOwnPropertyDescriptor", function() {
			return function(e, t) {
				return i(r(e), t)
			}
		})
	}, function(e, t, n) {
		n(268);
		var r = n(7).Object;
		e.exports = function(e, t) {
			return r.getOwnPropertyDescriptor(e, t)
		}
	}, function(e, t, n) {
		e.exports = {
			default: n(269),
			__esModule: !0
		}
	}, function(e, t, n) {
		var r = n(48),
			i = n(75);
		n(150)("getPrototypeOf", function() {
			return function(e) {
				return i(r(e))
			}
		})
	}, function(e, t, n) {
		n(271), e.exports = n(7).Object.getPrototypeOf
	}, function(e, t, n) {
		e.exports = {
			default: n(272),
			__esModule: !0
		}
	}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r, i = n(175),
			o = function() {};
		t.default = {
			format: function(e) {
				var t = e.turnInfoTag;
				return t && t.constructor === Array ? (t.map(function(t) {
					/[01]/.test(t.type) ? (e.netcallType = t.type, e.rtcServerMap = t.dispatchServer, e.serverMap = JSON.parse(JSON.stringify(t.dispatchServer))) : (e.type = t.type, e.wbServerMap = t.dispatchServer)
				}), e.netcallType = e.netcallType || i.WHITEBOARD_CONSTS.CALL_TYPE_NONE, e.rtcServerMap && (e.rtcServerMap = JSON.parse(e.rtcServerMap), e.rtcServerMap = e.rtcServerMap.webrtcarray || [e.rtcServerMap.webrtc] || e.rtcServerMap), e.wbServerMap && (e.wbServerMap = JSON.parse(e.wbServerMap), e.wbServerMap = e.wbServerMap.webrtcarray || [e.wbServerMap.webrtc] || e.wbServerMap), e.serverAddrs = JSON.parse(JSON.stringify(e.wbServerMap)) || [], e) : e
			},
			pureLogFunc: {
				asset: o,
				trace: o,
				debug: o,
				log: o,
				info: o,
				warn: o,
				error: o
			},
			guid: (r = function() {
				return(65536 * (1 + Math.random()) | 0).toString(16).substring(1)
			}, function() {
				return r() + r() + r() + r() + r() + r() + r() + r()
			}),
			n2node: function(e) {
				return e ? /HTML.+Element/gi.test(e) ? e : e[0] && /HTML.+Element/gi.test(e[0]) ? e[0] : null : null
			}
		}, e.exports = t.default
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.EventEmitter = void 0;
		var r = o(n(1)),
			i = o(n(5));

		function o(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		t.EventEmitter = function() {
			function e() {
				(0, r.default)(this, e), this.eventReset()
			}
			return(0, i.default)(e, [{
				key: "eventReset",
				value: function() {
					var e = this;
					this._eventListeners && Object.keys(this._eventListeners).forEach(function(t) {
						delete e._eventListeners[t]
					}), this._eventListeners = {}, this._eventOnceListener && Object.keys(this._eventOnceListener).forEach(function(t) {
						delete e._eventOnceListener[t]
					}), this._eventOnceListener = {}
				}
			}, {
				key: "on",
				value: function(e, t) {
					if(!e) throw Error({
						message: "event listener funkey undefined",
						callFunc: "adapter::wb:_on"
					});
					if(!(t instanceof Function)) throw Error({
						message: "event listener next param should be function",
						callFunc: "adapter::wb:_on"
					});
					this._eventListeners[e] = t
				}
			}, {
				key: "once",
				value: function(e, t) {
					if(!e) throw Error({
						message: "event once listener funkey undefined",
						callFunc: "adapter::wb:_once"
					});
					if(!(t instanceof Function)) throw Error({
						message: "event once listener next param should be function",
						callFunc: "adapter::wb:_once"
					});
					this._eventOnceListener[e] = t
				}
			}, {
				key: "emit",
				value: function(e, t) {
					this._eventOnceListener && this._eventOnceListener[e] instanceof Function && (this._eventOnceListener[e](t), delete this._eventOnceListener[e]), this._eventListeners && this._eventListeners[e] instanceof Function && this._eventListeners[e](t)
				}
			}]), e
		}()
	}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		t.serializeWb = {
			gateWay: {
				login: 1,
				loginAck: 2,
				join: 3,
				keep_alive: 4,
				keep_alive_ack: 5,
				keep_alive_node: 6,
				broadcast: 7,
				toUser: 8,
				logout: 9
			}
		}, t.unserializeWb = {
			gateWay: {
				1: "login",
				2: "loginAck",
				3: "join",
				4: "keep_alive",
				5: "keep_alive_ack",
				6: "keep_alive_node",
				7: "broadcast",
				8: "toUser",
				9: "logout"
			}
		}
	}, , , , , , , , , , , , , function(e, t, n) {
		"use strict";
		e.exports = {
			pushConfig: {
				1: "enable",
				2: "needBadge",
				3: "needPushNick",
				4: "pushContent",
				5: "custom",
				6: "pushPayload",
				7: "sound",
				10: "webrtcEnable"
			},
			liveOption: {
				1: "liveEnable",
				2: "webrtcEnable"
			},
			turnInfoTag: {
				0: "channelId",
				1: "tunnelServer",
				2: "proxyServer",
				3: "stunServer",
				4: "type",
				5: "dispatchServer"
			}
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = {
			pushConfig: {
				enable: 1,
				needBadge: 2,
				needPushNick: 3,
				pushContent: 4,
				custom: 5,
				pushPayload: 6,
				sound: 7,
				webrtcEnable: 10
			},
			liveOption: {
				liveEnable: 1,
				webrtcEnable: 2
			},
			turnInfoTag: {
				channelId: 0,
				tunnelServer: 1,
				proxyServer: 2,
				stunServer: 3,
				type: 4,
				dispatchServer: 5
			}
		}
	}, function(e, t, n) {
		"use strict";
		var r = {
				wb: {
					id: 11,
					initWhiteBoard: 1,
					wbKeepCalling: 2,
					wbCalleeAck: 4,
					wbNotifyCalleeAck: 5,
					wbHangup: 8,
					wbNotifyHangup: 9,
					wbControl: 10,
					wbNotifyControl: 11,
					wbNotifyRecord: 12,
					wbCreateChannel: 13,
					wbJoinChannel: 14,
					wbNotifyJoin: 15,
					wbQueryAccountUidMap: 16
				}
			},
			i = {
				initWhiteBoard: {
					sid: 11,
					cid: r.wb.initWhiteBoard,
					params: [{
						type: "StrArray",
						name: "type"
					}, {
						type: "StrArray",
						name: "accounts"
					}, {
						type: "String",
						name: "pushContent"
					}, {
						type: "String",
						name: "custom"
					}, {
						type: "Property",
						name: "pushConfig"
					}]
				},
				wbKeepCalling: {
					sid: 11,
					cid: r.wb.wbKeepCalling,
					params: [{
						type: "StrArray",
						name: "accounts"
					}, {
						type: "long",
						name: "channelId"
					}]
				},
				wbCalleeAck: {
					sid: 11,
					cid: r.wb.wbCalleeAck,
					params: [{
						type: "long",
						name: "channelId"
					}, {
						type: "bool",
						name: "accepted"
					}]
				},
				wbHangup: {
					sid: 11,
					cid: r.wb.wbHangup,
					params: [{
						type: "long",
						name: "channelId"
					}]
				},
				wbControl: {
					sid: 11,
					cid: r.wb.wbControl,
					params: [{
						type: "long",
						name: "channelId"
					}, {
						type: "byte",
						name: "type"
					}, {
						type: "string",
						name: "info"
					}]
				},
				wbCreateChannel: {
					sid: 11,
					cid: r.wb.wbCreateChannel,
					params: [{
						type: "String",
						name: "channelName"
					}, {
						type: "String",
						name: "custom"
					}, {
						type: "String",
						name: "webrtcEnable"
					}]
				},
				wbJoinChannel: {
					sid: 11,
					cid: r.wb.wbJoinChannel,
					params: [{
						type: "String",
						name: "channelName"
					}, {
						type: "Property",
						name: "liveOption"
					}]
				},
				wbQueryAccountUidMap: {
					sid: 11,
					cid: r.wb.wbQueryAccountUidMap,
					params: [{
						type: "String",
						name: "channelName"
					}, {
						type: "LongArray",
						name: "uids"
					}]
				}
			},
			o = {
				"11_1": {
					service: "datatun",
					cmd: "initWhiteBoard",
					response: [{
						type: "Number",
						name: "timetag"
					}, {
						type: "Number",
						name: "uid"
					}, {
						type: "Number",
						name: "channelId"
					}, {
						type: "PropertyArray",
						name: "turnInfoTag"
					}, {
						type: "StrArray",
						name: "keepCallingAccounts"
					}, {
						type: "StrLongMap",
						name: "accountUidMap"
					}, {
						type: "bool",
						name: "p2p"
					}, {
						type: "String",
						name: "clientConfig"
					}]
				},
				"11_2": {
					service: "datatun",
					cmd: "wbKeepCalling",
					response: [{
						type: "StrArr",
						name: "accounts"
					}]
				},
				"11_3": {
					service: "datatun",
					cmd: "wbBeCalled",
					response: [{
						type: "Number",
						name: "timetag"
					}, {
						type: "String",
						name: "account"
					}, {
						type: "Number",
						name: "channelId"
					}, {
						type: "PropertyArray",
						name: "turnInfoTag"
					}, {
						type: "StrLongMap",
						name: "accountUidMap"
					}, {
						type: "bool",
						name: "p2p"
					}, {
						type: "String",
						name: "custom"
					}, {
						type: "Number",
						name: "uid"
					}, {
						type: "String",
						name: "clientConfig"
					}, {
						type: "Property",
						name: "pushConfig"
					}]
				},
				"11_4": {
					service: "datatun",
					cmd: "wbCalleeAck",
					response: []
				},
				"11_5": {
					service: "datatun",
					cmd: "wbNotifyCalleeAck",
					response: [{
						type: "long",
						name: "channelId"
					}, {
						type: "String",
						name: "account"
					}, {
						type: "bool",
						name: "accepted"
					}]
				},
				"11_6": {
					service: "datatun",
					cmd: "wbNotifyCalleeAckSync",
					response: [{
						type: "String",
						name: "timetag"
					}, {
						type: "long",
						name: "channelId"
					}, {
						type: "byte",
						name: "type"
					}, {
						type: "bool",
						name: "accepted"
					}, {
						type: "byte",
						name: "fromClientType"
					}]
				},
				"11_7": {
					service: "datatun",
					cmd: "xxxx",
					response: []
				},
				"11_8": {
					service: "datatun",
					cmd: "wbHangup",
					response: []
				},
				"11_9": {
					service: "datatun",
					cmd: "wbNotifyHangup",
					response: [{
						type: "long",
						name: "timetag"
					}, {
						type: "long",
						name: "channelId"
					}, {
						type: "String",
						name: "account"
					}]
				},
				"11_10": {
					service: "datatun",
					cmd: "wbControl",
					response: []
				},
				"11_11": {
					service: "datatun",
					cmd: "wbNotifyControl",
					response: [{
						type: "String",
						name: "account"
					}, {
						type: "byte",
						name: "type"
					}, {
						type: "string",
						name: "info"
					}, {
						type: "long",
						name: "channelId"
					}]
				},
				"11_12": {
					service: "datatun",
					cmd: "wbNotifyRecord",
					response: [{
						type: "Property",
						name: "msg"
					}]
				},
				"11_13": {
					service: "datatun",
					cmd: "wbCreateChannel",
					response: [{
						type: "long",
						name: "timetag"
					}]
				},
				"11_14": {
					service: "datatun",
					cmd: "wbJoinChannel",
					response: [{
						type: "long",
						name: "timetag"
					}, {
						type: "long",
						name: "channelId"
					}, {
						type: "StrLongMap",
						name: "accountUidMap"
					}, {
						type: "Property",
						name: "turnInfoTag"
					}, {
						type: "String",
						name: "custom"
					}]
				},
				"11_15": {
					service: "datatun",
					cmd: "wbNotifyJoin",
					response: [{
						type: "Long",
						name: "channelId"
					}, {
						type: "StrLongMap",
						name: "accountUidMap"
					}]
				},
				"11_16": {
					service: "datatun",
					cmd: "wbQueryAccountUidMap",
					response: []
				}
			};
		e.exports = {
			idMap: r,
			cmdConfig: i,
			packetConfig: o
		}
	}, function(e, t, n) {
		"use strict";
		var r = {
			install: function(e) {
				var t = e.Protocol.fn;
				t.processDatatun = function(e) {
					switch(e.cmd) {
						case "initWhiteBoard":
							this.onWbInit(e);
							break;
						case "wbBeCalled":
							this.onWbBeCalled(e);
							break;
						case "wbKeepCalling":
							this.onWbKeepCalling(e);
							break;
						case "wbCalleeAck":
							break;
						case "wbNotifyCalleeAck":
							this.onWbNotifyCalleeAck(e);
							break;
						case "wbHangup":
							break;
						case "wbNotifyHangup":
							this.onWbNotifyHangup(e);
							break;
						case "wbNotifyControl":
							this.onWbControl(e);
							break;
						case "wbNotifyCalleeAckSync":
							this.onWbNotifyCalleeAckSync(e);
							break;
						case "wbNotifyRecord":
						case "wbCreateChannel":
							break;
						case "wbJoinChannel":
							this.wbJoinChannel(e);
							break;
						case "wbNotifyJoin":
							this.onWbNotifyJoin(e)
					}
				}, t.onWbInit = function(e) {
					if(!e.error) {
						var t = e.obj.type;
						e.obj = e.content, e.obj.type = t, e.obj.accounts = e.obj.keepCallingAccounts, this.setCurrentWhiteBoard(e.obj.channelId), this.emitAPI({
							type: "wbInited",
							obj: e.content
						}), this.wbKeepCalling(e)
					}
				}, t.setCurrentWhiteBoard = function(e) {
					this.currentWhiteBoardChannelId = e
				}, t.onWbKeepCalling = function(e) {
					e.error || e.content.accounts.length && this.wbKeepCalling(e)
				}, t.wbKeepCalling = function(e) {
					var t = this,
						n = e.obj,
						r = n.type,
						i = n.accounts,
						o = n.channelId;
					i && i.length && setTimeout(function() {
						t.currentWhiteBoardChannelId && t.currentWhiteBoardChannelId === o && t.api.wbKeepCalling({
							type: r,
							accounts: i,
							channelId: o
						}).catch(function() {})
					}, 3e3)
				}, t.onWbBeCalled = function(e) {
					e.error || this.emitAPI({
						type: "wbBeCalled",
						obj: e.content
					})
				}, t.onWbNotifyCalleeAck = function(e) {
					e.error || this.emitAPI({
						type: "wbNotifyCalleeAck",
						obj: e.content
					})
				}, t.onWbNotifyHangup = function(e) {
					e.error || this.emitAPI({
						type: "wbNotifyHangup",
						obj: e.content
					})
				}, t.onWbControl = function(e) {
					e.error || this.emitAPI({
						type: "wbControl",
						obj: e.content
					})
				}, t.onWbNotifyCalleeAckSync = function(e) {
					e.error || this.emitAPI({
						type: "wbNotifyCalleeAckSync",
						obj: e.content
					})
				}, t.onWbNotifyJoin = function(e) {
					e.error || this.emitAPI({
						type: "wbNotifyJoin",
						obj: e.content
					})
				}, t.wbJoinChannel = function(e) {
					e.obj = e.content
				}
			}
		};
		e.exports = r
	}, function(e, t, n) {
		"use strict";
		var r = n(267),
			i = {
				install: function(e) {
					var t = e.fn,
						n = e.util,
						i = r({
							util: n
						});
					t.initWhiteBoard = function(e) {
						return n.verifyOptions(e, "type accounts", "wb::initWhiteBoard"), e.pushContent = "", e.custom = "", e.pushConfig || (e.pushConfig = {}), e.pushConfig.webrtcEnable = e.webrtcEnable, e.pushConfig = new i(e.pushConfig), this.cbAndSendCmd("initWhiteBoard", e)
					}, t.wbKeepCalling = function(e) {
						return n.verifyOptions(e, "type accounts channelId", "wb::wbKeepCalling"), this.cbAndSendCmd("wbKeepCalling", e)
					}, t.wbCalleeAck = function(e) {
						return n.verifyOptions(e, "account channelId type accepted", "wb::wbCalleeAck"), this.cbAndSendCmd("wbCalleeAck", e)
					}, t.wbHangup = function(e) {
						return n.verifyOptions(e, "channelId", "wb::wbHangup"), this.cbAndSendCmd("wbHangup", e)
					}, t.wbControl = function(e) {
						return n.verifyOptions(e, "channelId type", "wb::wbControl"), e.info = e.info || "", this.cbAndSendCmd("wbControl", e)
					}, t.wbCreateChannel = function(e) {
						return this.cbAndSendCmd("wbCreateChannel", e)
					}, t.wbJoinChannel = function(e) {
						return n.verifyOptions(e, "channelName", "wb::wbJoinChannel"), n.verifyBooleanWithDefault(e, "liveEnable", !1, "", "wb::wbJoinChannel"), n.verifyBooleanWithDefault(e, "webrtcEnable", !1, "", "wb::wbJoinChannel"), this.cbAndSendCmd("wbJoinChannel", {
							channelName: e.channelName,
							liveOption: {
								liveEnable: e.liveEnable ? 1 : 0,
								webrtcEnable: e.webrtcEnable ? 1 : 0
							}
						})
					}, t.wbQueryAccountUidMap = function(e, t) {
						return this.cbAndSendCmd("wbQueryAccountUidMap", {
							channelName: e,
							uids: t
						})
					}
				}
			};
		e.exports = i
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.Signal = void 0;
		var r = f(n(1)),
			i = f(n(5)),
			o = f(n(4)),
			a = f(n(3)),
			s = n(307),
			u = n(175),
			c = n(453),
			l = f(n(306));

		function f(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var d = n(22),
			p = n(0),
			h = p.getGlobal(),
			v = (u.WHITEBOARD_CONFIG.channelTimeout, u.WHITEBOARD_CONFIG.signalTimeout),
			m = function(e) {
				function t() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
					(0, r.default)(this, t);
					var n = (0, o.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
					return n._init(e), n
				}
				return(0, a.default)(t, e), (0, i.default)(t, [{
					key: "destroy",
					value: function() {
						var e = this;
						return new Promise(function(t, n) {
							e.logger.info("wb::ws: destroy session"), e.stopHeartBeat(), e.logout(), e._wss && e._wss.readyState !== h.WebSocket.CLOSED ? (e._wss.onclose = function() {
								e.logger.debug("wb::ws: destroy onclosed"), e.emit("signalTimeout"), e.emit("signalClosed"), t()
							}, e._wss.onerror = function(n) {
								e.logger.debug("wb::ws: destroy onerror ", n), t(n)
							}, e.logger.debug("wb::ws: destroy close websocket"), e._wss.close(), clearTimeout(e._status.closingTimer), e._status.closingTimer = setTimeout(function() {
								e.emit("signalTimeout"), e.emit("signalClosed"), t(Error("wb::ws: destroy notify close because of timeout"))
							}, 9e4)) : t()
						}).then(function() {
							return e._reset(), e.logger.info("wb::ws: destroy ws onclosed"), Promise.resolve()
						})
					}
				}, {
					key: "_reset",
					value: function() {
						this._status && clearTimeout(this._status.closingTimer), this._status = {
							isDestroy: !0,
							reConnectCount: 0,
							connected: !1,
							isHeartBeating: null,
							heartBeatList: null,
							heartBeatLast: null,
							imInfo: {},
							send_bytes: 0,
							recv_bytes: 0,
							closingTimer: null
						}, this._config = {
							autoReconnect: !0
						}, this._wssUrl = null, this._wss = null, this.eventReset()
					}
				}, {
					key: "_init",
					value: function(e) {
						var t = e.autoReconnect,
							n = void 0 === t || t,
							r = e.logger,
							i = void 0 === r ? l.default.pureLogFunc : r;
						this.logger = i, this._reset(), this._status.isDestroy = !1, p.merge(this._config, {
							autoReconnect: n,
							info: p.simpleClone(e)
						})
					}
				}, {
					key: "setImInfo",
					value: function() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
						p.merge(this._status.imInfo, e)
					}
				}, {
					key: "connect",
					value: function() {
						var e = this,
							t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
							n = t.url,
							r = void 0 === n ? this._wssUrl : n,
							i = t.imInfo,
							o = void 0 === i ? this._status.imInfo : i;
						return this.setImInfo(o), r ? new Promise(function(t, n) {
							try {
								e.logger.info("wb::ws: start session " + r), e._wss = new h.WebSocket("wss://" + r), e._wss.onopen = function(n) {
									e._wssUrl = r, e.initSignal(), e._status.connected = !0, e.logger.debug("wb::ws: websocket onopen"), e.emit("signalConnected"), t(e)
								}, e._wss.onclose = e._wss.onerror = function(t) {
									e._status.connected = !1, n(t)
								}
							} catch(t) {
								e.logger.error("wb::ws: 信令连接建立失败", t), n(t)
							}
						}) : Promise.reject(Error("信令地址缺失"))
					}
				}, {
					key: "initSignal",
					value: function() {
						var e = this;
						this._wss.onmessage = function(t) {
							var n = JSON.parse(t.data || null);
							n && ("loginAck" !== n.type && n.type !== c.serializeWb.gateWay.loginAck || e.startHeartbeat(), !e._status.isHeartBeating || "keep_alive_ack" !== n.type && n.type !== c.serializeWb.gateWay.keep_alive_ack ? e.emit("signalMessage", n) : e.onHeartBeat(n))
						}, this._wss.onclose = function(t) {
							e._status.connected = !1, e.emit("signalTimeout", t)
						}, this._wss.onerror = function(t) {
							e._status.connected = !1, e.emit("signalTimeout", t)
						}
					}
				}, {
					key: "send",
					value: function(e) {
						e.type, this._wss && this._status.connected && this._wss.readyState === this._wss.OPEN && (e.browser = {}, e.browser.name = d.name, e.browser.version = d.version, this._wss.send(JSON.stringify(e)))
					}
				}, {
					key: "startHeartbeat",
					value: function() {
						var e = this;
						this._status.heartBeatLast = Date.now(), this._status.isHeartBeating && clearInterval(this._status.isHeartBeating), this._status.isHeartBeating = setInterval(function() {
							e.heartBeatHandler()
						}, 3600)
					}
				}, {
					key: "onHeartBeat",
					value: function(e) {
						var t = Date.now();
						this._status.heartBeatLast = t
					}
				}, {
					key: "heartBeatHandler",
					value: function() {
						var e = Date.now();
						if(!this._status.heartBeatLast) return this.sendMsg("keep_alive"), void(this._status.heartBeatLast = e);
						var t = Date.now() - this._status.heartBeatLast;
						t > 1e3 * v ? (this.logger.error("wb::ws: socket error: heartbeat timeout"), this.destroy()) : t > 1e3 && t <= 1e3 * v && (t > 1e4 && this.logger.warn("wb::ws: socket error: no response, keep heartbeat", this._status.heartBeatLast), this.sendMsg("keep_alive"))
					}
				}, {
					key: "stopHeartBeat",
					value: function() {
						this._status.isHeartBeating && (this._status.isHeartBeating && clearInterval(this._status.isHeartBeating), this._status.isHeartBeating = null, this._status.heartBeatLast = null)
					}
				}, {
					key: "login",
					value: function() {
						var e = this._status.imInfo,
							t = {
								token: e.cid,
								client_type: 2,
								client_net: 2,
								client_os: 6,
								client_support_record: ~~e.sessionConfig.record
							};
						this.logger.debug("wb::ws: login", t), this.sendMsg("login", t)
					}
				}, {
					key: "logout",
					value: function() {
						this.logger.debug("wb::ws: logout"), this.sendMsg("logout", {
							recv_bytes: this._status.recv_bytes,
							send_bytes: this._status.send_bytes
						})
					}
				}, {
					key: "sendMsg",
					value: function(e) {
						var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
							r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
							i = this._status.imInfo,
							o = {
								type: e = c.serializeWb.gateWay[e],
								uid: +i.uid,
								cid: +i.cid,
								version: 31,
								content: {
									params: n
								}
							},
							a = Date.now();
						t = +a.toString().slice(0, -3), r && (o.content.timestamp = t), this.send(o)
					}
				}, {
					key: "sendStats",
					value: function(e) {
						this._status.send_bytes += e.length
					}
				}, {
					key: "receiveStats",
					value: function(e) {
						this._status.recv_bytes += e.length
					}
				}]), t
			}(s.EventEmitter);
		t.Signal = m
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.WbController = void 0;
		var r = f(n(1)),
			i = f(n(5)),
			o = f(n(4)),
			a = f(n(3)),
			s = n(307),
			u = n(471),
			c = n(175),
			l = n(453);

		function f(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var d = n(0),
			p = c.WHITEBOARD_CONFIG.channelTimeout,
			h = function(e) {
				function t() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
					(0, r.default)(this, t);
					var n = (0, o.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
					return n._init(e), n
				}
				return(0, a.default)(t, e), (0, i.default)(t, [{
					key: "destroy",
					value: function() {
						var e = this;
						return this.stopSession().then(function() {
							return e._reset(), e.eventReset(), Promise.resolve()
						})
					}
				}, {
					key: "reset",
					value: function() {
						this._resetStatus()
					}
				}, {
					key: "_reset",
					value: function() {
						this._resetStatus(), this._config = {
							appKey: ""
						}, this.adapterRef = {
							status: {}
						}, this._signal = null
					}
				}, {
					key: "_resetStatus",
					value: function() {
						this.__status && (clearTimeout(this.__status.nodeTimer), clearTimeout(this.__status.reConnectTimer)), this.__status = {
							wssUrl: null,
							nodeTimer: null,
							reConnectTimer: null,
							reConnectCount: 0,
							userJoinTimer: null,
							remoteNodeStatus: {}
						}
					}
				}, {
					key: "_init",
					value: function(e) {
						this._reset();
						var t = e.adapterRef,
							n = e.nim;
						d.merge(this.adapterRef, t), this.logger = this.adapterRef.logger, this._config.appKey = n && n.options.appKey, this._initEvent()
					}
				}, {
					key: "_initEvent",
					value: function() {}
				}, {
					key: "isSignalConnected",
					value: function() {
						return this._signal && this._signal._status.connected
					}
				}, {
					key: "startSession",
					value: function() {
						var e = this,
							t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
							n = this.adapterRef.status;
						(t = d.merge(n.imInfo, t)).uid = +t.uid, t.cid = +t.cid, this.adapterRef.setSessionConfig(t.sessionConfig);
						var r = t.serverMap || {};
						return t.urlArray = t.serverAddrs && d.simpleClone(t.serverAddrs) || r.webrtcarray && JSON.parse(JSON.stringify(r.webrtcarray)) || [r.webrtc], Promise.resolve().then(function() {
							return e._signal ? (e._signal.setImInfo(t), Promise.resolve(e._signal)) : e._initSignal()
						}).then(function(t) {
							return e.__status.wssUrl = t, e.__status.reConnectCount = 0, new Promise(function(t, n) {
								e._signal.login(), e.once("LoginSuccess", function(n) {
									e.logger.debug("wb::wbCtrl: once LoginSuccess--\x3e", n), t(e.__status.wssUrl)
								}), e.once("LoginFailed", function(t) {
									e.logger.debug("wb::wbCtrl: once LoginFailed--\x3e", t), e._signal.destroy().then(function() {
										return e.emit("signalClosed"), Promise.resolve()
									}).finally(function() {
										n(t)
									})
								})
							})
						}).catch(function(e) {
							return n.signalInited = !1, n.sessionStarted = !1, Promise.reject(e)
						})
					}
				}, {
					key: "stopSession",
					value: function() {
						var e = this;
						return this.logger.info("wb::wbCtrl: start stop session ..."), this._signal && this._signal.logout(), this._stopSignal().then(function() {
							return e._resetStatus(), Promise.resolve()
						})
					}
				}, {
					key: "_initSignal",
					value: function() {
						var e = this;
						if(this._signal) return Promise.resolve();
						var t = new u.Signal({
								logger: this.logger
							}),
							n = this.adapterRef.status,
							r = n.imInfo.urlArray,
							i = null,
							o = this.adapterRef.config;
						if(!r) return Promise.reject(Error("wb::wbCtrl: 无网关服务器地址列表"));
						if(!(i = r.shift())) return Promise.reject(Error("wb::wbCtrl: 无可用的网关服务器地址"));
						if(o.sessionWsFullUrl) i = o.sessionWsFullUrl, this.logger.log("wb::wbCtrl:initSignal use customized websocket full url " + i);
						else if(o.sessionWsUrl) {
							var a = i.indexOf("?"),
								s = a > 0 ? i.substr(a) : "";
							i = o.sessionWsUrl + s, this.logger.log("wb::wbCtrl:initSignal use customized websocket host " + i)
						}
						return t.connect({
							url: i,
							imInfo: n.imInfo
						}).then(function(t) {
							return e._signal = t, e._initSignalEvent(), t.emit("connected"), Promise.resolve(t.url)
						}).catch(function(t) {
							return e._initSignal()
						})
					}
				}, {
					key: "_initSignalEvent",
					value: function() {
						var e = this,
							t = this._signal;
						t.on("signalConnected", function() {}), t.on("signalTimeout", function() {
							e.onSignalTimeout()
						}), t.on("signalMessage", function(t) {
							e.onSignalMessage(t)
						}), t.on("signalClosed", function() {
							e._resetStatus(), e.emit("signalClosed")
						})
					}
				}, {
					key: "_stopSignal",
					value: function() {
						var e = this;
						clearTimeout(this.__status.reConnectTimer);
						var t = this._signal;
						return t ? t.destroy().then(function() {
							return e._signal = null, Promise.resolve()
						}) : Promise.resolve()
					}
				}, {
					key: "_startNodeMonitor",
					value: function(e) {
						var t = this,
							n = this.__status.remoteNodeStatus;
						n[e] = n[e] || {
							now: Date.now(),
							total: p
						}, n[e].now = Date.now(), this.__status.nodeTimer || (this.__status.nodeTimer = setInterval(function() {
							var r = Date.now();
							Object.keys(n).forEach(function(i) {
								if(n[i]) {
									if(r - n[i].now > 1e3 * p || n[i].total <= 0) {
										t.logger.warn("wb::wbCtrl: 节点" + p + "s超时离开:", i);
										var o = t.adapterRef.status;
										return t.emit("userLeft", {
											uid: i,
											type: c.WHITEBOARD_CONSTS.HANGUP_TYPE_TIMEOUT,
											channelId: o.imInfo.cid
										}), delete t.__status.remoteNodeStatus[e], void delete n[i]
									}
									r - n[i].now > 3e3 && (n[i].total -= 3)
								}
							})
						}, 3e3))
					}
				}, {
					key: "onSignalTimeout",
					value: function() {
						var e = this;
						if(this.__status.reConnectCount >= 8) return this.logger.debug("wb::wbCtrl: signal finally closed of exceed retry times"), this.emit("disconnected"), void this.emit("signalClosed");
						this._stopSignal().then(function() {
							e.__status.reConnectCount++, e.logger.debug("wb::wbCtrl: 5s后尝试第" + e.__status.reConnectCount + "次重连服务器"), e.emit("willReconnect", e.__status.reConnectCount), clearTimeout(e.__status.reConnectTimer), e.__status.reConnectTimer = setTimeout(function() {
								var t = e.adapterRef.status;
								t.imInfo && t.imInfo.serverAddrs ? (e.logger.debug("wb::wbCtrl: start No." + e.__status.reConnectCount + " retry connecting " + e.__status.wssUrl), e.__status.wssUrl && t.imInfo.serverAddrs.unshift(e.__status.wssUrl), e.startSession().then(function() {
									e.emit("connected", e.__status.reConnectCount)
								}).catch(function(t) {
									e.logger.error("wb::wbCtrl: reconnect error", t), !0 !== t.notReedReconnect ? e.onSignalTimeout() : e.emit("signalClosed")
								})) : e.logger.debug("wb::wbCtrl: no im info, cannot retry...")
							}, 5e3)
						})
					}
				}, {
					key: "onSignalMessage",
					value: function(e) {
						var t = this.adapterRef.status;
						e && e.cid && e.uid && (e.cid = +e.cid, e.uid = +e.uid);
						var n = l.unserializeWb.gateWay[e.type];
						"logout" === n || e.cid === t.imInfo.cid ? ("logout" === n && (this.logger.debug("wb::wbCtrl: emit logout event by message ", e), this.emit("onceLogout")), this["on" + n] && this["on" + n](e)) : this.logger.error("wb::wbCtrl: ws msg not belong to this session")
					}
				}, {
					key: "onkeep_alive_node",
					value: function(e) {
						var t = e.uid,
							n = this.__status.remoteNodeStatus;
						n[t] = n[t] || {
							now: Date.now(),
							total: p
						}, n[t].now = Date.now(), n[t].total = p
					}
				}, {
					key: "onloginAck",
					value: function(e) {
						var t = this,
							n = e.content.params.auth_result - 0;
						if(200 !== n) return this.logger.error("wb::wbCtrl: 服务器验证不通过, 断开连接"), void this.emit("LoginFailed", {
							code: n,
							error: "服务器验证不通过, 断开连接",
							notReedReconnect: !0
						});
						this.logger.info("wb::wbCtrl: 白板服务器登录成功", e), this.emit("LoginSuccess"), "p2p" === this.adapterRef.status.imInfo.sessionMode && (this.logger.debug("wb::wbCtrl: 180s waiting for p2p user join..."), clearTimeout(this.__status.userJoinTimer), this.__status.userJoinTimer = setTimeout(function() {
							t.__status.userJoinTimer && 0 === Object.keys(t.__status.remoteNodeStatus).length && (t.emit("onceLogout"), t.emit("error", {
								error: "点对点对方登录超时, 断开连接"
							}))
						}, 18e4))
					}
				}, {
					key: "onjoin",
					value: function(e) {
						this.logger.info("wb::wbCtrl: onjoin", e);
						var t = e.content && e.content.params && e.content.params.client_id,
							n = this.adapterRef.status;
						this._startNodeMonitor(t), "p2p" === n.imInfo.sessionMode && (n.target = {
							uid: t
						}, this.__status.userJoinTimer && clearTimeout(this.__status.userJoinTimer), this.__status.userJoinTimer = null), this.emit("userJoined", {
							uid: t,
							cid: e.cid
						})
					}
				}, {
					key: "onlogout",
					value: function(e) {
						this.logger.info("wb::wbCtrl: onlogout", e), this.emit("userLeft", {
							uid: e.uid,
							channelId: e.cid
						}), delete this.__status.remoteNodeStatus[e.uid]
					}
				}, {
					key: "ontoUser",
					value: function(e) {
						this.onData(e)
					}
				}, {
					key: "onbroadcast",
					value: function(e) {
						this.onData(e)
					}
				}, {
					key: "onData",
					value: function(e) {
						var t = e.content && e.content.params && e.content.params.data,
							n = e.uid;
						this._signal.receiveStats(t);
						try {
							t = JSON.parse(t || null)
						} catch(e) {}
						this.onkeep_alive_node({
							uid: n
						}), this.emit("data", {
							uid: n,
							data: t
						})
					}
				}, {
					key: "sendData",
					value: function(e) {
						var t = e.data,
							n = e.toAccount,
							r = void 0 === n ? 0 : n;
						if(t)
							if(this._signal) {
								this._signal.sendStats(t);
								var i = {
									data: t
								};
								"0" === r && (r = +r);
								var o = this.adapterRef.status;
								"p2p" === o.imInfo.sessionMode ? i.dst_client_id = o.target && o.target.uid || 0 : r && (i.dst_client_id = this.adapterRef.getUidWithAccount(r));
								var a = i.dst_client_id ? "toUser" : "broadcast";
								this._signal.sendMsg(a, i)
							} else this.emit("error", {
								message: "websocket session is not exists ...",
								callFunc: "wb::wbCtrl:sendData"
							})
					}
				}]), t
			}(s.EventEmitter);
		t.WbController = h
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.ImController = void 0;
		var r = c(n(1)),
			i = c(n(5)),
			o = c(n(4)),
			a = c(n(3)),
			s = n(307),
			u = c(n(306));

		function c(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var l = n(0),
			f = function(e) {
				function t() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
					(0, r.default)(this, t);
					var n = (0, o.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
					return n._init(e), n
				}
				return(0, a.default)(t, e), (0, i.default)(t, [{
					key: "destroy",
					value: function() {
						return this._reset(), this.eventReset(), Promise.resolve()
					}
				}, {
					key: "reset",
					value: function() {
						this._resetStatus()
					}
				}, {
					key: "_reset",
					value: function() {
						this._resetStatus(), this._config = {}, this._nim = null, this.adapterRef || (this.adapterRef = {})
					}
				}, {
					key: "_resetStatus",
					value: function() {
						if(this._nim) {
							var e = this._nim;
							e.protocol && e.protocol.setCurrentWhiteBoard && e.protocol.setCurrentWhiteBoard()
						}
						this.__status && (clearTimeout(this.__status.timeoutTimer), this.__status.timeoutTimer = null)
					}
				}, {
					key: "_init",
					value: function(e) {
						this._reset();
						var t = e.adapterRef,
							n = e.nim;
						this._nim = n, l.merge(this.adapterRef, t), this.logger = this.adapterRef.logger, this._initEvent()
					}
				}, {
					key: "_initEvent",
					value: function() {
						this._nim.on("wbInited", this._onInited.bind(this)), this._nim.on("wbBeCalled", this._onBeCalled.bind(this)), this._nim.on("wbNotifyCalleeAck", this._onCalleeAck.bind(this)), this._nim.on("wbNotifyHangup", this._onHangup.bind(this)), this._nim.on("wbControl", this._onControl.bind(this)), this._nim.on("wbNotifyCalleeAckSync", this._onCalleeAckSync.bind(this)), this._nim.on("wbNotifyJoin", this._onNotifyJoin.bind(this))
					}
				}, {
					key: "initWhiteBoard",
					value: function() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
						if(this._nim) return this._nim.initWhiteBoard(e);
						return Promise.reject({
							message: "nim not exists",
							callFunc: "wb::imCtrl: initWhiteBoard"
						})
					}
				}, {
					key: "_onInited",
					value: function(e) {
						this.emit("inited", e)
					}
				}, {
					key: "_onBeCalled",
					value: function(e) {
						e = u.default.format(e);
						var t = this.adapterRef.status;
						t.channelId ? t.signalInited && this.logger.info("wb::imCtrl: beCalling when already in session", e) : (t.channelId = e.channelId, t.beCalledInfo = e, this.logger.info("wb::imCtrl: beCalling and set info", e)), this.emit("beCalling", e)
					}
				}, {
					key: "_onNotifyJoin",
					value: function(e) {
						var t = this.adapterRef.status;
						this.logger.info("wb::main: onNotifyJoin from IM");
						var n = e.accountUidMap,
							r = t.needQueryAccountMap;
						for(var i in this.adapterRef.parseAccountUidMap(n), n) {
							var o = i,
								a = n[i];
							if(a in r) {
								var s = r[a];
								s.account = o, delete r[a], this.logger.info("wb::main: onNotifyJoin from IM", e), this.emit("userJoined", s)
							}
						}
					}
				}, {
					key: "_onCalleeAck",
					value: function(e) {
						if(this.logger.info("wb::imCtrl: onCalleeAck", e), !this.notCurrentChannelId(e)) {
							var t = e.account,
								n = this.adapterRef.status,
								r = n.beCalledInfo || n.callerInfo;
							n.target.account = t, this.adapterRef.setSessionConfig({
								signalEndTime: Date.now()
							}), e.accepted ? (n.callAccepted = !0, this.emit("onCalleeAckAccept")) : (this.logger.info("wb::imCtrl: call Rejected", e), this.packNetcallRecord({
								type: e.type,
								channelId: e.channelId,
								isCaller: !0,
								target: e.account,
								recordType: "netcallRejected"
							}), this.emit("onCalleeAckReject", {
								type: r.type,
								account: t
							}))
						}
					}
				}, {
					key: "_onHangup",
					value: function(e) {
						var t = this.adapterRef.status;
						t.channelId && ("p2p" !== t.sessionMode && null !== t.sessionMode || (this.logger.info("wb::imCtrl: on hangup from IM"), this.emit("onHangup", {
							channelId: e.channelId || t.channelId,
							account: e.account,
							type: 0
						})))
					}
				}, {
					key: "_onControl",
					value: function(e) {
						this.emit("control", e)
					}
				}, {
					key: "_onCalleeAckSync",
					value: function(e) {
						var t = this;
						this.isCurrentChannelId(e) ? this._resetWhenHangup().then(function() {
							t.emit("callerAckSync", e)
						}) : this.emit("callerAckSync", e)
					}
				}, {
					key: "packNetcallRecord",
					value: function() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
							t = this.adapterRef.status,
							n = e.recordType,
							r = e.type || t.type,
							i = e.channelId || t.channelId,
							o = e.duration || 0,
							a = e.isCaller || t.isCaller,
							s = e.target || t.target.account,
							c = this.nimGetAccount(),
							l = a ? c : s,
							f = a ? s : c,
							d = +new Date;
						this._nim.protocol.onMsg({
							content: {
								msg: {
									attach: JSON.stringify({
										data: {
											calltype: r,
											channel: i,
											duration: o,
											ids: [c, s],
											time: d
										},
										id: n
									}),
									from: l,
									fromClientType: a ? 16 : 0,
									fromDeviceId: "",
									fromNick: "",
									idClient: u.default.guid(),
									idServer: u.default.guid(),
									scene: 0,
									time: d,
									to: f,
									type: 5
								}
							}
						})
					}
				}, {
					key: "nimFn",
					value: function(e, t) {
						return this._nim[e](t)
					}
				}, {
					key: "nimGetAccount",
					value: function() {
						return this._nim && this._nim.account
					}
				}, {
					key: "isCurrentChannelId",
					value: function() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
							t = this.adapterRef.status;
						return t.channelId && t.channelId === e.channelId
					}
				}, {
					key: "notCurrentChannelId",
					value: function() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
						return !this.isCurrentChannelId(e)
					}
				}]), t
			}(s.EventEmitter);
		t.ImController = f
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		t.wbControl = {
			CONTROL_COMMAND_BUSY: 9,
			CONTROL_COMMAND_SELF_ON_BACKGROUND: 12,
			CONTROL_COMMAND_START_NOTIFY_RECEIVED: 13
		}
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		t.wbMap = {
			WB_TYPE_TCP: 2,
			WB_TYPE_UDP: 3,
			CALL_TYPE_NONE: 0,
			CALL_TYPE_AUDIO: 1,
			HANGUP_TYPE_NORMAL: 0,
			HANGUP_TYPE_TIMEOUT: -1
		}
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.WhiteBoardBase = void 0;
		var r = l(n(1)),
			i = l(n(5)),
			o = l(n(4)),
			a = l(n(3)),
			s = n(175),
			u = n(307),
			c = l(n(306));

		function l(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var f = n(22),
			d = n(0),
			p = d.getGlobal(),
			h = function(e) {
				function t() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
					(0, r.default)(this, t);
					var n = (0, o.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
					return n.__init(e), n
				}
				return(0, a.default)(t, e), (0, i.default)(t, [{
					key: "destroy",
					value: function() {
						return this.__reset(), this.eventReset(), Promise.resolve()
					}
				}, {
					key: "reset",
					value: function() {
						this.__resetStatus()
					}
				}, {
					key: "__init",
					value: function(e) {
						this.__reset();
						var t = e.logger,
							n = e.debug,
							r = e.container,
							i = e.remoteContainer,
							o = e.sessionWsUrl,
							a = e.sessionWsFullUrl;
						this.logger = n && (t || p.console) || c.default.pureLogFunc, d.merge(this.adapterRef, {
							imCtrl: null,
							wbCtrl: null,
							logger: this.logger,
							container: c.default.n2node(r),
							remoteContainer: c.default.n2node(i)
						}), "string" == typeof a && /^[^.]+\.[^.]+/.test(a) && (this._config.sessionWsFullUrl = a), "string" == typeof o && /^[^.]+\.[^.]+/.test(o) && (this._config.sessionWsUrl = o), "undefined" != typeof window && (/safari/gi.test(f.name) ? p.addEventListener("pagehide", this._beforeunload.bind(this)) : p.addEventListener("beforeunload", this._beforeunload.bind(this)))
					}
				}, {
					key: "__reset",
					value: function() {
						var e = this;
						this.adapterRef && Object.keys(this.adapterRef).forEach(function(t) {
							delete e.adapterRef[t]
						}), this._config = {}, this.adapterRef = {
							setSessionConfig: this.__setSessionConfig.bind(this),
							getUidWithAccount: this.__getUidWithAccount.bind(this),
							parseAccountUidMap: this.__parseAccountUidMap.bind(this)
						}, this.__resetStatus(), this.eventReset()
					}
				}, {
					key: "__resetStatus",
					value: function() {
						clearTimeout(this._emitTimer), this._emitTimer = null, clearTimeout(this._sessionTimer), this._sessionTimer = null, this._status || (this._status = {}), d.merge(this._status, {
							signalInited: !1,
							channelId: null,
							type: null,
							target: {
								account: null,
								uid: null
							},
							sessionConfig: {},
							sessionMode: null,
							sessionStarted: !1,
							imInfo: {},
							calling: !1,
							isCaller: !1,
							callee: null,
							callAccepted: !1,
							callerInfo: null,
							beCalledInfo: null,
							needQueryAccountMap: {},
							accountUidMap: {},
							uidAccountMap: {},
							isOnHangup: !1
						}), d.merge(this.adapterRef, {
							status: this._status,
							config: this._config
						})
					}
				}, {
					key: "_beforeunload",
					value: function() {}
				}, {
					key: "serializeType",
					value: function(e, t) {
						return t && t !== s.WHITEBOARD_CONSTS.CALL_TYPE_NONE ? t === s.WHITEBOARD_CONSTS.CALL_TYPE_NONE ? [e] : [t, e] : [e]
					}
				}, {
					key: "unserializeType",
					value: function(e) {
						var t = {},
							n = -1;
						return e.map(function(e, r) {
							e === s.WHITEBOARD_CONSTS.CALL_TYPE_AUDIO && (t.netcallType = s.WHITEBOARD_CONSTS.CALL_TYPE_AUDIO, n = r)
						}), -1 !== n && e.splice(t.i, 1), t.type = e[0], t
					}
				}, {
					key: "__setSessionConfig",
					value: function() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
						this._status.sessionConfig || (this._status.sessionConfig = {}), d.merge(this._status.sessionConfig, e)
					}
				}, {
					key: "__setAppKey",
					value: function(e) {
						e && (this._config.appKey = e)
					}
				}, {
					key: "__getAccount",
					value: function() {
						return this.adapterRef.imCtrl ? this.adapterRef.imCtrl.nimGetAccount() : null
					}
				}, {
					key: "__getUid",
					value: function() {
						if(this._status.accountUidMap) {
							var e = this.__getAccount();
							return this._status.accountUidMap[e] || "-1"
						}
						return "-1"
					}
				}, {
					key: "__parseAccountUidMap",
					value: function(e) {
						var t = this;
						Object.keys(e).forEach(function(n) {
							t.__addAccountUidMap({
								account: n,
								uid: e[n]
							})
						})
					}
				}, {
					key: "__addAccountUidMap",
					value: function(e) {
						var t = e.account,
							n = e.uid;
						this._status.uidAccountMap[n] = t, this._status.accountUidMap[t] = n
					}
				}, {
					key: "__getAccountWithUid",
					value: function(e) {
						if(this._status.uidAccountMap) return this._status.uidAccountMap[e]
					}
				}, {
					key: "__getUidWithAccount",
					value: function(e) {
						if(this._status.accountUidMap) return this._status.accountUidMap[e]
					}
				}]), t
			}(u.EventEmitter);
		t.WhiteBoardBase = h
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.WhiteBoardController = void 0;
		var r = h(n(58)),
			i = h(n(1)),
			o = h(n(5)),
			a = h(n(4)),
			s = h(n(120)),
			u = h(n(3)),
			c = n(476),
			l = n(473),
			f = n(472),
			d = n(175),
			p = h(n(306));

		function h(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var v = n(0);
		t.WhiteBoardController = function(e) {
			function t() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				(0, i.default)(this, t);
				var n = (0, a.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
				return n._init(e), n
			}
			return(0, u.default)(t, e), (0, o.default)(t, [{
				key: "_init",
				value: function(e) {
					this.reset(), this.adapterRef.imCtrl = new l.ImController((0, r.default)({}, e, {
						adapterRef: this.adapterRef
					})), this.adapterRef.wbCtrl = new f.WbController((0, r.default)({}, e, {
						adapterRef: this.adapterRef
					})), this._initEvent()
				}
			}, {
				key: "_initEvent",
				value: function() {
					var e = this,
						t = this.adapterRef,
						n = t.imCtrl,
						r = t.wbCtrl;
					n && (n.on("onCalleeAckAccept", function() {
						e._initSession()
					}), n.on("onCalleeAckReject", function(t) {
						e._resetWhenHangup().then(function() {
							e.emit("callRejected", t)
						})
					}), n.on("onHangup", function(t) {
						e._resetWhenHangup().then(function() {
							e.emit("hangup", t)
						})
					}), n.on("inited", function(t) {
						e.emit("inited", t)
					}), n.on("beCalling", function(t) {
						e.emit("beCalling", t)
					}), n.on("control", function(t) {
						e.emit("control", t)
					}), n.on("callerAckSync", function(t) {
						e.emit("callerAckSync", t)
					})), r && (r.on("userJoined", function(t) {
						e._onUserJoin(t)
					}), r.on("userLeft", function(t) {
						e._onUserLeft(t)
					}), r.on("signalClosed", function(t) {
						e.emit("signalClosed", t)
					}), r.on("willReconnect", function(t) {
						e.emit("willReconnect", t)
					}), r.on("connected", function(t) {
						e.emit("connected", t)
					}), r.on("disconnected", function(t) {
						e.emit("disconnected", t)
					}), r.on("error", function(t) {
						e.emit("error", t)
					}), r.on("data", function(t) {
						e.emit("data", {
							account: e.__getAccountWithUid(t.uid),
							data: t.data
						})
					}))
				}
			}, {
				key: "reset",
				value: function() {
					var e = this.adapterRef,
						n = e.imCtrl,
						r = e.wbCtrl;
					n && n.reset(), r && r.reset(), (0, s.default)(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "reset", this).call(this)
				}
			}, {
				key: "destroy",
				value: function() {
					var e = this,
						n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
						r = this.adapterRef,
						i = r.wbCtrl,
						o = r.imCtrl;
					return Promise.resolve().then(function() {
						return i ? i.destroy() : Promise.resolve()
					}).then(function() {
						return o ? o.destroy() : Promise.resolve()
					}).then(function() {
						return(0, s.default)(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", e).call(e)
					}).then(function() {
						return n.done instanceof Function && n.done(), Promise.resolve()
					})
				}
			}, {
				key: "_initWhiteBoard",
				value: function() {
					var e = this,
						t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
						n = t.type,
						r = t.netcallType,
						i = t.pushConfig;
					this._status.type = n, this._status.netcallType = r || d.WHITEBOARD_CONSTS.CALL_TYPE_NONE, this.__setSessionConfig({
						signalStartTime: Date.now()
					});
					var o = {
						type: this.serializeType(n, this._status.netcallType),
						accounts: [this._status.callee],
						pushConfig: i,
						webrtcEnable: !0
					};
					return this.adapterRef.imCtrl.initWhiteBoard(o).then(function(t) {
						var n = p.default.format(t);
						v.merge(e._status, {
							signalInited: !0,
							sessionMode: "p2p",
							callerInfo: n,
							channelId: t.channelId,
							imInfo: v.merge(n, {
								role: 0,
								sessionMode: "p2p"
							})
						}), e.logger.info("wb::main:initWhiteBoard:", e._status)
					}).catch(function(t) {
						return e.logger.error("wb::main:initWhiteBoard:", t), e.__setSessionConfig({
							signalEndTime: Date.now()
						}), e._resetWhenHangup(), Promise.reject(t)
					})
				}
			}, {
				key: "_initSession",
				value: function() {
					var e = this,
						t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
					this._status.sessionMode = "p2p";
					var n = this._status.isCaller ? this._status.callerInfo : t.beCalledInfo;
					this.__parseAccountUidMap(n.accountUidMap), !n.account && n.uid && (n.account = this.__getAccountWithUid(n.uid)), this._status.callAccepted = !0, this._status.signalInited = !0, this.__setSessionConfig({
						signalEndTime: Date.now()
					}), this._status.target.uid = this.__getUidWithAccount(this._status.target.account);
					var r = {
						type: n.type,
						account: this._status.target && this._status.target.account || n.account,
						channelId: n.channelId
					};
					n.netcallType && (r.netcallType = n.netcallType), this._status.imInfo.target = this._status.target, clearTimeout(this._emitTimer), this._emitTimer = setTimeout(function() {
						e.emit("callAccepted", r)
					}, 0)
				}
			}, {
				key: "_startSession",
				value: function() {
					var e = this._status,
						t = e.imInfo;
					t.cid = t.cid || t.channelId;
					var n = e.sessionMode = e.sessionMode || "p2p";
					t.sessionMode = n, t.sessionConfig = e.sessionConfig, t.serverMap && t.serverMap.constructor === String && (t.serverMap = JSON.parse(t.serverMap))
				}
			}, {
				key: "_response",
				value: function() {
					var e = this,
						t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
						n = t.fn || "calleeAck",
						r = t.beCalledInfo || this._status.beCalledInfo,
						i = r.accepted = !1 !== t.accepted;
					return i ? (v.merge(this._status, {
						channelId: r.channelId,
						sessionMode: "p2p",
						type: r.type,
						calling: !0,
						imInfo: v.merge(r, {
							sessionMode: this.sessionMode,
							role: 0
						})
					}), this._status.target.account = r.account, this.__setSessionConfig({
						signalStartTime: Date.now()
					})) : (this.logger.info("reject call", r), this.adapterRef.imCtrl.packNetcallRecord({
						type: r.type,
						channelId: r.channelId,
						isCaller: !1,
						target: r.account,
						recordType: "rejectNetcall"
					})), this.adapterRef.imCtrl.nimFn(n, r).then(function() {
						i && (t.sessionConfig && e.__setSessionConfig(t.sessionConfig), e._status.beCalledInfo = r, e._initSession({
							beCalledInfo: r
						}))
					}, function(t) {
						throw e.logger.error(t), t
					})
				}
			}, {
				key: "_control",
				value: function() {
					var e = this,
						t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
					if(t.channelId = t.channelId || this._status.channelId, t.command && t.channelId) {
						var n = t.fn || "wbControl";
						return t.type = t.command, this.adapterRef.imCtrl.nimFn(n, t).catch(function(t) {
							e.logger.error(t)
						})
					}
				}
			}, {
				key: "_hangup",
				value: function() {
					var e = this,
						t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
						n = t.channelId,
						r = void 0 === n ? this._status.channelId : n,
						i = t.recordType,
						o = void 0 === i ? "cancelWhiteBoardBeforeAccept" : i;
					if(t.recordType = o, r) {
						var a = t.fn || "hangup";
						return this.adapterRef.imCtrl.nimFn(a, {
							channelId: r
						}).then(function() {
							if(r === e._status.channelId) return e._status.isCaller && !e._status.callAccepted && (e.logger.info("wb::main:_hangup ", o, {
								channelId: r
							}), e.adapterRef.imCtrl.packNetcallRecord({
								recordType: o
							})), new Promise(function(t) {
								clearTimeout(e._emitTimer), e._emitTimer = setTimeout(function() {
									t()
								}, 1e3), e.adapterRef.wbCtrl.once("onceLogout", function() {
									clearTimeout(e._emitTimer), t()
								})
							}).then(function() {
								return e._resetWhenHangup()
							})
						})
					}
					return Promise.resolve()
				}
			}, {
				key: "_createChannel",
				value: function(e) {
					var t = this,
						n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					return v.verifyOptions(n, "channelName"), n.custom = n.custom || "", this.__setSessionConfig({
						signalStartTime: Date.now()
					}), this.adapterRef.imCtrl.nimFn(e, n).then(function(e) {
						return Promise.resolve(e)
					}).catch(function(e) {
						return t.__setSessionConfig({
							signalEndTime: Date.now()
						}), Promise.reject(e)
					})
				}
			}, {
				key: "_joinChannel",
				value: function(e) {
					var t = this,
						n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					return this.adapterRef.imCtrl.nimFn(e, n).then(function(e) {
						t.__setSessionConfig({
							signalEndTime: Date.now()
						}), t._status.signalInited = !0, t._status.sessionMode = e.sessionMode = "meeting", t.__parseAccountUidMap(e.accountUidMap);
						var n = t.__getAccount();
						return e.uid = t.__getUidWithAccount(n), Promise.resolve(e)
					}).catch(function(e) {
						return t.__setSessionConfig({
							signalEndTime: Date.now()
						}), Promise.reject(e)
					})
				}
			}, {
				key: "_resetWhenHangup",
				value: function() {
					var e = this,
						t = [];
					return this.adapterRef.wbCtrl && t.push(Promise.resolve().then(function() {
						return e.adapterRef.wbCtrl.stopSession()
					})), Promise.all(t).then(function() {
						return e.__resetStatus(), Promise.resolve()
					})
				}
			}, {
				key: "_onUserJoin",
				value: function(e) {
					if(e.type = e.type || this._status.type, e.account = this.__getAccountWithUid(e.uid), e.mode = this._status.sessionMode, e.account !== this.__getAccount()) {
						if(e.account) return this.logger.info("wb::main: onUserJoin from wbCtrl", e), void this.emit("joinChannel", e);
						if(this._status.needQueryAccountMap[e.uid] = e, this.adapterRef.imCtrl) {
							var t = this.adapterRef.imCtrl._nim || {};
							(t.queryAccountUidMap || t.wbQueryAccountUidMap).call(t, this._status.channelName, [e.uid])
						}
					}
				}
			}, {
				key: "_onUserLeft",
				value: function(e) {
					var t = this,
						n = this._status.imInfo;
					n.channelId && (this.logger.info("wb::main: onUserLeft from wbCtrl", e), "p2p" === n.sessionMode ? this._resetWhenHangup().then(function() {
						t.emit("hangup", {
							channelId: e.channelId || e.cid,
							account: t._status.target.account,
							type: e.type || 0
						})
					}) : this.emit("leaveChannel", {
						channelId: e.channelId || e.cid,
						account: this.__getAccountWithUid(e.uid),
						type: e.type || 0
					}))
				}
			}]), t
		}(c.WhiteBoardBase)
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.WhiteBoardClient = void 0;
		var r = c(n(1)),
			i = c(n(5)),
			o = c(n(4)),
			a = c(n(120)),
			s = c(n(3)),
			u = n(477);

		function c(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var l = n(0);
		t.WhiteBoardClient = function(e) {
			function t() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				return(0, r.default)(this, t), (0, o.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
			}
			return(0, s.default)(t, e), (0, i.default)(t, [{
				key: "destroy",
				value: function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
					(0, a.default)(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this).call(this, e)
				}
			}, {
				key: "call",
				value: function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
						t = e.account,
						n = e.type,
						r = e.netcallType,
						i = e.pushConfig,
						o = e.sessionConfig;
					return l.merge(this._status, {
						calling: !0,
						isCaller: !0,
						callee: t
					}), this._status.target.account = t, o && (o.signalStartTime = Date.now(), this.__setSessionConfig(o)), this._initWhiteBoard({
						type: n,
						netcallType: r,
						pushConfig: i
					})
				}
			}, {
				key: "response",
				value: function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
					return e.fn = "wbCalleeAck", this._response(e)
				}
			}, {
				key: "control",
				value: function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
					return e.fn = "wbControl", this._control(e)
				}
			}, {
				key: "hangup",
				value: function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
					return e.fn = "wbHangup", this._hangup(e)
				}
			}, {
				key: "createChannel",
				value: function(e) {
					return this._createChannel("wbCreateChannel", e)
				}
			}, {
				key: "joinChannel",
				value: function(e) {
					var t = this;
					if(this._status.signalInited) return Promise.reject(Error("wb::client: 已经加入房间"));
					if(!e.channelName) return Promise.reject(Error("wb::client: 缺少参数 channelName"));
					var n = e.sessionConfig;
					return n && (l.merge(this, {
						sessionConfig: n
					}), this.__setSessionConfig(n), this.__setSessionConfig({
						signalStartTime: Date.now()
					})), this._joinChannel("wbJoinChannel", {
						channelName: e.channelName
					}).then(function(r) {
						t.logger.debug("wb::client: joinChannel ", r);
						var i = void 0;
						r.turnInfoTag && (i = r.turnInfoTag.dispatchServer && JSON.parse(r.turnInfoTag.dispatchServer) || r.turnInfoTag.tunnelServer), i && i.constructor === String && (i = i.split(";")), i && i.constructor === Object && (i = i.webrtcarray), r.serverAddrs = i || [], t._status.type = r.type = r.type;
						var o = r.account = t.__getAccount();
						return r.sessionConfig = n, t._status.imInfo = r, t._status.imInfo.role = void 0 === e.role ? 0 : e.role, clearTimeout(t._sessionTimer), t._sessionTimer = setTimeout(function() {
							t._status.sessionStarted || t.startSession(e)
						}, 300), Promise.resolve({
							uid: r.uid,
							account: o,
							type: r.type,
							cid: r.channelId
						})
					}).catch(function(e) {
						return Promise.reject(e)
					})
				}
			}, {
				key: "getStatus",
				value: function() {
					return l.simpleClone(this._status)
				}
			}, {
				key: "getAccount",
				value: function() {
					return this.__getAccount()
				}
			}, {
				key: "getUid",
				value: function() {
					return this.__getUid()
				}
			}, {
				key: "isCurrentChannelId",
				value: function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
					return this._status.channelId && this._status.channelId === e.channelId
				}
			}, {
				key: "notCurrentChannelId",
				value: function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
					return !this.isCurrentChannelId(e)
				}
			}, {
				key: "startSession",
				value: function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
					return this._status.sessionStarted ? Promise.resolve() : (this._status.sessionStarted = !0, e.wssArr ? this._status.imInfo.serverAddrs = Array.isArray(e.wssArr) ? e.wssArr : [e.wssArr] : e.serverAddrs && (this._status.imInfo.serverAddrs = Array.isArray(e.serverAddrs) ? e.serverAddrs : [e.serverAddrs]), e.uid && (this._status.imInfo = e.uid), e.cid && (this._status.imInfo = e.cid), this._startSession(), this.adapterRef.wbCtrl.startSession(this._status.imInfo))
				}
			}, {
				key: "stopSession",
				value: function() {
					return this._resetWhenHangup()
				}
			}, {
				key: "leaveChannel",
				value: function() {
					var e = this,
						t = l.simpleClone(this._status.imInfo || {});
					return this.stopSession().then(function() {
						return e.emit("leaveChannel", t), Promise.resolve()
					})
				}
			}, {
				key: "sendData",
				value: function(e) {
					var t = e.data,
						n = e.toAccount,
						r = void 0 === n ? 0 : n;
					this.adapterRef.wbCtrl.sendData({
						data: t,
						toAccount: r
					})
				}
			}, {
				key: "isChannelConnected",
				value: function() {
					return this.adapterRef.wbCtrl.isSignalConnected()
				}
			}]), t
		}(u.WhiteBoardController)
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(478);
		Object.defineProperty(t, "WhiteBoardClient", {
			enumerable: !0,
			get: function() {
				return r.WhiteBoardClient
			}
		})
	}, function(e, t, n) {
		"use strict";
		var r, i = n(58),
			o = (r = i) && r.__esModule ? r : {
				default: r
			},
			a = n(479),
			s = n(175);
		n(140);
		var u = n(470),
			c = n(469),
			l = n(468),
			f = n(467),
			d = n(466),
			p = n(0),
			h = n(2),
			v = p.getGlobal(),
			m = (0, o.default)({
				version: h.info.version
			}, s.WHITEBOARD_CONSTS, {
				install: function(e, t) {
					u.install(e, t), c.install(e, t), e.parser.mixin({
						configMap: l,
						serializeMap: f,
						unserializeMap: d
					})
				},
				getInstance: function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
					if(!e.nim) throw Error({
						message: "you should passing nim into getInstance function",
						callFunc: "entry::wb:getInstance"
					});
					var t = p.simpleClone(s.DEFAULT_WHITEBOARD_OPTION);
					return e = p.merge(t, e), new a.WhiteBoardClient(e)
				},
				destroy: function(e) {
					e && (e.destroy(), e = null)
				},
				checkCompatibility: function() {
					return v.WebSocket instanceof Function
				}
			});
		e.exports = m
	}])
});