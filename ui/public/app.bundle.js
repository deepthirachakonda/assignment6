!function(e){function t(t){for(var r,c,l=t[0],u=t[1],i=t[2],d=0,p=[];d<l.length;d++)c=l[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&p.push(a[c][0]),a[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(s&&s(t);p.length;)p.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,l=1;l<n.length;l++){var u=n[l];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={0:0},o=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var l=window.webpackJsonp=window.webpackJsonp||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var s=u;o.push([233,1]),n()}({233:function(e,t,n){n(47),e.exports=n(513)},436:function(e,t,n){(t=n(199)(!1)).push([e.i,'#root {\n  justify-content: center;\n  align-items: center;\n}\n\n.container {\n  background: white;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: #68a1af;\n}\nh1{\n  text-align :center;\n  color: navy;\n  font-weight:bolder ;\n  font-family: Arial, Helvetica, sans-serif;\n  font-style: italic;\n}\n\n.container:hover {\n  color: white;\n  box-shadow: 0 25px 39px 6px rgba(41,62,64,0.69)\n}\n\n.container:hover a {\n  color: white;\n}\n\n.table{\n  padding: 30px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.form{\n  padding: 30px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n}\n\ninput[type=text] {\n  width: 100%;\n  padding: 5px;\n  margin: 8px 0;\n  box-sizing: border-box;\n  background-color: lightpink;\n  color: white;\n}\n.select{\n  width: 100%;\n  padding: 5px;\n  margin: 8px 0;\n  box-sizing: border-box;\n  background-color: lightpink;\n  color: white;\n\n}\n.main{\n  width:68%;\n}\ninput[type=number] {\n  width: 100%;\n  padding: 5px;\n  margin: 8px 0;\n  box-sizing: border-box;\n  background-color: lightpink;\n  color: white;\n}\n\n.dollar{\n\tdisplay:inline-block;\n  position: relative;\n  box-sizing: border-box;\n  width:100%;\n\t}\n.dollar input{\n\tpadding-left:15px;\n\t}\n.dollar:before {\n\tposition: absolute;\n    content:"$";\n    left:5px;\n  top:12px;\n}\n\ntable{\n  width :100%;\n  text-align: center;\n  border:1px solid black;\n  border-collapse: collapse;\n}\nth{\n  height: 50px;\n  text-align: center;\n\n}\ntd{\n  height:30px;\n}\na {\n  color: black;\n  padding: 10px 20px;\n  text-decoration: none;\n  border: 1px solid black;\n}\n\na:hover {\n  background: black;\n  color: white;\n}\n\n.App-header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: black;\n}',""]),e.exports=t},513:function(e,t,n){"use strict";n.r(t);n(47);var r=n(0),a=n.n(r),o=(n(58),n(18)),c=n.n(o),l=n(201),u=n(24),i=n.n(u),s=n(54),d=n.n(s);function p(e){return f.apply(this,arguments)}function f(){return(f=d()(i.a.mark((function e(t){var n,r,a,o,c,l,u=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:{},e.prev=1,e.next=4,fetch(window.ENV.UI_API_ENDPOINT,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:t,variables:n})});case 4:return r=e.sent,e.next=7,r.text();case 7:return a=e.sent,o=JSON.parse(a),console.log(o),o.errors&&("BAD_USER_INPUT"===(c=o.errors[0]).extensions.code?(l=c.extensions.exception.errors.join("\n "),alert("".concat(c.message,":\n ").concat(l))):alert("".concat(c.extensions.code,": ").concat(c.message))),e.abrupt("return",o.data);case 14:return e.prev=14,e.t0=e.catch(1),alert("Error in sending data to server: ".concat(e.t0.message)),e.abrupt("return",null);case 18:case"end":return e.stop()}}),e,null,[[1,14]])})))).apply(this,arguments)}var m=n(155),h=n.n(m),g=n(26),v=n.n(g),y=n(27),E=n.n(y),P=n(29),b=n.n(P),x=n(31),_=n.n(x),k=n(20),w=n.n(k),C=n(28),S=n.n(C),D=n(83),M=n.n(D),R=n(219);function O(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var I=function(e){S()(r,e);var t,n=(t=r,function(){var e,n=w()(t);if(O()){var r=w()(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return _()(this,e)});function r(e){var t,a=e.location.search;v()(this,r),t=n.call(this);var o=new M.a(a);return t.state={status:o.get("status")||"",effortMin:o.get("effortMin")||"",effortMax:o.get("effortMax")||"",changed:!1},t.onChangeStatus=t.onChangeStatus.bind(b()(t)),t.onChangeEffortMin=t.onChangeEffortMin.bind(b()(t)),t.onChangeEffortMax=t.onChangeEffortMax.bind(b()(t)),t.applyFilter=t.applyFilter.bind(b()(t)),t.showOriginalFilter=t.showOriginalFilter.bind(b()(t)),t}return E()(r,[{key:"componentDidUpdate",value:function(e){e.location.search!==this.props.location.search&&this.showOriginalFilter()}},{key:"onChangeStatus",value:function(e){this.setState({status:e.target.value,changed:!0})}},{key:"onChangeEffortMin",value:function(e){e.target.value.match(/^\d*$/)&&this.setState({effortMin:e.target.value,changed:!0})}},{key:"onChangeEffortMax",value:function(e){e.target.value.match(/^\d*$/)&&this.setState({effortMax:e.target.value,changed:!0})}},{key:"showOriginalFilter",value:function(){var e=this.props.location.search,t=new M.a(e);this.setState({status:t.get("status")||"",effortMin:t.get("effortMin")||"",effortMax:t.get("effortMax")||"",changed:!1})}},{key:"applyFilter",value:function(){var e=this.state,t=e.status,n=e.effortMin,r=e.effortMax,a=this.props.history,o=new M.a;t&&o.set("status",t),n&&o.set("effortMin",n),r&&o.set("effortMax",r);var c=o.toString()?"?".concat(o.toString()):"";a.push({pathname:"/products",search:c})}},{key:"render",value:function(){var e=this.state,t=(e.status,e.changed,this.state);t.effortMin,t.effortMax;return a.a.createElement("div",null,"Product Contents")}}]),r}(r.Component),j=Object(R.a)(I),N=n(223),$=(n(451),n(515)),A=n(520),U=n(516),F=n(517),J=n(74),T=Object(R.a)((function(e){var t=e.product,n=e.location.search,r=e.closeProduct,o=e.deleteProduct,c=e.index,l={pathname:"/products/".concat(t.Product_id),search:n},u=a.a.createElement($.a,{id:"close-tooltip",placement:"top"},"Edit Product"),i=a.a.createElement($.a,{id:"close-tooltip",placement:"top"},"Close Product"),s=a.a.createElement($.a,{id:"delete-tooltip",placement:"top"},"Delete Product");var d=a.a.createElement("tr",null,a.a.createElement("td",null,t.Product_id),a.a.createElement("td",null,t.status),a.a.createElement("td",null,t.Product_name),a.a.createElement("td",null,t.Category),a.a.createElement("td",null,"$",t.Price),a.a.createElement("td",null,a.a.createElement("a",{href:t.Image,target:"_blank"},t.Image)),a.a.createElement("td",null,a.a.createElement(J.LinkContainer,{to:"/edit/".concat(t.Product_id)},a.a.createElement(A.a,{delayShow:1e3,overlay:u},a.a.createElement(U.a,{bsSize:"xsmall"},a.a.createElement(F.a,{glyph:"edit"}))))," | ",a.a.createElement(A.a,{delayShow:1e3,overlay:i},a.a.createElement(U.a,{bsSize:"xsmall",onClick:function(e){e.preventDefault(),r(c)}},a.a.createElement(F.a,{glyph:"remove"})))," ",a.a.createElement(A.a,{delayShow:1e3,overlay:s},a.a.createElement(U.a,{bsSize:"xsmall",onClick:function(e){e.preventDefault(),o(c)}},a.a.createElement(F.a,{glyph:"trash"})))));return a.a.createElement(J.LinkContainer,{to:l},d)}));function L(e){var t=e.products,n=e.closeProduct,r=e.deleteProduct,o=t.map((function(e,t){return a.a.createElement(T,{key:e.Product_id,product:e,closeProduct:n,deleteProduct:r,index:t})}));return a.a.createElement(N.Table,null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Product_id"),a.a.createElement("th",null,"status"),a.a.createElement("th",null,"Product_name"),a.a.createElement("th",null,"Category"),a.a.createElement("th",null,"Price"),a.a.createElement("th",null,"Image"),a.a.createElement("th",null,"Action"))),a.a.createElement("tbody",null,o))}var z=n(1),q=n.n(z);function H(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var B=function(e){S()(r,e);var t,n=(t=r,function(){var e,n=w()(t);if(H()){var r=w()(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return _()(this,e)});function r(){var e;return v()(this,r),(e=n.call(this)).handleSubmit=e.handleSubmit.bind(b()(e)),e}return E()(r,[{key:"handleSubmit",value:function(e){console.log("test message121212"),e.preventDefault();var t=document.forms.productAdd;console.log(t.Price.value);var n={Product_id:0,status:"New",Product_name:t.Product_name.value,Category:t.Category.value,Price:t.Price.valueAsNumber,Image:t.Image.value};this.props.createProduct(n),t.Product_name.value="",t.Category.value="Shirts",t.Price.value=0,t.Image.value=""}},{key:"render",value:function(){return a.a.createElement("div",{className:"form"},a.a.createElement("form",{name:"productAdd",onSubmit:this.handleSubmit,className:"main"},a.a.createElement("input",{type:"text",name:"Product_name",placeholder:"Product_name"}),a.a.createElement("select",{name:"Category",className:"select",placeholder:"Category"},a.a.createElement("option",{value:"Shirts"},"Shirts"),a.a.createElement("option",{value:"Jeans"},"Jeans"),a.a.createElement("option",{value:"Jackets"},"Jackets"),a.a.createElement("option",{value:"Sweaters"},"Sweaters"),a.a.createElement("option",{value:"Accessories"},"Accessories")),a.a.createElement("div",{className:"dollar"}," ",a.a.createElement("input",{type:"number",name:"Price",placeholder:"Price"})),a.a.createElement("input",{type:"text",name:"Image",placeholder:"Image"}),a.a.createElement("button",null,"Add Product")))}}]),r}(r.Component);function G(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}B.propTypes={createProduct:q.a.func.isRequired};var V=function(e){S()(u,e);var t,n,r,o,c,l=(t=u,function(){var e,n=w()(t);if(G()){var r=w()(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return _()(this,e)});function u(){var e;return v()(this,u),console.log("test message23"),(e=l.call(this)).state={products:[]},e.createProduct=e.createProduct.bind(b()(e)),e.closeProduct=e.closeProduct.bind(b()(e)),e.deleteProduct=e.deleteProduct.bind(b()(e)),e}return E()(u,[{key:"componentDidMount",value:function(){console.log("test message3"),this.loadData()}},{key:"componentDidUpdate",value:function(e){e.location.search!==this.props.location.search&&this.loadData()}},{key:"loadData",value:(c=d()(i.a.mark((function e(){var t,n,r,a,o,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.location.search,n=new M.a(t),r={},n.get("status")&&(r.status=n.get("status")),a=parseInt(n.get("effortMin"),10),Number.isNaN(a)||(r.effortMin=a),o=parseInt(n.get("effortMax"),10),Number.isNaN(o)||(r.effortMax=o),e.next=11,p("query ProductList(\n        $status: StatusType\n        $effortMin: Int\n        $effortMax: Int\n        ) {\n            ProductList(\n                status: $status\n                effortMin: $effortMin\n                effortMax: $effortMax\n                ) {\n                    Product_id\n                    status\n                    Product_name\n                    Category\n                    Price\n                    Image\n                    }\n         }",r);case 11:c=e.sent,console.log(c),c&&this.setState({products:c.ProductList});case 14:case"end":return e.stop()}}),e,this)}))),function(){return c.apply(this,arguments)})},{key:"createProduct",value:(o=d()(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("test message"),e.next=4,p("mutation ProductAdd($product: ProductInputs!){\n      ProductAdd(product: $product)  {\n        Product_id\n        status\n        Product_name\n        Category\n        Price\n        Image\n      }\n    }",{product:t});case 4:e.sent&&this.loadData();case 6:case"end":return e.stop()}}),e,this)}))),function(e){return o.apply(this,arguments)})},{key:"closeProduct",value:(r=d()(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.state.products,e.next=4,p("mutation ProductClose($Product_id: Int!) {\n          ProductUpdate(Product_id: $Product_id, changes: { status: Closed }) {\n            Product_id\n            status\n            Product_name\n            Category\n            Price\n            Image\n          }\n        }",{Product_id:n[t].Product_id});case 4:(r=e.sent)?this.setState((function(e){var n=h()(e.products);return n[t]=r.ProductUpdate,{products:n}})):this.loadData();case 6:case"end":return e.stop()}}),e,this)}))),function(e){return r.apply(this,arguments)})},{key:"deleteProduct",value:(n=d()(i.a.mark((function e(t){var n,r,a,o,c,l,u,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("in delete"),n=this.state.products,r=this.props,a=r.location,o=a.pathname,c=a.search,l=r.history,u=n[t].Product_id,e.next=7,p("mutation productDelete($Product_id: Int!) {\n        productDelete(Product_id: $Product_id)\n        }",{Product_id:u});case 7:(s=e.sent)&&s.productDelete?this.setState((function(e){var n=h()(e.products);return o==="/products/".concat(u)&&l.push({pathname:"/products",search:c}),n.splice(t,1),{products:n}})):this.loadData();case 9:case"end":return e.stop()}}),e,this)}))),function(e){return n.apply(this,arguments)})},{key:"render",value:function(){return console.log("test message1"),a.a.createElement("div",{className:"container"},a.a.createElement(a.a.Fragment,null,a.a.createElement(j,null),a.a.createElement("hr",null),a.a.createElement("div",{className:"table"},a.a.createElement(L,{products:this.state.products,closeProduct:this.closeProduct,deleteProduct:this.deleteProduct})),a.a.createElement("hr",null),a.a.createElement(B,{createProduct:this.createProduct}),a.a.createElement("hr",null)))}}]),u}(r.Component),K=n(519),Q=n(521),W=n(518),X=n(231),Y=n(221),Z=n(220),ee=n(112);function te(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var ne=function(e){S()(r,e);var t,n=(t=r,function(){var e,n=w()(t);if(te()){var r=w()(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return _()(this,e)});function r(){return v()(this,r),n.apply(this,arguments)}return E()(r,[{key:"render",value:function(){return a.a.createElement("div",null,"This is a placeholder for the product Report.")}}]),r}(r.Component),re=n(230),ae=n.n(re),oe=n(158),ce=n.n(oe),le=n(93);function ue(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ie(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ue(Object(n),!0).forEach((function(t){ce()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ue(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function se(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var de=function(e){S()(c,e);var t,n,r,o=(t=c,function(){var e,n=w()(t);if(se()){var r=w()(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return _()(this,e)});function c(){var e;return v()(this,c),console.log("In constr productedit"),(e=o.call(this)).state={product:{}},e.onChange=e.onChange.bind(b()(e)),e.handleSubmit=e.handleSubmit.bind(b()(e)),e}return E()(c,[{key:"componentDidMount",value:function(){this.loadData()}},{key:"componentDidUpdate",value:function(e){var t=e.match.params.Product_id;this.props.match.params.Product_id!==t&&this.loadData()}},{key:"onChange",value:function(e){var t=e.target,n=t.name,r=t.value;this.setState((function(e){return{product:ie({},e.product,ce()({},n,r))}}))}},{key:"handleSubmit",value:(r=d()(i.a.mark((function e(t){var n,r,a,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("in handle submit"),t.preventDefault(),n=this.state.product,console.log(this.state),console.log("in handle submit1"),r=n.Product_id,a=ae()(n,["Product_id"]),console.log(a),console.log(r),e.next=11,p("mutation ProductUpdate(\n      $Product_id: Int!\n      $changes: ProductUpdateInputs!) {\n      ProductUpdate(Product_id: $Product_id\n        changes: $changes) {\n        status\n        Product_name\n        Category\n        Price\n        Image\n      }\n    }",{Product_id:r,changes:a});case 11:o=e.sent,console.log(o),o&&(this.setState({product:o.ProductUpdate}),alert("Updated product successfully")),console.log("in handle submit7");case 15:case"end":return e.stop()}}),e,this)}))),function(e){return r.apply(this,arguments)})},{key:"loadData",value:(n=d()(i.a.mark((function e(){var t,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("in load edit"),t=this.props.match.params.Product_id,e.next=5,p("query product($Product_id: Int!) {\n          product(Product_id: $Product_id) {\n                    Product_id\n                    status\n                    Product_name\n                    Category\n                    Price\n                    Image\n                  }\n                }",{Product_id:t});case 5:n=e.sent,console.log(n),n?(console.log("in if"),(r=n.product).Product_name=null!=r.Product_name?r.Product_name.toString():"",r.Category=r.Category?r.Category:"",this.setState({product:r})):(console.log("in else"),this.setState({product:{}}));case 8:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{key:"render",value:function(){console.log("in render edit");var e=this.state.product.Product_id,t=this.props.match.params.Product_id;if(console.log(this.props),null==e)return null!=t?a.a.createElement("h3",null,"product with ID ".concat(t," updated")):null;var n=this.state.product,r=n.Product_name,o=n.status,c=this.state.product,l=c.Category,u=c.Price,i=c.Image;return a.a.createElement("form",{onSubmit:this.handleSubmit},a.a.createElement("h3",null,"Editing product: ".concat(e)),a.a.createElement("table",null,a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"Created:")),a.a.createElement("tr",null,a.a.createElement("td",null,"Status:"),a.a.createElement("td",null,a.a.createElement("select",{name:"status",value:o,onChange:this.onChange},a.a.createElement("option",{value:"New"},"New"),a.a.createElement("option",{value:"Assigned"},"Assigned"),a.a.createElement("option",{value:"Fixed"},"Fixed"),a.a.createElement("option",{value:"Closed"},"Closed")))),a.a.createElement("tr",null,a.a.createElement("td",null,"Product_name:"),a.a.createElement("td",null,a.a.createElement("input",{name:"Product_name",value:r,onChange:this.onChange}))),a.a.createElement("tr",null,a.a.createElement("td",null,"Category:"),a.a.createElement("td",null,a.a.createElement("select",{name:"Category",value:l,onChange:this.onChange},a.a.createElement("option",{value:"Shirts"},"Shirts"),a.a.createElement("option",{value:"Jeans"},"Jeans"),a.a.createElement("option",{value:"Jackets"},"Jackets"),a.a.createElement("option",{value:"Sweaters"},"Sweaters"),a.a.createElement("option",{value:"Accessories"},"Accessories")))),a.a.createElement("tr",null,a.a.createElement("td",null,"Price:"),a.a.createElement("td",null,a.a.createElement("input",{name:"Price",value:u,onChange:this.onChange}))),a.a.createElement("tr",null,a.a.createElement("td",null,"Image:"),a.a.createElement("td",null,a.a.createElement("input",{name:"Image",value:i,onChange:this.onChange}))),a.a.createElement("tr",null,a.a.createElement("td",null),a.a.createElement("td",null,a.a.createElement("button",{type:"submit"},"Submit"))))),a.a.createElement(le.a,{to:"/edit/".concat(e-1)},"Prev")," | ",a.a.createElement(le.a,{to:"/edit/".concat(e+1)},"Next"))}}]),c}(r.Component);function pe(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var fe=function(){return a.a.createElement("h1",null,"Page Not Found")},me=function(e){S()(r,e);var t,n=(t=r,function(){var e,n=w()(t);if(pe()){var r=w()(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return _()(this,e)});function r(){return v()(this,r),n.apply(this,arguments)}return E()(r,[{key:"render",value:function(){return a.a.createElement(Y.a,null,a.a.createElement(Z.a,{exact:!0,from:"/",to:"/products"}),a.a.createElement(ee.a,{path:"/products",component:V}),a.a.createElement(ee.a,{path:"/edit/:Product_id",component:de}),a.a.createElement(ee.a,{path:"/report",component:ne}),a.a.createElement(ee.a,{component:fe}))}}]),r}(r.Component);function he(e){return function(){var t,n=w()(e);if(ge()){var r=w()(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return _()(this,t)}}function ge(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var ve=function(e){S()(n,e);var t=he(n);function n(){return v()(this,n),t.apply(this,arguments)}return E()(n,[{key:"render",value:function(){return a.a.createElement(K.a,{fluid:!0},a.a.createElement(K.a.Header,null,a.a.createElement(K.a.Brand,null,"My Company Inventory")),a.a.createElement(Q.a,null,a.a.createElement(J.LinkContainer,{exact:!0,to:"/"},a.a.createElement(W.a,null,"Home")),a.a.createElement(J.LinkContainer,{to:"/products"},a.a.createElement(W.a,null,"Product List")),a.a.createElement(J.LinkContainer,{to:"/report"},a.a.createElement(W.a,null,"Report"))))}}]),n}(r.Component),ye=function(e){S()(n,e);var t=he(n);function n(){return v()(this,n),t.apply(this,arguments)}return E()(n,[{key:"render",value:function(){return a.a.createElement("small",null,a.a.createElement("p",{className:"text-center"},"Full source code available at this"," ",a.a.createElement("a",{href:"github.com/deepthirachakonda/assignment2"},"GitHub repository")))}}]),n}(r.Component),Ee=function(e){S()(n,e);var t=he(n);function n(){return v()(this,n),t.apply(this,arguments)}return E()(n,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(ve,null),a.a.createElement(X.a,{fluid:!0},a.a.createElement(me,null)),a.a.createElement(ye,null))}}]),n}(r.Component),Pe=a.a.createElement(l.a,null,a.a.createElement(Ee,null));c.a.render(Pe,document.getElementById("root"))},58:function(e,t,n){var r=n(198),a=n(436);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1},c=(r(a,o),a.locals?a.locals:{});e.exports=c}});
//# sourceMappingURL=app.bundle.js.map