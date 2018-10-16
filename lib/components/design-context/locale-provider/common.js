"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLocaleData = getLocaleData;
exports.DEFAULT_LOCALE = exports.DEFAULT_LANGUAGE = exports.ALL_SUPPORTED_LOCALES = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _reactIntl = require("react-intl");

var _carmen = _interopRequireDefault(require("@kmdavis/carmen"));

var _flat = _interopRequireDefault(require("flat"));

var _zh_TW = _interopRequireDefault(require("antd/es/locale-provider/zh_TW.js"));

var _zh_CN = _interopRequireDefault(require("antd/es/locale-provider/zh_CN.js"));

var _vi_VN = _interopRequireDefault(require("antd/es/locale-provider/vi_VN.js"));

var _uk_UA = _interopRequireDefault(require("antd/es/locale-provider/uk_UA.js"));

var _tr_TR = _interopRequireDefault(require("antd/es/locale-provider/tr_TR.js"));

var _th_TH = _interopRequireDefault(require("antd/es/locale-provider/th_TH.js"));

var _sv_SE = _interopRequireDefault(require("antd/es/locale-provider/sv_SE.js"));

var _sr_RS = _interopRequireDefault(require("antd/es/locale-provider/sr_RS.js"));

var _sl_SI = _interopRequireDefault(require("antd/es/locale-provider/sl_SI.js"));

var _sk_SK = _interopRequireDefault(require("antd/es/locale-provider/sk_SK.js"));

var _ru_RU = _interopRequireDefault(require("antd/es/locale-provider/ru_RU.js"));

var _pt_PT = _interopRequireDefault(require("antd/es/locale-provider/pt_PT.js"));

var _pt_BR = _interopRequireDefault(require("antd/es/locale-provider/pt_BR.js"));

var _pl_PL = _interopRequireDefault(require("antd/es/locale-provider/pl_PL.js"));

var _nl_NL = _interopRequireDefault(require("antd/es/locale-provider/nl_NL.js"));

var _nl_BE = _interopRequireDefault(require("antd/es/locale-provider/nl_BE.js"));

var _nb_NO = _interopRequireDefault(require("antd/es/locale-provider/nb_NO.js"));

var _mn_MN = _interopRequireDefault(require("antd/es/locale-provider/mn_MN.js"));

var _ku_IQ = _interopRequireDefault(require("antd/es/locale-provider/ku_IQ.js"));

var _ko_KR = _interopRequireDefault(require("antd/es/locale-provider/ko_KR.js"));

var _ja_JP = _interopRequireDefault(require("antd/es/locale-provider/ja_JP.js"));

var _it_IT = _interopRequireDefault(require("antd/es/locale-provider/it_IT.js"));

var _is_IS = _interopRequireDefault(require("antd/es/locale-provider/is_IS.js"));

var _index = _interopRequireDefault(require("antd/es/locale-provider/index.js"));

var _fr_FR = _interopRequireDefault(require("antd/es/locale-provider/fr_FR.js"));

var _fr_BE = _interopRequireDefault(require("antd/es/locale-provider/fr_BE.js"));

var _fi_FI = _interopRequireDefault(require("antd/es/locale-provider/fi_FI.js"));

var _fa_IR = _interopRequireDefault(require("antd/es/locale-provider/fa_IR.js"));

var _et_EE = _interopRequireDefault(require("antd/es/locale-provider/et_EE.js"));

var _es_ES = _interopRequireDefault(require("antd/es/locale-provider/es_ES.js"));

var _en_US = _interopRequireDefault(require("antd/es/locale-provider/en_US.js"));

var _en_GB = _interopRequireDefault(require("antd/es/locale-provider/en_GB.js"));

var _el_GR = _interopRequireDefault(require("antd/es/locale-provider/el_GR.js"));

var _default = _interopRequireDefault(require("antd/es/locale-provider/default.js"));

var _de_DE = _interopRequireDefault(require("antd/es/locale-provider/de_DE.js"));

var _cs_CZ = _interopRequireDefault(require("antd/es/locale-provider/cs_CZ.js"));

var _ca_ES = _interopRequireDefault(require("antd/es/locale-provider/ca_ES.js"));

var _bg_BG = _interopRequireDefault(require("antd/es/locale-provider/bg_BG.js"));

var _ar_EG = _interopRequireDefault(require("antd/es/locale-provider/ar_EG.js"));

var _LocaleReceiver = _interopRequireDefault(require("antd/es/locale-provider/LocaleReceiver.js"));

var _sv_SE2 = _interopRequireDefault(require("antd-mobile/es/locale-provider/sv_SE.js"));

var _ru_RU2 = _interopRequireDefault(require("antd-mobile/es/locale-provider/ru_RU.js"));

var _localeProvider = _interopRequireDefault(require("antd-mobile/es/locale-provider/locale-provider.js"));

var _index2 = _interopRequireDefault(require("antd-mobile/es/locale-provider/index.js"));

var _en_US2 = _interopRequireDefault(require("antd-mobile/es/locale-provider/en_US.js"));

var _zu = _interopRequireDefault(require("react-intl/locale-data/zu.js"));

var _zh = _interopRequireDefault(require("react-intl/locale-data/zh.js"));

var _zgh = _interopRequireDefault(require("react-intl/locale-data/zgh.js"));

var _yue = _interopRequireDefault(require("react-intl/locale-data/yue.js"));

var _yo = _interopRequireDefault(require("react-intl/locale-data/yo.js"));

var _yi = _interopRequireDefault(require("react-intl/locale-data/yi.js"));

var _yav = _interopRequireDefault(require("react-intl/locale-data/yav.js"));

var _xog = _interopRequireDefault(require("react-intl/locale-data/xog.js"));

var _xh = _interopRequireDefault(require("react-intl/locale-data/xh.js"));

var _wo = _interopRequireDefault(require("react-intl/locale-data/wo.js"));

var _wae = _interopRequireDefault(require("react-intl/locale-data/wae.js"));

var _wa = _interopRequireDefault(require("react-intl/locale-data/wa.js"));

var _vun = _interopRequireDefault(require("react-intl/locale-data/vun.js"));

var _vo = _interopRequireDefault(require("react-intl/locale-data/vo.js"));

var _vi = _interopRequireDefault(require("react-intl/locale-data/vi.js"));

var _ve = _interopRequireDefault(require("react-intl/locale-data/ve.js"));

var _vai = _interopRequireDefault(require("react-intl/locale-data/vai.js"));

