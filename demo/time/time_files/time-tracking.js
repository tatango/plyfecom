window.Time=window.Time||{},window.s_time=window.s_time||{},Time.Tracking={last_article_id:0,reset:function(){for(var props=[3,5,8,7,16,26,28,30,32,14,27,10,15,65,33,34,67,12,68,69,70],i=0;i<props.length;i++)delete s_time["prop"+props[i]];delete s_time.setFreeTeaserPV,delete s_time.setPaidFullPV},article_view:function(data){this.isset(data)&&(this.isset(s_time.prop8)&&s_time.prop8===data.id&&"gallery"!==data.format||(this.omniture(data),this.simple_reach(data),this.comscore()))},gallery_view:function(data){if(this.isset(Time.application.active_rail)&&this.isset(data)){var articleModel=Time.application.model.get("activeArticle"),article=articleModel.toJSON();s_time.prop7=data.primary?"gallery":"embedded gallery",s_time.pageName=s_time.prop7+"|"+data.gallery_title,this.isset(article.section)&&(s_time.pageName=this.map_section(article.section.name)+"|"+s_time.pageName),s_time.pageName=s_time.pageName.toLowerCase(),s_time.prop15=data.fullscreen?"fullscreen":"normal",s_time.t(),this.comscore()}},simple_reach:function(article){if(this.last_article_id!==article.id){var authors=[];if(this.isset(article.authors))for(var i=0,ln=article.authors.length;ln>i;i++)authors[i]=article.authors[i].name;var __ajax_reach_config={pid:"4e87f81ca782f3404200000a",title:article.title,url:article.url,date:article.time?article.time.published.substring(0,10):null,authors:authors,channels:this.isset(article.section)?[article.section.name]:[],tags:this.isset(article.tags)?article.tags:[],Partner_Module:this.isset(article.Partner_Module)?article.Partner_Module:[],iframe:!0,ignore_errors:Time.developer_mode};try{SPR.Reach.collect(__ajax_reach_config)}catch(e){}this.last_article_id=article.id}},comscore:function(){try{COMSCORE.beacon({c1:"2",c2:"6035728"})}catch(e){}var pv_url;pv_url="money"===Time.branding?Time.home_url+"/wp-content/themes/vip/time2014/comscore/money/pageview_candidate.xml":Time.home_url+"/wp-content/themes/vip/time2014/comscore/time/pageview_candidate.xml",jQuery.get(pv_url,{comscorekw:"pageview_candidate",rand:Math.floor(1e6*Math.random())})},omniture:function(article){var $edit_divider_link,authors=[],divider_event="",franchise_value="",post_type="",authorTypes=[];if(this.reset(),post_type=article.post_type,this.isset(post_type)&&post_type.indexOf("money")>-1?(s_time.channel="money",s_time.prop64="v2-money"):(s_time.channel="time",s_time.prop64="v2"),s_time.prop8=article.id,s_time.pageName=article.title,"post"===post_type?s_time.prop7=article.format:"page"===post_type?s_time.prop7="page":"money_article"===post_type?s_time.prop7="article":"section-front"===post_type&&(s_time.prop7="article"),this.isset(article.format)&&(s_time.pageName=article.format+"|"+s_time.pageName),s_time.prop14=article.url,this.isset(article.time)&&(s_time.prop26=article.time.published.substring(0,10)),s_time.prop30=article.title,this.isset(article.section)&&(s_time.prop16=this.map_section(article.section.name),s_time.pageName=article.section.name+"|"+s_time.pageName),this.isset(article.tag)&&(s_time.prop5=article.tag.name),this.isset(article.topic)&&(s_time.prop69=article.topic.name),this.isset(article.section)&&(s_time.prop70=article.section.name),this.isset(article.authors)){for(var i=0,ln=article.authors.length;ln>i;i++)if(authors[i]=article.authors[i].name,this.isset(article.authors[i].types)){var j=0;for(var key in article.authors[i].types)authorTypes[j]=article.authors[i].types[key],j++}s_time.prop28=authors.join("|"),s_time.prop32=authorTypes.join("|")}if("time_sponsored_post"===article.post_type&&this.isset(article.sponsor)&&(s_time.prop10=article.sponsor.name,s_time.prop7="native ad",s_time.prop16="sponsored",s_time.pageName="sponsored|native ad|"+article.title),article.paid&&(s_time.prop27=Time.authenticated?"paid full":"teaser"),this.isset(article.omniture)&&(s_time.prop65=article.omniture.modules),$edit_divider_link=jQuery("#article-"+article.id).next(".divider-articles").find("a[data-event]:first"),$edit_divider_link.length&&(divider_event=$edit_divider_link.data("event"),""!==divider_event&&(this.isset(s_time.prop65)?s_time.prop65+="|"+divider_event:s_time.prop65=divider_event)),this.isset(article.tags)&&(s_time.prop67=article.tags),s_time.prop53=this.isset(article.Partner_Module)&&"Select"!==article.Partner_Module.partner?article.Partner_Module.partner:null,("time_collection_post"===post_type||"money_collectionpost"===post_type||"money_collection"===post_type)&&(this.isset(article.hub_meta)&&this.isset(article.hub_meta.name)&&(s_time.prop68=article.hub_meta.name),s_time.prop7="collections",this.isset(article.collection_byline)&&(s_time.prop28=article.collection_byline),this.isset(s_time.prop28)||(s_time.prop28="TIME Staff"),this.isset(article.collection_meta)&&(franchise_value=article.collection_meta.franchise_value,franchise_value&&(s_time.prop12=franchise_value,"money101"!==franchise_value&&"roadtowealth"!==franchise_value&&(s_time.prop8=franchise_value,s_time.prop30=franchise_value,s_time.prop14=article.collection_meta.url)))),article.magazine_article&&(s_time.prop3="magazine",article.paid&&(s_time.prop34="walled magazine",Time.authenticated?s_time.setPaidFullPV="true":(s_time.setFreeTeaserPV="true",s_time.prop33=s_time.prop26+"|"+s_time.prop30))),this.isset(article.post_type)&&article.post_type.indexOf("money")>-1){var page_var="money_collection"===post_type||"money_collectionpost"===post_type?article.title:s_time.prop30;s_time.prop16="money",s_time.pageName=s_time.prop16+"|"+s_time.prop7+"|"+page_var,s_time.prop69=article.topic?article.topic.slug:"",s_time.prop70=article.section?article.section.name:""}this.isset(s_time.pageName)&&(s_time.pageName=s_time.pageName.toLowerCase()),s_time.t(),console.log("Omniture PV for Article: "+s_time.pageName)},isset:function(thing){return"undefined"!=typeof thing&&""!==thing},log:function(msg){Time.developer_mode&&console.log("%c"+msg,"color:#248bd2;background:#042029;font-size:16px;")},map_section:function(section){switch(section=section.toLowerCase()){case"u.s.":return"us";case"trending":return"newsfeed";case"business":return"biztech";case"tech":return"techland";case"health":return"healthland";case"science":return"scihealth";case"culture":return"arts";case"opinion":return"opinions";default:return section}}},jQuery(document).ready(function($){$("body").on("click","[data-event]",function(e){var srcEl=$(e.srcElement);"undefined"==typeof omniTrackEv||srcEl.is("[data-event-info]")||omniTrackEv($(this).attr("data-event"))})});