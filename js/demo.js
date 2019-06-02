var g_appId = 0;
var g_accountType = 0;
var g_sdk = null;
var g_token = null;
var g_userSig = null;
var g_appId = 1400027849;
var g_report = 0;
var g_roomnum = null;
var g_groupid = null;
var g_role = null;
var g_id = null;
var g_getUserList = null;
var g_invite = null;
var g_liveGuestCount = 0; //杩為害鐢ㄦ埛鎬绘暟
var g_liveGuestMax = 3; //杩為害鐢ㄦ埛鎬绘暟
var g_request_status = 0;
var g_screenRender = null;



var E_IM_CustomCmd = {
    AVIMCMD_None: 0, // 鏃犱簨浠讹細0
    AVIMCMD_EnterLive: 1, // 鐢ㄦ埛鍔犲叆鐩存挱, Group娑堟伅 锛� 1
    AVIMCMD_ExitLive: 2, // 鐢ㄦ埛閫€鍑虹洿鎾�, Group娑堟伅 锛� 2
    AVIMCMD_Praise: 3, // 鐐硅禐娑堟伅, Demo涓娇鐢℅roup娑堟伅 锛� 3
    AVIMCMD_Host_Leave: 4, // 涓绘挱鎴栦簰鍔ㄨ浼楃寮€, Group娑堟伅 锛� 4
    AVIMCMD_Host_Back: 5, // 涓绘挱鎴栦簰鍔ㄨ浼楀洖鏉�, Group娑堟伅 锛� 5
    AVIMCMD_Multi: 2048, // 澶氫汉浜掑姩娑堟伅绫诲瀷 锛� 2048
    AVIMCMD_Multi_Host_Invite: 2049, // 澶氫汉涓绘挱鍙戦€侀個璇锋秷鎭�, C2C娑堟伅 锛� 2049
    AVIMCMD_Multi_CancelInteract: 2050, // 宸茶繘鍏ヤ簰鍔ㄦ椂锛屾柇寮€浜掑姩锛孏roup娑堟伅锛屽甫鏂紑鑰呯殑imUsreid鍙傛暟 锛� 2050
    AVIMCMD_Multi_Interact_Join: 2051, // 澶氫汉浜掑姩鏂规敹鍒癆VIMCMD_Multi_Host_Invite澶氫汉閭€璇峰悗锛屽悓鎰忥紝C2C娑堟伅 锛� 2051
    AVIMCMD_Multi_Interact_Refuse: 2052, // 澶氫汉浜掑姩鏂规敹鍒癆VIMCMD_Multi_Invite澶氫汉閭€璇峰悗锛屾嫆缁濓紝C2C娑堟伅 锛� 2052
};

var E_Role = {
    Guest: 0, //瑙備紬
    LiveMaster: 1, //涓绘挱
    LiveGuest: 2 //杩為害瑙備紬
}

function consoleLog(loginfo) {
    if (window.console) {
        console.log(loginfo);
    }
}
////////////////鐣岄潰閫昏緫鐩稿叧////////////////////////

var sdk;
var g_localRender = null;
var g_renders = new Array();

//鐘舵€佺鐞�
var StatusManager = {
    camera: 0,
    mic: 0,
    player: 0,
    logined: 0,
    setLogin: function(val) {
        this.logined = val;
        renderButton();
    },
    setCamera: function(val) {
        this.camera = val;
        renderButton();
    },
    setMic: function(val) {
        this.mic = val;
        renderButton();
    },
    setPlayer: function(val) {
        this.player = val;
        renderButton();
    },
    getLogin: function(val) {
        return this.logined;
    },
    getCamera: function() {
        return !!this.camera;
    },
    getMic: function() {
        return !!this.mic;
    },
    getPlayer: function() {
        return !!this.player;
    },
    getAll: function() {
        return {
            camera: this.camera,
            mic: this.mic,
            player: this.player,
            logined: this.logined,
        }
    },
    reset: function(cb) {
        this.camera = 0;
        this.mic = 0;
        this.player = 0;
        if (cb) {
            cb();
        }
    }
};