var _uz = _interopRequireDefault(require("react-intl/locale-data/uz.js"));

var _ur = _interopRequireDefault(require("react-intl/locale-data/ur.js"));

var _uk = _interopRequireDefault(require("react-intl/locale-data/uk.js"));

var _ug = _interopRequireDefault(require("react-intl/locale-data/ug.js"));

var _tzm = _interopRequireDefault(require("react-intl/locale-data/tzm.js"));

var _twq = _interopRequireDefault(require("react-intl/locale-data/twq.js"));

var _ts = _interopRequireDefault(require("react-intl/locale-data/ts.js"));

var _tr = _interopRequireDefault(require("react-intl/locale-data/tr.js"));

var _to = _interopRequireDefault(require("react-intl/locale-data/to.js"));

var _tn = _interopRequireDefault(require("react-intl/locale-data/tn.js"));

var _tl = _interopRequireDefault(require("react-intl/locale-data/tl.js"));

var _tk = _interopRequireDefault(require("react-intl/locale-data/tk.js"));

var _tig = _interopRequireDefault(require("react-intl/locale-data/tig.js"));

var _ti = _interopRequireDefault(require("react-intl/locale-data/ti.js"));

var _th = _interopRequireDefault(require("react-intl/locale-data/th.js"));

var _teo = _interopRequireDefault(require("react-intl/locale-data/teo.js"));

var _te = _interopRequireDefault(require("react-intl/locale-data/te.js"));

var _ta = _interopRequireDefault(require("react-intl/locale-data/ta.js"));

var _syr = _interopRequireDefault(require("react-intl/locale-data/syr.js"));

var _sw = _interopRequireDefault(require("react-intl/locale-data/sw.js"));

var _sv = _interopRequireDefault(require("react-intl/locale-data/sv.js"));

var _st = _interopRequireDefault(require("react-intl/locale-data/st.js"));

var _ssy = _interopRequireDefault(require("react-intl/locale-data/ssy.js"));

var _ss = _interopRequireDefault(require("react-intl/locale-data/ss.js"));

var _sr = _interopRequireDefault(require("react-intl/locale-data/sr.js"));

var _sq = _interopRequireDefault(require("react-intl/locale-data/sq.js"));

var _so = _interopRequireDefault(require("react-intl/locale-data/so.js"));

var _sn = _interopRequireDefault(require("react-intl/locale-data/sn.js"));

var _sms = _interopRequireDefault(require("react-intl/locale-data/sms.js"));

var _smn = _interopRequireDefault(require("react-intl/locale-data/smn.js"));

var _smj = _interopRequireDefault(require("react-intl/locale-data/smj.js"));

var _smi = _interopRequireDefault(require("react-intl/locale-data/smi.js"));

var _sma = _interopRequireDefault(require("react-intl/locale-data/sma.js"));

var _sl = _interopRequireDefault(require("react-intl/locale-data/sl.js"));

var _sk = _interopRequireDefault(require("react-intl/locale-data/sk.js"));

var _si = _interopRequireDefault(require("react-intl/locale-data/si.js"));

var _shi = _interopRequireDefault(require("react-intl/locale-data/shi.js"));

var _sh = _interopRequireDefault(require("react-intl/locale-data/sh.js"));

var _sg = _interopRequireDefault(require("react-intl/locale-data/sg.js"));

var _ses = _interopRequireDefault(require("react-intl/locale-data/ses.js"));

var _seh = _interopRequireDefault(require("react-intl/locale-data/seh.js"));

var _se = _interopRequireDefault(require("react-intl/locale-data/se.js"));

var _sdh = _interopRequireDefault(require("react-intl/locale-data/sdh.js"));

var _sbp = _interopRequireDefault(require("react-intl/locale-data/sbp.js"));

var _saq = _interopRequireDefault(require("react-intl/locale-data/saq.js"));

var _sah = _interopRequireDefault(require("react-intl/locale-data/sah.js"));

var _rwk = _interopRequireDefault(require("react-intl/locale-data/rwk.js"));

var _rw = _interopRequireDefault(require("react-intl/locale-data/rw.js"));

var _ru = _interopRequireDefault(require("react-intl/locale-data/ru.js"));

var _rof = _interopRequireDefault(require("react-intl/locale-data/rof.js"));

var _ro = _interopRequireDefault(require("react-intl/locale-data/ro.js"));

var _rn = _interopRequireDefault(require("react-intl/locale-data/rn.js"));

var _rm = _interopRequireDefault(require("react-intl/locale-data/rm.js"));

var _qu = _interopRequireDefault(require("react-intl/locale-data/qu.js"));

var _pt = _interopRequireDefault(require("react-intl/locale-data/pt.js"));

var _ps = _interopRequireDefault(require("react-intl/locale-data/ps.js"));

var _prg = _interopRequireDefault(require("react-intl/locale-data/prg.js"));

var _pl = _interopRequireDefault(require("react-intl/locale-data/pl.js"));

var _pap = _interopRequireDefault(require("react-intl/locale-data/pap.js"));

var _pa = _interopRequireDefault(require("react-intl/locale-data/pa.js"));

var _os = _interopRequireDefault(require("react-intl/locale-data/os.js"));

var _or = _interopRequireDefault(require("react-intl/locale-data/or.js"));

var _om = _interopRequireDefault(require("react-intl/locale-data/om.js"));

var _nyn = _interopRequireDefault(require("react-intl/locale-data/nyn.js"));

var _ny = _interopRequireDefault(require("react-intl/locale-data/ny.js"));

var _nus = _interopRequireDefault(require("react-intl/locale-data/nus.js"));

var _nso = _interopRequireDefault(require("react-intl/locale-data/nso.js"));

var _nr = _interopRequireDefault(require("react-intl/locale-data/nr.js"));

var _nqo = _interopRequireDefault(require("react-intl/locale-data/nqo.js"));

var _no = _interopRequireDefault(require("react-intl/locale-data/no.js"));

var _nnh = _interopRequireDefault(require("react-intl/locale-data/nnh.js"));

var _nn = _interopRequireDefault(require("react-intl/locale-data/nn.js"));

var _nmg = _interopRequireDefault(require("react-intl/locale-data/nmg.js"));

var _nl = _interopRequireDefault(require("react-intl/locale-data/nl.js"));

var _ne = _interopRequireDefault(require("react-intl/locale-data/ne.js"));

var _nds = _interopRequireDefault(require("react-intl/locale-data/nds.js"));

