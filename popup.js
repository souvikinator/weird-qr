$(function() {
    //************************************************************//
    var file = ['style.css'];
    for (let i = 0; i < file.length; i++) {
        var style = document.createElement('link');
        style.rel = 'stylesheet';
        style.type = 'text/css';
        style.href = chrome.extension.getURL(file[i]);
        (document.head || document.documentElement).appendChild(style);
    }
    console.log("loaded");
    //************************************************************//
    var background=chrome.extension.getBackgroundPage();
    $('#opt').hide();
    var url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
    //update part/////
      $('#snd_tb').click(()=>{
        var data_1={
           msg:"send"
        };
        chrome.runtime.sendMessage(data_1);
        setTimeout(()=>{
          if(background.con_val_tab.length>0){
            var lk=url+background.con_val_tab;
               $('#qr_d').attr('src',lk);
          }
        },300);

      });
    ////////////////////////////////////////////////////////
    $("#gt_d").click(function() {
        var data = document.getElementById('in_d').value;
        if (data.length > 0) { //if not empty
            var lnk = url + data;
            $("#qr_d").attr('src', lnk); //set qr links
            $("#opt").show(); //unhide hidden element
            $('#f_lnk').attr('href', lnk); //set links
            $('#f_lnk').click(function() { //detects clicks
                var win = window.open(lnk, '_blank');
                if (win) { //if allowed
                    win.focus();
                } else { //if not allowed
                    alert('load problem ocurred');
                }
            });
            //help button click
            $("#hlp").click(function() {
                var u = document.getElementById('hlp').getAttribute('src');;
                var win = window.open(u, '_blank');
                if (win) { //if allowed
                    win.focus();
                } else { //if not allowed
                    alert('load problem ocurred');
                }
            });
            //feedback button
            $("#bf").click(function() {
                var u = document.getElementById('bf').getAttribute('src');
                var win = window.open(u, '_blank');
                if (win) { //if allowed
                    win.focus();
                } else { //if not allowed
                    alert('load problem ocurred');
                }
            });

        }

    });

});
