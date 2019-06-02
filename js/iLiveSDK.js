/**
* iliveSDK鎴愬姛鍥炶皟
* @callback ILiveSDK~iliveSucCallback
*/

/**
* iliveSDK澶辫触鍥炶皟
* @callback ILiveSDK~iliveErrCallback
* @param {ILiveErrorMessage} message 閿欒淇℃伅
*/

/**
* iliveSDK鏀舵秷鎭洖璋�
* @callback ILiveSDK~iliveMessageCallback
* @param {ILiveMessage} msg 娑堟伅
*/

/**
* iliveSDK鎴块棿鍐呬簨浠跺洖璋�
* @callback ILiveSDK~iliveRoomEventListener
* @param {ILiveRoomEvent} roomevent 鎴块棿鍐呬簨浠�
*/

/**
* iliveSDK琚涪涓嬬嚎鍥炶皟
* @callback ILiveSDK~iliveOnForceOffline
*/

/**
* iliveSDK璁惧鎿嶄綔鍥炶皟
* @callback ILiveSDK~iliveDeviceOperationCallback
* @param {E_iLiveOperType} oper 璁惧鎿嶄綔绫诲瀷
* @param {number} code 璁惧鎿嶄綔缁撴灉,0琛ㄧず鎴愬姛
*/

/**
* iliveSDK璁惧鎻掓嫈鍥炶皟
* @callback ILiveSDK~iliveDeviceDetectCallback
*/

/**
* iliveSDK鐩存挱璐ㄩ噺鍥炶皟
* @callback ILiveSDK~iliveQualityParamCallback
* @param {json} param 鐩存挱璐ㄩ噺鍙傛暟,鍚勪釜瀛楁鍚箟瑙乭ttps://github.com/zhaoyang21cn/iLiveSDK_Web_Suixinbo/blob/master/doc/iLiveSDK_QualityParam.md
*/

/**
* iliveSDK鏈湴瑙嗛褰曞埗杩囩▼涓彂鐢熼敊璇殑鍥炶皟閫氱煡:<br/>
* 寮€鍚綍鍒朵箣鍚庯紝鍦ㄥ綍鍒惰繃绋嬩腑鍙戠敓閿欒锛屼細鍥炶皟杩欎釜鏂规硶, 骞惰嚜鍔ㄥ仠姝㈠綍鍒躲€�
* @callback ILiveSDK~iliveLocalRecordErrorCallback
* @param {number} result - 閿欒鐮�
* @param {string} errInf - 閿欒淇℃伅
*/

/**
* iliveSDK鏈湴瑙嗛褰曞埗鏂囦欢鐢熸垚鍥炶皟:<br/>
* 寮€鍚綍鍒朵箣鍚庯紝褰曞埗杩囩▼涓畬鎴愪竴涓狹P4鏂囦欢鐨勫綍鍒讹紝鍗冲洖璋冭繖涓柟娉曘€�<br/>
* 褰曞埗杩囩▼涓湁鍙兘浜х敓澶氫釜MP4鏂囦欢, 鍗冲綍鍒惰繃绋嬩腑鍙兘浼氭湁澶氭iliveLocalRecordedCallback鍥炶皟銆�<br/>
* 浜х敓澶氫釜MP4鏂囦欢鏄繀瑕佺殑, 鍘熷洜鏄�:<br/>
* 1. SDK鐢变簬鎬ц兘鑰冭檻锛屾病鏈夎繘琛屼簩娆＄紪鐮侊紝鑰屾槸鐩存帴灏嗛€氳瘽涓殑涓婅鐮佹祦dump涓嬫潵杞垚MP4銆�<br/>
* 2. 鐢变簬閫氳瘽杩囩▼涓垏瑙掕壊, 瑙嗛鍙傛暟鏈夊彲鑳戒細鍙樺寲锛屽鑷磆264 sps pps鍙戠敓鏀瑰彉(涓昏涓鸿棰戝垎杈ㄧ巼鏀瑰彉)锛屼粠鑰屽繀椤婚噸鏂颁繚瀛樸€�<br/>
* 3. 鐗瑰埆鐨勶紝鐢变簬閫氳瘽杩囩▼涓紝灞忓箷鍒嗕韩鍖哄煙鍙樺寲锛屽鑷磆264 sps pps鍙戠敓鏀瑰彉(涓昏涓鸿棰戝垎杈ㄧ巼鏀瑰彉)锛屼粠鑰屽繀椤婚噸鏂颁繚瀛樸€�<br/>
* 4. 鑰冭檻鍒扮爜娴佽浆鎹p4鐨勬椂闂村拰绌洪棿鏁堢巼闂锛屽崟涓枃浠舵渶澶ф椂闀夸负1灏忔椂锛岃秴杩囧垯閲嶆柊淇濆瓨銆�<br/>
* 5. 鎽勫儚澶村拰灞忓箷鍒嗕韩浼氬悓鏃跺綍鍒朵繚瀛橈紝涔熶細鍒嗗紑褰曞埗淇濆瓨锛屾憚鍍忓ごMP4鏂囦欢鍚嶄互"main"寮€澶达紝灞忓箷鍒嗕韩MP4鏂囦欢鍚嶄互"sub"寮€澶�<br/>
* 6. 闊抽浼氬浐瀹氳浆鐮佷负鏍囧噯ACC (sample rate: 48000, channel: 2, bitrate: 64000),涓嶄細閫犳垚閲嶆柊鐢熸垚MP4鐨勯棶棰樸€�<br/>
* 鎵€浠ワ紝寤鸿涓氬姟渚у敖閲忎娇鐢ㄥ浐瀹氬垎杈ㄧ巼锛屽浐瀹氱爜鐜囩瓑鍙傛暟锛岄伩鍏峬p4鏂囦欢淇濆瓨涓暟杩囧銆�
* @callback ILiveSDK~iliveLocalRecordedCallback
* @param {number} duration - mp4鏂囦欢鏃堕暱锛屽崟浣嶇銆傚崟涓狹P4鏂囦欢鏈€澶ф椂闀夸负1灏忔椂銆�
* @param {number} width - mp4鏂囦欢瑙嗛鍥惧儚瀹藉害銆�
* @param {number} height - mp4鏂囦欢瑙嗛鍥惧儚楂樺害銆�
* @param {string} filePath - mp4鏂囦欢璺緞銆�
*/

