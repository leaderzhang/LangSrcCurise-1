(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('印台区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"610203","properties":{"name":"印台区","cp":[109.099974,35.114492],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@BA@E@A@A@@@@@A@ABA@@@A@A@@@ABA@ABG@@@@@A@@AA@@A@BA@@AAACA@@AABA@A@A@AA@@A@@A@@AAAAA@@@@CBAA@@@AA@A@@@AA@AA@AAA@A@@A@A@@@C@A@A@A@E@@BAAC@AB@@@B@B@B@BB@@@@BA@@D@@ADAB@@@B@B@@ABABCH@B@B@@A@@@@BA@A@A@@@@B@@@B@@@@A@@B@@@B@@AB@B@BA@@@@@@@@C@@@@@@@@AB@@@@@@@A@@@AA@@@@B@B@@ABA@A@A@@A@A@@@@@@A@@B@@AB@@AD@DA@@@@@@@@C@A@A@@AA@@C@@@@AA@@@AB@@@B@B@B@B@B@@AB@AAA@@@AA@@@ABA@C@A@A@@A@A@CAA@@@@@@A@@@@@A@A@@A@@A@@@@@A@@@@@@@A@@@@@AB@D@@@BA@@AA@@@AAAC@@@@AD@B@@A@@A@@@@AA@@@BA@@@@@A@A@@BBB@B@@A@A@C@A@A@AAAAAA@@@@A@@BAB@AAABAA@@@A@@AABA@ABA@@@@C@@AA@@@@@@ABAB@@@@AA@A@A@@AAA@@@A@C@@@A@CBABA@@AA@CAACA@AB@@BB@BA@BB@B@@@B@@@B@@@@@@@@A@AA@@A@EBAB@@@@@B@@@B@B@B@B@B@@@B@@@@@AA@@@@B@@AA@@A@A@@@A@BE@@A@A@@@E@C@AA@A@A@@@@@AAC@@@@BAB@@@@AA@A@@@@@BABAB@DE@@@@E@A@@@AA@@@B@@A@@BA@@@AAA@@AA@@@AB@@A@A@@A@@AA@@@@@@A@@B@@C@@BA@@B@B@@AB@@@B@BA@@B@@@B@BAB@@@BB@@BBB@BEB@@AAAAA@@@CBA@CBC@GB@@@@@A@@BABABAB@@@@@AA@C@C@@@@@AB@BC@A@@@ABA@AB@@@@A@@AC@@@@AAA@@@@@BA@@@@@AE@C@@@A@AA@@A@A@C@@@@AA@AAC@ABE@@@A@@@AA@AA@E@A@A@A@@A@ABA@ADA@CAA@AAA@@A@@AACAA@AAAA@@A@@AAA@AA@@@@@A@@BA@@@@@@@A@@BCD@B@B@@AA@AA@@A@@A@@@@@AA@@@AB@@@@@@A@@@@@AAA@A@@@@@@@A@@A@@AA@@@@@AA@@A@@@@A@AC@@AAA@A@@@A@ABA@@@A@@@@@@B@@A@A@EDAB@@CAA@AAAA@AACB@@A@@B@D@@AA@@A@A@@@ACAA@@@C@A@A@CAA@AAA@@A@C@A@A@AB@@A@@@A@A@A@A@A@@@AA@AAA@@@@AA@AAAABA@@B@AA@@B@@A@@BA@@@@@@@AB@@A@@B@@A@@@@BAB@BA@A@AAAAA@@A@@A@@EA@@AAAA@@@@A@@@A@AB@@ABA@@B@@@B@@A@A@A@CACACAA@ACA@@@@A@@A@@@A@@@@@A@@@@@AAA@AB@@@@A@@B@@@@@@ABB@@@@@@B@@A@@@@A@@@@AB@@A@@@@@A@A@A@@@A@AAAC@@AA@AAAAG@A@AAA@@C@CBA@A@AAA@@AA@@@BABAB@@AB@@@@A@@@@@AA@@@A@ABABA@@BC@A@@@A@@@A@A@A@EA@BABA@@BA@@@A@@BAB@@ABA@A@@A@@AA@@@AA@@@@A@A@@@ABA@@A@@@A@ABA@C@C@@BA@@D@@ABA@@@@BAB@B@@BA@B@@@@@B@@AA@@A@@@@B@@@@A@@@@@@@A@@@@@AA@@A@ABABA@@@C@A@@@@@H@B@@B@@A@A@A@C@@@@@AB@@@@AA@@AAA@@AA@A@A@CAAA@B@@A@@D@BAB@BC@@B@B@@B@BBB@@B@@B@@BB@BA@B@@@@@B@@B@@@B@@@@@@@@BB@@@@D@@@@BBBAD@@@BA@@JBBBA@@@@@A@@@D@B@BB@D@BB@@@@@@@AA@@@ABA@@@@@B@@@B@@B@B@@@BBBBA@@@@B@@@@@B@@@BA@@@@B@@A@@B@@@BA@@B@@@B@B@@A@@@@BA@@BA@@@@@ABA@@B@@@@@BA@@B@@AB@@A@@@AB@BA@@@A@@@@@AAA@@B@@@@@BA@C@A@@@@@@@BB@@@@C@A@E@@@@@AB@@A@A@A@ABCBA@@@CBC@@@@BA@@B@@B@@@@@B@@@B@B@@@@@B@@A@@@@@AD@BA@@B@@B@@BB@@B@@@@BA@@@BB@BBB@BBB@@BD@@B@@BBB@@@HAB@@@BD@FF@@B@@B@@BB@@B@B@@@BA@AB@DAB@@A@ABA@@BA@ABABA@@@B@B@BB@@@B@@@BBB@@B@@B@BBD@D@@@D@FAB@BAFBB@@BB@BBB@@B@@BB@B@B@BBB@B@B@@@D@B@BAB@B@BBDA@@@AD@@@BA@A@@BA@@B@@@@A@@@A@@@@@@BA@@@AB@@AB@@AB@D@B@@AB@@B@A@@BB@@BBB@@A@@@B@@B@@@@@@@@@@@@B@@B@@@@@@B@@B@@@@AB@@@@@@@@ABAA@BA@@BA@C@A@K@A@A@A@AB@@A@A@AA@@AB@@CB@@A@@B@@A@@B@AC@@@A@@@@A@@@AA@@BA@@@@@@@@A@@C@@A@@AAA@@@AB@@@BA@A@AAAAAA@A@A@AAA@AA@CAA@@@@@A@@@C@@@@AAAAAB@A@@A@@B@@@@AA@@@@@@@AA@@@A@@@AA@@B@BA@@B@@@@A@AD@@A@@AB@@A@@@A@@@A@@@A@@@AA@@@A@@A@@A@@@@BAD@B@B@@A@@@A@CAAB@@@@@B@@@@@@A@A@@@AB@@BDAD@B@@@@@B@@@B@BAD@@@B@@@@A@@@CBAD@B@B@DA@@@@BAB@BA@@B@@AB@@A@@D@@@B@BA@CDABA@@BA@@@A@@B@B@@A@ABABAB@@AB@@@@@@AB@@AB@@BBABAD@BAB@@AB@@@@A@@@@BA@BBABA@@@@@@B@@D@@@@BA@@B@D@B@B@BB@@@BB@@BB@B@@A@AA@@A@A@AA@@@B@@BB@@D@@BD@@@@@@BCB@@@B@@B@@BA@@@AA@BA@@@@B@@@@@@@D@@AB@@@B@@@@@BAD@@CA@@@@ABA@@B@@BB@BA@@@AB@@@@BB@BA@@AA@@@AB@@BD@@@BBD@B@@@B@@@BAB@@CB@@@@BB@@@B@@@@ABAA@BA@@B@@A@@@AAAA@@@A@@@@@@A@@@@@@A@@AA@A@@@@AA@AA@@BA@@@@@A@A@@@@@@B@B@D@BAB@@@@AB@@A@AAA@@B@@@D@BBB@BB@@B@@AF@@B@@B@@@BA@AB@@@B@@@B@@@@@@A@A@A@@@A@A@@@A@A@@@@@A@@@@@@AA@@A@@@@@@@B@@@BA@@@@@A@@@CB@@AAA@@@@@A@A@AB@BA@@B@@@@A@@@A@AB@AA@A@A@C@@@A@@@A@@BA@@@A@A@@AA@@@@A@@A@AB@@@@AA@A@@@@AB@@@@A@AB@@@@@BB@@B@@@BAA@B@@@@AB@@B@@@@BA@@@BBA@@@@@A@@@AAA@@@@@AA@@@@A@@@A@@@@@ABB@@B@@@@A@@@A@@@AB@B@BA@@@A@AACC@@@AB@@A@@A@@A@@@AA@@@@@A@@@@@A@AA@@@@@A@@B@@A@@@A@@A@A@@A@@@@B@@A@@@@A@@@@BAB@@A@@@@@@@@A@@@AA@A@@@@@AAC@@@AB@@C@A@AAABABABAAEBA@A@E@A@A@ABAB@@@@@DBB@@@B@@BB@BBDBB@@@B@@AB@BDD@@A@AB@@BBBBBDBB@@B@BB@@@BB@@@@@BA@@@@BB@@B@@B@@@@BB@B@@@B@@B@@@B@@BB@@@@@@@@B@@B@@@BB@@@B@@@B@B@B@B@B@B@BBB@B@@BFBB@@@B@@ABAB@@A@ABC@ABA@@@@@@BA@@@@BA@BB@@@B@BBB@B@@@B@@AB@@@B@BBB@@@B@@@B@@@B@@@B@BB@B@@BB@@@AD@@BD@@@@@B@@A@@BA@@@@B@@@@ABBB@@AB@@@@@@@B@B@D@@@B@@@BA@@BA@@@A@@@AB@@A@@@A@AB@@A@@@A@@@C@A@AAAAA@AA@@@@AA@@A@A@@@@BA@A@AA@@CC@@@@@ABA@@B@@ABA@A@@@G@A@A@@@@@C@@BA@A@A@@@C@@A@@ABA@@AA@@@A@@BA@A@@AC@A@ABA@@AA@@AACAA@A@@@AB@B@B@@@BBBA@AD@@AB@@@BA@@BA@@@@BA@BB@@@@AB@BB@@B@@@@@@@@@BA@@@@B@B@@@@@@@@@BA@@@A@@B@@@BA@@BA@@@@BA@@@A@AB@@A@AB@@@@@BAB@@@BA@@B@@AB@B@@A@@B@@AB@@@@@@@B@@AB@BA@@@A@@@CAA@AC@A@@@ABA@@@A@@@A@A@@@A@A@@@AA@@@@AAA@A@A@@A@A@@@AA@@A@ABABA@@B@B@BA@@@@BA@@@ABC@@B@@ABA@AB@@AB@@A@ABC@A@A@ECAA@@CA@@A@@@@BAA@@@@@@A@AB@@AB@B@@@BAB@@BBDBF@BAB@D@D@FD@@@B@@@B@@@BB@@BBB@@@BAF@B@@@BDBFF@@@B@@CDC@ABAB@@A@@@A@A@A@A@CBC@ABC@@@A@ABABAB@@@BA@@@BB@B@D@B@@@@CB@D@B@@ABA@@BA@ABADAD@@BD@@AB@DBB@@@BBFABBA@@B@@@@BB@@@DB@B@@@@B@@@B@B@B@B@@@BBB@B@B@@@@BBBB@@BBB@@@@@BAB@@A@@@@@@D@@@@@B@@@B@@A@A@@@@AA@A@AB@@@B@BB@@D@@@B@@@BBB@@@B@B@@@@@DBD@BB@@@BBB@@BB@DBB@BBD@@@BDB@@@BAB@B@@@BA@AB@BA@@B@BB@@D@B@BA@@B@B@BBB@BBBBD@@@B@@@@BB@@B@@F@B@B@DA@@@@@@@BB@@B@@BBAB@@BB@BB@@@B@BAB@@@B@B@@@@@@B@BB@BB@@@BB@@@B@D@BB@@@@@A@@@@@ABAB@@AB@BABA@A@@B@@@BA@@@@@@BBBAB@@@B@BAD@B@B@B@BABB@@B@@BB@@@BAB@@AB@@@DA@@BCBB@@B@@@BBB@H@B@F@B@BAB@BAA@@@@@AAC@@A@@CA@@@@@A@@AA@@AA@@AA@@A@A@@@AAA@@@AA@@E@AA@@B@@@AA@@A@A@@@A@A@A@A@@AAAAAA@C@@AC@A@@AA@AAA@AA@@@@AC@A@AAC@A@AB@@A@@@ADABA@ADEBA@A@@B@BA@A@A@@@A@@ABA@@B@@A@@@@A@A@C@AAA@@BA@A@@@A@@BC@@@@@CB@@AB@AABA@A@A@@B@B@B@@@BB@@B@BAD@BAB@@AA@@AB@AA@@BA@@@@@A@AB@BA@@@@BBB@BA@@B@@AD@BA@@BA@A@BBBBB@@BA@@BAD@BCB@@@B@B@@@DA@@BABAB@DBB@BBBBB@@@@@@@B@BA@@@A@@B@B@@@BBB@@@FDB@@@@@DABA@AB@@A@A@ABA@A@@@A@A@@@@BA@@@@@C@A@@BC@@@@BA@@AA@@@@BA@@@@@A@@@@@@B@BBB@@@BBD@BB@@BABABABADA@A@@@A@@@C@@@@FDB@FB@@B@@@@@@ABA@@BA@@@A@A@@B@@ABCBA@@B@@A@@@@B@@@B@@@@@BBD@@BA@BB@B@@BBB@B@@BBB@@BBBD@@DBBB@@@BB@DAB@B@@ADCDAB@@@BAB@FA@@B@@A@@@A@@@@@@@A@@@@A@@@@@@A@@@AA@@@@A@@B@@@AA@@@@@A@@@@@@@A@@@@@@@@@AB@A@@AA@@A@@@@A@AAA@A@AAA@@@@A@@@AB@BA@@@C@A@ABA@@B@DB@@@A@@@AB@@A@@B@BAB@BA@@@AB@DC@@B@@AAAA@AA@A@A@@@A@@A@@@C@@@@A@A@@AAA@@@@A@@@@B@BAB@@@BAB@@@D@D@FAB@@A@ABAHBB@@@@@BA@@A@@AB@DABAB@B@BAB@FA@ABA@A@@AA@@A@@A@A@@@AA@@@@A@@CA@A@AAAAA@@@@BA@@@A@@@@B@BA@@@@@@CAA@@@@AB@@@D@@@B@@@@@@@@A@@@@BA@@B@@@B@@@B@@@@AAA@A@@@@B@@@@@@@B@@@D@@@@@@@B@@@B@B@@@DBBBBBB@@@@BB@@@B@D@@AB@@@BB@@DB@@B@BAD@B@@@B@@@@A@@@C@A@@AEACA@@AAA@@@AAA@@@C@@@AAC@A@@AA@@@A@@AA@@@AA@@C@@AC@@@A@@BAB@@A@@AC@@@AB@BAD@BA@A@C@A@@A@@CA@@@@@AAAABA@@AA@@A@@@@A@@@@@@BA@@@@@A@@BA@@B@@@@@@@AAA@@@@A@AB@@A@A@@D@@@@@@@@A@A@@@@@AAAAE@A@A@A@@BA@@D@BBB@@@@@@@CC@@BA@@B@@@@A@@@A@@@@B@@@@B@@B@@@B@ABB@BB@@@C@@B@@@@BB@@@B@@@@@@B@@@@B@BA@@@@B@@B@@AB@B@@@BB@B@@B@DB@A@@BB@BB@@@@B@@@@B@@BA@@@B@@B@@@@A@@B@@@@B@@@B@@@BD@@AB@B@@@@B@B@@@@BD@B@@@A@ABA@@@B@@BA@@@@@@BB@@@@B@@@@@@@@BBAB@@@@B@B@@@@@@A@A@BB@@@@@@@B@BAB@B@@@FBD@B@@D@B@DBB@@@B@AA@@B@DB@A@@@@@@@A@A@@FCBAB@B@@@BB@@@B@@B@BB@@@B@BB@@@@@BA@AAA@AAA@A@@B@@A@@AC@@@@BAB@B@B@BBD@B@BABC@@BAF@BAB@BA@AB@@AB@DBBBDD@@B@B@@@FBBAB@@@@@B@BADBBA@BBA@B@@@B@B@D@B@F@BD@@B@@BD@@BB@@B@@A@@@@@A@@@@@A@AB@@@@@BB@@BA@@@@B@@D@@B@@@BB@BB@@A@C@A@@BBBB@BBBBB@@BBABAB@DAB@B@D@@@BBBB@@BB@BAB@B@@AB@@@@@B@BCB@BA@AB@BABABAB@B@BAB@@AD@BAB@@ABABADABA@@BB@@AF@@B@@@@A@@@@@B@@@@BC@AB@@B@@AB@B@@@@BB@@@@AB@@BB@@D@B@@BAB@BABAB@@@B@BB@@@@BBA@@BABA@@BBBBB@@B@@@B@@@BA@A@@@@B@@B@@@@B@@ABA@@B@@@BA@@BA@A@@@@@@B@@@BA@@@@B@@@@@BA@@@ABAAA@A@A@@@A@@@@B@B@BCD@BAB@@@D@@ABAB@B@B@@D@BBB@B@@B@@ADAB@BCD@@A@@@@BA@@@AB@@@@ABAB@@AB@@@B@@@@DB@@@B@B@B@B@B@B@@A@CA@@@@@B@BABAD@BBB@B@@@@BA@@@BAB@@@@@B@B@D@@@@B@B@BA@@@A@@B@@@B@@@@@@@B@@@B@@@@@B@B@@@DA@@B@@@@B@@B@@A@@@ABAB@BA@A@@@A@@@@@@BAA@@@BA@@B@@@B@@BBA@ABA@A@@B@@B@@DB@@@@@B@@@F@B@B@D@@@BBB@B@@B@B@B@@@@A@@@A@A@@BA@A@@@A@C@@@ABC@ABA@A@@BC@A@@BC@AB@B@B@B@@@B@@@BABABC@@B@B@B@B@BD@@@@B@B@D@@A@@BCBA@@@@B@@BB@A@@BAB@@@B@@AB@B@BAB@B@D@@@@AB@B@B@B@F@@@B@BD@@@DAB@@@B@@B@@@@@B@B@@@B@@@B@@B@@BB@@B@@@F@B@@AD@D@D@B@D@H@DA@@B@@@@@@BDBBB@@@BB@@B@@D@@@@BBAB@BA@AB@B@@ABBBAB@B@B@B@@@@@B@B@@@@@B@@@@@BA@@@@B@@AB@BA@ABA@@BA@@@@@@@AB@@@B@@A@@BB@@BB@@@B@@B@@@@@B@@B@B@DBB@B@@@B@@@@@B@@AA@@@@@@AB@AC@@@@@A@@B@@A@@@@B@@@BABBB@@@@A@@BAB@@CB@@@BA@@BA@@@A@@BA@@@@BA@@@AD@DC@@@@B@AAA@AAB@@@BA@@BAB@@@@ADAB@@@BA@@B@D@BA@@B@BAB@@@@B@@@@B@B@B@D@@@DBDBB@@@@C@@@A@@@A@A@@AA@@@AB@@AAA@A@@@@AA@@@@@A@A@ABCDC@@@A@@@A@@@@@AA@@@BG@@@A@@@ABABABA@ADA@AB@BBBABA@@BA@@@@@A@A@@B@DABB@@@@@@@@@A@AB@@E@@BA@AA@@@@@@A@@B@@@@@@@@@@A@@@A@@@@@@B@@@@A@@@@BCB@J@@A@@B@B@@@@@B@B@B@@A@@@@@A@@@@AA@@@@B@@@@@@A@@A@@@@AB@@@@@@@@@A@@@@@B@@@B@@@A@AAB@@@B@@@A@@A@@@@BC@@B@B@@@@@@@B@BBBAFB@ADBBA@AB@@A@AB@@@@@@@@@BB@A@@@@@@@AB@@@@AB@@@@AB@@B@@@@@@@BAB@@B@@@B@D@@@BA@A@@A@@@AAB@@BB@B@@@@A@@@@@A@@AA@@BA@@AA@@AB@@@@AA@A@@@A@@@@B@@@BA@@@@AAEB@@@ABA@@@A@@A@B@@ABAB@@@@ABC@@@@B@@@BB@ABA@@@A@@@AA@@@B@B@@@@@BA@@@A@C@A@@@A@B@@B@@B@@@@@@@B@@BB@@ADAB@@@@B@BB@@BB@@B@@@@@AB@@BB@@BA@@BA@@B@@B@@B@@@BA@A@A@A@@@@BA@@@@@@@B@@B@@@@A@AFA@A@@@@@@@AA@@A@A@@@@BB@@B@@@@A@@A@@AB@B@B@@ABC@@B@@@@E@@@@@BB@@@@@@A@@@AB@@@@BBDB@@BB@@AB@@A@B@BB@@@@@BABA@@@@@B@B@B@@@@B@@@@@B@@@@C@@@@B@@@@B@@B@@@@BBB@@B@@@@CBC@@@@@@B@@@@BAF@@B@@@AB@B@BB@@@@@B@@@@A@@@@@@@AB@@A@@@@@@@B@B@BBB@@B@BBB@@@B@B@B@@A@@AA@@@CBA@ABA@@@A@@@@BB@DA@@BB@@@BA@@B@@@B@@@@@@B@D@@@B@@BB@@B@B@BF@@B@@A@@B@@@BBBB@BB@@B@@BA@@@A@@@@BBB@B@@@@B@@@B@BB@@C@@@@@AB@@B@@ADH@@@@AFB@@@D@@@@BC@@B@@A@@D@@BAB@@BBBG@A@@@AD@@@BGAABC@C@@AAA@@@@AA@BA@A@@@@@@@@@A@@BAB@@A@AA@B@@@B@@@@@@@@@@B@@BB@A@ABA@@@A@BB@@@@@B@@@@@BB@@B@AC@@@@B@@B@BB@@A@@D@@@@A@@CA@@@A@@A@@A@@@@@@AA@@A@@AA@@A@@@AA@@@@@@A@@@A@@@A@@@@@A@@@@B@@@@A@A@AB@AA@@B@@@@@BA@A@@@A@A@A@@@A@A@AA@@A@A@AA@@@@A@@@@@A@@@@@A@@@@@A@@@C@@@A@@@A@AA@@CAA@ABA"],"encodeOffsets":[[112068,35950]]}}],"UTF8Encoding":true});}));