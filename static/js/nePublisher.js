window.console || (window.console = {}), window.console.log || (window.console.log = function () {}),
    function () {
        function e(t) {
            var i, r, s, n = 1;
            this.initPublish = {
                previewWindowWidth: 862,
                previewWindowHeight: 446,
                videoWidth: 640,
                videoHeight: 480,
                fps: 15,
                bitrate: 600,
                wmode: "transparent",
                quality: "high",
                allowScriptAccess: "always"
            }, "string" == typeof arguments[n] && (i = arguments[n], n++), "object" == typeof arguments[n] && (e.__extend(this.initPublish, arguments[n]), n++), "object" == typeof arguments[n] && (e.__extend(this.initPublish, arguments[n]), n++), "function" == typeof arguments[n] && (r = arguments[n], n++), "function" == typeof arguments[n] && (s = arguments[n]), e.__id || (e.__id = 100), e.__publishers || (e.__publishers = []), e.__publishers.push(this), this.id = e.__id++, this.initSuccessCallbackFun = r, this.initErrorCallbackFun = s, this.errorMessageCallbackFun = null, this.component = {
                cameraList: [],
                microPhoneList: []
            }, this.container = t, this.previewWindowWidth = this.initPublish.previewWindowWidth, this.previewWindowHeight = this.initPublish.previewWindowHeight, this.callbackObj = null, this.url = i, this.vcodec = {}, this.acodec = {}, this.code = 0, this.errors = {
                100: "*系统检测到您的摄像头异常，请确认正确连接摄像设备",
                101: "*系统检测您的麦克风异常，请确认正确连接麦克风设备",
                102: "摄像头为禁用状态，推流时请允许flash访问摄像头",
                103: "服务器关闭了连接",
                104: "服务器连接失败",
                105: "推流地址错误,请选择网易视频云推流地址",
                106: "麦克风为禁用状态，推流时请允许flash访问麦克风",
                110: "推流地址不能为空",
                199: "未知错误"
            }, this.sdkVersion = "V1.0.7", this.start()
        }
        e.prototype.start = function () {
            var e = {},
                t = {},
                i = {},
                r = this;
            return e.id = this.id, e.width = this.previewWindowWidth, e.height = this.previewWindowHeight, e.js_bridge_method = "nePublisher.js_bridge_message", t.wmode = this.initPublish.wmode, t.allowFullScreen = "true", t.allowScriptAccess = "always", t.quality = this.initPublish.quality, t.align = "middle", swfobject.embedSWF("//nos.netease.com/vod163/publisher-ebd4e1deba.swf", this.container, this.previewWindowWidth, this.previewWindowHeight, "11.1.0", "//nos.netease.com/vod163/AdobeFlashPlayerInstall.swf", e, t, i, function (e) {
                r.callbackObj = e
            }), this
        }, e.prototype.sendHeart = function (e) {
            var t = "POST",
                i = "",
                r = "",
                s = new XMLHttpRequest;
            this.preHeartUrl = e, i = "//" + (window.__ne_publisher_heart_server || "sdkstats.live.126.net") + "/sdkstats/report/type=1?version=1", r = JSON.stringify({
                push_url: e
            }), s.open(t, i, !0), s.timeout = 1e4, s.setRequestHeader("Content-type", "application/json;charset=UTF-8"), s.send(r), this.heartTimer || (this.heartTimer = setInterval(this.sendHeart.bind(this, e), 1e4))
        }, e.prototype.stopHeart = function () {
            this.heartTimer && (clearInterval(this.heartTimer), this.heartTimer = null);
            var e = this.preHeartUrl;
            if (e) {
                var t = "Get",
                    i = "",
                    r = "",
                    s = new XMLHttpRequest;
                i = "//" + (window.__ne_publisher_heart_server || "sdkstats.live.126.net") + "/closechannel?url=" + encodeURIComponent(e), s.open(t, i, !0), s.timeout = 1e4, s.setRequestHeader("Content-type", "application/json;charset=UTF-8"), s.send(r)
            }
        }, e.prototype.fetchCdnUrl = function (e, t) {
            function i() {
                var e = n.match(/^rtmp:\/\/(\S+)(\/live\/\S+)$/i),
                    i = "//pn1.live.126.net" + e[2];
                i = i.indexOf("?") === -1 ? i + "?get_url=3" : i + "&get_url=3", s.open("GET", i, !0), s.timeout = 2e3, s.ontimeout = s.onerror = function () {
                    t()
                }, s.onload = function (i) {
                    if (200 == this.status || 304 == this.status) {
                        var r = this.responseText.match(/(^\S+&wsHost=)(\S+)$/i)[1] + e[1];
                        t(r)
                    } else t()
                }, s.send()
            }

            function r() {
                var e = "//dnlive-wangyi.dnion.com/wangyiget";
                s.open("GET", e, !0), s.timeout = 2e3, s.ontimeout = s.onerror = function () {
                    t()
                }, s.onload = function (e) {
                    if (200 == this.status || 304 == this.status) {
                        try {
                            var i = JSON.parse(this.responseText)
                        } catch (r) {
                            return t()
                        }
                        i.sug && i.sug[0] ? t("rtmp://" + i.sug[0] + n.split("rtmp:/")[1]) : t()
                    } else t()
                }, s.send()
            }
            var s = this.fetchCdnUrlXhr = new XMLHttpRequest,
                n = this.url;
            switch (e) {
            case "CNC":
                i();
                break;
            case "dnion":
                r();
                break;
            default:
                return t()
            }
        }, e.prototype.fetchGslbUrl = function (e) {
            var t = this.fetchGslbUrlXhr = new XMLHttpRequest,
                i = this.tryNeteaseGslb ? "gslbhz.live.126.net" : "gslb.live.126.net";
            (window.__ne_publisher_gslb_server || window.__ne_publisher_gslb_server_tencent || window.__ne_publisher_gslb_server_netease) && (i = this.tryNeteaseGslb ? window.__ne_publisher_gslb_server_netease || window.__ne_publisher_gslb_server || i : window.__ne_publisher_gslb_server_tencent || window.__ne_publisher_gslb_server || i);
            var r = "//" + i + "/getpushurl";
            t.open("POST", r), t.timeout = 2e3, t.setRequestHeader("Content-type", "application/json;charset=UTF-8"), t.onload = function () {
                if (200 != this.status && 304 != this.status) return e();
                try {
                    var t = JSON.parse(this.responseText)
                } catch (i) {
                    return e()
                }
                if (t.pushUrl) {
                    var r = [],
                        s = !1,
                        n = null;
                    if (!t.rtmpservers || !t.rtmpservers.length) return e();
                    for (var o = 0; o < t.rtmpservers.length; o++) {
                        var a = t.rtmpservers[o];
                        "CNC" !== a.type && "dnion" !== a.type ? (r.push(a.url), "netease" !== a.type && (s = !0)) : n = a.type
                    }
                    e(r, n, s)
                } else {
                    if (!t.cdnType) return e();
                    e(null, t.cdnType)
                }
            }, t.ontimeout = t.onerror = function () {
                e()
            }, t.send(JSON.stringify({
                pushUrl: this.url
            }))
        }, e.prototype.tryFindBestUrl = function () {
            switch (this.urlTryState) {
            case 0:
                if (this.gslbUrlArr) {
                    if (this.gslbUrlArr.length) {
                        var e = this.gslbUrlArr.shift();
                        return this.callbackObj.ref.__publish(e, this.vcodec, this.acodec)
                    }
                    return this.urlTryState++, this.tryFindBestUrl()
                }
                this.fetchGslbUrl(function (e, t, i) {
                    return e ? (this.urlCdnType = t, this.gslbUrlArr = e, this.urlCdnResolved = i) : this.tryNeteaseGslb ? (this.urlCdnType = t, this.urlTryState++) : this.tryNeteaseGslb = !0, this.tryFindBestUrl()
                }.bind(this));
                break;
            case 1:
                if (!this.urlCdnType || this.urlCdnResolved) return this.urlTryState++, this.tryFindBestUrl();
                this.fetchCdnUrl(this.urlCdnType, function (e) {
                    return e ? (this.urlTryState++, this.callbackObj.ref.__publish(e, this.vcodec, this.acodec)) : (this.urlTryState++, this.tryFindBestUrl())
                }.bind(this));
                break;
            case 2:
                return this.urlTryState++, this.callbackObj.ref.__publish(this.url, this.vcodec, this.acodec);
            case 3:
                var t = 104;
                this.code = t, this.on_publisher_error(t, this.errors["" + t])
            }
        }, e.prototype.doPublish = function () {
        	console.log(this.url);

            this.urlTryState = 0, this.gslbUrlArr = null, this.urlCdnType = null, this.urlCdnResolved = null, this.tryNeteaseGslb = !1,


             this.fetchGslbUrlXhr && (this.fetchGslbUrlXhr.abort(), 
             	this.fetchGslbUrlXhr = null), this.fetchCdnUrlXhr && (this.fetchCdnUrlXhr.abort(),
             	this.fetchCdnUrlXhr = null), this.tryFindBestUrl()
        }, e.prototype.startPublish = function () {
            var t = 0;
            // console.log(arguments[0]);console.log(arguments[1]);

            return "string" == typeof arguments[t] && (this.url = arguments[t], t++),
             "object" == typeof arguments[t] && (e.__extend(this.initPublish, arguments[t]), t++), "function" == typeof arguments[t] && (this.errorMessageCallbackFun = arguments[t]), 
             this.setCamera(this.initPublish.cameraIndex || 0), this.setMicroPhone(this.initPublish.microPhoneIndex || 0),
              this.initPublish.size = this.initPublish.videoWidth + "x" + this.initPublish.videoHeight, 
              this.vcodec.size = this.initPublish.size, this.vcodec.fps = this.initPublish.fps, this.vcodec.bitrate = this.initPublish.bitrate, this.vcodec.video = this.initPublish.video, this.acodec.audio = this.initPublish.audio, 
              this.stopPublish(!0), this.url = this.url.replace(/\s/g, ""),
               "" === this.url ? e.js_bridge_message("error", '{"id":' + this.id + ',"code":110}') 
               : void this.doPublish()
        }, e.prototype.stopPublish = function (e) {
            e || this.stopHeart(), this.callbackObj.ref.__stop_publish()
        }, e.prototype.stopPreview = function () {
            this.callbackObj.ref.__stop_preview()
        }, e.prototype.release = function () {
            this.callbackObj.ref.__stop_publish(), this.callbackObj.ref.__stop_preview();
            var t = 0,
                i = null;
            for (t = 0; t < e.__publishers.length; t++)
                if (i = e.__publishers[t], i.id == this.id) {
                    e.__publishers.splice(t, 1);
                    break
                }
            var r = document.getElementById(this.container);
            r && r.parentNode.removeChild(r)
        }, e.prototype.startPreview = function (e, t, i) {
            t && i ? this.callbackObj.ref.__preview(e, t, i) : this.callbackObj.ref.__preview(e)
        }, e.prototype.getCameraSnapshot = function (e, t) {
            if (!this.cameraSnapshotCallback) return this.cameraSnapshotCallback = e, this.callbackObj.ref.__getCameraShapshot(t)
        }, e.prototype.getDefinedErrors = function () {
            return this.errors
        }, e.prototype.getCameraList = function () {
            return this.component.cameraList
        }, e.prototype.setCamera = function (e) {
            if (this.initPublish.cameraIndex = e, e >= this.component.cameraList.length) throw new Error("未获取到该摄像头");
            cameraName = this.component.cameraList[e], this.vcodec.device_index = e, this.vcodec.device_name = cameraName
        }, e.prototype.getMicroPhoneList = function () {
            return this.component.microPhoneList
        }, e.prototype.setMicroPhone = function (e) {
            if (this.initPublish.microPhoneIndex = e, e >= this.component.microPhoneList.length) throw new Error("未获取到该麦克风");
            microPhoneName = this.component.microPhoneList[e], this.acodec.device_index = e, this.acodec.device_name = microPhoneName
        }, e.prototype.alterDefinedErrors = function (t) {
            return e.__extend(this.errors, t)
        }, e.prototype.resetPreviewWindow = function (e) {
            this.previewWindowWidth = e.previewWindowWidth, this.previewWindowHeight = e.previewWindowHeight
        }, e.prototype.getSDKVersion = function () {
            return this.sdkVersion
        }, e.prototype.on_publisher_ready = function (e, t, i) {
            this.component.cameraList = e, this.component.microPhoneList = t, i.apply(this)
        }, e.prototype.on_publisher_error = function (e, t) {
            this.stopPublish(), this.errorMessageCallbackFun(e, t)
        }, e.prototype.on_publishInit_error = function (e, t, i) {
            i.apply(this, [e, t])
        }, e.js_bridge_message = function (t, i, r) {
            i = JSON.parse(i);
            var s = e.__findPublisher(i.id),
                n = i.code;
            switch (t) {
            case "flashReady":
                s.on_publisher_ready(i.cameras, i.microphones, s.initSuccessCallbackFun);
                break;
            case "sdkVersion":
                s.sdkVersion = i.sdkVersion;
                break;
            case "initError":
                s.on_publishInit_error(n, s.errors["" + n], s.initErrorCallbackFun);
                break;
            case "error":
                104 == n ? s.tryFindBestUrl() : (s.code = n, s.on_publisher_error(n, s.errors["" + n]));
                break;
            case "debug":
                break;
            case "publishStarted":
                break;
            case "connectSuccess":
                s.sendHeart(i.url);
                break;
            case "cameraSnapshot":
                !r && console && console.warn && console.warn("请在开启预览后使用截图接口"), s.cameraSnapshotCallback && s.cameraSnapshotCallback(r), s.cameraSnapshotCallback = null
            }
        }, e.__findPublisher = function (t) {
            var i, r;
            for (i = 0; i < e.__publishers.length; i++)
                if (r = e.__publishers[i], r.id == t) return r;
            throw new Error("publisher not found. id=" + t)
        }, e.__extend = function (t, i) {
            function r(e) {
                return "Array" === Object.prototype.toString.call(e).slice(8, -1)
            }

            function s(e) {
                return "Object" === Object.prototype.toString.call(e).slice(8, -1)
            }
            var n, o, a;
            for (n in i) o = t[n], a = i[n], o !== a && (a && (copyIsArray = r(a) || s(a)) ? (o = copyIsArray ? o && r(o) ? o : [] : o ? o : {}, t[n] = e.__extend(o, a)) : void 0 !== a && (t[n] = a));
            return t
        }, window.nePublisher = e
    }();