/**
* ILiveSDK
* @constructor
* @throws iliveSDKObj涓嶅瓨鍦ㄦ椂鎶涘嚭寮傚父
* @param {number} appid - 鑵捐浜戝垎閰嶇殑appid
* @param {number} accountType - 鑵捐浜戝垎閰嶇殑accoutType(鍚庡彴宸插簾寮冩瀛楁锛屽～0鍗冲彲)
* @param {string} iliveSDK - html椤甸潰涓璱LiveSDK object鐨処D
*/
function ILiveSDK(appid, accountType, iliveSDKObj) {
    this.appid = appid;
    this.accountType = accountType;
    this.ilive = document.getElementById(iliveSDKObj);
    if (!this.ilive) throw new Error("iliveSDK object not found");
}

ILiveSDK.prototype = {
    /**
    * 鑾峰彇iliveSDK鐗堟湰
    * @returns {string} 鐗堟湰鍙�
    */
    version: function () {
        return this.ilive.getVersion();
    },

    detect: function() {
        var ua = navigator.userAgent;
        var msie = ua.indexOf('MSIE ');
        var version = 0;
        if (msie > 0) {
            // IE 10 or older => return version number
            version = parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
        }

        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            msie = true;
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10) || version;
        }

        //涓嶆敮鎸�64浣岻E
        if ( msie !== -1 && ((window.navigator.cpuClass == "x86" && (version == 8 || version == 9 || version == 10) ) || version == 11) ) {
            return false;
        }
        return {
            "msie": !!msie,
            "version": version,
            "cpuClass": window.navigator.cpuClass
        };
    },

    /**
    * 璁剧疆鏄惁鏀寔IM鍔熻兘(鑱婂ぉ绛夊嵆鏃堕€氳鍔熻兘),娉ㄦ剰,蹇呴』鍦ㄥ垵濮嬪寲涔嬪墠璋冪敤;
    * @param {boolean} imSupport - 鏄惁鏀寔IM鍔熻兘
    */
    setIMSupport: function (imSupport) {
        this.ilive.setIMSupport(imSupport);
    },

    /**
    * 璁剧疆鎴块棿鍐呯洿鎾川閲忓洖璋冩帴鍙�<br/>
    * 璋冪敤姝ゆ帴鍙ｈ缃洖璋冨悗锛岃繘鍏ユ埧闂村氨浼氭瘡闅�1绉掗€氱煡涓氬姟灞傛埧闂村唴鐩稿叧鍙傛暟鎯呭喌
    * @param {ILiveSDK~iliveQualityParamCallback} listener - 鐩戝惉鍑芥暟
    */
    setQualityParamCallback: function (listener) {
        this.ilive.setQualityParamCallback( function(szRet){
            if (listener) {
                var obj = JSON.parse(szRet);
                if (obj.videoEncodeParams == null) {
                    obj.videoEncodeParams = new Array();
                }
                if (obj.videoDecodeParams == null) {
                    obj.videoDecodeParams = new Array();
                }
                if (obj.audioDecodeParams == null) {
                    obj.audioDecodeParams = new Array();
                }
                listener(obj);
            }
        }
        );
    },
    
    /**
    * 璁剧疆鏄惁杩涙祴璇曠幆澧�(涓庤吘璁簯鍚庡彴鑱旇皟鏃朵娇鐢�)銆傛敞鎰�,蹇呴』鍦ㄥ垵濮嬪寲涔嬪墠璋冪敤;
    * @param {boolean} testEnv - 鏄惁鏀寔IM鍔熻兘;
    */
    setTestEnv: function (testEnv) {
        this.ilive.setTestEnv(testEnv);
    },

    /**
    * 璁剧疆閫氶亾绫诲瀷銆�<br/>
    * 鑰佺敤鎴�(2018骞�07鏈�09鏃ュ墠鎺ュ叆鐨勭敤鎴�)闇€瑕佽皟鐢ㄦ湰鎺ュ彛璁剧疆涓篍_ChannelMode.E_ChannelIMSDK锛屾墠鑳藉拰鏃х増鏈�(1.9.0.0涔嬪墠鐨勭増鏈�)浜掗€�;
    * 榛樿閫氶亾涓篍_ChannelMode.E_ChannelIMRestAPI,姝ら€氶亾鍦ㄨ繘鎴块棿鏃�,蹇呴』濉啓tls鍔犲瘑鐗堟湰鐨刾rivateMapKey,privateMapKey鐢熸垚瑙勫垯鍙傝€�: https://cloud.tencent.com/document/product/454/16914 鏂囨。涓璸rivateMapKey鐨勮绠楁柟娉�;
    * 娉ㄦ剰: 姝ゆ帴鍙ｅ繀椤诲湪鐧诲綍涔嬪墠璋冪敤锛屽惁鍒欐棤鏁堛€�
    * @param {E_ChannelMode}    mode - 閫氶亾绫诲瀷
    * @param {string}           host - 鑷畾涔夊煙鍚�(鐩墠姝ゅ弬鏁版棤鏁�,鍙笉濉�);
    */
    setChannelMode: function(mode, host)
    {
        if (host === undefined) {
            host = "";
        }
        this.ilive.setChannelMode(mode, host);
    },

    /**
    * 灏嗗垵濮嬪寲iliveSDK.
    * @param {ILiveSDK~iliveSucCallback} suc - 鎴愬姛鍥炶皟
    * @param {ILiveSDK~iliveErrCallback} err - 澶辫触鍥炶皟
    */
    init: function (suc, err)
    {
        var detect = this.detect();
        if (detect) {
            err(detect);
            alert('娴忚鍣ㄧ増鏈湁璇紝鍙兘涓�32浣嶇殑IE8/IE9/IE10浠ュ強32浣嶆垨64浣嶇殑IE11,褰撳墠鐗堟湰 ' + JSON.stringify(detect));
            return;
        }
        this.ilive.initSdk(this.appid, this.accountType, function () {
            if(suc) {
                suc();
            }
        },
        function (msg) {
            if (err) {
                var obj = JSON.parse(msg);
                err(obj);
            }
        }
        );
    },

    /**
    * 閲婃斁iliveSDK
    */
    unInit: function () {
        this.ilive.release();
    },

    /**
    * 鐧诲綍
    * @param {string} id - 鐧诲綍id
    * @param {string} sig - 鐧诲綍绛惧悕
    * @param {ILiveSDK~iliveSucCallback} suc - 鎴愬姛鍥炶皟
    * @param {ILiveSDK~iliveErrCallback} err - 澶辫触鍥炶皟
    */
    login: function (id, sig, suc, err) {
        this.ilive.iLiveLogin(id, sig, function () {
            if (suc) {
                suc();
            }
        }, function (msg) {
            if (err) {
                var obj = JSON.parse(msg);
                err(obj);
            }
        });
    },

    /**
    * 鐧诲嚭
    * @param {ILiveSDK~iliveSucCallback} suc - 鎴愬姛鍥炶皟
    * @param {ILiveSDK~iliveErrCallback} err - 澶辫触鍥炶皟
    */
    logout: function (suc, err) {
        this.ilive.iLiveLogout(function () {
            if (suc) {
                suc();
            }
        }, function (msg) {
            if (err) {
                var obj = JSON.parse(msg);
                err(obj);
            }
        });
    },

    /**
    * 寮€濮嬭澶囨祴璇�; 鍦ㄧ櫥褰曚箣鍚庯紝杩涘叆鎴块棿涔嬪墠锛屽彲浠ュ紑鍚澶囨祴璇曪紝鎴愬姛鍚庯紝鍙互瀵规憚鍍忓ご銆侀害鍏嬮銆佹壃澹板櫒锛岃繘琛岃澶囨祴璇�;姝ゆ椂,缇庨銆佺編鐧藉姛鑳藉彲鐢�;
    * @param {ILiveSDK~iliveSucCallback} suc - 鎴愬姛鍥炶皟
    * @param {ILiveSDK~iliveErrCallback} err - 澶辫触鍥炶皟
    * @param {number} preWidth - 璁惧娴嬭瘯涓紝鎽勫儚澶撮瑙堢敾闈㈢殑瀹藉害
    * @param {number} preHeight - 璁惧娴嬭瘯涓紝鎽勫儚澶撮瑙堢敾闈㈢殑楂樺害
    */
    startDeviceTest: function(suc, err, preWidth, preHeight) {
        if (preWidth === undefined || preHeight === undefined) {
            preWidth = 640;
            preHeight = 480;
        }
        this.ilive.startDeviceTest(function () {
            if(suc){
                suc();
            }
        }, function (msg) {
            if (err) {
                var obj = JSON.parse(msg);
                err(obj);
            }
        }, preWidth, preHeight );
    },
    
    /**
    * 鍋滄璁惧娴嬭瘯; 鍦ㄥ紑濮嬭澶囨祴璇曞悗锛岄渶瑕佸仠姝㈣澶囨祴璇曪紝鎵嶈兘杩涘叆鎴块棿锛屽惁鍒欎細杩斿洖鐩稿簲閿欒鐮�;
    * @param {ILiveSDK~iliveSucCallback} suc - 鎴愬姛鍥炶皟
    * @param {ILiveSDK~iliveErrCallback} err - 澶辫触鍥炶皟
    */
    stopDeviceTest: function(suc, err) {
        this.ilive.stopDeviceTest(function () {
            if (suc) {
                suc();
            }
        }, function (msg) {
            if (err) {
                var obj = JSON.parse(msg);
                err(obj);
            }
        });
    },

    /**
    * 鍒涘缓鎴块棿
    * @param {number} roomID - 鎴块棿ID
    * @param {E_iLiveAuthBits} authBits - 瑙掕壊鏉冮檺浣�
    * @param {string} privateMapKey - 閫氳瘽鑳藉姏鏉冮檺浣嶇殑鍔犲瘑涓�
    * @param {string} controlRole - 瑙掕壊
    * @param {ILiveSDK~iliveSucCallback} suc - 鎴愬姛鍥炶皟
    * @param {ILiveSDK~iliveErrCallback} err - 澶辫触鍥炶皟
    * @param {boolean} model - 鏄惁绔栧睆寮€鎾�; false: 鍚� true: 鏄�; 濡傛灉createRoom 涓嶄紶璇ュ弬鏁帮紝榛樿false妯睆
    */ 
    createRoom: function (roomID, authBits, privateMapKey, controlRole, suc, err, model) {
        var rotate = -1;
        if (true == model){
            rotate = 3; // 3 浠ｈ〃鏃嬭浆 270搴︼紱-1浠ｈ〃涓嶆棆杞� 
        }else{
            rotate = 0; // 0 浠ｈ〃涓嶆棆杞�
        }
        this.ilive.createRoom(roomID, authBits, privateMapKey, controlRole, function () {
            if (suc) {
                suc();
            }
        }, function (msg) {
            if (err) {
                var obj = JSON.parse(msg);
                err(obj);
            }
        }, rotate);
    },

   /**
    * 鍔犲叆鎴块棿
    * @param {number} roomID - 鎴块棿ID
    * @param {E_iLiveAuthBits} authBits - 瑙掕壊鏉冮檺浣�
    * @param {string} privateMapKey - 閫氳瘽鑳藉姏鏉冮檺浣嶇殑鍔犲瘑涓�
    * @param {string} controlRole - 瑙掕壊
    * @param {ILiveSDK~iliveSucCallback} suc - 鎴愬姛鍥炶皟
    * @param {ILiveSDK~iliveErrCallback} err - 澶辫触鍥炶皟
    */
    joinRoom: function (roomID, authBits, privateMapKey, controlRole, suc, err) {
        this.ilive.joinRoom(roomID, authBits, privateMapKey, controlRole, function () {
            if (suc) {
                suc();
            }
        }, function (msg) {
            if (err) {
                var obj = JSON.parse(msg);
                err(obj);
            }
        });
    },

   /**
    * 閫€鍑烘埧闂�
    * @param {ILiveSDK~iliveSucCallback} suc - 鎴愬姛鍥炶皟
    * @param {ILiveSDK~iliveErrCallback} err - 澶辫触鍥炶皟
    */
    quitRoom: function (suc, err) {
        this.ilive.quitRoom(function () {
            if (suc) {
                suc();
            }
        }, function (msg) {
            if (err) {
                var obj = JSON.parse(msg);
                err(obj);
            }
        });
    },

   /**
    * 鑾峰彇鎽勫儚澶村垪琛�
    * @returns {ILiveDeviceList} 鎽勫儚澶村垪琛ㄤ俊鎭粨鏋�
    */
    getCameraList: function () {        
        var szRet = this.ilive.getCameraList();
        var obj = JSON.parse(szRet);
        var cList = [];
        if (obj.code == 0) {
            for (var i = 0; i < obj.cameralist.length; ++i) {
                var camera = new ILiveDevice(obj.cameralist[i].id, obj.cameralist[i].name);
                cList.push(camera);
            }
        }
        return new ILiveDeviceList(obj.code, cList);
    },

   /**
    * 鎵撳紑鎽勫儚澶�
    * @param {string} id - 闇€瑕佹墦寮€鐨勬憚鍍忓ごID
    */
    openCamera: function (id) {
        this.ilive.openCamera(id);
    },

   /**
    * 鍏抽棴鎽勫儚澶�
    */
    closeCamera: function () {
        return this.ilive.closeCamera();
    },

    /**
    * 鑾峰彇浠诲姟鏍忔墦寮€鐨勭獥鍙ｅ垪琛�
    * @returns {ILiveDeviceList} 鑾峰彇鐨勭獥鍙ｅ垪琛ㄧ粨鏋�
    */
    getWndList: function () {
        var szRet = this.ilive.getWndList();
        var obj = JSON.parse(szRet);
        var wList = [];
        if (obj.code == 0) {
            for (var i = 0; i < obj.wndlist.length; ++i) {
                var wnd = new ILiveDevice(obj.wndlist[i].id, obj.wndlist[i].title);
                wList.push(wnd);
            }
        }
        return new ILiveDeviceList(obj.code, wList);
    },

    /**
    * 鎸囧畾绐楀彛杩涜灞忓箷鍒嗕韩
    * @param {number} wndID - 鎸囧畾绐楀彛鐨刬d
    */
    openScreenShareWnd: function(wndID) {
        this.ilive.openScreenShareWnd(wndID);
    },

    /**
    * 鎸囧畾鍖哄煙杩涜灞忓箷鍒嗕韩
    * @param {number} left - 鎸囧畾鍖哄煙鐨勫乏杈圭晫x鍧愭爣
    * @param {number} top - 鎸囧畾鍖哄煙鐨勪笂杈圭晫y鍧愭爣
    * @param {number} right - 鎸囧畾鍖哄煙鐨勫彸杈圭晫x鍧愭爣
    * @param {number} bottom - 鎸囧畾鍖哄煙鐨勪笅杈圭晫y鍧愭爣
    */
    openScreenShareArea: function(left, top, right, bottom){
        this.ilive.openScreenShareArea(left, top, right, bottom);
    },

    /**
    * 淇敼鎸囧畾鐨勫睆骞曞垎浜尯鍩�
    * @param {number} left - 鎸囧畾鍖哄煙鐨勫乏杈圭晫x鍧愭爣
    * @param {number} top - 鎸囧畾鍖哄煙鐨勪笂杈圭晫y鍧愭爣
    * @param {number} right - 鎸囧畾鍖哄煙鐨勫彸杈圭晫x鍧愭爣
    * @param {number} bottom - 鎸囧畾鍖哄煙鐨勪笅杈圭晫y鍧愭爣
    * @returns {number} 缁撴灉锛�0涓烘垚鍔燂級
    */
    changeScreenShareSize: function(left, top, right, bottom)
    {
        return this.ilive.changeScreenShareSize(left, top, right, bottom);
    },

    /**
    * 鍏抽棴灞忓箷鍒嗕韩
    */
    closeScreenShare: function()
    {
        this.ilive.closeScreenShare();
    },

    /**
    * 鑾峰彇楹﹀厠椋庡垪琛�
    * @returns {ILiveDeviceList} 鑾峰彇楹﹀厠椋庡垪琛ㄤ俊鎭粨鏋�
    */
    getMicList: function () {    
        var szRet = this.ilive.getMicList();
        var obj = JSON.parse(szRet);
        var cList = [];
        if (obj.code == 0) {
            for (var i = 0; i < obj.miclist.length; ++i) {
                var mic = new ILiveDevice(obj.miclist[i].id, obj.miclist[i].name);
                cList.push(mic);
            }
        }
        return new ILiveDeviceList(obj.code, cList);
    },

   /**
    * 鎵撳紑楹﹀厠椋�
    * @param {string} id - 闇€瑕佹墦寮€鐨勯害鍏嬮ID
    */
    openMic: function (id) {
        this.ilive.openMic(id);
    },

   /**
    * 鍏抽棴楹﹀厠椋�
    */
    closeMic: function () {
        this.ilive.closeMic();
    },

    /**
    * 鑾峰彇鎵０鍣ㄥ垪琛�
    * @returns {ILiveDeviceList} 鑾峰彇鎵０鍣ㄥ垪琛ㄤ俊鎭粨鏋�
    */
    getSpeakerList: function () {        
        var szRet = this.ilive.getPlayerList();
        var obj = JSON.parse(szRet);
        var cList = [];
        if (obj.code == 0) {
            for (var i = 0; i < obj.playerlist.length; ++i) {
                var speaker = new ILiveDevice(obj.playerlist[i].id, obj.playerlist[i].name);
                cList.push(speaker);
            }
        }
        return new ILiveDeviceList(obj.code, cList);
    },
   
   /**
    * 鎵撳紑鎵０鍣�
    * @param {string} id - 闇€瑕佹墦寮€鐨勬壃澹板櫒ID
    */
    openSpeaker: function (id) {
        this.ilive.openPlayer(id);
    },

   /**
    * 鍏抽棴鎵０鍣�
    */
    closeSpeaker: function () {
        this.ilive.closePlayer();
    },

   /**
    * 鍙戦€佺兢娑堟伅
    * @param {ILiveMessage} message - 娑堟伅
    * @param {ILiveSDK~iliveSucCallback} suc - 鎴愬姛鍥炶皟
    * @param {ILiveSDK~iliveErrCallback} err - 澶辫触鍥炶皟
    */
    sendGroupMessage: function (message, suc, err) {
        if (message instanceof ILiveMessage) {
            if (message.elems.length == 0) return;

            var msg = {};
	        var elems = [];
	        for (var i = 0; i < message.elems.length; ++i) {
            	var elem = {};
	            elem.type = message.elems[i].type;
	            elem.content = message.elems[i].content;
                elem.ext = message.elems[i].ext;
	            elems.push(elem);
            }
            msg.elems = elems;
            this.ilive.sendGroupMessage(JSON.stringify(msg), function () {
                if (suc) {
                    suc();
                }
            }, function (msg) {
                if (err) {
                    var obj = JSON.parse(msg);
                    err(obj);
                }
            });
        }        
    },

    /**
    * 鍙戦€丆2C娑堟伅
    * @param {string} to - 鍙戦€佸璞�
    * @param {ILiveMessage} message - 娑堟伅
    * @param {ILiveSDK~iliveSucCallback} suc - 鎴愬姛鍥炶皟
    * @param {ILiveSDK~iliveErrCallback} err - 澶辫触鍥炶皟
    */
    sendC2CMessage: function (to, message, suc, err) {
        if (message instanceof ILiveMessage) {
            if (message.elems.length == 0) return;
	        var msg = {};
	        var elems = [];
	        msg.to = to;
	        for (var i = 0; i < message.elems.length; ++i) {
            	var elem = {};
	            elem.type = message.elems[i].type;
	            elem.content = message.elems[i].content;
                elem.ext = message.elems[i].ext;
	            elems.push(elem);
            }
	        msg.elems = elems;
            this.ilive.sendC2CMessage(JSON.stringify(msg), function () {
                if (suc) {
                    suc();
                }
            }, function (msg) {
                if (err) {
                    var obj = JSON.parse(msg);
                    err(obj);
                }
            });
        }        
    },

    /**
    * 璁剧疆娑堟伅鐩戝惉
    * @param {iliveMessageCallback} listener - 娑堟伅鐩戝惉
    */
    setMessageListener: function (listener) {
        var msglistener = function (msg) {
            var obj = JSON.parse(msg);
            elems = [];
            for (var i = 0; i < obj.elements.length; ++i) {
                var elem = new ILiveMessageElem(obj.elements[i].type, obj.elements[i].content, obj.elements[i].ext);
                elems.push(elem);
            }
            var message = new ILiveMessage(elems);
            message.time = obj.time;
            message.sender = obj.sender;
            listener(message);
        };
        if (listener) {
            this.ilive.setMessageCallBack(msglistener);
        }
    },

    /**
    * 璁剧疆涓庢埧闂存柇寮€杩炴帴鐨勭洃鍚嚱鏁�<br/>
    * 鍦ㄤ竴浜涘紓甯告儏鍐典笅锛宻dk浼氳嚜鍔ㄩ€€鍑烘埧闂达紝濡傛柇缃戣秴鏃舵湭鑳借嚜鍔ㄩ噸杩炴垚鍔熺瓑銆�<br/>
    * 鏀跺埌姝ゅ洖璋冨悗,sdk宸茶嚜鍔ㄩ€€鍑烘埧闂达紝閲嶆柊杩炰笂缃戝悗锛岄渶閲嶆柊杩涘叆鎴块棿;
    * @param {ILiveSDK~iliveErrCallback} listener - 鐩戝惉鍑芥暟
    */
    setRoomDisconnectListener: function(listener)
    {
        this.ilive.setRoomDisconnectListener( function (msg) {
            if (listener) {
                var obj = JSON.parse(msg);
                listener(obj);
            }
        });
    },

   /**
    * 璁剧疆鎴块棿鍐呬簨浠剁殑鐩戝惉鍑芥暟
    * @param {iliveRoomEventListener} listener - 浜嬩欢鐩戝惉鍑芥暟
    */
    setRoomEventListener: function (listener) {        
        this.ilive.setRoomEventListener(function (eventid, identifier) {
            roomevent = new ILiveRoomEvent(eventid, identifier);
            listener(roomevent);
        });
    },

   /**
    * 璁剧疆琚涪涓嬬嚎鐩戝惉
    * @param {iliveOnForceOffline} listener - 浜嬩欢鐩戝惉
    */
    setForceOfflineListener: function (listener) {
        this.ilive.setForceOfflineCallback(function () {
            listener();
        });
    },
    
    /**
    * 璁剧疆璁惧鎿嶄綔鐩戝惉
    * @param {iliveDeviceOperationCallback} listener - 浜嬩欢鐩戝惉
    */
    setDeviceOperationCallback: function (listener) {
        this.ilive.setDeviceOperationCallback(function (szInfo) {
            var obj = JSON.parse(szInfo);
            if (listener) {
                listener(obj.oper, obj.code);
            }
        });
    },

    /**
    * 璁剧疆璁惧鎻掓嫈鐩戝惉; 褰撹澶囨彃鎷旀椂锛屼細閫氳繃姝ゅ洖璋冮€氱煡鐢ㄦ埛渚э紝鏀跺埌姝ゅ洖璋冩椂锛岄渶瑕佹洿鏂伴害鍏嬮銆佹壃澹板櫒銆佹憚鍍忓ご鍒楄〃;
    * 濡傛灉鏄鍦ㄤ娇鐢ㄤ腑鐨勮澶囪鎷斿嚭锛屽湪姝ゅ洖璋冧箣鍓�,杩樹細鏀跺埌瀵瑰簲鐨勮澶囧叧闂洖璋�;娉ㄦ剰: 鍙湁鍦ㄦ埧闂翠腑锛屾垨鑰呰澶囨祴璇曚腑鏃讹紝鎵嶄細鏀跺埌姝ゅ洖璋�;
    * @param {iliveDeviceDetectCallback} listener - 璁惧鎻掓嫈鐩戝惉
    */
    setDeviceDetectCallback: function (listener) {
        this.ilive.setDeviceDetectCallback(function () {
            if (listener) {
                listener();
            }
        });
    },

   /**
    * 寮€濮嬫帹娴�
    * @param {ILivePushStreamOption} option - 鎺ㄦ祦鍙傛暟
    * @param {ILiveSDK~iliveSucCallback} suc - 鎴愬姛鍥炶皟, 鍥炶皟杩斿洖娴佷俊鎭�
    * @param {ILiveSDK~iliveErrCallback} err - 澶辫触鍥炶皟
    */
    startPushStream: function (option, suc, err) {
        if (option instanceof ILivePushStreamOption) {
            this.ilive.startPushStream(JSON.stringify(option), function (msg) {
                if (suc) {
                    var obj = JSON.parse(msg);
                    suc(obj);
                }
            }, function (msg) {
                if (err) {
                    var obj = JSON.parse(msg);
                    err(obj);
                }
            });
        }
    },

   /**
    * 缁撴潫鎺ㄦ祦
    * @param {number} channelID - 娴両D
    * @param {E_iLivePushDataType} pushDataType - 瑕佸仠姝㈡帹娴佺殑鏁版嵁绫诲瀷
    * @param {ILiveSDK~iliveSucCallback} suc - 鎴愬姛鍥炶皟
    * @param {ILiveSDK~iliveErrCallback} err - 澶辫触鍥炶皟
    */
    stopPushStream: function (channelID, pushDataType, suc, err) {
        this.ilive.stopPushStream(channelID, pushDataType, function () {
            if (suc) {
                suc();
            }
        }, function (msg) {
            if (err) {
                var obj = JSON.parse(msg);
                err(obj);
            }
        });
    },

    /**
    * 寮€濮嬪綍鍒�
    * @param {ILiveRecordOption} option - 褰曞埗鍙傛暟
    * @param {ILiveSDK~iliveSucCallback} suc - 鎴愬姛鍥炶皟
    * @param {ILiveSDK~iliveErrCallback} err - 澶辫触鍥炶皟
    */
    startRecord: function (option, suc, err) {
        if (option instanceof ILiveRecordOption) {
            this.ilive.startRecord(JSON.stringify(option), function () {
                if (suc) {
                    suc();
                }
            }, function (msg) {
                if (err) {
                    var obj = JSON.parse(msg);
                    err(obj);
                }
            });
        }
    },

    /**
    * 缁撴潫褰曞埗
    * @param {E_iLiveRecordDataType} recordDataType - 瑕佸仠姝㈠綍鍒剁殑鏁版嵁绫诲瀷
    * @param {ILiveSDK~iliveSucCallback} suc - 鎴愬姛鍥炶皟,杩斿洖褰曞埗鐨勮棰戞枃浠秈d鍒楄〃;
    * @param {ILiveSDK~iliveErrCallback} err - 澶辫触鍥炶皟
    */
    stopRecord: function (recordDataType, suc, err) {
        this.ilive.stopRecord(recordDataType, function (msg) {
            if (suc) {
                var obj = JSON.parse(msg);
                suc(obj);
            }
        }, function (msg) {
            if (err) {
                var obj = JSON.parse(msg);
                err(obj);
            }
        });
    },

    /**
    * 寮€濮嬫湰鍦拌棰戝綍鍒�;<br/>
    * 寮€濮嬫湰鍦拌棰戝綍鍒跺悗锛岃嚜宸辩殑鎽勫儚澶村拰灞忓箷鍒嗕韩鍙婇煶棰戞暟鎹紝浼氬綍鍒舵垚mp4鏂囦欢瀛樻斁鍒版湰鍦�;<br/> 
    * 鍦ㄧ櫥褰曞悗锛屽嵆鍙皟鐢ㄦ鎺ュ彛锛岃繘鍏ユ埧闂村悗锛屾墦寮€鎽勫儚澶存垨鑰呭睆骞曞垎浜殑鐢婚潰閮戒細鑷姩褰曞埗鎴愭湰鍦版枃浠�;
    * @param {string} dstDir - 褰曞埗鏂囦欢瀛樻斁鐨勮矾寰�,濡�"D:/";璇风‘淇濊緭鍏ヨ矾寰勬槸鏈夋晥鐨勶紝鍚﹀垯浼氬洖璋僥rrorCallback骞跺仠姝㈠綍鍒�;
    * @param {ILiveSDK~iliveLocalRecordedCallback} recordCallback - 淇濆瓨鍗曚釜褰曞埗MP4鏂囦欢鏃剁殑鍥炶皟閫氱煡, 鍜屾槸鍚﹀仠姝㈠綍鍒禡P4鏃犲叧;
    * @param {ILiveSDK~iliveLocalRecordErrorCallback} errorCallback - 褰曞埗杩囩▼涓彂鐢熼敊璇殑鍥炶皟閫氱煡;
    */
    startLocalRecord: function(dstDir, recordCallback, errorCallback) {
        this.ilive.startLocalRecord(dstDir, function(msg) {
            var obj = JSON.parse(msg);
            if (obj.result == 0) {
                if(recordCallback)
                {
                    recordCallback(obj.duration, obj.width, obj.height, obj.filePath);
                }
            }else {
                if(errorCallback)
                {
                    errorCallback(obj.result, obj.errInf);
                }
            }
        });
    },

    /**
    * 鍋滄鏈湴瑙嗛褰曞埗
    */
    stopLocalRecord: function() {
        this.ilive.stopLocalRecord();
    },

   /**
    * 璁剧疆缇庨绋嬪害
    * @param {number} beauty - 缇庨绋嬪害 0~7
    */
	setBeauty: function (beauty) {

		this.ilive.setBeauty(beauty);
	},
    /**
    * 璁剧疆缇庣櫧绋嬪害
    * @param {number} white - 缇庣櫧绋嬪害 0~9
    */
	setWhite: function (white) {
		this.ilive.setWhite(white);
	},
    /**
    * 璁剧疆娓呮櫚绋嬪害
    * @param {number} sharpen - 娓呮櫚绋嬪害 0~9
    */
	setSharpen: function (sharpen) {
		this.ilive.setSharpen(sharpen);
	},

   /**
    * 淇敼瑙掕壊
    * @param {string} role - 瑙掕壊鍚�
    * @param {ILiveSDK~iliveSucCallback} suc - 鎴愬姛鍥炶皟
    * @param {ILiveSDK~iliveErrCallback} err - 澶辫触鍥炶皟
    */
    changeRole: function (role, suc, err) {
        this.ilive.changeRole(role, function () {
            if (suc) {
                suc();
            }
        }, function () {
            if (err) {
                var obj = JSON.parse(msg);
                err(obj);
            }
        });
    },
}

