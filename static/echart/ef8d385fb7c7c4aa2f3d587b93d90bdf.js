(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('平果县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"451023","properties":{"name":"平果县","cp":[107.589809,23.329376],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@AAA@@@@@A@@A@@A@@BA@@B@@@@A@@@@B@BA@@AC@@AA@@AA@@@@AC@@@@A@BA@AA@A@@A@@@A@A@@B@@ABA@@@@@@@AB@@@@@BBBABB@A@A@AB@@@B@AA@@@@BA@ABA@AAA@@@A@AB@BA@@@A@@@CBA@@@@@A@@AA@@ACA@@AAABA@A@AA@@A@AA@@@@@@AB@@@B@B@@A@@@AB@@@@AB@@AB@@ABBDA@@BE@@@@D@@@B@BA@@B@B@BB@@B@BBB@@@@@B@@@D@DDB@B@@BB@@@B@BA@A@@@A@A@@@@BAB@B@B@@A@ABA@@@AB@B@@@@@BAB@@@@B@@@@@BB@@@@B@@B@@AB@@@D@B@B@@@B@@@@AB@@@B@@@B@DB@A@@B@BA@@@E@@B@@@B@@@B@@A@@AA@@@A@@@A@@B@@AB@@BB@@@BA@@B@@@B@BB@@B@B@BB@@@B@B@@DDBBB@@@B@BAB@@ADA@@B@D@@@BAB@@AB@@A@@@@@@@@@B@AB@@A@@B@@B@@BA@A@@@@B@@@BB@@@B@@B@@@B@@@@BB@@@B@@@@@B@B@@@@@BABBB@B@@@B@@AB@@@@@@AB@@@BA@@B@@BB@BBB@B@@BB@B@@B@@@B@@BD@@@BB@@BB@@AB@@@@@B@@@B@BABABA@@D@BA@@@BB@@BB@BBD@BB@@DB@@BB@@B@BBBBB@BBB@@@AB@@BB@@DF@@B@@@B@@@@@BAB@@A@@B@@@BAB@B@@@B@B@@@DBBBBB@@@A@@A@B@@AB@@@BABA@AB@@@A@@@A@@A@@AAAAEA@A@A@@BA@@B@BA@ABABA@E@@BA@@@AA@@@@BC@@@A@@BAB@BA@@BAA@@A@A@BC@A@A@@@AA@@@@AA@AA@@A@@@ABA@@@@@A@@B@@@@@AA@@A@@AACAA@@AAA@@AA@@B@@@@@@A@@@@A@@AA@@A@@@@A@AABA@@BA@@D@@A@@AA@ABA@AB@@@B@@@@C@A@AAACAAA@@@@@@A@CCA@AC@@@@AC@@@ACAAA@@@A@BB@@@@A@@B@@B@@BA@@@@@A@@@@@A@@@A@@A@@AA@A@A@@A@@@@AAAA@A@@AAAAA@CAA@A@@AA@A@AAA@A@AAAAC@@A@@A@@AA@@@A@CA@AA@CA@@@A@C@ABCAA@ABA@C@ADC@@@@@A@ABA@A@E@@CAAAE@CB@ACDACA@BEBED@BADBDBPD@ABCCCACAA@C@GABBB@BA@A@A@@@@@A@A@@A@@C@@A@@A@@@ABAB@AABAA@@@@@A@@A@@A@@@@A@@@A@@@@@@@@B@@@@@@@@A@@@@@A@@A@B@B@B@B@@@B@@@@@B@@@@@@@B@@@B@@BB@@B@@@@@@@B@@DA@@B@@A@@B@@A@@@@@A@@AA@@@A@@@A@A@@@@@@@A@@@A@@@A@A@@@@@A@@CC@A@CAC@@B@B@D@@@@AAA@@@@@AB@BA@AAAB@@@B@@A@C@@B@BC@@AA@A@@AA@@@AA@@A@A@@@@@A@@@A@A@@A@@A@C@A@A@@@@D@B@B@@AB@@A@@@AB@@CA@A@@C@@@@@BA@A@@@@A@@A@@@@@A@@@A@AAB@@@@ABA@@@A@A@@@@@C@A@@@AA@@@A@A@@AA@@A@A@CA@@@@AA@@C@@@A@@AA@ABCA@A@AAC@@AA@A@ABA@@@@@A@@BA@@@A@@B@@A@AB@@A@A@@@AAAA@@@@@AA@AAA@@B@@@@@B@@@B@@@@@@AB@@A@@@@@@@AB@@@@@A@B@@AA@@@@A@@@AA@@AAA@BB@AB@B@@@@A@@A@A@@A@A@@AA@@A@@@AA@@@@A@@A@@B@@@@A@@A@A@@@BAAA@@@A@B@@AA@@@@BA@@BA@AA@ABA@@A@@@@@AB@A@@DA@@@@A@@@A@AA@@A@@@BBA@@@@@@AA@@@@@A@@@AB@BA@@@@CA@AB@@@A@@@A@@@@A@@@@BA@@@AACAA@@@A@@A@@@@@@@B@@@@A@@@@@A@@A@@@@A@@B@@@BB@A@@@A@@@@A@A@@@A@@A@ABA@A@@A@@@C@A@AB@B@@@@@@A@@A@AA@@B@@A@@A@@@BA@@B@@B@@BA@@@@BB@@BAB@@@@A@@@@@@A@@@BA@@AA@A@@A@A@@@@@A@@@@A@@@@@@@A@@A@@@@B@@A@@@AB@B@@@D@@@@A@@@AAA@@A@@AA@AAA@@@A@BA@@@AB@@A@@@@A@A@AAA@EA@@@@@AB@@A@A@A@A@@@@@A@@BE@A@ABCAC@C@@@A@@@A@A@AA@@@B@@@BA@@@@AA@ABA@@@@@A@@@ABC@C@AAA@@@EA@@CA@@@@A@@@@@@AAAA@AACAA@AAA@A@G@C@A@@@BB@BBD@B@D@BA@ABCBEBA@EACBCBE@CBG@ABA@A@A@CBGDEBE@A@@@A@CBE@A@@AA@@AA@C@@@CD@@A@@@AAA@CAA@AAAB@@@D@BA@A@@@@@AA@AA@ABAD@@AB@@@@@@@A@A@A@@@A@@@@AAA@AA@ABA@@@AB@@A@@B@A@AA@@BA@@@@A@AA@@CA@@@@A@@@AB@@AA@@A@@AA@@BA@A@@@BE@@B@BA@@@@@AB@@@@@BA@@@@@AB@BB@AB@@@@ABA@@AA@@BA@A@@@@@A@@@AA@@@@A@@@@@AB@@AA@@@AABA@@@@@@@@@A@@@@@@A@@A@@A@@A@@@@@@@@@A@@AA@@@@A@@A@@@@BABA@@BA@@BAB@@@@ABAB@@ADA@@@@@A@@@@BA@@B@@@@A@@B@@@@@@CA@@A@A@@@A@A@C@AA@CAA@@AAAA@@@B@B@B@B@@A@A@AB@B@BA@@@AAA@AA@AAA@@@@@CA@@CA@@A@AA@@ABA@CB@BGB@B@@AAA@@@@@@@A@@@@@A@AAEE@@BABA@@BA@ABA@@D@@@B@@@DA@@@@B@@@@@@A@@A@@@AA@@@AA@@@A@@B@@@C@@AC@@B@@A@C@@CAA@@A@@@A@A@@@@@A@AAAAB@@@@A@@@@BA@ABA@A@@B@@ABA@@@@@C@@A@@AA@@@@A@@BAAA@@@@@A@A@@@@@C@@@A@@BA@@@@AA@@@AB@A@@A@A@AB@@A@ABC@@@A@C@A@@D@BA@@@@@@BCAA@@@A@AA@B@BAB@@@@A@A@A@@B@@@BA@@@BDB@A@AB@@AB@@A@AB@BA@AAA@@@AB@@@BA@AA@BAB@@A@AAA@@B@@A@A@@AA@ABABA@@@A@@@A@A@@@@D@@@B@@@BBB@@AB@D@@E@@BA@C@@B@@AA@@@@@ABA@CA@@ABA@AA@A@A@A@@@A@@@A@@BAB@@CD@@@@@@AA@@A@B@@A@A@@@A@@A@A@A@A@ABA@AAAAA@@AB@BABA@@BAA@@@C@AB@@A@@@ABA@A@@@CBABBB@BA@@B@@@B@B@@BA@@B@@@D@@@BDBB@@AB@BCD@@BBBB@B@@BB@@@B@@@@@B@@DB@@D@@@@@BB@@B@@@BB@B@@@@@BB@@BAB@@B@A@@@@BA@@@ABA@@@A@AB@@A@A@CB@@@@A@A@@AC@AAA@CA@@AA@@A@@@A@BBA@@@BBABC@@@A@CB@@@A@@A@@@@A@A@A@@@A@AA@AB@@A@C@@BA@@@B@@@@B@@B@@@@@@@@B@@@@A@@B@@AB@@@@AB@@@@@@@B@@A@@@@@AB@@@@A@@@A@@@A@@B@@AA@@@BA@@BA@@@@@@B@@A@@@@@AAA@@AA@AA@@A@@@@BA@@BAB@@AAE@A@ABC@@A@@@AAA@@AAA@@@@@@@A@@@A@A@A@@@@@AA@@A@A@@@A@AAEAAA@AA@@AA@AACA@@@@@@@CAA@@A@C@@@@@A@@@A@A@A@@@@B@@AB@B@@AB@@@@A@@@@A@AAA@B@@@@A@@@A@@@A@A@@@@BAA@@A@@B@AA@@@A@A@@B@@@@C@AB@@@B@@ABA@A@@@@DAB@B@@BB@@@BAD@@DB@BB@@@B@@@BB@@@@B@@BB@@@BB@@@B@B@@A@@B@B@@BB@@BB@@@@A@A@@BA@A@A@@@ABA@A@@B@@AAA@@A@@A@@@@A@@C@@@@@CB@@@@AA@@A@A@A@@@AB@B@@@B@BB@@B@B@BB@@B@@ABAB@BBB@B@B@BAB@@A@A@@@A@A@A@@D@@ABA@@@A@@B@B@@AB@@ABA@A@@B@B@@AB@@@D@@AB@@BBA@@B@B@@@B@B@@B@@@BBBB@@@B@@@BABCA@B@BABA@BBB@@@B@@@B@@B@B@BB@@@B@@@@D@@@B@B@BBB@@@B@@@B@B@@AB@@@BABA@@B@B@@@B@@A@@@A@ABA@@A@@@AA@A@@A@BA@@BA@@@ABABA@@DAB@@B@@BB@A@BB@@@@@@@B@@C@@BA@@@A@@@A@@BAB@@@@A@@BA@ABCAA@A@@@@@A@CACA@@A@@A@AA@@@A@A@@@A@@BB@B@AB@@@BAB@@@B@B@@A@@@CDA@@AAAA@A@AA@@CA@AA@@AA@@@@@A@A@AB@@A@AB@@A@@B@BA@C@@@@BABB@BBBB@@@@ABB@@@DBB@B@DBB@@@BA@BB@B@B@B@@BBBB@@DBD@@BD@@@D@@BB@@F@BB@@B@@AB@B@B@@B@@B@@@BBDBB@BB@B@@@D@@@B@B@@B@@B@@AB@B@@B@DBB@B@B@BBB@@DB@@BED@DA@BBB@D@@BB@B@BB@@BBD@BB@@DD@@B@BD@BB@BB@B@BABB@@BB@B@@BCD@B@@@B@BAB@BAD@B@BBBBB@@@B@B@BADA@A@@@AB@B@@A@A@@@@B@@@BC@@@@BAD@@@B@BBB@@FD@@@@@@B@@@B@@A@@@@@@@B@@DA@@@B@@@@@@@@@@B@@@@B@@@@B@@@B@@@@@B@@@@@@@@B@@B@@@@@@@@BB@@@@B@B@@@D@BBB@@B@@@@BB@B@@@B@@@BB@BBBB@B@BADBB@@@B@@B@BDBB@B@@@BB@@BBBAB@@@B@BA@@D@@@BD@@B@B@@@B@@A@@DCBA@@BA@A@@@AB@@@B@BB@B@@BB@A@@@@B@B@BDBBBB@BBB@@B@B@B@B@BB@@@@@B@@@B@B@D@@ABAB@@AB@BABA@@BA@BB@@@@BB@@@BBB@@A@@@ABA@BB@BBB@@BBBB@BDDBBBBB@B@DDBBBBBB@@BBFABA@A@@BA@@@AAA@@BABAD@@AB@BA@@B@BA@@BABA@@AA@@BABA@@D@DA@@BA@@B@B@BBB@B@@@D@@@ABA@@BABA@A@ABA@A@@@@B@B@@A@ABF@D@@@@BAH@D@@AB@@@@BB@B@@@@ABCBA@CFABABADABAB@B@B@@B@DB@@@B@@@B@B@BAB@BAB@BBBAD@B@BBB@@ABEDA@A@A@@BABA@AB@@A@FFBB@BB@@D@B@BB@BBB@BBD@BBB@@@@BBB@B@@@B@B@BBB@B@FFFBDBB@@@@B@@@DB@@@@@B@@AB@@A@A@@@A@AB@@@@AA@BA@@@ABAB@@AB@B@@A@ADA@A@A@CD@@DB@DBB@BABAB@@ABHF@@BBB@BB@@BAB@B@BB@@@B@B@BA@@BABA@AB@@CB@@A@AB@@@BBB@BAB@B@@@@BDC@AAA@@@AC@@E@@@AB@@AB@@BDA@A@CB@BA@@B@@@BB@B@@@BB@BB@B@B@@@BA@@@@B@D@B@@@@@BB@@@B@B@@@B@BAB@B@B@BAB@@@@@BD@BB@@@BBD@@BFAB@D@B@B@D@D@B@@ABA@A@A@@@@B@@AD@BCBABAB@@@@C@CAAAAAA@E@CBA@@@ABAB@@DB@@@@BDABBD@@@B@@@B@@@@A@A@A@@@A@@B@@@B@@@B@@@@A@A@@B@@A@@@A@@A@@A@AB@@@@AA@@A@@@@@ABAAA@C@A@@@AB@@@@A@@@@@AA@@AA@AAAAA@A@@AAC@AA@@A@@@A@ABABA@@B@@@@CB@@ABA@@@@@@@A@@@A@@BA@ABA@AB@@@BA@CB@BA@@B@@ADABCDA@@BADA@@B@@@B@@B@@@AB@B@@@BB@@@CD@BCBAB@@@@B@@@@B@B@@@B@@@B@@B@@@B@@@BB@@@BBBBB@@BBBB@D@@@@@@@@B@@@@@B@B@DA@@BBB@@BB@B@DB@@BBB@@A@@BB@@@@F@B@@@@@B@BABA@AB@BBB@B@B@@@BB@@B@@A@@B@@AB@@@D@@AB@BB@@B@@DAB@@@@BBBD@@@B@@B@@@@BB@@@BB@@@@@@B@@BBD@@@@BBB@@@@@BB@@BA@@D@BAB@@@BAB@B@B@BAB@@@B@BAB@B@BBB@B@B@B@B@B@@AB@@@B@B@B@@@B@@B@ABBBA@@B@@@B@@@@@B@BA@B@@@@@BEDA@@B@@@@@@A@@@@@@BC@@@AB@@A@C@AB@@A@@@@B@BAB@BA@@@@@A@A@@@A@A@@@A@@B@@A@A@@B@@@@AB@@AB@@@B@B@@@BA@AB@BB@@B@@@@@BAB@@@B@@A@CBA@AB@@AAAB@@EB@@AB@@@B@BBBBBAF@@B@@B@@AB@@@B@@@@B@B@@@@BD@@@B@@B@@@B@D@@B@@@B@@B@@@B@@@B@@B@@B@@@@A@@@EBA@A@A@C@AB@@C@@@AAA@@@@@AB@B@@@@A@ABC@@@A@AAA@A@@@A@A@A@C@@@ABA@AB@@A@A@@BABABC@A@ADAB@BAB@@GJ@BB@@@@DBD@B@@@BA@@B@@DB@BB@@@D@@@B@B@BBB@B@@@@BAB@@BB@B@@AB@B@@@D@D@@B@B@@B@B@@BD@@BB@B@@@DA@A@BB@@BD@B@@@@@BADA@AB@BABCFA@@BA@C@AB@@@B@@AB@B@@@@@@BB@@@BBBB@@B@B@BBB@B@B@@@B@@@B@@@B@@ADAD@@@@BBB@BBB@@A@BB@DF@@@@@B@B@@@B@@@B@@@@ABA@AB@@BB@@AB@@@BBB@D@@B@AB@@BBDD@@B@B@@@B@BBB@@BADA@@B@@AB@DCD@@@BA@@@C@A@AD@@@@@DBB@@BBDB@B@@@B@@DB@@B@@@@@BBB@B@@@B@B@@@B@@BB@B@BA@@BB@@HAF@B@BAB@@@AACA@A@@@AB@@@DABA@A@A@@B@B@B@@@B@@@DAB@@@B@B@B@B@@@B@@A@@@@BB@@BBB@DBB@B@@@@@@@@@@@DB@BB@B@@@B@B@DA@@D@B@@@@BABA@@B@B@@A@ABA@@DBB@@BB@@@@@AB@@@B@@@@AB@B@BAB@@@AC@AB@B@BBBB@@@@B@D@BA@BBAB@@@@A@A@@B@B@@@B@BA@@@BB@@ADA@@@BB@@@BBBB@@B@@@@@B@@A@@@@@@DB@@BABBB@@@@BA@@B@@@D@@@DA@B@DB@@@BBDDB@BBB@B@@@@B@B@@@@@@B@B@@BB@B@B@@DBB@BB@B@D@@@B@@@B@@B@BBFA@BB@@@D@B@B@@@B@@B@@BBDB@@BBBB@@A@A@@@A@@B@@@@@BBB@@A@AB@@@B@@BFB@@@BB@BAB@B@B@@@B@B@@@@B@@BB@@AB@@AB@B@B@@AB@@@BABA@A@@@ABA@@BA@@B@B@@@BA@@@@B@DBDD@B@@A@AB@@DD@D@@@@DB@B@BB@@@@BAB@BB@@B@BB@@@B@@@B@@@@BB@BBBB@@B@D@@@@@B@BBB@DBB@@@B@@@BB@@@@BB@B@@@@B@@@B@@@@EB@@A@@@A@@D@@A@@@BD@@@BAB@@A@ABA@@BA@@BB@BBB@@DB@@FBB@DA@A@@@ADAB@@AB@@@@@@A@@B@B@@A@@BA@BD@@@@@BB@@BA@@@@@A@@@AAA@AB@@A@@AA@@A@@@A@@@@@AA@@AA@@@AB@@AB@@@@@B@@AA@@AA@A@@@@@AA@@@@CAC@A@@AA@A@A@AA@A@@AAAA@@A@@@A@AA@@CA@@@A@@@A@@B@@A@A@@BA@@BA@@@A@A@@@AB@@@@A@A@@@@@AB@BA@ABABABA@@B@BAB@BA@@B@@@B@BA@@AA@@BA@@B@@A@@@@@AB@@@@@B@B@B@DBDB@BB@@@BA@@B@@@BAB@B@@@@A@@@@@AB@B@B@B@B@B@@BBBB@@@BA@@BADA@@B@@ABC@@BE@@@C@@@@AAAAA@A@@AA@@AB@@A@@BAB@@ABC@A@@BA@AB@@@B@@A@@@A@@AA@@AA@@AA@@@@AC@A@@@@AAAAAA@@B@@AA@@A@A@@@@BABA@@@@BAB@@@B@@@B@@@B@B@BAB@BA@ABA@@B@@AD@@AB@@ABAB@BA@@@@BAB@BABBB@@@B@B@B@B@BA@@B@@AB@@@BBB@@BD@@@@AB@@AA@@A@C@CBADA@@BBB@@@B@BA@ADAB@@@@BB@@@DA@@B@B@@@BADAAA@@@@@A@@BA@BD@@@B@@@B@@@@@BBB@B@@@BA@@@@B@@@BB@@D@B@D@BAB@@@DAB@@@BAB@@@D@B@@BB@@@@B@B@@BBBA@@BB@@BBD@@@B@@@@B@D@BB@@@@@B@@@@@D@@BBB@@BBBB@B@BBBB@B@@@@BB@@BD@@@@B@@@BB@B@@@@B@BB@B@@@B@B@@@B@@@@BBD@@@BBBB@@BD@@@@B@B@@@BAB@@@BB@BB@@@@@@B@@@B@BA@A@@@A@@AA@ABA@@BA@@@A@@AA@@@A@@@AD@BABBB@@@BB@BDB@@BB@@@BB@B@B@BB@AB@DABA@A@@@A@@@A@@@A@@@A@@@A@A@A@@@@D@B@B@@BB@@@DB@B@@@B@BB@BB@@BA@@B@@@BB@@B@B@BAB@@AB@BAD@@@BB@@BBBABBB@B@@B@BB@@@B@D@D@DBB@B@@@BBD@B@BADA@@DBB@@BB@B@BAB@@AF@@A@@@@BA@@D@@@@@BA@@@A@AAAAAA@EA@@A@@B@@ABAAA@@AA@C@A@@@CAA@@@@C@A@@AC@@BA@@@A@@@@BA@@@AB@@A@AB@@@BABA@A@@B@BB@@B@BA@A@A@@AA@@BAB@@AB@@C@@B@BA@@@@@ABA@ABA@@AA@@AA@@B@B@@AB@@A@A@AB@@@@@BAB@@@BDB@@@B@@@B@BA@@B@B@B@B@@@@@BB@@@BBA@@B@@@@@BA@@BB@@BB@@BD@@BBA@@D@@B@@@B@@@D@@@B@B@DBBB@@B@BBB@@AB@B@@@B@B@B@@BB@@A@@B@AAAA@A@@@AA@@A@@BAB@@A@AB@@@@CB@@@B@@@B@BB@@DB@@B@@BB@B@B@@@BB@A@@B@@@B@@A@AB@BA@AB@B@B@@ABA@@B@B@@@B@@@B@@A@@BAB@A@@AA@@@A@AA@@@@BA@AB@@AB@B@@@BABA@@A@A@AA@@@@@@BA@@BA@@ACAA@A@@BAB@AA@ABA@@AAA@DC@@@AB@@@@@@A@C@@B@BAB@@ABBB@@@BA@@@@D@D@@AB@BA@@@AA@@EB@@@B@B@@@BB@@BC@AB@@@@@BA@C@@AAA@@AA@AA@A@ACC@A@@B@@@@A@@@A@@@C@@@A@@BABA@@B@@AAA@A@@AA@@C@@@@A@@A@@@AA@AAAAAAAAA@A@ABA@@BAB@@A@@BC@@@A@AACAC@@@AACA@A@A@A@@@@@AAA@@A@@AA@@@@AAA@@@@@A@A@@@CA@@AAA@@A@@@ABABA@@ACA@@@C@AA@@A@A@@AA@@AA@A@@A@@@@A@A@@B@B@B@@@B@@AB@@AB@@@@AAA@@@@B@@@@@@AB@B@@AAAAA@@@A@AB@B@@@B@@@@@BA@@@@B@@@@@@CA@@AA@@ABAD@@@@A@@A@@A@@AAA@AAAA@@@A@@@A@@B@B@@BDBBB@@B@@ABABAB@@@@A@@AA@C@@@@A@@@@AAAAA@C@@AA@A@@@@ACA@@A@AC@@@A@AAAA@@@@A@A@@@AAAAAB@@A@@@A@@@AA@@AA@@@AAA@A@A@A@A@ADA@@A@@AABC@@A@A@@@@AAAAAAAC@@AAA@@@ACAAB@@A@AAA@A@AAC@@A@@A@AAC@A@AA@@AAC@AA@@@@BAAAAAAC@@AAA@@AAA@@CB@B@BAB@BA@A@@@@AA@@@AAAAA@@A@A@@BA@@A@AABA@@@A@@@A@A@@BA@@BA@@@A@@@@@ABA@@@A@@@A@@@A@@A@AA@@@AAAA@@C@@AA@@A@@@AA@A@@@@BA@@@A@@B@@@@A@@B@BA@@@A@@BAB@BA@@@@BA@@@AB@@@@ABA@@@@@A@@A@A@@@A@@@A@@A@@C@CB@@@A@AAA@@BA@@@@AA@A@@@@@@@A@@@@@A@@A@BA@@@@AC@A@AB@BA@@B@@@@AB@@A@@@AB@@@@CA@AA@@BC@@BADC@ABA@@BAA@@AB@@@@@@@B@@@@@@@B@@@@A@A@@@AB@@A@A@@@@@@@A@@BA@A@@@@AA@AA@@A@@@@BA@@@A@@BA@@@AB@BA@@A@@AB@@@B@@@AABA@A@@@C@@@A@@@AB@BA@@@ABA@AB@@@@@B@@AB@B@@@@AB@@@BA@@BA@@BA@@B@@B@@BAB@BABABABABA@@@AA@@ABA@ABA@A@@@A@A@@@A@A@AA@@A@A@A@@@@@A@@@A@A@@A@A@A@CA@@@AAABCB@@A@@@@E@@@@A@A@@@A@@@A@@@AA@@ABA@@B@BAB@@A@@@A@AB@@@"],"encodeOffsets":[[110321,24062]]}}],"UTF8Encoding":true});}));