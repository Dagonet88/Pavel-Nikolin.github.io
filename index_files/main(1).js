!function(){function injectAnalytics(){try{var host=location.host.toLowerCase();if(0===host.indexOf("www.")&&(host=host.substr(4)),"test.redhelper.ru"===host)return;if("redhelper.ru"===host)return;if(window.___rhlp_analytics_loaded___)return;for(var sites=["24stoma.ru","etk.bmwsar.ru","china-discount.ru","39turov.ru","cpabiznes.com","trafhit.ru","gametabs.ru","xn--80acmldkekdf7c.xn--p1ai","sbiblio.com","stopagent.ru","viking-studio.com","apitcomp.ru","grant-k.ru","xn----7sbbjhsgkllr3a2b.xn--p1ai","vseprootpusk.ru","kompanion.biz","dachnikof.ru","businesspages.uz","dveridomaster.ru","kamchatka.dp.ua","zhenskaya-odezhda.com","japan-stock.com","tuningdesign.ru","mototehnika-gk.ru","electrastyle.ru","sportvelo.ru","euro-parts.ru","glamus.ru","irepair.ru","electroprestige.net.ua","ats-video.ru","blclient.ru","5shop.com.ua","mfst.pro","printsteklo.ru","redhelper.ru"],found=!1,i=0;i<sites.length;i++)if(host===sites[i]||host.indexOf("."+sites[i])>0){found=!0,window.redindex||(window.redindex={}),redindex.id||(redindex.id=100+i);break}if(!found)return;var analyticsHost="web.redhelper.ru",src="//"+analyticsHost+"/analytics/main.js?version=3.1.423.5317",script=document.createElement("script");script.charset="utf8",script.type="text/javascript",script.src=src,document.documentElement.getElementsByTagName("head")[0].appendChild(script)}catch(e){var error=eval("console.error");error("Error while injecting analytics",e)}}var starter,PROTOCOL=document.getElementById("rhlpscrtg").src.split("//")[0],onLoad=function(a){var b=function(){a.done||(a.done=!0,a(),document.removeEventListener&&(document.removeEventListener("DOMContentLoaded",b),window.removeEventListener("load",b)),document.detachEvent&&(document.detachEvent("onreadystatechange",b),window.detachEvent("onload",b)))};if("complete"===document.readyState)return void setTimeout(b,1);if(document.addEventListener)document.addEventListener("DOMContentLoaded",b,!1),window.addEventListener("load",b,!1);else if(document.attachEvent){document.attachEvent("onreadystatechange",b),window.attachEvent("onload",b);var c=!1;try{c=null===window.frameElement}catch(d){}if(document.documentElement.doScroll&&c){var e=function(){try{document.documentElement.doScroll("left")}catch(a){return void setTimeout(e,5)}b()};setTimeout(e,1)}}};if(void 0!==navigator.userAgent&&-1!==navigator.userAgent.indexOf("Awesomium"))starter=function(){var a;a=document.getElementById("rhlpscrtg").src.split("?")[0].indexOf("development")>-1?"development":document.getElementById("rhlpscrtg").src.indexOf("/dev/")>-1?"dev":(document.getElementById("rhlpscrtg").src.indexOf("/test.")>-1?"test.":"")+"web.redhelper.ru";var b=-1!==navigator.userAgent.indexOf("Cobrowse3")?"main.js":"main.old.js",c=PROTOCOL+"//"+a+"/cobrowsing/"+b+"?version=3.1.423.5317",d=document.createElement("script");d.charset="utf8",d.src=c,document.documentElement.getElementsByTagName("head")[0].appendChild(d)};else{var logOverride=function(){return console.log=function(){if(window.console){for(var a=new Date,b=a.getHours()+":"+a.getMinutes()+":"+a.getSeconds()+"."+a.getMilliseconds(),c=[b],d=0;d<arguments.length;d++)c.push(arguments[d]);console.info&&"function"==typeof console.info.apply&&console.info.apply(this,c)}},"Container logging overrided"};starter=function(){var a;a=document.getElementById("rhlpscrtg").src.split("?")[0].indexOf("development")>-1?"development":document.getElementById("rhlpscrtg").src.indexOf("/dev/")>-1?"dev":(document.getElementById("rhlpscrtg").src.indexOf("/test.")>-1?"test.":"")+"web.redhelper.ru";var b=PROTOCOL+"//"+a+"/container/main.js?version=3.1.423.5317",c=document.createElement("script");c.charset="utf8",c.src=b,document.documentElement.getElementsByTagName("head")[0].appendChild(c)},injectAnalytics()}onLoad(starter),function(a){null===window.opera&&(window.opera=a)}()}();