/**
* 閿欒淇℃伅
* @class
* @constructor
* @param {string} module - 鎶ラ敊鐨勬ā鍧�
* @param {number} code - 閿欒鐮�
* @param {string} message - 閿欒鎻忚堪
*/
function ILiveErrorMessage(module, code, message) {
    this.module = module;
    this.code = code;
    this.message = message;
}

/**
* 娑堟伅
* @class
* @constructor
* @param {ILiveMessageElem[]} elems - 娑堟伅鍐呭
*/
function ILiveMessage(elems) {
    this.elems = elems;
}

/**
* 娑堟伅鍐呭鍏冪礌
* @class
* @constructor
* @param {E_iLiveMessageElemType} type - 娑堟伅绫诲瀷
* @param {string} content - 娑堟伅鍐呭
* @param {string} ext - 鑷畾涔夋秷鎭澶栧瓧娈�(浠呰嚜瀹氫箟娑堟伅鏈夋晥);
*/
function ILiveMessageElem(type, content, ext) {
    this.type = type;
    this.content = content;
    if(ext == undefined) {
        this.ext = "";
    }else {
        this.ext = ext;
    }
}

/**
* 鎴块棿鍐呬簨浠�
* @class
* @constructor
* @param {E_iLiveRoomEventType} eventid - 浜嬩欢id
* @param {string} identifier - 鍙戠敓姝や簨浠剁殑鐢ㄦ埛id
*/
function ILiveRoomEvent(eventid, identifier) {
    this.eventid = eventid;
    this.identifier = identifier;
}