var renderButton = function() {
    var status = StatusManager.getAll();
    for (var a in status) {
        $("#btn_open_" + a).prop("disabled", status[a] ? true : false);
        $("#btn_close_" + a).prop("disabled", status[a] ? false : true);
    }
}



/**
 * 璐﹀彿鐧诲綍浜掕涪
 */
function onForceOfflineCallback() {
    toastr.warning("浣犵殑璐﹀彿鍦ㄥ叾浠栧湴鏂圭櫥闄�.");
}

/**
 * 澶卞幓缃戠粶杩炴帴瓒呮椂鍥炶皟
 */
function onRoomDisconnect(errMsg) {
    alert("SDK宸茶嚜鍔ㄩ€€鍑烘埧闂�,鍘熷洜: " + errMsg.code + " " + errMsg.desc);
    toastr.warning("SDK宸茶嚜鍔ㄩ€€鍑烘埧闂�,鍘熷洜: " + errMsg.code + " " + errMsg.desc);
}

/**
 * 缇ゆ秷鎭€氱煡
 */
function onGroupMessageCallback(msg) {
    var obj = JSON.parse(msg);
    toastr.success(obj.sender);
}

/**
 * C2C娑堟伅閫氱煡
 */
function onC2CMessageCallback(msg) {
    var obj = JSON.parse(msg);
    toastr.success(msg);
}

/**
 * 鎴愬姛鐧诲綍
 */
function onLoginSuc() {
    $('#loginBox').css('display', 'none');
    $('#logout').css('display', 'inline');
    $('#user').css('display', 'inline').text(username);
    $('#list').css('display', 'block');
    $('#user').html(g_id);
    OnBtnGetList();
    toastr.success("login succeed");

    //鏇存柊鐘舵€�
    StatusManager.setLogin(1);
}

/**
 * 鎴愬姛澶辫触
 */
function onLoginErr(errMsg) {
    toastr.warning("鐧诲綍澶辫触. " + "閿欒鐮�:" + errMsg.code + " 閿欒淇℃伅:" + errMsg.desc);
}

function onQuitRoomSuc() {
    //娓呯悊g_roomnum
    initState();
    toastr.success("閫€鍑烘埧闂存垚鍔�.");
}

function onQuitRoomErr(code, desc) {
    toastr.warning("閫€鍑烘埧闂村け璐�. " + "閿欒鐮�:" + code + " 閿欒淇℃伅:" + desc);
}

function onSendMessageSuc() {
    toastr.success("鍙戞秷鎭垚鍔�.");
}

function onSendMessageErr(code, desc) {
    toastr.warning("鍙戞秷鎭け璐�. " + "閿欒鐮�:" + code + " 閿欒淇℃伅:" + desc);
}

function onStartPushSuc(msg) {
    toastr.success(msg);
}

function onStartPushErr(code, desc) {
    toastr.warning("寮€濮嬫帹娴佸け璐�. " + "閿欒鐮�:" + code + " 閿欒淇℃伅:" + desc);
}

function onStopPushSuc() {
    toastr.success("缁撴潫鎺ㄦ祦鎴愬姛.");
}

function onStopPushErr(code, desc) {
    toastr.warning("缁撴潫鎺ㄦ祦澶辫触. " + "閿欒鐮�:" + code + " 閿欒淇℃伅:" + desc);
}


function onVoiceRecognizeErr(code) {
    toastr.warning("璇煶璇嗗埆鍑洪敊锛岄敊璇爜: " + code);
}

function onVoiceRecognizeResult(message) {
    OnBtnSendGroupMessage(message);
}

//鐣岄潰浜嬩欢
var g_sdkappid = 1400027849;
var g_accountType = 11656;
var g_serverUrl = "https://sxb.qcloud.com/sxb_dev/index.php";

