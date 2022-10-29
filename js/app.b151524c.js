(function(){"use strict";var e={9566:function(e,t,r){var s=r(144),a=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("v-app",{staticStyle:{backgroundColor:"#faf6ff","font-size":"1.5rem"}},[t("transition",{attrs:{name:"fade",mode:"out-in"}},[e.isHome?e._e():t("ProgressBar",{staticClass:"mx-4",staticStyle:{align:"center"},attrs:{steps:e.data.steps,"active-step":e.step,highestStep:e.highestStep,isReactive:!1,showBridge:!0,showLabel:!1},on:{onStepChanged:e.onStepChanged}})],1),t("transition",{attrs:{name:e.anim,mode:"out-in"}},[t("keep-alive",[t("router-view",{staticClass:"mx-4 mb-4",on:{complete:e.unlockStep}})],1)],1)],1)},o=[],i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"progress__wrapper",style:e.styleData["progress__wrapper"]},e._l(e.steps,(function(r,s){return t("div",{key:"step_"+r,staticClass:"progress__block",style:e.styleData["progress__block"]},[t("div",{staticClass:"progress__bubble",class:{clickable:e.isReactive&&e.checkIfStepIsReactive(s)},style:{...e.styleData["progress__bubble"],...e.getColors("progress__bubble",s)},on:{click:function(t){return e.callPageChange(s)}}},[e._v(" "+e._s(s+1)+" ")]),(e.showBridge||e.showBridgeOnSmallDevices)&&s!=e.steps.length-1?t("div",{staticClass:"pointer",class:{"hide-on-large":!e.showBridge,"display-on-small":e.showBridgeOnSmallDevices},style:{...e.styleData["progress__bridge"],...e.getColors("progress__bridge",s)}}):e._e()])})),0)},n=[],l={name:"ProgressBar",props:{steps:{type:Array,required:!0},activeStep:{type:Number,required:!0},highestStep:{type:Number,required:!0},isReactive:{type:Boolean,required:!1,default:!1},reactivityType:{type:String,required:!1,default:"all",validator:e=>{const t=["all","backward","forward","single-step"];return t.includes(e)}},showLabel:{type:Boolean,required:!1,default:!0},showBridge:{type:Boolean,required:!1,default:!1},showBridgeOnSmallDevices:{type:Boolean,required:!1,default:!0},colors:{type:Object,required:!1,default:function(){return{}}},styles:{type:Object,required:!1,default:function(){return{}}}},data(){return{currentStep:this.activeStep,styleData:{progress__wrapper:{display:"flex",justifyContent:"space-around",alignItems:"center",margin:"1rem 0"},progress__block:{display:"flex",alignItems:"center"},progress__bridge:{backgroundColor:"grey",borderRadius:"99px",height:"3vmin",flexGrow:"1",margin:"1vmin"},progress__bubble:{margin:"0",padding:"0",lineHeight:"30px",display:"flex",justifyContent:"center",alignItems:"center",height:"10vmin",width:"10vmin",borderRadius:"100%",backgroundColor:"transparent",border:"2px grey solid",fontSize:"5vmin",textAlign:"center"},progress__label:{margin:"0 0.8rem"}},colorData:{progress__bubble:{active:{color:"#fff",backgroundColor:"#e74c3c",borderColor:"#e74c3c"},inactive:{color:"#fff",backgroundColor:"#34495e",borderColor:"#34495e"},completed:{color:"#fff",borderColor:"#27ae60",backgroundColor:"#27ae60"}},progress__label:{active:{color:"#e74c3c"},inactive:{color:"#34495e"},completed:{color:"#27ae60"}},progress__bridge:{active:{backgroundColor:"#27ae60"},inactive:{backgroundColor:"#34495e"},completed:{backgroundColor:"#27ae60"}}}}},methods:{callPageChange:function(e){this.isReactive&&this.checkIfStepIsReactive(e)&&(this.currentStep=e,this.$emit("onStepChanged",e))},isActive:function(e){return e===this.currentStep},checkIfStepIsReactive:function(e){return e<=this.highestStep},getColors:function(e,t){let r={};return"progress__bridge"==e&&++t,t==this.currentStep?(r["color"]=this.colorData[e]["active"]["color"],r["backgroundColor"]=this.colorData[e]["active"]["backgroundColor"],r["borderColor"]=this.colorData[e]["active"]["borderColor"]):t<=this.highestStep?(r["color"]=this.colorData[e]["completed"]["color"],r["backgroundColor"]=this.inactiveColor?this.inactiveColor:this.colorData[e]["completed"]["backgroundColor"],r["borderColor"]=this.colorData[e]["completed"]["borderColor"]):(r["color"]=this.colorData[e]["inactive"]["color"],r["backgroundColor"]=this.colorData[e]["inactive"]["backgroundColor"],r["borderColor"]=this.colorData[e]["inactive"]["borderColor"]),r},overwriteStyle:function(e,t){for(const r in e)if(Object.hasOwnProperty.call(e,r)){const s=e[r];for(const e in s)Object.hasOwnProperty.call(s,e)&&(t[r][e]=s[e])}return t}},watch:{activeStep:function(e){this.activeStep<this.steps.length&&(this.currentStep=e)}},mounted(){this.styleData=this.overwriteStyle(this.styles,this.styleData),this.colorData=this.overwriteStyle(this.colors,this.colorData)}},c=l,d=r(1001),u=(0,d.Z)(c,i,n,!1,null,"21da82f1",null),p=u.exports;const h=(0,s.qj)({gender:0,age:0,edu:0,steps:[],scores:{},words:["apple","penny","table"],tests:[{name:"Verbal Test",steps:["CVFT","Results"]},{name:"Drawing Test",steps:["CDT","Results"]},{name:"MiniCog Test",steps:["Memory","CDT","Recall","Results"]},{name:"All Tests",steps:["Memory","CDT","Recall","CVFT","Results"]}]});var m=s.ZP.extend({name:"App",components:{ProgressBar:p},data:()=>({step:-1,data:h,highestStep:-1,anim:"fade",isHome:!0}),created(){"Homepage"!=this.$route.name&&this.$router.push("/")},watch:{$route(e){var t=this.data.steps.indexOf(e.name);t<this.step?this.anim="slider-left":this.anim="slider-right",setTimeout((()=>this.isHome="Homepage"==e.name),"Homepage"==e.name?0:350),this.step=t,history.pushState(null,"",location.href),window.onpopstate=function(){history.go(1)}}},methods:{onStepChanged(e){this.$router.push("/"+this.data.steps[e])},unlockStep(){this.step=Math.min(this.step+1,this.data.steps.length-1),this.highestStep=this.step>=0?Math.max(this.highestStep,this.step):-1,this.onStepChanged(this.step)}}}),v=m,g=r(3453),f=r.n(g),_=r(998),y=(0,d.Z)(v,a,o,!1,null,null,null),b=y.exports;f()(y,{VApp:_.Z});var C=r(8345),w=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"CDT"},[t("transition",{attrs:{name:"fade",mode:"out-in"}},[e.ready?t("v-container",{key:"CDT"},[t("h1",[e._v("Drawing Test")]),t("div",{staticClass:"my-1",staticStyle:{"font-size":"1rem"}},[e._v(" Draw and Upload an analog clock. "),t("br"),e._v(" The clock should show 10 past 11. "),t("br"),e._v(" Give yourself 3 minutes to draw. "),t("br")]),t("center",[t("ImageChooser",{staticStyle:{height:"50vmin",width:"50vmin"},attrs:{name:"image-chooser",displayName:"Upload Clock Image",error:e.error,progress:e.progress,baseSrc:e.image},on:{change:e.uploadFile}})],1)],1):t("v-container",{key:"Prep"},[t("h1",[e._v("Requirements")]),e._v(" For this test, you will require: "),t("li",[e._v("Blank White Paper")]),t("li",[e._v("Your device's camera")]),t("v-btn",{staticClass:"primary",staticStyle:{"margin-top":"3vmin"},on:{click:()=>e.ready=!0}},[e._v("Ready!")])],1)],1)],1)},S=[],x=function(){var e=this,t=e._self._c;return t("div",{staticClass:"image-uploader",style:e.style},[t("label",{attrs:{for:e.name}},[e.src||e.baseSrc?e._e():t("svg",{attrs:{viewBox:"0 0 99 80",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[t("title",[e._v("icon_camera")]),t("desc",[e._v("Created with Sketch.")]),t("defs"),t("g",{attrs:{id:"tours",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[t("g",{attrs:{id:"MY_TOURS-create_a_tour",transform:"translate(-218.000000, -767.000000)",fill:"#aaaaaa","fill-rule":"nonzero"}},[t("g",{attrs:{id:"Group-12",transform:"translate(67.000000, 698.000000)"}},[t("path",{attrs:{id:"icon_camera",d:"M151,93.4807644 L151,136.970832 C151,143.609002 156.390998,149 163.029168,149 L237.537591,149 C244.175761,149 249.566759,143.609002 249.566759,136.970832 L249.566759,93.4807644 C249.566759,87.1644456 244.437264,82.034951 238.120945,82.034951 L222.108876,82.034951 L221.726678,80.3653508 C220.177772,73.6668343 214.283882,69 207.404325,69 L193.142318,69 C186.282877,69 180.388987,73.6668343 178.819965,80.3653508 L178.437767,82.034951 L162.445813,82.034951 C156.129495,82.034951 151,87.1845612 151,93.4807644 Z M180.409102,86.9632889 C181.555695,86.9632889 182.541363,86.178778 182.802866,85.0523007 L183.627609,81.4717123 C184.673623,77.0261504 188.576062,73.9283379 193.142318,73.9283379 L207.404325,73.9283379 C211.970581,73.9283379 215.87302,77.0261504 216.919034,81.4717123 L217.743777,85.0523007 C218.00528,86.1586623 218.990948,86.9632889 220.137541,86.9632889 L238.10083,86.9632889 C241.701534,86.9632889 244.618305,89.8800603 244.618305,93.4807644 L244.618305,136.970832 C244.618305,140.893387 241.44003,144.071662 237.517475,144.071662 L163.029168,144.071662 C159.106613,144.071662 155.928338,140.893387 155.928338,136.970832 L155.928338,93.4807644 C155.928338,89.8800603 158.845109,86.9632889 162.445813,86.9632889 L180.409102,86.9632889 Z M167.675886,100.782751 C169.497857,100.782751 170.974855,99.3057521 170.974855,97.4837817 C170.974855,95.6618114 169.497857,94.1848127 167.675886,94.1848127 C165.853916,94.1848127 164.376917,95.6618114 164.376917,97.4837817 C164.376917,99.3057521 165.853916,100.782751 167.675886,100.782751 Z M200.283379,136.347247 C211.688962,136.347247 220.982399,127.053809 220.982399,115.648227 C220.982399,104.242645 211.688962,94.9492079 200.283379,94.9492079 C188.877797,94.9492079 179.58436,104.22253 179.58436,115.648227 C179.58436,127.073925 188.877797,136.347247 200.283379,136.347247 Z M200.283379,99.8775459 C208.973347,99.8775459 216.054061,106.95826 216.054061,115.648227 C216.054061,124.338195 208.973347,131.418909 200.283379,131.418909 C191.593412,131.418909 184.512698,124.338195 184.512698,115.648227 C184.512698,106.95826 191.593412,99.8775459 200.283379,99.8775459 Z"}})])])])]),e.src?e._e():t("p",[e._v(e._s(e.displayName))]),e.uploading?t("div",{staticClass:"progress-overlay"},[t("span",[e._v(e._s(e.progress)+" %")])]):e.src?t("div",{staticClass:"overlay"},[e._v("Change Photo")]):e._e()]),t("input",{ref:"inputFile",staticStyle:{display:"none"},attrs:{id:e.name,name:e.name,type:"file",accept:"image/*"},on:{change:e.displayFile}}),e.error?t("ul",{staticClass:"errors"},e._l(e.normalizedErrors,(function(r){return t("li",{key:r},[e._v(e._s(r))])})),0):e._e()])},k=[],D={name:"ImageChooser",props:{name:{required:!0,type:String},baseSrc:{type:String,default:""},height:{type:String,default:"350px"},displayName:{type:String,default:"Add Photo"},error:{default:null,validator:function(e){return null===e||Array.isArray(e)||"string"===typeof e}},progress:{type:Number,default:null}},data(){return{src:null}},computed:{normalizedErrors(){return"string"===typeof this.error?[this.error]:this.error instanceof Array?[...this.error]:[]},uploading(){return null!==this.progress&&100!==this.progress},style(){let e={height:this.height};return(this.src||this.baseSrc)&&(e.backgroundImage=`url(${this.src||this.baseSrc})`,e.backgroundSize="cover"),this.error&&(e.border="1px solid red"),e}},methods:{displayFile(e){if(e.target.files&&e.target.files[0]){var t=new FileReader;t.onload=t=>{this.src=t.target.result;const r={file:e.target.files[0],field:this.name};this.$emit("change",r)},t.readAsDataURL(e.target.files[0])}}}},Z=D,P=(0,d.Z)(Z,x,k,!1,null,"3ba54874",null),R=P.exports,T=r(9669),A=r.n(T),V=s.ZP.extend({components:{ImageChooser:R},data:()=>({ready:!1,progress:null,error:null,image:null}),methods:{uploadFile(e){if("image"==e.file.type.substring(0,5)){this.error=null,this.progress=0;var t=setInterval((()=>{this.progress>=100?(this.progress,clearInterval(t)):this.progress+=1}),10),r=new FormData;r.append("filename",e.file.name),h.scores["Drawing Test"]=-1,A().post("https://pearson.pythonanywhere.com/predict2",r).then((e=>{h.scores={...h.scores,"Drawing Test":100*e.data.response},clearInterval(t)}),(e=>console.log(e))),this.$emit("complete")}else this.error="File is not an image"}}}),I=V,O=r(6570),B=r(2150),M=(0,d.Z)(I,w,S,!1,null,"6833c1de",null),F=M.exports;f()(M,{VBtn:O.Z,VContainer:B.Z});var $=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"Memory"},[t("v-container",[t("h1",[e._v("Memory")]),e.seen?e._e():t("div",[e._v(" Memorise the words below "),e._l(e.data.words,(function(r){return t("li",{key:r},[e._v(" "+e._s(r)+" ")])})),t("v-btn",{staticClass:"primary",staticStyle:{"margin-top":"3vmin"},on:{click:function(t){e.seen=!0,e.$emit("complete")}}},[e._v("Done!")])],2)])],1)},z=[],Y=s.ZP.extend({data:()=>({data:h,seen:!1})}),L=Y,j=(0,d.Z)(L,$,z,!1,null,null,null),q=j.exports;f()(j,{VBtn:O.Z,VContainer:B.Z});var E=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"Recall"},[t("v-container",{staticClass:"my-5",attrs:{"fill-height":""}},[t("v-row",[t("h1",[e._v("Recall Test")])]),t("v-row",[t("div",[e._v("What were those 3 words just now?")])]),e._l(e.recalled,(function(r,s){return t("v-row",{key:r},[t("v-col",{attrs:{cols:"10"}},[t("v-text-field",{key:s,model:{value:r.value,callback:function(t){e.$set(r,"value",t)},expression:"word.value"}})],1)],1)})),t("v-btn",{staticClass:"primary",staticStyle:{"margin-top":"3vmin"},on:{click:e.click}},[e._v("Submit")])],2)],1)},H=[],N=s.ZP.extend({data:()=>({data:h,recalled:[{value:""}]}),mounted(){for(var{}of(this.recalled=[],this.data.words))this.recalled.push({value:""})},methods:{click(){var e=new Set;for(var t of this.recalled)e.add(this.data.words.indexOf(t.value.toLowerCase()));this.data.scores["Recall Test"]=e.size-(e.has(-1)?1:0),this.data.scores["Recall Test"]=100*this.data.scores["Recall Test"]/this.data.words.length,this.$emit("complete","CVFT")}}}),G=N,U=r(266),W=r(1713),J=r(4068),Q=(0,d.Z)(G,E,H,!1,null,null,null),X=Q.exports;f()(Q,{VBtn:O.Z,VCol:U.Z,VContainer:B.Z,VRow:W.Z,VTextField:J.Z});var K=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"CDT"},[t("transition",{attrs:{name:"fade",mode:"out-in"}},[e.ready?t("v-container",{key:"CDT"},[t("h1",[e._v("Verbal Test")]),t("div",{staticClass:"my-1",staticStyle:{"font-size":"1rem"}},[e._v(" Say as many unique animal names as possible. "),t("br"),e._v(" You only have "),t("b",[e._v("1")]),e._v(" minute and "),t("b",[e._v("1")]),e._v(" attempt. "),t("br"),e._v(" Press the button to begin! "),t("br")]),t("center",[t("AudioRecorder",{on:{result:e.upload}})],1)],1):t("v-container",{key:"Prep"},[t("h1",[e._v("Requirements")]),e._v(" For this test, you will require: "),t("li",[e._v("A Microphone")]),t("v-btn",{staticClass:"primary",staticStyle:{"margin-top":"3vmin"},on:{click:()=>e.ready=!0}},[e._v("Ready!")])],1)],1)],1)},ee=[],te=function(){var e=this,t=e._self._c;return t("button",{staticClass:"AudioRecorder",attrs:{disabled:null!=e.recordingEndedAt},on:{click:e.click}},[e.isRecording?t("v-btn",{staticClass:"red",attrs:{"x-large":"",color:"white",dark:"",rounded:""}},[e._v(" "+e._s(e.time_remaining)+"s ")]):t("v-btn",{staticClass:"red",attrs:{disabled:null!=e.recordingEndedAt,"x-large":"",fab:""}},[t("v-icon",{attrs:{color:"white","x-large":""}},[e._v("mdi-microphone")])],1)],1)},re=[],se=r(2696);const ae={sampleRate:44100,bufferSize:16384};var oe={data:()=>({isRecording:!1,time_remaining:60,recordingStartedAt:null,recordingEndedAt:null,recorder:null,audioContext:null,strema:null,recorderOptions:ae}),async mounted(){await this.initiatePlayer().catch((e=>{throw console.error("Audio Recorder Error"),this.$emit("error",error),error}))},methods:{updater:null,async initiatePlayer(){this.audioContext=new(window.AudioContext||window.webkitAudioContext),this.isInitiated=!0,this.$emit("initiated")},async click(){if(this.isRecording){this.recordingEndedAt=performance.now();const e=this.stream.getTracks();e.forEach((e=>{e.stop()}));const{blob:t}=await this.recorder.stop();this.$emit("result",{blob:t,duration:this.recordingEndedAt-this.recordingStartedAt,type:t.type}),clearInterval(this.updater),this.isRecording=!1}else this.stream=await navigator.mediaDevices.getUserMedia({audio:!0}),this.recorder=new se["default"](this.audioContext,this.recorderOptions),this.recorder.init(this.stream),await this.recorder.start(),this.recordingStartedAt=performance.now(),this.time_remaining=60,this.isRecording=!0,this.updater=setInterval((()=>{this.time_remaining=6e4-performance.now()+this.recordingStartedAt,this.time_remaining=Math.ceil(this.time_remaining/1e3),this.time_remaining>0||this.click()}),500);console.log(this.isRecording)}}},ie=oe,ne=r(4324),le=(0,d.Z)(ie,te,re,!1,null,null,null),ce=le.exports;f()(le,{VBtn:O.Z,VIcon:ne.Z});var de=s.ZP.extend({components:{AudioRecorder:ce},data:()=>({ready:!1}),methods:{upload(e){var t=new FormData;t.append("gender",h.gender),t.append("age",h.age),t.append("education",h.edu),t.append("audio",e.blob,"audio"),h.scores["Verbal Test"]=-1,A().post("https://pearson.pythonanywhere.com/predict",t).then((e=>h.scores={...h.scores,"Verbal Test":100*e.data.response}),(e=>console.log(e))),this.$emit("complete")}}}),ue=de,pe=(0,d.Z)(ue,K,ee,!1,null,"6434cbfe",null),he=pe.exports;f()(pe,{VBtn:O.Z,VContainer:B.Z});var me=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"Results"},[t("v-container",[t("v-row",{attrs:{justify:"center"}},e._l(e.data.scores,(function(r,s){return t("vue-ellipse-progress",{key:s,staticClass:"mx-auto my-5",attrs:{animation:"default 2000 0",emptyColor:"#fcfff7",size:250,thickness:15,emptyThickness:"10%",fontSize:"5rem",color:e.rgbToHex(2.55*(100-r),2.55*r,0),progress:Math.round(r),loading:-1==r}},[[t("span",{attrs:{slot:"legend-value"},slot:"legend-value"},[e._v("%")]),t("span",{attrs:{slot:"legend-caption"},slot:"legend-caption"},[e._v(e._s(s))])]],2)})),1),t("center",{staticClass:"text-h4 my-10"},[e._v(" Find out more about Dementia and Alzheimer's "),t("a",{attrs:{href:"https://www.dementiahub.sg/"}},[e._v("here")])]),e.loaded?t("div",[t("center",{staticClass:"text-h3"},[e._v("You passed "+e._s(e.passed)+" of "+e._s(e.tests.length)+" tests")]),t("center",{staticClass:"text-h4 my-1 mb-5"},[e._v(e._s(e.message))]),t("center",[e.passed<e.tests.length?t("div",{staticStyle:{display:"inline-block",border:"min(1vmin, 5px) solid black",padding:"2px"}},[t("center",{staticClass:"text-h6"},[e._v("Consider calling these hotlines")]),t("div",{staticClass:"ma-1",staticStyle:{"font-size":".95rem","text-align":"left"}},[e._v(" Dementia Singapore: 6377 0700 "),t("br"),e._v(" AIC Hotline: 1800-650-6060 "),t("br"),e._v(" Health Promotion Board: 1800-223-1313 "),t("br")])],1):e._e()])],1):e._e()],1)],1)},ve=[],ge=r(463),fe=[];const _e="0123456789abcdef".split("");_e.forEach((e=>{_e.forEach((t=>{fe.push(e+t)}))}));var ye=s.ZP.extend({data:()=>({data:h,tests:Object.keys(h.scores)}),methods:{rgbToHex(...e){let t=!1;if(e.forEach((e=>{(e>255||e<0)&&(t=!0)})),t)return"#caabff";if([3,4].includes(e.length)){let t="";return e.forEach((e=>{e=Math.ceil(e),fe.forEach(((r,s)=>{e==s&&(t+=r)}))})),`#${t}8f`}}},computed:{passed(){var e=0;for(var t in h.scores)e+=h.scores[t]>=50?1:0;return e},loaded(){for(var e in h.scores)if(-1==h.scores[e])return!1;return!0},message(){var e=this.passed/this.tests.length*100;return e>=80?"You probably do not have Alzheimer's":e>=50?"You might not have Alzheimer's":e>=20?"You might have Alzheimer's":"You most likely have Alzheimer's"}},components:{VueEllipseProgress:ge.VueEllipseProgress}}),be=ye,Ce=(0,d.Z)(be,me,ve,!1,null,null,null),we=Ce.exports;f()(Ce,{VContainer:B.Z,VRow:W.Z});var Se=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"Intro"},[t("transition",{attrs:{name:"fade",mode:"out-in"}},[0==e.show?t("center",[t("img",{staticClass:"ma-10",staticStyle:{height:"50vmin"},attrs:{src:r(9574)}}),t("p",[e._v(" Intelligent Screening for Alzheimer's Disease "),t("br"),e._v(" "),t("br")]),t("p",{staticClass:"text-h6",staticStyle:{"font-size":"1rem"}},[e._v(" A simple 10 minute test to check for Alzheimer's."),t("br"),e._v(" "),t("br"),e._v(" A project by Vikram Ramanathan, James Sng and Yap Yuan Xi ")]),t("v-btn",{staticClass:"primary",on:{click:function(t){e.show=1}}},[e._v("Take the Test")])],1):1==e.show?t("Info",{on:{complete:function(t){e.show=2}}}):t("Selection",{on:{selected:function(t){return e.$emit("complete")}}})],1)],1)},xe=[],ke=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"Info"},[t("v-container",{key:"details",attrs:{"fill-height":""}},[t("h1",[e._v("Details")]),t("v-row",[t("v-col",{attrs:{cols:"12"}},[t("h2",{staticClass:"subheading grey--text mb-2"},[e._v("Gender")]),t("v-select",{attrs:{label:"Select Your Gender","item-text":"sex","item-value":"val",items:[{sex:"Male",val:0},{sex:"Female",val:1}],rules:[e=>-1!=e.val||"Please Select a Gender"],required:"",outlined:""},model:{value:e.gender,callback:function(t){e.gender=t},expression:"gender"}})],1)],1),t("v-row",[t("v-col",{attrs:{cols:"12"}},[t("h2",{staticClass:"subheading grey--text"},[e._v("Birthday")]),t("VueDatePicker",{ref:"menu",attrs:{format:"YYYY-MM-DD",name:"Birthday",color:"#9f4fff",placeholder:"Choose birthday","no-header":"","fullscreen-mobile":"","min-date":""+((new Date).getFullYear()-100),"max-date":new Date},on:{onOpen:function(t){e.menu=!0},onClose:function(t){e.menu=!1}},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1)],1),t("v-row",[t("v-col",{attrs:{cols:"12"}},[t("h2",{staticClass:"subheading grey--text mb-5"},[e._v("Years of Education")]),t("NumberInputSpinner",{attrs:{min:0,max:100,integerOnly:!0,rules:[e=>!!e||"Please Select a Gender"],required:"",outlined:""},model:{value:e.api.edu,callback:function(t){e.$set(e.api,"edu",t)},expression:"api.edu"}})],1)],1),t("v-row",[t("v-col",[t("v-btn",{staticClass:"primary",staticStyle:{"margin-top":"3vmin"},attrs:{id:"btn1"},on:{click:e.info}},[e._v("Submit")])],1)],1)],1)],1)},De=[],Ze=r(9158),Pe=r.n(Ze),Re=r(9866),Te=s.ZP.extend({data:()=>({api:h,gender:{val:-1},edu:0,details:0,menu:!1,date:null,activePicker:"YEAR"}),components:{NumberInputSpinner:Pe(),VueDatePicker:Re.Q},watch:{menu(e){e&&setTimeout((()=>this.$refs.menu.$refs.agenda.mode="year"))}},methods:{info(){if(0!=this.gender.val&&null!=this.date){var e=new Date,t=new Date(Date.parse(this.date));this.api.age=e.getFullYear()-t.getFullYear(),e.setFullYear(e.getFullYear()-this.api.age),e.valueOf()<t.valueOf()&&(this.api.age-=1),this.$emit("complete")}}}}),Ae=Te,Ve=r(2405),Ie=(0,d.Z)(Ae,ke,De,!1,null,null,null),Oe=Ie.exports;f()(Ie,{VBtn:O.Z,VCol:U.Z,VContainer:B.Z,VRow:W.Z,VSelect:Ve.Z});var Be=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"Selection"},[t("v-container",[t("h1",[e._v("Select Test")]),e._l(e.data.tests,(function(r){return t("div",{key:r},[t("v-btn",{staticStyle:{margin:"2vh 0","font-size":"1.5rem","background-color":"#6b3393",color:"white",padding:"3vh"},attrs:{block:"",depressed:"",raised:"",rounded:""},on:{click:function(t){e.data.steps=r.steps,e.$emit("selected")}}},[e._v(" "+e._s(r.name)+" ")])],1)}))],2)],1)},Me=[],Fe=s.ZP.extend({data:()=>({data:h})}),$e=Fe,ze=(0,d.Z)($e,Be,Me,!1,null,null,null),Ye=ze.exports;f()(ze,{VBtn:O.Z,VContainer:B.Z});var Le=s.ZP.extend({data:()=>({show:0,api:h}),components:{Info:Oe,Selection:Ye}}),je=Le,qe=(0,d.Z)(je,Se,xe,!1,null,"767b9f23",null),Ee=qe.exports;f()(qe,{VBtn:O.Z}),s.ZP.use(C.Z);const He=[{path:"/",name:"Homepage",component:Ee},{path:"/CDT",name:"CDT",component:F},{path:"/Memory",name:"Memory",component:q},{path:"/Recall",name:"Recall",component:X},{path:"/CVFT",name:"CVFT",component:he},{path:"/Results",name:"Results",component:we}],Ne=new C.Z({mode:"history",base:"/ISAD/",routes:He});var Ge=Ne,Ue=r(1705);s.ZP.use(Ue.Z);var We=new Ue.Z({theme:{themes:{light:{primary:"#9652ff",success:"#3cd1c2",info:"#ffaa2c",error:"#f83e70"}}}});s.ZP.config.productionTip=!1,new s.ZP({router:Ge,vuetify:We,render:e=>e(b)}).$mount("#app")},9574:function(e,t,r){e.exports=r.p+"img/logo.8a160f65.svg"}},t={};function r(s){var a=t[s];if(void 0!==a)return a.exports;var o=t[s]={exports:{}};return e[s].call(o.exports,o,o.exports,r),o.exports}r.m=e,function(){var e=[];r.O=function(t,s,a,o){if(!s){var i=1/0;for(d=0;d<e.length;d++){s=e[d][0],a=e[d][1],o=e[d][2];for(var n=!0,l=0;l<s.length;l++)(!1&o||i>=o)&&Object.keys(r.O).every((function(e){return r.O[e](s[l])}))?s.splice(l--,1):(n=!1,o<i&&(i=o));if(n){e.splice(d--,1);var c=a();void 0!==c&&(t=c)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[s,a,o]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.p="/ISAD/"}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,s){var a,o,i=s[0],n=s[1],l=s[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(a in n)r.o(n,a)&&(r.m[a]=n[a]);if(l)var d=l(r)}for(t&&t(s);c<i.length;c++)o=i[c],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(d)},s=self["webpackChunkISAD"]=self["webpackChunkISAD"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=r.O(void 0,[998],(function(){return r(9566)}));s=r.O(s)})();
//# sourceMappingURL=app.b151524c.js.map