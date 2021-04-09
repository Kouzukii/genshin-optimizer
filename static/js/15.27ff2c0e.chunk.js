(this["webpackJsonpgenshin-optimizer"]=this["webpackJsonpgenshin-optimizer"]||[]).push([[15,25],{111:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(0),r=a(116),c=a(120),i=Math.pow(2,31)-1;function l(e,t,a){var n=a-Date.now();e.current=n<=i?setTimeout(t,n):setTimeout((function(){return l(e,t,a)}),i)}function o(){var e=Object(r.a)(),t=Object(n.useRef)();return Object(c.a)((function(){return clearTimeout(t.current)})),Object(n.useMemo)((function(){var a=function(){return clearTimeout(t.current)};return{set:function(n,r){void 0===r&&(r=0),e()&&(a(),r<=i?t.current=setTimeout(n,r):l(t,n,Date.now()+r))},clear:a}}),[])}},113:function(e,t,a){"use strict";var n=a(2),r=a(4),c=a(7),i=a.n(c),l=a(0),o=a.n(l),s=(a(127),a(8)),u=o.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.placement,l=e.className,u=e.style,d=e.children,j=e.arrowProps,b=(e.popper,e.show,Object(r.a)(e,["bsPrefix","placement","className","style","children","arrowProps","popper","show"]));a=Object(s.a)(a,"tooltip");var f=((null==c?void 0:c.split("-"))||[])[0];return o.a.createElement("div",Object(n.a)({ref:t,style:u,role:"tooltip","x-placement":f,className:i()(l,a,"bs-tooltip-"+f)},b),o.a.createElement("div",Object(n.a)({className:"arrow"},j)),o.a.createElement("div",{className:a+"-inner"},d))}));u.defaultProps={placement:"right"},u.displayName="Tooltip",t.a=u},114:function(e,t,a){"use strict";var n=a(2),r=a(4),c=a(12),i=a(115),l=a(0),o=a.n(l),s=a(111),u=a(109),d=(a(83),a(38)),j=a(7),b=a.n(j),f=a(6),v=a.n(f),p=a(30),m=a.n(p),h=a(112),O=a(57),x=a(117),y=a(136),g=a(137),E=a(121),N=a(131),C=o.a.forwardRef((function(e,t){var a=e.flip,c=e.offset,i=e.placement,s=e.containerPadding,u=void 0===s?5:s,d=e.popperConfig,j=void 0===d?{}:d,b=e.transition,f=Object(h.a)(),v=f[0],p=f[1],x=Object(h.a)(),C=x[0],w=x[1],S=Object(O.a)(p,t),k=Object(E.a)(e.container),K=Object(E.a)(e.target),P=Object(l.useState)(!e.show),T=P[0],V=P[1],R=Object(y.a)(K,v,Object(N.a)({placement:i,enableEvents:!!e.show,containerPadding:u||5,flip:a,offset:c,arrowElement:C,popperConfig:j})),F=R.styles,B=R.attributes,I=Object(r.a)(R,["styles","attributes"]);e.show?T&&V(!1):e.transition||T||V(!0);var _=e.show||b&&!T;if(Object(g.a)(v,e.onHide,{disabled:!e.rootClose||e.rootCloseDisabled,clickTrigger:e.rootCloseEvent}),!_)return null;var A=e.children(Object(n.a)({},I,{show:!!e.show,props:Object(n.a)({},B.popper,{style:F.popper,ref:S}),arrowProps:Object(n.a)({},B.arrow,{style:F.arrow,ref:w})}));if(b){var H=e.onExit,z=e.onExiting,D=e.onEnter,M=e.onEntering,L=e.onEntered;A=o.a.createElement(b,{in:e.show,appear:!0,onExit:H,onExiting:z,onExited:function(){V(!0),e.onExited&&e.onExited.apply(e,arguments)},onEnter:D,onEntering:M,onEntered:L},A)}return k?m.a.createPortal(A,k):null}));C.displayName="Overlay",C.propTypes={show:v.a.bool,placement:v.a.oneOf(x.h),target:v.a.any,container:v.a.any,flip:v.a.bool,children:v.a.func.isRequired,containerPadding:v.a.number,popperConfig:v.a.object,rootClose:v.a.bool,rootCloseEvent:v.a.oneOf(["click","mousedown"]),rootCloseDisabled:v.a.bool,onHide:function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];var r;return e.rootClose?(r=v.a.func).isRequired.apply(r,[e].concat(a)):v.a.func.apply(v.a,[e].concat(a))},transition:v.a.elementType,onEnter:v.a.func,onEntering:v.a.func,onEntered:v.a.func,onExit:v.a.func,onExiting:v.a.func,onExited:v.a.func};var w=C,S=a(130),k=a(107),K={transition:k.a,rootClose:!1,show:!1,placement:"top"};function P(e){var t=e.children,a=e.transition,c=e.popperConfig,i=void 0===c?{}:c,s=Object(r.a)(e,["children","transition","popperConfig"]),d=Object(l.useRef)({}),j=Object(S.a)(),f=j[0],v=j[1],p=!0===a?k.a:a||null;return o.a.createElement(w,Object(n.a)({},s,{ref:f,popperConfig:Object(n.a)({},i,{modifiers:v.concat(i.modifiers||[])}),transition:p}),(function(e){var c,i=e.props,l=e.arrowProps,s=e.show,j=e.update,f=(e.forceUpdate,e.placement),v=e.state,p=Object(r.a)(e,["props","arrowProps","show","update","forceUpdate","placement","state"]);!function(e,t){var a=e.ref,n=t.ref;e.ref=a.__wrapped||(a.__wrapped=function(e){return a(Object(u.a)(e))}),t.ref=n.__wrapped||(n.__wrapped=function(e){return n(Object(u.a)(e))})}(i,l);var m=Object.assign(d.current,{state:v,scheduleUpdate:j,placement:f,outOfBoundaries:(null==v||null==(c=v.modifiersData.hide)?void 0:c.isReferenceHidden)||!1});return"function"===typeof t?t(Object(n.a)({},p,i,{placement:f,show:s,popper:m,arrowProps:l})):o.a.cloneElement(t,Object(n.a)({},p,i,{placement:f,arrowProps:l,popper:m,className:b()(t.props.className,!a&&s&&"show"),style:Object(n.a)({},t.props.style,i.style)}))}))}P.defaultProps=K;var T=P,V=function(e){function t(){return e.apply(this,arguments)||this}return Object(c.a)(t,e),t.prototype.render=function(){return this.props.children},t}(o.a.Component);function R(e,t,a){var n=t[0],r=n.currentTarget,c=n.relatedTarget||n.nativeEvent[a];c&&c===r||Object(i.a)(r,c)||e.apply(void 0,t)}function F(e){var t=e.trigger,a=e.overlay,c=e.children,i=e.popperConfig,j=void 0===i?{}:i,b=e.show,f=e.defaultShow,v=void 0!==f&&f,p=e.onToggle,m=e.delay,h=e.placement,O=e.flip,x=void 0===O?h&&-1!==h.indexOf("auto"):O,y=Object(r.a)(e,["trigger","overlay","children","popperConfig","show","defaultShow","onToggle","delay","placement","flip"]),g=Object(l.useRef)(null),E=Object(s.a)(),N=Object(l.useRef)(""),C=Object(d.b)(b,v,p),w=C[0],S=C[1],k=function(e){return e&&"object"===typeof e?e:{show:e,hide:e}}(m),K="function"!==typeof c?o.a.Children.only(c).props:{},P=K.onFocus,F=K.onBlur,B=K.onClick,I=Object(l.useCallback)((function(){return Object(u.a)(g.current)}),[]),_=Object(l.useCallback)((function(){E.clear(),N.current="show",k.show?E.set((function(){"show"===N.current&&S(!0)}),k.show):S(!0)}),[k.show,S,E]),A=Object(l.useCallback)((function(){E.clear(),N.current="hide",k.hide?E.set((function(){"hide"===N.current&&S(!1)}),k.hide):S(!1)}),[k.hide,S,E]),H=Object(l.useCallback)((function(){_();for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];null==P||P.apply(void 0,t)}),[_,P]),z=Object(l.useCallback)((function(){A();for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];null==F||F.apply(void 0,t)}),[A,F]),D=Object(l.useCallback)((function(){S(!w),B&&B.apply(void 0,arguments)}),[B,S,w]),M=Object(l.useCallback)((function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];R(_,t,"fromElement")}),[_]),L=Object(l.useCallback)((function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];R(A,t,"toElement")}),[A]),W=null==t?[]:[].concat(t),G={};return-1!==W.indexOf("click")&&(G.onClick=D),-1!==W.indexOf("focus")&&(G.onFocus=H,G.onBlur=z),-1!==W.indexOf("hover")&&(G.onMouseOver=M,G.onMouseOut=L),o.a.createElement(o.a.Fragment,null,"function"===typeof c?c(Object(n.a)({},G,{ref:g})):o.a.createElement(V,{ref:g},Object(l.cloneElement)(c,G)),o.a.createElement(T,Object(n.a)({},y,{show:w,onHide:A,flip:x,placement:h,popperConfig:j,target:I}),a))}F.defaultProps={defaultShow:!1,trigger:["hover","focus"]};t.a=F},119:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext(null);r.displayName="AccordionContext",t.a=r},123:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(1),r=a(3),c=a(0),i=a(139);function l(e){var t=e.value,a=e.onChange,l=e.disabled,o=e.float,s=void 0!==o&&o,u=e.placeholder,d=e.allowEmpty,j=void 0!==d&&d,b=Object(c.useState)(null!==t&&void 0!==t?t:""),f=Object(r.a)(b,2),v=f[0],p=f[1],m=Object(c.useState)({}),h=Object(r.a)(m,2),O=h[0],x=h[1],y=Object(c.useCallback)((function(){if(x({}),j&&""===v)return a(null);""===v&&p(0);var e=s?parseFloat:parseInt;a(e(v)||0)}),[t,a,v,s,j]);return Object(c.useEffect)((function(){return p(null!==t&&void 0!==t?t:"")}),[t,p,O]),Object(n.jsx)(i.a,{value:v,"aria-label":"custom-input",className:"hide-appearance",type:"number",placeholder:u,onChange:function(e){return p(e.target.value)},onBlur:y,disabled:l,onKeyDown:function(e){return"Enter"===e.key&&y()}})}},129:function(e,t,a){"use strict";a.d(t,"b",(function(){return s}));var n=a(2),r=a(4),c=a(0),i=a.n(c),l=a(21),o=a(119);function s(e,t){var a=Object(c.useContext)(o.a),n=Object(c.useContext)(l.a);return function(r){n&&n(e===a?null:e,r),t&&t(r)}}var u=i.a.forwardRef((function(e,t){var a=e.as,c=void 0===a?"button":a,l=e.children,o=e.eventKey,u=e.onClick,d=Object(r.a)(e,["as","children","eventKey","onClick"]),j=s(o,u);return"button"===c&&(d.type="button"),i.a.createElement(c,Object(n.a)({ref:t,onClick:j},d),l)}));t.a=u},141:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(1),r=a(126),c=a(106),i=a(13);function l(e){var t=e.onSelect;return i.a.getCharacterKeyList().sort((function(e,t){return e<t?-1:e>t?1:0})).map((function(e){return Object(n.jsx)(r.a.Item,{onClick:function(){return t(e)},children:c.a.getName(e)},e)}))}},144:function(e,t,a){"use strict";var n=a(11),r=a(1),c=a(68),i=a(22),l=a(27),o=a(108),s=a(163),u=a(114),d=a(113),j=a(123);t.a=function(e){var t=e.name,a=e.prependEle,b=e.value,f=e.placeholder,v=e.defaultValue,p=e.onValueChange,m=e.percent,h=e.disabled,O=Object(c.a)(e,["name","prependEle","value","placeholder","defaultValue","onValueChange","percent","disabled"]);return Object(r.jsxs)(s.a,Object(n.a)(Object(n.a)({},O),{},{children:[a?Object(r.jsx)(s.a.Prepend,{children:a}):null,Object(r.jsx)(s.a.Prepend,{children:Object(r.jsx)(s.a.Text,{children:t})}),Object(r.jsx)(j.a,{float:m,placeholder:f,value:b,onChange:p,disabled:h}),Object(r.jsxs)(s.a.Append,{children:[Boolean(m)&&Object(r.jsx)(s.a.Text,{children:"%"}),void 0!==v&&Object(r.jsx)(u.a,{placement:"top",overlay:Object(r.jsx)(d.a,{children:"Reset this override to the default value."}),children:Object(r.jsx)("span",{className:"d-inline-block",children:Object(r.jsx)(o.a,{onClick:function(){return p(v)},disabled:h||b===v,style:b===v?{pointerEvents:"none"}:{},children:Object(r.jsx)(l.a,{icon:i.F})})})})]})]}))}},145:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(11),r=a(1),c=a(46),i=a(64),l=a(106),o=a(45),s=a(134);function u(e){var t,a,n=e.label,l=void 0===n?"":n,o=e.val,s=e.oldVal,u=e.fixed,d=void 0===u?0:u,j=e.unit,b=void 0===j?"":j,f=e.variant,v=void 0===f?"":f;"undefined"===typeof s&&"number"===typeof o&&(s=o,o=void 0);var p=void 0!==o?o-s:0,m="",h="";return s||0===p?m=null===(t=s)||void 0===t?void 0:t.toFixed(d):void 0===s&&(m=null===(a=o)||void 0===a?void 0:a.toFixed(d)),m&&(m=Object(r.jsxs)("span",{className:"text-".concat(v),children:[m,b]})),0!==p&&(h=Object(r.jsxs)("span",{className:"text-".concat(p>0?"success":"danger"),children:[p>0?"+":"",null===p||void 0===p?void 0:p.toFixed(d),b]})),Object(r.jsx)(c.a,{xs:"12",children:Object(r.jsxs)(i.a,{children:[Object(r.jsx)(c.a,{children:Object(r.jsx)("b",{children:l})}),Object(r.jsxs)(c.a,{xs:"auto",children:[m,p?" ":"",h]})]})})}function d(e){var t,a,c,i,d,j=e.character,b=e.equippedBuild,f=e.newBuild,v=e.editable,p=e.statKey,m="";if("string"===typeof p){if(f&&b){var h,O,x,y;t=null!==(h=null===f||void 0===f||null===(O=f.finalStats)||void 0===O?void 0:O[p])&&void 0!==h?h:0,a=null!==(x=null===b||void 0===b||null===(y=b.finalStats)||void 0===y?void 0:y[p])&&void 0!==x?x:0}else{var g,E,N=f||b;t=null!==(g=null===N||void 0===N||null===(E=N.finalStats)||void 0===E?void 0:E[p])&&void 0!==g?g:0;var C="invalid";(a=l.a.getStatValueWithOverride(j,p,C))===C&&(a=void 0),"finalHP"===p?a=l.a.getStatValueWithOverride(j,"characterHP"):"finalDEF"===p?a=l.a.getStatValueWithOverride(j,"characterDEF"):"finalATK"===p&&(a=l.a.getStatValueWithOverride(j,"characterATK")+l.a.getStatValueWithOverride(j,"weaponATK"))}i=o.a.getStatUnit(p),c=o.a.fixedUnit(p),m=Object(r.jsxs)("span",{children:[Object(s.a)(p)," ",o.a.getStatName(p)]})}else{var w,S,k,K,P=f||b,T=p.talentKey,V=p.sectionIndex,R=p.fieldIndex,F=l.a.getTalentField(P.finalStats,T,V,R),B=l.a.getTalentFieldValue(F,"variant",P.finalStats);if(m=Object(r.jsx)("span",{className:"text-".concat(B),children:l.a.getTalentFieldValue(F,"text",P.finalStats)}),c=l.a.getTalentFieldValue(F,"fixed",P.finalStats,0),t=null===(w=l.a.getTalentFieldValue(F,"formula",P.finalStats))||void 0===w||null===(S=w[0])||void 0===S?void 0:S.call(w,P.finalStats),f&&b)a=null===(k=l.a.getTalentFieldValue(F,"formula",b.finalStats))||void 0===k||null===(K=k[0])||void 0===K?void 0:K.call(k,b.finalStats)}return v&&l.a.hasOverride(j,p)&&(d="warning"),Object(r.jsx)(u,Object(n.a)({},{val:t,oldVal:a,fixed:c,unit:i,variant:d,label:m}))}},150:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(28),r=a(1),c=a(29),i=a(22),l=a(27),o=a(0),s=a.n(o),u=a(138),d=a(108),j=a(126);function b(e){var t=e.conditional,a=e.conditionalNum,o=e.setConditional,b=e.defEle,f=e.disabled;if(!t)return b;if(Array.isArray(t)){var v,p=a,m=null,h=Object(c.a)(t);try{for(h.s();!(v=h.n()).done;){var O=v.value;if(!(p>O.maxStack)){m=O;break}p-=O.maxStack}}catch(N){h.e(N)}finally{h.f()}m||(p=0,m=t[0]);var x=0===p?"Not Active":Object(r.jsxs)("span",{children:[m.condition," ",m.maxStack>1?": ".concat(p," stack").concat(p>1?"s":""):""]}),y=Object(r.jsx)(u.a,{variant:0===p?"secondary":"success",children:x}),g=0;return Object(r.jsxs)(j.a,{children:[Object(r.jsx)(j.a.Toggle,{size:"sm",disabled:f,children:Object(r.jsxs)("h6",{className:"mb-0 d-inline",children:[b," ",y]})}),Object(r.jsxs)(j.a.Menu,{children:[Object(r.jsx)(j.a.Item,{onClick:function(){return o(0)},children:Object(r.jsx)("span",{children:"Not Active"})}),t.map((function(e,t){return Object(r.jsx)(s.a.Fragment,{children:Object(n.a)(Array(e.maxStack).keys()).map((function(e){return e+1})).map((function(t){var a=++g;return Object(r.jsxs)(j.a.Item,{onClick:function(){return o(a)},children:[e.condition,m.maxStack>1?": ".concat(t," stack").concat(t>1?"s":""):""]},a)}))},t)}))]})]})}if(t.maxStack>1){var E=Object(r.jsx)(u.a,{variant:0===a?"secondary":"success",children:a>0?"".concat(a," stack").concat(a>1?"s":""):"Not Active"});return Object(r.jsxs)(j.a,{children:[Object(r.jsx)(j.a.Toggle,{size:"sm",disabled:f,children:Object(r.jsxs)("h6",{className:"mb-0 d-inline",children:[b," ",E]})}),Object(r.jsxs)(j.a.Menu,{children:[Object(r.jsx)(j.a.Item,{onClick:function(){return o(0)},children:Object(r.jsx)("span",{children:"Not Active"})}),Object(n.a)(Array(t.maxStack).keys()).map((function(e){return e+1})).map((function(e){return Object(r.jsx)(j.a.Item,{onClick:function(){return o(e)},children:"".concat(e," stack").concat(e>1?"s":"")},e)}))]})]})}return 1===t.maxStack?Object(r.jsx)(d.a,{size:"sm",onClick:function(){return o(a?0:1)},disabled:f,children:Object(r.jsxs)("h6",{className:"mb-0",children:[Object(r.jsx)(l.a,{icon:a?i.b:i.y})," ",b]})}):void 0}},156:function(e,t,a){"use strict";a.d(t,"c",(function(){return S})),a.d(t,"a",(function(){return N})),a.d(t,"b",(function(){return E}));var n=a(3),r=a(1),c=a(22),i=a(27),l=a(0),o=a(193),s=a(155),u=a(151),d=a(48),j=a(178),b=a(119),f=a(108),v=a(64),p=a(46),m=a(129),h=a(124),O=a(45),x=a(122),y=a(106),g=a(144);function E(e){var t=e.character,a=t.characterKey,n=t.reactionMode,c=void 0===n?"none":n,i=e.characterDispatch,l=e.className;null===c&&(c="none");var d=y.a.getElementalKey(a);return["pyro","hydro","cryo"].includes(d)&&Object(r.jsxs)(o.a,{className:l,type:"radio",name:"reactionMode",value:c,onChange:function(e){return i({reactionMode:"none"===e?null:e})},children:[Object(r.jsx)(s.a,{value:"none",variant:"none"===c?"success":"primary",children:"No Reactions"}),"pyro"===d&&Object(r.jsx)(s.a,{value:"pyro_vaporize",variant:"pyro_vaporize"===c?"success":"primary",children:Object(r.jsxs)("span",{className:"text-vaporize",children:["Vaporize(Pyro) ",Object(r.jsx)(u.a,{src:h.a.elements.hydro,className:"inline-icon"}),"+",Object(r.jsx)(u.a,{src:h.a.elements.pyro,className:"inline-icon"})]})}),"pyro"===d&&Object(r.jsx)(s.a,{value:"pyro_melt",variant:"pyro_melt"===c?"success":"primary",children:Object(r.jsxs)("span",{className:"text-melt",children:["Melt(Pyro) ",Object(r.jsx)(u.a,{src:h.a.elements.cryo,className:"inline-icon"}),"+",Object(r.jsx)(u.a,{src:h.a.elements.pyro,className:"inline-icon"})]})}),"hydro"===d&&Object(r.jsx)(s.a,{value:"hydro_vaporize",variant:"hydro_vaporize"===c?"success":"primary",children:Object(r.jsxs)("span",{className:"text-vaporize",children:["Vaporize(Hydro) ",Object(r.jsx)(u.a,{src:h.a.elements.pyro,className:"inline-icon"}),"+",Object(r.jsx)(u.a,{src:h.a.elements.hydro,className:"inline-icon"})]})}),"cryo"===d&&Object(r.jsx)(s.a,{value:"cryo_melt",variant:"cryo_melt"===c?"success":"primary",children:Object(r.jsxs)("span",{className:"text-melt",children:["Melt(Cryo) ",Object(r.jsx)(u.a,{src:h.a.elements.pyro,className:"inline-icon"}),"+",Object(r.jsx)(u.a,{src:h.a.elements.cryo,className:"inline-icon"})]})})]})}function N(e){var t=e.hitMode,a=e.characterDispatch,n=e.className;return Object(r.jsxs)(o.a,{type:"radio",value:t,name:"hitOptions",onChange:function(e){return a({hitMode:e})},className:n,children:[Object(r.jsx)(s.a,{value:"avgHit",variant:"avgHit"===t?"success":"primary",children:"Avg. DMG"}),Object(r.jsx)(s.a,{value:"hit",variant:"hit"===t?"success":"primary",children:"Non Crit DMG"}),Object(r.jsx)(s.a,{value:"critHit",variant:"critHit"===t?"success":"primary",children:"Crit Hit DMG"})]})}function C(e){e.character;var t=e.character.characterKey,a=e.build;return Object(r.jsx)("div",{children:Object.entries(y.a.getDisplayStatKeys(a.finalStats)).map((function(e){var c=Object(n.a)(e,2),i=c[0],l=c[1],o="";return o="basicKeys"===i?"Basic Stats":"genericAvgHit"===i?"Generic Optimization Values":"transReactions"===i?"Transformation Reaction":y.a.getTalentName(t,i,i),Object(r.jsxs)(d.a,{bg:"darkcontent",text:"lightfont",className:"w-100 mb-2",children:[Object(r.jsx)(d.a.Header,{children:o}),Object(r.jsx)(d.a.Body,{className:"p-2",children:Object(r.jsx)(j.a,{className:"mb-n2",children:l.map((function(e,t){var c,i,l,o;if("string"===typeof e){var s,u,b=O.a.getPrintableFormulaStatKeyList(Object(x.a)(null===a||void 0===a||null===(s=a.finalStats)||void 0===s?void 0:s.modifiers,[e]),null===a||void 0===a||null===(u=a.finalStats)||void 0===u?void 0:u.modifiers).reverse();return Boolean(b.length)&&Object(r.jsxs)(d.a,{bg:"lightcontent",text:"lightfont",className:"mb-2",children:[Object(r.jsx)(j.a.Toggle,{as:d.a.Header,className:"p-2 cursor-pointer",variant:"link",eventKey:"field".concat(t),children:O.a.printStat(e,a.finalStats)}),Object(r.jsx)(j.a.Collapse,{eventKey:"field".concat(t),children:Object(r.jsx)(d.a.Body,{className:"p-2",children:Object(r.jsx)("div",{className:"mb-n2",children:b.map((function(e){return Object(r.jsxs)("p",{className:"mb-2",children:[O.a.printStat(e,a.finalStats)," = ",Object(r.jsx)("small",{children:O.a.printFormula(e,a.finalStats,a.finalStats.modifiers,!1)})]},e)}))})})})]},t)}var f=y.a.getTalentField(a.finalStats,e.talentKey,e.sectionIndex,e.fieldIndex),v=y.a.getTalentFieldValue(f,"text",a.finalStats),p=y.a.getTalentFieldValue(f,"variant",a.finalStats),m=y.a.getTalentFieldValue(f,"formulaText",a.finalStats),h=y.a.getTalentFieldValue(f,"formula",a.finalStats,[]),g=Object(n.a)(h,2),E=g[0],N=g[1];if(!E||!N)return null;var C=null===E||void 0===E||null===(c=E(a.finalStats))||void 0===c||null===(i=c.toFixed)||void 0===i?void 0:i.call(c),w=O.a.getPrintableFormulaStatKeyList(Object(x.a)(null===a||void 0===a||null===(l=a.finalStats)||void 0===l?void 0:l.modifiers,N),null===a||void 0===a||null===(o=a.finalStats)||void 0===o?void 0:o.modifiers).reverse();return Object(r.jsxs)(d.a,{bg:"lightcontent",text:"lightfont",className:"mb-2",children:[Object(r.jsxs)(j.a.Toggle,{as:d.a.Header,className:"p-2 cursor-pointer",variant:"link",eventKey:"field".concat(t),children:[Object(r.jsx)("b",{className:"text-".concat(p),children:v})," ",Object(r.jsx)("span",{className:"text-info",children:C})]}),Object(r.jsx)(j.a.Collapse,{eventKey:"field".concat(t),children:Object(r.jsx)(d.a.Body,{className:"p-2",children:Object(r.jsxs)("div",{className:"mb-n2",children:[Object(r.jsxs)("p",{className:"mb-2",children:[Object(r.jsx)("b",{className:"text-".concat(p),children:v})," ",Object(r.jsx)("span",{className:"text-info",children:C})," = ",Object(r.jsx)("small",{children:m})]}),w.map((function(e){return Object(r.jsxs)("p",{className:"mb-2",children:[O.a.printStat(e,a.finalStats)," = ",Object(r.jsx)("small",{children:O.a.printFormula(e,a.finalStats,a.finalStats.modifiers,!1)})]},e)}))]})})})]},t)}))})})]},i)}))})}var w=function(e){var t=e.eventKey,a=e.callback,n=Object(l.useContext)(b.a),o=Object(m.b)(t,(function(){return a&&a(t)})),s=n===t;return Object(r.jsxs)(f.a,{onClick:o,variant:"info",children:[Object(r.jsx)(i.a,{icon:s?c.I:c.H,className:"fa-fw ".concat(s?"fa-rotate-180":"")}),Object(r.jsx)("span",{children:" "}),s?"Retract":"Expand"]})};function S(e){var t=e.character,a=e.character.hitMode,n=e.characterDispatch,l=e.newBuild,o=e.equippedBuild,s=e.className,u=l||o;return Object(r.jsxs)(j.a,{className:s,children:[Object(r.jsx)(d.a,{bg:"lightcontent",text:"lightfont",className:"mb-2",children:Object(r.jsx)(d.a.Header,{children:Object(r.jsxs)(v.a,{children:[Object(r.jsx)(p.a,{xs:"auto",children:Object(r.jsx)(N,{hitMode:a,characterDispatch:n})}),Object(r.jsx)(p.a,{xs:"auto",children:Object(r.jsx)(E,{character:t,characterDispatch:n})})]})})}),Object(r.jsxs)(d.a,{bg:"lightcontent",text:"lightfont",children:[Object(r.jsx)(d.a.Header,{children:Object(r.jsxs)(v.a,{children:[Object(r.jsxs)(p.a,{children:[Object(r.jsx)("span",{className:"d-block",children:"Damage Calculation Options & Formulas"}),Object(r.jsx)("small",{children:"Expand below to edit enemy details and view calculation details."})]}),Object(r.jsx)(p.a,{xs:"auto",children:Object(r.jsx)(w,{as:f.a,eventKey:"details"})})]})}),Object(r.jsx)(j.a.Collapse,{eventKey:"details",children:Object(r.jsxs)(d.a.Body,{className:"p-2",children:[Object(r.jsxs)(d.a,{className:"mb-2",bg:"darkcontent",text:"lightfont",children:[Object(r.jsx)(d.a.Header,{children:Object(r.jsxs)(v.a,{children:[Object(r.jsx)(p.a,{children:"Enemy Editor"}),Object(r.jsx)(p.a,{xs:"auto",children:Object(r.jsx)(f.a,{variant:"warning",size:"sm",children:Object(r.jsx)("a",{href:"https://genshin-impact.fandom.com/wiki/Damage#Base_Enemy_Resistances",target:"_blank",rel:"noreferrer",children:"To get the specific resistance values of enemies, please visit the wiki."})})})]})}),Object(r.jsx)(d.a.Body,{className:"p-2",children:Object(r.jsxs)(v.a,{children:[Object(r.jsx)(p.a,{xs:12,xl:6,className:"mb-2",children:Object(r.jsx)(g.a,{name:Object(r.jsx)("b",{children:"Enemy Level"}),value:y.a.getStatValueWithOverride(t,"enemyLevel"),placeholder:O.a.getStatNameRaw("enemyLevel"),defaultValue:y.a.getBaseStatValue(t,"enemyLevel"),onValueChange:function(e){return n({type:"statOverride",statKey:"enemyLevel",value:e})}})}),y.a.getElementalKeys().map((function(e){var a="physical"===e?"physical_enemyRes_":"".concat(e,"_enemyRes_"),l="physical"===e?"physical_enemyImmunity":"".concat(e,"_enemyImmunity"),o=y.a.getStatValueWithOverride(t,l);return Object(r.jsx)(p.a,{xs:12,xl:6,className:"mb-2",children:Object(r.jsx)(g.a,{prependEle:Object(r.jsxs)(f.a,{variant:e,onClick:function(){return n({type:"statOverride",statKey:l,value:!o})},className:"text-darkcontent",children:[Object(r.jsx)(i.a,{icon:o?c.b:c.y,className:"fa-fw"})," Immunity"]}),name:Object(r.jsx)("b",{children:O.a.getStatName(a)}),value:y.a.getStatValueWithOverride(t,a),placeholder:O.a.getStatNameRaw(a),defaultValue:y.a.getBaseStatValue(t,a),onValueChange:function(e){return n({type:"statOverride",statKey:a,value:e})},disabled:o,percent:!0})},e)})),Object(r.jsx)(p.a,{xs:12,children:Object(r.jsx)("small",{children:"Note: for negative resistances due to resistance shred like Zhongli's shield (e.g. -10%), enter the RAW value (-10). GO will half the value for you in the calculations."})})]})})]}),Object(r.jsx)(C,{character:t,build:u})]})})]})]})}},157:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(1),r=a(11),c=a(3),i=a(64),l=a(46),o=a(48),s=a(145),u=a(106);function d(e){var t=e.character,a=e.character.characterKey,d=e.equippedBuild,j=e.newBuild,b=e.statsDisplayKeys,f=e.editable,v=e.cardbg,p=void 0===v?"darkcontent":v;return Object(n.jsx)(i.a,{className:"mb-n2",children:Object.entries(b).map((function(e){var b=Object(c.a)(e,2),v=b[0],m=b[1],h="";return h="basicKeys"===v?"Basic Stats":"genericAvgHit"===v?"Generic Optimization Values":"transReactions"===v?"Transformation Reaction":u.a.getTalentName(a,v,v),Object(n.jsx)(l.a,{className:"mb-2",xs:12,md:6,xl:4,children:Object(n.jsxs)(o.a,{bg:p,text:"lightfont",className:"h-100",children:[Object(n.jsx)(o.a.Header,{children:h}),Object(n.jsx)(o.a.Body,{children:Object(n.jsx)(i.a,{children:m.map((function(e){return Object(n.jsx)(s.a,Object(r.a)({},{character:t,equippedBuild:d,newBuild:j,editable:f,statKey:e}),JSON.stringify(e))}))})})]})},v)}))})}},176:function(e,t,a){"use strict";var n=a(12),r=a(0),c=a.n(r),i=a(38),l=a(61),o=a(21),s=function(e){var t=Object(i.a)(e,{activeKey:"onSelect"}),a=t.id,n=t.generateChildId,s=t.onSelect,u=t.activeKey,d=t.transition,j=t.mountOnEnter,b=t.unmountOnExit,f=t.children,v=Object(r.useMemo)((function(){return n||function(e,t){return a?a+"-"+t+"-"+e:null}}),[a,n]),p=Object(r.useMemo)((function(){return{onSelect:s,activeKey:u,transition:d,mountOnEnter:j||!1,unmountOnExit:b||!1,getControlledId:function(e){return v(e,"tabpane")},getControllerId:function(e){return v(e,"tab")}}}),[s,u,d,j,b,v]);return c.a.createElement(l.a.Provider,{value:p},c.a.createElement(o.a.Provider,{value:s||null},f))},u=a(2),d=a(4),j=a(7),b=a.n(j),f=a(8),v=c.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.as,r=void 0===n?"div":n,i=e.className,l=Object(d.a)(e,["bsPrefix","as","className"]),o=Object(f.a)(a,"tab-content");return c.a.createElement(r,Object(u.a)({ref:t},l,{className:b()(i,o)}))})),p=a(107);var m=c.a.forwardRef((function(e,t){var a=function(e){var t=Object(r.useContext)(l.a);if(!t)return e;var a=t.activeKey,n=t.getControlledId,c=t.getControllerId,i=Object(d.a)(t,["activeKey","getControlledId","getControllerId"]),s=!1!==e.transition&&!1!==i.transition,j=Object(o.b)(e.eventKey);return Object(u.a)({},e,{active:null==e.active&&null!=j?Object(o.b)(a)===j:e.active,id:n(e.eventKey),"aria-labelledby":c(e.eventKey),transition:s&&(e.transition||i.transition||p.a),mountOnEnter:null!=e.mountOnEnter?e.mountOnEnter:i.mountOnEnter,unmountOnExit:null!=e.unmountOnExit?e.unmountOnExit:i.unmountOnExit})}(e),n=a.bsPrefix,i=a.className,s=a.active,j=a.onEnter,v=a.onEntering,m=a.onEntered,h=a.onExit,O=a.onExiting,x=a.onExited,y=a.mountOnEnter,g=a.unmountOnExit,E=a.transition,N=a.as,C=void 0===N?"div":N,w=(a.eventKey,Object(d.a)(a,["bsPrefix","className","active","onEnter","onEntering","onEntered","onExit","onExiting","onExited","mountOnEnter","unmountOnExit","transition","as","eventKey"])),S=Object(f.a)(n,"tab-pane");if(!s&&!E&&g)return null;var k=c.a.createElement(C,Object(u.a)({},w,{ref:t,role:"tabpanel","aria-hidden":!s,className:b()(i,S,{active:s})}));return E&&(k=c.a.createElement(E,{in:s,onEnter:j,onEntering:v,onEntered:m,onExit:h,onExiting:O,onExited:x,mountOnEnter:y,unmountOnExit:g},k)),c.a.createElement(l.a.Provider,{value:null},c.a.createElement(o.a.Provider,{value:null},k))}));m.displayName="TabPane";var h=m,O=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")},t}(c.a.Component);O.Container=s,O.Content=v,O.Pane=h;t.a=O},178:function(e,t,a){"use strict";var n=a(2),r=a(4),c=a(7),i=a.n(c),l=a(0),o=a.n(l),s=a(38),u=a(8),d=a(129),j=a(21),b=a(65),f=a(119),v=o.a.forwardRef((function(e,t){var a=e.children,c=e.eventKey,i=Object(r.a)(e,["children","eventKey"]),s=Object(l.useContext)(f.a);return o.a.createElement(j.a.Provider,{value:null},o.a.createElement(b.a,Object(n.a)({ref:t,in:s===c},i),o.a.createElement("div",null,o.a.Children.only(a))))}));v.displayName="AccordionCollapse";var p=v,m=o.a.forwardRef((function(e,t){var a=Object(s.a)(e,{activeKey:"onSelect"}),c=a.as,l=void 0===c?"div":c,d=a.activeKey,b=a.bsPrefix,v=a.children,p=a.className,m=a.onSelect,h=Object(r.a)(a,["as","activeKey","bsPrefix","children","className","onSelect"]),O=i()(p,Object(u.a)(b,"accordion"));return o.a.createElement(f.a.Provider,{value:d||null},o.a.createElement(j.a.Provider,{value:m||null},o.a.createElement(l,Object(n.a)({ref:t},h,{className:O}),v)))}));m.displayName="Accordion",m.Toggle=d.a,m.Collapse=p;t.a=m},179:function(e,t,a){"use strict";var n=a(2),r=a(4),c=a(7),i=a.n(c),l=a(0),o=a.n(l),s=(a(83),a(38)),u=a(8),d=a(66),j=a(67),b=a(21),f={variant:void 0,active:!1,disabled:!1},v=o.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.active,s=e.disabled,d=e.className,f=e.variant,v=e.action,p=e.as,m=e.eventKey,h=e.onClick,O=Object(r.a)(e,["bsPrefix","active","disabled","className","variant","action","as","eventKey","onClick"]);a=Object(u.a)(a,"list-group-item");var x=Object(l.useCallback)((function(e){if(s)return e.preventDefault(),void e.stopPropagation();h&&h(e)}),[s,h]);return s&&void 0===O.tabIndex&&(O.tabIndex=-1,O["aria-disabled"]=!0),o.a.createElement(j.a,Object(n.a)({ref:t},O,{eventKey:Object(b.b)(m,O.href),as:p||(v?O.href?"a":"button":"div"),onClick:x,className:i()(d,a,c&&"active",s&&"disabled",f&&a+"-"+f,v&&a+"-action")}))}));v.defaultProps=f,v.displayName="ListGroupItem";var p=v,m={variant:void 0,horizontal:void 0},h=o.a.forwardRef((function(e,t){var a,c=Object(s.a)(e,{activeKey:"onSelect"}),l=c.className,j=c.bsPrefix,b=c.variant,f=c.horizontal,v=c.as,p=void 0===v?"div":v,m=Object(r.a)(c,["className","bsPrefix","variant","horizontal","as"]),h=Object(u.a)(j,"list-group");return a=f?!0===f?"horizontal":"horizontal-"+f:null,o.a.createElement(d.a,Object(n.a)({ref:t},m,{as:p,className:i()(l,h,b&&h+"-"+b,a&&h+"-"+a)}))}));h.defaultProps=m,h.displayName="ListGroup",h.Item=p;t.a=h}}]);
//# sourceMappingURL=15.27ff2c0e.chunk.js.map