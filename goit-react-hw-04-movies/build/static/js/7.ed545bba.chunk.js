(this["webpackJsonpreact-pack"]=this["webpackJsonpreact-pack"]||[]).push([[7],{71:function(t,e,a){"use strict";a.r(e);var n=a(30),c=a(31),r=a(33),i=a(32),s=a(0),l=a.n(s),m=a(29),u=a(72),o=a.n(u),p=function(t){Object(r.a)(a,t);var e=Object(i.a)(a);function a(){var t;Object(n.a)(this,a);for(var c=arguments.length,r=new Array(c),i=0;i<c;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={cast:[]},t}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var t=this,e=this.props.id;Object(m.a)(e).then((function(e){t.setState({cast:e.data.cast})}))}},{key:"render",value:function(){var t=this.state.cast;return l.a.createElement(l.a.Fragment,null,l.a.createElement("ul",null,t.map((function(t){return l.a.createElement("li",{key:t.id,className:o.a.item},l.a.createElement("img",{className:o.a.img,src:"https://image.tmdb.org/t/p/w66_and_h66_face".concat(t.profile_path),alt:t.name}),l.a.createElement("p",null,"Name: ",t.name),l.a.createElement("p",null,"Character: ",t.character))}))))}}]),a}(s.Component);e.default=p},72:function(t,e,a){t.exports={img:"cast_img__3j4Hi",item:"cast_item__3mUWW"}}}]);
//# sourceMappingURL=7.ed545bba.chunk.js.map