(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[3012],{22452:function(A,h,e){"use strict";var o=e(28991),i=e(81253),x=e(85893),a=e(67294),c=e(66758),E=e(18603),m=["fieldProps","proFieldProps"],F="dateTime",f=a.forwardRef(function(d,D){var n=d.fieldProps,C=d.proFieldProps,p=(0,i.Z)(d,m),r=(0,a.useContext)(c.Z);return(0,x.jsx)(E.Z,(0,o.Z)({ref:D,fieldProps:(0,o.Z)({getPopupContainer:r.getPopupContainer},n),valueType:F,proFieldProps:C,filedConfig:{valueType:F,customLightMode:!0}},p))});h.Z=f},64317:function(A,h,e){"use strict";var o=e(28991),i=e(81253),x=e(85893),a=e(22270),c=e(67294),E=e(66758),m=e(18603),F=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],f=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"],d=c.forwardRef(function(r,M){var Q=r.fieldProps,W=r.children,B=r.params,V=r.proFieldProps,K=r.mode,Y=r.valueEnum,U=r.request,z=r.showSearch,g=r.options,O=(0,i.Z)(r,F),N=(0,c.useContext)(E.Z);return(0,x.jsx)(m.Z,(0,o.Z)((0,o.Z)({valueEnum:(0,a.h)(Y),request:U,params:B,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,o.Z)({options:g,mode:K,showSearch:z,getPopupContainer:N.getPopupContainer},Q),ref:M,proFieldProps:V},O),{},{children:W}))}),D=c.forwardRef(function(r,M){var Q=r.fieldProps,W=r.children,B=r.params,V=r.proFieldProps,K=r.mode,Y=r.valueEnum,U=r.request,z=r.options,g=(0,i.Z)(r,f),O=(0,o.Z)({options:z,mode:K||"multiple",labelInValue:!0,showSearch:!0,showArrow:!1,autoClearSearchValue:!0,optionLabelProp:"label"},Q),N=(0,c.useContext)(E.Z);return(0,x.jsx)(m.Z,(0,o.Z)((0,o.Z)({valueEnum:(0,a.h)(Y),request:U,params:B,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,o.Z)({getPopupContainer:N.getPopupContainer},O),ref:M,proFieldProps:V},g),{},{children:W}))}),n=d,C=D,p=n;p.SearchSelect=C,p.displayName="ProFormComponent",h.Z=p},5966:function(A,h,e){"use strict";var o=e(28991),i=e(81253),x=e(85893),a=e(18603),c=["fieldProps","proFieldProps"],E=["fieldProps","proFieldProps"],m="text",F=function(n){var C=n.fieldProps,p=n.proFieldProps,r=(0,i.Z)(n,c);return(0,x.jsx)(a.Z,(0,o.Z)({valueType:m,fieldProps:C,filedConfig:{valueType:m},proFieldProps:p},r))},f=function(n){var C=n.fieldProps,p=n.proFieldProps,r=(0,i.Z)(n,E);return(0,x.jsx)(a.Z,(0,o.Z)({valueType:"password",fieldProps:C,proFieldProps:p,filedConfig:{valueType:m}},r))},d=F;d.Password=f,d.displayName="ProFormComponent",h.Z=d},90672:function(A,h,e){"use strict";var o=e(28991),i=e(81253),x=e(85893),a=e(67294),c=e(18603),E=["fieldProps","proFieldProps"],m=function(f,d){var D=f.fieldProps,n=f.proFieldProps,C=(0,i.Z)(f,E);return(0,x.jsx)(c.Z,(0,o.Z)({ref:d,valueType:"textarea",fieldProps:D,proFieldProps:n},C))};h.Z=a.forwardRef(m)},7763:function(A){A.exports={standardList:"standardList___pRhsd",headerInfo:"headerInfo___3KrKX",listContent:"listContent___weIUQ",listContentItem:"listContentItem___S_LBX",extraContentSearch:"extraContentSearch___1lMSQ",listCard:"listCard___1aWw-",standardListForm:"standardListForm___1KJ6f",formResult:"formResult___1XdZP"}},63666:function(A,h,e){"use strict";e.r(h),e.d(h,{BasicList:function(){return te},default:function(){return De}});var o=e(57663),i=e(71577),x=e(54421),a=e(38272),c=e(94233),E=e(51890),m=e(58024),F=e(91894),f=e(13062),d=e(71230),D=e(89032),n=e(15746),C=e(59250),p=e(13013),r=e(30887),M=e(28682),Q=e(71194),W=e(50146),B=e(2824),V=e(34669),K=e(54458),Y=e(47673),U=e(4107),z=e(88983),g=e(47933),O=e(67294),N=e(57254),ae=e(49101),le=e(75362),_=e(65465),ue=e(30381),de=e.n(ue),We=e(57106),ie=e(99683),ee=e(39428),ve=e(3182),ce=e(37476),me=e(5966),pe=e(22452),Pe=e(64317),he=e(90672),xe=e(7763),P=e.n(xe),t=e(85893),Ee=function(l){var u=l.done,Z=l.visible,j=l.current,y=l.onDone,I=l.onSubmit,b=l.children;return Z?(0,t.jsx)(ce.Y,{visible:Z,title:u?null:"\u4EFB\u52A1".concat(j?"\u7F16\u8F91":"\u6DFB\u52A0"),className:P().standardListForm,width:640,onFinish:function(){var T=(0,ve.Z)((0,ee.Z)().mark(function G(L){return(0,ee.Z)().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:I(L);case 1:case"end":return R.stop()}},G)}));return function(G){return T.apply(this,arguments)}}(),initialValues:j,submitter:{render:function(G,L){return u?null:L}},trigger:(0,t.jsx)(t.Fragment,{children:b}),modalProps:{onCancel:function(){return y()},destroyOnClose:!0,bodyStyle:u?{padding:"72px 0"}:{}},children:u?(0,t.jsx)(ie.ZP,{status:"success",title:"\u64CD\u4F5C\u6210\u529F",subTitle:"\u4E00\u7CFB\u5217\u7684\u4FE1\u606F\u63CF\u8FF0\uFF0C\u5F88\u77ED\u540C\u6837\u4E5F\u53EF\u4EE5\u5E26\u6807\u70B9\u3002",extra:(0,t.jsx)(i.Z,{type:"primary",onClick:y,children:"\u77E5\u9053\u4E86"}),className:P().formResult}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(me.Z,{name:"title",label:"\u4EFB\u52A1\u540D\u79F0",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EFB\u52A1\u540D\u79F0"}],placeholder:"\u8BF7\u8F93\u5165"}),(0,t.jsx)(pe.Z,{name:"createdAt",label:"\u5F00\u59CB\u65F6\u95F4",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u5F00\u59CB\u65F6\u95F4"}],fieldProps:{style:{width:"100%"}},placeholder:"\u8BF7\u9009\u62E9"}),(0,t.jsx)(Pe.Z,{name:"owner",label:"\u4EFB\u52A1\u8D1F\u8D23\u4EBA",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4EFB\u52A1\u8D1F\u8D23\u4EBA"}],options:[{label:"\u4ED8\u6653\u6653",value:"xiao"},{label:"\u5468\u6BDB\u6BDB",value:"mao"}],placeholder:"\u8BF7\u9009\u62E9\u7BA1\u7406\u5458"}),(0,t.jsx)(he.Z,{name:"subDescription",label:"\u4EA7\u54C1\u63CF\u8FF0",rules:[{message:"\u8BF7\u8F93\u5165\u81F3\u5C11\u4E94\u4E2A\u5B57\u7B26\u7684\u4EA7\u54C1\u63CF\u8FF0\uFF01",min:5}],placeholder:"\u8BF7\u8F93\u5165\u81F3\u5C11\u4E94\u4E2A\u5B57\u7B26"})]})}):null},Fe=Ee,X=e(21564),$=g.ZP.Button,fe=g.ZP.Group,Ce=U.Z.Search,H=function(l){var u=l.title,Z=l.value,j=l.bordered;return(0,t.jsxs)("div",{className:P().headerInfo,children:[(0,t.jsx)("span",{children:u}),(0,t.jsx)("p",{children:Z}),j&&(0,t.jsx)("em",{})]})},je=function(l){var u=l.data,Z=u.owner,j=u.createdAt,y=u.percent,I=u.status;return(0,t.jsxs)("div",{className:P().listContent,children:[(0,t.jsxs)("div",{className:P().listContentItem,children:[(0,t.jsx)("span",{children:"Owner"}),(0,t.jsx)("p",{children:Z})]}),(0,t.jsxs)("div",{className:P().listContentItem,children:[(0,t.jsx)("span",{children:"\u5F00\u59CB\u65F6\u95F4"}),(0,t.jsx)("p",{children:de()(j).format("YYYY-MM-DD HH:mm")})]}),(0,t.jsx)("div",{className:P().listContentItem,children:(0,t.jsx)(K.Z,{percent:y,status:I,strokeWidth:6,style:{width:180}})})]})},te=function(){var l=(0,O.useState)(!1),u=(0,B.Z)(l,2),Z=u[0],j=u[1],y=(0,O.useState)(!1),I=(0,B.Z)(y,2),b=I[0],T=I[1],G=(0,O.useState)(void 0),L=(0,B.Z)(G,2),re=L[0],R=L[1],w=(0,_.QT)(function(){return(0,X.Gv)({count:50})}),k=w.data,Ze=w.loading,Me=w.mutate,Be=(0,_.QT)(function(v,s){return v==="remove"?(0,X.$G)(s):v==="update"?(0,X.LZ)(s):(0,X.NB)(s)},{manual:!0,onSuccess:function(s){Me(s)}}),se=Be.run,ne=(k==null?void 0:k.list)||[],Oe={showSizeChanger:!0,showQuickJumper:!0,pageSize:5,total:ne.length},oe=function(s){T(!0),R(s)},Te=function(s){se("remove",{id:s})},Se=function(s,S){s==="edit"?oe(S):s==="delete"&&W.Z.confirm({title:"\u5220\u9664\u4EFB\u52A1",content:"\u786E\u5B9A\u5220\u9664\u8BE5\u4EFB\u52A1\u5417\uFF1F",okText:"\u786E\u8BA4",cancelText:"\u53D6\u6D88",onOk:function(){return Te(S.id)}})},Ae=(0,t.jsxs)("div",{className:P().extraContent,children:[(0,t.jsxs)(fe,{defaultValue:"all",children:[(0,t.jsx)($,{value:"all",children:"\u5168\u90E8"}),(0,t.jsx)($,{value:"progress",children:"\u8FDB\u884C\u4E2D"}),(0,t.jsx)($,{value:"waiting",children:"\u7B49\u5F85\u4E2D"})]}),(0,t.jsx)(Ce,{className:P().extraContentSearch,placeholder:"\u8BF7\u8F93\u5165",onSearch:function(){return{}}})]}),ge=function(s){var S=s.item;return(0,t.jsx)(p.Z,{overlay:(0,t.jsxs)(M.Z,{onClick:function(Le){var Re=Le.key;return Se(Re,S)},children:[(0,t.jsx)(M.Z.Item,{children:"\u7F16\u8F91"},"edit"),(0,t.jsx)(M.Z.Item,{children:"\u5220\u9664"},"delete")]}),children:(0,t.jsxs)("a",{children:["\u66F4\u591A ",(0,t.jsx)(N.Z,{})]})})},ye=function(){j(!1),T(!1),R({})},Ie=function(s){j(!0);var S=s!=null&&s.id?"update":"add";se(S,s)};return(0,t.jsxs)("div",{children:[(0,t.jsx)(le.ZP,{children:(0,t.jsxs)("div",{className:P().standardList,children:[(0,t.jsx)(F.Z,{bordered:!1,children:(0,t.jsxs)(d.Z,{children:[(0,t.jsx)(n.Z,{sm:8,xs:24,children:(0,t.jsx)(H,{title:"\u6211\u7684\u5F85\u529E",value:"8\u4E2A\u4EFB\u52A1",bordered:!0})}),(0,t.jsx)(n.Z,{sm:8,xs:24,children:(0,t.jsx)(H,{title:"\u672C\u5468\u4EFB\u52A1\u5E73\u5747\u5904\u7406\u65F6\u95F4",value:"32\u5206\u949F",bordered:!0})}),(0,t.jsx)(n.Z,{sm:8,xs:24,children:(0,t.jsx)(H,{title:"\u672C\u5468\u5B8C\u6210\u4EFB\u52A1\u6570",value:"24\u4E2A\u4EFB\u52A1"})})]})}),(0,t.jsx)(F.Z,{className:P().listCard,bordered:!1,title:"\u57FA\u672C\u5217\u8868",style:{marginTop:24},bodyStyle:{padding:"0 32px 40px 32px"},extra:Ae,children:(0,t.jsx)(a.ZP,{size:"large",rowKey:"id",loading:Ze,pagination:Oe,dataSource:ne,renderItem:function(s){return(0,t.jsxs)(a.ZP.Item,{actions:[(0,t.jsx)("a",{onClick:function(q){q.preventDefault(),oe(s)},children:"\u7F16\u8F91"},"edit"),(0,t.jsx)(ge,{item:s},"more")],children:[(0,t.jsx)(a.ZP.Item.Meta,{avatar:(0,t.jsx)(E.C,{src:s.logo,shape:"square",size:"large"}),title:(0,t.jsx)("a",{href:s.href,children:s.title}),description:s.subDescription}),(0,t.jsx)(je,{data:s})]})}})})]})}),(0,t.jsxs)(i.Z,{type:"dashed",onClick:function(){T(!0)},style:{width:"100%",marginBottom:8},children:[(0,t.jsx)(ae.Z,{}),"\u6DFB\u52A0"]}),(0,t.jsx)(Fe,{done:Z,visible:b,current:re,onDone:ye,onSubmit:Ie})]})},De=te}}]);