function ajaxPost(url, data, succ, err) {
    if (!window.XMLHttpRequest) {
        toastr.warning("浣犵殑娴忚鍣ㄤ笉鏀寔AJAX!");
        return;
    }
    var ajax = new XMLHttpRequest();
    ajax.open("post", url, true);
    ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4) {
            if (ajax.status == 200) {
                var rspJson = null;
                try {
                    rspJson = JSON.parse(ajax.responseText);
                } catch (e) {
                    toastr.warning("json瑙ｆ瀽鍑洪敊,鏈嶅姟鍣ㄨ繑鍥炲唴瀹�:\n" + ajax.responseText);
                    return;
                }
                if (rspJson.errorCode == 0) {
                    succ(rspJson);
                } else {
                    toastr.error("閿欒鐮�:" + rspJson.errorCode + " 閿欒淇℃伅:" + rspJson.errorInfo);
                }
            } else {
                toastr.warning("HTTP璇锋眰閿欒锛侀敊璇爜锛�" + ajax.status);
                if (err) {
                    err();
                }
            }
        }
    }
    ajax.send(data);
}

function onRoomEvent(roomevent) {
    if (roomevent.eventid == E_iLiveRoomEventType.HAS_CAMERA_VIDEO) //鎵撳紑鎽勫儚澶�
    {
        //涓哄叾鍒嗛厤娓叉煋鍣�
        for (i in g_renders) {
            if (g_renders[i].isFreeRender()) {
                g_renders[i].setIdentifer(roomevent.identifier);
                break;
            }
        }
    }
    else if (roomevent.eventid == E_iLiveRoomEventType.HAS_SCREEN_VIDEO)//鎵撳紑灞忓箷鍒嗕韩
    {
        g_screenRender.setAuxRoadVideo(true);
    }
}

function onDeviceOperation(oper, code) {
    if (oper == E_iLiveOperType.Open_Camera) {
        if (code != 0) {
            toastr.warning("鎵撳紑鎽勫儚澶村け璐�; 閿欒鐮�:" + code);
        }else{
            g_localRender.setIdentifer(g_id);
            StatusManager.setCamera(1);//鏇存柊鐘舵€�
        }
    }
    else if (oper == E_iLiveOperType.Close_Camera) {
        if (code != 0) {
            toastr.warning("鍏抽棴鎽勫儚澶村け璐�; 閿欒鐮�:" + code);
        }
        else {
            StatusManager.setCamera(0);//鏇存柊鐘舵€�
        }
    }
    else if (oper == E_iLiveOperType.Open_Mic) {
        if (code != 0) {
            toastr.warning("鎵撳紑楹﹀厠椋庡け璐�; 閿欒鐮�:" + code);
        } else {
            toastr.success("鎵撳紑楹﹀厠椋庢垚鍔�.");
            StatusManager.setMic(1);//鏇存柊鐘舵€�
        }
    }
    else if (oper == E_iLiveOperType.Close_Mic) {
        if (code != 0) {
            toastr.warning("鍏抽棴楹﹀厠椋庡け璐�; 閿欒鐮�:" + code);
        } else {
            toastr.success("鍏抽棴楹﹀厠椋庢垚鍔�.");
            StatusManager.setMic(0);//鏇存柊鐘舵€�
        }
    }
    else if (oper == E_iLiveOperType.Open_Player) {
        if (code != 0) {
            toastr.warning("鎵撳紑鎵０鍣ㄥけ璐�; 閿欒鐮�:" + code);
        } else {
            toastr.success("鎵撳紑鎵０鍣ㄦ垚鍔�.");
            StatusManager.setPlayer(1);//鏇存柊鐘舵€�
        }
    }
    else if (oper == E_iLiveOperType.Close_Player) {
        if (code != 0) {
            toastr.warning("鍏抽棴鎵０鍣ㄥけ璐�; 閿欒鐮�:" + code);
        } else {
            toastr.success("鍏抽棴鎵０鍣ㄦ垚鍔�.");
            StatusManager.setPlayer(0);//鏇存柊鐘舵€�
        }
    }
    else if (oper == E_iLiveOperType.Open_Screen_Share) {
        if (code != 0) {
            toastr.warning("鎵撳紑灞忓箷鍒嗕韩鍑洪敊; 閿欒鐮�:" + code);
        }
        else{
            g_screenRender.setAuxRoadVideo(true);
        }
    }
    else if (oper == E_iLiveOperType.Close_ScreenShare) {
        if (code != 0 && code != 8024) { //8024閿欒鐮侊紝琛ㄧず宸茬粡澶勪簬鍏抽棴鐘舵€佷簡
            toastr.warning("鍏抽棴灞忓箷鍒嗕韩鍑洪敊; 閿欒鐮�:" + code);
        }
    }
}

