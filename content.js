chrome.runtime.onMessage.addListener((request,sender,sendResponse)=>{
      if(request.msg=="send"){
         var lin=window.location.href;
         var data={
            msgct:"href",
             d:lin
         };
         console.log(data);
         chrome.runtime.sendMessage(data);
      }
});
