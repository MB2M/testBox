(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{14:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(7),o=n.n(r),s=(n(14),n(8)),c=n(1),d=n.n(c),l=n(2),u=n(5),p=n(4),y=n(3),m=n.n(y),f=function(){return new Promise((function(e,t){window.addEventListener("load",Object(l.a)(d.a.mark((function n(){var a,i,r,o;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!window.ethereum){n.next=13;break}return a=new m.a(window.ethereum),n.prev=2,n.next=5,window.ethereum.enable();case 5:e(a),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(2),t(n.t0);case 11:n.next=14;break;case 13:window.web3?(i=window.web3,console.log("Injected web3 detected."),e(i)):(r=new m.a.providers.HttpProvider("http://127.0.0.1:8545"),o=new m.a(r),console.log("No web3 instance injected, using Local web3."),e(o));case 14:case"end":return n.stop()}}),n,null,[[2,8]])}))))}))};n(17);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var T=function(){var e=Object(a.useState)({storageValue:0,web3:null,accounts:null,contract:null}),t=Object(u.a)(e,2),n=t[0],r=t[1],o=Object(a.useRef)(),c=Object(a.useState)(0),y=Object(u.a)(c,2),m=y[0],T=y[1];Object(a.useEffect)((function(){Object(l.a)(d.a.mark((function e(){var t,n,a,i,o,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f();case 3:return t=e.sent,e.next=6,t.eth.getAccounts();case 6:return n=e.sent,e.next=9,t.eth.net.getId();case 9:return a=e.sent,i=p.networks[a],o=new t.eth.Contract(p.abi,i&&i.address),console.log(o),e.next=15,o.methods.get().call();case 15:return s=e.sent,r({storageValue:s,web3:t,accounts:n,contract:o}),e.next=19,o.events.SetEvent().on("data",(function(e){var t=e.returnValues.value;console.log(t),T(t)})).on("changed",(function(e){return console.log(e)})).on("connected",(function(e){return console.log(e)}));case 19:e.next=25;break;case 21:e.prev=21,e.t0=e.catch(0),alert("Failed to load web3, accounts, or contract. Check console for details."),console.error(e.t0);case 25:case"end":return e.stop()}}),e,null,[[0,21]])})))()}),[]),Object(a.useEffect)((function(){r((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(n,!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{storageValue:m})}))}),[m]);var v=function(){var e=Object(l.a)(d.a.mark((function e(t){var a,i,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=n.accounts,i=n.contract,r=o.current.value.toUpperCase(),e.next=5,i.methods.set(r).send({from:a[0]});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return n.web3?i.a.createElement("div",{className:"App"},i.a.createElement("h1",null,"Good to Go!"),i.a.createElement("p",null,"Your Truffle Box is installed and ready."),i.a.createElement("h2",null,"Smart Contract Example"),i.a.createElement("p",null,"If your contracts compiled and migrated successfully, below will show a stored value of 5 (by default)."),i.a.createElement("p",null,"Try changing the value stored on ",i.a.createElement("strong",null,"line 42")," of App.js."),i.a.createElement("form",{onSubmit:v,className:"form"},i.a.createElement("label",null,i.a.createElement("input",{type:"text",ref:o,onChange:function(e){e.target.value<0&&(e.target.value=e.target.value.slice(0,0))},className:"input"})),i.a.createElement("input",{type:"submit",value:"Set",className:"button"})),i.a.createElement("div",null,"The stored value is: ",n.storageValue)):i.a.createElement("div",null,"Loading Web3, accounts, and contract...")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},4:function(e){e.exports=JSON.parse('{"contractName":"SimpleStorage","abi":[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"SetEvent","type":"event"},{"inputs":[{"internalType":"uint256","name":"x","type":"uint256"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"get","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true}],"metadata":"{\\"compiler\\":{\\"version\\":\\"0.8.9+commit.e5eed63a\\"},\\"language\\":\\"Solidity\\",\\"output\\":{\\"abi\\":[{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":false,\\"internalType\\":\\"uint256\\",\\"name\\":\\"value\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"SetEvent\\",\\"type\\":\\"event\\"},{\\"inputs\\":[],\\"name\\":\\"get\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"x\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"set\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"}],\\"devdoc\\":{\\"kind\\":\\"dev\\",\\"methods\\":{},\\"version\\":1},\\"userdoc\\":{\\"kind\\":\\"user\\",\\"methods\\":{},\\"version\\":1}},\\"settings\\":{\\"compilationTarget\\":{\\"project:/contracts/SimpleStorage.sol\\":\\"SimpleStorage\\"},\\"evmVersion\\":\\"london\\",\\"libraries\\":{},\\"metadata\\":{\\"bytecodeHash\\":\\"ipfs\\"},\\"optimizer\\":{\\"enabled\\":false,\\"runs\\":200},\\"remappings\\":[]},\\"sources\\":{\\"project:/contracts/SimpleStorage.sol\\":{\\"keccak256\\":\\"0x0a8fec5d7aa660c5206d0b4f6f174a8fc2b1e0f73362a6b896b41de329ffe483\\",\\"license\\":\\"MIT\\",\\"urls\\":[\\"bzz-raw://1e1e9227ed2cf1910b5f79efbb6fc1cec48f31d6965d9362e4ffbd152c017fe1\\",\\"dweb:/ipfs/Qma7gemyp1VwN9RcvM7fhCVkhnDZ76EJpFUNM6kdhmpmy7\\"]}},\\"version\\":1}","bytecode":"0x608060405234801561001057600080fd5b50610187806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806360fe47b11461003b5780636d4ce63c14610057575b600080fd5b610055600480360381019061005091906100fa565b610075565b005b61005f6100b6565b60405161006c9190610136565b60405180910390f35b806000819055507f0de2d86113046b9e8bb6b785e96a6228f6803952bf53a40b68a36dce316218c1816040516100ab9190610136565b60405180910390a150565b60008054905090565b600080fd5b6000819050919050565b6100d7816100c4565b81146100e257600080fd5b50565b6000813590506100f4816100ce565b92915050565b6000602082840312156101105761010f6100bf565b5b600061011e848285016100e5565b91505092915050565b610130816100c4565b82525050565b600060208201905061014b6000830184610127565b9291505056fea2646970667358221220e23c6ea3f5646cc2881c639dd43b323bc154cde9f06a5d49eadef5fba2381e7f64736f6c63430008090033","deployedBytecode":"0x608060405234801561001057600080fd5b50600436106100365760003560e01c806360fe47b11461003b5780636d4ce63c14610057575b600080fd5b610055600480360381019061005091906100fa565b610075565b005b61005f6100b6565b60405161006c9190610136565b60405180910390f35b806000819055507f0de2d86113046b9e8bb6b785e96a6228f6803952bf53a40b68a36dce316218c1816040516100ab9190610136565b60405180910390a150565b60008054905090565b600080fd5b6000819050919050565b6100d7816100c4565b81146100e257600080fd5b50565b6000813590506100f4816100ce565b92915050565b6000602082840312156101105761010f6100bf565b5b600061011e848285016100e5565b91505092915050565b610130816100c4565b82525050565b600060208201905061014b6000830184610127565b9291505056fea2646970667358221220e23c6ea3f5646cc2881c639dd43b323bc154cde9f06a5d49eadef5fba2381e7f64736f6c63430008090033","immutableReferences":{},"generatedSources":[],"deployedGeneratedSources":[{"ast":{"nodeType":"YulBlock","src":"0:1374:2","statements":[{"body":{"nodeType":"YulBlock","src":"47:35:2","statements":[{"nodeType":"YulAssignment","src":"57:19:2","value":{"arguments":[{"kind":"number","nodeType":"YulLiteral","src":"73:2:2","type":"","value":"64"}],"functionName":{"name":"mload","nodeType":"YulIdentifier","src":"67:5:2"},"nodeType":"YulFunctionCall","src":"67:9:2"},"variableNames":[{"name":"memPtr","nodeType":"YulIdentifier","src":"57:6:2"}]}]},"name":"allocate_unbounded","nodeType":"YulFunctionDefinition","returnVariables":[{"name":"memPtr","nodeType":"YulTypedName","src":"40:6:2","type":""}],"src":"7:75:2"},{"body":{"nodeType":"YulBlock","src":"177:28:2","statements":[{"expression":{"arguments":[{"kind":"number","nodeType":"YulLiteral","src":"194:1:2","type":"","value":"0"},{"kind":"number","nodeType":"YulLiteral","src":"197:1:2","type":"","value":"0"}],"functionName":{"name":"revert","nodeType":"YulIdentifier","src":"187:6:2"},"nodeType":"YulFunctionCall","src":"187:12:2"},"nodeType":"YulExpressionStatement","src":"187:12:2"}]},"name":"revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b","nodeType":"YulFunctionDefinition","src":"88:117:2"},{"body":{"nodeType":"YulBlock","src":"300:28:2","statements":[{"expression":{"arguments":[{"kind":"number","nodeType":"YulLiteral","src":"317:1:2","type":"","value":"0"},{"kind":"number","nodeType":"YulLiteral","src":"320:1:2","type":"","value":"0"}],"functionName":{"name":"revert","nodeType":"YulIdentifier","src":"310:6:2"},"nodeType":"YulFunctionCall","src":"310:12:2"},"nodeType":"YulExpressionStatement","src":"310:12:2"}]},"name":"revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db","nodeType":"YulFunctionDefinition","src":"211:117:2"},{"body":{"nodeType":"YulBlock","src":"379:32:2","statements":[{"nodeType":"YulAssignment","src":"389:16:2","value":{"name":"value","nodeType":"YulIdentifier","src":"400:5:2"},"variableNames":[{"name":"cleaned","nodeType":"YulIdentifier","src":"389:7:2"}]}]},"name":"cleanup_t_uint256","nodeType":"YulFunctionDefinition","parameters":[{"name":"value","nodeType":"YulTypedName","src":"361:5:2","type":""}],"returnVariables":[{"name":"cleaned","nodeType":"YulTypedName","src":"371:7:2","type":""}],"src":"334:77:2"},{"body":{"nodeType":"YulBlock","src":"460:79:2","statements":[{"body":{"nodeType":"YulBlock","src":"517:16:2","statements":[{"expression":{"arguments":[{"kind":"number","nodeType":"YulLiteral","src":"526:1:2","type":"","value":"0"},{"kind":"number","nodeType":"YulLiteral","src":"529:1:2","type":"","value":"0"}],"functionName":{"name":"revert","nodeType":"YulIdentifier","src":"519:6:2"},"nodeType":"YulFunctionCall","src":"519:12:2"},"nodeType":"YulExpressionStatement","src":"519:12:2"}]},"condition":{"arguments":[{"arguments":[{"name":"value","nodeType":"YulIdentifier","src":"483:5:2"},{"arguments":[{"name":"value","nodeType":"YulIdentifier","src":"508:5:2"}],"functionName":{"name":"cleanup_t_uint256","nodeType":"YulIdentifier","src":"490:17:2"},"nodeType":"YulFunctionCall","src":"490:24:2"}],"functionName":{"name":"eq","nodeType":"YulIdentifier","src":"480:2:2"},"nodeType":"YulFunctionCall","src":"480:35:2"}],"functionName":{"name":"iszero","nodeType":"YulIdentifier","src":"473:6:2"},"nodeType":"YulFunctionCall","src":"473:43:2"},"nodeType":"YulIf","src":"470:63:2"}]},"name":"validator_revert_t_uint256","nodeType":"YulFunctionDefinition","parameters":[{"name":"value","nodeType":"YulTypedName","src":"453:5:2","type":""}],"src":"417:122:2"},{"body":{"nodeType":"YulBlock","src":"597:87:2","statements":[{"nodeType":"YulAssignment","src":"607:29:2","value":{"arguments":[{"name":"offset","nodeType":"YulIdentifier","src":"629:6:2"}],"functionName":{"name":"calldataload","nodeType":"YulIdentifier","src":"616:12:2"},"nodeType":"YulFunctionCall","src":"616:20:2"},"variableNames":[{"name":"value","nodeType":"YulIdentifier","src":"607:5:2"}]},{"expression":{"arguments":[{"name":"value","nodeType":"YulIdentifier","src":"672:5:2"}],"functionName":{"name":"validator_revert_t_uint256","nodeType":"YulIdentifier","src":"645:26:2"},"nodeType":"YulFunctionCall","src":"645:33:2"},"nodeType":"YulExpressionStatement","src":"645:33:2"}]},"name":"abi_decode_t_uint256","nodeType":"YulFunctionDefinition","parameters":[{"name":"offset","nodeType":"YulTypedName","src":"575:6:2","type":""},{"name":"end","nodeType":"YulTypedName","src":"583:3:2","type":""}],"returnVariables":[{"name":"value","nodeType":"YulTypedName","src":"591:5:2","type":""}],"src":"545:139:2"},{"body":{"nodeType":"YulBlock","src":"756:263:2","statements":[{"body":{"nodeType":"YulBlock","src":"802:83:2","statements":[{"expression":{"arguments":[],"functionName":{"name":"revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b","nodeType":"YulIdentifier","src":"804:77:2"},"nodeType":"YulFunctionCall","src":"804:79:2"},"nodeType":"YulExpressionStatement","src":"804:79:2"}]},"condition":{"arguments":[{"arguments":[{"name":"dataEnd","nodeType":"YulIdentifier","src":"777:7:2"},{"name":"headStart","nodeType":"YulIdentifier","src":"786:9:2"}],"functionName":{"name":"sub","nodeType":"YulIdentifier","src":"773:3:2"},"nodeType":"YulFunctionCall","src":"773:23:2"},{"kind":"number","nodeType":"YulLiteral","src":"798:2:2","type":"","value":"32"}],"functionName":{"name":"slt","nodeType":"YulIdentifier","src":"769:3:2"},"nodeType":"YulFunctionCall","src":"769:32:2"},"nodeType":"YulIf","src":"766:119:2"},{"nodeType":"YulBlock","src":"895:117:2","statements":[{"nodeType":"YulVariableDeclaration","src":"910:15:2","value":{"kind":"number","nodeType":"YulLiteral","src":"924:1:2","type":"","value":"0"},"variables":[{"name":"offset","nodeType":"YulTypedName","src":"914:6:2","type":""}]},{"nodeType":"YulAssignment","src":"939:63:2","value":{"arguments":[{"arguments":[{"name":"headStart","nodeType":"YulIdentifier","src":"974:9:2"},{"name":"offset","nodeType":"YulIdentifier","src":"985:6:2"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"970:3:2"},"nodeType":"YulFunctionCall","src":"970:22:2"},{"name":"dataEnd","nodeType":"YulIdentifier","src":"994:7:2"}],"functionName":{"name":"abi_decode_t_uint256","nodeType":"YulIdentifier","src":"949:20:2"},"nodeType":"YulFunctionCall","src":"949:53:2"},"variableNames":[{"name":"value0","nodeType":"YulIdentifier","src":"939:6:2"}]}]}]},"name":"abi_decode_tuple_t_uint256","nodeType":"YulFunctionDefinition","parameters":[{"name":"headStart","nodeType":"YulTypedName","src":"726:9:2","type":""},{"name":"dataEnd","nodeType":"YulTypedName","src":"737:7:2","type":""}],"returnVariables":[{"name":"value0","nodeType":"YulTypedName","src":"749:6:2","type":""}],"src":"690:329:2"},{"body":{"nodeType":"YulBlock","src":"1090:53:2","statements":[{"expression":{"arguments":[{"name":"pos","nodeType":"YulIdentifier","src":"1107:3:2"},{"arguments":[{"name":"value","nodeType":"YulIdentifier","src":"1130:5:2"}],"functionName":{"name":"cleanup_t_uint256","nodeType":"YulIdentifier","src":"1112:17:2"},"nodeType":"YulFunctionCall","src":"1112:24:2"}],"functionName":{"name":"mstore","nodeType":"YulIdentifier","src":"1100:6:2"},"nodeType":"YulFunctionCall","src":"1100:37:2"},"nodeType":"YulExpressionStatement","src":"1100:37:2"}]},"name":"abi_encode_t_uint256_to_t_uint256_fromStack","nodeType":"YulFunctionDefinition","parameters":[{"name":"value","nodeType":"YulTypedName","src":"1078:5:2","type":""},{"name":"pos","nodeType":"YulTypedName","src":"1085:3:2","type":""}],"src":"1025:118:2"},{"body":{"nodeType":"YulBlock","src":"1247:124:2","statements":[{"nodeType":"YulAssignment","src":"1257:26:2","value":{"arguments":[{"name":"headStart","nodeType":"YulIdentifier","src":"1269:9:2"},{"kind":"number","nodeType":"YulLiteral","src":"1280:2:2","type":"","value":"32"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"1265:3:2"},"nodeType":"YulFunctionCall","src":"1265:18:2"},"variableNames":[{"name":"tail","nodeType":"YulIdentifier","src":"1257:4:2"}]},{"expression":{"arguments":[{"name":"value0","nodeType":"YulIdentifier","src":"1337:6:2"},{"arguments":[{"name":"headStart","nodeType":"YulIdentifier","src":"1350:9:2"},{"kind":"number","nodeType":"YulLiteral","src":"1361:1:2","type":"","value":"0"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"1346:3:2"},"nodeType":"YulFunctionCall","src":"1346:17:2"}],"functionName":{"name":"abi_encode_t_uint256_to_t_uint256_fromStack","nodeType":"YulIdentifier","src":"1293:43:2"},"nodeType":"YulFunctionCall","src":"1293:71:2"},"nodeType":"YulExpressionStatement","src":"1293:71:2"}]},"name":"abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed","nodeType":"YulFunctionDefinition","parameters":[{"name":"headStart","nodeType":"YulTypedName","src":"1219:9:2","type":""},{"name":"value0","nodeType":"YulTypedName","src":"1231:6:2","type":""}],"returnVariables":[{"name":"tail","nodeType":"YulTypedName","src":"1242:4:2","type":""}],"src":"1149:222:2"}]},"contents":"{\\n\\n    function allocate_unbounded() -> memPtr {\\n        memPtr := mload(64)\\n    }\\n\\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\\n        revert(0, 0)\\n    }\\n\\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\\n        revert(0, 0)\\n    }\\n\\n    function cleanup_t_uint256(value) -> cleaned {\\n        cleaned := value\\n    }\\n\\n    function validator_revert_t_uint256(value) {\\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\\n    }\\n\\n    function abi_decode_t_uint256(offset, end) -> value {\\n        value := calldataload(offset)\\n        validator_revert_t_uint256(value)\\n    }\\n\\n    function abi_decode_tuple_t_uint256(headStart, dataEnd) -> value0 {\\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\\n\\n        {\\n\\n            let offset := 0\\n\\n            value0 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\\n        }\\n\\n    }\\n\\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\\n        mstore(pos, cleanup_t_uint256(value))\\n    }\\n\\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\\n        tail := add(headStart, 32)\\n\\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\\n\\n    }\\n\\n}\\n","id":2,"language":"Yul","name":"#utility.yul"}],"sourceMap":"57:230:1:-:0;;;;;;;;;;;;;;;;;;;","deployedSourceMap":"57:230:1:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;135:76;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;215:70;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;135:76;182:1;169:10;:14;;;;195:11;204:1;195:11;;;;;;:::i;:::-;;;;;;;;135:76;:::o;215:70::-;251:4;270:10;;263:17;;215:70;:::o;88:117:2:-;197:1;194;187:12;334:77;371:7;400:5;389:16;;334:77;;;:::o;417:122::-;490:24;508:5;490:24;:::i;:::-;483:5;480:35;470:63;;529:1;526;519:12;470:63;417:122;:::o;545:139::-;591:5;629:6;616:20;607:29;;645:33;672:5;645:33;:::i;:::-;545:139;;;;:::o;690:329::-;749:6;798:2;786:9;777:7;773:23;769:32;766:119;;;804:79;;:::i;:::-;766:119;924:1;949:53;994:7;985:6;974:9;970:22;949:53;:::i;:::-;939:63;;895:117;690:329;;;;:::o;1025:118::-;1112:24;1130:5;1112:24;:::i;:::-;1107:3;1100:37;1025:118;;:::o;1149:222::-;1242:4;1280:2;1269:9;1265:18;1257:26;;1293:71;1361:1;1350:9;1346:17;1337:6;1293:71;:::i;:::-;1149:222;;;;:::o","source":"// SPDX-License-Identifier: MIT\\npragma solidity ^0.8.9;\\n\\ncontract SimpleStorage {\\n  uint storedData;\\n\\n  event SetEvent(uint value);\\n\\n  function set(uint x) public {\\n    storedData = x;\\n\\n    emit SetEvent(x);\\n  }\\n\\n  function get() public view returns (uint) {\\n    return storedData;\\n  }\\n}\\n","sourcePath":"/home/aphal/alyra/testBox/contracts/SimpleStorage.sol","ast":{"absolutePath":"project:/contracts/SimpleStorage.sol","exportedSymbols":{"SimpleStorage":[67]},"id":68,"license":"MIT","nodeType":"SourceUnit","nodes":[{"id":38,"literals":["solidity","^","0.8",".9"],"nodeType":"PragmaDirective","src":"32:23:1"},{"abstract":false,"baseContracts":[],"canonicalName":"SimpleStorage","contractDependencies":[],"contractKind":"contract","fullyImplemented":true,"id":67,"linearizedBaseContracts":[67],"name":"SimpleStorage","nameLocation":"66:13:1","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":40,"mutability":"mutable","name":"storedData","nameLocation":"89:10:1","nodeType":"VariableDeclaration","scope":67,"src":"84:15:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":39,"name":"uint","nodeType":"ElementaryTypeName","src":"84:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"visibility":"internal"},{"anonymous":false,"id":44,"name":"SetEvent","nameLocation":"110:8:1","nodeType":"EventDefinition","parameters":{"id":43,"nodeType":"ParameterList","parameters":[{"constant":false,"id":42,"indexed":false,"mutability":"mutable","name":"value","nameLocation":"124:5:1","nodeType":"VariableDeclaration","scope":44,"src":"119:10:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":41,"name":"uint","nodeType":"ElementaryTypeName","src":"119:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"visibility":"internal"}],"src":"118:12:1"},"src":"104:27:1"},{"body":{"id":57,"nodeType":"Block","src":"163:48:1","statements":[{"expression":{"id":51,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"id":49,"name":"storedData","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":40,"src":"169:10:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"id":50,"name":"x","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":46,"src":"182:1:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"169:14:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":52,"nodeType":"ExpressionStatement","src":"169:14:1"},{"eventCall":{"arguments":[{"id":54,"name":"x","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":46,"src":"204:1:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":53,"name":"SetEvent","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":44,"src":"195:8:1","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_uint256_$returns$__$","typeString":"function (uint256)"}},"id":55,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"195:11:1","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":56,"nodeType":"EmitStatement","src":"190:16:1"}]},"functionSelector":"60fe47b1","id":58,"implemented":true,"kind":"function","modifiers":[],"name":"set","nameLocation":"144:3:1","nodeType":"FunctionDefinition","parameters":{"id":47,"nodeType":"ParameterList","parameters":[{"constant":false,"id":46,"mutability":"mutable","name":"x","nameLocation":"153:1:1","nodeType":"VariableDeclaration","scope":58,"src":"148:6:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":45,"name":"uint","nodeType":"ElementaryTypeName","src":"148:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"visibility":"internal"}],"src":"147:8:1"},"returnParameters":{"id":48,"nodeType":"ParameterList","parameters":[],"src":"163:0:1"},"scope":67,"src":"135:76:1","stateMutability":"nonpayable","virtual":false,"visibility":"public"},{"body":{"id":65,"nodeType":"Block","src":"257:28:1","statements":[{"expression":{"id":63,"name":"storedData","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":40,"src":"270:10:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":62,"id":64,"nodeType":"Return","src":"263:17:1"}]},"functionSelector":"6d4ce63c","id":66,"implemented":true,"kind":"function","modifiers":[],"name":"get","nameLocation":"224:3:1","nodeType":"FunctionDefinition","parameters":{"id":59,"nodeType":"ParameterList","parameters":[],"src":"227:2:1"},"returnParameters":{"id":62,"nodeType":"ParameterList","parameters":[{"constant":false,"id":61,"mutability":"mutable","name":"","nameLocation":"-1:-1:-1","nodeType":"VariableDeclaration","scope":66,"src":"251:4:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":60,"name":"uint","nodeType":"ElementaryTypeName","src":"251:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"visibility":"internal"}],"src":"250:6:1"},"scope":67,"src":"215:70:1","stateMutability":"view","virtual":false,"visibility":"public"}],"scope":68,"src":"57:230:1","usedErrors":[]}],"src":"32:256:1"},"legacyAST":{"absolutePath":"project:/contracts/SimpleStorage.sol","exportedSymbols":{"SimpleStorage":[67]},"id":68,"license":"MIT","nodeType":"SourceUnit","nodes":[{"id":38,"literals":["solidity","^","0.8",".9"],"nodeType":"PragmaDirective","src":"32:23:1"},{"abstract":false,"baseContracts":[],"canonicalName":"SimpleStorage","contractDependencies":[],"contractKind":"contract","fullyImplemented":true,"id":67,"linearizedBaseContracts":[67],"name":"SimpleStorage","nameLocation":"66:13:1","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":40,"mutability":"mutable","name":"storedData","nameLocation":"89:10:1","nodeType":"VariableDeclaration","scope":67,"src":"84:15:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":39,"name":"uint","nodeType":"ElementaryTypeName","src":"84:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"visibility":"internal"},{"anonymous":false,"id":44,"name":"SetEvent","nameLocation":"110:8:1","nodeType":"EventDefinition","parameters":{"id":43,"nodeType":"ParameterList","parameters":[{"constant":false,"id":42,"indexed":false,"mutability":"mutable","name":"value","nameLocation":"124:5:1","nodeType":"VariableDeclaration","scope":44,"src":"119:10:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":41,"name":"uint","nodeType":"ElementaryTypeName","src":"119:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"visibility":"internal"}],"src":"118:12:1"},"src":"104:27:1"},{"body":{"id":57,"nodeType":"Block","src":"163:48:1","statements":[{"expression":{"id":51,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"id":49,"name":"storedData","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":40,"src":"169:10:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"id":50,"name":"x","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":46,"src":"182:1:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"169:14:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":52,"nodeType":"ExpressionStatement","src":"169:14:1"},{"eventCall":{"arguments":[{"id":54,"name":"x","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":46,"src":"204:1:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":53,"name":"SetEvent","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":44,"src":"195:8:1","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_uint256_$returns$__$","typeString":"function (uint256)"}},"id":55,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"195:11:1","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":56,"nodeType":"EmitStatement","src":"190:16:1"}]},"functionSelector":"60fe47b1","id":58,"implemented":true,"kind":"function","modifiers":[],"name":"set","nameLocation":"144:3:1","nodeType":"FunctionDefinition","parameters":{"id":47,"nodeType":"ParameterList","parameters":[{"constant":false,"id":46,"mutability":"mutable","name":"x","nameLocation":"153:1:1","nodeType":"VariableDeclaration","scope":58,"src":"148:6:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":45,"name":"uint","nodeType":"ElementaryTypeName","src":"148:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"visibility":"internal"}],"src":"147:8:1"},"returnParameters":{"id":48,"nodeType":"ParameterList","parameters":[],"src":"163:0:1"},"scope":67,"src":"135:76:1","stateMutability":"nonpayable","virtual":false,"visibility":"public"},{"body":{"id":65,"nodeType":"Block","src":"257:28:1","statements":[{"expression":{"id":63,"name":"storedData","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":40,"src":"270:10:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":62,"id":64,"nodeType":"Return","src":"263:17:1"}]},"functionSelector":"6d4ce63c","id":66,"implemented":true,"kind":"function","modifiers":[],"name":"get","nameLocation":"224:3:1","nodeType":"FunctionDefinition","parameters":{"id":59,"nodeType":"ParameterList","parameters":[],"src":"227:2:1"},"returnParameters":{"id":62,"nodeType":"ParameterList","parameters":[{"constant":false,"id":61,"mutability":"mutable","name":"","nameLocation":"-1:-1:-1","nodeType":"VariableDeclaration","scope":66,"src":"251:4:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":60,"name":"uint","nodeType":"ElementaryTypeName","src":"251:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"visibility":"internal"}],"src":"250:6:1"},"scope":67,"src":"215:70:1","stateMutability":"view","virtual":false,"visibility":"public"}],"scope":68,"src":"57:230:1","usedErrors":[]}],"src":"32:256:1"},"compiler":{"name":"solc","version":"0.8.9+commit.e5eed63a.Emscripten.clang"},"networks":{"3":{"events":{},"links":{},"address":"0x535a2C108A11F90A3cCb839C0E9E6C8C2b793Da1","transactionHash":"0x623c6c0f8a337cfb6fd09bb6e30f216029f7c978997d14c1f1b7e7a6c862b2fa"},"1637744237827":{"events":{},"links":{},"address":"0x32b962897A04FA98D97F93F4B0C65657878313C2","transactionHash":"0xf42e8e1ea8b842f0003df4a090ec9e2189c5f6a5966d02a4fc70810bebb2bb65"},"1637746747988":{"events":{},"links":{},"address":"0x4544809299E8fe50dF5EDB74D8Ae6539C03959Cb","transactionHash":"0x382a25bfbd5c26a35bec16ff9c3ee915877c96ffb39ed40155ef3c65925d2e35"}},"schemaVersion":"3.4.3","updatedAt":"2021-11-29T09:12:33.667Z","networkType":"ethereum","devdoc":{"kind":"dev","methods":{},"version":1},"userdoc":{"kind":"user","methods":{},"version":1}}')},9:function(e,t,n){e.exports=n(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.f4ee2f33.chunk.js.map