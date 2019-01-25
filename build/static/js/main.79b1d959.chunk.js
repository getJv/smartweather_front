(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{184:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),i=a.n(c),o=(a(76),a(7)),l=a(8),s=a(11),u=a(10),m=a(12),h=(a(78),a(80),a(185)),p=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"layout"},r.a.createElement("a",{href:"#menu",id:"menuLink",className:"menu-link"},r.a.createElement("span",null)),r.a.createElement("div",{id:"menu"},r.a.createElement("div",{className:"pure-menu"},r.a.createElement(h.a,{className:"pure-menu-heading",to:"/"},"Menu"),r.a.createElement("ul",{className:"pure-menu-list"},r.a.createElement("li",{className:"pure-menu-item menu-item-divided pure-menu-selected"},r.a.createElement(h.a,{to:"/",className:"pure-menu-link"},"Home")),r.a.createElement("li",{className:"pure-menu-item"},r.a.createElement(h.a,{to:"/about",className:"pure-menu-link"},"About"))))),r.a.createElement("div",{id:"main"},r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"Smart Weather"),r.a.createElement("h2",null,"The better way to check the weather")),r.a.createElement("div",{className:"content"},r.a.createElement("br",null),this.props.children)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var d=a(187),b=a(186),f=a(18),v=a(9),E=a.n(v),y=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={errorMessage:""},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"pure-control-group"},r.a.createElement("input",Object.assign({className:"pure-input-1",required:!0},this.props)),r.a.createElement("span",{className:"error"},this.state.errorMessage))}},{key:"componentDidMount",value:function(){E.a.subscribe("errorValidationStream",function(e,t){this.setState({errorMessage:t.message})}.bind(this)),E.a.subscribe("cleanerStream",function(e){this.setState({errorMessage:""})}.bind(this))}}]),t}(n.Component),j=a(61),O=a.n(j),g=function(){function e(){Object(o.a)(this,e)}return Object(l.a)(e,[{key:"error",value:function(e){E.a.publish("errorValidationStream",e)}}]),e}(),k=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={querySearch:""},e.sentForm=e.sentForm.bind(Object(f.a)(Object(f.a)(e))),e.setQueryString=e.setQueryString.bind(Object(f.a)(Object(f.a)(e))),e.getApiData=e.getApiData.bind(Object(f.a)(Object(f.a)(e))),e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"getApiData",value:function(){O.a.ajax({url:"http://localhost:8080/weather/"+this.state.querySearch,dataType:"json",success:function(e){E.a.publish("newWeatherDataStream",e)},error:function(e){(new g).error(e.responseJSON)},beforeSend:function(){E.a.publish("cleanerStream",{})}})}},{key:"sentForm",value:function(e){e.preventDefault(),this.getApiData()}},{key:"setQueryString",value:function(e){this.setState({querySearch:e.target.value})}},{key:"render",value:function(){return r.a.createElement("div",{className:"pure-u-1"},r.a.createElement("form",{className:"pure-form pure-form-aligned",onSubmit:this.sentForm,method:"post"},r.a.createElement(y,{id:"location",placeholder:"What is your location?",type:"text",name:"location",value:this.state.querySearch,onChange:this.setQueryString})))}}]),t}(n.Component),S=a(62),w=a.n(S),N=a(63),D=a.n(N),M=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleMarkerClick=function(e){e.event;var t=e.payload,a=e.anchor;console.log("Marker #".concat(t," clicked at: "),a)},a.state={points:[-15.78,-47.92]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=this;E.a.subscribe("newWeatherDataStream",function(t,a){a.location&&e.setState({points:[a.location.lat,a.location.lon]})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"pure-g"},r.a.createElement("div",{className:"pure-u-1"},r.a.createElement(w.a,{center:this.state.points,zoom:12,height:150},r.a.createElement(D.a,{anchor:this.state.points,payload:1,onClick:this.handleMarkerClick}))))}}]),t}(n.Component),C=a(64),W=a.n(C),x=a(66),q=a.n(x),A=a(68),F=a.n(A),Q=a(67),T=a.n(Q),z=a(33),B=a.n(z),J=a(35),L=a.n(J),V=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={list:a.props.data.forecast.forecastday},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){this.setState({list:this.props.data.forecast.forecastday})}},{key:"render",value:function(){return r.a.createElement("div",{className:"pure-g"},this.state.list.map(function(e){return r.a.createElement("div",{key:e.date,className:"pure-u-1-2"},r.a.createElement(W.a,null,r.a.createElement(q.a,null,r.a.createElement("img",{src:e.day.condition.icon,alt:e.day.condition.text}),new Date(e.date+"T00:00:00").toDateString(),r.a.createElement(T.a,null,r.a.createElement(L.a,{gutterBottom:!0,variant:"h6",component:"h5"},e.day.condition.text),r.a.createElement(L.a,{component:"p"},"Temperature : ",e.day.avgtemp_c," ",r.a.createElement("small",null,"(avg celsius)")),r.a.createElement(L.a,{component:"p"},"Preciptation: ",e.day.avgtemp_c," ",r.a.createElement("small",null,"(avg mm)")))),r.a.createElement(F.a,null,r.a.createElement(B.a,{size:"small",color:"primary"},"Share"),r.a.createElement(B.a,{size:"small",color:"primary"},"Learn More"))))}))}}]),t}(n.Component),_=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={weatherData:{}},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=this;E.a.subscribe("newWeatherDataStream",function(t,a){e.setState({weatherData:a})})}},{key:"componentDidMount",value:function(){E.a.subscribe("cleanerStream",function(e){this.setState({weatherData:{}})}.bind(this))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(k,null),r.a.createElement(M,null),this.state.weatherData.forecast?r.a.createElement(V,{data:this.state.weatherData}):null)}}]),t}(n.Component);i.a.render(r.a.createElement(d.a,null,r.a.createElement(p,null,r.a.createElement(b.a,{exact:!0,path:"/",component:_}),r.a.createElement(b.a,{path:"/about"}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},71:function(e,t,a){e.exports=a(184)},76:function(e,t,a){},78:function(e,t,a){},80:function(e,t,a){}},[[71,2,1]]]);
//# sourceMappingURL=main.79b1d959.chunk.js.map