function OnInit() {
    consoleLog("OnInit");
    sdk = new ILiveSDK(g_sdkappid, g_accountType, "iLiveSDKCom");
    toastr.info('姝ｅ湪鍒濆鍖栵紝璇风◢鍊�');
    sdk.init(function() {
            toastr.success('鍒濆鍖栨垚鍔�');
            $('#loginBox').css('display', 'block');
            g_localRender = new ILiveRender("localRender");
            g_renders[0] = new ILiveRender("render0");
            g_renders[1] = new ILiveRender("render1");
            g_renders[2] = new ILiveRender("render2");
            g_screenRender = new ILiveRender("screenRender");

            sdk.setForceOfflineListener(onForceOfflineCallback);
            sdk.setRoomDisconnectListener(onRoomDisconnect);
            sdk.setRoomEventListener(onRoomEvent);
            sdk.setDeviceOperationCallback(onDeviceOperation);
			sdk.setChannelMode(E_ChannelMode.E_ChannelIMSDK);
			
            document.getElementById("version").innerHTML = sdk.version();
            sdk.setMessageListener(function(msg) {
                showMessage(msg);
            });
        },
        function(errMsg) {
            toastr.warning("鍒濆鍖栧け璐�! 閿欒鐮�: " + errMsg.code + "鎻忚堪: " + errMsg.desc);
        });

}

function showMessage(msg) {
    for (i in msg.elems) {
        if (msg.elems[i].type == E_iLiveMessageElemType.TEXT) {
            addMessage(msg.sender + '璇�:' + escapeHTML(msg.elems[i].content));
        } else if (msg.elems[i].type == E_iLiveMessageElemType.CUSTOM) {
            dealCustomMessage(msg.sender, JSON.parse(msg.elems[i].content));
        }
    }
}

//鍙嶅垵濮嬪寲
function OnUninit() {
    sdk.unInit();
}

function OnBtnReg() {
    //娉ㄥ唽
    var id = document.getElementById("username").value;
    var pwd = document.getElementById("password").value;
    var jsonObj = {
        "id": id,
        "pwd": pwd
    };
    ajaxPost(g_serverUrl + "?svc=account&cmd=regist", JSON.stringify(jsonObj),
        function(rspJson) {
            toastr.success("娉ㄥ唽鎴愬姛");
        }
    );
}

function OnBtnLogin() {
    //浠庝笟鍔′晶鏈嶅姟鍣ㄨ幏鍙杝ig
    var id = document.getElementById("username").value;
    var pwd = document.getElementById("password").value;
    var jsonObj = {
        "id": id,
        "pwd": pwd
    };
    ajaxPost(g_serverUrl + "?svc=account&cmd=login", JSON.stringify(jsonObj),
        function(rspJson) {
            g_token = rspJson.data.token;
            g_userSig = rspJson.data.userSig;
            g_id = id;
            var sig = rspJson.data.userSig;
            sdk.login(id, sig, onLoginSuc, onLoginErr);
        }
    );
}

function OnBtnLogout(cb) {
    var jsonObj = {
        "token": g_token
    };
    ajaxPost(g_serverUrl + "?svc=account&cmd=logout", JSON.stringify(jsonObj),
        function(rspJson) {
            sdk.logout(function() {
                g_token = null;
                g_userSig = null;
                cb();
                initState();
                toastr.success("logout succ");
                //鏇存柊鐘舵€佹満
                StatusManager.setLogin(0);
            }, function(errMsg) {
                toastr.error("閿欒鐮�:" + errMsg.code + " 閿欒淇℃伅:" + errMsg.desc);
            });
        }
    );

}

