javascript:(function(){
    var text=encodeURIComponent(window.getSelection());
    text=(!text)?encodeURIComponent(window.prompt('vimdoc@ja')):text;
    if(text=='null'||text=='')return;
    var URL="http://vim-help-jp.herokuapp.com/vimdoc/?query="+text;
    window.open(URL,"_blank");
})();
