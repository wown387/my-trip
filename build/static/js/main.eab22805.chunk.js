(this["webpackJsonpkeeper-part-3-starting"]=this["webpackJsonpkeeper-part-3-starting"]||[]).push([[0],{48:function(e,t,a){e.exports=a(60)},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),o=a.n(c),l=a(38),i=a(14),u=a(83),m=a(85),s=a(86),p=a(87),d=a(88),g=a(89),h=a(35),E=a.n(h),b=a(95),f=a(9),v=a(33),j=a.n(v),w=Object(u.a)((function(e){return{search:{position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(f.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(f.b)(e.palette.common.white,.25)},marginLeft:0,width:"50%",[e.breakpoints.up("sm")]:{marginLeft:e.spacing(1),width:"auto"}},searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:{padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%",[e.breakpoints.up("sm")]:{width:"12ch","&:focus":{width:"20ch"}}}}}));function k(){var e=w(),t=Object(n.useState)(""),a=Object(i.a)(t,2),c=a[0],o=a[1];return r.a.createElement("div",{className:e.search},r.a.createElement("div",{className:e.searchIcon},r.a.createElement(j.a,null)),r.a.createElement(b.a,{value:c,onChange:function(e){o(e.target.value),console.log(c)},placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}}))}var O=Object(u.a)((function(e){return{root:{flexGrow:1},bar:{background:"#F5BA31"},menuButton:{marginRight:e.spacing(3),background:"#F5BA31"},title:{flexGrow:1},badge:{margin:e.spacing(1)}}}));function y(e){var t=O();return r.a.createElement("div",{className:t.root},r.a.createElement(m.a,{position:"static",className:t.bar},r.a.createElement(s.a,null,r.a.createElement(p.a,{variant:"h6",className:t.title},"My Trip"),r.a.createElement(k,null),r.a.createElement(d.a,{color:"inherit"},"Login"),r.a.createElement(g.a,{badgeContent:e.count,color:"secondary",className:t.badge},r.a.createElement(E.a,null)))))}var C=function(){var e=(new Date).getFullYear();return r.a.createElement("footer",null,r.a.createElement("p",null,"Copyright \u24d2 ",e," Space-Two "))},N=a(36),x=a.n(N),S=a(90),I=a(91),R=a(94),B=a(93),A=a(92),D=Object(u.a)({root:{maxWidth:345,margin:"10% auto"},media:{height:140}});var L=function(e){var t=D();return r.a.createElement(S.a,{className:t.root},r.a.createElement(I.a,null,r.a.createElement(A.a,{className:t.media,image:"/static/images/cards/contemplative-reptile.jpg",title:"Contemplative Reptile"}),r.a.createElement(B.a,null,r.a.createElement(p.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.title),r.a.createElement(p.a,{variant:"body2",color:"textSecondary",component:"p"},e.content))),r.a.createElement(R.a,null,r.a.createElement(d.a,{size:"small",color:"primary"},"Share"),r.a.createElement(d.a,{onClick:function(t){e.onDelete(e.id)},size:"small",color:"primary"},r.a.createElement(x.a,null))))},T=a(30),F=a(37),z=a.n(F);var G=function(e){var t=Object(n.useState)({title:"",content:""}),a=Object(i.a)(t,2),c=a[0],o=a[1];function l(e){var t=e.target,a=t.name,n=t.value;o((function(e){return Object(T.a)(Object(T.a)({},e),{},{[a]:n})}))}return r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement("input",{name:"title",value:c.title,onChange:l,placeholder:"Title"}),r.a.createElement("textarea",{name:"content",value:c.content,onChange:l,placeholder:"Take a note...",rows:"3"}),r.a.createElement("button",{onClick:function(t){t.preventDefault(),e.onAdd(c)}},r.a.createElement(z.a,null))))};var J=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1];function o(e){c((function(t){return a.filter((function(t,a){return a!==e}))}))}return r.a.createElement("div",{className:"container"},r.a.createElement(y,{count:a.length}),r.a.createElement(G,{onAdd:function(e){c((function(t){return[].concat(Object(l.a)(t),[e])}))}}),a.map((function(e,t){return r.a.createElement(L,{onDelete:o,id:t,key:t,title:e.title,content:e.content})})),r.a.createElement(C,null))};o.a.render(r.a.createElement(J,null),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.eab22805.chunk.js.map