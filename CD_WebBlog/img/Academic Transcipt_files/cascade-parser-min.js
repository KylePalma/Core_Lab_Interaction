"use strict";var Parser={menuContent:null,bodyContent:null,contentHeight:0,initialize:function(){Context.standalone=false;$('body').css('display','block');var pageDepth=typeof(level_depth)=="undefined"||level_depth==""?0:parseInt(level_depth);var homepageBanner=typeof(homepage_banner)=="undefined"||homepage_banner==""?'wtlgifs/main-banner-image.png':homepage_banner;Context.sslTrustStorePassword=typeof(s_pd)=="undefined"||s_pd==""?null:s_pd;Context.sslTrustStoreType=typeof(s_type)=="undefined"||s_type==""?null:s_type;Context.sslTrustStore=typeof(s_store)=="undefined"||s_store==""?null:s_store;Context.locale_settings=typeof(locale_val)=="undefined"||locale_val==""?null:locale_val;Context.locale_lang=typeof(locale_lang)=="undefined"||locale_lang==""?null:locale_lang;Context.helpWinHeight=typeof(help_height)=="undefined"||help_height==""?"500":help_height;Context.helpWinWidth=typeof(help_width)=="undefined"||help_width==""?"450":help_width;Parser.menuContent=$('body').find('.headerlinksdiv table:first-child td:has(a)');this.updateScripts();if($('body').find('.pageheaderlinks').length==0){pageDepth=0;}
$('body').children().hide();var $header=$("<div id='pageheader'>"
+"<div id='pagetitle'/>"
+"<div id='welcomemessage'/>"
+"</div>");var $pageBody=$("<div id='pagebody'/>");var $contentPanel=$("<div id='contentpanel'/>");var $pageFooter=$("<div id='pagefooter'/>");var $search=$("<div id='search'>"
+"<div class='searchBase' />"
+"</div>");var bodyContainer=$("<div id='bodyContainer'></div>");var $globalFooter=$("<div id='globalFooter' />");function loadContent(){var $body=$('#content');$body.append('<a name="top"></a>');$body.append(bodyContainer);$body.prepend($search);bodyContainer.append($header);bodyContainer.append($pageBody.append(contentHolder())).append($pageFooter);bodyContainer.append($globalFooter);LocalizeImages.initialize();FontResizeDetector.initialize();var headerImgSrc=$('#headerImage .headerImg:first').attr('src');if(typeof(headerImgSrc)!="undefined"){Theme.updateInstitutionalLogoImage("url('"+headerImgSrc+"') no-repeat");}
HeaderLinks.initialize();Crumb.initialize(pageDepth,$header);FooterText.initialize();GlobalFooterText.initialize();if(pageDepth==0){$('body').find('#areas').remove().end().find('.sitemaplink').remove();var loginList=Context.loginProc;$.each(Context.loginProc,function(intIndex,objValue){loginList.push(objValue.toLowerCase());});if(showHeader){$('body').find('#pageheader').children().each(function(i){if($(this).attr('id')!='crumb'&&$(this).attr('id')!='pagetitle'){$(this).remove();}});if((Application.getProc().indexOf('homepage')!=-1||Application.getProc().indexOf('P_WWWLogin')!=-1)&&jQuery.browser.msie){$('body').find('#pageheader').css({height:0});}
if($.inArray(Application.getProc().toLowerCase(),Context.unauthenticatedHomeProc)==-1&&$.inArray(Application.getProc().toLowerCase(),loginList)==-1){$header.find('#welcomemessage').hide();var pageTitle=$header.find('#pagetitle');var titleTag=$('body').find('.pagetitlediv table:first td:has(H2)');pageTitle.html(jQuery.trim($(titleTag).text()));}
$pageBody.addClass('anonymous');}else{$('body').find('#pageheader').children().each(function(i){if($(this).attr('id')!='pagetitle'){$(this).remove();}}).end().addClass('popup');$('#content').addClass('popup');$header.find('#welcomemessage').hide();var pageTitle=$header.find('#pagetitle');var titleTag=$('body').find('.pagetitlediv table:first td:has(H2)');pageTitle.html(jQuery.trim($(titleTag).text()));$('body').find('#contentHolder').attr('width','auto');}
if($.inArray(Application.getProc().toLowerCase(),Context.unauthenticatedHomeProc)!=-1)
{$pageBody.addClass('home');contentHolder().hide();generateUnauthenticatedHome($('body').find('.menuplaintable tr'),$pageBody);}
else if($.inArray(Application.getProc().toLowerCase(),loginList)!=-1)
{LoginScreen.initialize($('.pagebodydiv'),$pageBody);}
else if(checkAlertMessages()){$header.find('#pagetitle').hide();Crumb.remove();Crumb.addUnauthenticatedHome();LoginScreen.initialize($('.pagebodydiv'),$pageBody);level_depth="0";}
else
{DowngradeCascade.apply();return;$('body script').each(function(e,elem){if($.trim($(elem).html()).indexOf('document.loginform.reset();')!=-1){$(elem).remove();}});contentHolder().find('#contentBelt').remove();$('body').find('.menuplaintable').removeClass('menuplaintable');contentHolder().append($('body').find('.pagebodydiv').contents());$('.bgtabon').removeClass();$('body').find('.infotext').find('p').prepend('<br>');$('body').find('.bordertable').after('<br>');contentHolder().find('th[class="ddlabel"][scope="row"]').css({'background':'none','color':'#000'});var pagefooterlinks=contentHolder().find('.pagefooterlinks');pagefooterlinks.each(function(e,element){var links=$(element).find('a[class!="skiplinks"]');if(links.length>0){ExtraLinks.initialize(links,$(element).parent());}
$(element).remove();});var links=$('body').find('.pagefooterlinks a[class!="skiplinks"]');if(links.length>0){ExtraLinks.initialize(links,contentHolder());links.parent().remove();}
if($.inArray(Application.getProc(),Context.webProspectMainProc)!=-1)
{$("[name=web_info]").css({"height":StyleManager.getStyle('webProspectMainProc_web_info','height'),"width":StyleManager.getStyle('webProspectMainProc_web_info','width')});$("[name=web_note]").css({"width":StyleManager.getStyle('webProspectMainProc_web_note','width'),"height":StyleManager.getStyle('webProspectMainProc_web_note','height'),"margin-top":StyleManager.getStyle('webProspectMainProc_web_note','margin-top')});$("[name=web_note]").attr('src','/wtlgifs/web_note_cascade.png')
$("[name=web_required_new]").each(function(i){$(this).parent().parent().css({"background":StyleManager.getStyle('webProspectMainProc_web_required','background'),"padding-right":StyleManager.getStyle('webProspectMainProc_web_required','padding-right')});$(this).parent().css({"display":StyleManager.getStyle('webProspectMainProc_web_required','display')});});}}
HTMLButtonFormatter.initialize();HistoryManager.initialize();return;}
callUdcXmlService(sessionToken);if(showHeader){if(pageDepth<4){$header.find('#pagetitle').hide();var welcomeMessage=$header.find('#welcomemessage');if(wcMessage.indexOf('script')>=0){welcomeMessage.html('*ERROR* Invalid characters found. Please contact the site administrator or re-enter your information.<BR>'+wcMessage);}
else{welcomeMessage.html(wcMessage);}
if(pageDepth==1&&typeof(LastWebAccess)!="undefined"){$pageFooter.append('<SPAN class="lastaccess">'+LastWebAccess+'</SPAN>');}}else{$header.addClass('level4');$header.find('#welcomemessage').hide();var pageTitle=$header.find('#pagetitle');var titleTag=$('body').find('.pagetitlediv table:first td:has(H2)');pageTitle.html(jQuery.trim($(titleTag).text()));}}
var inputSearchContent=$('body').find('form[action$="twbksrch.P_ShowResults"]');searchField().appendTo($search);if(pageDepth<4){MenuNavigation.initialize($pageBody,pageDepth);}else{MenuNavigation.initialize($('#content'),pageDepth);}
HTMLButtonFormatter.initialize();var content="";if(pageDepth==1){HistoryManager.add("",PageRenderer.renderHome,{content:$('body').find('.menuplaintable tr'),type:'html',pageReferrerId:'',container:contentHolder()});}
if(pageDepth==2){$('#content').addClass('level2');HistoryManager.add("",PageRenderer.renderSecondLevel,{content:$('body').find('.menuplaintable tr'),type:'html',pageReferrerId:'',container:contentHolder()});}
if(pageDepth==3){$('#content').addClass('level3');HistoryManager.add("",PageRenderer.renderSecondLevel,{content:$('body').find('#secondLevelmenu td'),type:'html',pageReferrerId:'',container:contentHolder()});HistoryManager.add("",PageRenderer.renderThirdLevel,{content:$('body').find('.menuplaintable tr'),type:'html',pageReferrerId:'',container:contentHolder()});}
if(pageDepth==4){DowngradeCascade.apply();HistoryManager.add("",PageRenderer.renderFourthLevel,{content:$('body').find('.pagebodydiv'),type:'html',pageReferrerId:'',container:contentHolder()});}
HistoryManager.initialize();PageRenderer.initialize();}
Application.initialize();function messageHandler(data){var data=stringToDoc(data);var messageContext=$(data).find('request').text();switch(messageContext){case'help':if(helpWin!=null)helpWin.window.close();var win_sett='width='+Context.helpWinWidth+',height='+Context.helpWinHeight+',menubar=no,status=no,location=yes,toolbar=no,scrollbars=yes';if(Context.extHelpURL=='FALSE'){var helpWin=window.open('','helpWinId',win_sett);if(helpWin!=null){helpWin.document.open();HelpWindow.initialize(Context.helpURL,helpWin);if(helpWin.opener==null){helpWin.opener=self;}}else{alert("Failed to open help window");}}else{var helpWin=window.open(Context.helpURL,'helpWinId',win_sett);}
break;case'signin':Application.navigateToURL(Context.loginURL);break;case'signout':Application.navigateToURL(Context.logoutURL);break;}}
var SESSID=getCookie('SESSID');var CPSESSID=getCookie('CPSESSID');var ADMSESSID=getCookie('ADMSESSID');var PROXY_HASH=getCookie('PROXY_HASH');if((Context.standalone||Context.isLocal)&&typeof(userID)!='undefined'){CookieManager.set("username",userID);CommonContext.user=userID;}else{if((CPSESSID||SESSID)&&typeof(userID)!='undefined'){CookieManager.set("username",userID);CommonContext.user=userID;}else if(PROXY_HASH!=null){CookieManager.set("username",PROXY_HASH);CommonContext.user=PROXY_HASH;}else if(ADMSESSID!=null){CookieManager.set("username",ADMSESSID);CommonContext.user=ADMSESSID;}else{CookieManager.remove('username');pageDepth=0;}}
CookieManager.set("locale",Context.locale_lang);var globalNav=false;if(pageDepth>0){globalNav=true;}
var showHeader=true;if(pageDepth==0&&(SESSID||Context.isLocal)&&$.inArray(Application.getProc().toLowerCase(),Context.unauthenticatedHomeProc)==-1&&$.inArray(Application.getProc().toLowerCase(),Context.loginProc)==-1&&$.inArray(Application.getProc().toLowerCase(),Context.logoutProc)==-1){showHeader=false;}
CommonPlatform.initialize({standalone:true,globalNav:globalNav,header:showHeader,footer:true,handler:messageHandler});loadContent();Disclaimer.initialize();if(jQuery.browser.msie&&parseInt(jQuery.browser.version)<=6){IE6Patch.apply();}},updateScripts:function(){var winRegex=new RegExp('window.open');var widthIncrement=100;var heightIncrement=175;$(document).find('script').each(function(e,elem){var code=$(elem).html();if(winRegex.test(code)){var origMatch=code.match(/window.open.+;/);var match=code.match(/window.open.+;/);for(var k=0;k<match.length;k++){var props=match[k].split(',');for(var j=0;j<props.length;j++){var arr=props[j].split('=');var key=$.trim(arr[0]);var val=$.trim(arr[1]);if(key=='width'){val=parseInt(val)+widthIncrement;}else if(key=='height'){val=parseInt(val)+heightIncrement;}
props[j]=key;if(val!=''){props[j]=props[j]+"="+val;}}
match[k]=props.join(',')+"');";}
for(var n=0;n<match.length;n++){code=code.replace(origMatch[n],match[n]);}
try{elem.innerHTML=code;}catch(e){elem.text=code;}}});}}