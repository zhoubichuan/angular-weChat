(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[7567],{91025:function(x){x.exports={activeChart:"activeChart___15gpK",activeChartGrid:"activeChartGrid___3PL4c",activeChartLegend:"activeChartLegend___2Ieyc",dashedLine:"dashedLine___2fgZX",line:"line___2cxqk"}},5831:function(x){x.exports={mapChart:"mapChart___4fQJB",pieCard:"pieCard___1ETZj"}},57951:function(x,C,e){"use strict";e.r(C),e.d(C,{default:function(){return k}});var q=e(9341),h=e(70158),_=e(15215),g=e(80808),tt=e(27067),o=e(95432),et=e(74987),v=e(90768),z=e(9938),$=e(89392),d=e(64958),P=e(84596),G=e(29078),D=e.n(G),R=e(29972),H=e(4797),B=e(73025),F=e(11108),E=e(9882),A=e(62377),W=e(51830),M=e.n(W),S=e(59301),j=e(81538),I=e(46604),t=e(37712),J=["#eff3ff","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#084594"],K=function(u){(0,E.Z)(l,u);var i=(0,A.Z)(l);function l(){var s;(0,B.Z)(this,l);for(var r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];return s=i.call.apply(i,[this].concat(a)),s.state={data:null,grid:null,loading:!1},s}return(0,F.Z)(l,[{key:"componentDidMount",value:function(){var s=(0,H.Z)(M().mark(function a(){var n,m,p,y;return M().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.all([fetch("https://gw.alipayobjects.com/os/bmw-prod/c5dba875-b6ea-4e88-b778-66a862906c93.json").then(function(Z){return Z.json()}),fetch("https://gw.alipayobjects.com/os/bmw-prod/8990e8b4-c58e-419b-afb9-8ea3daff2dd1.json").then(function(Z){return Z.json()})]);case 2:n=f.sent,m=(0,R.Z)(n,2),p=m[0],y=m[1],this.setState({data:p,grid:y,loading:!0});case 7:case"end":return f.stop()}},a,this)}));function r(){return s.apply(this,arguments)}return r}()},{key:"render",value:function(){var r=this.state,a=r.data,n=r.grid,m=r.loading;return m===!1?(0,t.jsx)(I.Z,{}):(0,t.jsxs)(j.JE,{map:{center:[110.19382669582967,50.258134],pitch:0,style:"blank",zoom:1},style:{position:"relative",width:"100%",height:"452px"},children:[n&&(0,t.jsx)(j.zP,{source:{data:n,transforms:[{type:"hexagon",size:8e5,field:"capacity",method:"sum"}]},color:{values:"#ddd"},shape:{values:"hexagon"},style:{coverage:.7,opacity:.8}},"1"),a&&[(0,t.jsx)(j.ns,{options:{autoFit:!0},source:{data:a},scale:{values:{color:{field:"cum_conf",type:"quantile"},size:{field:"cum_conf",type:"log"}}},color:{field:"cum_conf",values:J},shape:{values:"circle"},active:{option:{color:"#0c2c84"}},size:{field:"cum_conf",values:[0,30]},style:{opacity:.8}},"2"),(0,t.jsx)(j.ns,{source:{data:a},color:{values:"#fff"},shape:{field:"Short_Name_ZH",values:"text"},filter:{field:"cum_conf",values:function(y){return y>2e3}},size:{values:12},style:{opacity:1,strokeOpacity:1,strokeWidth:0}},"5")]]})}}]),l}(S.Component),N=e(23584),Q=e(91025),c=e.n(Q);function U(u){return u*1<10?"0".concat(u):u}function T(){for(var u=[],i=0;i<24;i+=1)u.push({x:"".concat(U(i),":00"),y:Math.floor(Math.random()*200)+i*50});return u}var O=function(u){(0,E.Z)(l,u);var i=(0,A.Z)(l);function l(){var s;(0,B.Z)(this,l);for(var r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];return s=i.call.apply(i,[this].concat(a)),s.state={activeData:T()},s.timer=void 0,s.requestRef=void 0,s.loopData=function(){s.requestRef=requestAnimationFrame(function(){s.timer=window.setTimeout(function(){s.setState({activeData:T()},function(){s.loopData()})},1e3)})},s}return(0,F.Z)(l,[{key:"componentDidMount",value:function(){this.loopData()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timer),this.requestRef&&cancelAnimationFrame(this.requestRef)}},{key:"render",value:function(){var r=this.state.activeData,a=r===void 0?[]:r;return(0,t.jsxs)("div",{className:c().activeChart,children:[(0,t.jsx)(v.Z,{title:"\u76EE\u6807\u8BC4\u4F30",value:"\u6709\u671B\u8FBE\u5230\u9884\u671F"}),(0,t.jsx)("div",{style:{marginTop:32},children:(0,t.jsx)(d.m,{data:a,xField:"x",forceFit:!0,yField:"y",height:84})}),a&&(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:c().activeChartGrid,children:[(0,t.jsxs)("p",{children:[(0,N.Z)(a).sort()[a.length-1].y+200," \u4EBF\u5143"]}),(0,t.jsxs)("p",{children:[(0,N.Z)(a).sort()[Math.floor(a.length/2)].y," \u4EBF\u5143"]})]}),(0,t.jsx)("div",{className:c().dashedLine,children:(0,t.jsx)("div",{className:c().line})}),(0,t.jsx)("div",{className:c().dashedLine,children:(0,t.jsx)("div",{className:c().line})})]}),a&&(0,t.jsxs)("div",{className:c().activeChartLegend,children:[(0,t.jsx)("span",{children:"00:00"}),(0,t.jsx)("span",{children:a[Math.floor(a.length/2)].x}),(0,t.jsx)("span",{children:a[a.length-1].x})]})]})}}]),l}(S.Component),X=e(37982),V=e(5831),L=e.n(V),Y=v.Z.Countdown,b=Date.now()+1e3*60*60*24*2+1e3*30,w=function(){var i=(0,z.QT)(X.u),l=i.loading,s=i.data,r=((s==null?void 0:s.list)||[]).map(function(a){return{id:+(0,$.uniqueId)(),word:a.name,weight:a.value}});return(0,t.jsx)(P.Z,{children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(g.Z,{gutter:24,children:[(0,t.jsx)(o.Z,{xl:18,lg:24,md:24,sm:24,xs:24,style:{marginBottom:24},children:(0,t.jsxs)(h.Z,{title:"\u6D3B\u52A8\u5B9E\u65F6\u4EA4\u6613\u60C5\u51B5",bordered:!1,children:[(0,t.jsxs)(g.Z,{children:[(0,t.jsx)(o.Z,{md:6,sm:12,xs:24,children:(0,t.jsx)(v.Z,{title:"\u4ECA\u65E5\u4EA4\u6613\u603B\u989D",suffix:"\u5143",value:D()(124543233).format("0,0")})}),(0,t.jsx)(o.Z,{md:6,sm:12,xs:24,children:(0,t.jsx)(v.Z,{title:"\u9500\u552E\u76EE\u6807\u5B8C\u6210\u7387",value:"92%"})}),(0,t.jsx)(o.Z,{md:6,sm:12,xs:24,children:(0,t.jsx)(Y,{title:"\u6D3B\u52A8\u5269\u4F59\u65F6\u95F4",value:b,format:"HH:mm:ss:SSS"})}),(0,t.jsx)(o.Z,{md:6,sm:12,xs:24,children:(0,t.jsx)(v.Z,{title:"\u6BCF\u79D2\u4EA4\u6613\u603B\u989D",suffix:"\u5143",value:D()(234).format("0,0")})})]}),(0,t.jsx)("div",{className:L().mapChart,children:(0,t.jsx)(K,{})})]})}),(0,t.jsxs)(o.Z,{xl:6,lg:24,md:24,sm:24,xs:24,children:[(0,t.jsx)(h.Z,{title:"\u6D3B\u52A8\u60C5\u51B5\u9884\u6D4B",style:{marginBottom:24},bordered:!1,children:(0,t.jsx)(O,{})}),(0,t.jsx)(h.Z,{title:"\u5238\u6838\u6548\u7387",style:{marginBottom:24},bodyStyle:{textAlign:"center"},bordered:!1,children:(0,t.jsx)(d.aC,{height:180,min:0,max:100,forceFit:!0,value:87,range:[0,25,50,75,100],statistic:{visible:!0,text:"\u4F18",color:"#30bf78"}})})]})]}),(0,t.jsxs)(g.Z,{gutter:24,children:[(0,t.jsx)(o.Z,{xl:12,lg:24,sm:24,xs:24,style:{marginBottom:24},children:(0,t.jsx)(h.Z,{title:"\u5404\u54C1\u7C7B\u5360\u6BD4",bordered:!1,className:L().pieCard,children:(0,t.jsxs)(g.Z,{style:{padding:"16px 0"},children:[(0,t.jsx)(o.Z,{span:8,children:(0,t.jsx)(d.TZ,{forceFit:!0,height:128,percent:.28})}),(0,t.jsx)(o.Z,{span:8,children:(0,t.jsx)(d.TZ,{color:"#5DDECF",forceFit:!0,height:128,percent:.22})}),(0,t.jsx)(o.Z,{span:8,children:(0,t.jsx)(d.TZ,{color:"#2FC25B",forceFit:!0,height:128,percent:.32})})]})})}),(0,t.jsx)(o.Z,{xl:6,lg:12,sm:24,xs:24,style:{marginBottom:24},children:(0,t.jsx)(h.Z,{title:"\u70ED\u95E8\u641C\u7D22",loading:l,bordered:!1,bodyStyle:{overflow:"hidden"},children:(0,t.jsx)(d.kB,{data:r,forceFit:!0,height:162,wordStyle:{fontSize:[10,20]},shape:"triangle"})})}),(0,t.jsx)(o.Z,{xl:6,lg:12,sm:24,xs:24,style:{marginBottom:24},children:(0,t.jsx)(h.Z,{title:"\u8D44\u6E90\u5269\u4F59",bodyStyle:{textAlign:"center",fontSize:0},bordered:!1,children:(0,t.jsx)(d.Kj,{height:161,min:0,max:1e4,value:5639,forceFit:!0,padding:[0,0,0,0],statistic:{formatter:function(n){return"".concat((100*n/1e4).toFixed(1),"%")}}})})})]})]})})},k=w}}]);
