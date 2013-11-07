javascript:(function(){
    var origURL = window.location.href;
    re = /vimdoc.sourceforge.net/;
    re2 = /vim-jp.org\/vimdoc-ja/;
    if (re.test(origURL)){
        var URL = origURL.replace('vimdoc.sourceforge.net/htmldoc/','vim-jp.org/vimdoc-ja/');
        window.open(URL,"_blank");
    } else if(re2.test(origURL)){
        var URL = origURL.replace('vim-jp.org/vimdoc-ja/', 'vimdoc.sourceforge.net/htmldoc/');
        window.open(URL,"_blank");
    }
})();