/**
* 璁惧淇℃伅
* @class
* @constructor
* @param {string} id - 璁惧ID
* @param {string} name - 璁惧鍚嶇О
*/
function ILiveDevice(id, name) {
    this.id = id;
    this.name = name;
}

/**
* 璁惧鍒楄〃
* @class
* @constructor
* @param {number} code - 鑾峰彇缁撴灉,0琛ㄧず鎴愬姛
* @param {ILiveDevice[]} devices - 璁惧淇℃伅鍒楄〃
*/
function ILiveDeviceList(code, devices) {
    this.code = code;
    this.devices = devices;
}

/**
* 瑙嗛娓叉煋鍣�
* @class
* @constructor
* @param {string} iliveRenderObj - html涓璱LiveRender object鐨処D
*/
function ILiveRender(iliveRenderObj) {
    this.render = document.getElementById(iliveRenderObj);
}

ILiveRender.prototype = {
    /**
    * 璁剧疆娓叉煋鍣ㄧ粦瀹氱殑鐢ㄦ埛id<br/>
    * 娓叉煋鍣ㄧ粦瀹歩d鍚庯紝灏嗕細寮€濮嬫覆鏌撶粦瀹氱敤鎴风殑瑙嗛鐢婚潰;
    * @param {string} identifer - 鐢ㄦ埛id
    */
    setIdentifer: function (identifer) {
        this.render.setIdentifer(identifer);
    },

    /**
    * 鑾峰彇娓叉煋鍣ㄧ粦瀹氱殑鐢ㄦ埛id
    * @returns {string} 缁戝畾鐢ㄦ埛鐨刬d
    */
    getIdentifer: function () {
        return this.render.getIdentifer();
    },

    /**
    * 娓叉煋鍣ㄦ槸鍚︾┖闂插彲鐢ㄣ€�
    * @returns {boolean} 鎺т欢鏄惁绌洪棽鍙敤锛宼rue 鏄紝false 鍚�;
    */
    isFreeRender: function () {
        return this.render.isFreeRender();
    },

    /**
    * 瑙嗛甯ф埅鍥�.<br/>
    * 瀵规覆鏌撳櫒鐨勫綋鍓嶇敾闈㈣繘琛屾埅鍥�.
    * @returns {string} 鎴浘鐨刡ase64缂栫爜鏁版嵁,濡傛灉鎴浘澶辫触锛岃繑鍥炵┖瀛楃涓�;
    */
    snapShot: function () {
        return this.render.snapShot();
    },

    /**
    * 璁剧疆鏄惁涓鸿緟璺棰戞覆鏌撳櫒.<br/>
    * 灞忓箷鍒嗕韩閫氳繃杈呰矾娴佽繘琛屼紶杈�; 灏嗘覆鏌撳櫒璁剧疆涓鸿緟璺棰戞覆鏌撳櫒锛屽皢浼氭覆鏌撳睆骞曞垎浜殑鐢婚潰;<br/>
    * 璁剧疆杈呰矾瑙嗛娓叉煋鍣ㄥ悗锛屼笉闇€瑕佽缃娓叉煋鍣ㄧ殑identifier浜嗭紝鍥犱负涓€涓埧闂村唴鍙湁涓€璺緟娴侊紝鍗冲悓涓€鏃跺埢鍙兘涓€涓敤鎴峰崰鐢�;
    * @param {boolean} bAuxRoad - 鏄惁涓鸿緟璺棰戞覆鏌撳櫒.
    */
    setAuxRoadVideo: function (bAuxRoad) {
        return this.render.setAuxRoadVideo(bAuxRoad);
    },

    /**
    * 鑾峰彇鏄惁涓鸿緟璺棰戞覆鏌撳櫒.
    * @returns {boolean} 鏄惁涓鸿緟璺棰戞覆鏌撳櫒;
    */
    getAuxRoadVideo: function (bAuxRoad) {
        return this.render.getAuxRoadVideo();
    },

    /**
    * 璁剧疆娓叉煋鍣ㄧ殑娓叉煋妯″紡.
    * @param {E_iLiveRenderMode} mode - 娓叉煋妯″紡
    */
    setRenderMode: function (mode) {
        this.render.setRenderMode(mode);
    },
}

