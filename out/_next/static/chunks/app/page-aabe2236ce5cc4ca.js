(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{8505:(e,s,a)=>{Promise.resolve().then(a.bind(a,5734))},5734:(e,s,a)=>{"use strict";a.d(s,{default:()=>y});var l=a(5155),t=a(2115),r=a(3463),n=a(9795);function i(){for(var e=arguments.length,s=Array(e),a=0;a<e;a++)s[a]=arguments[a];return(0,n.QP)((0,r.$)(s))}let d=t.forwardRef((e,s)=>{let{className:a,type:t,...r}=e;return(0,l.jsx)("input",{type:t,className:i("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",a),ref:s,...r})});d.displayName="Input";var o=a(6195);let c=(0,a(1027).F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),u=t.forwardRef((e,s)=>{let{className:a,...t}=e;return(0,l.jsx)(o.b,{ref:s,className:i(c(),a),...t})});u.displayName=o.b.displayName;let m=t.forwardRef((e,s)=>{let{className:a,...t}=e;return(0,l.jsx)("div",{ref:s,className:i("rounded-xl border bg-card text-card-foreground shadow",a),...t})});m.displayName="Card";let x=t.forwardRef((e,s)=>{let{className:a,...t}=e;return(0,l.jsx)("div",{ref:s,className:i("flex flex-col space-y-1.5 p-6",a),...t})});x.displayName="CardHeader";let h=t.forwardRef((e,s)=>{let{className:a,...t}=e;return(0,l.jsx)("div",{ref:s,className:i("font-semibold leading-none tracking-tight",a),...t})});h.displayName="CardTitle",t.forwardRef((e,s)=>{let{className:a,...t}=e;return(0,l.jsx)("div",{ref:s,className:i("text-sm text-muted-foreground",a),...t})}).displayName="CardDescription";let p=t.forwardRef((e,s)=>{let{className:a,...t}=e;return(0,l.jsx)("div",{ref:s,className:i("p-6 pt-0",a),...t})});p.displayName="CardContent",t.forwardRef((e,s)=>{let{className:a,...t}=e;return(0,l.jsx)("div",{ref:s,className:i("flex items-center p-6 pt-0",a),...t})}).displayName="CardFooter";var f=a(2062);let j=f.bL,g=t.forwardRef((e,s)=>{let{className:a,...t}=e;return(0,l.jsx)(f.B8,{ref:s,className:i("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",a),...t})});g.displayName=f.B8.displayName;let N=t.forwardRef((e,s)=>{let{className:a,...t}=e;return(0,l.jsx)(f.l9,{ref:s,className:i("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",a),...t})});N.displayName=f.l9.displayName;let v=t.forwardRef((e,s)=>{let{className:a,...t}=e;return(0,l.jsx)(f.UC,{ref:s,className:i("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",a),...t})});v.displayName=f.UC.displayName;var b=a(1214);let w=t.forwardRef((e,s)=>{let{className:a,...t}=e;return(0,l.jsxs)(b.bL,{ref:s,className:i("relative flex w-full touch-none select-none items-center",a),...t,children:[(0,l.jsx)(b.CC,{className:"relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20",children:(0,l.jsx)(b.Q6,{className:"absolute h-full bg-primary"})}),(0,l.jsx)(b.zi,{className:"block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"})]})});w.displayName=b.bL.displayName;let y=()=>{var e,s,a,r;let[n,i]=(0,t.useState)(2e6),[o,c]=(0,t.useState)(70),[f,b]=(0,t.useState)(30),[y,S]=(0,t.useState)(12),[C,V]=(0,t.useState)(10),[L,R]=(0,t.useState)(10),[A,P]=(0,t.useState)(1e4),[I,W]=(0,t.useState)(0),k=e=>{c(e),b(100-e)},M=(0,t.useMemo)(()=>({sip:o/100*n,swp:f/100*n}),[n,o,f]),T=(0,t.useMemo)(()=>12*A,[A]),_=(0,t.useMemo)(()=>{let e=M.sip,s=[];for(let a=1;a<=L;a++)e*=1+y/100,s.push({year:a,startValue:M.sip,endValue:e,growth:e-M.sip});return s},[M.sip,y,L]),E=(0,t.useMemo)(()=>{let e=M.swp,s=[],a=0;for(let l=1;l<=L;l++){let t=A*Math.pow(1+I/100,l-1)*12,r=(e*=1+C/100)-t;if(a+=t,s.push({year:l,startValue:e,withdrawal:t,endValue:Math.max(r,0),growthRate:C,totalWithdrawn:a}),(e=Math.max(r,0))<=0)break}return s},[M.swp,C,L,A,I]),Y=(0,t.useMemo)(()=>{var e,s;return _[_.length-1].endValue+(null!==(s=null===(e=E[E.length-1])||void 0===e?void 0:e.endValue)&&void 0!==s?s:0)},[_,E]);return(0,l.jsx)("div",{className:"container mx-auto p-4 max-w-4xl",children:(0,l.jsxs)(m,{children:[(0,l.jsx)(x,{children:(0,l.jsx)(h,{children:"Advanced Corpus Allocation Calculator"})}),(0,l.jsxs)(p,{children:[(0,l.jsxs)("div",{className:"grid md:grid-cols-2 gap-4 mb-6",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)(u,{children:"Total Corpus (₹)"}),(0,l.jsx)(d,{type:"number",value:n,onChange:e=>i(Number(e.target.value)),className:"mt-2"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)(u,{children:"SIP Allocation (%)"}),(0,l.jsx)(w,{value:[o],onValueChange:e=>k(e[0]),max:100,step:1,className:"mt-4"}),(0,l.jsxs)("span",{className:"text-sm text-muted-foreground",children:["SIP: ",o,"% (₹",M.sip.toLocaleString(),") | SWP: ",f,"% (₹",M.swp.toLocaleString(),")"]})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)(u,{children:"SIP Annual Return (%)"}),(0,l.jsx)(w,{value:[y],onValueChange:e=>S(e[0]),max:20,step:.5,className:"mt-4"}),(0,l.jsxs)("span",{className:"text-sm text-muted-foreground",children:[y,"%"]})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)(u,{children:"SWP Annual Return (%)"}),(0,l.jsx)(w,{value:[C],onValueChange:e=>V(e[0]),max:20,step:.5,className:"mt-4"}),(0,l.jsxs)("span",{className:"text-sm text-muted-foreground",children:[C,"%"]})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)(u,{children:"Investment Duration (Years)"}),(0,l.jsx)(w,{value:[L],onValueChange:e=>R(e[0]),max:30,step:1,className:"mt-4"}),(0,l.jsxs)("span",{className:"text-sm text-muted-foreground",children:[L," years"]})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)(u,{children:"Monthly Withdrawal Amount (₹)"}),(0,l.jsx)(d,{type:"number",value:A,onChange:e=>P(Number(e.target.value)),className:"mt-2"}),(0,l.jsxs)("span",{className:"text-sm text-muted-foreground",children:["Initial Annual Withdrawal: ₹",T.toLocaleString()]})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)(u,{children:"Yearly Withdrawal Increase (%)"}),(0,l.jsx)(w,{value:[I],onValueChange:e=>W(e[0]),max:20,step:1,className:"mt-4"}),(0,l.jsxs)("span",{className:"text-sm text-muted-foreground",children:[I,"%"]})]})]}),(0,l.jsxs)(j,{defaultValue:"sip",children:[(0,l.jsxs)(g,{className:"grid w-full grid-cols-2",children:[(0,l.jsx)(N,{value:"sip",children:"SIP Analysis"}),(0,l.jsx)(N,{value:"swp",children:"SWP Analysis"})]}),(0,l.jsx)(v,{value:"sip",children:(0,l.jsx)("div",{className:"overflow-x-auto",children:(0,l.jsxs)("table",{className:"w-full",children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{className:"bg-muted",children:[(0,l.jsx)("th",{className:"p-2",children:"Year"}),(0,l.jsx)("th",{className:"p-2",children:"Start Value (₹)"}),(0,l.jsx)("th",{className:"p-2",children:"End Value (₹)"}),(0,l.jsx)("th",{className:"p-2",children:"Total Growth (₹)"})]})}),(0,l.jsx)("tbody",{children:_.map(e=>(0,l.jsxs)("tr",{className:"border-b",children:[(0,l.jsx)("td",{className:"p-2 text-center",children:e.year}),(0,l.jsx)("td",{className:"p-2 text-right",children:e.startValue.toLocaleString()}),(0,l.jsx)("td",{className:"p-2 text-right",children:e.endValue.toLocaleString()}),(0,l.jsx)("td",{className:"p-2 text-right",children:e.growth.toLocaleString()})]},e.year))})]})})}),(0,l.jsx)(v,{value:"swp",children:(0,l.jsx)("div",{className:"overflow-x-auto",children:(0,l.jsxs)("table",{className:"w-full",children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{className:"bg-muted",children:[(0,l.jsx)("th",{className:"p-2",children:"Year"}),(0,l.jsx)("th",{className:"p-2",children:"Start Value (₹)"}),(0,l.jsx)("th",{className:"p-2",children:"Withdrawal (₹)"}),(0,l.jsx)("th",{className:"p-2",children:"End Value (₹)"})]})}),(0,l.jsx)("tbody",{children:E.map(e=>(0,l.jsxs)("tr",{className:"border-b",children:[(0,l.jsx)("td",{className:"p-2 text-center",children:e.year}),(0,l.jsx)("td",{className:"p-2 text-right",children:e.startValue.toLocaleString()}),(0,l.jsx)("td",{className:"p-2 text-right",children:e.withdrawal.toLocaleString()}),(0,l.jsx)("td",{className:"p-2 text-right",children:e.endValue.toLocaleString()})]},e.year))})]})})})]}),(0,l.jsxs)("div",{className:"mt-6 bg-muted p-4 rounded",children:[(0,l.jsx)("h3",{className:"text-lg font-semibold mb-4",children:"Corpus Allocation Summary"}),(0,l.jsxs)("div",{className:"grid md:grid-cols-2 gap-4",children:[(0,l.jsxs)("div",{children:[(0,l.jsxs)("p",{children:["Total Initial Corpus: ₹",n.toLocaleString()]}),(0,l.jsxs)("p",{children:["SIP Allocation: ",o,"% (₹",M.sip.toLocaleString(),")"]}),(0,l.jsxs)("p",{children:["SIP Annual Return: ",y,"%"]}),(0,l.jsxs)("p",{children:["SIP Corpus Value after ",L," years: ₹",_[_.length-1].endValue.toLocaleString()]})]}),(0,l.jsxs)("div",{children:[(0,l.jsxs)("p",{children:["SWP Allocation: ",f,"% (₹",M.swp.toLocaleString(),")"]}),(0,l.jsxs)("p",{children:["SWP Annual Return: ",C,"%"]}),(0,l.jsxs)("p",{children:["Initial Monthly Withdrawal: ₹",A.toLocaleString()]}),(0,l.jsxs)("p",{children:["Yearly Withdrawal Increase: ",I,"%"]}),(0,l.jsxs)("p",{children:["SWP Corpus Value after ",L," years: ₹",(null!==(a=null===(e=E[E.length-1])||void 0===e?void 0:e.endValue)&&void 0!==a?a:0).toLocaleString()]}),(0,l.jsxs)("p",{children:["Total Amount Withdrawn: ₹",(null!==(r=null===(s=E[E.length-1])||void 0===s?void 0:s.totalWithdrawn)&&void 0!==r?r:0).toLocaleString()]})]})]}),(0,l.jsxs)("div",{className:"mt-4 border-t pt-4",children:[(0,l.jsx)("h4",{className:"text-md font-semibold mb-2",children:"Total Corpus Overview"}),(0,l.jsxs)("p",{children:["Total Corpus Value after ",L," years:"," ",(0,l.jsxs)("strong",{children:["₹",Y.toLocaleString()]})]}),(0,l.jsxs)("p",{children:["Net Change: ₹",(Y-n).toLocaleString(),"(",((Y/n-1)*100).toFixed(2),"%)"]})]})]})]})]})})}}},e=>{var s=s=>e(e.s=s);e.O(0,[187,441,517,358],()=>s(8505)),_N_E=e.O()}]);