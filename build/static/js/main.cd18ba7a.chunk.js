(this["webpackJsonpdropdown-menu-design"]=this["webpackJsonpdropdown-menu-design"]||[]).push([[0],{16:function(t,e,n){t.exports={button:"dropdownButton_button__3fBS5",buttonSmall:"dropdownButton_buttonSmall__2m49g",buttonMiddle:"dropdownButton_buttonMiddle__IGghD",buttonBlue:"dropdownButton_buttonBlue__kiJEy",buttonWhite:"dropdownButton_buttonWhite__X8O95",input:"dropdownButton_input__3W49_"}},20:function(t,e,n){t.exports={listItem:"dropdownItem_listItem__2BlID",listButton:"dropdownItem_listButton__bADNN",listIcon:"dropdownItem_listIcon__3BbNg"}},21:function(t,e,n){t.exports={svgWrapperSmall:"styles_svgWrapperSmall__VxD8h",svgWrapperMiddle:"styles_svgWrapperMiddle__1sujN",svgWrapper:"styles_svgWrapper__3hTG2"}},27:function(t,e,n){t.exports={divider:"dropdownDivider_divider__3R_q_",title:"dropdownDivider_title__103Mb"}},290:function(t,e,n){"use strict";n.r(e);var i,o=n(0),r=n(34),s=(n(59),n(51)),c=n(2),l=n(35),a=n(36),d=Object(a.a)(i||(i=Object(l.a)(["\n  html,\n  body {\n    height: 100%;\n    width: 100%;\n  }\n\n  body {\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  }\n\n  #root {\n    min-height: 100%;\n    min-width: 100%;\n    padding: 30px;\n  }\n\n  p,\n  label {\n    font-family: Georgia, Times, 'Times New Roman', serif;\n    line-height: 1.5em;\n  }\n\n  input, select {\n    font-family: inherit;\n    font-size: inherit;\n  }\n  \n  ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n  }\n\n  svg {\n    width: 100%\n  }\n  \n  h1 {    \n    margin: 32px 0 16px;\n\n    &:first-of-type {\n      margin-top: 0;\n    }\n  }\n\n  .visually-hidden {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    margin: -1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    width: 1px;\n    outline: 0;\n  }\n"]))),p=n(5),u=n(6),j=n(8),b=n(7),h=n(31),m=n(19),x=n(297),O=n(299),g=n(40),f=n.n(g),v=n(1),w=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(t){var i;return Object(p.a)(this,n),(i=e.call(this,t)).toggleOpen=function(){i.setState({isDropdownVisible:!i.state.isDropdownVisible})},i.getTrigger=function(t){var e=t.ref,n=i.props,o=n.text,r=n.trigger,s=n.triggerButtonProps,c=n.onDisabledClick;return r?Object(v.jsx)("div",{ref:e,onClick:i.toggleOpen,children:r}):Object(v.jsx)("div",{ref:e,children:Object(v.jsxs)(F,Object(h.a)(Object(h.a)({},s),{},{onClick:i.toggleOpen,onDisabledClick:c,children:[o,Object(v.jsx)(H,{className:f.a.buttonIcon,size:"small",icon:"arrow-down"})]}))})},i.getPopper=function(t){var e=i.props.children;return Object(v.jsx)("div",{ref:t.ref,style:t.style,"data-placement":t.placement,children:Object(v.jsx)(M,{children:Object(v.jsx)("ul",{children:e})})})},i.state={isDropdownVisible:!1},i}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props.position,e=this.state.isDropdownVisible;return Object(v.jsxs)(m.a,{children:[Object(v.jsx)(x.a,{children:this.getTrigger}),e&&Object(v.jsx)(O.a,{placement:t,children:this.getPopper})]})}}]),n}(o.PureComponent);w.defaultProps={text:"Menu",position:"bottom-start",flip:!0,hasBackdrop:!0};var k=n(14),C=n.n(k),D=n(27),I=n.n(D),_=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(){return Object(p.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.className,n=t.title,i=t.titleClassName;return t.hidden?null:n?Object(v.jsx)("li",{className:C()(I.a.title,e),children:Object(v.jsx)("span",{className:i,children:n})}):Object(v.jsx)("li",{className:C()(I.a.divider,e)})}}]),n}(o.PureComponent),y=n(20),B=n.n(y),N=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(){return Object(p.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"itemContent",get:function(){var t=this.props,e=t.text,n=t.before,i=t.disabled,o=t.autoFocus,r=t.children,s=t.onClick,c=t.onDisabledClick;return e?Object(v.jsxs)(F,{className:B.a.listButton,disabled:i,autoFocus:o,onClick:s,onDisabledClick:c,size:"small",color:"white",children:[n&&Object(v.jsx)(H,{className:B.a.listIcon,icon:n}),e]}):r}},{key:"render",value:function(){return this.props.hidden?null:Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("li",{className:B.a.listItem,children:this.itemContent})})}}]),n}(o.PureComponent);N.defaultProps={isOpenOnHover:!0};var P=n(16),S=n.n(P),E=n(43),A=n.n(E),F=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(p.a)(this,n);for(var i=arguments.length,o=new Array(i),r=0;r<i;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).htmlId=A()(),t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.disabled,n=t.autoFocus,i=t.onClick,o=t.onDisabledClick,r=t.children,s=t.size,c=t.color,l=t.className,a="small"===s?S.a.buttonSmall:S.a.buttonMiddle,d="blue"===c?S.a.buttonBlue:S.a.buttonWhite;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("input",{id:this.htmlId,type:"button",disabled:e,autoFocus:n,className:C()(S.a.input,"visually-hidden"),onClick:i}),Object(v.jsx)("label",{htmlFor:this.htmlId,className:C()(S.a.button,a,d,l),onClick:e?o:function(){return null},children:r})]})}}]),n}(o.PureComponent);F.defaultProps={size:"middle",color:"blue"};var T=n(44),W=n.n(T),M=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(){return Object(p.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props.children;return Object(v.jsx)("div",{className:W.a.overlay,children:t})}}]),n}(o.PureComponent),z=n(21),G=n.n(z),V=n(52),H=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(){return Object(p.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.icon,n=t.className,i="small"===t.size?G.a.svgWrapperSmall:G.a.svgWrapperMiddle;return Object(v.jsx)(V.a,{className:C()(G.a.svgWrapper,n,i),src:"".concat("/miro/build","/images/icons/").concat(e,".svg")})}}]),n}(o.PureComponent);H.defaultProps={size:"middle"};var J=n(300),R=n(298),q=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(p.a)(this,n);for(var i=arguments.length,o=new Array(i),r=0;r<i;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).onItemClick=function(){console.log("Item was clicked")},t.sendStaticInformation=function(){console.log("Disabled trigger was clicked")},t.customTrigger=Object(v.jsx)("a",{href:"https://www.google.com/",onClick:function(t){return t.preventDefault()},children:"trigger"}),t.defaultExample='\n    <Dropdown>\n      <DropdownDivider title="Group of actions" />\n      <DropdownItem text="Action" onClick={this.onItemClick} />\n      <DropdownItem text="Other action" onClick={this.onItemClick} />\n      <DropdownDivider />\n      <DropdownItem text="One more action" onClick={this.onItemClick} />\n    </Dropdown>\n  ',t.disabledTriggerExample='\n    <Dropdown\n      triggerButtonProps={{ disabled: true }}\n      onDisabledClick={this.sendStaticInformation}\n    >\n      <DropdownItem text="Action" />\n      <DropdownItem text="Other action" />\n    </Dropdown>\n  ',t.autofocusExample='\n    <Dropdown triggerButtonProps={{ autoFocus: true }}>\n      <DropdownItem autoFocus text="Action" />\n      <DropdownItem text="Other action" />\n    </Dropdown>\n  ',t.customTriggerExample='\n    <Dropdown trigger={customTrigger}>\n      <DropdownItem text="Action" />\n      <DropdownItem text="Other action" />\n    </Dropdown>\n  ',t.itemOptionsExample='\n    <Dropdown>\n      <DropdownItem\n        text="Accessibility"\n        before="accessibility"\n        onClick={this.onItemClick}\n      />\n      <DropdownItem\n        text="Other action"\n        hidden\n      />\n      <DropdownDivider hidden />\n      <DropdownItem\n        text="Extension"\n        before="extension"\n        disabled\n        onDisabledClick={this.sendStaticInformation}\n      />\n      <DropdownItem\n        text="Favorite"\n        before="favorite"\n        onClick={this.onItemClick}\n      />\n    </Dropdown>\n  ',t.customItemsExample="\n    <Dropdown>\n      <DropdownItem>\n        <strong onClick={this.onItemClick}>Strong text</strong>\n      </DropdownItem>\n      <DropdownItem>\n        <b onClick={this.onItemClick}>Bold text</b>\n      </DropdownItem>\n      <DropdownItem>\n        <div onClick={this.onItemClick}>Simple text</div>\n      </DropdownItem>\n    </Dropdown>\n  ",t}return Object(u.a)(n,[{key:"render",value:function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h1",{children:"Default"}),Object(v.jsxs)(w,{children:[Object(v.jsx)(_,{title:"Group of actions"}),Object(v.jsx)(N,{text:"Action",onClick:this.onItemClick}),Object(v.jsx)(N,{text:"Other action",onClick:this.onItemClick}),Object(v.jsx)(_,{}),Object(v.jsx)(N,{text:"One more action",onClick:this.onItemClick})]}),Object(v.jsx)(J.a,{language:"javascript",style:R.a,children:this.defaultExample}),Object(v.jsx)("h1",{children:"Autofocus"}),Object(v.jsxs)(w,{triggerButtonProps:{autoFocus:!0},children:[Object(v.jsx)(N,{autoFocus:!0,text:"Action"}),Object(v.jsx)(N,{text:"Other action"})]}),Object(v.jsx)(J.a,{language:"javascript",style:R.a,children:this.autofocusExample}),Object(v.jsx)("h1",{children:"Disabled trigger"}),Object(v.jsx)("p",{children:"Triggers an event. Check it in the console."}),Object(v.jsxs)(w,{triggerButtonProps:{disabled:!0},onDisabledClick:this.sendStaticInformation,children:[Object(v.jsx)(N,{text:"Action"}),Object(v.jsx)(N,{text:"Other action"})]}),Object(v.jsx)(J.a,{language:"javascript",style:R.a,children:this.disabledTriggerExample}),Object(v.jsx)("h1",{children:"\u0421ustom trigger"}),Object(v.jsxs)(w,{trigger:this.customTrigger,children:[Object(v.jsx)(N,{text:"Action"}),Object(v.jsx)(N,{text:"Other action"})]}),Object(v.jsx)(J.a,{language:"javascript",style:R.a,children:this.customTriggerExample}),Object(v.jsx)("h1",{children:"Different items options"}),Object(v.jsx)("p",{children:"Disabled DropdownItem triggers an event. Check it in the console."}),Object(v.jsxs)(w,{children:[Object(v.jsx)(N,{text:"Accessibility",before:"accessibility",onClick:this.onItemClick}),Object(v.jsx)(N,{text:"Other action",hidden:!0}),Object(v.jsx)(_,{hidden:!0}),Object(v.jsx)(N,{text:"Extension",before:"extension",disabled:!0,onDisabledClick:this.sendStaticInformation}),Object(v.jsx)(N,{text:"Favorite",before:"favorite",onClick:this.onItemClick})]}),Object(v.jsx)(J.a,{language:"javascript",style:R.a,children:this.itemOptionsExample}),Object(v.jsx)("h1",{children:"\u0421ustom items"}),Object(v.jsxs)(w,{children:[Object(v.jsx)(N,{children:Object(v.jsx)("strong",{onClick:this.onItemClick,children:"Strong text"})}),Object(v.jsx)(N,{children:Object(v.jsx)("b",{onClick:this.onItemClick,children:"Bold text"})}),Object(v.jsx)(N,{children:Object(v.jsx)("div",{onClick:this.onItemClick,children:"Simple text"})})]}),Object(v.jsx)(J.a,{language:"javascript",style:R.a,children:this.customItemsExample})]})}}]),n}(o.PureComponent);function L(){return Object(v.jsxs)(s.a,{children:[Object(v.jsx)(c.c,{children:Object(v.jsx)(c.a,{exact:!0,path:"/",component:q})}),Object(v.jsx)(d,{})]})}var X=document.getElementById("root");r.render(Object(v.jsx)(o.StrictMode,{children:Object(v.jsx)(L,{})}),X)},40:function(t,e,n){t.exports={buttonIcon:"dropdown_buttonIcon__3CiH5"}},44:function(t,e,n){t.exports={overlay:"styles_overlay__3sLZg"}}},[[290,1,2]]]);