/**
* 鏃佽矾鎺ㄦ祦鍙傛暟
* @class
* @constructor
* @param {E_iLivePushDataType} dataType - 鎺ㄦ祦鏁版嵁绫诲瀷
* @param {E_iLivePushEncode} encode - 鎺ㄦ祦鏁版嵁缂栫爜鏂瑰紡
* @param {E_iLivePushRecordFileType} fileType - 褰曞埗鏂囦欢绫诲瀷
*/
function ILivePushStreamOption(dataType, encode, fileType) {
    this.dataType = dataType;
    this.encode = encode;
    this.fileType = fileType;
}

/**
* 褰曞埗鍙傛暟
* @class
* @constructor
* @param {E_iLiveRecordDataType} dataType - 褰曞埗鐨勬暟鎹被鍨�
* @param {string} fileName - 褰曞埗鍚庣殑鏂囦欢鍚�
*/
function ILiveRecordOption(dataType, fileName) {
    this.dataType = dataType;
    this.fileName = fileName;
}

/**
 * 娑堟伅鍏冪礌绫诲瀷
 * @readonly
 * @enum {number}
 */
var E_iLiveMessageElemType = {
    /** 鏂囨湰娑堟伅 */
    TEXT: 0,
    /** 鑷畾涔夋秷鎭紝娑堟伅鍐呭涓簊tring銆備笟鍔″眰璐熻矗瑙ｆ瀽 */
    CUSTOM: 1,
};

