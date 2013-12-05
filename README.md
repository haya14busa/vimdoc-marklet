Vimのhelpをブラウザで見るためのBookmarklet
=====

とうろく
-----
1. [vimdoc@en](https://raw.github.com/haya14busa/vimdoc-marklet/master/vimdoc-marklet-en.mim.js)

2. [vimdoc@ja](https://raw.github.com/haya14busa/vimdoc-marklet/master/vimdoc-marklet-ja.mim.js)

3. [vimdoc-en-to-ja](https://raw.github.com/haya14busa/vimdoc-marklet/master/vimdoc-en-to-ja.mim.js)

リンク先のコードをコピーしてブックマーク追加&アドレス編集などして登録してください。

### もしかしたら、アプデされてないかもしれないけど楽な登録法
下記リンクをドラッグ&ドロップするなどしてブックマークに登録し、?以前(`https://github.com/haya14busa/vimdoc-marklet?`)を削除してください。

1. <a href='https://github.com/haya14busa/vimdoc-marklet?javascript:(function(){var a=encodeURIComponent(window.getSelection()),a=a?a:encodeURIComponent(window.prompt("vimdoc@en"));"null"!=a&&""!=a&&window.open("http://vimdoc.sourceforge.net/search.php?search="+a+"&docs=help","_blank")})();'>vimdoc@en</a>
2. <a href='https://github.com/haya14busa/vimdoc-marklet?javascript:(function(){var a=encodeURIComponent(window.getSelection()),a=a?a:encodeURIComponent(window.prompt("vimdoc@ja"));"null"!=a&&""!=a&&window.open("http://vim-help-jp.herokuapp.com/vimdoc/?query="+a,"_blank")})();'>vimdoc@ja</a>
3. <a href='https://github.com/haya14busa/vimdoc-marklet?javascript:(function(){var a=window.location.href;re=/vimdoc.sourceforge.net/;re2=/vim-jp.org\/vimdoc-ja/;re.test(a)?(a=a.replace("vimdoc.sourceforge.net/htmldoc/","vim-jp.org/vimdoc-ja/"),window.open(a,"_blank")):re2.test(a)&&(a=a.replace("vim-jp.org/vimdoc-ja/","vimdoc.sourceforge.net/htmldoc/"),window.open(a,"_blank"))})();'>vimdoc-en-to-ja</a>


つかいかた
-----
vimdoc@enとvimdoc@jaは実行してプロンプトに検索文字列を入力するか、事前に検索したい文字列を選択してから実行するとその文字列を検索文字列として検索します。

vimdoc-en-to-jaはsourceforgeの英語版vimdocを読んでる時に実行すると日本語版の同一のhelpを新規タブで開きます。逆の日->英も対応してます。

べんり
-----
ブラウザでVimのhelp見たい時まれにあるかもしれないし、ブックマークレットあると便利。

~~vimdoc@jaの方が構成が見やすくていいけど、検索が英語版のsourceforgeの方が自前で検索対応しているので(日本語版はGoogleカスタム検索)検索精度はvimdoc@enのほうが良さげ。

vimdoc@enを最初に使って、日本語版はvimdoc-en-to-jaを使うなどするといいかも。~~

[github@osyo-manga](https://github.com/osyo-manga)さんが[http://vim-help-jp.herokuapp.com/](http://vim-help-jp.herokuapp.com/)を使って改善してくれました。便利。

ということで、その仕様が変わると、vimdoc@jaは対応するまで使えません。注意。

**ブラウザでVimdocの快適読書生活を！**