var _nd = _interopRequireDefault(require("react-intl/locale-data/nd.js"));

var _nb = _interopRequireDefault(require("react-intl/locale-data/nb.js"));

var _naq = _interopRequireDefault(require("react-intl/locale-data/naq.js"));

var _nah = _interopRequireDefault(require("react-intl/locale-data/nah.js"));

var _mzn = _interopRequireDefault(require("react-intl/locale-data/mzn.js"));

var _my = _interopRequireDefault(require("react-intl/locale-data/my.js"));

var _mua = _interopRequireDefault(require("react-intl/locale-data/mua.js"));

var _mt = _interopRequireDefault(require("react-intl/locale-data/mt.js"));

var _ms = _interopRequireDefault(require("react-intl/locale-data/ms.js"));

var _mr = _interopRequireDefault(require("react-intl/locale-data/mr.js"));

var _mo = _interopRequireDefault(require("react-intl/locale-data/mo.js"));

var _mn = _interopRequireDefault(require("react-intl/locale-data/mn.js"));

var _ml = _interopRequireDefault(require("react-intl/locale-data/ml.js"));

var _mk = _interopRequireDefault(require("react-intl/locale-data/mk.js"));

var _mgo = _interopRequireDefault(require("react-intl/locale-data/mgo.js"));

var _mgh = _interopRequireDefault(require("react-intl/locale-data/mgh.js"));

var _mg = _interopRequireDefault(require("react-intl/locale-data/mg.js"));

var _mfe = _interopRequireDefault(require("react-intl/locale-data/mfe.js"));

var _mer = _interopRequireDefault(require("react-intl/locale-data/mer.js"));

var _mas = _interopRequireDefault(require("react-intl/locale-data/mas.js"));

var _lv = _interopRequireDefault(require("react-intl/locale-data/lv.js"));

var _luy = _interopRequireDefault(require("react-intl/locale-data/luy.js"));

var _luo = _interopRequireDefault(require("react-intl/locale-data/luo.js"));

var _lu = _interopRequireDefault(require("react-intl/locale-data/lu.js"));

var _lt = _interopRequireDefault(require("react-intl/locale-data/lt.js"));

var _lrc = _interopRequireDefault(require("react-intl/locale-data/lrc.js"));

var _lo = _interopRequireDefault(require("react-intl/locale-data/lo.js"));

var _ln = _interopRequireDefault(require("react-intl/locale-data/ln.js"));

var _lkt = _interopRequireDefault(require("react-intl/locale-data/lkt.js"));

var _lg = _interopRequireDefault(require("react-intl/locale-data/lg.js"));

var _lb = _interopRequireDefault(require("react-intl/locale-data/lb.js"));

var _lag = _interopRequireDefault(require("react-intl/locale-data/lag.js"));

var _ky = _interopRequireDefault(require("react-intl/locale-data/ky.js"));

var _kw = _interopRequireDefault(require("react-intl/locale-data/kw.js"));

var _ku = _interopRequireDefault(require("react-intl/locale-data/ku.js"));

var _ksh = _interopRequireDefault(require("react-intl/locale-data/ksh.js"));

var _ksf = _interopRequireDefault(require("react-intl/locale-data/ksf.js"));

var _ksb = _interopRequireDefault(require("react-intl/locale-data/ksb.js"));

var _ks = _interopRequireDefault(require("react-intl/locale-data/ks.js"));

var _kok = _interopRequireDefault(require("react-intl/locale-data/kok.js"));

var _ko = _interopRequireDefault(require("react-intl/locale-data/ko.js"));

var _kn = _interopRequireDefault(require("react-intl/locale-data/kn.js"));

var _km = _interopRequireDefault(require("react-intl/locale-data/km.js"));

var _kln = _interopRequireDefault(require("react-intl/locale-data/kln.js"));

var _kl = _interopRequireDefault(require("react-intl/locale-data/kl.js"));

var _kkj = _interopRequireDefault(require("react-intl/locale-data/kkj.js"));

var _kk = _interopRequireDefault(require("react-intl/locale-data/kk.js"));

var _ki = _interopRequireDefault(require("react-intl/locale-data/ki.js"));

var _khq = _interopRequireDefault(require("react-intl/locale-data/khq.js"));

var _kea = _interopRequireDefault(require("react-intl/locale-data/kea.js"));

var _kde = _interopRequireDefault(require("react-intl/locale-data/kde.js"));

var _kcg = _interopRequireDefault(require("react-intl/locale-data/kcg.js"));

var _kam = _interopRequireDefault(require("react-intl/locale-data/kam.js"));

var _kaj = _interopRequireDefault(require("react-intl/locale-data/kaj.js"));

var _kab = _interopRequireDefault(require("react-intl/locale-data/kab.js"));

var _ka = _interopRequireDefault(require("react-intl/locale-data/ka.js"));

var _jw = _interopRequireDefault(require("react-intl/locale-data/jw.js"));

var _jv = _interopRequireDefault(require("react-intl/locale-data/jv.js"));

var _jmc = _interopRequireDefault(require("react-intl/locale-data/jmc.js"));

var _ji = _interopRequireDefault(require("react-intl/locale-data/ji.js"));

var _jgo = _interopRequireDefault(require("react-intl/locale-data/jgo.js"));

var _jbo = _interopRequireDefault(require("react-intl/locale-data/jbo.js"));

var _ja = _interopRequireDefault(require("react-intl/locale-data/ja.js"));

var _iw = _interopRequireDefault(require("react-intl/locale-data/iw.js"));

var _iu = _interopRequireDefault(require("react-intl/locale-data/iu.js"));

var _it = _interopRequireDefault(require("react-intl/locale-data/it.js"));

var _is = _interopRequireDefault(require("react-intl/locale-data/is.js"));

var _index3 = _interopRequireDefault(require("react-intl/locale-data/index.js"));

var _in = _interopRequireDefault(require("react-intl/locale-data/in.js"));

var _ii = _interopRequireDefault(require("react-intl/locale-data/ii.js"));

var _ig = _interopRequireDefault(require("react-intl/locale-data/ig.js"));

var _id = _interopRequireDefault(require("react-intl/locale-data/id.js"));

var _hy = _interopRequireDefault(require("react-intl/locale-data/hy.js"));

var _hu = _interopRequireDefault(require("react-intl/locale-data/hu.js"));

var _hsb = _interopRequireDefault(require("react-intl/locale-data/hsb.js"));

