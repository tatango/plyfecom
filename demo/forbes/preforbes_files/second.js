thisURL=this.location.href;function Meta(){var a=document.getElementsByTagName("META");this.meta={};for(var b=0;b<a.length;b++){this.meta[a[b].name]=a[b].content}}Meta.prototype.get=function(a){return this.meta[a]};meta=new Meta();var phatcatId="35415301490";function isMember(){forbes0=document.cookie.indexOf("forbesmemb=");forbes1=document.cookie.indexOf("forbesmemb_confirm=");if(forbes0!=-1&&forbes1!=-1&&findCookie("forbesmemb")!=phatcatId){return true}else{return false}}function findCookie(a){if(document.cookie.length>0){begin=document.cookie.indexOf(a+"=");if(begin!=-1){begin+=a.length+1;end=document.cookie.indexOf(";",begin);if(end==-1){end=document.cookie.length}return unescape(document.cookie.substring(begin,end))}}return null}function bluekai(){var b="";if(isMember()){b=findCookie("forbesmemb")}var a=findCookie("s_p_name");if(a==null){a=""}document.write('<script type="text/javascript" src="http://tags.bluekai.com/site/3536?ret=js&phint=channel%3D'+displayedChannel+"&phint=section%3D"+displayedSection+"&phint=member%3D"+b+"&phint=partner%3D"+a+'"><\/script>')}function getCanonicalUrl(){linkElements=document.getElementsByTagName("link");canonicalUrl="";for(i=0;i<linkElements.length;i++){if((typeof linkElements[i].attributes.rel!="undefined")&&(linkElements[i].attributes.rel.nodeValue=="canonical")){canonicalUrl=linkElements[i].attributes.href.nodeValue;break}}return canonicalUrl}(function(){if(typeof forbes==="undefined"){forbes={}}if(typeof forbes.fast_pixel==="undefined"){forbes.fast_pixel={}}if(!forbes.fast_pixel.initialized){var a=document.createElement("script");a.type="text/javascript";a.src="http://i.forbesimg.com/assets/js/forbes/fast_pixel.js";document.body.appendChild(a)}})();bluekai();if(thisURL.match("slide_2.html")){var _sf_async_config={uid:17493,domain:"forbes.com"};var chartbeat_section="";if(displayedSection!=""){chartbeat_section=","+displayedSection}_sf_async_config.sections=displayedChannel+chartbeat_section;var chartbeat_author=meta.get("author");if(chartbeat_author==null){chartbeat_author=""}_sf_async_config.authors=chartbeat_author;if(getCanonicalUrl()!=""){_sf_async_config.useCanonical=true}(function(){function a(){window._sf_endpt=(new Date()).getTime();var c=document.createElement("script");c.setAttribute("language","javascript");c.setAttribute("type","text/javascript");c.setAttribute("src",(("https:"==document.location.protocol)?"https://a248.e.akamai.net/chartbeat.download.akamai.com/102508/":"http://")+"static.chartbeat.com/js/chartbeat.js");document.body.appendChild(c)}var b=window.onload;window.onload=(typeof window.onload!="function")?a:function(){b();a()}})()}(function(){var b=document.createElement("a");b.id="borderTab";var d=document.createElement("div");d.id="teconsent";var c=document.createElement("script");c.src="http://consent.truste.com/notice?domain=forbes.com&c=teconsent";d.appendChild(c);b.appendChild(d);document.body.appendChild(b)})();