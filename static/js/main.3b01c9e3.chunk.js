(this.webpackJsonpidea=this.webpackJsonpidea||[]).push([[0],{63:function(e,t,a){},74:function(e,t,a){},79:function(e,t,a){},88:function(e,t,a){},91:function(e,t,a){},93:function(e,t,a){"use strict";a.r(t);var s=a(1),i=a.n(s),o=a(37),r=a.n(o),n=(a(74),a(18)),c=a(17),l=a(4),d=a(0),m=a.n(d),u=a(61),b=(a(76),a(94),u.a.initializeApp({apiKey:"AIzaSyB_gMWiFcC7BJYKfz49LW6RVc7WCrYSW0M",authDomain:"ideas-4c887.firebaseapp.com",projectId:"ideas-4c887",storageBucket:"ideas-4c887.appspot.com",messagingSenderId:"93980800242",appId:"1:93980800242:web:6b7aa64176cb5cab55cc6b",measurementId:"G-4YL43TM4Z3"})),j=b.auth(),p=b.firestore(),h=new u.a.auth.GoogleAuthProvider,g=function(){var e=Object(l.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.signInWithPopup(h);case 3:if(t=e.sent,null==(a=t.user)){e.next=12;break}return e.next=8,p.collection("users").where("uid","==",a.uid).get();case 8:if(0!==e.sent.docs.length){e.next=12;break}return e.next=12,p.collection("users").add({uid:a.uid,name:a.displayName,authProvider:"google",email:a.email});case 12:e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),console.error(e.t0),alert(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}(),f=function(){j.signOut()},x=a(53),O=(a(79),a(7));function v(){var e=Object(x.a)(j),t=Object(n.a)(e,2),a=t[0],i=t[1],o=Object(c.f)();return Object(s.useEffect)((function(){i||a&&o("/")}),[a,i,o]),Object(O.jsx)("section",{id:"entry-page",children:Object(O.jsxs)("div",{className:"login_panel",children:[Object(O.jsx)("div",{className:"login_logoImage responsive",children:Object(O.jsx)("img",{alt:"logo",src:"logo.svg"})}),Object(O.jsxs)("div",{className:"google-btn",onClick:g,children:[Object(O.jsx)("div",{className:"google-icon-wrapper",children:Object(O.jsx)("img",{alt:"google-sign-in",className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"})}),Object(O.jsx)("p",{className:"btn-text",children:Object(O.jsx)("b",{children:"Sign in with google"})})]})]})})}var y=a(30),N=a(101),w=a(102),k=a(67),I=a(100);function L(e){return Object(O.jsx)("div",{className:"profile-header",children:Object(O.jsx)("div",{className:"profile-content",children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("div",{className:"col-md-2",children:Object(O.jsx)("img",{alt:"logo",className:"project-logo",src:e.logoUrl})}),Object(O.jsx)("div",{className:"col-md-10 profile-header-text",children:Object(O.jsxs)("div",{className:"font-face-gm",children:[Object(O.jsxs)("p",{className:"profile-header-name",children:[" ",e.ideaName," "]}),Object(O.jsx)("p",{className:"profile-header-caption",children:e.subtitle}),Object(O.jsxs)("p",{className:"profile-header-date-created",children:["Date Created: ",e.created_at]})]})})]})})})}function _(){return Object(O.jsx)("div",{className:"profile-nav",children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("div",{className:"col-md-2"}),Object(O.jsx)("div",{className:"col-md-8",children:Object(O.jsxs)("div",{className:"row profile-nav-bar",children:[Object(O.jsx)("div",{className:"col-md-3 profile-nav-bar-item",children:Object(O.jsx)(y.b,{to:"",style:{textDecoration:"none"},children:Object(O.jsx)("p",{children:"ABOUT"})})}),Object(O.jsx)("div",{className:"col-md-3 profile-nav-bar-item",children:Object(O.jsx)(y.b,{to:"resources",style:{textDecoration:"none"},children:Object(O.jsx)("p",{children:"RESOURCES"})})}),Object(O.jsx)("div",{className:"col-md-3 profile-nav-bar-item",children:Object(O.jsx)(y.b,{to:"timeline",style:{textDecoration:"none"},children:Object(O.jsx)("p",{children:"TIMELINE"})})}),Object(O.jsx)("div",{className:"col-md-3 profile-nav-bar-item",children:Object(O.jsx)(y.b,{to:"collaborators",style:{textDecoration:"none"},children:Object(O.jsx)("p",{children:"COLLABORATORS"})})})]})}),Object(O.jsx)("div",{className:"col-md-2"})]})})}function C(){return Object(O.jsx)("div",{className:"profile-body",children:Object(O.jsxs)("div",{className:"profile-body-content",children:["hello",Object(O.jsx)("br",{}),"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."]})})}function S(){return Object(O.jsx)("div",{className:"profile-body",children:Object(O.jsx)("div",{className:"profile-body-content",children:"Yo'"})})}var T=a(64);function D(e){return Object(O.jsx)("div",{className:"profile-footer",children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("div",{className:"col-md-4",children:Object(O.jsx)("div",{className:"profile-owner",children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("div",{className:"col-md-3",children:Object(O.jsx)("div",{className:"align-items-center",children:Object(O.jsx)("img",{className:"owner-logo ",src:e.imageUrl,alt:"Avatar"})})}),Object(O.jsx)("div",{className:"col-md-9 profile-owner-name",children:Object(O.jsx)("span",{className:"justify-content-center align-self-center",children:e.orgName})})]})})}),Object(O.jsx)("div",{className:"col-md-8",children:Object(O.jsx)("div",{className:"social align-items-center",children:e.socials.map((function(e,t){return Object(O.jsx)(T.SocialIcon,{url:e},t)}))})})]})})}a(88);var R=a(2),B=a(3),E=[{id:"0",name:"Fourthpull",image_url:"https://firebasestorage.googleapis.com/v0/b/ideas-4c887.appspot.com/o/4P%20Logo.png?alt=media&token=af4a7b1a-fbc4-4bf1-a0eb-7d3094166a15",subtitle:"Clothing brand",description:"Retro local streetwear from Cape Town"},{id:"1",name:"Vervet",image_url:"https://firebasestorage.googleapis.com/v0/b/ideas-4c887.appspot.com/o/icon-vervet.png?alt=media&token=47ef7b2c-ace6-490a-bdbf-f74558bb6f40",subtitle:"Security through unity",description:"Remotely notify family and peers (Troop) by a click of a button when in an emergency situation"},{id:"2",name:"Kaapse Dictionary",image_url:"https://firebasestorage.googleapis.com/v0/b/ideas-4c887.appspot.com/o/logo%20(1).svg?alt=media&token=1082e04b-3bdf-47f8-8ded-8ea71f31875f",subtitle:"Cape Town Dictionary",description:"Kaapse dictionary is a registry of slang used in Cape Town (South Africa). It exists purely just because."},{id:"3",name:"Dums",image_url:"https://firebasestorage.googleapis.com/v0/b/ideas-4c887.appspot.com/o/LOGO.svg?alt=media&token=c255621b-f9a3-417d-b48a-3f9d0427a59d",subtitle:"Dominoes",description:"Dominoes game made in unity played in a Cape Townian style"}],A=new Map([["1",{name:"Vervet",subtitle:"Security through unity",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",country:"ZA",created_at:"12 Septemeber 2020",logo_url:"https://firebasestorage.googleapis.com/v0/b/ideas-4c887.appspot.com/o/icon-vervet.png?alt=media&token=47ef7b2c-ace6-490a-bdbf-f74558bb6f40",organization:{name:"NiFa",logo:"https://firebasestorage.googleapis.com/v0/b/ideas-4c887.appspot.com/o/intel.png?alt=media&token=1cda783a-4e83-4ebb-92f4-3cc248552aeb",url:"profile_url"},socials:["https://github.com/jaketrent","https://twitter.com/jaketrent"],resources:[{name:"Jira Board",logo:"logo_url",url:"resource_url"},{name:"Github Repository",logo:"logo_url",url:"resource_url"}],events:[{type:"RESOURCE_ADDED",note:"Resource Added",date:"12 September 2020",user:{name:"Bob",image:"image_url",url:"url_to_profile"},item:{logo:"logo_url",url:"resource_url"}},{type:"PROJECT_CREATED",note:"Project Created",date:"12 September 2020",user:{name:"Bob",image:"image_url",url:"url_to_profile"},item:{logo:"",url:""}}],collaborators:[{name:"Bob",image:"image_url",url:"url_to_profile"},{name:"Mandy",image:"image_url",url:"url_to_profile"}]}]]),M=function(){function e(){Object(R.a)(this,e)}return Object(B.a)(e,[{key:"getResultData",value:function(){return E}},{key:"getProjectData",value:function(e){return A.get(e)}}]),e}();var P=function(){var e=new M,t=Object(c.g)().id,a=e.getProjectData(t);return Object(O.jsxs)("div",{className:"container-fluid profile ",children:[Object(O.jsx)(L,{ideaName:a.name,subtitle:a.subtitle,created_at:a.created_at,logoUrl:a.logo_url}),Object(O.jsx)(_,{}),Object(O.jsxs)(c.c,{children:[Object(O.jsx)(c.a,{path:"/",element:Object(O.jsx)(C,{})}),Object(O.jsx)(c.a,{path:"resources",element:Object(O.jsx)("h1",{children:"test"})}),Object(O.jsx)(c.a,{path:"timeline",element:Object(O.jsx)(C,{})}),Object(O.jsx)(c.a,{path:"collaborators",element:Object(O.jsx)(S,{})})]}),Object(O.jsx)(D,{orgName:a.organization.name,imageUrl:a.organization.logo,socials:a.socials})]})},F=(a(63),a(99)),U=a(65),G=a(103);var z=function(e){var t="/profile/"+e.id;return Object(O.jsx)(y.b,{to:t,style:{textDecoration:"none"},children:Object(O.jsx)("div",{className:"results",children:Object(O.jsx)(U.a,{className:"result",children:Object(O.jsxs)(G.a,{className:"result-card",children:[Object(O.jsx)(G.a.Img,{className:"result-img",variant:"top",src:e.imageUrl}),Object(O.jsxs)(G.a.Body,{children:[Object(O.jsx)(G.a.Title,{children:e.name}),Object(O.jsx)(G.a.Subtitle,{className:"mb-2 text-muted",children:e.subtitle}),Object(O.jsx)(G.a.Text,{children:e.description})]})]})})})})};var J=function(){var e=(new M).getResultData();return Object(O.jsx)("div",{className:"results",children:Object(O.jsx)(F.a,{xs:1,md:4,children:e.map((function(e,t){return Object(O.jsx)(z,{id:e.id,name:e.name,subtitle:e.subtitle,description:e.description,imageUrl:e.image_url},t)}))})})};var V=function(){var e=Object(x.a)(j),t=Object(n.a)(e,2),a=t[0],i=t[1],o=Object(s.useState)(""),r=Object(n.a)(o,2),l=r[0],d=r[1],m=Object(c.f)();return Object(s.useEffect)((function(){if(!i)return a?void d(a.displayName):m("/login")}),[a,i,m]),i?Object(O.jsx)("div",{}):Object(O.jsxs)("div",{className:"dashboard",children:[Object(O.jsxs)(N.a,{bg:"light",expand:"lg",children:[Object(O.jsx)(y.b,{to:"/",style:{textDecoration:"none"},children:Object(O.jsx)(N.a.Brand,{children:Object(O.jsx)("img",{className:"homeLogo",alt:"logo",src:"favicon.ico"})})}),Object(O.jsx)(w.a,{className:"d-flex",children:Object(O.jsx)(k.a,{type:"search",placeholder:"Search",className:"mr-2","aria-label":"Search"})}),Object(O.jsxs)(N.a.Collapse,{className:"justify-content-end",children:[Object(O.jsx)(N.a.Text,{children:"Signed in as:"}),Object(O.jsx)(I.a,{title:l,id:"navbarScrollingDropdown",children:Object(O.jsx)(I.a.Item,{href:"#action3",children:Object(O.jsx)(N.a.Text,{onClick:f,children:"Logout"})})})]})]}),Object(O.jsxs)(c.c,{children:[Object(O.jsx)(c.a,{path:"/profile/:id/*",element:Object(O.jsx)(P,{})}),Object(O.jsx)(c.a,{path:"/",element:Object(O.jsx)(J,{})})]})]})};a(91),a(92);var W=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(y.a,{children:Object(O.jsxs)(c.c,{children:[Object(O.jsx)(c.a,{exact:!0,path:"/*",element:Object(O.jsx)(V,{})}),Object(O.jsx)(c.a,{exact:!0,path:"/login",element:Object(O.jsx)(v,{})})]})})})},K=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,104)).then((function(t){var a=t.getCLS,s=t.getFID,i=t.getFCP,o=t.getLCP,r=t.getTTFB;a(e),s(e),i(e),o(e),r(e)}))};r.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(W,{})}),document.getElementById("root")),K()}},[[93,1,2]]]);
//# sourceMappingURL=main.3b01c9e3.chunk.js.map