function OnBtnGetList() {
    //浠庝笟鍔′晶鑾峰彇鎴块棿鍒楄〃
    $('#room-list').html('');
    var jsonObj = {
        "type": 'live',
        "token": g_token,
        "index": 0,
        "size": 30,
        "appid": g_appId
    };

    ajaxPost(g_serverUrl + "?svc=live&cmd=roomlist", JSON.stringify(jsonObj),
        function(rspJson) {
            for (var i = 0; i < rspJson.data.rooms.length; i++) {
                var item = rspJson.data.rooms[i];
                var html = template("room-tpl", { rooms: rspJson.data.rooms });
                // console.log(html);
                $("#room-list").html(html);
                //$('#room-list').append('<a class="list-group-item" data-roomnum="' + item.info.roomnum + '" data-groupid="' + item.info.groupid + '">鎴块棿:' + item.info.title + '</a>');
            }
        }
    );
}


function OnBtnCreateRoom(cb,rotate) {

    // var name = prompt("璇疯緭鍏ユ埧闂村悕",document.getElementById("username").value+"鐨勭洿鎾棿");
    var name = document.getElementById("username").value + "鐨勭洿鎾棿";
    var jsonObj = {
        "type": 'live',
        "token": g_token
    };
    ajaxPost(g_serverUrl + "?svc=live&cmd=create", JSON.stringify(jsonObj),
        function(rspJson) {
            sdk.createRoom(rspJson.data.roomnum, E_iLiveAuthBits.AuthBit_LiveMaster, "", "LiveMaster", function() {
                toastr.success("create room succ");
                g_role = E_Role.LiveMaster;
                g_roomnum = rspJson.data.roomnum;
                g_groupid = rspJson.data.groupid;
                jsonObj = {
                    "token": g_token,
                    "room": {
                        "title": '[Web闅忓績鎾璢' + name,
                        "roomnum": rspJson.data.roomnum,
                        "type": "live",
                        "groupid": rspJson.data.groupid,
                        "appid": g_appId,
                        "device": 2,
                        "videotype": 0
                    }
                };
                ajaxPost(g_serverUrl + "?svc=live&cmd=reportroom", JSON.stringify(jsonObj),
                    function(rspJson) {
                        cb(g_roomnum);
                        report({
                            "token": g_token,
                            "roomnum": g_roomnum,
                            "role": g_role,
                            "thumbup": 0
                        });
                        getUserList();
                    }
                ); //杩欎釜鏄繍钀ュ悗鍙扮殑浜嬩欢
                OnBtnOpenCamera();
                OnBtnOpenMic();
                OnBtnOpenPlayer();
            }, function(errMsg) {
                toastr.error("閿欒鐮�:" + errMsg.code + " 閿欒淇℃伅:" + errMsg.desc);
            },rotate); //杩欎釜鏄痵dk鐨勪簨浠�
        }
    );
}

function report(obj) {
    clearInterval(g_report);
    var handleReport = function() {
        ajaxPost(g_serverUrl + "?svc=live&cmd=heartbeat", JSON.stringify(obj),
            function(rspJson) {}
        );
    };
    handleReport();
    g_report = setInterval(handleReport, 10000)
}

function getUserList() {
    clearInterval(g_getUserList);
    var temp = function() {
        var obj = {
            "token": g_token,
            "roomnum": g_roomnum,
            "index": 0,
            "size": 20
        };
        ajaxPost(g_serverUrl + "?svc=live&cmd=roomidlist", JSON.stringify(obj),
            function(rspJson) {
                g_liveGuestCount = 0;
                $('#user-list').html('');
                var roleList = { '0': '' /*瑙備紬锛堜笉鏄剧ず锛�*/ , '1': '涓绘挱', '2': '杩為害' };
                for (var i = 0; i < rspJson.data.idlist.length; i++) {
                    var item = rspJson.data.idlist[i];
                    var role = roleList[item.role] ? ('(' + roleList[item.role] + ')') : "";
                    $('#user-list').append('<button type="button" class="list-group-item" data-id="' + item.id + '" data-role="' + item.role + '">' +
                        item.id + role + '</button>');
                    if (item.role == E_Role.LiveGuest) {
                        g_liveGuestCount++;
                    }
                }
            }
        );
    };
    temp();
    g_getUserList = setInterval(temp, 10000);
};

