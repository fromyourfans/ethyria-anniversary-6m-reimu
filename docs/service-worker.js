if(!self.define){let i,e={};const r=(r,n)=>(r=new URL(r+".js",n).href,e[r]||new Promise((e=>{if("document"in self){const i=document.createElement("script");i.src=r,i.onload=e,document.head.appendChild(i)}else i=r,importScripts(r),e()})).then((()=>{let i=e[r];if(!i)throw new Error(`Module ${r} didn’t register its module`);return i})));self.define=(n,a)=>{const s=i||("document"in self?document.currentScript.src:"")||location.href;if(e[s])return;let c={};const o=i=>r(i,s),m={module:{uri:s},exports:c,require:o};e[s]=Promise.all(n.map((i=>m[i]||o(i)))).then((i=>(a(...i),c)))}}define(["./workbox-29b31176"],(function(i){"use strict";i.setCacheNameDetails({prefix:"ethyria-anniversary-6m"}),self.skipWaiting(),i.precacheAndRoute([{url:"/ethyria-anniversary-6m-reimu/css/app.2f25d6ec.css",revision:null},{url:"/ethyria-anniversary-6m-reimu/css/chunk-vendors.88b2bdb4.css",revision:null},{url:"/ethyria-anniversary-6m-reimu/favicon.ico",revision:"346c085c0ff7f89aacc4c1532714e59e"},{url:"/ethyria-anniversary-6m-reimu/img/background.c4399e27.png",revision:null},{url:"/ethyria-anniversary-6m-reimu/img/banner.1dbd3c3a.png",revision:null},{url:"/ethyria-anniversary-6m-reimu/img/icons/android-chrome-192x192.png",revision:"6a1d0e530128c8bb5e07acbb5015e627"},{url:"/ethyria-anniversary-6m-reimu/img/icons/android-chrome-maskable-192x192.png",revision:"6a1d0e530128c8bb5e07acbb5015e627"},{url:"/ethyria-anniversary-6m-reimu/img/icons/android-chrome-maskable-512x512.png",revision:"fd6f8e4b3bbcfa281581939524df7366"},{url:"/ethyria-anniversary-6m-reimu/img/icons/apple-touch-icon-120x120.png",revision:"c6f1bac647a0fbdb71970631b9f061f5"},{url:"/ethyria-anniversary-6m-reimu/img/icons/apple-touch-icon-152x152.png",revision:"8faf892d0b688870078eac5e7002e561"},{url:"/ethyria-anniversary-6m-reimu/img/icons/apple-touch-icon-180x180.png",revision:"019bca49ec61e50f3f2f15bf07486f32"},{url:"/ethyria-anniversary-6m-reimu/img/icons/apple-touch-icon-60x60.png",revision:"9aad31b85ea1310a6b31bdd2f8faa673"},{url:"/ethyria-anniversary-6m-reimu/img/icons/apple-touch-icon-76x76.png",revision:"1bfb2558235e9c003b731e1080b05879"},{url:"/ethyria-anniversary-6m-reimu/img/icons/apple-touch-icon.png",revision:"019bca49ec61e50f3f2f15bf07486f32"},{url:"/ethyria-anniversary-6m-reimu/img/icons/favicon-16x16.png",revision:"cc07c9fd3ab74832fb670c9e5f55ba28"},{url:"/ethyria-anniversary-6m-reimu/img/icons/favicon-32x32.png",revision:"4533a185e872374106b9354c71f726c1"},{url:"/ethyria-anniversary-6m-reimu/img/icons/msapplication-icon-144x144.png",revision:"8952ba1504ac104859507dfa38fde4a3"},{url:"/ethyria-anniversary-6m-reimu/img/icons/mstile-150x150.png",revision:"a51e2193bacf939bd405f52c1d0a7656"},{url:"/ethyria-anniversary-6m-reimu/img/icons/safari-pinned-tab.svg",revision:"e94051df39c65b3d352a5234a0426b15"},{url:"/ethyria-anniversary-6m-reimu/img/reimu-6months.03b29488.jpg",revision:null},{url:"/ethyria-anniversary-6m-reimu/index.html",revision:"27e84e932ad4e8f6c346d73952bc302e"},{url:"/ethyria-anniversary-6m-reimu/js/app.a5d03940.js",revision:null},{url:"/ethyria-anniversary-6m-reimu/js/chunk-vendors.bc960764.js",revision:null},{url:"/ethyria-anniversary-6m-reimu/manifest.json",revision:"8af4107f182ec8b1fb8dc8882db7e01d"},{url:"/ethyria-anniversary-6m-reimu/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
