"use strict";(self.webpackChunktweetie=self.webpackChunktweetie||[]).push([[601],{437:function(e,n,l){l.r(n),l.d(n,{default:function(){return p}});var s=l(439),t=l(791),i=l(928),a=l.p+"static/media/rmklogo.6c67923dd04b977c9ed8.png",r=l(87),c=l(806),d=l(632),o=l(184),x=[{title:"Home",link:"/",logo:(0,o.jsx)(c.G,{icon:d.wp6})},{title:"Explore",link:"/explore",logo:(0,o.jsx)(c.G,{icon:d.wp6})},{title:"Login",link:"/login",logo:(0,o.jsx)(c.G,{icon:d.wp6})},{title:"Register",link:"/register",logo:(0,o.jsx)(c.G,{icon:d.wp6})}];function u(e){var n=e.isOpen,l=e.handleOpen;return(0,o.jsxs)(i.E.div,{className:"sidebar flex flex-col bg-new-black text-new-white dark:bg-new-white dark:text-new-black",initial:{width:"5vw",opacity:0},animate:{opacity:1,width:n?"20vw":"5vw"},transition:{duration:.25},children:[(0,o.jsx)("div",{children:(0,o.jsx)(r.rU,{to:"/",title:"Tweetie Logo",className:"mx-auto my-2 inline-flex h-full max-h-12 w-fit cursor-pointer justify-center xl:max-h-12",children:(0,o.jsx)("img",{src:a,alt:"Logo",loading:"lazy",className:"object-contain rounded-full"})})}),(0,o.jsxs)("ul",{className:"menu bg-new-black w-full",children:[x.map((function(e){return(0,o.jsx)("li",{children:(0,o.jsxs)(r.OL,{to:e.link,className:"btn flex self-start w-full items-center justify-center rounded-lg px-2 py-1 hover:bg-dark/10 dark:hover:bg-light/10",children:[(0,o.jsx)("div",{className:"h-6 w-6",children:e.logo}),n&&(0,o.jsx)("div",{className:"grow text-left",children:e.title})]})})})),(0,o.jsx)("li",{children:(0,o.jsx)("button",{className:"bg-dark dark:bg-light text-light dark:text-dark rounded p-2 ml-5",onClick:function(){l(!n)},children:"Open"})})]})]})}var h=l(689),w=l(3);function m(){var e=(0,t.useContext)(w.V),n=(e.user,e.setUser);return(0,o.jsxs)("div",{className:"navbar bg-base-100 bg-new-black text-new-white dark:bg-new-white dark:text-new-black",children:[(0,o.jsx)("div",{className:"flex-1"}),(0,o.jsxs)("div",{className:"flex-none gap-2",children:[(0,o.jsx)("div",{className:"form-control",children:(0,o.jsx)("input",{type:"text",placeholder:"Search",className:"input input-bordered"})}),(0,o.jsxs)("div",{className:"dropdown dropdown-end",children:[(0,o.jsx)("label",{tabIndex:0,className:"btn btn-ghost btn-circle avatar",children:(0,o.jsx)("div",{className:"w-10 rounded-full",children:(0,o.jsx)("img",{src:a,alt:""})})}),(0,o.jsxs)("ul",{tabIndex:0,className:"mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 bg-new-black text-new-white",children:[(0,o.jsx)("li",{children:(0,o.jsxs)("a",{className:"justify-between",children:["Profile",(0,o.jsx)("span",{className:"badge",children:"New"})]})}),(0,o.jsx)("li",{children:(0,o.jsx)("a",{children:"Settings"})}),(0,o.jsx)("li",{children:(0,o.jsx)("a",{onClick:function(){n(null)},children:"Logout"})})]})]})]})]})}function j(e){var n=e.isOpen,l=e.setOpen,s=(0,t.useContext)(w.V),i=s.user;s.setUser;return(0,o.jsxs)("main",{className:"flex flex-col grow overflow-auto",children:[i&&(0,o.jsx)(m,{}),(0,o.jsx)("div",{className:"w-full h-full rounded-3xl",children:(0,o.jsx)(h.j3,{context:{isOpen:n,setOpen:l}})})]})}function p(){var e=(0,t.useState)(!1),n=(0,s.Z)(e,2),l=n[0],a=n[1],r=(0,t.useContext)(w.V).user;return(0,o.jsx)("div",{className:"App",children:(0,o.jsxs)(i.E.div,{className:"relative flex flex-row min-h-screen max-h-screen min-w-screen max-w-screen overflow-hidden",children:[r&&(0,o.jsx)(u,{isOpen:l,handleOpen:a}),(0,o.jsx)(j,{isOpen:l,setOpen:a})]})})}}}]);
//# sourceMappingURL=CoreLayout.9de21701.chunk.js.map