/**
 * 鎴块棿鍐呬簨浠剁被鍨�
 * @readonly
 * @enum {number}
 */
var E_iLiveRoomEventType = {
    /** 鎵撳紑鎽勫儚澶� */
    HAS_CAMERA_VIDEO: 3,
    /** 鍏抽棴鎽勫儚澶� */
    NO_CAMERA_VIDEO: 4,
    /** 鎵撳紑灞忓箷鍒嗕韩 */
    HAS_SCREEN_VIDEO: 7,
    /** 鍏抽棴灞忓箷鍒嗕韩 */
    NO_SCREEN_VIDEO: 8,
    /** 鎵撳紑鏂囦欢鎾斁 */
    HAS_MEDIA_VIDEO: 9,
    /** 鍏抽棴鏂囦欢鎾斁 */
    NO_MEDIA_VIDEO: 10,
};

/**
 * 鎺ㄦ祦鏁版嵁绫诲瀷
 * @readonly
 * @enum {number}
 */
var E_iLivePushDataType = {
    /** 鎽勫儚澶� */
    CAMERA: 0,
    /** 杈呰矾 */
    SCREEN: 1,
};

/**
 * 褰曞埗鏁版嵁绫诲瀷
 * @readonly
 * @enum {number}
 */
var E_iLiveRecordDataType = {
    /** 鎽勫儚澶� */
    CAMERA: 0,
    /** 杈呰矾 */
    SCREEN: 1,
};

