javascript:(function(){
    var text=encodeURIComponent(window.getSelection());
    text=(!text)?encodeURIComponent(window.prompt('vimdoc@en')):text;
    if(text=='null'||text=='')return;
    var URL="http://vimdoc.sourceforge.net/search.php?search="+text+"&docs=help";
    window.open(URL,"_blank");
})();
