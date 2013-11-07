Vimのhelpをブラウザで見るためのBookmarklet
=====

とうろく
-----
1. [vimdoc@en](javascript:(function(){var a=encodeURIComponent(window.getSelection()),a=a?a:encodeURIComponent(window.prompt("vimdoc@en"));"null"!=a&&""!=a&&window.open("http://vimdoc.sourceforge.net/search.php?search="+a+"&docs=help","_blank")})();)
2. [vimdoc@ja](javascript:(function(){var a=encodeURIComponent(window.getSelection()),a=a?a:encodeURIComponent(window.prompt("vimdoc@ja"));"null"!=a&&""!=a&&window.open("http://www.google.com/cse?cx=001325159752250591701:65aunpq8rlg&q=%3Ahelp&oq=%3Ahelp&gs_l=partner.3...3689.4519.0.4809.0.0.0.0.0.0.0.0..0.0.gsnos%2Cn%3D13...0.833j191887j6..1ac.1.25.partner..0.0.0.#gsc.tab=0&gsc.q="+a,"_blank")})();)
3. [vimdoc-en-to-ja](javascript:(function(){var a=window.location.href;re=/vimdoc.sourceforge.net/;re2=/vim-jp.org\/vimdoc-ja/;re.test(a)?(a=a.replace("vimdoc.sourceforge.net/htmldoc/","vim-jp.org/vimdoc-ja/"),window.open(a,"_blank")):re2.test(a)&&(a=a.replace("vim-jp.org/vimdoc-ja/","vimdoc.sourceforge.net/htmldoc/"),window.open(a,"_blank"))})();)

リンクをドラックなどしてブックマークに登録してください。コードが古い可能性があるので気になる場合は、各種min.jsのファイルを参照してください。

つかいかた
-----
vimdoc@enとvimdoc@jaは実行してプロンプトに検索文字列を入力するか、事前に検索したい文字列を選択してから実行するとその文字列を検索文字列として検索します。

vimdoc-en-to-jaはsourceforgeの英語版vimdocを読んでる時に実行すると日本語版の同一のhelpを新規タブで開きます。日->英も対応してます。

べんり
-----
ブラウザでVimのhelp見たい時まれにあるかもしれないし、ブックマークレットあると便利。

vimdoc@jaの方が構成が見やすくていいけど、検索が英語版のsourceforgeの方が自前で検索対応しているので(日本語版はGoogleカスタム検索)検索精度はvimdoc@enのほうが良さげ。

vimdoc@enを最初に使って、日本語版はvimdoc-en-to-jaを使うなどするといいかも。