/**
 * 鎺ㄦ祦鏁版嵁缂栫爜绫诲瀷
 * @readonly
 * @enum {number}
 */
var E_iLivePushEncode = {
    HLS: 0x1,
    FLV: 0x2,
    RAW: 0x4,
    RTMP: 0x5,
    HLS_AND_RTMP: 0x6,
};

/**
 * 褰曞埗鏂囦欢绫诲瀷
 * @readonly
 * @enum {number}
 */
var E_iLivePushRecordFileType = {
    /** 涓嶅綍鍒讹紝榛樿銆傛帶鍒跺彴濡傛灉璁剧疆浜嗚嚜鍔ㄥ綍鍒跺垯浠ユ帶鍒跺彴閰嶇疆涓哄噯 */
    NONE: 0,
    HLS: 1,
    FLV: 2,
    HLS_FLV: 3,
    MP4: 4,
    HLS_MP4: 5,
    FLV_MP4: 6,
    HLS_FLV_MP4: 7,
};

/**
 * 璁惧鎿嶄綔绫诲瀷
 * @readonly
 * @enum {number}
 */
var E_iLiveOperType = {
    /** 鎵撳紑鎽勫儚澶� */
	Open_Camera: 1,
    /** 鍏抽棴鎽勫儚澶� */
	Close_Camera: 2,
    /** 鎵撳紑楹﹀厠椋� */
	Open_Mic: 7,
    /** 鍏抽棴楹﹀厠椋� */
	Close_Mic: 8,
    /** 鎵撳紑鎵０鍣� */
	Open_Player: 9,
    /** 鍏抽棴鎵０鍣� */
	Close_Player: 10,
    /** 鎵撳紑灞忓箷鍒嗕韩 */
	Open_Screen_Share: 11,
    /** 鍏抽棴灞忓箷鍒嗕韩 */
	Close_ScreenShare: 12,
};

