(this.webpackJsonpreact_admin_template=this.webpackJsonpreact_admin_template||[]).push([[28],{172:function(e,t,n){"use strict";n.d(t,"e",(function(){return r})),n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return i})),n.d(t,"f",(function(){return l})),n.d(t,"a",(function(){return u}));var a=n(49);function r(e){return Object(a.a)({url:"/userInfo",method:"post",data:e})}function o(){return Object(a.a)({url:"/user/list",method:"get"})}function c(e){return Object(a.a)({url:"/user/delete",method:"post",data:e})}function i(e){return Object(a.a)({url:"/user/edit",method:"post",data:e})}function l(e){return Object(a.a)({url:"/user/validatUserID",method:"post",data:e})}function u(e){return Object(a.a)({url:"/user/add",method:"post",data:e})}},206:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n(133);var a=n(51),r=n(217),o=n.n(r);function c(e,t){var n=new o.a(t.target,{text:function(){return e}});n.on("success",(function(){a.a.success("\u590d\u5236\u6210\u529f"),n.destroy()})),n.on("error",(function(){a.a.error("\u590d\u5236\u5931\u8d25"),n.destroy()})),n.onClick(t)}},220:function(e,t,n){e.exports=n.p+"static/media/logo.106db4de.png"},24:function(e,t,n){"use strict";n.d(t,"f",(function(){return a})),n.d(t,"e",(function(){return r})),n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return l}));var a="USER_SET_USER_TOKEN",r="USER_SET_USER_INFO",o="USER_RESET_USER",c="APP_TOGGLE_SIDEBAR",i="APP_TOGGLE_SETTINGPANEL",l="SETTINGS_CHANGE_SETTINGS"},254:function(e,t,n){e.exports=n(456)},26:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return d})),n.d(t,"b",(function(){return c})),n.d(t,"f",(function(){return m})),n.d(t,"e",(function(){return p})),n.d(t,"a",(function(){return f}));var a=n(10),r=n(24),o=n(172),c=function(e){return function(t){return new Promise((function(n,a){Object(o.e)(e).then((function(e){var r=e.data;if(0===r.status){var o=r.userInfo;t(i(o)),n(r)}else{var c=r.message;a(c)}})).catch((function(e){a(e)}))}))}},i=function(e){return Object(a.a)({type:r.e},e)},l=n(49);var u=n(70),s=function(e,t){return function(n){return new Promise((function(a,o){var c;(c={username:e.trim(),password:t},Object(l.a)({url:"/login",method:"post",data:c})).then((function(e){var t=e.data;if(0===t.status){var c=t.token;n(function(e){return{type:r.f,token:e}}(c)),Object(u.c)(c),a(t)}else{var i=t.message;o(i)}})).catch((function(e){o(e)}))}))}},d=function(e){return function(t){return new Promise((function(n,a){var o;(o=e,Object(l.a)({url:"/logout",method:"post",data:o})).then((function(e){var o=e.data;if(0===o.status)t({type:r.d}),Object(u.b)(),n(o);else{var c=o.message;a(c)}})).catch((function(e){a(e)}))}))}},m=function(){return{type:r.b}},p=function(){return{type:r.a}},f=function(e){return Object(a.a)({type:r.c},e)}},341:function(e,t,n){},342:function(e,t,n){},343:function(e,t,n){},346:function(e,t,n){},354:function(e,t,n){},368:function(e,t,n){},382:function(e,t,n){},386:function(e,t,n){},455:function(e,t,n){},456:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(5),c=n.n(o),i=n(42),l=n(43),u=n(45),s=n(44),d=n(52),m=n(19),p=n(16),f=n(26),h=(n(325),n(12)),g=n(227);for(var b=function(e){return r.a.createElement(h.a,{locale:g.a},e.children)},E=(n(107),n(53)),v=n(124),O=n.n(v),y=n(18),k=n.n(y),j=(n(174),n(115)),x=function(){return r.a.createElement("div",{className:"app-container"},r.a.createElement(j.a,null))},S=k()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(5),n.e(10)]).then(n.bind(null,1343))},loading:x}),P=k()({loader:function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,1331))},loading:x}),w=k()({loader:function(){return Promise.all([n.e(0),n.e(36),n.e(16)]).then(n.bind(null,1346))},loading:x}),C=k()({loader:function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,1332))},loading:x}),N=k()({loader:function(){return Promise.all([n.e(0),n.e(15)]).then(n.bind(null,1333))},loading:x}),I=k()({loader:function(){return Promise.all([n.e(0),n.e(31),n.e(23)]).then(n.bind(null,1347))},loading:x}),T=k()({loader:function(){return Promise.all([n.e(0),n.e(33),n.e(19)]).then(n.bind(null,1348))},loading:x}),H=k()({loader:function(){return Promise.all([n.e(0),n.e(12)]).then(n.bind(null,1334))},loading:x}),_=k()({loader:function(){return Promise.all([n.e(2),n.e(17)]).then(n.bind(null,1349))},loading:x}),U=k()({loader:function(){return Promise.all([n.e(2),n.e(18)]).then(n.bind(null,1350))},loading:x}),L=k()({loader:function(){return Promise.all([n.e(2),n.e(22)]).then(n.bind(null,1351))},loading:x}),A=k()({loader:function(){return n.e(20).then(n.bind(null,1335))},loading:x}),D=k()({loader:function(){return n.e(21).then(n.bind(null,1336))},loading:x}),J=k()({loader:function(){return Promise.all([n.e(1),n.e(3),n.e(32),n.e(24)]).then(n.bind(null,1345))},loading:x}),R=k()({loader:function(){return Promise.all([n.e(1),n.e(3),n.e(14)]).then(n.bind(null,1337))},loading:x}),M=k()({loader:function(){return Promise.all([n.e(1),n.e(4),n.e(6),n.e(5),n.e(25)]).then(n.bind(null,1342))},loading:x}),F=k()({loader:function(){return Promise.all([n.e(1),n.e(3),n.e(27)]).then(n.bind(null,1338))},loading:x}),G=k()({loader:function(){return n.e(9).then(n.bind(null,1339))},loading:x}),z=k()({loader:function(){return n.e(13).then(n.bind(null,1340))},loading:x}),K=[{path:"/dashboard",component:S,roles:["admin","guest"]},{path:"/doc",component:P,roles:["admin","guest"]},{path:"/guide",component:w,roles:["admin","guest"]},{path:"/permission/adminPage",component:C,roles:["admin"]},{path:"/permission/guestPage",component:N,roles:["guest"]},{path:"/components/richTextEditor",component:I,roles:["admin","guest"]},{path:"/components/Markdown",component:T,roles:["admin","guest"]},{path:"/components/draggable",component:H,roles:["admin","guest"]},{path:"/charts/keyboard",component:_,roles:["admin","guest"]},{path:"/charts/line",component:U,roles:["admin","guest"]},{path:"/charts/mix-chart",component:L,roles:["admin","guest"]},{path:"/nested/menu1/menu1-1",component:A,roles:["admin","guest"]},{path:"/nested/menu1/menu1-2/menu1-2-1",component:D,roles:["admin","guest"]},{path:"/table",component:J,roles:["admin","guest"]},{path:"/excel/export",component:R,roles:["admin","guest"]},{path:"/excel/upload",component:M,roles:["admin","guest"]},{path:"/zip",component:F,roles:["admin","guest"]},{path:"/clipboard",component:G,roles:["admin","guest"]},{path:"/user",component:k()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(26)]).then(n.bind(null,1344))},loading:x}),roles:["admin"]},{path:"/about",component:k()({loader:function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,1341))},loading:x}),roles:["admin","guest"]},{path:"/error/404",component:z}],V=[{title:"\u9996\u9875",path:"/dashboard",icon:"home"},{title:"\u5f00\u53d1\u6587\u6863",path:"/doc",icon:"file"},{title:"\u5f15\u5bfc\u9875",path:"/guide",icon:"key"},{title:"\u6743\u9650\u6d4b\u8bd5",path:"/permission",icon:"lock",children:[{title:"\u7ba1\u7406\u5458\u9875\u9762",path:"/permission/adminPage",roles:["admin"]},{title:"\u6e38\u5ba2\u9875\u9762",path:"/permission/guestPage",roles:["guest"]}]},{title:"\u7ec4\u4ef6",path:"/components",icon:"appstore",children:[{title:"\u5bcc\u6587\u672c",path:"/components/richTextEditor"},{title:"Markdown",path:"/components/Markdown"},{title:"\u62d6\u62fd\u5217\u8868",path:"/components/draggable"}]},{title:"\u56fe\u8868",path:"/charts",icon:"area-chart",children:[{title:"\u952e\u76d8\u56fe\u8868",path:"/charts/keyboard"},{title:"\u6298\u7ebf\u56fe",path:"/charts/line"},{title:"\u6df7\u5408\u56fe\u8868",path:"/charts/mix-chart"}]},{title:"\u8def\u7531\u5d4c\u5957",path:"/nested",icon:"cluster",children:[{title:"\u83dc\u53551",path:"/nested/menu1",children:[{title:"\u83dc\u53551-1",path:"/nested/menu1/menu1-1"},{title:"\u83dc\u53551-2",path:"/nested/menu1/menu1-2",children:[{title:"\u83dc\u53551-2-1",path:"/nested/menu1/menu1-2/menu1-2-1"}]}]}]},{title:"\u8868\u683c",path:"/table",icon:"table"},{title:"Excel",path:"/excel",icon:"file-excel",children:[{title:"\u5bfc\u51faExcel",path:"/excel/export"},{title:"\u4e0a\u4f20Excel",path:"/excel/upload"}]},{title:"Zip",path:"/zip",icon:"file-zip"},{title:"\u526a\u8d34\u677f",path:"/clipboard",icon:"copy"},{title:"\u7528\u6237\u7ba1\u7406",path:"/user",icon:"usergroup-add",roles:["admin"]},{title:"\u5173\u4e8e\u4f5c\u8005",path:"/about",icon:"user"}],B=E.a.Content,q=function(e,t){var n=[],a="Ant Design Pro";for(n=n.concat(e);n.length;){var r=n.shift();r.children&&r.children.length>0&&(n=r.children.concat(n)),t===r.path&&(a="".concat(r.title," - Ant Design Pro"))}return a},W=Object(p.b)((function(e){return e.user}))(Object(m.g)((function(e){var t=e.role,n=e.location.pathname;return r.a.createElement(O.a,{title:q(V,n)},r.a.createElement(B,{style:{margin:"0px 16px"}},r.a.createElement(m.d,null,r.a.createElement(m.a,{exact:!0,from:"/",to:"/dashboard"}),K.map((function(e){return function(e){return!e.roles||e.roles.includes(t)}(e)&&r.a.createElement(m.b,{component:e.component,key:e.path,path:e.path})})),r.a.createElement(m.a,{to:"/error/404"}))))}))),X=n(10),Y=(n(175),n(178)),Z=(n(64),n(6)),Q=(n(336),n(216)),$=(n(158),n(37)),ee=(n(170),n(100)),te=(n(140),n(80)),ne=(n(133),n(51)),ae=n(63),re=n.n(ae),oe=(n(341),function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isFullscreen:!1},e.init=function(){re.a.isEnabled&&re.a.on("change",e.change)},e.change=function(){e.setState({isFullscreen:re.a.isFullscreen})},e.click=function(){if(!re.a.isEnabled)return ne.a.warning("you browser can not work"),!1;re.a.toggle()},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.init()}},{key:"componentWillUnmount",value:function(){re.a.isEnabled&&re.a.off("change",this.change)}},{key:"render",value:function(){var e=this.state.isFullscreen?"\u53d6\u6d88\u5168\u5c4f":"\u5168\u5c4f",t=this.state.isFullscreen?"fullscreen-exit":"fullscreen";return r.a.createElement("div",{className:"fullScreen-container"},r.a.createElement(te.a,{placement:"bottom",title:e},r.a.createElement(Z.a,{type:t,onClick:this.click})))}}]),n}(a.Component)),ce=(n(342),Object(p.b)(null,{toggleSettingPanel:f.e})((function(e){var t=e.toggleSettingPanel;return r.a.createElement("div",{className:"settings-container"},r.a.createElement(te.a,{placement:"bottom",title:"\u7cfb\u7edf\u8bbe\u7f6e"},r.a.createElement(Z.a,{type:"setting",onClick:t})))}))),ie=(n(343),Object(p.b)((function(e){return e.app}),{toggleSiderBar:f.f})((function(e){var t=e.sidebarCollapsed,n=e.toggleSiderBar;return r.a.createElement("div",{className:"hamburger-container"},r.a.createElement(Z.a,{type:t?"menu-unfold":"menu-fold",onClick:n}))}))),le=(n(344),n(131)),ue=(n(346),Object(m.g)((function(e){var t=e.location.pathname,n=function(e,t){var n=[];try{for(var a=function e(a){if(n.push(a),a.path===t)throw new Error("GOT IT!");if(a.children&&a.children.length>0){for(var r=0;r<a.children.length;r++)e(a.children[r]);n.pop()}else n.pop()},r=0;r<e.length;r++)a(e[r])}catch(o){return n}}(V,t),a=n&&n[0];return a&&"\u9996\u9875"!==a.title.trim()&&(n=[{title:"\u9996\u9875",path:"/dashboard"}].concat(n)),r.a.createElement("div",{className:"Breadcrumb-container"},r.a.createElement(le.a,null,n&&n.map((function(e){return"\u9996\u9875"===e.title?r.a.createElement(le.a.Item,{key:e.path},r.a.createElement("a",{href:"#".concat(e.path)},e.title)):r.a.createElement(le.a.Item,{key:e.path},e.title)}))))}))),se=(n(354),E.a.Header),de=Object(p.b)((function(e){return Object(X.a)(Object(X.a)(Object(X.a)({},e.app),e.user),e.settings)}),{logout:f.d,getUserInfo:f.b})((function(e){var t=e.token,n=e.avatar,a=e.sidebarCollapsed,o=e.logout,c=e.getUserInfo,i=e.showSettings,l=e.fixedHeader;t&&c(t);var u=r.a.createElement($.a,{onClick:function(e){switch(e.key){case"logout":!function(e){ee.a.confirm({title:"\u6ce8\u9500",content:"\u786e\u5b9a\u8981\u9000\u51fa\u7cfb\u7edf\u5417?",okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88",onOk:function(){o(e)}})}(t)}}},r.a.createElement($.a.Item,{key:"0"},r.a.createElement(d.b,{to:"/dashboard"},"\u9996\u9875")),r.a.createElement($.a.Item,{key:"0"},r.a.createElement("a",{target:"_blank",href:"https://github.com/NLRX-WJC/react-antd-admin-template",rel:"noopener noreferrer"},"\u9879\u76ee\u5730\u5740")),r.a.createElement($.a.Divider,null),r.a.createElement($.a.Item,{key:"logout"},"\u6ce8\u9500"));return r.a.createElement(r.a.Fragment,null,l?r.a.createElement(se,null):null,r.a.createElement(se,{style:l?a?{width:"calc(100% - 80px)"}:{width:"calc(100% - 200px)"}:{width:"100%"},className:l?"fix-header":""},r.a.createElement(ie,null),r.a.createElement(ue,null),r.a.createElement("div",{className:"right-menu"},r.a.createElement(oe,null),i?r.a.createElement(ce,null):null,r.a.createElement("div",{className:"dropdown-wrap"},r.a.createElement(Y.a,{overlay:u},r.a.createElement("div",null,r.a.createElement(Q.a,{shape:"square",size:"medium",src:n}),r.a.createElement(Z.a,{style:{color:"rgba(0,0,0,.3)"},type:"caret-down"})))))))})),me=(n(355),n(228)),pe=(n(83),n(27)),fe=(n(357),n(219)),he=(n(236),n(161)),ge=(n(231),n(98)),be=(n(361),n(168)),Ee=(n(232),n(74)),ve=n(206),Oe=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={sidebarLogo:!0,fixedHeader:!0},e.sidebarLogoChange=function(t){e.setState({sidebarLogo:t}),e.props.changeSetting({key:"sidebarLogo",value:t})},e.fixedHeaderChange=function(t){e.setState({fixedHeader:t}),e.props.changeSetting({key:"fixedHeader",value:t})},e.handleCopy=function(t){var n="\n    export default {\n      showSettings: true,\n      sidebarLogo: ".concat(e.state.sidebarLogo,",\n      fixedHeader: ").concat(e.state.fixedHeader,",\n    }\n    ");Object(ve.a)(n,t)},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.settingPanelVisible,a=t.toggleSettingPanel,o=t.sidebarLogo,c=t.fixedHeader;return r.a.createElement("div",{className:"rightSettings"},r.a.createElement(me.a,{title:"\u7cfb\u7edf\u8bbe\u7f6e",placement:"right",width:350,onClose:a,visible:n},r.a.createElement(ge.a,null,r.a.createElement(Ee.a,{span:12},r.a.createElement("span",null,"\u4fa7\u8fb9\u680f Logo")),r.a.createElement(Ee.a,{span:12},r.a.createElement(be.a,{checkedChildren:"\u5f00",unCheckedChildren:"\u5173",defaultChecked:o,onChange:this.sidebarLogoChange}))),r.a.createElement(he.a,{dashed:!0}),r.a.createElement(ge.a,null,r.a.createElement(Ee.a,{span:12},r.a.createElement("span",null,"\u56fa\u5b9a Header")),r.a.createElement(Ee.a,{span:12},r.a.createElement(be.a,{checkedChildren:"\u5f00",unCheckedChildren:"\u5173",defaultChecked:c,onChange:this.fixedHeaderChange}))),r.a.createElement(he.a,{dashed:!0}),r.a.createElement(ge.a,null,r.a.createElement(Ee.a,{span:24},r.a.createElement(fe.a,{message:"\u5f00\u53d1\u8005\u8bf7\u6ce8\u610f:",description:"\u914d\u7f6e\u680f\u53ea\u5728\u5f00\u53d1\u73af\u5883\u7528\u4e8e\u9884\u89c8\uff0c\u751f\u4ea7\u73af\u5883\u4e0d\u4f1a\u5c55\u73b0\uff0c\u8bf7\u62f7\u8d1d\u540e\u624b\u52a8\u4fee\u6539/src/defaultSettings.js\u914d\u7f6e\u6587\u4ef6",type:"warning",showIcon:!0,icon:r.a.createElement(Z.a,{type:"notification"}),style:{marginBottom:"16px"}}),r.a.createElement(pe.a,{style:{width:"100%"},icon:"copy",onClick:function(t){e.handleCopy(t)}},"\u62f7\u8d1d\u914d\u7f6e")))))}}]),n}(a.Component),ye=Object(p.b)((function(e){return Object(X.a)(Object(X.a)({},e.app),e.settings)}),{toggleSettingPanel:f.e,changeSetting:f.a})(Oe),ke=n(220),je=n.n(ke),xe=(n(368),function(){return r.a.createElement("div",{className:"sidebar-logo-container"},r.a.createElement("img",{src:je.a,className:"sidebar-logo",alt:""}),r.a.createElement("h1",{className:"sidebar-title"},"\u96be\u51c9\u70ed\u8840"))}),Se=n(211),Pe=n(229),we=n(221),Ce=n(130),Ne=(n(382),$.a.SubMenu),Ie=function(e,t,n){var a=Array.from(e),r=a.splice(t,1),o=Object(Pe.a)(r,1)[0];return a.splice(n,0,o),a},Te=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={menuTreeNode:null,openKey:[]},e.filterMenuItem=function(t){var n=t.roles,a=e.props,r=a.role;return!("admin"!==a.name&&n&&!n.includes(r))||!!t.children&&!!t.children.find((function(e){return n.includes(e.role)}))},e.getMenuNodes=function(t){var n=e.props.location.pathname;return t.reduce((function(t,a){e.filterMenuItem(a)&&(a.children?(a.children.find((function(e){return 0===n.indexOf(e.path)}))&&e.setState((function(e){return{openKey:[].concat(Object(Se.a)(e.openKey),[a.path])}})),t.push(r.a.createElement(Ne,{key:a.path,title:r.a.createElement("span",null,a.icon?r.a.createElement(Z.a,{type:a.icon}):null,r.a.createElement("span",null,a.title))},e.getMenuNodes(a.children)))):t.push(r.a.createElement($.a.Item,{key:a.path},r.a.createElement(d.b,{to:a.path},a.icon?r.a.createElement(Z.a,{type:a.icon}):null,r.a.createElement("span",null,a.title)))));return t}),[])},e.onDragEnd=function(t){if(t.destination){var n=Ie(e.state.menuTreeNode,t.source.index,t.destination.index);e.setState({menuTreeNode:n})}},e}return Object(l.a)(n,[{key:"componentWillMount",value:function(){var e=this.getMenuNodes(V);this.setState({menuTreeNode:e})}},{key:"render",value:function(){var e=this,t=this.props.location.pathname,n=this.state.openKey;return r.a.createElement("div",{className:"sidebar-menu-container"},r.a.createElement(we.Scrollbars,{autoHide:!0,autoHideTimeout:1e3,autoHideDuration:200},r.a.createElement(Ce.a,{onDragEnd:this.onDragEnd},r.a.createElement(Ce.c,{droppableId:"droppable"},(function(a,o){return r.a.createElement("div",Object.assign({},a.droppableProps,{ref:a.innerRef}),e.state.menuTreeNode.map((function(e,a){return r.a.createElement(Ce.b,{key:e.key,draggableId:e.key,index:a},(function(a,o){return r.a.createElement("div",Object.assign({ref:a.innerRef},a.draggableProps,a.dragHandleProps),r.a.createElement($.a,{mode:"inline",theme:"dark",selectedKeys:[t],defaultOpenKeys:n},e))}))})))})))))}}]),n}(a.Component),He=Object(p.b)((function(e){return e.user}))(Object(m.g)(Te)),_e=E.a.Sider,Ue=Object(p.b)((function(e){return Object(X.a)(Object(X.a)({},e.app),e.settings)}))((function(e){var t=e.sidebarCollapsed,n=e.sidebarLogo;return r.a.createElement(_e,{collapsible:!0,collapsed:t,trigger:null,style:{zIndex:"10"}},n?r.a.createElement(xe,null):null,r.a.createElement(He,null))})),Le=function(){return r.a.createElement(E.a,{style:{minHeight:"100vh"}},r.a.createElement(Ue,null),r.a.createElement(E.a,null,r.a.createElement(de,null),r.a.createElement(W,null),r.a.createElement(ye,null)))},Ae=(n(233),n(67)),De=(n(230),n(136)),Je=n(162),Re=n.n(Je),Me=n(177),Fe=(n(386),function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={loading:!1},e.handleSubmit=function(t){t.preventDefault(),e.props.form.validateFields(function(){var t=Object(Me.a)(Re.a.mark((function t(n,a){var r,o;return Re.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n?console.log("\u68c0\u9a8c\u5931\u8d25!"):(r=a.username,o=a.password,e.login(r,o));case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}())},e.login=function(t,n){var a=e.props.login;e.setState({loading:!0}),a(t,n).then((function(t){ne.a.success("\u767b\u5f55\u6210\u529f"),e.getUserInfo(t.token)})).catch((function(t){e.setState({loading:!1}),ne.a.error(t)}))},e.getUserInfo=function(t){(0,e.props.getUserInfo)(t).then((function(e){})).catch((function(e){ne.a.error(e)}))},e}return Object(l.a)(n,[{key:"render",value:function(){if(this.props.token)return r.a.createElement(m.a,{to:"/dashboard"});var e=this.props.form.getFieldDecorator;return r.a.createElement(O.a,{title:"\u7528\u6237\u767b\u5f55"},r.a.createElement("div",{className:"login-container"},r.a.createElement(Ae.a,{onSubmit:this.handleSubmit,className:"content"},r.a.createElement("div",{className:"title"},r.a.createElement("h2",null,"\u7528\u6237\u767b\u5f55")),r.a.createElement(j.a,{spinning:this.state.loading,tip:"\u52a0\u8f7d\u4e2d..."},r.a.createElement(Ae.a.Item,null,e("username",{rules:[{required:!0,whitespace:!0,message:"\u7528\u6237\u540d\u5fc5\u987b\u8f93\u5165"}],initialValue:"admin"})(r.a.createElement(De.a,{prefix:r.a.createElement(Z.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"\u7528\u6237\u540d"}))),r.a.createElement(Ae.a.Item,null,e("password",{initialValue:"123456"})(r.a.createElement(De.a,{prefix:r.a.createElement(Z.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"\u5bc6\u7801"}))),r.a.createElement(Ae.a.Item,null,r.a.createElement(pe.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"\u767b\u5f55")),r.a.createElement(Ae.a.Item,null,r.a.createElement("span",null,"\u8d26\u53f7 : admin \u5bc6\u7801 : \u968f\u4fbf\u586b"),r.a.createElement("br",null),r.a.createElement("span",null,"\u8d26\u53f7 : guest \u5bc6\u7801 : \u968f\u4fbf\u586b"))))))}}]),n}(a.Component)),Ge=Ae.a.create()(Fe),ze=Object(p.b)((function(e){return e.user}),{login:f.c,getUserInfo:f.b})(Ge),Ke=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.token,n=e.role,a=e.getUserInfo;return r.a.createElement(d.a,null,r.a.createElement(b,null,r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/login",component:ze}),r.a.createElement(m.b,{path:"/",render:function(){return t?n?r.a.createElement(Le,null):void a(t).then((function(){return r.a.createElement(Le,null)})):r.a.createElement(m.a,{to:"/login"})}}))))}}]),n}(r.a.Component),Ve=Object(p.b)((function(e){return e.user}),{getUserInfo:f.b})(Ke),Be=n(82),qe=(n(454),n(455),n(20)),We=n.n(qe),Xe={admin:"admin-token",guest:"guest-token"},Ye={"admin-token":{id:"admin",role:"admin",name:"\u96be\u51c9\u70ed\u8840",avatar:"https://s1.ax1x.com/2020/04/28/J5hUaT.jpg",description:"Super Administrator. Have access to view all pages."},"guest-token":{id:"guest",role:"guest",name:"\u6e38\u5ba2",avatar:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",description:"Just a guest. Can only see the home page and the document page."}},Ze=function(e){var t=JSON.parse(e.body).username,n=Xe[t];return n?{status:0,token:n}:{status:1,message:"\u7528\u6237\u540d\u6216\u5bc6\u7801\u9519\u8bef"}},Qe=function(e){var t=e.body,n=Ye[t];return n?{status:0,userInfo:n}:{status:1,message:"\u83b7\u53d6\u7528\u6237\u4fe1\u606f\u5931\u8d25"}},$e=function(){return{status:0,users:Object.values(Ye)}},et=function(e){var t=JSON.parse(e.body).id,n=Xe[t];return n&&(delete Xe[t],delete Ye[n]),{status:0}},tt=function(e){var t=JSON.parse(e.body),n=t.id,a=Xe[n];return a&&(Ye[a]=Object(X.a)(Object(X.a)({},Ye[a]),t)),{status:0}},nt=function(e){var t=e.body;return Xe[t]?{status:1}:{status:0}},at=function(e){var t=JSON.parse(e.body),n=t.id;return Xe[n]="".concat(n,"-token"),Ye["".concat(n,"-token")]=Object(X.a)(Object(X.a)({},Ye["guest-token"]),t),{status:0}},rt=function(e){return{status:0,data:"success"}},ot=[],ct=0;ct<20;ct++)ot.push(We.a.mock({key:"@increment",order_no:"@guid()",price:"@float(1000, 15000, 0, 2)","tag|1":["success","pending"]}));for(var it=function(e){return{code:2e4,data:{items:ot}}},lt=[],ut=0;ut<20;ut++)lt.push(We.a.mock({id:"@increment",title:"@ctitle(5, 10)",author:"@cname",readings:"@integer(300, 5000)",date:"@datetime"}));for(var st=function(e){return{code:2e4,data:{items:lt}}},dt=[],mt=0;mt<100;mt++)dt.push(We.a.mock({id:mt,title:"@ctitle(5, 10)",author:"@cname",readings:"@integer(300, 5000)","star|1-3":"\u2605","status|1":["published","draft"],date:"@datetime"}));var pt=function(e){var t=JSON.parse(e.body),n=t.pageNumber,a=t.pageSize,r=t.title,o=t.status,c=t.star,i=(n-1)*a,l=n*a,u=dt.filter((function(e){return(!c||e.star.length===c)&&((!o||e.status===o)&&!(r&&e.title.indexOf(r)<0))})),s=u.slice(i,l);return{code:2e4,data:{total:u.length,items:s}}},ft=function(e){var t=JSON.parse(e.body).id,n=dt.filter((function(e){return e.id===t})),a=dt.indexOf(n[0]);return dt.splice(a,1),{code:2e4}},ht=function(e){var t=JSON.parse(e.body),n=t.id,a=dt.filter((function(e){return e.id===n})),r=dt.indexOf(a[0]);return dt.splice(r,1,t),{code:2e4}};We.a.mock(/\/login/,"post",Ze),We.a.mock(/\/logout/,"post",rt),We.a.mock(/\/userInfo/,"post",Qe),We.a.mock(/\/user\/list/,"get",$e),We.a.mock(/\/user\/delete/,"post",et),We.a.mock(/\/user\/edit/,"post",tt),We.a.mock(/\/user\/validatUserID/,"post",nt),We.a.mock(/\/user\/add/,"post",at),We.a.mock(/\/transaction\/list/,"get",it),We.a.mock(/\/excel\/list/,"get",st),We.a.mock(/\/table\/list/,"post",pt),We.a.mock(/\/table\/delete/,"post",ft),We.a.mock(/\/table\/edit/,"post",ht);We.a;c.a.render(r.a.createElement(p.a,{store:Be.a},r.a.createElement(Ve,null)),document.getElementById("root"))},49:function(e,t,n){"use strict";n(170);var a=n(100),r=n(213),o=n.n(r),c=n(82),i=n(70),l=n(26),u=o.a.create({baseURL:"/prod-api",timeout:5e3});u.interceptors.request.use((function(e){return c.a.getState().user.token&&(e.headers.Authorization=Object(i.a)()),e}),(function(e){console.log(e),Promise.reject(e)})),u.interceptors.response.use((function(e){return e}),(function(e){return console.log("err"+e),403===e.response.status&&a.a.confirm({title:"\u786e\u5b9a\u767b\u51fa?",content:"\u7531\u4e8e\u957f\u65f6\u95f4\u672a\u64cd\u4f5c\uff0c\u60a8\u5df2\u88ab\u767b\u51fa\uff0c\u53ef\u4ee5\u53d6\u6d88\u7ee7\u7eed\u7559\u5728\u8be5\u9875\u9762\uff0c\u6216\u8005\u91cd\u65b0\u767b\u5f55",okText:"\u91cd\u65b0\u767b\u5f55",cancelText:"\u53d6\u6d88",onOk:function(){var e=c.a.getState().user.token;c.a.dispatch(Object(l.d)(e))},onCancel:function(){console.log("Cancel")}}),Promise.reject(e)})),t.a=u},70:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return i}));var a=n(128),r=n.n(a);function o(){return r.a.get("Token")}function c(e){return r.a.set("Token",e)}function i(){return r.a.remove("Token")}},82:function(e,t,n){"use strict";var a=n(36),r=n(214),o=n(10),c=n(24),i=n(70),l={name:"",role:"",avatar:"",token:Object(i.a)()};var u={sidebarCollapsed:!1,settingPanelVisible:!1};var s=n(119),d={showSettings:!0,sidebarLogo:!0,fixedHeader:!1};var m=Object(a.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.f:return Object(o.a)(Object(o.a)({},e),{},{token:t.token});case c.e:return Object(o.a)(Object(o.a)({},e),{},{name:t.name,role:t.role,avatar:t.avatar});case c.d:return{};default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.b:return Object(o.a)(Object(o.a)({},e),{},{sidebarCollapsed:!e.sidebarCollapsed});case c.a:return Object(o.a)(Object(o.a)({},e),{},{settingPanelVisible:!e.settingPanelVisible});default:return e}},settings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.c:var n=t.key,a=t.value;return e.hasOwnProperty(n)?Object(o.a)(Object(o.a)({},e),{},Object(s.a)({},n,a)):e;default:return e}}}),p=Object(a.e)(m,Object(a.a)(r.a));t.a=p}},[[254,29,30]]]);