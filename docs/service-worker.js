if(!self.define){let i,e={};const n=(n,c)=>(n=new URL(n+".js",c).href,e[n]||new Promise((e=>{if("document"in self){const i=document.createElement("script");i.src=n,i.onload=e,document.head.appendChild(i)}else i=n,importScripts(n),e()})).then((()=>{let i=e[n];if(!i)throw new Error(`Module ${n} didn’t register its module`);return i})));self.define=(c,o)=>{const r=i||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let s={};const a=i=>n(i,r),l={module:{uri:r},exports:s,require:a};e[r]=Promise.all(c.map((i=>l[i]||a(i)))).then((i=>(o(...i),s)))}}define(["./workbox-29b31176"],(function(i){"use strict";i.setCacheNameDetails({prefix:"ethyria-anniversary-6m"}),self.skipWaiting(),i.precacheAndRoute([{url:"/css/app.0ba1ab08.css",revision:null},{url:"/css/chunk-vendors.88b2bdb4.css",revision:null},{url:"/favicon.ico",revision:"346c085c0ff7f89aacc4c1532714e59e"},{url:"/img/background.c4399e27.png",revision:null},{url:"/img/banner.1dbd3c3a.png",revision:null},{url:"/img/icons/android-chrome-192x192.png",revision:"6a1d0e530128c8bb5e07acbb5015e627"},{url:"/img/icons/android-chrome-maskable-192x192.png",revision:"6a1d0e530128c8bb5e07acbb5015e627"},{url:"/img/icons/android-chrome-maskable-512x512.png",revision:"fd6f8e4b3bbcfa281581939524df7366"},{url:"/img/icons/apple-touch-icon-120x120.png",revision:"c6f1bac647a0fbdb71970631b9f061f5"},{url:"/img/icons/apple-touch-icon-152x152.png",revision:"8faf892d0b688870078eac5e7002e561"},{url:"/img/icons/apple-touch-icon-180x180.png",revision:"019bca49ec61e50f3f2f15bf07486f32"},{url:"/img/icons/apple-touch-icon-60x60.png",revision:"9aad31b85ea1310a6b31bdd2f8faa673"},{url:"/img/icons/apple-touch-icon-76x76.png",revision:"1bfb2558235e9c003b731e1080b05879"},{url:"/img/icons/apple-touch-icon.png",revision:"019bca49ec61e50f3f2f15bf07486f32"},{url:"/img/icons/favicon-16x16.png",revision:"cc07c9fd3ab74832fb670c9e5f55ba28"},{url:"/img/icons/favicon-32x32.png",revision:"4533a185e872374106b9354c71f726c1"},{url:"/img/icons/msapplication-icon-144x144.png",revision:"8952ba1504ac104859507dfa38fde4a3"},{url:"/img/icons/mstile-150x150.png",revision:"a51e2193bacf939bd405f52c1d0a7656"},{url:"/img/icons/safari-pinned-tab.svg",revision:"e94051df39c65b3d352a5234a0426b15"},{url:"/img/reimu-6months.801a4185.jpg",revision:null},{url:"/index.html",revision:"6ecfbaacb32a6cc8881b9c6a18b6e224"},{url:"/js/app.68540925.js",revision:null},{url:"/js/chunk-vendors.bc960764.js",revision:null},{url:"/manifest.json",revision:"8af4107f182ec8b1fb8dc8882db7e01d"},{url:"/ogimage.png",revision:"b0a2534e6215da9353c89ab77dcc6289"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
