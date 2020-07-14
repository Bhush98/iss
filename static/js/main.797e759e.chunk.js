(this.webpackJsonpnasa=this.webpackJsonpnasa||[]).push([[0],{19:function(e,t,a){e.exports={mapContainer:"site_mapContainer__1X6J2",astro:"site_astro__1ADP8",map_header:"site_map_header__3EeTO"}},34:function(e,t,a){e.exports=a.p+"static/media/astro.776e39a5.png"},39:function(e,t,a){e.exports=a.p+"static/media/251640.a7e0fc8b.jpg"},41:function(e,t,a){e.exports=a(69)},68:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(33),i=a.n(o),s=a(11),c=a.n(s),l=a(21),p=a(12),m=a(13),u=a(17),h=a(16),d=a(18),g=a.n(d),f=g.a.create({method:"get",url:"https://cors-anywhere.herokuapp.com/http://api.open-notify.org/iss-now.json",headers:{Origin:"http://api.open-notify.org/iss-now.json"}}),v=(g.a.create({method:"get",url:"https://cors-anywhere.herokuapp.com/http://api.open-notify.org/iss-pass.json",headers:{Origin:"http://api.open-notify.org/iss-pass.json"}}),g.a.create({method:"get",url:"https://cors-anywhere.herokuapp.com/http://api.open-notify.org/astros.json",headers:{Origin:"http://api.open-notify.org/astros.json"}})),y=a(22),_=a.n(y),E=a(19),b=a.n(E);_.a.accessToken="pk.eyJ1IjoiYmh1c2g5OCIsImEiOiJja2NkZ2k0aTEwZWVpMnBtbHF1a3VodzF1In0.oXwbCZ9qRR4nQw_cT4NBqQ";var S=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.Lat,t=this.props.Lan,a=new _.a.Map({container:this.mapContainer,style:"mapbox://styles/mapbox/streets-v11",center:[t,e],zoom:3});a.on("load",(function(){var n=e,r=t;a.loadImage("https://cdn1.iconfinder.com/data/icons/space-butterscotch-vol-2/256/Orbital_Station-512.png",(function(e,t){if(e)throw e;a.addImage("cat",t),a.addSource("point",{type:"geojson",data:{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[r,n]}}]}}),a.addLayer({id:"points",type:"symbol",source:"point",layout:{"icon-image":"cat","icon-size":.1}})}))}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:b.a.map},r.a.createElement("h2",{className:b.a.map_header,style:{color:"white",marginTop:"67%"}},r.a.createElement("center",null,"Current Position of ISS")),r.a.createElement("div",{ref:function(t){return e.mapContainer=t},className:b.a.mapContainer}))}}]),a}(r.a.Component),w=a(89),I=a(86),j=a(88),k=a(90),A=a(8),x=a.n(A),O=a(34),L=a.n(O),C=function(e){var t=e.astronauts.people.map((function(e){return r.a.createElement(I.a,{item:!0,xs:3,sm:2,key:e.name},r.a.createElement(w.a,{className:x.a.card_div},r.a.createElement("img",{className:x.a.img_container,src:L.a,alt:"astronaut"}),r.a.createElement(j.a,null,r.a.createElement(k.a,null,e.name))))}));return r.a.createElement("div",null,r.a.createElement("h2",{className:x.a.header}," Astronauts on ISS "),r.a.createElement(I.a,{container:!0,className:x.a.container_div,spacing:.3},t))},T=a(39),N=a.n(T),J=function(){return r.a.createElement("div",{style:{color:"white"}},r.a.createElement("h2",{style:{textAlign:"center"}},"About"),r.a.createElement("p",{style:{color:"white",marginTop:"3%",margin:"2%",fontSize:"20px"}},"The International Space Station (ISS) is a modular space station (habitable artificial satellite) in low Earth orbit. The ISS program is a multi-national collaborative project between five participating space agencies: NASA (United States), Roscosmos (Russia), JAXA (Japan), ESA (Europe), and CSA (Canada).[6][7] It is an international collaborative effort between multiple countries. The ownership and use of the space station is established by intergovernmental treaties and agreements.[8] It evolved from the Space Station Freedom proposal. The ISS serves as a microgravity and space environment research laboratory in which scientific experiments are conducted in astrobiology, astronomy, meteorology, physics, and other fields.[9][10][11] The station is suited for testing the spacecraft systems and equipment required for possible future long-duration missions to the Moon and Mars.[12] It is the largest artificial object in space and the largest satellite in low Earth orbit, regularly visible to the naked eye from Earth's surface.[13][14] It maintains an orbit with an average altitude of 400 kilometres (250 mi) by means of reboost manoeuvres using the engines of the Zvezda Service Module or visiting spacecraft.[15] The ISS circles the Earth in roughly 93 minutes, completing 15.5 orbits per day.",r.a.createElement("a",{style:{color:"white"},href:"https://en.wikipedia.org/wiki/International_Space_Station"},"  ISS on Wikipedia")))},M=a(20),z=a.n(M),q=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={Lat:"",Lan:"",flag:!1,astronauts:[],astroflag:!1},e.getIssLoc=Object(l.a)(c.a.mark((function t(){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.get();case 2:a=t.sent,e.setState({Lat:a.data.iss_position.latitude,Lan:a.data.iss_position.longitude,flag:!0});case 4:case"end":return t.stop()}}),t)}))),e.getAstro=Object(l.a)(c.a.mark((function t(){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.get();case 2:a=t.sent,e.setState({astronauts:a.data,astroflag:!0});case 4:case"end":return t.stop()}}),t)}))),e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.getIssLoc(),this.getAstro()}},{key:"render",value:function(){return this.state.flag&&this.state.astroflag?r.a.createElement("div",null,r.a.createElement("img",{style:{zIndex:"-4",width:"100%"},src:N.a,alt:"ISS"}),r.a.createElement("h1",{style:{color:"white",marginTop:"-1200px",textDecoration:"underline"}},r.a.createElement("center",null," International Space Station ")),r.a.createElement("div",{className:x.a.scrollview},r.a.createElement(z.a,{selector:"#maps"},r.a.createElement("h2",{style:{color:"white"}},"Current Position of ISS")),r.a.createElement(z.a,{selector:"#astro"},r.a.createElement("h2",{style:{color:"white",marginLeft:"50px"}},"Astronauts on ISS")),r.a.createElement(z.a,{selector:"#about"},r.a.createElement("h2",{style:{color:"white",marginLeft:"50px"}},"About ISS"))),r.a.createElement("div",{id:"maps"},r.a.createElement(S,{Lat:this.state.Lat,Lan:this.state.Lan})),r.a.createElement("div",{id:"astro",className:x.a.astro_div}," ",r.a.createElement(C,{astronauts:this.state.astronauts})," "),r.a.createElement("div",{id:"about"},r.a.createElement(J,null))):r.a.createElement("div",{style:{color:"white",marginTop:"25%"}},r.a.createElement("center",null,r.a.createElement("h1",null,"Loading...")))}}]),a}(r.a.Component);a(68);i.a.render(r.a.createElement(q,null),document.querySelector("#container"))},8:function(e,t,a){e.exports={astro_div:"App_astro_div__15DOg",card_div:"App_card_div__2gjRJ",container_div:"App_container_div__3i16m",img_container:"App_img_container__t4aaw",header:"App_header__3B1Ii",astro_container:"App_astro_container__1sEUI",scrollview:"App_scrollview__1KukI"}}},[[41,1,2]]]);
//# sourceMappingURL=main.797e759e.chunk.js.map