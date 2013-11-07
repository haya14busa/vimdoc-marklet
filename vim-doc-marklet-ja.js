javascript:(function(){
    var text=encodeURIComponent(window.getSelection());
    text=(!text)?encodeURIComponent(window.prompt('vimdoc@ja')):text;
    if(text=='null'||text=='')return;
    var URL="http://www.google.com/cse?cx=001325159752250591701:65aunpq8rlg&q=%3Ahelp&oq=%3Ahelp&gs_l=partner.3...3689.4519.0.4809.0.0.0.0.0.0.0.0..0.0.gsnos%2Cn%3D13...0.833j191887j6..1ac.1.25.partner..0.0.0.#gsc.tab=0&gsc.q="+text;
    window.open(URL,"_blank");
})();