function OnBtnJoinRoom(roomid, role, succ, err) {
    if (g_request_status) {
        toastr.warning("姝ｅ湪鍙戣捣鍔犲叆鎴块棿璇锋眰锛岃绋嶅€�..");
        return;
    }
    g_request_status = 1;
    //閫氳繃url 锛焤ole=2 杩涙潵鐨勭敤鎴凤紝璁剧疆鎴愯繛楹︾敤鎴�
    if(/role=2/gi.test(location.search)){
        g_role = E_Role.LiveGuest;
    }else{
        g_role = E_Role.Guest;
    }

    var jsonObj = {
        "token": g_token,
        "roomnum": roomid,
        "role": g_role || E_Role.Guest,
        "operate": 0,
        "id": g_id
    };
    ajaxPost(g_serverUrl + "?svc=live&cmd=reportmemid", JSON.stringify(jsonObj),
        function(rspJson) {
            if (rspJson.errorCode != 0) {
                g_request_status = 0;
                toastr.error("閿欒鐮�:" + rspJson.errorCode + " 閿欒淇℃伅:" + rspJson.errorInfo);
                return;
            }

            var authBits = (g_role == E_Role.LiveGuest) ? E_iLiveAuthBits.AuthBit_LiveGuest : E_iLiveAuthBits.AuthBit_Guest;
            sdk.joinRoom(roomid, authBits, "", g_role == E_Role.LiveGuest ? 'LiveGuest' : "Guest", function() {
                g_request_status = 0;
                toastr.success("join room succ");
                g_roomnum = roomid;
                succ();
                SendGroupMessage({
                    "userAction": E_IM_CustomCmd.AVIMCMD_EnterLive,
                    "actionParam": ''
                })
                report({
                    "token": g_token,
                    "roomnum": g_roomnum,
                    "role": g_role || E_Role.Guest,
                    "thumbup": 0
                });
                getUserList();
                if (role == E_Role.LiveGuest) {
                    sdk.changeRole('LiveGuest', function() {

                    });
                }
            }, function(errMsg) {
                g_request_status = 0;
                toastr.error("閿欒鐮�:" + errMsg.code + " 閿欒淇℃伅:" + errMsg.desc);
                err(errMsg);
            });
        },
        function() {
            g_request_status = 0;
        }
    );
}

function OnBtnQuitRoom(cb) {
    var url = null;
    var param = {};
    if (g_role == E_Role.LiveMaster) {
        url = g_serverUrl + "?svc=live&cmd=exitroom",
            param = {
                "token": g_token,
                "type": "live",
                "roomnum": g_roomnum,
            }
    } else { //瑙備紬
        url = g_serverUrl + "?svc=live&cmd=reportmemid",
            param = {
                "token": g_token,
                "id": g_id,
                "roomnum": g_roomnum,
                "role": g_role || E_Role.Guest,
                "operate": 1
            }
    }
    var quit_callback = function() {
        ajaxPost(url, JSON.stringify(param),
            function(rspJson) {
                sdk.quitRoom(function() {
                    toastr.success("quit room succ");
                    initState();
                    cb();
                }, function(errMsg) {
                    toastr.error("閿欒鐮�:" + errMsg.code + " 閿欒淇℃伅:" + errMsg.desc);
                });
            }
        );
    }
    if (g_role == E_Role.LiveMaster) {
        SendGroupMessage({
                "userAction": E_IM_CustomCmd.AVIMCMD_ExitLive,
                "actionParam": ''
            }, quit_callback) //涓绘挱瑕佸厛鍙戦€侀€€鍑烘埧闂寸殑淇′护
    } else {
        quit_callback();
    }
}

function OnBtnOpenCamera() {
    if (g_role != E_Role.LiveGuest && g_role != E_Role.LiveMaster) {
        toastr.error('琚繛楹︿箣鍚庢墠鍙互鎵撳紑鎽勫儚澶�');
        return;
    }
    var nRet = sdk.getCameraList();
    if (nRet.code != 0) {
        toastr.warning("鑾峰彇鎽勫儚澶村垪琛ㄥ嚭閿�; 閿欒鐮�:" + nRet);
        return;
    }
    sdk.openCamera(nRet.devices[0].id);
}

