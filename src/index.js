var config = {
  template: "metro",
  reverseArrow: false,
  orientation: "vertical"
};
var gitGraph = new GitGraph(config);

var master = gitGraph.branch({
  name: "master",
  // 菊池 真
  color: "#515558",
  commitDefaultOptions: {
    color: "#515558"
  }
});
master.commit({
  sha1: "1990/01/22",
  message: "彰平爆誕",
  author: "竹井 彰平 <shy_azusa@gmail.com>"
});
master.commit({
  sha1: "2005/03/31",
  message: "横浜市立 日吉台中学校 卒業",
  author: "竹井 彰平 <shy_azusa@gmail.com>"
});
var kishine = gitGraph.branch({
  name: "kishine",
  color: "#04A165",
  commitDefaultOptions: {
    color: "#04A165"
  }
});
kishine.commit({
  sha1: "2005/04/01",
  message: "神奈川県立 岸根高等学校 普通科 入学",
  author: "竹井 彰平 <shy_azusa@gmail.com>"
});
kishine.commit({
  sha1: "2008/03/31",
  message: "神奈川県立 岸根高等学校 普通科 卒業",
  author: "竹井 彰平 <shy_azusa@gmail.com>"
});
kishine.merge(master, {
  author: "竹井 彰平 <shy_azusa@gmail.com>"
});
kishine.delete();
var hal = gitGraph.branch({
  name: "hal",
  color: "#053E9C",
  commitDefaultOptions: {
    color: "#053E9C"
  }
});
hal.commit({
  sha1: "2010/04/01",
  message: "HAL東京 先端ロボット開発学科 入学",
  author: "竹井 彰平 <shy_azusa@gmail.com>"
});
master.commit({
  sha1: "2010/04/26",
  message: "日吉から逗子へ引っ越し",
  author: "竹井 彰平 <shy_azusa@gmail.com>"
});
master.commit({
  sha1: "2012/04/29",
  message: "逗子から逗子へ引っ越し",
  author: "竹井 彰平 <shy_azusa@gmail.com>"
});
hal.commit({
  sha1: "2013/03/31",
  message: "HAL Event Week 金賞 受賞",
  author: "竹井 彰平 <shy_azusa@gmail.com>"
});
master.commit({
  sha1: "2013/08/19",
  // 前川みく
  color: "#CA113A",
  message: "一家離散",
  author: "竹井 彰平 <shy_azusa@gmail.com>"
});
master.commit({
  sha1: "2013/09/02",
  message: "逗子から大倉山へ引っ越し",
  author: "竹井 彰平 <shy_azusa@gmail.com>"
});
master.commit({
  sha1: "2013/09/03",
  color: "#01ADB9",
  message: "兄との二人暮らしスタート",
  author: "竹井 彰平 <shy_azusa@gmail.com>"
});
hal.commit({
  sha1: "2014/03/31",
  message: "HAL東京 先端ロボット開発学科 卒業",
  author: "竹井 彰平 <shy_azusa@gmail.com>"
});
hal.merge(master, {
  author: "竹井 彰平 <shy_azusa@gmail.com>"
});
hal.delete();
var geocode = gitGraph.branch({
  name: "geocode",
  color: "#03A3E1",
  commitDefaultOptions: {
    color: "#03A3E1"
  }
});
geocode.commit({
  sha1: "2014/04/01",
  message: "株式会社ジオコード 入社",
  author: "竹井 彰平 <shy_azusa@gmail.com>"
});
geocode.commit({
  sha1: "2014/07",
  message: "社内インフラツールなど開発",
  author: "竹井 彰平 <shy_azusa@gmail.com>"
});
geocode.commit({
  sha1: "2014/10",
  message: "人事評価ツール開発",
  author: "竹井 彰平 <shy_azusa@gmail.com>"
});
geocode.commit({
  sha1: "2014/11",
  message: "SEO順位レポートツール開発",
  author: "竹井 彰平 <shy_azusa@gmail.com>"
});
geocode.commit({
  sha1: "2014/12 ",
  message: "代理店用レポートツール開発",
  author: "竹井 彰平 <shy_azusa@gmail.com>"
});
geocode.commit({
  sha1: "2015/01",
  message: "基幹システム連動API開発",
  author: "竹井 彰平 <shy_azusa@gmail.com>"
});
geocode.commit({
  sha1: "2015/04",
  message: "リスティング管理ツール開発",
  author: "竹井 彰平 <shy_azusa@gmail.com>"
});
geocode.commit({
  sha1: "2015/08",
  message: "営業支援ツール開発",
  author: "竹井 彰平 <shy_azusa@gmail.com>"
});
geocode.commit({
  sha1: "2015/10",
  message: "勤怠交通費清算アプリ開発",
  author: "竹井 彰平 <shy_azusa@gmail.com>"
});
master.commit({
  sha1: "2017/04/12",
  message: "Apple Watch購入",
  author: "竹井 彰平 <shy_azusa@gmail.com>"
});
geocode.commit({
  sha1: "2017/07/31",
  message: "株式会社ジオコード 退職",
  author: "竹井 彰平 <shy_azusa@gmail.com>"
});
geocode.merge(master, {
  author: "竹井 彰平 <shy_azusa@gmail.com>"
});
geocode.delete();
var temona = gitGraph.branch({
  name: "temona",
  color: "#DB5512",
  commitDefaultOptions: {
    color: "#DB5512"
  }
});
temona.commit({
  sha1: "2017/08/01",
  message: "テモナ株式会社 入社",
  author: "竹井 彰平 <shy_azusa@gmail.com>"
});
master.commit({
  sha1: "2017/11/19",
  message: "iPhone 8購入",
  author: "竹井 彰平 <shy_azusa@gmail.com>"
});
temona.commit({
  sha1: "2017/08/01",
  message: "単品通販システム開発",
  author: "竹井 彰平 <shy_azusa@gmail.com>"
});
temona.commit({
  sha1: "2018/04/01",
  message: "リーダになる",
  author: "竹井 彰平 <shy_azusa@gmail.com>"
});
master.commit({
  sha1: "2018/11/02",
  message: "ポケモンカードを購入",
  author: "竹井 彰平 <shy_azusa@gmail.com>"
});
master.commit({
  sha1: "2018/12/07",
  message: "スマブラSPを購入",
  author: "竹井 彰平 <shy_azusa@gmail.com>"
});
