import{r,c as m,o as c,a as u,b as p,d as e,t as x}from"./index-2d3d2b14.js";const b={class:"mx-auto container my-5 px-9 py-5 justify-center"},v={class:"max-w-lg mx-auto rounded overflow-hidden shadow-sm px-3 py-5 my-16 bg-white"},f=["value"],y={class:"flex justify-center my-16"},w={__name:"HomeView",setup(g){const o=r(!1),a=r(""),l=m(()=>o.value?"已複製":"複製"),d=()=>(Math.random()**2*5e3**2).toString(16),n=()=>{a.value=d()},i=async()=>{if(!navigator.clipboard){alert("您的瀏覽器不支援複製功能，請手動複製");return}try{await navigator.clipboard.writeText(a.value),o.value=!0,setTimeout(()=>{o.value=!1},3e3)}catch(s){console.error(s),alert("複製失敗，請手動複製")}};return c(()=>{n()}),(s,t)=>(u(),p("div",b,[e("div",v,[t[0]||(t[0]=e("h2",{class:"font-semibold text-slate-900 text-lg"}," 隨機密碼 ",-1)),t[1]||(t[1]=e("p",{class:"font-normal text-slate-900 text-sm"}," 這是一個隨機密碼產生器，點擊下方按鈕即可產生一組隨機密碼。 ",-1)),e("input",{class:"w-full my-5 rounded-full bg-slate-100 px-2 py-1 text-md font-semibold text-slate-700",type:"text",readonly:"",value:a.value},null,8,f)]),e("div",y,[e("button",{class:"flex mx-3 items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-violet-100 bg-violet-700 hover:bg-violet-600 md:py-4 md:text-lg md:px-10",onClick:n}," 生成 "),e("button",{class:"flex mx-3 items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-violet-700 bg-violet-100 hover:bg-violet-200 md:py-4 md:text-lg md:px-10",onClick:i},x(l.value),1)])]))}};export{w as default};