function OnBtnCloseCamera() {
    sdk.closeCamera();
}

function OnBtnOpenMic() {
    if (g_role != E_Role.LiveGuest && g_role != E_Role.LiveMaster) {
        return toastr.error('琚繛楹︿箣鍚庢墠鍙互鎵撳紑楹﹀厠椋�');
    }
    var nRet = sdk.getMicList();
    if (nRet.code != 0) {
        toastr.warning("鑾峰彇楹﹀厠椋庡垪琛ㄥ嚭閿�; 閿欒鐮�:" + nRet);
        return;
    }
    sdk.openMic(nRet.devices[0].id);
}

function OnBtnCloseMic() {
    if (g_role != E_Role.LiveGuest && g_role != E_Role.LiveMaster) {
        return toastr.error('琚繛楹︿箣鍚庢墠鍙互鍏抽棴楹﹀厠椋�');
    }
    sdk.closeMic();
}

function OnBtnOpenPlayer() {
    var nRet = sdk.getSpeakerList();
    if (nRet.code != 0) {
        toastr.warning("鑾峰彇鎵０鍣ㄥ垪琛ㄥ嚭閿�; 閿欒鐮�:" + nRet);
        return;
    }
    sdk.openSpeaker(nRet.devices[0].id);
}

function OnBtnClosePlayer() {
    sdk.closeSpeaker();
}

function OnBtnSendGroupMessage(msg, succ, err) {
    var elem = new ILiveMessageElem(E_iLiveMessageElemType.TEXT, msg);
    var elems = [];
    elems.push(elem);
    var message = new ILiveMessage(elems);
    sdk.sendGroupMessage(message, function() {
        toastr.success("send message succ");
        addMessage('鎴戣:' + escapeHTML(msg));
        $("#group-message").val('');
    }, function(errMsg) {
        toastr.error("閿欒鐮�:" + errMsg.code + " 閿欒淇℃伅:" + errMsg.desc);
    });
}

function OnBtnSendC2CMessage(msg, user) {
    var elem = new ILiveMessageElem(E_iLiveMessageElemType.TEXT, msg);
    var elems = [];
    elems.push(elem);
    var message = new ILiveMessage(elems);
    sdk.sendC2CMessage(user, message, function() {
        toastr.success("send message succ");
        addMessage('鎴戣:' + escapeHTML(msg));
    }, function(errMsg) {
        toastr.error("閿欒鐮�:" + errMsg.code + " 閿欒淇℃伅:" + errMsg.desc);
    });
}

function OnBtnStartRecognizeVoice() {
    var wxvoice = document.getElementById("WXVoiceSDKCom");

    toastr.success("鍚屾椂寮€鍚闊宠瘑鍒�");
    wxvoice.startVoiceRecognize(onVoiceRecognizeErr, onVoiceRecognizeResult);
}

function OnBtnStopRecognizeVoice() {
    var wxvoice = document.getElementById("WXVoiceSDKCom");
    wxvoice.stopVoiceRecognize();
}

function OnBtnStartPushStream() {
    var op = new ILivePushStreamOption(E_iLivePushDataType.CAMERA, E_iLivePushEncode.HLS, E_iLivePushRecordFileType.MP4);
    sdk.startPushStream(op, function(msg) {
        toastr.success(msg.channelID);
    }, function() {
        toastr.error("閿欒鐮�:" + errMsg.code + " 閿欒淇℃伅:" + errMsg.desc);
    });
}

function OnBtnStopPushStream(chanelId) {
    sdk.stopPushStream(chanelId, function() {
        toastr.success("stop push succ");
    }, function(errMsg) {
        toastr.error("閿欒鐮�:" + errMsg.code + " 閿欒淇℃伅:" + errMsg.desc);
    });
}


function addMessage(msg) {
    $('#chat_box').append('<div>' + msg + '</div>')
    $('#chat_box').scrollTop(document.getElementById('chat_box').scrollHeight);
}

