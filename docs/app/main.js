var search=location.search,query={};if(search){search=search.substr(1),search=search.split("&");for(var i=0,len=search.length;i<len;i++){var kv=search[i].split("=");isNaN(kv[1])||(kv[1]=Number(kv[1])),/^true|false$/i.test(kv[1])&&(kv[1]=Boolean(kv[1])),query[kv[0]]=kv[1]}}if(Reveal.initialize({history:!0,controls:!("controls"in query)||query.controls,transition:query.transition||"slide",dependencies:[{src:"//cdn.staticfile.org/reveal.js/3.4.1/plugin/markdown/marked.js",condition:function(){return!!document.querySelector("[data-markdown]")}},{src:"//cdn.staticfile.org/reveal.js/3.4.1/plugin/markdown/markdown.js",condition:function(){return!!document.querySelector("[data-markdown]")}},{src:"//cdn.staticfile.org/reveal.js/3.4.1/plugin/highlight/highlight.js",async:!0,callback:function(){hljs.initHighlightingOnLoad()}}]}),query.print){var link=document.createElement("link");link.rel="stylesheet",link.type="text/css",link.href="//cdn.staticfile.org/reveal.js/3.4.1/css/print/pdf.css",document.getElementsByTagName("head")[0].appendChild(link)}