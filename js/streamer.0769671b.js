(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["streamer"],{"33ce":function(t,e,n){"use strict";var i=n("4b3e"),o=n.n(i);o.a},"4b3e":function(t,e,n){},"6a01":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"frow centered"},[n("DesktopCapturer",{ref:"capturer",attrs:{enableVideo:t.isVideo},on:{isSharing:t.onIsSharing,gotStream:t.onGotStream,setDefaults:t.onSetDefaults}}),n("StreamerConnection",{ref:"connection",attrs:{bandwidth:t.bandwidth,codecs:t.codecs,roomId:t.room_id,roomPassword:t.room_password},on:{sessionId:t.onSessionId,viewerCount:t.onViewerCount}}),n("div",{staticClass:"col-md-1-2"},[n("LogoSvg",{attrs:{id:"logo"}}),n("div",{class:{live:t.isSharingOn&&t.sessionId},attrs:{id:"live-indicator"}},[t._v("LIVE")])],1),n("div",{staticClass:"col-md-1-2"},[t.isSharingOn&&t.sessionId?t._e():n("section",{attrs:{id:"setup-section"}},[n("label",{staticClass:"row-start",attrs:{id:"room-id-label"}},[n("span",{staticClass:"shrink-0"},[t._v("2n.fm/")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.room_id,expression:"room_id"}],attrs:{id:"room-id",type:"text",placeholder:"Random"},domProps:{value:t.room_id},on:{change:t.setRoomName,blur:t.setRoomName,input:function(e){e.target.composing||(t.room_id=e.target.value)}}})]),n("section",{attrs:{id:"options",hidden:""}},[n("div",{staticClass:"label"},[t._v("Options")]),n("div",{staticClass:"frow row-start gutters"},[t._m(0),n("div",{staticClass:"col-xs-1-2"},[n("div",{staticClass:"settings-item"},[n("label",[t._v("Codec"),n("select",{attrs:{id:"codecs"},on:{change:t.setCodecs}},[n("option",{attrs:{value:"default",selected:""}},[t._v("Default (VP8)")]),n("option",{attrs:{value:"vp8"}},[t._v("VP8")]),n("option",{attrs:{value:"vp9"}},[t._v("VP9")]),n("option",{attrs:{value:"h264"}},[t._v("H264")])])])])]),n("div",{staticClass:"col-xs-1-2"},[n("div",{staticClass:"settings-item mb-0"},[n("label",[t._v("Bandwidth"),n("input",{attrs:{id:"bandwidth",type:"text",value:"",placeholder:"Optional: 8192, 1048, 512, etc."},on:{change:t.setBandwidth}})])])]),t._m(1)])]),n("section",{attrs:{id:"stream-section"}},[n("div",{attrs:{id:"start"}},[n("div",{staticClass:"label"},[t._v("Start")]),n("div",{staticClass:"frow gutters"},[n("div",{staticClass:"col-xs-1-2"},[n("div",{staticClass:"stream-button",attrs:{id:"video-button"},on:{click:function(e){return t.startStream(!0)}}},[n("div",{staticClass:"frow column-center"},[n("VideoSvg"),t._v("Video")],1)])]),n("div",{staticClass:"col-xs-1-2"},[n("div",{staticClass:"stream-button",attrs:{id:"audio-button"},on:{click:function(e){return t.startStream()}}},[n("div",{staticClass:"frow column-center"},[n("AudioSvg"),t._v("Audio Only")],1)])])])])])]),t.isSharingOn&&t.sessionId?n("section",{attrs:{id:"stop-section"}},[n("router-link",{attrs:{id:"public-link",to:t.sessionId,target:"_blank"}},[t._v(t._s("2n.fm/"+t.sessionId))]),n("div",{staticClass:"viewer-count"},[n("span",{attrs:{id:"viewer-count-number"}}),t._v(t._s(t.viewerCount)+" "+t._s(1===t.viewerCount?"Viewer":"Viewers")+" ")]),n("button",{attrs:{id:"stop-sharing",type:"button"},on:{click:t.stopStream}},[t._v("End Sharing")])],1):t._e(),t._m(2)])],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-xs-1-2"},[n("div",{staticClass:"settings-item"},[n("label",[t._v("Resolution"),n("select",{attrs:{id:"resolutions"}},[n("option",{attrs:{value:"fit-screen",selected:""}},[t._v("Fit Screen")]),n("option",{attrs:{value:"4K"}},[t._v("4K (2160p)")]),n("option",{attrs:{value:"1080p"}},[t._v("Full-HD (1080p)")]),n("option",{attrs:{value:"720p"}},[t._v("HD (720p)")]),n("option",{attrs:{value:"480p"}},[t._v("SD (480p)")]),n("option",{attrs:{value:"360p"}},[t._v("SD (360p)")])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-xs-1-2"},[n("div",{staticClass:"settings-item mb-0"},[n("label",[t._v("Room Password"),n("input",{attrs:{id:"room_password",type:"password",value:"",placeholder:"Optional"}})])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"frow width-100 mt-20"},[n("a",{staticClass:"text-underline",attrs:{href:"https://caniuse.com/#search=getDisplayMedia",rel:"noreferrer",target:"_blank"}},[t._v("OS and Browser Limitations")])])}],s=(n("ac1f"),n("5319"),n("498a"),n("8923")),a={functional:!0,render(t,e){const{_c:n,_v:i,data:o,children:s=[]}=e,{class:a,staticClass:c,style:r,staticStyle:d,attrs:l={},...u}=o;return n("svg",{class:[a,c],style:[r,d],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},l),...u},s.concat([n("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[n("path",{attrs:{d:"M1 18v3h3c0-1.7-1.3-3-3-3zm0-4v2c2.8 0 5 2.2 5 5h2c0-3.9-3.1-7-7-7zm0-4v2c5 0 9 4 9 9h2c0-6.1-4.9-11-11-11zm20-7H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}})])]))}},c={functional:!0,render(t,e){const{_c:n,_v:i,data:o,children:s=[]}=e,{class:a,staticClass:c,style:r,staticStyle:d,attrs:l={},...u}=o;return n("svg",{class:[a,c],style:[r,d],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},l),...u},s.concat([n("path",{attrs:{d:"M2 6h3.828c-1.335 2.905-1.335 9.096 0 12H2c-1.311-1.108-2-3.551-2-5.995C0 9.555.692 7.105 2 6zm22 6.005c.005 8.031-3.145 12.864-6.121 11.864-.774-.26-9.567-5.579-9.567-5.579-1.993-2.22-1.993-10.288 0-12.508 0 0 9.161-5.476 9.548-5.633 2.691-1.086 6.136 3.82 6.14 11.856zm-3.383-7.693c-1.053-2.264-3.002-2.226-4.034.002-.588 1.271-.993 3.165-1.21 4.797h.527c1.587 0 2.873 1.287 2.873 2.875s-1.286 2.875-2.873 2.875h-.515c.217 1.603.616 3.538 1.206 4.89.988 2.271 3.062 2.232 4.033-.002 1.946-4.477 1.772-11.609-.007-15.437z"}})]))}},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},d=[],l=(n("4160"),n("159b"),n("96cf"),n("1da1")),u={name:"DesktopCapturer",props:{enableVideo:Boolean},data:function(){return{isSharing:!1,enableAudio:!1}},watch:{isSharing:function(t){this.$emit("isSharing",t)}},methods:{setDefaults:function(){this.$emit("setDefaults"),this.isSharing=!1},startStream:function(){this.setDefaults(),this.isSharing=!0,this.enableAudio=!0,this.captureDesktop()},stopStream:function(){this.isSharing=!1,this.setDefaults()},captureDesktop:function(){this.onAccessApproved()},onAccessApproved:function(){var t=this,e={video:{},audio:{autoGainControl:!1,echoCancellation:!1,noiseSuppression:!1,googDisableLocalEcho:!1}},n=function(){var n=Object(l["a"])(regeneratorRuntime.mark((function n(){var i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,navigator.mediaDevices.getDisplayMedia(e);case 3:i=n.sent,n.next=9;break;case 6:n.prev=6,n.t0=n["catch"](0),t.setDefaults();case 9:return n.abrupt("return",i);case 10:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(){return n.apply(this,arguments)}}(),i=function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:i=e.sent,t.enableVideo||0!==i.getAudioTracks().length||alert('Make sure to check the "Share audio" box in Google Chrome'),t.gotStream(i);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();i()},gotStream:function(t){var e=this;t?(t.addEventListener("inactive",(function(){e.setDefaults()})),this.addStreamStopListener(t,(function(){e.setDefaults()})),this.$emit("gotStream",t)):this.setDefaults()},addStreamStopListener:function(t,e){var n="ended";"oninactive"in t&&(n="inactive"),t.addEventListener(n,(function(){e(),e=function(){}}),!1),t.getAudioTracks().forEach((function(t){t.addEventListener(n,(function(){e(),e=function(){}}),!1)})),t.getVideoTracks().forEach((function(t){t.addEventListener(n,(function(){e(),e=function(){}}),!1)}))}}},h=u,v=n("2877"),f=Object(v["a"])(h,r,d,!1,null,null,null),m=f.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},g=[],w=(n("a9e3"),n("d093"),n("cd68")),S=n.n(w),_=n("3da5"),C=n("e854"),b={name:"StreamerConnection",props:{bandwidth:{type:Number,default:8192},codecs:{type:String,default:"default"},roomPassword:{type:String,default:""},roomId:{type:String,default:""}},data:function(){return{connection:null}},mounted:function(){var t=this;window.addEventListener("offline",(function(){t.connection&&t.connection.attachStreams.length&&t.setDefaults()}),!1),window.addEventListener("online",(function(){t.connection&&t.setDefaults()}),!1)},methods:{shareStreamUsingRTCMultiConnection:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.connection=new S.a,this.connection.socketURL="https://api.2n.fm:9001/",this.connection.autoCloseEntireSession=!0,this.connection.socketMessageEvent="desktopCapture",this.connection.password=null,this.roomPassword&&this.roomPassword.length&&(this.connection.password=this.roomPassword),this.connection.enableLogs=!1,this.connection.session={audio:!0,video:!0,data:!0,oneway:!0},this.connection.candidates={stun:!0,turn:!0},this.connection.iceTransportPolicy="relay",this.connection.iceProtocols={tcp:!0,udp:!0},this.connection.optionalArgument={optional:[],mandatory:{}},this.connection.channel=this.connection.sessionid=this.connection.userid,this.roomId&&this.roomId.length&&(this.connection.channel=this.connection.sessionid=this.connection.userid=this.roomId),this.connection.autoReDialOnFailure=!0,this.connection.getExternalIceServers=!1,this.connection.iceServers=C["a"].getIceServers(),this.connection.processSdp=function(t){return e.bandwidth&&e.bandwidth&&!isNaN(e.bandwidth)&&"NaN"!=e.bandwidth&&"number"==typeof e.bandwidth&&(t=I(t,e.bandwidth),t=_["a"].setVideoBitrates(t,{min:e.bandwidth,max:e.bandwidth})),e.codecs&&"default"!==e.codecs&&(t=_["a"].preferCodec(t,e.codecs)),t},this.connection.sdpConstraints.mandatory={OfferToReceiveAudio:!1,OfferToReceiveVideo:!1},this.connection.onstream=this.connection.onstreamended=function(t){try{t.mediaElement.pause(),delete t.mediaElement}catch(e){}},this.connection.dontCaptureUserMedia=!0,this.connection.attachStreams.push(t),!n&&this.connection.attachStreams[0].getVideoTracks().length>0&&this.connection.attachStreams[0].removeTrack(this.connection.attachStreams[0].getVideoTracks()[0]);var i="-",o=setInterval((function(){return e.connection?e.connection.isInitiator?(e.setViewerCount(0),void clearInterval(o)):(i+=" -",i.length>6&&(i="-"),void e.setViewerCount(i)):(e.setViewerCount(0),void clearInterval(o))}),500);this.connection.socketCustomEvent=this.connection.sessionid;var s=function(t,n,i){i&&alert(i),e.$emit("sessionId",e.connection.sessionid),e.setViewerCount(0),e.connection.socket.on(e.connection.socketCustomEvent,(function(t){t.receivedYourScreen&&e.setViewerCount(e.connection.isInitiator?e.connection.getAllParticipants().length:0)}))};this.connection.onSocketDisconnect=function(){e.connection.getAllParticipants().length>0||e.setDefaults()},this.connection.onSocketError=function(){alert("Unable to connect to the server. Please try again."),setTimeout((function(){e.setDefaults()}),1e3)},this.connection.onmessage=function(t){t.data.newChatMessage&&e.connection.send({receivedChatMessage:!0,checkmark_id:t.data.checkmark_id})},this.connection.open(this.connection.sessionid,s);this.connection.onleave=this.connection.onPeerStateChanged=function(){var t=e.connection.getAllParticipants().length;e.setViewerCount(e.connection.isInitiator?t:0)}},setViewerCount:function(t){this.$emit("viewerCount",t)},setDefaults:function(){if(this.connection){this.connection.attachStreams.forEach((function(t){try{t.getTracks().forEach((function(t){try{t.stop()}catch(e){}}))}catch(e){}}));try{this.connection.close()}catch(t){}try{this.connection.closeSocket()}catch(t){}clearInterval(this.connection.looper),this.connection=null}this.setViewerCount(0)}}};function I(t,e){return t=t.replace(/b=AS([^\r\n]+\r\n)/g,""),t=t.replace(/a=mid:video\r\n/g,"a=mid:video\r\nb=AS:"+e+"\r\n"),t}var k=b,E=Object(v["a"])(k,p,g,!1,null,null,null),V=E.exports,y={name:"Streamer",components:{LogoSvg:s["a"],VideoSvg:a,AudioSvg:c,DesktopCapturer:m,StreamerConnection:V},data:function(){return{isSharingOn:!1,sessionId:null,desktop_id:null,constraints:null,room_password:"",room_id:window.localStorage.getItem("room_id")||"",codecs:"default",bandwidth:null,isVideo:!1,streaming_method:"RTCMultiConnection",viewerCount:0}},mounted:function(){},methods:{startStream:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.isVideo=t,this.$refs.connection.connection&&this.$refs.connection.connection.attachStreams[0]?this.onSetDefaults():(this.room_id="",window.localStorage.getItem("room_id")&&(this.room_id=window.localStorage.getItem("room_id")),this.$refs.capturer.startStream())},stopStream:function(){this.$refs.capturer.stopStream()},setRoomName:function(){this.room_id=this.room_id.trim().replace(/\s+/g,"-").replace(/[^a-zA-Z0-9-_]/g,"").toLowerCase(),window.localStorage.setItem("room_id",this.room_id)},setBandwidth:function(t){try{this.bandwidth=parseInt(t)}catch(e){this.bandwidth=null}},setCodecs:function(t){this.codecs=t},onGotStream:function(t){this.$refs.connection.shareStreamUsingRTCMultiConnection(t,this.isVideo)},onSessionId:function(t){this.sessionId=t},onSetDefaults:function(){this.$refs.connection.setDefaults()},onIsSharing:function(t){this.isSharingOn=t},onViewerCount:function(t){this.viewerCount=t}}},D=y,A=(n("33ce"),Object(v["a"])(D,i,o,!1,null,"0072f113",null));e["default"]=A.exports},a9e3:function(t,e,n){"use strict";var i=n("83ab"),o=n("da84"),s=n("94ca"),a=n("6eeb"),c=n("5135"),r=n("c6b6"),d=n("7156"),l=n("c04e"),u=n("d039"),h=n("7c73"),v=n("241c").f,f=n("06cf").f,m=n("9bf2").f,p=n("58a8").trim,g="Number",w=o[g],S=w.prototype,_=r(h(S))==g,C=function(t){var e,n,i,o,s,a,c,r,d=l(t,!1);if("string"==typeof d&&d.length>2)if(d=p(d),e=d.charCodeAt(0),43===e||45===e){if(n=d.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(d.charCodeAt(1)){case 66:case 98:i=2,o=49;break;case 79:case 111:i=8,o=55;break;default:return+d}for(s=d.slice(2),a=s.length,c=0;c<a;c++)if(r=s.charCodeAt(c),r<48||r>o)return NaN;return parseInt(s,i)}return+d};if(s(g,!w(" 0o1")||!w("0b1")||w("+0x1"))){for(var b,I=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof I&&(_?u((function(){S.valueOf.call(n)})):r(n)!=g)?d(new w(C(e)),n,I):C(e)},k=i?v(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;k.length>E;E++)c(w,b=k[E])&&!c(I,b)&&m(I,b,f(w,b));I.prototype=S,S.constructor=I,a(o,g,I)}}}]);
//# sourceMappingURL=streamer.0769671b.js.map