var swfobject = function () {
    function e() {
        if (!V) {
            try {
                var e = x.getElementsByTagName("body")[0].appendChild(b("span"));
                e.parentNode.removeChild(e)
            } catch (t) {
                return
            }
            V = !0;
            for (var i = B.length, r = 0; r < i; r++) B[r]()
        }
    }

    function t(e) {
        V ? e() : B[B.length] = e
    }

    function i(e) {
        if (typeof F.addEventListener != E) F.addEventListener("load", e, !1);
        else if (typeof x.addEventListener != E) x.addEventListener("load", e, !1);
        else if (typeof F.attachEvent != E) y(F, "onload", e);
        else if ("function" == typeof F.onload) {
            var t = F.onload;
            F.onload = function () {
                t(), e()
            }
        } else F.onload = e
    }

    function r() {
        H ? s() : n()
    }

    function s() {
        var e = x.getElementsByTagName("body")[0],
            t = b(N);
        t.setAttribute("type", A);
        var i = e.appendChild(t);
        if (i) {
            var r = 0;
            ! function () {
                if (typeof i.GetVariable != E) {
                    var s = i.GetVariable("$version");
                    s && (s = s.split(" ")[1].split(","), q.pv = [parseInt(s[0], 10), parseInt(s[1], 10), parseInt(s[2], 10)])
                } else if (r < 10) return r++, void setTimeout(arguments.callee, 10);
                e.removeChild(t), i = null, n()
            }()
        } else n()
    }

    function n() {
        var e = M.length;
        if (e > 0)
            for (var t = 0; t < e; t++) {
                var i = M[t].id,
                    r = M[t].callbackFn,
                    s = {
                        success: !1,
                        id: i
                    };
                if (q.pv[0] > 0) {
                    var n = v(i);
                    if (n)
                        if (!w(M[t].swfVersion) || q.wk && q.wk < 312)
                            if (M[t].expressInstall && a()) {
                                var c = {};
                                c.data = M[t].expressInstall, c.width = n.getAttribute("width") || "0", c.height = n.getAttribute("height") || "0", n.getAttribute("class") && (c.styleclass = n.getAttribute("class")), n.getAttribute("align") && (c.align = n.getAttribute("align"));
                                for (var u = {}, d = n.getElementsByTagName("param"), p = d.length, f = 0; f < p; f++) "movie" != d[f].getAttribute("name").toLowerCase() && (u[d[f].getAttribute("name")] = d[f].getAttribute("value"));
                                l(c, u, i, r)
                            } else h(n), r && r(s);
                    else _(i, !0), r && (s.success = !0, s.ref = o(i), r(s))
                } else if (_(i, !0), r) {
                    var b = o(i);
                    b && typeof b.SetVariable != E && (s.success = !0, s.ref = b), r(s)
                }
            }
    }

    function o(e) {
        var t = null,
            i = v(e);
        if (i && "OBJECT" == i.nodeName)
            if (typeof i.SetVariable != E) t = i;
            else {
                var r = i.getElementsByTagName(N)[0];
                r && (t = r)
            }
        return t
    }

    function a() {
        return !$ && w("6.0.65") && (q.win || q.mac) && !(q.wk && q.wk < 312)
    }

    function l(e, t, i, r) {
        $ = !0, k = r || null, T = {
            success: !1,
            id: i
        };
        var s = v(i);
        if (s) {
            "OBJECT" == s.nodeName ? (C = c(s), S = null) : (C = s, S = i), e.id = L, (typeof e.width == E || !/%$/.test(e.width) && parseInt(e.width, 10) < 310) && (e.width = "310"), (typeof e.height == E || !/%$/.test(e.height) && parseInt(e.height, 10) < 137) && (e.height = "137"), x.title = x.title.slice(0, 47) + " - Flash Player Installation";
            var n = q.ie && q.win ? "ActiveX" : "PlugIn",
                o = "MMredirectURL=" + F.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + n + "&MMdoctitle=" + x.title;
            if (typeof t.flashvars != E ? t.flashvars += "&" + o : t.flashvars = o, q.ie && q.win && 4 != s.readyState) {
                var a = b("div");
                i += "SWFObjectNew", a.setAttribute("id", i), s.parentNode.insertBefore(a, s), s.style.display = "none",
                    function () {
                        4 == s.readyState ? s.parentNode.removeChild(s) : setTimeout(arguments.callee, 10)
                    }()
            }
            u(e, t, i)
        }
    }

    function h(e) {
        if (q.ie && q.win && 4 != e.readyState) {
            var t = b("div");
            e.parentNode.insertBefore(t, e), t.parentNode.replaceChild(c(e), t), e.style.display = "none",
                function () {
                    4 == e.readyState ? e.parentNode.removeChild(e) : setTimeout(arguments.callee, 10)
                }()
        } else e.parentNode.replaceChild(c(e), e)
    }

    function c(e) {
        var t = b("div");
        if (q.win && q.ie) t.innerHTML = e.innerHTML;
        else {
            var i = e.getElementsByTagName(N)[0];
            if (i) {
                var r = i.childNodes;
                if (r)
                    for (var s = r.length, n = 0; n < s; n++) 1 == r[n].nodeType && "PARAM" == r[n].nodeName || 8 == r[n].nodeType || t.appendChild(r[n].cloneNode(!0))
            }
        }
        return t
    }

    function u(e, t, i) {
        var r, s = v(i);
        if (q.wk && q.wk < 312) return r;
        if (s)
            if (typeof e.id == E && (e.id = i), q.ie && q.win) {
                var n = "";
                for (var o in e) e[o] != Object.prototype[o] && ("data" == o.toLowerCase() ? t.movie = e[o] : "styleclass" == o.toLowerCase() ? n += ' class="' + e[o] + '"' : "classid" != o.toLowerCase() && (n += " " + o + '="' + e[o] + '"'));
                var a = "";
                for (var l in t) t[l] != Object.prototype[l] && (a += '<param name="' + l + '" value="' + t[l] + '" />');
                s.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + n + ">" + a + "</object>", R[R.length] = e.id, r = v(e.id)
            } else {
                var h = b(N);
                h.setAttribute("type", A);
                for (var c in e) e[c] != Object.prototype[c] && ("styleclass" == c.toLowerCase() ? h.setAttribute("class", e[c]) : "classid" != c.toLowerCase() && h.setAttribute(c, e[c]));
                for (var u in t) t[u] != Object.prototype[u] && "movie" != u.toLowerCase() && d(h, u, t[u]);
                s.parentNode.replaceChild(h, s), r = h
            }
        return r
    }

    function d(e, t, i) {
        var r = b("param");
        r.setAttribute("name", t), r.setAttribute("value", i), e.appendChild(r)
    }

    function p(e) {
        var t = v(e);
        t && "OBJECT" == t.nodeName && (q.ie && q.win ? (t.style.display = "none", function () {
            4 == t.readyState ? f(e) : setTimeout(arguments.callee, 10)
        }()) : t.parentNode.removeChild(t))
    }

    function f(e) {
        var t = v(e);
        if (t) {
            for (var i in t) "function" == typeof t[i] && (t[i] = null);
            t.parentNode.removeChild(t)
        }
    }

    function v(e) {
        var t = null;
        try {
            t = x.getElementById(e)
        } catch (i) {}
        return t
    }

    function b(e) {
        return x.createElement(e)
    }

    function y(e, t, i) {
        e.attachEvent(t, i), G[G.length] = [e, t, i]
    }

    function w(e) {
        var t = q.pv,
            i = e.split(".");
        return i[0] = parseInt(i[0], 10), i[1] = parseInt(i[1], 10) || 0, i[2] = parseInt(i[2], 10) || 0, t[0] > i[0] || t[0] == i[0] && t[1] > i[1] || t[0] == i[0] && t[1] == i[1] && t[2] >= i[2]
    }

    function m(e, t, i, r) {
        if (!q.ie || !q.mac) {
            var s = x.getElementsByTagName("head")[0];
            if (s) {
                var n = i && "string" == typeof i ? i : "screen";
                if (r && (P = null, j = null), !P || j != n) {
                    var o = b("style");
                    o.setAttribute("type", "text/css"), o.setAttribute("media", n), P = s.appendChild(o), q.ie && q.win && typeof x.styleSheets != E && x.styleSheets.length > 0 && (P = x.styleSheets[x.styleSheets.length - 1]), j = n
                }
                q.ie && q.win ? P && typeof P.addRule == N && P.addRule(e, t) : P && typeof x.createTextNode != E && P.appendChild(x.createTextNode(e + " {" + t + "}"))
            }
        }
    }

    function _(e, t) {
        if (X) {
            var i = t ? "visible" : "hidden";
            V && v(e) ? v(e).style.visibility = i : m("#" + e, "visibility:" + i)
        }
    }

    function g(e) {
        var t = /[\\\"<>\.;]/,
            i = null != t.exec(e);
        return i && typeof encodeURIComponent != E ? encodeURIComponent(e) : e
    }
    var C, S, k, T, P, j, E = "undefined",
        N = "object",
        O = "Shockwave Flash",
        I = "ShockwaveFlash.ShockwaveFlash",
        A = "application/x-shockwave-flash",
        L = "SWFObjectExprInst",
        U = "onreadystatechange",
        F = window,
        x = document,
        W = navigator,
        H = !1,
        B = [r],
        M = [],
        R = [],
        G = [],
        V = !1,
        $ = !1,
        X = !0,
        q = function () {
            var e = typeof x.getElementById != E && typeof x.getElementsByTagName != E && typeof x.createElement != E,
                t = W.userAgent.toLowerCase(),
                i = W.platform.toLowerCase(),
                r = i ? /win/.test(i) : /win/.test(t),
                s = i ? /mac/.test(i) : /mac/.test(t),
                n = !!/webkit/.test(t) && parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")),
                o = !1,
                a = [0, 0, 0],
                l = null;
            if (typeof W.plugins != E && typeof W.plugins[O] == N) l = W.plugins[O].description, !l || typeof W.mimeTypes != E && W.mimeTypes[A] && !W.mimeTypes[A].enabledPlugin || (H = !0, o = !1, l = l.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), a[0] = parseInt(l.replace(/^(.*)\..*$/, "$1"), 10), a[1] = parseInt(l.replace(/^.*\.(.*)\s.*$/, "$1"), 10), a[2] = /[a-zA-Z]/.test(l) ? parseInt(l.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0);
            else if (typeof F.ActiveXObject != E) try {
                var h = new ActiveXObject(I);
                h && (l = h.GetVariable("$version"), l && (o = !0, l = l.split(" ")[1].split(","), a = [parseInt(l[0], 10), parseInt(l[1], 10), parseInt(l[2], 10)]))
            } catch (c) {}
            return {
                w3: e,
                pv: a,
                wk: n,
                ie: o,
                win: r,
                mac: s
            }
        }();
    (function () {
        q.w3 && ((typeof x.readyState != E && "complete" == x.readyState || typeof x.readyState == E && (x.getElementsByTagName("body")[0] || x.body)) && e(), V || (typeof x.addEventListener != E && x.addEventListener("DOMContentLoaded", e, !1), q.ie && q.win && (x.attachEvent(U, function () {
            "complete" == x.readyState && (x.detachEvent(U, arguments.callee), e())
        }), F == top && ! function () {
            if (!V) {
                try {
                    x.documentElement.doScroll("left")
                } catch (t) {
                    return void setTimeout(arguments.callee, 0)
                }
                e()
            }
        }()), q.wk && ! function () {
            if (!V) return /loaded|complete/.test(x.readyState) ? void e() : void setTimeout(arguments.callee, 0)
        }(), i(e)))
    })(),
    function () {
        q.ie && q.win && window.attachEvent("onunload", function () {
            for (var e = G.length, t = 0; t < e; t++) G[t][0].detachEvent(G[t][1], G[t][2]);
            for (var i = R.length, r = 0; r < i; r++) p(R[r]);
            for (var s in q) q[s] = null;
            q = null;
            for (var n in swfobject) swfobject[n] = null;
            swfobject = null
        })
    }();
    return {
        registerObject: function (e, t, i, r) {
            if (q.w3 && e && t) {
                var s = {};
                s.id = e, s.swfVersion = t, s.expressInstall = i, s.callbackFn = r, M[M.length] = s, _(e, !1)
            } else r && r({
                success: !1,
                id: e
            })
        }, getObjectById: function (e) {
            if (q.w3) return o(e)
        }, embedSWF: function (e, i, r, s, n, o, h, c, d, p) {
            var f = {
                success: !1,
                id: i
            };
            q.w3 && !(q.wk && q.wk < 312) && e && i && r && s && n ? (_(i, !1), t(function () {
                r += "", s += "";
                var t = {};
                if (d && typeof d === N)
                    for (var v in d) t[v] = d[v];
                t.data = e, t.width = r, t.height = s;
                var b = {};
                if (c && typeof c === N)
                    for (var y in c) b[y] = c[y];
                if (h && typeof h === N)
                    for (var m in h) typeof b.flashvars != E ? b.flashvars += "&" + m + "=" + h[m] : b.flashvars = m + "=" + h[m];
                if (w(n)) {
                    var g = u(t, b, i);
                    t.id == i && _(i, !0), f.success = !0, f.ref = g
                } else {
                    if (o && a()) return t.data = o, void l(t, b, i, p);
                    _(i, !0)
                }
                p && p(f)
            })) : p && p(f)
        }, switchOffAutoHideShow: function () {
            X = !1
        }, ua: q,
        getFlashPlayerVersion: function () {
            return {
                major: q.pv[0],
                minor: q.pv[1],
                release: q.pv[2]
            }
        }, hasFlashPlayerVersion: w,
        createSWF: function (e, t, i) {
            return q.w3 ? u(e, t, i) : void 0
        }, showExpressInstall: function (e, t, i, r) {
            q.w3 && a() && l(e, t, i, r)
        }, removeSWF: function (e) {
            q.w3 && p(e)
        }, createCSS: function (e, t, i, r) {
            q.w3 && m(e, t, i, r)
        }, addDomLoadEvent: t,
        addLoadEvent: i,
        getQueryParamValue: function (e) {
            var t = x.location.search || x.location.hash;
            if (t) {
                if (/\?/.test(t) && (t = t.split("?")[1]), null == e) return g(t);
                for (var i = t.split("&"), r = 0; r < i.length; r++)
                    if (i[r].substring(0, i[r].indexOf("=")) == e) return g(i[r].substring(i[r].indexOf("=") + 1))
            }
            return ""
        }, expressInstallCallback: function () {
            if ($) {
                var e = v(L);
                e && C && (e.parentNode.replaceChild(C, e), S && (_(S, !0), q.ie && q.win && (C.style.display = "block")), k && k(T)), $ = !1
            }
        }
    }
}();