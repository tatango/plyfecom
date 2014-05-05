/* $Id: mtr.js 141623 2014-04-04 15:41:57Z hetal.thakkar $ */
/*! mtr 04-04-2014 */
!function(a,b){"use strict";"function"==typeof define&&define.amd?define("auth/gateway/creatives",["jquery/nyt"],function(a){return b(a)}):"object"==typeof a.NYTD&&(NYTD.GatewayCreatives=b(NYTD.jQuery||window.jQuery))}(this,function(){var a=encodeURIComponent(window.location.protocol+"//")+window.location.host+encodeURIComponent(window.location.pathname)+window.location.search;return{defaultPayCreative:['<div style="color: #000 !important; text-align: left !important; padding: 10px 10px 10px 15px; border: 5px solid #8f8c89 ; width: 751px ; margin: 0 auto ; height: 375px ; background: #ffffff ; -moz-border-radius: .8em !important; -webkit-border-radius: .8em !important; border-radius: .8em !important;">',"<div>",'<p style="font-family: georgia, verdana, serif !important; font-size: 27px !important; font-weight: bold !important; font-style: normal !important; margin: 10px 0 0 0; line-height: 130% !important;">',"Thank you for visiting NYTimes.com","</p>","</div>","<div>",'<div style="width: 460px; margin-right: 5px; float: left;">','<p style="font-family: georgia, verdana, serif !important; font-style: normal !important; margin: 22px 0 0 0; font-size: 15px !important; line-height: 140% !important;">',"If you are already a subscriber ",'<a class="sitewideLogInModal login-modal-trigger" style="color: #blue; text-decoration: underline; color: #002c5e; cursor:pointer;" id="NYTDGWY_login" href="https://myaccount.nytimes.com/auth/login">log in here</a>.',"</p>",'<p style="font-family: georgia, verdana, serif !important; font-style: normal !important; margin: 22px 0 0 0; font-size: 15px !important; line-height: 140% !important;">',"To see subscription options ",'<a data-content-collection="GWtoDSLP"  data-content-placement="1" style="color: #blue; text-decoration: underline; color: #002c5e; cursor:pointer;" id="NYTDGWY_LP" href="http://www.nytimes.com/subscriptions/Multiproduct/lp87JHJ.html?campaignId=44U9H">click here</a>.',"</p>","</div>",'<div style="width: 280px; float: left; margin: 35px 0 0 0;">','<img src="http://graphics8.nytimes.com/subscriptions/gateway/gw1/img/devices-white.jpg" alt="" width="280" height="150" alt="The New York Times Digital Platforms"/>',"</div>",'<div style="clear: both; margin: 0; padding-top: 10px;">','<div style="float: right; width: 220px; text-align: right;">','<img src="http://graphics8.nytimes.com/subscriptions/gateway/gw1/img/nyt-logo-white.gif" alt="The New York Times" width="195" height="31"/>',"</div>","</div>",'<div style="position: absolute;bottom: 20px;">','<p style="font-family: georgia, verdana, serif !important; font-style: normal !important; margin: 22px 0 0 0; font-size: 15px !important; line-height: 140% !important;">',"For questions about your account, contact Customer Care at ",'<a style="color: #blue; text-decoration: underline; color: #002c5e; cursor:pointer;" href="tel:18005919233">1-800-591‑9233</a>.',"</p>","</div>","</div>","</div>"].join("\n"),defaultRegiCreative:['<div style="width:775px !important; height:402px !important; margin: 0 auto; background-color:#FFF; position: relative !important;">','<div id="register-at-btn" style="position: absolute !important; top:165px !important; left:259px !important; display: block; width:260px !important; height:100px !important;">','<a href="#" style="padding:6px 100px !important;background-color:#5874c0 !important;color:#FFF !important;text-decoration: none !important;font-family: Arial, Helvetica, sans-serif !important;font-size:16px !important;">Register</a>',"</div>",'<div style="position: absolute !important; top:250px !important; left:21px !important; width:733px !important; height: 131px !important; background-color:#f2f2f2 !important; border-top: 1px solid #c0c0c0 !important;">','<div style="float:left;">','<p style="padding-left: 152px !important;font-family: Arial, Helvetica, sans-serif !important;font-size:15px !important; color: #2e2e2e !important; margin-top:15px;">Already registered?</p>','<p style="padding-left: 152px !important;font-family: Arial, Helvetica, sans-serif !important;font-size:15px !important; color: #2e2e2e !important; margin-top:-10px;"><a data-content-collection="RWtoLogin" href="https://myaccount.nytimes.com/auth/login" style="text-decoration:none;color:#5874c0;font-weight: bold;">Log In &raquo;</a></p>',"</div>",'<div style="float:left;">','<p style="padding-left: 100px !important;font-family: Arial, Helvetica, sans-serif;font-size:15px; color: #2e2e2e; margin-top:15px; line-height:18.75px;">Or, subscribe now and get<br />unlimited access to all of our articles.<br /><span style="font-weight:bold !important">Just 99¢ for your first 4 weeks.</span></p>','<p style="padding-left: 100px !important;font-family: Arial, Helvetica, sans-serif;font-size:15px; color: #2e2e2e; margin-top:-10px; line-height:18.75px;"><a data-content-collection="RWtoDSLP"  data-content-placement="1" href="http://www.nytimes.com/subscriptions/Multiproduct/lp5558.html?campaignId=368YY" style="text-decoration:none;color:#5874c0;font-weight: bold !important; margin-top:12px !important;">See subscription options &raquo;</a></p>','<p style="margin-top:20px !important;margin-bottom:none !important;padding-left: 100px !important;font-family: Arial, Helvetica, sans-serif;font-size:13px; line-height:16.25px;"><a data-content-collection="RWtoTOS" href="http://www.nytimes.com/content/help/rights/terms/terms-of-service.html" style="color:#5874c0;">Terms of Service</a> | <a data-content-collection="RWtoPP" href="http://www.nytimes.com/content/help/rights/privacy/policy/privacy-policy.html" style="color:#5874c0;">Privacy Policy</a></p>',"</div>","</div>",'<div id="register-at-box" style="position: absolute !important; top:151px !important; left:207px !important; display: none; width:360px !important; height:310px !important; background-color: #FFF !important; border: 1px solid #dedede !important; -webkit-box-shadow: 0 0 7px #ccc !important; -moz-box-shadow: 0 0 7px #ccc !important; box-shadow: 0 0 7px #ccc !important;">','<div style="width:340px !important; height:20px !important; margin:auto !important; padding-top: 7px !important; border-bottom: 1px solid #c0c0c0 !important; position: relative !important; margin-bottom: 16px !important;">','<a id="close-register-at-box" href="#" style="position: absolute !important; display: block !important; top:0 !important; right: 0 !important; width: 54px !important; height: 26px !important;"><img src="http://graphics8.nytimes.com/subscriptions/regiwall/close.png" alt="CLOSE" border="0"/></a><span style="font-family: Arial, Helvetica, sans-serif !important;font-size:10px !important; color: #2e2e2e !important;">REGISTER AT NYTIMES.COM</span>',"</div>",'<div style="float:left;display:inline;width:128px !important;text-align:right !important;padding-bottom:10px !important;padding-right:10px !important;padding-top:3px !important;">','<span style="font-family: Arial, Helvetica, sans-serif !important;font-size:11px !important; color: #2e2e2e !important;">E-Mail:</span>',"</div>",'<form id="gateway_form" method="post" action="https://myaccount.nytimes.com/register?URI='+a+'&amp;ssp=1">','<input id="regiWall_isContinue" type="hidden" name="is_continue" value="false">','<input id="regiWallToken" type="hidden" name="token">','<input id="regiWallExpires" type="hidden" name="expires">','<div style="float:left !important;display:inline !important;width:200px !important;padding-bottom:10px !important;">','<input id="regiwall_email_field" type="email" name="email_address" size="32" style="border: 1px solid #bdbab8 !important; width:160px !important;line-height:18px !important; height:20px;">',"</div>",'<div style="float:left !important;clear:both !important;display:inline !important;width:138px !important;text-align:right !important;padding-top: 3px !important;padding-bottom:10px !important;">','<span style="font-family: Arial, Helvetica, sans-serif !important;font-size:11px !important; color: #2e2e2e !important;padding-right:10px !important;">Password:</span>',"</div>",'<div style="float:left !important;display:inline !important;width:200px !important;padding-bottom:10px !important;">','<input id="regiwall_password1_field" type="password" name="password1" size="32" style="border: 1px solid #bdbab8; width:160px;line-height:18px !important;height:20px;">',"</div>",'<div style="float:left !important;clear:both !important;display:inline !important;width:138px !important;text-align:right !important;padding-top: 3px !important;padding-bottom:10px !important;">','<span style="font-family: Arial, Helvetica, sans-serif;font-size:11px; color: #2e2e2e;padding-right:10px;">Retype Password:</span>',"</div>",'<div style="float:left;display:inline;width:200px;padding-bottom:10px !important;">','<input id="regiwall_password2_field" type="password" name="password2" size="32" style="border: 1px solid #bdbab8 !important; width:160px !important;line-height:18px !important;height:20px;">',"</div>",'<div style="clear:both !important; width:200px !important;margin-left:138px !important;">','<!--<input type="checkboxXXX" name="receive-updates" style="float:left !important; margin:0 5px 20px 0 !important;">-->','<input id="gateway_update_box" type="checkbox" name="subscribe[]" value="MM" checked="false" style="float:left !important; margin:0 5px 20px 0 !important;">','<p style="font-family: Arial, Helvetica, sans-serif !important;font-size:11px !important; color: #2e2e2e !important; line-height:13.75px">Receive occasional updates and special offers for The New York Times\'s products and services.</p>','<p style="font-family: Verdana, Geneva, sans-serif !important;font-size:9px !important; color: #2e2e2e !important;margin-bottom_XXX:16px !important; line-height:11.25px">Already have an NYTimes.com<br />account? <a data-content-collection="RWtoLogin" href="https://myaccount.nytimes.com/auth/login" style="text-decoration:none !important;color:#004276 !important;">Log In</a>.</p>','<!--<a href="#" style="padding:6px 16px !important;background-color:#5874c0 !important;color:#FFF !important;text-decoration: none !important;font-family: Arial, Helvetica, sans-serif !important;font-size:12px !important;">Create My Account</a>-->','<button id="gateway_form_submit" type="submit" style="padding:6px 16px !important;background-color:#5874c0 !important;color:#FFF !important;text-decoration: none !important;font-family: Arial, Helvetica, sans-serif !important;font-size:12px !important;">Create My Account</button>',"</div>",'<div id="regiWallEmptyEmailError"     class="regiWallError" style="padding-left:100px; color:#bb111d; display:none">Please enter your e-mail address.</div>','<div id="regiWallInvalidEmailError"   class="regiWallError" style="padding-left:100px; color:#bb111d; display:none">Please enter a valid e-mail address.</div>','<div id="regiWallPasswordMatchError"  class="regiWallError" style="padding-left:100px; color:#bb111d; display:none">Passwords entries must match.</div>','<div id="regiWallPasswordLengthError" class="regiWallError" style="padding-left:100px; color:#bb111d; display:none">Passwords must be between 5 and 15 characters.</div>','<div id="regiWallRequiredEmptyError"  class="regiWallError" style="padding-left:100px; color:#bb111d; display:none">Please fill in all the fields.</div>',"</form>","</div>",'<div style="width:773px !important; height: 400px !important; border: 1px solid #000 !important;">','<div style="width:734px !important; margin:auto !important; border-bottom: 1px solid #c0c0c0 !important;">','<img src="http://graphics8.nytimes.com/subscriptions/regiwall/Times-logo.png" alt="The New York Times" border="0" style="padding-left: 261px !important;"/>',"</div>",'<div style="text-align:center !important;margin-top: 28px !important;">','<span style="font-family: Times, serif !important;font-size:26px !important; color: #5874c0 !important;">To continue reading this article, please log in or register for free.</span><br/>','<span style="font-family: Arial, Helvetica, sans-serif !important;font-size:15px !important; color: #2e2e2e !important;">As a registered user, you\'ll also enjoy recommendations and the ability to save, comment, and share.</span>',"</div>","</div>","</div>"].join("\n")}}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("auth/gateway",["jquery/nyt","auth/gateway/creatives"],function(a,c){return b(a,c,"NYT5")}):"object"==typeof a.NYTD&&(NYTD.Gateway=b(NYTD.jQuery||window.jQuery,NYTD.GatewayCreatives,"NYT4"))}(this,function(a,b,c){return function(d,e){var f,g=window.location.host.indexOf(".stg.")>0,h="http://www.nytimes.com",i=g?"http://static.stg.nytimes.com":"http://graphics8.nytimes.com",j="regi",k="pay",l=this;"NYT5"===c?f=['<div id="overlay" class="z-index-gateway-overlay" style="',"visibility: visible;","background: transparent;","background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIgc3RvcC1vcGFjaXR5PSIwLjQiLz4KICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgPC9saW5lYXJHcmFkaWVudD4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI2dyYWQtdWNnZy1nZW5lcmF0ZWQpIiAvPgo8L3N2Zz4=);","background: -moz-linear-gradient(top, rgba(255,255,255,0.4) 0%, rgba(255,255,255,1) 100%); /* FF3.6+ */","background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(255,255,255,0.4)), color-stop(100%,rgba(255,255,255,1))); /* Chrome,Safari4+ */","background: -webkit-linear-gradient(top, rgba(255,255,255,0.4) 0%,rgba(255,255,255,1) 100%); /* Chrome10+,Safari5.1+ */","background: -o-linear-gradient(top, rgba(255,255,255,0.4) 0%,rgba(255,255,255,1) 100%); /* Opera 11.10+ */","background: -ms-linear-gradient(top, rgba(255,255,255,0.4) 0%,rgba(255,255,255,1) 100%); /* IE10+ */","background: linear-gradient(to bottom, rgba(255,255,255,0.4) 0%,rgba(255,255,255,1) 100%); /* W3C */","filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#66ffffff', endColorstr='#ffffff',GradientType=0 ); /* IE6-8 */",'position:fixed; width:100%; height:0px; bottom:0; left:0; display: none">',"</div>"].join(""):"NYT4"===c&&(f=['<div id="overlay" style="',"z-index:1000;","background: transparent;","background:-moz-linear-gradient(center bottom , #000, transparent);","background:-ms-linear-gradient(top, transparent, black);","background: -webkit-gradient(linear, left bottom, left top, from(#000), to(transparent));","filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000010', endColorstr='#000000');",'position:fixed; width:100%; height:0px; bottom:0; left:0; display: none">',"</div>"].join(""));var m=function(a){return new RegExp(a+"=([^;]+)","i").test(unescape(document.cookie))?RegExp.$1:null},n=function(){if(!n.ret){var a=m("nyt-m")||getFromLocalStorage("nyt-m")||window.name||"",b=a.match(/v=i.([0-9]+)/);n.ret=b&&b[1]?parseInt(b[1],10):null}return n.ret},o=function(){if(!o.ret){var b=a("meta[name='PT']")[0];b=b&&b.content||"",o.ret=b.replace(/ /g,"")}return o.ret},p=function(){C(f,function(){var b=void 0!==document.body.style.webkitTransition||void 0!==document.body.style.MozTransition||void 0!==document.body.style.OTransition||void 0!==document.body.style.msTransition,c=function(){a("#overlay").css("height",B())};a(window).on("resize",function(){c()}),b||a("#overlay").css("background-image","url("+i+"/images/global/backgrounds/transparentBG.gif)"),c()})};this.webtrendsTrack=function(a,b,c){"TAGX"in window?TAGX.EventProxy.trigger(a,b,c):setTimeout(function(){l.webtrendsTrack(a,b,c)},1e3)};var q=function(b,c){var d={};return a.each(b,function(a,b){c.indexOf(a)>-1&&(d[a]=b)}),d},r=function(a,b,c){var d,e=new RegExp("([?|&])"+b+"=.*?(&|$)","i"),f=-1!==a.indexOf("?")?"&":"?";return d=a.match(e)?a.replace(e,"$1"+b+"="+c+"$2"):a+f+b+"="+c},s=function(a,b){var c,d,e,f=a.attr("href");if(!(!f||f.match(/^javascript:/i)||f.match(/^mailto:/i)||f.match(/^tel:/i)||f.match("#"))){if(f=decodeURIComponent(f),d=f.match("[?|&]goto=([^;]+)"),c=d&&d[1]||null){for(e in b)c=r(c,e,b[e]);f=r(f,"goto",encodeURIComponent(c))}else for(e in b)f=r(f,e,b[e]);a.attr("href",f)}},t=unescape(document.cookie).match("NYT-Edition=([^;]+)"),u={et:{common:{version:"meter at "+n(),region:"FixedCenter",pgtype:o(),priority:!0},load:{module:"Gateway",action:"Impression",eventName:"Impression"},modalLogin:{module:"Gateway-Login",action:"click",eventName:"login-click"},modalRegi:{module:"Gateway-Regi",action:"click",eventName:"regi-click"},links:{module:"Gateway-Links",action:"click",contentCollection:"gateway-links-click"}}};if(d===j){var v={et:{load:{module:"RegiWall",eventName:"Impression"},modalLogin:{module:"RegiWall-Login",eventName:"login-click"},modalRegi:{module:"RegiWall-Regi",eventName:"regi-click"},links:{module:"RegiWall-Links",contentCollection:"regiwall-links-click"},createAcct:{module:"RegiWall-Regi",action:"click"}}};u=a.extend(!0,{},u,v)}var w=function(){var b=d===j?"regiwall-":"gateway-";a("#gatewayUnit a").each(function(){var c,d=u;if(a(this).hasClass("login-modal-trigger"))c="login-click",a(this).on("click",function(){var e=a.extend(!0,{},d.et.common,d.et.modalLogin);l.webtrendsTrack(b+c,e,"interaction")});else if(a(this).hasClass("registration-modal-trigger"))c="regi-click",a(this).on("click",function(){var e=a.extend({},d.et.common,d.et.modalRegi);l.webtrendsTrack(b+c,e,"interaction")});else{var e=q(a(this).data(),["contentCollection","contentPlacement"]),f=a.extend({},d.et.common,d.et.links,e);s(a(this),f)}})},x=function(a,b,c,d){setTimeout(function e(){a()?b():--d&&setTimeout(e,c)},c)},y=function(a,b){b=b||{},x(function(){return window.NYTD&&NYTD.UPTracker&&NYTD.UPTracker.track},function(){NYTD.UPTracker.track({eventType:a,data:b})},100,50)},z=function(){return d===k?t&&"edition|GLOBAL"==t[1]?e&&""!==e?"gateway-global_"+e+".nytimes.com":"gateway-global.nytimes.com":e&&""!==e?"gateway_"+e+".nytimes.com":"gateway.nytimes.com":t&&"edition|GLOBAL"==t[1]?"regiwall-global.nytimes.com":"regiwall.nytimes.com"},A=function(){var b=a(".gateway-anchor").first(),c=a("#masthead .container").first(),d=a(".navigation").first(),e=d.next(".subNavigation"),f=a("#masthead");return b.length>0?b:c.length>0?c:e.length>0?e:d.length>0?d:f.length>0?f:a(document.body)},B=function(){var b=A();return null===b.offset()?"70%":a(window).height()-(b.offset().top+b.height())},C=function(b,c){if(!document.body||!document.body.firstChild)return void setTimeout(function(){C(b,c)},100);var d=b.match(/<script[^>]*>[^<]*<\/script>/gi)||[],e=[];a.each(d,function(){var b=this.match(/src=\"[^\"]*\"/);b?(b=b[0],b=b.substring(5,b.length-1),a.ajaxSetup({cache:!0}),a.ajax({url:b,dataType:"script"}),e.push(this)):this.match(/type *= *\"text\/html\"/)||e.push(this)}),a.each(e,function(){var a=new RegExp(this);b=b.replace(a,"")}),a("body").append(b),c&&c()},D=function(){function e(b){a("#regiWallEmptyEmailError, #regiWallInvalidEmailError, #regiWallPasswordMatchError, #regiWallPasswordLengthError, #regiWallRequiredEmptyError").hide(),a("#"+b).show()}var f,g=5e3,i=!1,k=function(b){var c="";if(clearTimeout(f),!i){if(!b||!b.ads||"object"!=typeof b.ads.Gateway)return l();a.each(b.ads,function(a,b){c+=b.creative}),q(c),x(function(){return a("#gatewayCreative").length},function(){w()},100,50)}},l=function(){clearTimeout(f),i=!0,q(d===j?b.defaultRegiCreative:b.defaultPayCreative),x(function(){return a("#gatewayCreative").length},function(){w()},100,50),y(d===j?"defaultRegiwall":"defaultGwy")},m=function(b){var c=s();a("#regiWallToken").val(b.data.token),a("#regiWallExpires").val((new Date).getTime()+93e4),c&&setTimeout(function(){document.getElementById("regiwall_form").submit()},0)},n=function(){var b=a("#regiwall_form");if(b=b[0]||null,b&&"undefined"!=typeof b.action){var c=window.location.search.replace(/[?&]gwh.*/,"");c=c.substr(1);var d=0===c.length?"?":"&",e=u,f=a.extend(!0,{},e.et.common,e.et.createAcct),g=a.param(f);c+=d+g,c=encodeURIComponent(c),c="&OQ="+c.replace(/%/g,"Q");var h=encodeURIComponent(window.location.protocol+"//")+window.location.host+encodeURIComponent(window.location.pathname)+c;d=-1===b.action.indexOf("?")?"?":"&";var i=b.action+d+"URI="+h;b.setAttribute("action",i)}},o=function(){d===j&&(a("#register-at-btn a").click(function(b){b.preventDefault(),a("#close-register-at-box").length>0&&a("#register-at-btn").hide(),a(".regiWallError").css("display","none"),a("#register-at-box").show()}),a("#close-register-at-box").click(function(b){b.preventDefault(),a("#register-at-box").hide(),a("#register-at-btn").show()}),a("#regiwall_form_submit").on("click",function(){var a=String(String.fromCharCode(97+Math.round(25*Math.random()))+(new Date).getTime()),b=document.createElement("script");return b.src="http://www.nytimes.com/svc/profile/token.jsonp?callback="+a,window[a]=m,document.getElementsByTagName("head")[0].appendChild(b),!1}),a("#regiwall_email_field, #regiwall_password1_field, #regiwall_password2_field").on("blur",r))},q=function(b){p();var d="width:100%; position:fixed; bottom: 80px; display: none; left:0;";"NYT4"===c&&(d+=" z-index: 1000000040;"),b=['<div id="gatewayCreative" class="z-index-gateway-overlay" style="'+d+'">','<div id="gatewayUnit" style="position:relative">'].concat(b).concat(["</div>","</div>"]).join(""),C(b,function(){setTimeout(function(){a("#overlay").fadeIn(),a("#gatewayCreative").fadeIn(),o(),n()},200)})},r=function(b){var c=a(b.target),d=c.attr("id");switch(d){case"regiwall_email_field":""!==c.val()?(a("#regiWallEmptyEmailError").css("display","none"),c.val().match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)?a("#regiWallInvalidEmailError").css("display","none"):a("#regiWallInvalidEmailError").css("display","block")):(a("#regiWallEmptyEmailError").css("display","block"),a("#regiWallInvalidEmailError").css("display","none"));break;case"regiwall_password1_field":case"regiwall_password2_field":var e=a("#regiwall_password1_field").val(),f=a("#regiwall_password2_field").val(),g=e&&e.length||0,h=f&&f.length||0,i=a("#regiWallPasswordMatchError"),j=a("#regiWallPasswordLengthError");"regiwall_password1_field"===d?a("#regiwall_password2_field").val().length>0&&c.val()===f?i.css("display","none"):f>0&&i.css("display","block"):"regiwall_password2_field"===d&&(c.val()===e?i.css("display","none"):i.css("display","block")),g>=5&&15>=g&&h>=5&&15>=h?j.css("display","none"):g>0&&h>0&&j.css("display","block")}},s=function(){var b=1,c=a("#regiwall_email_field"),d=c.val(),f=a("#regiwall_password1_field").val(),g=a("#regiwall_password2_field").val(),h=f&&f.length||0,i=g&&g.length||0;return""===a.trim(d)&&""===a.trim(f)&&""===a.trim(g)?(b=0,e("regiWallRequiredEmptyError")):""===a.trim(d)?(b=0,e("regiWallEmptyEmailError")):d.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)?""===f?(b=0,e("regiWallRequiredEmptyError")):f!==g?(b=0,e("regiWallPasswordMatchError")):(5>h||h>15||5>i||i>15)&&(b=0,e("regiWallPasswordLengthError")):(b=0,e("regiWallInvalidEmailError")),b};a.ajax({url:h+"/adx/bin/adxrun.html?v=3&jsonp=?",dataType:"jsonp",data:{page:z(),positions:"Gateway,gateway_data1"},success:k}),f=setTimeout(l,g)},E=function(){var b;d===j?(b=a.extend({},u.et.common,u.et.load),l.webtrendsTrack("regiwall-load",b,"impression")):(b=a.extend({},u.et.common,u.et.load),l.webtrendsTrack("gateway-load",b,"impression"))},F=function(){var b=function(){c(),e(),d()},c=function(){window.scroll(0,0),a("body").css({overflow:"hidden",margin:"0 0 85px 0","padding-right":"15px"}),a("html").css({overflow:"hidden"}),a(document).off("keypress keydown keyup touchmove"),a(document).on("keypress keydown keyup",function(a){return a.keyCode in{37:"LEFT",38:"UP",39:"RIGHT",40:"DOWN",36:"HOME",35:"END",33:"PAGEUP",34:"PAGEDOWN"}?(a.preventDefault(),!1):void 0}),a(document).on("touchmove",function(a){a.preventDefault()}),window.Event&&"function"==typeof Event.stopObserving&&(Event.stopObserving(document,"keydown"),Event.stopObserving(document,"keyup"),Event.stopObserving(document,"keypress"),Event.stopObserving(window,"keydown"),Event.stopObserving(window,"keyup"),Event.stopObserving(window,"keypress"))},d=function(){a(["#article .articleInline","#article #readerscomment","#article .articleFooter","#article .authorIdentification","#article #articleExtras","#article .articleBottomExtra","#article .emailAlertModule","#article #pageLinks","#twitter-widget-0",".videoplayerContainer","iframe",".slideShowModule","#subscribeCallToAction","#story figure"].join(",")).remove(),a(["#article .articleBody p","#content .entry-content p","#content .postContent p","#story .story-body-text"].join(",")).each(function(b,c){var d=1;if(c=a(c),0===b){var e=c.html();e.length&&e.length<400&&(d=2)}if(b==d){var f=a('<p id="subscribeCallToAction" style="text-align: center; margin-top: 28px; font-family: arial,helvetica,sans-serif; font-size: 1.2em; font-weight: bold;"><a  data-content-collection="GWtoDSLP" data-content-placement="1" class="applicationButtonLt" href="http://www.nytimes.com/articlegate" style="width: 250px; padding: 7px 25px !important; font-weight: bold; color: #004276; text-decoration: none"><span>To see the full article, subscribe here.</span></a></p>');f.insertAfter(c)}else b>d&&c.remove()})},e=function(){a("script").each(function(){return a(this).attr("src")&&a(this).attr("src").toLowerCase().indexOf("euri.ca")>0?(f("NYTClean"),window.location.reload(),!1):void 0})},f=function(a){y("domHack",{type:a})};b(),setInterval(b,1e3)};F(),D(),E()}}),function(a){"use strict";if("function"==typeof define&&define.amd)define(["jquery/nyt","auth/gateway"],function(b,c){return a(b,c)});else if("object"==typeof NYTD){var b=NYTD;b.Meter=a(b.jQuery||window.jQuery,b.Gateway)}}(function(a,b){"use strict";function c(){var a=document.getElementsByName("PST")[0],b=document.getElementsByTagName("title")[0],c=!1;return b&&b.innerHTML&&(c=new RegExp("Page Not Found|Page unavailable","i").test(b.innerHTML)),a&&a.content&&a.content.match(/error/i)||c}var d,e,f,g,h=window.location.host.indexOf(".stg.")>0,i=h?"http://static.stg.nytimes.com":"http://graphics8.nytimes.com",j="//meter-svc.nytimes.com/meter-echo.js?callback=?",k="//meter-svc.nytimes.com/meter.js?callback=?",l=i+"/js/gwy.js",m=[],n={loaded:!1},o=function(){p(),setTimeout(function(){H(g)},1500)},p=function(){a.ajax({dataType:"jsonp",url:j,jsonpCallback:"NYT_meterBackupCallback"})},q=function(a){a&&(w("nyt-m")||a&&a["nyt-m"]&&x("nyt-m",a["nyt-m"],730))};window.NYT_meterBackupCallback=q;var r=function(){window.location.replace(window.location.href.replace(/(\?|&)gwh=([^&]+)/g,"").replace(/(\?|&)gwt=([^&]+)/g,""))},s=function(a,b,c,d){var e,f,g,h;g=b?"pay":"regi",e=unescape(window.location.href).split("#"),e=e.length>1?"#"+e[1]:null,h=d?"&assetType="+d:"",a="gwh="+a+"&gwt="+g+h,f=window.location.search?window.location.href+"&"+a:window.location.href+"?"+a,f=e?f.replace(e,"")+e:f,window.location.replace(f)},t=function(){try{return u()&&window.localStorage.getItem("nyt-m")}catch(a){return null}},u=function(){if(/MSIE 8.0/.test(navigator.userAgent))return!1;try{return"localStorage"in window&&null!==window.localStorage}catch(a){return!1}},v=function(a,b){if(u())try{window.localStorage.setItem(a,b)}catch(c){}},w=function(a){return new RegExp(a+"=([^;]+)","i").test(unescape(document.cookie))?RegExp.$1:null},x=function(a,b,c){var d=new Date;d.setTime(d.getTime()),c&&(c=1e3*c*60*60*24);var e=new Date(d.getTime()+c),f=a+"="+b+";path=/"+(c?";expires="+e.toGMTString():"")+";domain=.nytimes.com";document.cookie=f},y=function(){var a=w("nyt-m")||t("nyt-m")||window.name||"";return x("nyt-m",a,730),z(a),a},z=function(a){v("nyt-m",a),window.name=a},A=function(){return y().substr(0,32)},B=function(){var a=/gwt=([^&]+)/.test(unescape(window.location.search.substring(1)))?RegExp.$1:"";return"regi"===a?"regi":"pay"},C=function(){return/gwh=([^&]+)/.test(unescape(window.location.search.substring(1)))?RegExp.$1:""},D=function(){var a=y().match(/v=i.([0-9]+)/);return a&&a[1]?parseInt(a[1],10):null},E=function(){return window.location.href.replace(/\b\?.+/g,"").replace(/\b\#.+/g,"")},F=function(a){return 27===a.keyCode?(a.preventDefault(),!1):void 0},G=function(){var a=E(window.location.href);f!=a&&(H({url:window.location.href,referrer:f}),f=a)},H=function(b){var c=[t("nyt-m"),window.name],d=function(b){var e=b.url||window.location.href,f=null===b.referrer||void 0===b.referrer?window.location.href:b.referrer;b.callback&&m.push(b.callback);var g,h=a("meta").filter('[name="channels"]').attr("content"),i="";"undefined"!=typeof h&&(i="&channels="+h),g=k+i,a.ajax({dataType:"jsonp",url:g,data:{url:e,referer:f},success:function(f){var g,h=D();return f.isCookieValid===!1&&c.length>0?(x("nyt-m",c.pop(),730),void d(b)):(f.assetType&&(g=f.assetType),p(),a("head").append('<meta name="WT.z_cad" content="'+(f.counted?"1":"0")+'" /> '),f.hitPaywall||f.hitRegiwall?void s(f.hash,f.hitPaywall,f.hitRegiwall,g):(n.loaded=!0,n.final=!0,n.meterOn=f.meter,n.gatewayOn=f.gateway,n.hitPaypall=f.hitPaypall,n.hitRegiwall=f.hitRegiwall,n.cookieValid=f.isCookieValid,n.pageCount=h,n.url=e,a.each(m,function(a,b){b(n)}),m=[],a(document).trigger("NYTD:MeterLoaded",n),a(document).trigger("NYTD:MeterFinal",n),void a(document).off("keydown",F)))}})};a(document).on("keydown",F),b=b||{},n.loaded=!1,d(b)},I=function(){var c=/&assetType=([^&]+)/.test(unescape(window.location.search.substring(1)))?RegExp.$1:"";n.final=!0,a(document).trigger("NYTD:MeterFinal",n),p(),b?new b(B(),c):a.ajax({url:l,dataType:"script",success:function(){new NYTD.Gateway(B(),c)}})};return a(document).on("popstate",G),f=E(window.location.href),d=C(),e=A(),g={url:window.location.href,referrer:document.referrer},c()?void a(document).off("keydown",F):(y()?d?d&&!e||d!==e?r():d&&e&&d===e&&I():H(g):o(),n.check=H,n)});