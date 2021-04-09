(this["webpackJsonpgenshin-optimizer"]=this["webpackJsonpgenshin-optimizer"]||[]).push([[3],{107:function(e,n,t){"use strict";var a,r=t(2),o=t(4),i=t(7),c=t.n(i),s=t(60),l=t(0),u=t.n(l),d=t(32),f=t(63),b=((a={})[d.b]="show",a[d.a]="show",a),m=u.a.forwardRef((function(e,n){var t=e.className,a=e.children,i=Object(o.a)(e,["className","children"]),m=Object(l.useCallback)((function(e){Object(f.a)(e),i.onEnter&&i.onEnter(e)}),[i]);return u.a.createElement(d.e,Object(r.a)({ref:n,addEndListener:s.a},i,{onEnter:m}),(function(e,n){return u.a.cloneElement(a,Object(r.a)({},n,{className:c()("fade",t,a.props.className,b[e])}))}))}));m.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},m.displayName="Fade",n.a=m},108:function(e,n,t){"use strict";var a=t(2),r=t(4),o=t(7),i=t.n(o),c=t(0),s=t.n(c),l=t(8),u=t(62),d=s.a.forwardRef((function(e,n){var t=e.bsPrefix,o=e.variant,c=e.size,d=e.active,f=e.className,b=e.block,m=e.type,p=e.as,v=Object(r.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),h=Object(l.a)(t,"btn"),g=i()(f,h,d&&"active",o&&h+"-"+o,b&&h+"-block",c&&h+"-"+c);if(v.href)return s.a.createElement(u.a,Object(a.a)({},v,{as:p,ref:n,className:i()(g,v.disabled&&"disabled")}));n&&(v.ref=n),m?v.type=m:p||(v.type="button");var O=p||"button";return s.a.createElement(O,Object(a.a)({},v,{className:g}))}));d.displayName="Button",d.defaultProps={variant:"primary",active:!1,disabled:!1},n.a=d},112:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t(0);function r(){return Object(a.useState)(null)}},115:function(e,n,t){"use strict";function a(e,n){return e.contains?e.contains(n):e.compareDocumentPosition?e===n||!!(16&e.compareDocumentPosition(n)):void 0}t.d(n,"a",(function(){return a}))},116:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t(0);function r(){var e=Object(a.useRef)(!0),n=Object(a.useRef)((function(){return e.current}));return Object(a.useEffect)((function(){return function(){e.current=!1}}),[]),n.current}},120:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t(0);function r(e){var n=function(e){var n=Object(a.useRef)(e);return n.current=e,n}(e);Object(a.useEffect)((function(){return function(){return n.current()}}),[])}},121:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var a=t(58),r=t(0),o=function(e){var n;return"undefined"===typeof document?null:null==e?Object(a.a)().body:("function"===typeof e&&(e=e()),e&&"current"in e&&(e=e.current),(null==(n=e)?void 0:n.nodeType)&&e||null)};function i(e,n){var t=Object(r.useState)((function(){return o(e)})),a=t[0],i=t[1];if(!a){var c=o(e);c&&i(c)}return Object(r.useEffect)((function(){n&&a&&n(a)}),[n,a]),Object(r.useEffect)((function(){var n=o(e);n!==a&&i(n)}),[e,a]),a}},138:function(e,n,t){"use strict";var a=t(2),r=t(4),o=t(7),i=t.n(o),c=t(0),s=t.n(c),l=t(8),u=s.a.forwardRef((function(e,n){var t=e.bsPrefix,o=e.variant,c=e.pill,u=e.className,d=e.as,f=void 0===d?"span":d,b=Object(r.a)(e,["bsPrefix","variant","pill","className","as"]),m=Object(l.a)(t,"badge");return s.a.createElement(f,Object(a.a)({ref:n},b,{className:i()(u,m,c&&m+"-pill",o&&m+"-"+o)}))}));u.displayName="Badge",u.defaultProps={pill:!1},n.a=u},142:function(e,n,t){"use strict";var a=t(2),r=t(4),o=t(6),i=t.n(o),c=t(0),s=t.n(c),l=t(7),u=t.n(l),d={label:i.a.string.isRequired,onClick:i.a.func},f=s.a.forwardRef((function(e,n){var t=e.label,o=e.onClick,i=e.className,c=Object(r.a)(e,["label","onClick","className"]);return s.a.createElement("button",Object(a.a)({ref:n,type:"button",className:u()("close",i),onClick:o},c),s.a.createElement("span",{"aria-hidden":"true"},"\xd7"),s.a.createElement("span",{className:"sr-only"},t))}));f.displayName="CloseButton",f.propTypes=d,f.defaultProps={label:"Close"},n.a=f},143:function(e,n,t){"use strict";var a=t(2),r=t(4),o=t(7),i=t.n(o),c=t(0),s=t.n(c),l=t(8),u=s.a.forwardRef((function(e,n){var t=e.bsPrefix,o=e.size,c=e.toggle,u=e.vertical,d=e.className,f=e.as,b=void 0===f?"div":f,m=Object(r.a)(e,["bsPrefix","size","toggle","vertical","className","as"]),p=Object(l.a)(t,"btn-group"),v=p;return u&&(v=p+"-vertical"),s.a.createElement(b,Object(a.a)({},m,{ref:n,className:i()(d,v,o&&p+"-"+o,c&&p+"-toggle")}))}));u.displayName="ButtonGroup",u.defaultProps={vertical:!1,toggle:!1,role:"group"},n.a=u},146:function(e,n,t){"use strict";function a(e,n){return e.classList?!!n&&e.classList.contains(n):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+n+" ")}t.d(n,"a",(function(){return a}))},149:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var a=t(0),r=t.n(a);function o(e,n){var t=0;return r.a.Children.map(e,(function(e){return r.a.isValidElement(e)?n(e,t++):e}))}},151:function(e,n,t){"use strict";var a=t(2),r=t(4),o=t(7),i=t.n(o),c=t(0),s=t.n(c),l=t(6),u=t.n(l),d=t(8),f=(u.a.string,u.a.bool,u.a.bool,u.a.bool,u.a.bool,s.a.forwardRef((function(e,n){var t=e.bsPrefix,o=e.className,c=e.fluid,l=e.rounded,u=e.roundedCircle,f=e.thumbnail,b=Object(r.a)(e,["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"]);t=Object(d.a)(t,"img");var m=i()(c&&t+"-fluid",l&&"rounded",u&&"rounded-circle",f&&t+"-thumbnail");return s.a.createElement("img",Object(a.a)({ref:n},b,{className:i()(o,m)}))})));f.displayName="Image",f.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1},n.a=f},152:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t(0);function r(e){var n=Object(a.useRef)(null);return Object(a.useEffect)((function(){n.current=e})),n.current}},155:function(e,n,t){"use strict";var a=t(2),r=t(4),o=t(7),i=t.n(o),c=t(0),s=t.n(c),l=t(108),u=function(){},d=s.a.forwardRef((function(e,n){var t=e.children,o=e.name,d=e.className,f=e.checked,b=e.type,m=e.onChange,p=e.value,v=e.disabled,h=e.inputRef,g=Object(r.a)(e,["children","name","className","checked","type","onChange","value","disabled","inputRef"]),O=Object(c.useState)(!1),j=O[0],y=O[1],E=Object(c.useCallback)((function(e){"INPUT"===e.target.tagName&&y(!0)}),[]),N=Object(c.useCallback)((function(e){"INPUT"===e.target.tagName&&y(!1)}),[]);return s.a.createElement(l.a,Object(a.a)({},g,{ref:n,className:i()(d,j&&"focus",v&&"disabled"),type:void 0,active:!!f,as:"label"}),s.a.createElement("input",{name:o,type:b,value:p,ref:h,autoComplete:"off",checked:!!f,disabled:!!v,onFocus:E,onBlur:N,onChange:m||u}),t)}));d.displayName="ToggleButton",n.a=d},193:function(e,n,t){"use strict";var a=t(2),r=t(4),o=t(0),i=t.n(o),c=t(47),s=t.n(c),l=t(38),u=t(26),d=t(149),f=t(143),b=t(155),m=i.a.forwardRef((function(e,n){var t=Object(l.a)(e,{value:"onChange"}),o=t.children,c=t.type,b=t.name,m=t.value,p=t.onChange,v=Object(r.a)(t,["children","type","name","value","onChange"]),h=function(){return null==m?[]:[].concat(m)};return"radio"!==c||b||s()(!1),i.a.createElement(f.a,Object(a.a)({},v,{ref:n,toggle:!0}),Object(d.a)(o,(function(e){var n=h(),t=e.props,a=t.value,r=t.onChange;return i.a.cloneElement(e,{type:c,name:e.name||b,checked:-1!==n.indexOf(a),onChange:Object(u.a)(r,(function(e){return function(e,n){if(p){var t=h(),a=-1!==t.indexOf(e);"radio"!==c?p(a?t.filter((function(n){return n!==e})):[].concat(t,[e]),n):!a&&p&&p(e,n)}}(a,e)}))})})))}));m.defaultProps={type:"radio",vertical:!1},m.Button=b.a,n.a=m},240:function(e,n,t){"use strict";var a,r=t(2),o=t(4),i=t(7),c=t.n(i),s=t(76),l=t(69),u=t(58),d=t(77);function f(e){if((!a&&0!==a||e)&&l.a){var n=document.createElement("div");n.style.position="absolute",n.style.top="-9999px",n.style.width="50px",n.style.height="50px",n.style.overflow="scroll",document.body.appendChild(n),a=n.offsetWidth-n.clientWidth,document.body.removeChild(n)}return a}var b=t(112),m=t(40),p=t(120),v=t(60),h=t(0),g=t.n(h);function O(e){void 0===e&&(e=Object(u.a)());try{var n=e.activeElement;return n&&n.nodeName?n:null}catch(t){return e.body}}var j=t(115),y=t(52),E=t(6),N=t.n(E),w=t(30),C=t.n(w),k=t(116),x=t(152),R=t(146);function F(e,n){e.classList?e.classList.add(n):Object(R.a)(e,n)||("string"===typeof e.className?e.className=e.className+" "+n:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+n))}function S(e,n){return e.replace(new RegExp("(^|\\s)"+n+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function T(e,n){e.classList?e.classList.remove(n):"string"===typeof e.className?e.className=S(e.className,n):e.setAttribute("class",S(e.className&&e.className.baseVal||"",n))}var P=t(34);function D(e){return"window"in e&&e.window===e?e:"nodeType"in(n=e)&&n.nodeType===document.DOCUMENT_NODE&&e.defaultView||!1;var n}function A(e){var n;return D(e)||(n=e)&&"body"===n.tagName.toLowerCase()?function(e){var n=D(e)?Object(u.a)():Object(u.a)(e),t=D(e)||n.defaultView;return n.body.clientWidth<t.innerWidth}(e):e.scrollHeight>e.clientHeight}var B=["template","script","style"],H=function(e,n,t){[].forEach.call(e.children,(function(e){-1===n.indexOf(e)&&function(e){var n=e.nodeType,t=e.tagName;return 1===n&&-1===B.indexOf(t.toLowerCase())}(e)&&t(e)}))};function M(e,n){n&&(e?n.setAttribute("aria-hidden","true"):n.removeAttribute("aria-hidden"))}var I,z=function(){function e(e){var n=void 0===e?{}:e,t=n.hideSiblingNodes,a=void 0===t||t,r=n.handleContainerOverflow,o=void 0===r||r;this.hideSiblingNodes=void 0,this.handleContainerOverflow=void 0,this.modals=void 0,this.containers=void 0,this.data=void 0,this.scrollbarSize=void 0,this.hideSiblingNodes=a,this.handleContainerOverflow=o,this.modals=[],this.containers=[],this.data=[],this.scrollbarSize=f()}var n=e.prototype;return n.isContainerOverflowing=function(e){var n=this.data[this.containerIndexFromModal(e)];return n&&n.overflowing},n.containerIndexFromModal=function(e){return function(e,n){var t=-1;return e.some((function(e,a){return!!n(e,a)&&(t=a,!0)})),t}(this.data,(function(n){return-1!==n.modals.indexOf(e)}))},n.setContainerStyle=function(e,n){var t={overflow:"hidden"};e.style={overflow:n.style.overflow,paddingRight:n.style.paddingRight},e.overflowing&&(t.paddingRight=parseInt(Object(P.a)(n,"paddingRight")||"0",10)+this.scrollbarSize+"px"),Object(P.a)(n,t)},n.removeContainerStyle=function(e,n){Object.assign(n.style,e.style)},n.add=function(e,n,t){var a=this.modals.indexOf(e),r=this.containers.indexOf(n);if(-1!==a)return a;if(a=this.modals.length,this.modals.push(e),this.hideSiblingNodes&&function(e,n){var t=n.dialog,a=n.backdrop;H(e,[t,a],(function(e){return M(!0,e)}))}(n,e),-1!==r)return this.data[r].modals.push(e),a;var o={modals:[e],classes:t?t.split(/\s+/):[],overflowing:A(n)};return this.handleContainerOverflow&&this.setContainerStyle(o,n),o.classes.forEach(F.bind(null,n)),this.containers.push(n),this.data.push(o),a},n.remove=function(e){var n=this.modals.indexOf(e);if(-1!==n){var t=this.containerIndexFromModal(e),a=this.data[t],r=this.containers[t];if(a.modals.splice(a.modals.indexOf(e),1),this.modals.splice(n,1),0===a.modals.length)a.classes.forEach(T.bind(null,r)),this.handleContainerOverflow&&this.removeContainerStyle(a,r),this.hideSiblingNodes&&function(e,n){var t=n.dialog,a=n.backdrop;H(e,[t,a],(function(e){return M(!1,e)}))}(r,e),this.containers.splice(t,1),this.data.splice(t,1);else if(this.hideSiblingNodes){var o=a.modals[a.modals.length-1],i=o.backdrop;M(!1,o.dialog),M(!1,i)}}},n.isTopModal=function(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e},e}(),L=t(121);function K(e){var n=e||(I||(I=new z),I),t=Object(h.useRef)({dialog:null,backdrop:null});return Object.assign(t.current,{add:function(e,a){return n.add(t.current,e,a)},remove:function(){return n.remove(t.current)},isTopModal:function(){return n.isTopModal(t.current)},setDialogRef:Object(h.useCallback)((function(e){t.current.dialog=e}),[]),setBackdropRef:Object(h.useCallback)((function(e){t.current.backdrop=e}),[])})}var U=Object(h.forwardRef)((function(e,n){var t=e.show,a=void 0!==t&&t,i=e.role,c=void 0===i?"dialog":i,s=e.className,u=e.style,d=e.children,f=e.backdrop,b=void 0===f||f,v=e.keyboard,E=void 0===v||v,N=e.onBackdropClick,w=e.onEscapeKeyDown,R=e.transition,F=e.backdropTransition,S=e.autoFocus,T=void 0===S||S,P=e.enforceFocus,D=void 0===P||P,A=e.restoreFocus,B=void 0===A||A,H=e.restoreFocusOptions,M=e.renderDialog,I=e.renderBackdrop,z=void 0===I?function(e){return g.a.createElement("div",e)}:I,U=e.manager,V=e.container,_=e.containerClassName,W=e.onShow,$=e.onHide,J=void 0===$?function(){}:$,q=e.onExit,G=e.onExited,Q=e.onExiting,X=e.onEnter,Y=e.onEntering,Z=e.onEntered,ee=Object(o.a)(e,["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","backdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","containerClassName","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"]),ne=Object(L.a)(V),te=K(U),ae=Object(k.a)(),re=Object(x.a)(a),oe=Object(h.useState)(!a),ie=oe[0],ce=oe[1],se=Object(h.useRef)(null);Object(h.useImperativeHandle)(n,(function(){return te}),[te]),l.a&&!re&&a&&(se.current=O()),R||a||ie?a&&ie&&ce(!1):ce(!0);var le=Object(m.a)((function(){if(te.add(ne,_),pe.current=Object(y.a)(document,"keydown",be),me.current=Object(y.a)(document,"focus",(function(){return setTimeout(de)}),!0),W&&W(),T){var e=O(document);te.dialog&&e&&!Object(j.a)(te.dialog,e)&&(se.current=e,te.dialog.focus())}})),ue=Object(m.a)((function(){var e;(te.remove(),null==pe.current||pe.current(),null==me.current||me.current(),B)&&(null==(e=se.current)||null==e.focus||e.focus(H),se.current=null)}));Object(h.useEffect)((function(){a&&ne&&le()}),[a,ne,le]),Object(h.useEffect)((function(){ie&&ue()}),[ie,ue]),Object(p.a)((function(){ue()}));var de=Object(m.a)((function(){if(D&&ae()&&te.isTopModal()){var e=O();te.dialog&&e&&!Object(j.a)(te.dialog,e)&&te.dialog.focus()}})),fe=Object(m.a)((function(e){e.target===e.currentTarget&&(null==N||N(e),!0===b&&J())})),be=Object(m.a)((function(e){E&&27===e.keyCode&&te.isTopModal()&&(null==w||w(e),e.defaultPrevented||J())})),me=Object(h.useRef)(),pe=Object(h.useRef)(),ve=R;if(!ne||!(a||ve&&!ie))return null;var he=Object(r.a)({role:c,ref:te.setDialogRef,"aria-modal":"dialog"===c||void 0},ee,{style:u,className:s,tabIndex:-1}),ge=M?M(he):g.a.createElement("div",he,g.a.cloneElement(d,{role:"document"}));ve&&(ge=g.a.createElement(ve,{appear:!0,unmountOnExit:!0,in:!!a,onExit:q,onExiting:Q,onExited:function(){ce(!0);for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];null==G||G.apply(void 0,n)},onEnter:X,onEntering:Y,onEntered:Z},ge));var Oe=null;if(b){var je=F;Oe=z({ref:te.setBackdropRef,onClick:fe}),je&&(Oe=g.a.createElement(je,{appear:!0,in:!!a},Oe))}return g.a.createElement(g.a.Fragment,null,C.a.createPortal(g.a.createElement(g.a.Fragment,null,Oe,ge),ne))})),V={show:N.a.bool,container:N.a.any,onShow:N.a.func,onHide:N.a.func,backdrop:N.a.oneOfType([N.a.bool,N.a.oneOf(["static"])]),renderDialog:N.a.func,renderBackdrop:N.a.func,onEscapeKeyDown:N.a.func,onBackdropClick:N.a.func,containerClassName:N.a.string,keyboard:N.a.bool,transition:N.a.elementType,backdropTransition:N.a.elementType,autoFocus:N.a.bool,enforceFocus:N.a.bool,restoreFocus:N.a.bool,restoreFocusOptions:N.a.shape({preventScroll:N.a.bool}),onEnter:N.a.func,onEntering:N.a.func,onEntered:N.a.func,onExit:N.a.func,onExiting:N.a.func,onExited:N.a.func,manager:N.a.instanceOf(z)};U.displayName="Modal",U.propTypes=V;var _=Object.assign(U,{Manager:z}),W=(t(83),t(12)),$=t(71),J=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",q=".sticky-top",G=".navbar-toggler",Q=function(e){function n(){return e.apply(this,arguments)||this}Object(W.a)(n,e);var t=n.prototype;return t.adjustAndStore=function(e,n,t){var a,r=n.style[e];n.dataset[e]=r,Object(P.a)(n,((a={})[e]=parseFloat(Object(P.a)(n,e))+t+"px",a))},t.restore=function(e,n){var t,a=n.dataset[e];void 0!==a&&(delete n.dataset[e],Object(P.a)(n,((t={})[e]=a,t)))},t.setContainerStyle=function(n,t){var a=this;if(e.prototype.setContainerStyle.call(this,n,t),n.overflowing){var r=f();Object($.a)(t,J).forEach((function(e){return a.adjustAndStore("paddingRight",e,r)})),Object($.a)(t,q).forEach((function(e){return a.adjustAndStore("marginRight",e,-r)})),Object($.a)(t,G).forEach((function(e){return a.adjustAndStore("marginRight",e,r)}))}},t.removeContainerStyle=function(n,t){var a=this;e.prototype.removeContainerStyle.call(this,n,t),Object($.a)(t,J).forEach((function(e){return a.restore("paddingRight",e)})),Object($.a)(t,q).forEach((function(e){return a.restore("marginRight",e)})),Object($.a)(t,G).forEach((function(e){return a.restore("marginRight",e)}))},n}(z),X=t(107),Y=t(18),Z=Object(Y.a)("modal-body"),ee=g.a.createContext({onHide:function(){}}),ne=t(8),te=g.a.forwardRef((function(e,n){var t=e.bsPrefix,a=e.className,i=e.contentClassName,s=e.centered,l=e.size,u=e.children,d=e.scrollable,f=Object(o.a)(e,["bsPrefix","className","contentClassName","centered","size","children","scrollable"]),b=(t=Object(ne.a)(t,"modal"))+"-dialog";return g.a.createElement("div",Object(r.a)({},f,{ref:n,className:c()(b,a,l&&t+"-"+l,s&&b+"-centered",d&&b+"-scrollable")}),g.a.createElement("div",{className:c()(t+"-content",i)},u))}));te.displayName="ModalDialog";var ae=te,re=Object(Y.a)("modal-footer"),oe=t(142),ie=g.a.forwardRef((function(e,n){var t=e.bsPrefix,a=e.closeLabel,i=e.closeButton,s=e.onHide,l=e.className,u=e.children,d=Object(o.a)(e,["bsPrefix","closeLabel","closeButton","onHide","className","children"]);t=Object(ne.a)(t,"modal-header");var f=Object(h.useContext)(ee),b=Object(m.a)((function(){f&&f.onHide(),s&&s()}));return g.a.createElement("div",Object(r.a)({ref:n},d,{className:c()(l,t)}),u,i&&g.a.createElement(oe.a,{label:a,onClick:b}))}));ie.displayName="ModalHeader",ie.defaultProps={closeLabel:"Close",closeButton:!1};var ce,se=ie,le=t(49),ue=Object(le.a)("h4"),de=Object(Y.a)("modal-title",{Component:ue}),fe={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:ae};function be(e){return g.a.createElement(X.a,e)}function me(e){return g.a.createElement(X.a,e)}var pe=g.a.forwardRef((function(e,n){var t=e.bsPrefix,a=e.className,i=e.style,O=e.dialogClassName,j=e.contentClassName,y=e.children,E=e.dialogAs,N=e["aria-labelledby"],w=e.show,C=e.animation,k=e.backdrop,x=e.keyboard,R=e.onEscapeKeyDown,F=e.onShow,S=e.onHide,T=e.container,P=e.autoFocus,D=e.enforceFocus,A=e.restoreFocus,B=e.restoreFocusOptions,H=e.onEntered,M=e.onExit,I=e.onExiting,z=e.onEnter,L=e.onEntering,K=e.onExited,U=e.backdropClassName,V=e.manager,W=Object(o.a)(e,["bsPrefix","className","style","dialogClassName","contentClassName","children","dialogAs","aria-labelledby","show","animation","backdrop","keyboard","onEscapeKeyDown","onShow","onHide","container","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","onEntered","onExit","onExiting","onEnter","onEntering","onExited","backdropClassName","manager"]),$=Object(h.useState)({}),J=$[0],q=$[1],G=Object(h.useState)(!1),X=G[0],Y=G[1],Z=Object(h.useRef)(!1),te=Object(h.useRef)(!1),ae=Object(h.useRef)(null),re=Object(b.a)(),oe=re[0],ie=re[1],se=Object(m.a)(S);t=Object(ne.a)(t,"modal"),Object(h.useImperativeHandle)(n,(function(){return{get _modal(){return oe}}}),[oe]);var le=Object(h.useMemo)((function(){return{onHide:se}}),[se]);function ue(){return V||(ce||(ce=new Q),ce)}function de(e){if(l.a){var n=ue().isContainerOverflowing(oe),t=e.scrollHeight>Object(u.a)(e).documentElement.clientHeight;q({paddingRight:n&&!t?f():void 0,paddingLeft:!n&&t?f():void 0})}}var fe=Object(m.a)((function(){oe&&de(oe.dialog)}));Object(p.a)((function(){Object(d.a)(window,"resize",fe),ae.current&&ae.current()}));var pe=function(){Z.current=!0},ve=function(e){Z.current&&oe&&e.target===oe.dialog&&(te.current=!0),Z.current=!1},he=function(){Y(!0),ae.current=Object(v.a)(oe.dialog,(function(){Y(!1)}))},ge=function(e){"static"!==k?te.current||e.target!==e.currentTarget?te.current=!1:S():function(e){e.target===e.currentTarget&&he()}(e)},Oe=Object(h.useCallback)((function(e){return g.a.createElement("div",Object(r.a)({},e,{className:c()(t+"-backdrop",U,!C&&"show")}))}),[C,U,t]),je=Object(r.a)({},i,J);C||(je.display="block");return g.a.createElement(ee.Provider,{value:le},g.a.createElement(_,{show:w,ref:ie,backdrop:k,container:T,keyboard:!0,autoFocus:P,enforceFocus:D,restoreFocus:A,restoreFocusOptions:B,onEscapeKeyDown:function(e){x||"static"!==k?x&&R&&R(e):(e.preventDefault(),he())},onShow:F,onHide:S,onEnter:function(e){e&&(e.style.display="block",de(e));for(var n=arguments.length,t=new Array(n>1?n-1:0),a=1;a<n;a++)t[a-1]=arguments[a];z&&z.apply(void 0,[e].concat(t))},onEntering:function(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),a=1;a<n;a++)t[a-1]=arguments[a];L&&L.apply(void 0,[e].concat(t)),Object(s.a)(window,"resize",fe)},onEntered:H,onExit:function(e){ae.current&&ae.current();for(var n=arguments.length,t=new Array(n>1?n-1:0),a=1;a<n;a++)t[a-1]=arguments[a];M&&M.apply(void 0,[e].concat(t))},onExiting:I,onExited:function(e){e&&(e.style.display="");for(var n=arguments.length,t=new Array(n>1?n-1:0),a=1;a<n;a++)t[a-1]=arguments[a];K&&K.apply(void 0,t),Object(d.a)(window,"resize",fe)},manager:ue(),containerClassName:t+"-open",transition:C?be:void 0,backdropTransition:C?me:void 0,renderBackdrop:Oe,renderDialog:function(e){return g.a.createElement("div",Object(r.a)({role:"dialog"},e,{style:je,className:c()(a,t,X&&t+"-static"),onClick:k?ge:void 0,onMouseUp:ve,"aria-labelledby":N}),g.a.createElement(E,Object(r.a)({},W,{onMouseDown:pe,className:O,contentClassName:j}),y))}}))}));pe.displayName="Modal",pe.defaultProps=fe,pe.Body=Z,pe.Header=se,pe.Title=de,pe.Footer=re,pe.Dialog=ae,pe.TRANSITION_DURATION=300,pe.BACKDROP_TRANSITION_DURATION=150;n.a=pe}}]);
//# sourceMappingURL=3.f694ce80.chunk.js.map