function sendC2CMessage(user, msg, cb) {
    var elem = new ILiveMessageElem(E_iLiveMessageElemType.CUSTOM, JSON.stringify(msg));
    var elems = [];
    elems.push(elem);
    var message = new ILiveMessage(elems);
    sdk.sendC2CMessage(user, message, function() {
        if (cb) {
            cb();
        }
    }, function(errMsg) {
        toastr.error("閿欒鐮�:" + errMsg.code + " 閿欒淇℃伅:" + errMsg.desc);
    });
}

function SendGroupMessage(msg, cb) {
    var elem = new ILiveMessageElem(E_iLiveMessageElemType.CUSTOM, JSON.stringify(msg));
    var elems = [];
    elems.push(elem);
    var message = new ILiveMessage(elems);
    sdk.sendGroupMessage(message, function() {
        if (cb) {
            cb();
        }
        //閲嶆柊鎷夊彇鐢ㄦ埛鍒楄〃
        getUserList();
    }, function(errMsg) {
        toastr.error("閿欒鐮�:" + errMsg.code + " 閿欒淇℃伅:" + errMsg.desc);
    });
}

function initState() {
    clearInterval(g_report);
    clearInterval(g_getUserList);

    StatusManager.reset(function() {
        renderButton();
    });
    g_roomnum = null;

    // OnBtnGetList();

    $('#chat_box').html('');
    $('#user-list').html('');
    for (var i = 0; i < 3; i++) {
        $('#username' + i).html('');
    }

}

/**
 * 鑷畾涔夋秷鎭鐞嗗嚱鏁�
 */
function dealCustomMessage(user, msg) {
    consoleLog(user);
    consoleLog(JSON.stringify(msg));
    switch (msg.userAction) {
        case E_IM_CustomCmd.AVIMCMD_EnterLive:
            addMessage(user + '杩涘叆浜嗘埧闂�');
            getUserList();
            break;
        case E_IM_CustomCmd.AVIMCMD_ExitLive:
            toastr.warning('涓绘挱' + user + '閫€鍑轰簡鎴块棿');
            sdk.quitRoom(function() {
                toastr.success("quit room succ");
                initState();
                OnBtnGetList();
                $('#detail').css('display', 'none');
                $('#list').css('display', 'block');
            }, function(errMsg) {
                toastr.error("閿欒鐮�:" + errMsg.code + " 閿欒淇℃伅:" + errMsg.desc);
            });
            getUserList();
            break;
        case E_IM_CustomCmd.AVIMCMD_Praise:
            addMessage(user + '鐐逛簡璧�');
            break;
        case E_IM_CustomCmd.AVIMCMD_Host_Leave:
        case E_IM_CustomCmd.AVIMCMD_Host_Back:
            getUserList();
            break;
        case E_IM_CustomCmd.AVIMCMD_Multi:
            break;
        case E_IM_CustomCmd.AVIMCMD_Multi_Host_Invite:
            g_invite = user;
            $('#invitedBox').modal('show');
            break;
        case E_IM_CustomCmd.AVIMCMD_Multi_CancelInteract:
            if (g_role != E_Role.LiveMaster) {
                sdk.changeRole('Guest', function() {
                    toastr.warning("琚富鎾笅楹�");
                    OnBtnCloseCamera();
                    g_role = E_Role.Guest;
                    report({
                        "token": g_token,
                        "roomnum": g_roomnum,
                        "role": g_role || E_Role.Guest,
                        "thumbup": 0
                    });
                    getUserList();
                });
            } else {
                getUserList();
            }
            break;
        case E_IM_CustomCmd.AVIMCMD_Multi_Interact_Join:
            toastr.success("瀵规柟鎺ュ彈浜嗕綘鐨勯個璇�");
            getUserList();
            break;
        case E_IM_CustomCmd.AVIMCMD_Multi_Interact_Refuse:
            toastr.warning("瀵规柟鎷掔粷浜嗕綘鐨勯個璇�");
        default:
            break;
    }
}

function escapeHTML(str) {
    if (typeof str != 'string') {
        return '' + str;
    }
    return str.replace(/[<>&"']/g, function($0) {
        switch ($0) {
            case '<':
                return '&lt;';
            case '>':
                return '&gt;';
            case '&':
                return '&amp;';
            case '"':
                return '&quot;';
            case '\'':
                return '&#39;';
        }
    });
}