window.con_val_tab;
chrome.runtime.onMessage.addListener((request,sender,sendResponse)=>{
   if(request.msg=="send"){
     //send message to content
     var data={
        msg:"send"
     };
         chrome.tabs.query({active:true,currentWindow:true},function(tabs){
                chrome.tabs.sendMessage(tabs[0].id,data,function(){
                  console.log("data sent to content !!");
                });
           });
   }

   if(request.msgct=="href"){
     console.log("href!!");
     window.con_val_tab=request.d;
     console.log(window.con_val_tab);

   }

});
