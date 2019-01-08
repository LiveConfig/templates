/*  _    _          ___           __ _     (R)
 * | |  (_)_ _____ / __|___ _ _  / _(_)__ _
 * | |__| \ V / -_) (__/ _ \ ' \|  _| / _` |
 * |____|_|\_/\___|\___\___/_||_|_| |_\__, |
 *                                    |___/
 * Copyright (c) 2009-2018 Keppler IT GmbH.
 * ---------------------------------------------------------------------------
 * $Id: style.js 4819 2018-02-01 17:41:12Z kk $
 *
 * style.js
 * JavaScript code for default template
 * ---------------------------------------------------------------------------
 */

/*!
 * Salvattore 1.0.8 by @rnmp and @ppold
 * https://github.com/rnmp/salvattore
 */
!function(e,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():e.salvattore=t()}(this,function(){/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license */
window.matchMedia||(window.matchMedia=function(){"use strict";var e=window.styleMedia||window.media;if(!e){var t=document.createElement("style"),n=document.getElementsByTagName("script")[0],r=null;t.type="text/css",t.id="matchmediajs-test",n.parentNode.insertBefore(t,n),r="getComputedStyle"in window&&window.getComputedStyle(t,null)||t.currentStyle,e={matchMedium:function(e){var n="@media "+e+"{ #matchmediajs-test { width: 1px; } }";return t.styleSheet?t.styleSheet.cssText=n:t.textContent=n,"1px"===r.width}}}return function(t){return{matches:e.matchMedium(t||"all"),media:t||"all"}}}()),/*! matchMedia() polyfill addListener/removeListener extension. Author & copyright (c) 2012: Scott Jehl. Dual MIT/BSD license */
function(){"use strict";if(window.matchMedia&&window.matchMedia("all").addListener)return!1;var e=window.matchMedia,t=e("only all").matches,n=!1,r=0,a=[],i=function(t){clearTimeout(r),r=setTimeout(function(){for(var t=0,n=a.length;n>t;t++){var r=a[t].mql,i=a[t].listeners||[],o=e(r.media).matches;if(o!==r.matches){r.matches=o;for(var c=0,l=i.length;l>c;c++)i[c].call(window,r)}}},30)};window.matchMedia=function(r){var o=e(r),c=[],l=0;return o.addListener=function(e){t&&(n||(n=!0,window.addEventListener("resize",i,!0)),0===l&&(l=a.push({mql:o,listeners:c})),c.push(e))},o.removeListener=function(e){for(var t=0,n=c.length;n>t;t++)c[t]===e&&c.splice(t,1)},o}}(),function(){"use strict";for(var e=0,t=["ms","moz","webkit","o"],n=0;n<t.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[t[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[n]+"CancelAnimationFrame"]||window[t[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,n){var r=(new Date).getTime(),a=Math.max(0,16-(r-e)),i=window.setTimeout(function(){t(r+a)},a);return e=r+a,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}(),"function"!=typeof window.CustomEvent&&!function(){"use strict";function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}e.prototype=window.Event.prototype,window.CustomEvent=e}();var e=function(e,t,n){"use strict";var r={},a=[],i=[],o=[],c=function(e,t,n){e.dataset?e.dataset[t]=n:e.setAttribute("data-"+t,n)};return r.obtainGridSettings=function(t){var n=e.getComputedStyle(t,":before"),r=n.getPropertyValue("content").slice(1,-1),a=r.match(/^\s*(\d+)(?:\s?\.(.+))?\s*$/),i=1,o=[];return a?(i=a[1],o=a[2],o=o?o.split("."):["column"]):(a=r.match(/^\s*\.(.+)\s+(\d+)\s*$/),a&&(o=a[1],i=a[2],i&&(i=i.split(".")))),{numberOfColumns:i,columnClasses:o}},r.addColumns=function(e,n){for(var a,i=r.obtainGridSettings(e),o=i.numberOfColumns,l=i.columnClasses,s=new Array(+o),u=t.createDocumentFragment(),d=o;0!==d--;)a="[data-columns] > *:nth-child("+o+"n-"+d+")",s.push(n.querySelectorAll(a));s.forEach(function(e){var n=t.createElement("div"),r=t.createDocumentFragment();n.className=l.join(" "),Array.prototype.forEach.call(e,function(e){r.appendChild(e)}),n.appendChild(r),u.appendChild(n)}),e.appendChild(u),c(e,"columns",o)},r.removeColumns=function(n){var r=t.createRange();r.selectNodeContents(n);var a=Array.prototype.filter.call(r.extractContents().childNodes,function(t){return t instanceof e.HTMLElement}),i=a.length,o=a[0].childNodes.length,l=new Array(o*i);Array.prototype.forEach.call(a,function(e,t){Array.prototype.forEach.call(e.children,function(e,n){l[n*i+t]=e})});var s=t.createElement("div");return c(s,"columns",0),l.filter(function(e){return!!e}).forEach(function(e){s.appendChild(e)}),s},r.recreateColumns=function(t){e.requestAnimationFrame(function(){r.addColumns(t,r.removeColumns(t));var e=new CustomEvent("columnsChange");t.dispatchEvent(e)})},r.mediaQueryChange=function(e){e.matches&&Array.prototype.forEach.call(a,r.recreateColumns)},r.getCSSRules=function(e){var t;try{t=e.sheet.cssRules||e.sheet.rules}catch(n){return[]}return t||[]},r.getStylesheets=function(){var e=Array.prototype.slice.call(t.querySelectorAll("style"));return e.forEach(function(t,n){"text/css"!==t.type&&""!==t.type&&e.splice(n,1)}),Array.prototype.concat.call(e,Array.prototype.slice.call(t.querySelectorAll("link[rel='stylesheet']")))},r.mediaRuleHasColumnsSelector=function(e){var t,n;try{t=e.length}catch(r){t=0}for(;t--;)if(n=e[t],n.selectorText&&n.selectorText.match(/\[data-columns\](.*)::?before$/))return!0;return!1},r.scanMediaQueries=function(){var t=[];if(e.matchMedia){r.getStylesheets().forEach(function(e){Array.prototype.forEach.call(r.getCSSRules(e),function(e){try{e.media&&e.cssRules&&r.mediaRuleHasColumnsSelector(e.cssRules)&&t.push(e)}catch(n){}})});var n=i.filter(function(e){return-1===t.indexOf(e)});o.filter(function(e){return-1!==n.indexOf(e.rule)}).forEach(function(e){e.mql.removeListener(r.mediaQueryChange)}),o=o.filter(function(e){return-1===n.indexOf(e.rule)}),t.filter(function(e){return-1==i.indexOf(e)}).forEach(function(t){var n=e.matchMedia(t.media.mediaText);n.addListener(r.mediaQueryChange),o.push({rule:t,mql:n})}),i.length=0,i=t}},r.rescanMediaQueries=function(){r.scanMediaQueries(),Array.prototype.forEach.call(a,r.recreateColumns)},r.nextElementColumnIndex=function(e,t){var n,r,a,i=e.children,o=i.length,c=0,l=0;for(a=0;o>a;a++)n=i[a],r=n.children.length+(t[a].children||t[a].childNodes).length,0===c&&(c=r),c>r&&(l=a,c=r);return l},r.createFragmentsList=function(e){for(var n=new Array(e),r=0;r!==e;)n[r]=t.createDocumentFragment(),r++;return n},r.appendElements=function(e,t){var n=e.children,a=n.length,i=r.createFragmentsList(a);Array.prototype.forEach.call(t,function(t){var n=r.nextElementColumnIndex(e,i);i[n].appendChild(t)}),Array.prototype.forEach.call(n,function(e,t){e.appendChild(i[t])})},r.prependElements=function(e,n){var a=e.children,i=a.length,o=r.createFragmentsList(i),c=i-1;n.forEach(function(e){var t=o[c];t.insertBefore(e,t.firstChild),0===c?c=i-1:c--}),Array.prototype.forEach.call(a,function(e,t){e.insertBefore(o[t],e.firstChild)});for(var l=t.createDocumentFragment(),s=n.length%i;0!==s--;)l.appendChild(e.lastChild);e.insertBefore(l,e.firstChild)},r.registerGrid=function(n){if("none"!==e.getComputedStyle(n).display){var i=t.createRange();i.selectNodeContents(n);var o=t.createElement("div");o.appendChild(i.extractContents()),c(o,"columns",0),r.addColumns(n,o),a.push(n)}},r.init=function(){var e=t.createElement("style");e.innerHTML="[data-columns]::before{display:block;visibility:hidden;position:absolute;font-size:1px;}",t.head.appendChild(e);var n=t.querySelectorAll("[data-columns]");Array.prototype.forEach.call(n,r.registerGrid),r.scanMediaQueries()},r.init(),{appendElements:r.appendElements,prependElements:r.prependElements,registerGrid:r.registerGrid,recreateColumns:r.recreateColumns,rescanMediaQueries:r.rescanMediaQueries,init:r.init,append_elements:r.appendElements,prepend_elements:r.prependElements,register_grid:r.registerGrid,recreate_columns:r.recreateColumns,rescan_media_queries:r.rescanMediaQueries}}(window,window.document);return e});

var scrollHandler;

$(function(){
	if (salvattore) salvattore.init();
	var menuBtn=$('<div id="dMenuIcon">&#x2630;</div>')
		.click(function(ev) {
		$('body > nav').slideToggle();
	});
	$('header > img').after(menuBtn);
	// ul.radio animation:
	$('ul.radio > li > input[type=radio]:checked+label+div').show();
	$('ul.radio > li > input[type=radio]').on('change', function() {
		$(this).parent().parent().find('li > div').slideUp(200);
		$(this).parent().find('div').slideDown(200);
	});
//	if (LC.hasTouch) return; // no sliding sidenav on iPad/Android...
	var sidebar = {
		obj: $('body > nav'),
		pTop: 0,				/* padding-top */
		pBottom: 0				/* padding-bottom */
	};
	if (sidebar.obj[0]) {
		//sidebar.height = sidebar.obj.height();
		sidebar.height = sidebar.obj[0].offsetHeight;
		$('body > nav > ul > li > span').click(function(ev){
			$(this).toggleClass('closed')
				   .next().slideToggle(200, function() { sidebar.height = sidebar.obj[0].offsetHeight; dirty=true; $(window).trigger("scroll"); });
		});

		var dirty=false;

		// if ($('html').hasClass('iframe')) return;
		var fixed = false;
		var top = parseFloat(sidebar.obj[0].offsetTop) - parseFloat(sidebar.obj.css('margin-top').replace(/auto/, 0));
		var winHeight = $(window).height();
		var lastY=-1;
		var newTop=0;
		var lockTop = false;
		var lockBottom = false;
		var mainHeight = $('main').height();
		$(window).scroll(function(ev) {
			// update page height when scrolling for the first time (window.onload isn't reliable enough)
			if (lastY == -1) mainHeight = $('main').height();

			var y = $(this).scrollTop();
			if (!dirty && (mainHeight <= sidebar.height + sidebar.pTop - 4)) {
				return;	// no scroll effect: content is smaller than navigation
			}
			if (dirty) {
				dirty = false;
				lastY = y+1;
			}
			if (y >= lastY) {
				// scrolling down
				if (!lockBottom && sidebar.height + sidebar.pTop + sidebar.pBottom <= winHeight) {
					newTop=0;
					sidebar.obj.addClass('fixed').css('top',(newTop)+'px').css('bottom','');
					lockBottom=true;
				}
				if (!lockBottom && y + winHeight >= sidebar.height + top + newTop + sidebar.pTop + sidebar.pBottom && !fixed) {
					newTop = winHeight-sidebar.height-sidebar.pTop-sidebar.pBottom;
					sidebar.obj.addClass('fixed').css('top', newTop+'px');
					lockBottom=true;
				} else if (lockTop && (!lockBottom || sidebar.height + top + sidebar.pTop + sidebar.pBottom > winHeight)) {
					newTop = y;
					if (newTop < 0) newTop=0;
					sidebar.obj.removeClass('fixed').css('top', newTop+'px').css('bottom','');
					lockTop = false;
					lockBottom = false;
				}
			} else if (y < lastY) {
				// scrolling up
				if (lockBottom && sidebar.height + sidebar.pTop + sidebar.pBottom > winHeight) {
					newTop = (y+winHeight-sidebar.height-sidebar.pTop-sidebar.pBottom-top);
					if (newTop < 0) newTop=0;
					sidebar.obj.removeClass('fixed').css('top', newTop+'px').css('bottom','');
					fixed=false;
					lockTop = false;
					lockBottom = false;
				} else if (!lockBottom && !lockTop && y < newTop) {
					sidebar.obj.addClass('fixed').css('top',(0)+'px').css('bottom','');
					lockTop=true;
				}
			}
			lastY=y;
		});
	}

	$(window).resize(function(ev) {
		winHeight = $(window).height();
		mainHeight = $('main').height();
		$(window).trigger("scroll");
	});
});

/* <EOF> ------------------------------------------------------------------ */
