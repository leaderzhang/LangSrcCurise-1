(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('苍梧县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"450421","properties":{"name":"苍梧县","cp":[111.544007,23.845097],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@AK@A@IGA@ACEA@ACDEBACI@GGECCCK@@BIA@OFEADMEAAEB@BEBKAKBGBCAC@ACCFGACAABCBE@GA@O@ECACBAFA@IHC@@B@LCJ@HDBABGCAACDCHPB@B@DGBHHCL@HAD@BAEE@CCMDIBCEAIAEACBE@CCCAEBGIAEEG@@DA@IIGEBEBA@@A@@AGKKCABAAGCA@K@IDC@A@AAG@AEAEAC@OFKF@@AEC@ECADA@C@ABBHMESME@ACE@ABEA@FHDIFE@CAICOMAGCBIDKEUCEDAECBAFEFC@BEICEDCAMA@@@I@IAK@AEC@A@ADEBE@GFGBK@I@@@ECGFEBGAGAAACMCABAB@@A@@@ABCAA@A@A@AA@CCA@AA@A@C@@@CBA@AAABAAA@AAC@@BCDA@@AC@A@@@A@AA@BAACB@BA@@@C@@A@A@@AAA@@@@A@AAA@@A@A@@@A@@@A@@AA@@AAA@@@AA@@@@@A@@@AC@@@A@AA@@@@@A@@AC@@BA@@A@AAAA@A@AC@@AB@@AA@@ABC@AAAC@@@@@AA@AA@@@A@A@AACAA@@@A@@@@A@A@@@A@A@@@A@@@@AC@@@@A@@A@A@@@A@AB@B@@@@@B@@A@@BA@A@AA@BAAA@@@A@ABA@CB@AA@@@C@A@A@@@@@@@A@CDAD@@A@A@@DAB@BAB@BAFAB@@@DA@@BAAAB@@A@@@A@@@A@AAABA@A@AA@@@@@@ABA@AB@@AA@@@@C@A@@@@@A@A@A@A@@@@BA@@@AA@@AABA@AA@EBA@E@AAAAA@@@A@@@CB@@@@@BBBB@@@@B@@@@A@@@A@@@@A@@@A@@A@@BA@@@@B@@BB@@@@@BA@A@@AA@@AB@@A@A@@@@BAA@@@A@A@A@@@CDBB@@CBA@@@@A@A@@A@@BABA@A@@A@@ABA@E@@@BBFD@@BAB@BA@@@BBBBDB@@@@B@DBB@@@BBBADBB@@DBB@FJAB@BB@B@A@@BAD@B@BB@@B@@CDA@@@@DA@@@@DBB@@@@@B@@A@BD@@@@DD@@@B@@@B@@B@B@@BB@@@@B@B@BA@@@AB@@BBB@@@@B@@AB@@BB@B@@A@AB@@@B@@@B@@AB@@@B@B@B@BA@@@AB@BA@AA@@A@@B@@@@BB@@@@AB@@@B@@@@BB@@@BA@BB@@@BB@BB@B@@@B@@BB@@B@BB@@BDB@@@@B@@A@@BAB@@@@@B@@AB@@@B@@A@@B@@@B@@@@@B@BABBBBB@@@@@B@BA@@B@B@BAD@@@D@B@@CF@BA@@@@@@B@@@@@BB@@B@BBD@BAD@@ABA@@@@B@@AB@B@@BB@@@B@@AB@B@BCDAB@B@B@@@@@B@B@@@D@B@B@@AB@@D@@@@BB@D@@@BBDA@@B@B@@@B@@@B@@@@@@BB@B@B@B@DB@@BAB@B@@@DB@@@@@@@B@B@@@BB@BBAB@B@BA@@B@BADB@@B@BBDADABBD@BCBAD@@AB@@BBA@@@A@@@AB@@A@@@AB@@A@@AAB@@@@A@@@@@@@AB@@@BABA@A@@@AB@@@A@@A@@@AB@@@@ABAB@@@@B@@@@@B@@B@@BA@@BBA@BB@@@@@B@@@B@BB@@B@@@BA@@BA@@@@@A@@@A@@@@@@@AB@@E@A@@BA@@@@@BB@BA@@B@@B@@B@@@BAB@B@@@B@B@@@@@B@@AB@@@@A@A@A@A@A@@@@AA@@@A@@@@AABA@A@A@A@@A@@AA@ACC@A@AB@@@@AA@@AA@CA@B@@@B@@AACBAA@@A@A@ABA@ABA@@BA@@@@@E@@@AA@B@@CA@@A@@AA@@@AAA@ABBBA@@@@@AB@@@B@@@@AB@@ABA@@@@BAB@BA@A@@@A@@@A@A@A@@@AA@@AAA@@AA@@@A@@@CA@@C@A@A@@@A@A@A@@@@BA@A@@@@@@@A@@@A@@@@A@@AA@A@A@@A@@@A@@A@BAA@@A@@@@@A@A@@@@A@@AA@@AA@@@AB@@@AA@@A@@@@A@@@@@AAA@@@@@@A@@@AA@@A@@@A@A@A@A@A@@@A@@@@@@@A@@AA@@@A@A@A@AAA@@@A@@@@@@AA@@AA@@A@A@@@AA@@AA@@A@@@A@A@A@@@@@@@A@@@A@@@@AAA@@@AAA@AA@@@@AAA@@A@@@A@@@A@A@@A@AA@A@A@A@C@@@AB@@@B@@A@@B@BABA@@B@B@BA@@A@@@@@@AB@@@@A@A@@@A@@AA@@@@AAB@@@@@@A@@BABA@AA@@@BC@@A@CAAAAA@@AA@@@@@A@A@@@A@@B@@AA@@A@A@@@@A@@@@@@A@@@@EBCACDG@M@EAC@EDABE@@BA@ABA@A@CDCCC@A@CCACA@CAC@AC@A@ACAEAA@CDEB@@@@A@AAABC@CC@@AAAAA@AA@@AA@@AB@@A@@@A@@@@@AA@AC@ABACAAA@@@@A@AA@A@@@A@AC@AA@A@@IBGBGDEDCBABAA@AEC@A@CCAAAAA@CAABABABB@@BBBBBABCA@@A@@@A@BBD@DBA@C@A@CA@B@@A@ILBD@B@B@BABA@C@A@A@CDBBA@AB@@A@AAA@@AACAB@@@@AB@BB@AF@BA@@BAAC@@@@A@@@@A@@@A@@BA@A@@B@B@@@BA@@@E@CB@@A@@BA@@@AAAA@AA@AA@@@ABAAA@A@A@AAAA@@A@CAA@@@@A@AB@@AAA@@AA@A@A@ABA@A@AAA@A@@BC@@@A@AA@@ABA@@D@B@BA@@B@BA@@BABA@A@@@AB@A@A@A@@@AEA@@B@@@ACA@@@A@@AABA@A@A@AAA@C@@BAAE@@ABA@AAA@A@CACBAAC@C@@ABA@@@AB@@A@ABA@A@@@C@A@ABA@ABA@CB@@@AAA@ABA@CBC@EB@@C@@BBB@DB@@BA@AB@B@BA@AACAA@@ACA@BC@A@CDABA@@@ABC@C@A@C@@BA@A@A@A@ABA@AA@@A@A@@B@@A@A@ABCBB@@B@B@B@B@B@@BD@@AB@@A@AB@@A@A@A@@@AB@@@@@B@B@DA@@@@BA@A@AB@B@BA@ABA@ABA@ABA@@@ABAB@DA@@BA@@B@@EDA@A@@@ABAB@D@@BB@B@@ABBB@@@DBBBDAA@@AAADABAD@BA@CAA@A@@@A@A@@@@@@@A@@@@@A@@@A@@@AB@@@B@B@@A@@B@@@@A@@@AB@@A@A@@B@B@BA@A@A@@@A@AB@@@@AA@@A@@DA@ABA@@@@@@B@FB@DBBB@B@@@B@D@BA@@BABCB@@ADC@AB@BABBB@BABA@AB@@ABA@@BA@@BABABA@@@@DDBBBBBBDDF@BA@A@@@@B@BA@@BABA@@@AB@FA@@BA@@DA@@@@BA@AB@AGBA@@BA@CACBA@CDCB@FAB@DBBAB@HAHBDABCDBBADBF@DAHBDDBBBBBDB@@@DC@@@A@A@A@ABABABBBABAB@BBB@BA@CD@DADA@CBADABA@@AA@AACBAA@AA@AAA@@@A@@@@AC@@CAAA@@AA@@@A@@A@@@A@A@@@A@@AA@@@A@CA@@@AA@@A@A@@@AAA@CBC@AAA@@AA@CA@@AA@AA@AC@AA@AC@@BA@AA@AA@AAAAA@@CA@A@@A@A@@@CBADACA@CCBA@A@A@A@GAGIEBMHA@OD@@IBCBGDQNYLA@EAKAGCCA@@AAMCOHG@SBGAA@@A@@CAB@KMGEKEA@@@EACAMAMAM@@@CBIDI@KBG@C@GACCA@@BABABA@A@@@@@@@B@@AA@@@@@AB@@@@@@@BA@AB@@@@AB@@AB@@@@A@@@AB@B@B@@@@A@@@@BA@AF@@@@@@@BAB@@@BA@C@A@A@@BAB@@A@@@A@@BABAB@@@@@DCB@@A@@B@@@B@@BB@@@@@BA@@B@@@B@@@@@B@BB@@B@@@BBBBB@@@@AB@@@B@@@D@@AB@@B@@B@@@BA@@@AB@@AB@B@@@BA@@@@D@@@B@@A@@@@B@@C@@@@B@@A@@@AB@@@BC@A@@@@B@@C@@BA@@@@@@@A@@@@BA@@@@@C@CAC@CAA@ADEBBB@J@@@DBBBB@@@B@BD@DFBDD@FB@DBB@F@B@BBB@BC@AD@BBB@B@B@BA@BDABA@EBC@@B@@A@C@@AAA@ACCAABCBA@CA@@@C@AC@AKC@@@CA@@AA@@@@@@A@C@A@AAA@AA@@AAABA@@@@@@@A@AA@BA@@@CA@@A@@@A@@@@@A@@@@@@@A@AAA@@@AAA@AAAAA@A@@@A@ABA@@@@ECCA@A@A@C@@@ABA@A@@AAIF@@AAC@A@CC@CA@A@AB@BA@@@@@@B@@AB@@A@@@A@@B@@@BBB@@BB@@C@@@A@A@@BA@A@AB@@@@@BB@@@@BA@@@@B@@F@@BDAB@BDBB@@@B@BB@@BB@@BB@B@B@@BB@@@AB@@@BA@CFA@ABAAABA@A@AD@@AB@B@@@B@D@@@@A@@@@@A@ABA@A@@@A@A@@@@@@@@B@B@B@@@@AB@@@B@@@B@B@@A@A@A@A@@B@@ABA@@BA@@@A@BB@B@@@BA@@B@@@B@@@BA@@BAB@B@@A@AAA@A@@@A@A@AB@@@@A@@B@@BB@@C@ABA@A@@@AD@@@@@BA@@B@BAB@@@B@@@BBB@@AB@BBBFB@B@@F@BBFDB@ABB@JFBHBFBBHDD@B@@@BB@@@@ADAD@@@BCD@@@@A@@B@@EB@B@@CFADABA@@@A@BB@@ABBDB@BBB@@@BB@@BFBBB@@@DBB@@@@@D@@B@BB@@BB@@FB@AD@H@HHL@B@DFBFDDDBBA@BB@B@@@@@B@@@@BB@@B@@@@@@B@@@@@B@@@@B@@@B@@B@@@@A@@B@@@@B@B@B@@@BA@@B@@A@@B@B@@@@@@BBAB@BA@@B@@@B@@A@@BB@@D@B@BB@@B@@B@@@BBB@@B@@@@@@B@@BB@@@@@@B@@BB@@@B@@@B@@@@BB@@B@@@@@B@@BBBB@@B@@@BB@@BB@@@@@@B@BB@@@@@@B@B@@BB@@@BBB@@B@@B@@@@BB@@@@B@@BB@@@B@BBB@@@@B@@BBBB@@@B@@B@@B@@BB@@@@@@@@BB@@B@B@AB@B@@@@BB@B@BB@@@BB@A@@B@@B@BB@@BB@@@B@@BB@@@@B@@@B@@@@@@@B@@AB@@@BB@@BB@@B@@@B@@@@@@@@BB@@@@BBB@@@@@@@@B@@B@@@@B@@@B@@@@@@B@@@B@BB@A@@@@B@@@@B@BD@BBBAB@B@D@DBBCDABEH@D@BAB@B@BEBADABA@BBAB@DBDBBBD@@@FAB@DAB@@@D@BABCBBJ@BBBAB@DB@@D@@@BF@@ABBBBA@@DB@@BB@@BB@@@BA@B@@BA@@@B@@B@@@@@@A@@BA@@B@@@B@B@@@B@@BB@B@B@@@B@@@@@BA@@@ABAB@B@B@@@B@B@@BB@@@@B@@@BAB@B@@@@@@ABAB@@AB@BA@@@A@@@AB@@A@BBA@@B@B@B@@@BBBB@@B@@@B@@DB@BAB@@AB@@@@@BB@B@@@@BB@AB@B@B@@A@@D@@@@B@BB@@@BAB@@@@AB@@@@@BBB@@B@@D@@A@@BA@@@BB@B@@@BBBB@@BB@@BB@@@B@@BBB@BBBB@B@@@BA@@B@A@@A@A@@B@@@B@@@@@@AB@B@B@@@BA@@B@B@@A@AB@B@@A@@D@B@@@AA@@B@@A@@A@@A@@B@@@B@@@@@B@BA@@B@@@B@@A@@B@B@@@@@@@B@BBB@@B@B@@@BAB@BB@@@@@BAB@@ABA@@B@@@BB@B@@@B@@@B@@@@BB@@@@AB@@BB@@BB@B@@@B@BBB@@BBB@@@B@@B@@B@BB@@@BB@@B@@@@@BBB@@@@@B@BB@AB@@@@@B@@@@ABCBCBEDABAD@DAF@DBHAD@B@BBF@DAB@@CB@@BB@F@@BA@B@A@@B@@@@BB@B@@AB@@BBAB@BAB@@ADB@@B@@CB@@A@@BA@@@A@@D@@@B@@@BAB@@AB@BAB@@BB@@ABBB@BB@BB@@B@@DA@@B@BB@B@@BB@@B@B@B@@BB@B@BB@@@BB@@@@@B@BBBB@DDF@@@@@DBB@B@@@B@@@BBDB@BAB@FBHAL@HBDAD@BDDBBDBBDDB@DJDD@FFDBF@DAFBBDB@B@B@JDBB@BDD@@D@DBDA@@F@BABBDADAB@B@@B@B@B@B@B@B@B@@BB@@BDBH@B@B@@@DBB@D@@@DB@DF@@ABD@@BB@DBDBD@@@BFB@DBDDDBB@B@DBBBBB@@@@@@@B@@BB@@@BB@B@@@B@@@@BB@@@B@@@B@@@B@@BBBB@@BBB@@BBBBB@BBB@@@BB@@@@B@@@@@BBD@B@@BB@@@B@@@@@B@B@@BB@@@B@B@@@B@@@B@B@@DBBBB@B@D@BBB@DBBD@@FA@AFABAF@BAD@D@B@BBBBD@D@D@BABAD@D@FBB@F@DA@CFC@C@CBADAB@DE@CBADCB@DEBABAB@B@BABCAA@A@AA@@A@A@C@EDAB@D@BCB@BADC@CAA@A@@AABAD@BAB@@@@@@ABAB@@@AABA@A@AB@B@@ABA@@@@@@AAA@@@@A@@@@AA@@@A@@@A@AA@@@AAB@B@B@@@BB@@BB@@@@@BB@B@@@@@AB@@B@@@BBB@B@@@@@@@@@B@@@B@@@B@@@@A@@B@@BB@@@@@@BBD@@BB@@@AB@@@BB@@@AB@@@@@@@B@@@BB@@B@@@BB@@@A@@B@@AB@B@@@@AB@@@@@BAB@@A@AD@BA@@B@@@B@@@B@@@D@@BBADBB@@@BB@@B@@A@@B@@@@@B@BA@@B@B@@B@A@@B@B@@@@@B@B@@AB@@A@@@@DA@@@A@A@A@@@@B@B@B@@AB@@@@@B@B@@@@@B@@AB@@@@A@C@A@@@@@A@AB@AA@@@@@@@A@@A@@AB@@@B@@@B@BBB@@@B@DBBABA@A@AB@@@B@@@@@BA@@@@@@B@BB@@@@B@D@@@@@B@@BB@B@@@BB@A@A@A@AB@@@D@@@@@B@BAB@B@@@@@BBB@B@@@B@BBB@@@@B@B@@BB@@B@B@BB@@B@@BBBBB@B@@B@@@B@@@B@B@@@DAB@B@B@@AF@B@B@D@B@B@DC@@B@BBD@@@DBBD@BBB@@@BC@@BA@@BAB@@@BAB@BA@@B@@AB@BAB@@@@BB@@@@@BA@@@@B@B@@BBB@BBB@@@B@BB@B@@HDB@B@BB@@@@F@B@@@D@@BB@BB@B@@@@BB@@@@B@BBB@@@BB@@B@@@@@@@@@@@B@@@@B@@B@@BB@@@BB@B@@B@BBD@B@@@B@@BA@AB@@AB@@@@@B@D@@AB@@BB@BBBB@@@B@@@B@@@@B@B@B@@@B@@@B@B@BD@@@@@B@@@BBB@@@B@@@B@@BBDB@ABB@@@AD@@@@B@@B@B@@@BBB@BB@@@@BB@@@B@@@B@@@@B@B@@B@@@@B@@@@B@@@@@@B@@B@@@@B@@B@@@@@BD@@B@@@AB@B@@AD@@AB@@@@BB@D@@@B@B@@@@@BA@@@A@@BA@A@@AAB@@@B@B@B@B@@@@@@@B@@@B@@AB@@@@B@B@@B@@BB@B@@BB@@@@@B@@@@@B@@@@AB@@@@@B@BA@@@A@@@ABABAB@@AD@@B@@@AB@@AB@B@B@BAF@@@@@BA@@@GH@@@@BBA@B@@B@@B@@BA@@B@@B@@B@@@@@B@@BB@@@B@@@B@BA@@@@@@B@@@BB@CB@@A@@F@B@DABCBADBHAB@@A@@BBB@@@B@@@BA@@B@@@B@@@@BB@@B@B@@B@B@@@BB@@BB@B@@@@@@B@B@@@@BB@@@@BD@@@@@B@@B@@B@BBB@@@@@@@@@B@@B@AB@B@B@@B@@B@@@@@B@@@@@BB@@@@B@@BB@@@BBB@@@@BB@BB@@BBB@@CBA@A@@BCBAB@D@@@@AB@B@B@B@@@B@@@B@BBBAB@BB@AF@BA@@B@@@BB@AD@@@B@BB@B@B@BB@@@@B@@BBBB@@@@@DAB@@@@@B@B@B@@@BAB@@@B@B@@@B@BABA@@B@@@BB@AB@BB@BBB@@@BB@@@FBBD@@@BD@BDBB@@BBB@BADA@@@BD@B@@@BBBBBBAB@B@@BD@AB@@AB@B@BAB@BABAD@BA@@B@BA@@BBD@BA@@D@B@DBB@B@B@BBB@BDB@BB@@BB@@BB@B@BBB@BF@D@BB@@@@B@BB@@AB@@@B@@@B@@@B@B@@AB@@A@AB@@AB@B@B@@@D@BA@@B@@@B@@ABABABB@@BD@@BBDB@ADB@@B@BBBABBB@BABB@BDB@BBD@B@B@B@@@B@@@B@@@@A@BBABAB@@@B@B@@BF@@B@BBBABBB@DADC@@@C@A@A@C@ABBB@DAB@DBBAB@D@@ABBB@D@@@@@BB@DDB@DD@@@BAB@@BBBBBDB@BBB@B@BB@B@@B@@@@@B@FBBBB@DA@@@B@@BB@C@A@CBABAHED@B@D@BBBAAABC@CB@@GDBDAHABBD@DABC@CB@@@BAB@BA@@B@@A@ABAD@@A@@B@B@BAB@@@D@@@BBB@B@DAD@DB@B@BBBB@B@@@FDB@@ADBBABAB@@@@@BAAC@A@A@C@AB@@ABA@A@A@@AA@CA@AA@AAA@@A@@AAA@@BA@@BA@ABCB@@AD@B@@AB@@@@A@AAA@@AAAB@AA@@@ACA@A@@C@C@AAA@AFA@@D@@AB@@A@AB@BAD@@@DA@@B@BA@@@AB@@AB@B@@ABCBA@A@AAA@@@@AA@@A@@@A@A@AB@@A@@@@@CE@@A@A@@@A@@A@@AA@AA@@AA@AA@@@@BAAA@AA@@@@@AC@@A@@@@@@AAAA@CAA@AA@@AA@A@@AA@@AA@@A@@CA@AA@CAAC@AA@A@@@@@@AB@@@AA@@@A@A@EA@AA@A@A@AAAB@A@AAAAAAABA@@@AAA@@@AA@@@CAAAC@@A@@BC@@CE@ABABAB@@A@@@C@@@ABA@A@@BA@@BC@@BABA@@@AA@@A@@@@A@@CB@AA@A@@D@BA@@BABA@A@A@A@@BAAAA@@@BCA@AA@@BABA@ADABA@A@AACC@@AB@AA@@@A@@BA@AB@B@D@@A@@BAB@@@FABAFB@AD@BBB@ABBBBBBBB@B@F@D@BDD@B@B@@@@@@ABC@@BA@@D@@ADBBABAD@@ABCBBB@@@DBDC@A@@BAB@BAB@BA@A@ADCDBBA@ABEA@@AC@ACCA@A@A@CAAB@B@BBBBB@H@D@HCD@BBDAB@DABAD@DADADCB@DAFEBA@@BABCBA@CDCB@BC@@BC@@B@@@DAB@@@BA@A@A@@@@@@@C@AB@BA@A@@BA@@AC@@BAB@B@@@BEACBCBA@ABCACAA@AACBAAAAAACAC@ACC@@@@BA@ABABC@EBA@A@ABAA@@AB@@@B@BA@C@@AA@A@CBC@@@AB@B@@AB@AA@AAAB@@ABA@@BA@ABABABAAAAA@AA@@@@A@A@@A@@@AA@A@@@@@@AA@@@A@@@@@@@A@A@@AA@@@A@AA@A@@@@@A@@@@@@A@@AAB@@@@CBC@@@@@@@ABA@A@C@AB@@@@ABA@AAA@@@A@A@@@@@@@A@@@@@A@@B@@A@@@@@ABA@A@@AA@@A@@A@@BA@@@AAA@@@A@@"],"encodeOffsets":[[114335,24406]]}}],"UTF8Encoding":true});}));