/**
 * 娓叉煋鍣ㄦā寮�
 * @readonly
 * @enum {number}
 */
var E_iLiveRenderMode = {
    /** 鏍规嵁瑙嗛鐢婚潰姣斾緥缂╂斁锛屼笉瓒崇殑濉厖榛戣竟 */
	RenderMode_BlackBorder: 0,
    /** 鎷変几鐢婚潰鍒版覆鏌撴帶浠跺ぇ灏� */
	RenderMode_FullWnd: 1,
};

/**
 * 杩涘叆鎴块棿鐨勬潈闄愪綅
 * @readonly
 * @enum {number}
 */
var E_iLiveAuthBits = {
    /** 涓绘挱鏉冮檺浣�(鎵€鏈夋潈闄�) */
    AuthBit_LiveMaster: 0xFFFFFFFF,
    /** 杩為害瑙備紬鏉冮檺浣�(鍑轰簡鍒涘缓鎴块棿涔嬪鐨勬墍鏈夋潈闄�) */
    AuthBit_LiveGuest: 0xFFFFFFFE,
    /** 鏅€氳浼楁潈闄愪綅(鍙湁涓嬭鏁版嵁鏉冮檺) */
    AuthBit_Guest: 0x000000AA,
};

/**
 * sdk閫氫俊閫氶亾绫诲瀷
 * @readonly
 * @enum {number}
 */
var E_ChannelMode = {
    /** IMSDKRestAPI閫氶亾,蹇呴』鍦ㄨ繘鎴挎椂甯︿笂tls鍔犲瘑鐗堟湰鐨刾rivateMapKey(榛樿) */
    E_ChannelIMRestAPI: 0,
    /** IMSDK閫氶亾(iLiveSDK 1.9.0.0涔嬪墠鐨勭増鏈墍鐢ㄧ殑閫氶亾) */
    E_ChannelIMSDK: 1,
};