import{a as g}from"./index.3ad527d9.js";import{d as b,bA as x,k as r,t as y,v as w,r as o,o as n,c as l,a as u,G as C,F as _,J as p,D as a,i as k}from"./vendor.3402be6b.js";var D=b({name:"Personal",components:{CameraOutline:x},setup(){const s=r(!1),E=r(!1),A=()=>{s.value=!0},c=()=>{E.value=!0,setTimeout(()=>{s.value=!1,E.value=!1},1e3)},i=g();return{touched:s,uploaded:E,messages:[{title:"\u3010\u603B\u7ECF\u7406\u901A\u77E5\u3011",content:"\u660E\u5929\u3010\u4E0B\u5348\u3011\u6709\u3010\u4E0D\u62D8\u4E00\u683C\u3011\u8BFE\u7A0B\u76F4\u64AD\uFF0C\u516C\u53F8\u5C1D\u8BD5\u5168\u65B0\u76F4\u64AD\u6A21\u5F0F\uFF0C\u5176\u4E2D\u4F1A\u76F4\u64AD\u5404\u4E2A\u90E8\u95E8\u5458\u5DE5\u7684\u5DE5\u4F5C\u5E38\u6001\uFF0C\u9700\u8981\u5168\u4F53\u5BB6\u4EBA\u7684\u914D\u5408\u4E0E\u652F\u6301\u3002\u5177\u4F53\u8981\u6C42\u5982\u4E0B\uFF1A1.\u3001\u529E\u516C\u684C\u4E0A\u53EA\u5141\u8BB8\u653E\uFF1A\u7535\u8111\u3001\u6C34\u676F\u3001\u7B14\u8BB0\u672C\u3001\u7B14\u3001\u7535\u8BDD2.\u3001\u5EA7\u6905\u540E\u80CC\u4E0D\u5141\u8BB8\u6302\u8863\u670D\uFF0C\u5168\u90E8\u653E\u5230\u53A8\u5B50\u91CC3\u3001\u76F4\u64AD\u671F\u95F4\uFF0C\u5168\u5458\u4E0A\u8EAB\u7740\u5DE5\u88C5\u5916\u59574\u3001\u76F4\u64AD\u671F\u95F4\u8BF7\u52FF\u968F\u610F\u8D70\u52A8\uFF0C\u6587\u660E\u7528\u8BED\uFF0C\u82E5\u8FDB\u5165\u76F4\u64AD\u955C\u5934\u8BF7\u5FAE\u7B11\u793A\u610F\u8BFE\u7A0B\u76F4\u64AD\u4E0D\u4EC5\u662F\u4ECB\u7ECD\u8BFE\u7A0B\uFF0C\u66F4\u91CD\u8981\u7684\u662F\u5411\u5BA2\u6237\u5C55\u793A\u4F18\u884C\u6559\u80B2\uFF01[\u563F\u54C8][\u563F\u54C8][\u563F\u54C8]",status:0},{title:"\u91CD\u8981\u901A\u77E5\uFF1A\u4ECA\u5929\u8981\u52A0\u73ED\uFF0C\u4E00\u5806bug\u7B49\u7740\u4FEE\u6539\uFF0C\u8BF7\u5168\u4F53\u5BB6\u4EBA\u4EEC\u6CE8\u610F",content:"\u4E3A\u4E86\u914D\u5408\u5E02\u573A\u5BB6\u4EBA\u4EEC\u52AA\u529B\u5F00\u5355\uFF0C\u4ECE\u4ECA\u5929\u5F00\u59CB\uFF0C\u6280\u672F\u90E8\u53CA\u6559\u7814\u8001\u5E08\u4EEC\u8981\u52AA\u529B\u52A0\u73ED\uFF0C\u5168\u529B\u914D\u5408\u5E02\u573A\u7684\u5BB6\u4EBA\u4EEC\u591A\u591A\u5F00\u5355\u3002\u8C22\u8C22\u5927\u5BB6\u7684\u652F\u6301\u4E0E\u914D\u5408\u3002",status:0},{title:"\u91CD\u8981\u901A\u77E5\uFF1A\u4ECA\u5929\u8981\u52A0\u73ED\uFF0C\u4E00\u5806bug\u7B49\u7740\u4FEE\u6539\uFF0C\u8BF7\u5168\u4F53\u5BB6\u4EBA\u4EEC\u6CE8\u610F",content:"\u4E3A\u4E86\u914D\u5408\u5E02\u573A\u5BB6\u4EBA\u4EEC\u52AA\u529B\u5F00\u5355\uFF0C\u4ECE\u4ECA\u5929\u5F00\u59CB\uFF0C\u6280\u672F\u90E8\u53CA\u6559\u7814\u8001\u5E08\u4EEC\u8981\u52AA\u529B\u52A0\u73ED\uFF0C\u5168\u529B\u914D\u5408\u5E02\u573A\u7684\u5BB6\u4EBA\u4EEC\u591A\u591A\u5F00\u5355\u3002\u8C22\u8C22\u5927\u5BB6\u7684\u652F\u6301\u4E0E\u914D\u5408\u3002",status:1},{title:"\u91CD\u8981\u901A\u77E5\uFF1A\u4ECA\u5929\u8981\u52A0\u73ED\uFF0C\u4E00\u5806bug\u7B49\u7740\u4FEE\u6539\uFF0C\u8BF7\u5168\u4F53\u5BB6\u4EBA\u4EEC\u6CE8\u610F",content:"\u4E3A\u4E86\u914D\u5408\u5E02\u573A\u5BB6\u4EBA\u4EEC\u52AA\u529B\u5F00\u5355\uFF0C\u4ECE\u4ECA\u5929\u5F00\u59CB\uFF0C\u6280\u672F\u90E8\u53CA\u6559\u7814\u8001\u5E08\u4EEC\u8981\u52AA\u529B\u52A0\u73ED\uFF0C\u5168\u529B\u914D\u5408\u5E02\u573A\u7684\u5BB6\u4EBA\u4EEC\u591A\u591A\u5F00\u5355\u3002\u8C22\u8C22\u5927\u5BB6\u7684\u652F\u6301\u4E0E\u914D\u5408\u3002",status:1},{title:"\u91CD\u8981\u901A\u77E5\uFF1A\u4ECA\u5929\u8981\u52A0\u73ED\uFF0C\u4E00\u5806bug\u7B49\u7740\u4FEE\u6539\uFF0C\u8BF7\u5168\u4F53\u5BB6\u4EBA\u4EEC\u6CE8\u610F",content:"\u4E3A\u4E86\u914D\u5408\u5E02\u573A\u5BB6\u4EBA\u4EEC\u52AA\u529B\u5F00\u5355\uFF0C\u4ECE\u4ECA\u5929\u5F00\u59CB\uFF0C\u6280\u672F\u90E8\u53CA\u6559\u7814\u8001\u5E08\u4EEC\u8981\u52AA\u529B\u52A0\u73ED\uFF0C\u5168\u529B\u914D\u5408\u5E02\u573A\u7684\u5BB6\u4EBA\u4EEC\u591A\u591A\u5F00\u5355\u3002\u8C22\u8C22\u5927\u5BB6\u7684\u652F\u6301\u4E0E\u914D\u5408\u3002",status:1}],watingJobs:[{title:"\u548C\u670B\u53CB\u540C\u4E8B\u4E00\u8D77\u73A9\u738B\u8005\uFF0C\u5403\u9E21",status:0},{title:"\u4E0B\u73ED\u5199\u4ECA\u65E5\u603B\u7ED3",status:1},{title:"\u4E2D\u5348\u6253\u5361\uFF0C\u5403\u996D\uFF0C\u4E0B\u53BB\u4E70\u4E00\u74F6\u5FEB\u4E50\u6C34",status:0},{title:"\u7ED9\u9879\u76EE\u7ECF\u7406\u6F14\u793A\u9879\u76EE\u6210\u679C\uFF0C\u6C47\u62A5\u9879\u76EE\u8FDB\u5EA6\uFF0C\u67E5\u770B\u540C\u4E8B\u65B0\u63D0\u4EA4\u7684bug",status:1},{title:"\u4E0A\u73ED\u6253\u5361",status:0},{title:"\u548C\u670B\u53CB\u540C\u4E8B\u4E00\u8D77\u73A9\u738B\u8005\uFF0C\u5403\u9E21",status:0},{title:"\u4E0B\u73ED\u5199\u4ECA\u65E5\u603B\u7ED3",status:1},{title:"\u4E2D\u5348\u6253\u5361\uFF0C\u5403\u996D\uFF0C\u4E0B\u53BB\u4E70\u4E00\u74F6\u5FEB\u4E50\u6C34",status:0},{title:"\u7ED9\u9879\u76EE\u7ECF\u7406\u6F14\u793A\u9879\u76EE\u6210\u679C\uFF0C\u6C47\u62A5\u9879\u76EE\u8FDB\u5EA6\uFF0C\u67E5\u770B\u540C\u4E8B\u65B0\u63D0\u4EA4\u7684bug",status:1},{title:"\u4E0A\u73ED\u6253\u5361",status:0}],avatar:i.state.user.avatar,nickName:i.state.user.nickName,avatarTouchStart:A,uploadAvatar:c}}});const t=k();y("data-v-31933aa2");const z={class:"main-container"},S={class:"box-wrapper"},I={class:"flex"},N={class:"info-wrapper"},T={class:"avatar-wrapper"},$={class:"text-xl"},j=u("div",{class:"des-wrapper"},[u("i",{class:"el-icon-edit"}),a(" \u51B0\u51BB\u4E09\u5C3A\uFF0C\u975E\u4E00\u65E5\u4E4B\u5BD2\uFF0C\u6210\u5927\u4E8B\u8005\u4E0D\u62D8\u5C0F\u8282\u3002 ")],-1),J=u("div",{class:"text-wrapper"},[u("div",{class:"label"}," \u6635\u79F0\uFF1A "),u("div",{class:"value"}," \u8774\u8776\u98DE\u5440\u98DE ")],-1),O=u("div",{class:"text-wrapper"},[u("div",{class:"label"}," \u6027\u522B\uFF1A "),u("div",{class:"value"}," \u7537 ")],-1),P=u("div",{class:"text-wrapper"},[u("div",{class:"label"}," \u751F\u65E5\uFF1A "),u("div",{class:"value"}," 2021-1-1 ")],-1),V=u("div",{class:"text-wrapper"},[u("div",{class:"label"}," \u90E8\u95E8\uFF1A "),u("div",{class:"value"}," \u7814\u53D1\u90E8 ")],-1),G={class:"mt-4"},L=a("\u6280\u672F\u63A7"),M=a("\u7231\u5B66\u4E60"),U=a("\u5927\u5634\u5DF4"),q=a("\u5B85\u7537"),H=a("\u561A\u561A\u6CA1\u5B8C"),K=a("UP\u4E3B"),Q=a("\u624B\u673A\u63A7"),R=u("span",{class:"text-sm"},"\u5F85\u529E\u4E8B\u9879",-1),W={class:"flex-1"},X={style:{width:"40px"}},Y={class:"mt-2"},Z=a(" \u67E5\u770B\u66F4\u591A "),uu={class:"flex-1 ml-2"},tu={class:"message-title"},su={class:"content"};w();const eu=t((s,E,A,c,i,au)=>{const v=o("CameraOutline"),f=o("n-icon"),F=o("n-tag"),m=o("n-space"),B=o("n-card"),h=o("n-button");return n(),l("div",z,[u("div",S,[u("div",I,[u(B,{class:"box-card personal-box","content-style":{padding:"10px"}},{default:t(()=>[u("div",N,[u("div",T,[u("div",{class:["avatar",{"avatar-touch":s.touched,"avatar-end":s.uploaded}],onMouseenter:E[1]||(E[1]=(...e)=>s.avatarTouchStart&&s.avatarTouchStart(...e))},[u("img",{src:s.avatar},null,8,["src"])],34),u("div",{class:"flex items-center justify-center camera-layer",onClick:E[2]||(E[2]=(...e)=>s.uploadAvatar&&s.uploadAvatar(...e))},[u(f,{size:"40",color:"#ffffff"},{default:t(()=>[u(v)]),_:1})])]),u("div",$,C(s.nickName),1),j,J,O,P,V,u("div",G,[u(m,null,{default:t(()=>[u(F,{type:"info",size:"small"},{default:t(()=>[L]),_:1}),u(F,{type:"info",size:"small"},{default:t(()=>[M]),_:1}),u(F,{type:"info",size:"small"},{default:t(()=>[U]),_:1}),u(F,{type:"info",size:"small"},{default:t(()=>[q]),_:1}),u(F,{type:"info",size:"small"},{default:t(()=>[H]),_:1}),u(F,{type:"info",size:"small"},{default:t(()=>[K]),_:1}),u(F,{type:"info",size:"small"},{default:t(()=>[Q]),_:1})]),_:1})])])]),_:1}),u(B,{class:"flex-1 ml-2 box-card wating-box","content-style":{padding:"10px"},"header-style":{padding:"10px"}},{header:t(()=>[R]),default:t(()=>[(n(!0),l(_,null,p(s.watingJobs,(e,d)=>(n(),l("div",{key:d,class:"flex wating-item"},[u("div",W,C(e.title),1),u("div",X,[u(F,{type:e.status===0?"error":"success",size:"mini"},{default:t(()=>[a(C(e.status===0?"\u672A\u5B8C\u6210":"\u5DF2\u5B8C\u6210"),1)]),_:2},1032,["type"])])]))),128))]),_:1})]),u("div",Y,[u(B,{title:"\u6D88\u606F\u4E2D\u5FC3",class:"box-card flex-sub","header-style":{padding:"10px"},"content-style":{padding:"10px"}},{"header-extra":t(()=>[u(h,{type:"text"},{default:t(()=>[Z]),_:1})]),default:t(()=>[(n(!0),l(_,null,p(s.messages,(e,d)=>(n(),l("div",{key:d,class:"flex items-center message-wrapper"},[u("div",{class:["notify",{"bg-red-500":e.status===0,"bg-green-500":e.status===1}]},null,2),u("div",uu,[u("div",tu,C(e.title),1),u("div",su,C(e.content),1)])]))),128))]),_:1})])])])});D.render=eu;D.__scopeId="data-v-31933aa2";export{D as default};