var _hr = _interopRequireDefault(require("react-intl/locale-data/hr.js"));

var _hi = _interopRequireDefault(require("react-intl/locale-data/hi.js"));

var _he = _interopRequireDefault(require("react-intl/locale-data/he.js"));

var _haw = _interopRequireDefault(require("react-intl/locale-data/haw.js"));

var _ha = _interopRequireDefault(require("react-intl/locale-data/ha.js"));

var _gv = _interopRequireDefault(require("react-intl/locale-data/gv.js"));

var _guz = _interopRequireDefault(require("react-intl/locale-data/guz.js"));

var _guw = _interopRequireDefault(require("react-intl/locale-data/guw.js"));

var _gu = _interopRequireDefault(require("react-intl/locale-data/gu.js"));

var _gsw = _interopRequireDefault(require("react-intl/locale-data/gsw.js"));

var _gl = _interopRequireDefault(require("react-intl/locale-data/gl.js"));

var _gd = _interopRequireDefault(require("react-intl/locale-data/gd.js"));

var _ga = _interopRequireDefault(require("react-intl/locale-data/ga.js"));

var _fy = _interopRequireDefault(require("react-intl/locale-data/fy.js"));

var _fur = _interopRequireDefault(require("react-intl/locale-data/fur.js"));

var _fr = _interopRequireDefault(require("react-intl/locale-data/fr.js"));

var _fo = _interopRequireDefault(require("react-intl/locale-data/fo.js"));

var _fil = _interopRequireDefault(require("react-intl/locale-data/fil.js"));

var _fi = _interopRequireDefault(require("react-intl/locale-data/fi.js"));

var _ff = _interopRequireDefault(require("react-intl/locale-data/ff.js"));

var _fa = _interopRequireDefault(require("react-intl/locale-data/fa.js"));

var _ewo = _interopRequireDefault(require("react-intl/locale-data/ewo.js"));

var _eu = _interopRequireDefault(require("react-intl/locale-data/eu.js"));

var _et = _interopRequireDefault(require("react-intl/locale-data/et.js"));

var _es = _interopRequireDefault(require("react-intl/locale-data/es.js"));

var _eo = _interopRequireDefault(require("react-intl/locale-data/eo.js"));

var _en = _interopRequireDefault(require("react-intl/locale-data/en.js"));

var _el = _interopRequireDefault(require("react-intl/locale-data/el.js"));

var _ee = _interopRequireDefault(require("react-intl/locale-data/ee.js"));

var _ebu = _interopRequireDefault(require("react-intl/locale-data/ebu.js"));

var _dz = _interopRequireDefault(require("react-intl/locale-data/dz.js"));

var _dyo = _interopRequireDefault(require("react-intl/locale-data/dyo.js"));

var _dv = _interopRequireDefault(require("react-intl/locale-data/dv.js"));

var _dua = _interopRequireDefault(require("react-intl/locale-data/dua.js"));

var _dsb = _interopRequireDefault(require("react-intl/locale-data/dsb.js"));

var _dje = _interopRequireDefault(require("react-intl/locale-data/dje.js"));

var _de = _interopRequireDefault(require("react-intl/locale-data/de.js"));

var _dav = _interopRequireDefault(require("react-intl/locale-data/dav.js"));

var _da = _interopRequireDefault(require("react-intl/locale-data/da.js"));

var _cy = _interopRequireDefault(require("react-intl/locale-data/cy.js"));

var _cu = _interopRequireDefault(require("react-intl/locale-data/cu.js"));

var _cs = _interopRequireDefault(require("react-intl/locale-data/cs.js"));

var _ckb = _interopRequireDefault(require("react-intl/locale-data/ckb.js"));

var _chr = _interopRequireDefault(require("react-intl/locale-data/chr.js"));

var _cgg = _interopRequireDefault(require("react-intl/locale-data/cgg.js"));

var _ce = _interopRequireDefault(require("react-intl/locale-data/ce.js"));

var _ca = _interopRequireDefault(require("react-intl/locale-data/ca.js"));

var _bs = _interopRequireDefault(require("react-intl/locale-data/bs.js"));

var _brx = _interopRequireDefault(require("react-intl/locale-data/brx.js"));

var _br = _interopRequireDefault(require("react-intl/locale-data/br.js"));

var _bo = _interopRequireDefault(require("react-intl/locale-data/bo.js"));

var _bn = _interopRequireDefault(require("react-intl/locale-data/bn.js"));

var _bm = _interopRequireDefault(require("react-intl/locale-data/bm.js"));

var _bh = _interopRequireDefault(require("react-intl/locale-data/bh.js"));

var _bg = _interopRequireDefault(require("react-intl/locale-data/bg.js"));

var _bez = _interopRequireDefault(require("react-intl/locale-data/bez.js"));

var _bem = _interopRequireDefault(require("react-intl/locale-data/bem.js"));

var _be = _interopRequireDefault(require("react-intl/locale-data/be.js"));

var _bas = _interopRequireDefault(require("react-intl/locale-data/bas.js"));

var _az = _interopRequireDefault(require("react-intl/locale-data/az.js"));

var _ast = _interopRequireDefault(require("react-intl/locale-data/ast.js"));

var _asa = _interopRequireDefault(require("react-intl/locale-data/asa.js"));

var _as = _interopRequireDefault(require("react-intl/locale-data/as.js"));

var _ars = _interopRequireDefault(require("react-intl/locale-data/ars.js"));

var _ar = _interopRequireDefault(require("react-intl/locale-data/ar.js"));

var _am = _interopRequireDefault(require("react-intl/locale-data/am.js"));

var _ak = _interopRequireDefault(require("react-intl/locale-data/ak.js"));

var _agq = _interopRequireDefault(require("react-intl/locale-data/agq.js"));

var _af = _interopRequireDefault(require("react-intl/locale-data/af.js"));

var _es2 = _interopRequireDefault(require("./../../../locales/es.json"));

