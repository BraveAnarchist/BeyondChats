(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1546,5897],{48047:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tv-shows/[title]/[seasonId]",function(){return t(6631)}])},6631:function(e,a,t){"use strict";t.r(a);var s=t(52322),r=t(81586),i=t(89670),o=t(50702),l=t(5849),n=t(44442),u=t(59534),d=t(88252);function c(e){let{seoData:a={},pageSchema:t=[],blocks:i,asPath:o,isAssetDetailTrayPresent:l}=e;return l||r.Z.resetChipProperty(),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(u.Z,{seoData:a}),t.map(((e,a)=>{let{schema:t,attributes:r}=e;return(0,s.jsx)(d.Z,{attributes:r,schema:t},a)})),i.map(((e,a)=>(0,s.jsx)(n.Z,{...e},"".concat(o,"-").concat(a))))]})}c.getInitialProps=async e=>{const{query:a,asPath:t,res:s}=e;i.ak.setCurrentPage("ShowPage",a.seasonId);return{...await(0,o.Z)(e,(e=>(0,l.Z)({mediaId:a.seasonId,path:t,res:s,...e}))),asPath:t}},a.default=c},88252:function(e,a,t){"use strict";t.d(a,{Z:function(){return o}});var s=t(52322),r=t(97729),i=t.n(r);var o=e=>{let{attributes:a={},schema:t={}}=e;return(0,s.jsx)(i(),{children:(0,s.jsx)("script",{type:"application/ld+json",...a,dangerouslySetInnerHTML:{__html:JSON.stringify(t)}})})}},50702:function(e,a,t){"use strict";var s=t(99350),r=t(6565),i=t(17799),o=t(37149),l=t(67315),n=t(34022),u=t(57932),d=t(69980),c=t(8030),g=t(23416);const p=async e=>{const{parser:a,slug:t=null,query:s=null,callback:r=(()=>{}),isUserLoggedIn:i=!1}=e,o=(0,g.nb)(),{layoutConfig:l={},data:n={}}=await(0,c._)((()=>a({isCSR:!0}).catch((()=>({}))))).then((e=>({...e}))).catch((()=>({data:{blocks:[o]}}))),{seoData:u={},pageSchema:d=[],shimmerConfig:p={},hotstarId:h,mediaId:y,mediaType:f,fullTitle:m,isPlayerNotAvailable:v,isAssetDetailTrayPresent:I}=n||{};r();const b=(0,g.b5)();return b.props.slug=t,b.props.query=s,b.props.shimmerConfig={...p},{layoutConfig:l,seoData:u,pageSchema:d,blocks:[b],isUserLoggedIn:i,hotstarId:h,mediaId:y,mediaType:f,fullTitle:m,isPlayerNotAvailable:v,isAssetDetailTrayPresent:I}};a.Z=async function(e,a){let t,h=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const{req:y,res:f,query:m}=e,{isCSR:v=!1}=h,I=(0,o.Do)(i.Z.LOGGED_IN,{req:y}),b=n.Z.getConfig(),P=(0,g.nb)();if(!(0,s.qe)()){const e=(0,s.qB)(l.jU,y);s.ZP.setValue(e||!1)}if(!l.jU&&I)return p({parser:a,slug:null===y||void 0===y?void 0:y.url,query:m,isUserLoggedIn:I});if(l.jU&&u.Q.getObject(d.default.LOGIN_REFRESH)&&I)return p({parser:a,callback:()=>u.Q.removeItem(d.default.LOGIN_REFRESH),isUserLoggedIn:I});t=l.jU&&(null===b||void 0===b?void 0:b.cards)?()=>a({layoutConfig:b}).then((e=>({layoutConfig:b,data:e}))).catch((()=>({layoutConfig:b,data:{blocks:[P]}}))):()=>(0,c._)(a).then((e=>({...e}))).catch((()=>({data:{blocks:[P]}})));const{layoutConfig:C={},data:T={}}=await t();r.iZ.getErrorDetails()&&(P.props={...P.props,errorDetails:r.iZ.getErrorDetails()});const{seoData:D={},pageSchema:_=[],blocks:N=[],shimmerConfig:k={},subNavId:j,hotstarId:A,mediaId:Z,mediaType:S,fullTitle:U,isPlayerNotAvailable:E,isAssetDetailTrayPresent:L}=T||{};if(!l.jU&&v){const e=(0,g.b5)();return e.props.slug=null===y||void 0===y?void 0:y.url,e.props.query=m,e.props.shimmerConfig={...k},{layoutConfig:C,seoData:D,pageSchema:_,blocks:[e],subNavId:j,isUserLoggedIn:I,hotstarId:A,mediaId:Z,mediaType:S,fullTitle:U,isPlayerNotAvailable:E,isAssetDetailTrayPresent:L}}return!(null===N||void 0===N?void 0:N.length)||(null===N||void 0===N?void 0:N.every((e=>Array.isArray(e)&&!(null===e||void 0===e?void 0:e.length))))?(!l.jU&&f&&(f.statusCode=404),{layoutConfig:C,seoData:D,pageSchema:_,blocks:[P],isUserLoggedIn:I,hotstarId:A,mediaId:Z,mediaType:S,fullTitle:U,isPlayerNotAvailable:E,isAssetDetailTrayPresent:L}):(l.jU||(null===D||void 0===D?void 0:D.title)||!f||(f.statusCode=404),s.ZP.clear(),r.iZ.resetLogs(),{layoutConfig:C,seoData:D,pageSchema:_,blocks:N,subNavId:j,isUserLoggedIn:I,hotstarId:A,mediaId:Z,mediaType:S,fullTitle:U,isPlayerNotAvailable:E,isAssetDetailTrayPresent:L})}}},function(e){e.O(0,[7354,4075,9141,2231,1813,4442,2888,9774,179],(function(){return a=48047,e(e.s=a);var a}));var a=e.O();_N_E=a}]);