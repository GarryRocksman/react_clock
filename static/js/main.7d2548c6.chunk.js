(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var a=n(7),c=n.n(a),o=n(2),i=n(3),r=n(5),s=n(4),l=n(1),u=n.n(l),d=(n(12),n(0)),m=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={today:new Date},t.timerId=0,t.normalizeData=function(t){return t.toUTCString().slice(-12,-4)},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerId=window.setInterval((function(){t.setState({today:new Date}),console.info(t.normalizeData(t.state.today))}),1e3)}},{key:"componentDidUpdate",value:function(t){t.name!==this.props.name&&console.debug("Renamed from ".concat(t.name," to ").concat(this.props.name))}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId)}},{key:"render",value:function(){var t=this.props.name;return Object(d.jsxs)("div",{className:"Clock",children:[Object(d.jsx)("strong",{className:"Clock__name",children:t})," time is ",Object(d.jsx)("span",{className:"Clock__time",children:this.normalizeData(this.state.today)})]})}}]),n}(u.a.Component);function h(){var t=Date.now().toString().slice(-4);return"Clock-".concat(t)}var v=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={clockName:"Clock-0",hasClock:!0},t.timerId=0,t.handleLeftClick=function(){t.setState({hasClock:!0})},t.handleRightClick=function(e){e.preventDefault(),t.setState({hasClock:!1})},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerId=window.setInterval((function(){t.setState({clockName:h()})}),3300),document.addEventListener("contextmenu",this.handleRightClick),document.addEventListener("click",this.handleLeftClick)}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId),document.removeEventListener("contextmenu",this.handleRightClick),document.removeEventListener("click",this.handleLeftClick)}},{key:"render",value:function(){var t=this.state.hasClock;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"React clock"}),t&&Object(d.jsx)(m,{name:this.state.clockName})]})}}]),n}(u.a.Component);c.a.render(Object(d.jsx)(v,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.7d2548c6.chunk.js.map