var _en2 = _interopRequireDefault(require("./../../../locales/en.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ALL_ANTD_WEB_LOCALES = {};
ALL_ANTD_WEB_LOCALES["zh_TW"] = _zh_TW.default;
ALL_ANTD_WEB_LOCALES["zh_CN"] = _zh_CN.default;
ALL_ANTD_WEB_LOCALES["vi_VN"] = _vi_VN.default;
ALL_ANTD_WEB_LOCALES["uk_UA"] = _uk_UA.default;
ALL_ANTD_WEB_LOCALES["tr_TR"] = _tr_TR.default;
ALL_ANTD_WEB_LOCALES["th_TH"] = _th_TH.default;
ALL_ANTD_WEB_LOCALES["sv_SE"] = _sv_SE.default;
ALL_ANTD_WEB_LOCALES["sr_RS"] = _sr_RS.default;
ALL_ANTD_WEB_LOCALES["sl_SI"] = _sl_SI.default;
ALL_ANTD_WEB_LOCALES["sk_SK"] = _sk_SK.default;
ALL_ANTD_WEB_LOCALES["ru_RU"] = _ru_RU.default;
ALL_ANTD_WEB_LOCALES["pt_PT"] = _pt_PT.default;
ALL_ANTD_WEB_LOCALES["pt_BR"] = _pt_BR.default;
ALL_ANTD_WEB_LOCALES["pl_PL"] = _pl_PL.default;
ALL_ANTD_WEB_LOCALES["nl_NL"] = _nl_NL.default;
ALL_ANTD_WEB_LOCALES["nl_BE"] = _nl_BE.default;
ALL_ANTD_WEB_LOCALES["nb_NO"] = _nb_NO.default;
ALL_ANTD_WEB_LOCALES["mn_MN"] = _mn_MN.default;
ALL_ANTD_WEB_LOCALES["ku_IQ"] = _ku_IQ.default;
ALL_ANTD_WEB_LOCALES["ko_KR"] = _ko_KR.default;
ALL_ANTD_WEB_LOCALES["ja_JP"] = _ja_JP.default;
ALL_ANTD_WEB_LOCALES["it_IT"] = _it_IT.default;
ALL_ANTD_WEB_LOCALES["is_IS"] = _is_IS.default;
ALL_ANTD_WEB_LOCALES["index"] = _index.default;
ALL_ANTD_WEB_LOCALES["fr_FR"] = _fr_FR.default;
ALL_ANTD_WEB_LOCALES["fr_BE"] = _fr_BE.default;
ALL_ANTD_WEB_LOCALES["fi_FI"] = _fi_FI.default;
ALL_ANTD_WEB_LOCALES["fa_IR"] = _fa_IR.default;
ALL_ANTD_WEB_LOCALES["et_EE"] = _et_EE.default;
ALL_ANTD_WEB_LOCALES["es_ES"] = _es_ES.default;
ALL_ANTD_WEB_LOCALES["en_US"] = _en_US.default;
ALL_ANTD_WEB_LOCALES["en_GB"] = _en_GB.default;
ALL_ANTD_WEB_LOCALES["el_GR"] = _el_GR.default;
ALL_ANTD_WEB_LOCALES["default"] = _default.default;
ALL_ANTD_WEB_LOCALES["de_DE"] = _de_DE.default;
ALL_ANTD_WEB_LOCALES["cs_CZ"] = _cs_CZ.default;
ALL_ANTD_WEB_LOCALES["ca_ES"] = _ca_ES.default;
ALL_ANTD_WEB_LOCALES["bg_BG"] = _bg_BG.default;
ALL_ANTD_WEB_LOCALES["ar_EG"] = _ar_EG.default;
ALL_ANTD_WEB_LOCALES["LocaleReceiver"] = _LocaleReceiver.default;
const ALL_ANTD_MOBILE_LOCALES = {};
ALL_ANTD_MOBILE_LOCALES["sv_SE"] = _sv_SE2.default;
ALL_ANTD_MOBILE_LOCALES["ru_RU"] = _ru_RU2.default;
ALL_ANTD_MOBILE_LOCALES["locale-provider"] = _localeProvider.default;
ALL_ANTD_MOBILE_LOCALES["index"] = _index2.default;
ALL_ANTD_MOBILE_LOCALES["en_US"] = _en_US2.default;
const ALL_REACT_INTL_LOCALES = {};
ALL_REACT_INTL_LOCALES["zu"] = _zu.default;
ALL_REACT_INTL_LOCALES["zh"] = _zh.default;
ALL_REACT_INTL_LOCALES["zgh"] = _zgh.default;
ALL_REACT_INTL_LOCALES["yue"] = _yue.default;
ALL_REACT_INTL_LOCALES["yo"] = _yo.default;
ALL_REACT_INTL_LOCALES["yi"] = _yi.default;
ALL_REACT_INTL_LOCALES["yav"] = _yav.default;
ALL_REACT_INTL_LOCALES["xog"] = _xog.default;
ALL_REACT_INTL_LOCALES["xh"] = _xh.default;
ALL_REACT_INTL_LOCALES["wo"] = _wo.default;
ALL_REACT_INTL_LOCALES["wae"] = _wae.default;
ALL_REACT_INTL_LOCALES["wa"] = _wa.default;
ALL_REACT_INTL_LOCALES["vun"] = _vun.default;
ALL_REACT_INTL_LOCALES["vo"] = _vo.default;
ALL_REACT_INTL_LOCALES["vi"] = _vi.default;
ALL_REACT_INTL_LOCALES["ve"] = _ve.default;
ALL_REACT_INTL_LOCALES["vai"] = _vai.default;
ALL_REACT_INTL_LOCALES["uz"] = _uz.default;
ALL_REACT_INTL_LOCALES["ur"] = _ur.default;
ALL_REACT_INTL_LOCALES["uk"] = _uk.default;
ALL_REACT_INTL_LOCALES["ug"] = _ug.default;
ALL_REACT_INTL_LOCALES["tzm"] = _tzm.default;
ALL_REACT_INTL_LOCALES["twq"] = _twq.default;
ALL_REACT_INTL_LOCALES["ts"] = _ts.default;
ALL_REACT_INTL_LOCALES["tr"] = _tr.default;
ALL_REACT_INTL_LOCALES["to"] = _to.default;
ALL_REACT_INTL_LOCALES["tn"] = _tn.default;
ALL_REACT_INTL_LOCALES["tl"] = _tl.default;
ALL_REACT_INTL_LOCALES["tk"] = _tk.default;
ALL_REACT_INTL_LOCALES["tig"] = _tig.default;
ALL_REACT_INTL_LOCALES["ti"] = _ti.default;
ALL_REACT_INTL_LOCALES["th"] = _th.default;
ALL_REACT_INTL_LOCALES["teo"] = _teo.default;
ALL_REACT_INTL_LOCALES["te"] = _te.default;
ALL_REACT_INTL_LOCALES["ta"] = _ta.default;
ALL_REACT_INTL_LOCALES["syr"] = _syr.default;
ALL_REACT_INTL_LOCALES["sw"] = _sw.default;
ALL_REACT_INTL_LOCALES["sv"] = _sv.default;
ALL_REACT_INTL_LOCALES["st"] = _st.default;
ALL_REACT_INTL_LOCALES["ssy"] = _ssy.default;
ALL_REACT_INTL_LOCALES["ss"] = _ss.default;
ALL_REACT_INTL_LOCALES["sr"] = _sr.default;
ALL_REACT_INTL_LOCALES["sq"] = _sq.default;
ALL_REACT_INTL_LOCALES["so"] = _so.default;
ALL_REACT_INTL_LOCALES["sn"] = _sn.default;
ALL_REACT_INTL_LOCALES["sms"] = _sms.default;
ALL_REACT_INTL_LOCALES["smn"] = _smn.default;
ALL_REACT_INTL_LOCALES["smj"] = _smj.default;
ALL_REACT_INTL_LOCALES["smi"] = _smi.default;
ALL_REACT_INTL_LOCALES["sma"] = _sma.default;
ALL_REACT_INTL_LOCALES["sl"] = _sl.default;
ALL_REACT_INTL_LOCALES["sk"] = _sk.default;
ALL_REACT_INTL_LOCALES["si"] = _si.default;
ALL_REACT_INTL_LOCALES["shi"] = _shi.default;
ALL_REACT_INTL_LOCALES["sh"] = _sh.default;
ALL_REACT_INTL_LOCALES["sg"] = _sg.default;
ALL_REACT_INTL_LOCALES["ses"] = _ses.default;
ALL_REACT_INTL_LOCALES["seh"] = _seh.default;
ALL_REACT_INTL_LOCALES["se"] = _se.default;
ALL_REACT_INTL_LOCALES["sdh"] = _sdh.default;
ALL_REACT_INTL_LOCALES["sbp"] = _sbp.default;
ALL_REACT_INTL_LOCALES["saq"] = _saq.default;
ALL_REACT_INTL_LOCALES["sah"] = _sah.default;
ALL_REACT_INTL_LOCALES["rwk"] = _rwk.default;
ALL_REACT_INTL_LOCALES["rw"] = _rw.default;
ALL_REACT_INTL_LOCALES["ru"] = _ru.default;
ALL_REACT_INTL_LOCALES["rof"] = _rof.default;
ALL_REACT_INTL_LOCALES["ro"] = _ro.default;
ALL_REACT_INTL_LOCALES["rn"] = _rn.default;
ALL_REACT_INTL_LOCALES["rm"] = _rm.default;
ALL_REACT_INTL_LOCALES["qu"] = _qu.default;
ALL_REACT_INTL_LOCALES["pt"] = _pt.default;
ALL_REACT_INTL_LOCALES["ps"] = _ps.default;
ALL_REACT_INTL_LOCALES["prg"] = _prg.default;
ALL_REACT_INTL_LOCALES["pl"] = _pl.default;
ALL_REACT_INTL_LOCALES["pap"] = _pap.default;
ALL_REACT_INTL_LOCALES["pa"] = _pa.default;
ALL_REACT_INTL_LOCALES["os"] = _os.default;
ALL_REACT_INTL_LOCALES["or"] = _or.default;
ALL_REACT_INTL_LOCALES["om"] = _om.default;
ALL_REACT_INTL_LOCALES["nyn"] = _nyn.default;
ALL_REACT_INTL_LOCALES["ny"] = _ny.default;
ALL_REACT_INTL_LOCALES["nus"] = _nus.default;
ALL_REACT_INTL_LOCALES["nso"] = _nso.default;
ALL_REACT_INTL_LOCALES["nr"] = _nr.default;
ALL_REACT_INTL_LOCALES["nqo"] = _nqo.default;
ALL_REACT_INTL_LOCALES["no"] = _no.default;
ALL_REACT_INTL_LOCALES["nnh"] = _nnh.default;
ALL_REACT_INTL_LOCALES["nn"] = _nn.default;
ALL_REACT_INTL_LOCALES["nmg"] = _nmg.default;
ALL_REACT_INTL_LOCALES["nl"] = _nl.default;
ALL_REACT_INTL_LOCALES["ne"] = _ne.default;
ALL_REACT_INTL_LOCALES["nds"] = _nds.default;
ALL_REACT_INTL_LOCALES["nd"] = _nd.default;
ALL_REACT_INTL_LOCALES["nb"] = _nb.default;
ALL_REACT_INTL_LOCALES["naq"] = _naq.default;
ALL_REACT_INTL_LOCALES["nah"] = _nah.default;
ALL_REACT_INTL_LOCALES["mzn"] = _mzn.default;
ALL_REACT_INTL_LOCALES["my"] = _my.default;
ALL_REACT_INTL_LOCALES["mua"] = _mua.default;
ALL_REACT_INTL_LOCALES["mt"] = _mt.default;
ALL_REACT_INTL_LOCALES["ms"] = _ms.default;
ALL_REACT_INTL_LOCALES["mr"] = _mr.default;
ALL_REACT_INTL_LOCALES["mo"] = _mo.default;
ALL_REACT_INTL_LOCALES["mn"] = _mn.default;
ALL_REACT_INTL_LOCALES["ml"] = _ml.default;
ALL_REACT_INTL_LOCALES["mk"] = _mk.default;
ALL_REACT_INTL_LOCALES["mgo"] = _mgo.default;
ALL_REACT_INTL_LOCALES["mgh"] = _mgh.default;
ALL_REACT_INTL_LOCALES["mg"] = _mg.default;
ALL_REACT_INTL_LOCALES["mfe"] = _mfe.default;
ALL_REACT_INTL_LOCALES["mer"] = _mer.default;
ALL_REACT_INTL_LOCALES["mas"] = _mas.default;
ALL_REACT_INTL_LOCALES["lv"] = _lv.default;
ALL_REACT_INTL_LOCALES["luy"] = _luy.default;
ALL_REACT_INTL_LOCALES["luo"] = _luo.default;
ALL_REACT_INTL_LOCALES["lu"] = _lu.default;
ALL_REACT_INTL_LOCALES["lt"] = _lt.default;
ALL_REACT_INTL_LOCALES["lrc"] = _lrc.default;
ALL_REACT_INTL_LOCALES["lo"] = _lo.default;
ALL_REACT_INTL_LOCALES["ln"] = _ln.default;
ALL_REACT_INTL_LOCALES["lkt"] = _lkt.default;
ALL_REACT_INTL_LOCALES["lg"] = _lg.default;
ALL_REACT_INTL_LOCALES["lb"] = _lb.default;
ALL_REACT_INTL_LOCALES["lag"] = _lag.default;
ALL_REACT_INTL_LOCALES["ky"] = _ky.default;
ALL_REACT_INTL_LOCALES["kw"] = _kw.default;
ALL_REACT_INTL_LOCALES["ku"] = _ku.default;
ALL_REACT_INTL_LOCALES["ksh"] = _ksh.default;
ALL_REACT_INTL_LOCALES["ksf"] = _ksf.default;
ALL_REACT_INTL_LOCALES["ksb"] = _ksb.default;
ALL_REACT_INTL_LOCALES["ks"] = _ks.default;
ALL_REACT_INTL_LOCALES["kok"] = _kok.default;
ALL_REACT_INTL_LOCALES["ko"] = _ko.default;
ALL_REACT_INTL_LOCALES["kn"] = _kn.default;
ALL_REACT_INTL_LOCALES["km"] = _km.default;
ALL_REACT_INTL_LOCALES["kln"] = _kln.default;
ALL_REACT_INTL_LOCALES["kl"] = _kl.default;
ALL_REACT_INTL_LOCALES["kkj"] = _kkj.default;
ALL_REACT_INTL_LOCALES["kk"] = _kk.default;
ALL_REACT_INTL_LOCALES["ki"] = _ki.default;
ALL_REACT_INTL_LOCALES["khq"] = _khq.default;
ALL_REACT_INTL_LOCALES["kea"] = _kea.default;
ALL_REACT_INTL_LOCALES["kde"] = _kde.default;
ALL_REACT_INTL_LOCALES["kcg"] = _kcg.default;
ALL_REACT_INTL_LOCALES["kam"] = _kam.default;
ALL_REACT_INTL_LOCALES["kaj"] = _kaj.default;
ALL_REACT_INTL_LOCALES["kab"] = _kab.default;
ALL_REACT_INTL_LOCALES["ka"] = _ka.default;
ALL_REACT_INTL_LOCALES["jw"] = _jw.default;
ALL_REACT_INTL_LOCALES["jv"] = _jv.default;
ALL_REACT_INTL_LOCALES["jmc"] = _jmc.default;
ALL_REACT_INTL_LOCALES["ji"] = _ji.default;
ALL_REACT_INTL_LOCALES["jgo"] = _jgo.default;
ALL_REACT_INTL_LOCALES["jbo"] = _jbo.default;
ALL_REACT_INTL_LOCALES["ja"] = _ja.default;
ALL_REACT_INTL_LOCALES["iw"] = _iw.default;
ALL_REACT_INTL_LOCALES["iu"] = _iu.default;
ALL_REACT_INTL_LOCALES["it"] = _it.default;
ALL_REACT_INTL_LOCALES["is"] = _is.default;
ALL_REACT_INTL_LOCALES["index"] = _index3.default;
ALL_REACT_INTL_LOCALES["in"] = _in.default;
ALL_REACT_INTL_LOCALES["ii"] = _ii.default;
ALL_REACT_INTL_LOCALES["ig"] = _ig.default;
ALL_REACT_INTL_LOCALES["id"] = _id.default;
ALL_REACT_INTL_LOCALES["hy"] = _hy.default;
ALL_REACT_INTL_LOCALES["hu"] = _hu.default;
ALL_REACT_INTL_LOCALES["hsb"] = _hsb.default;
ALL_REACT_INTL_LOCALES["hr"] = _hr.default;
ALL_REACT_INTL_LOCALES["hi"] = _hi.default;
ALL_REACT_INTL_LOCALES["he"] = _he.default;
ALL_REACT_INTL_LOCALES["haw"] = _haw.default;
ALL_REACT_INTL_LOCALES["ha"] = _ha.default;
ALL_REACT_INTL_LOCALES["gv"] = _gv.default;
ALL_REACT_INTL_LOCALES["guz"] = _guz.default;
ALL_REACT_INTL_LOCALES["guw"] = _guw.default;
ALL_REACT_INTL_LOCALES["gu"] = _gu.default;
ALL_REACT_INTL_LOCALES["gsw"] = _gsw.default;
ALL_REACT_INTL_LOCALES["gl"] = _gl.default;
ALL_REACT_INTL_LOCALES["gd"] = _gd.default;
ALL_REACT_INTL_LOCALES["ga"] = _ga.default;
ALL_REACT_INTL_LOCALES["fy"] = _fy.default;
ALL_REACT_INTL_LOCALES["fur"] = _fur.default;
ALL_REACT_INTL_LOCALES["fr"] = _fr.default;
ALL_REACT_INTL_LOCALES["fo"] = _fo.default;
ALL_REACT_INTL_LOCALES["fil"] = _fil.default;
ALL_REACT_INTL_LOCALES["fi"] = _fi.default;
ALL_REACT_INTL_LOCALES["ff"] = _ff.default;
ALL_REACT_INTL_LOCALES["fa"] = _fa.default;
ALL_REACT_INTL_LOCALES["ewo"] = _ewo.default;
ALL_REACT_INTL_LOCALES["eu"] = _eu.default;
ALL_REACT_INTL_LOCALES["et"] = _et.default;
ALL_REACT_INTL_LOCALES["es"] = _es.default;
ALL_REACT_INTL_LOCALES["eo"] = _eo.default;
ALL_REACT_INTL_LOCALES["en"] = _en.default;
ALL_REACT_INTL_LOCALES["el"] = _el.default;
ALL_REACT_INTL_LOCALES["ee"] = _ee.default;
ALL_REACT_INTL_LOCALES["ebu"] = _ebu.default;
ALL_REACT_INTL_LOCALES["dz"] = _dz.default;
ALL_REACT_INTL_LOCALES["dyo"] = _dyo.default;
ALL_REACT_INTL_LOCALES["dv"] = _dv.default;
ALL_REACT_INTL_LOCALES["dua"] = _dua.default;
ALL_REACT_INTL_LOCALES["dsb"] = _dsb.default;
ALL_REACT_INTL_LOCALES["dje"] = _dje.default;
ALL_REACT_INTL_LOCALES["de"] = _de.default;
ALL_REACT_INTL_LOCALES["dav"] = _dav.default;
ALL_REACT_INTL_LOCALES["da"] = _da.default;
ALL_REACT_INTL_LOCALES["cy"] = _cy.default;
ALL_REACT_INTL_LOCALES["cu"] = _cu.default;
ALL_REACT_INTL_LOCALES["cs"] = _cs.default;
ALL_REACT_INTL_LOCALES["ckb"] = _ckb.default;
ALL_REACT_INTL_LOCALES["chr"] = _chr.default;
ALL_REACT_INTL_LOCALES["cgg"] = _cgg.default;
ALL_REACT_INTL_LOCALES["ce"] = _ce.default;
ALL_REACT_INTL_LOCALES["ca"] = _ca.default;
ALL_REACT_INTL_LOCALES["bs"] = _bs.default;
ALL_REACT_INTL_LOCALES["brx"] = _brx.default;
ALL_REACT_INTL_LOCALES["br"] = _br.default;
ALL_REACT_INTL_LOCALES["bo"] = _bo.default;
ALL_REACT_INTL_LOCALES["bn"] = _bn.default;
ALL_REACT_INTL_LOCALES["bm"] = _bm.default;
ALL_REACT_INTL_LOCALES["bh"] = _bh.default;
ALL_REACT_INTL_LOCALES["bg"] = _bg.default;
ALL_REACT_INTL_LOCALES["bez"] = _bez.default;
ALL_REACT_INTL_LOCALES["bem"] = _bem.default;
ALL_REACT_INTL_LOCALES["be"] = _be.default;
ALL_REACT_INTL_LOCALES["bas"] = _bas.default;
ALL_REACT_INTL_LOCALES["az"] = _az.default;
ALL_REACT_INTL_LOCALES["ast"] = _ast.default;
ALL_REACT_INTL_LOCALES["asa"] = _asa.default;
ALL_REACT_INTL_LOCALES["as"] = _as.default;
ALL_REACT_INTL_LOCALES["ars"] = _ars.default;
ALL_REACT_INTL_LOCALES["ar"] = _ar.default;
ALL_REACT_INTL_LOCALES["am"] = _am.default;
ALL_REACT_INTL_LOCALES["ak"] = _ak.default;
ALL_REACT_INTL_LOCALES["agq"] = _agq.default;
ALL_REACT_INTL_LOCALES["af"] = _af.default;
const ALL_HS_LOCALES = {};
ALL_HS_LOCALES["es"] = _es2.default;
ALL_HS_LOCALES["en"] = _en2.default;
delete ALL_ANTD_WEB_LOCALES.default;
delete ALL_ANTD_WEB_LOCALES.index;
delete ALL_ANTD_WEB_LOCALES.LocaleReceiver;
delete ALL_ANTD_MOBILE_LOCALES.index;
delete ALL_ANTD_MOBILE_LOCALES["locale-provider"];
delete ALL_REACT_INTL_LOCALES.index;
const cache = {};
const DEFAULT_LANGUAGE = "en";
exports.DEFAULT_LANGUAGE = DEFAULT_LANGUAGE;
const DEFAULT_REGION = "US";
const DEFAULT_LOCALE = `${DEFAULT_LANGUAGE}-${DEFAULT_REGION}`;
exports.DEFAULT_LOCALE = DEFAULT_LOCALE;
const DEFAULT_ANTD_LOCALE = `${DEFAULT_LANGUAGE}_${DEFAULT_REGION}`;

const DEFAULT_ANTD_LOCALES_GROUPED_BY_LANG = _lodash.default.merge(_lodash.default.mapValues(_lodash.default.groupBy(_lodash.default.keys(ALL_ANTD_WEB_LOCALES), code => code.slice(0, 2)), (codes, key) => {
  if (codes.length === 1) {
    return codes[0];
  }

  const defCode = `${key}_${key.toUpperCase()}`;

  if (codes.includes(defCode)) {
    return defCode;
  }

  return null; // will be added below
}), {
  // e.g. ant has both `en_US` and `en_GB`, but which one wins? Sorry Limeys.
  en: "en_US",
  // same, but for mainland China (`zh_CN`) vs Taiwan (`zh_TW`)
  zh: "zh_CN"
});

const ALL_SUPPORTED_LOCALES = _lodash.default.uniq(_lodash.default.keys(ALL_HS_LOCALES).map(locale => {
  if (locale.split("-").length === 2) {
    return locale;
  }

  return DEFAULT_ANTD_LOCALES_GROUPED_BY_LANG[locale].split("_").join("-");
})).sort();

exports.ALL_SUPPORTED_LOCALES = ALL_SUPPORTED_LOCALES;

function getLocaleData(locale, getAdditionalMessages) {
  const parsed = _carmen.default.parse(locale);

  const language = parsed.language || DEFAULT_LANGUAGE;
  const region = parsed.region || DEFAULT_REGION;
  const localeName = `${language}-${region}`;

  if (!cache[locale]) {
    const antdLocaleName = `${language}_${region}`;

    let antdLocaleData = _lodash.default.merge({}, // AntD web + mobile/rn locale data can be merged cleanly because they have ZERO overlaps.
    // That lack of overlap is an issue of it's own, but it does mean we don't have to worry
    // about any collisions.
    ALL_ANTD_WEB_LOCALES[antdLocaleName] || ALL_ANTD_WEB_LOCALES[DEFAULT_ANTD_LOCALE], ALL_ANTD_MOBILE_LOCALES[antdLocaleName] || ALL_ANTD_MOBILE_LOCALES[DEFAULT_ANTD_LOCALE]);

    if (language !== "en") {
      // `en` is the default react-intl locale, so, we don't need to load it.
      (0, _reactIntl.addLocaleData)([...(ALL_REACT_INTL_LOCALES[language] || ALL_REACT_INTL_LOCALES[DEFAULT_LANGUAGE])]);
    }

    const messages = (0, _flat.default)(ALL_HS_LOCALES[localeName] || // look for `es-ES` first
    ALL_HS_LOCALES[language] || // then `es`
    ALL_HS_LOCALES[DEFAULT_LANGUAGE] // and finally default to `en`
    );
    cache[locale] = {
      antdLocaleData,
      messages,
      intlLocale: language
    };
  }

  const result = _lodash.default.cloneDeep(cache[locale]);

  if (getAdditionalMessages) {
    _lodash.default.extend(result.messages, (0, _flat.default)(getAdditionalMessages({
      language,
      locale: localeName
    })));
  }

  return result;
}
