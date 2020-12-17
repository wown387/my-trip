(this["webpackJsonpmy-trip"]=this["webpackJsonpmy-trip"]||[]).push([[0],{65:function(e,t,a){e.exports=a(94)},94:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),o=a.n(c),l=a(50),i=a(10),s=a(116),m=a(118),u=a(119),d=a(120),p=a(121),g=a(47),h=a.n(g),f=a(131),b=a(12),E=a(45),w=a.n(E),y=Object(s.a)((function(e){return{search:{position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(b.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(b.b)(e.palette.common.white,.25)},marginLeft:0,width:"50%",[e.breakpoints.up("sm")]:{marginLeft:e.spacing(1),width:"auto"}},searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:{padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%",[e.breakpoints.up("sm")]:{width:"12ch","&:focus":{width:"20ch"}}}}}));function v(e){var t=y(),a=Object(n.useState)(""),c=Object(i.a)(a,2),o=c[0],l=c[1];return r.a.createElement("div",{className:t.search},r.a.createElement("div",{className:t.searchIcon},r.a.createElement(w.a,null)),r.a.createElement(f.a,{onKeyDown:function(t){13===t.keyCode&&e.search(o)},value:o,onChange:function(e){l(e.target.value)},placeholder:"Search\u2026",classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"search"}}))}var k=Object(s.a)((function(e){return{root:{flexGrow:1},bar:{background:"#6AE5AB"},menuButton:{marginRight:e.spacing(3),background:"#F5BA31"},title:{flexGrow:1},badge:{margin:e.spacing(1)}}}));function j(e){var t=k();return r.a.createElement("div",{className:t.root},r.a.createElement(m.a,{position:"static",className:t.bar},r.a.createElement(u.a,null,r.a.createElement(d.a,{variant:"h6",className:t.title},"My Trip"),r.a.createElement(v,{search:function(t){e.search(t)}}),r.a.createElement(p.a,{badgeContent:e.count,color:"secondary",className:t.badge},r.a.createElement(h.a,null)))))}var O=function(){var e=(new Date).getFullYear();return r.a.createElement("footer",null,r.a.createElement("p",null,"Copyright \u24d2 ",e," Space-Two "))},N=a(48),C=a.n(N),x=a(122),S=a(123),D=a(126),I=a(125),T=a(124),B=a(127),F=a(33),G=a.n(F),R=a(132),z=Object(s.a)({root:{width:300,margin:"10% auto"},media:{height:0,paddingTop:"56.25%"},Share:{color:"#33404F"},Delete:{color:"#33404F"}});var A=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),c=a[0],o=a[1];Object(n.useEffect)((function(){e.keyword&&G.a.get("https://api.openweathermap.org/data/2.5/weather?q="+e.keyword+"&appid=b61ed55fcf58bf6647be8ab97338369c&units=metric").then((function(e){console.log(e.data.weather[0].description),o([e.data.main.temp,e.data.weather[0].description,"http://openweathermap.org/img/wn/"+e.data.weather[0].icon+"@2x.png"])}))}),[e.keyword]);var l=z();return r.a.createElement(x.a,{className:l.root},r.a.createElement(S.a,null,r.a.createElement(T.a,{className:l.media,image:e.image,title:"Paella dish"}),r.a.createElement(I.a,null,r.a.createElement(d.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.keyword),r.a.createElement(d.a,{variant:"body2",color:"textSecondary",component:"p"},e.content))),r.a.createElement(D.a,null,r.a.createElement(B.a,{className:l.Share,size:"small",color:"primary",startIcon:r.a.createElement(R.a,{src:c[2]})},c[0]?r.a.createElement("div",null," ",c[1],r.a.createElement("br",null)," ",c[0],"\u2103 "):r.a.createElement("div",null,"This name is not correct city name")),r.a.createElement(B.a,{className:l.Delete,onClick:function(t){e.onDelete(e.id)},size:"small",color:"primary"},r.a.createElement(C.a,null))))},L=a(14),q=a(49),K=a.n(q);var M=function(e){var t=Object(n.useState)({keyword:"",content:"",image:""}),a=Object(i.a)(t,2),c=a[0],o=a[1];return r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement("h1",null,e.keyword),r.a.createElement("textarea",{name:"content",value:c.content,onChange:function(t){var a=t.target,n=a.name,r=a.value;o((function(t){return Object(L.a)(Object(L.a)({},t),{},{keyword:e.keyword})})),o((function(e){return Object(L.a)(Object(L.a)({},e),{},{[n]:r})})),o((function(t){return Object(L.a)(Object(L.a)({},t),{},{image:e.image})}))},placeholder:"Take a note...",rows:"3"}),r.a.createElement("button",{onClick:function(t){""===c.image?(alert("\uc774\ubbf8\uc9c0 \ud639\uc740 \ub0b4\uc6a9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694"),t.preventDefault()):(console.log(c),t.preventDefault(),e.onAdd(c),o({keyword:"",content:"",image:""}))}},r.a.createElement(K.a,null))))},_=a(130),J=a(128),P=a(129),W=Object(s.a)((function(e){return{icon:{marginRight:e.spacing(2)},heroContent:{backgroundColor:"",padding:e.spacing(8,0,0)},heroButtons:{marginTop:e.spacing(4)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)}}}));function Y(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),c=a[0],o=a[1];Object(n.useEffect)((function(){e.keyword&&G.a.get("https://api.unsplash.com/search/photos/?client_id=NW58iNvc0yt-Lfryja1Eq68g65NtSlxKZ-3KzaNcoFw&query="+e.keyword+"&page=1&per_page=10").then((function(e){o(e.data.results)}))}),[e.keyword]);var l=W();function s(t){e.selectImage(t.target.title)}return r.a.createElement(r.a.Fragment,null,r.a.createElement(J.a,null),r.a.createElement(P.a,{className:l.cardGrid,maxWidth:"md"},r.a.createElement(_.a,{container:!0,spacing:4},c.map((function(e,t){return r.a.createElement(_.a,{item:!0,key:t,xs:12,sm:6,md:4},r.a.createElement(x.a,{className:l.card},r.a.createElement(S.a,{onClick:s},r.a.createElement(T.a,{className:l.cardMedia,image:e.urls.small,title:e.urls.small})),r.a.createElement(D.a,null,r.a.createElement(B.a,{size:"small",color:"primary"},e.alt_description),r.a.createElement(B.a,{size:"small",color:"primary",onClick:s},"Select"))))})))))}var Z=Object(s.a)((function(e){return{root:{flexGrow:1},control:{padding:e.spacing(1)}}}));var H=function(){var e=Z(),t=Object(n.useState)([]),a=Object(i.a)(t,2),c=a[0],o=a[1],s=Object(n.useState)(!1),m=Object(i.a)(s,2),u=m[0],d=m[1],p=Object(n.useState)(""),g=Object(i.a)(p,2),h=g[0],f=g[1],b=Object(n.useState)(""),E=Object(i.a)(b,2),w=E[0],y=E[1];function v(e){o((function(t){return c.filter((function(t,a){return a!==e}))}))}return r.a.createElement("div",{className:"container"},r.a.createElement(j,{search:function(e){console.log(e),d(!0),f(e)},count:c.length}),u&&r.a.createElement(Y,{selectImage:function(e){console.log(e,111),d(!1),y(e)},keyword:h}),r.a.createElement(M,{onAdd:function(e){o((function(t){return[].concat(Object(l.a)(t),[e])}))},image:w,keyword:h}),r.a.createElement(_.a,{container:!0,className:e.root,spacing:2},c.map((function(t,a){return r.a.createElement(A,{className:e.paper,onDelete:v,id:a,image:t.image,key:a,keyword:t.keyword,content:t.content})}))),r.a.createElement(O,null))};o.a.render(r.a.createElement(H,null),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.6ac3c8d0.chunk.js.map