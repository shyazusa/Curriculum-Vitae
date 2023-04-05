var config = {
  template: "metro",
  reverseArrow: false,
  orientation: "vertical"
};
var gitGraph = new GitGraph(config);

var master = gitGraph.branch({
  name: "master",
  color: "#9238BE",
  commitDefaultOptions: {
    color: "#9238BE"
  }
});
master.commit({
  message: "1990/01/22 彰平爆誕",
  author: "竹井 彰平 <shy.azusa@gmail.com>"
});
master.commit({
  message: "2005/03/31 横浜市立 日吉台中学校 卒業",
  author: "竹井 彰平 <shy.azusa@gmail.com>"
});
master.commit({
  message: "2005/04/01 神奈川県立 岸根高等学校 普通科 入学",
  author: "竹井 彰平 <shy.azusa@gmail.com>"
});
master.commit({
  message: "2008/03/31 神奈川県立 岸根高等学校 普通科 卒業",
  author: "竹井 彰平 <shy.azusa@gmail.com>"
});
var hal = gitGraph.branch({
  name: "hal",
  color: "#053E9C",
  commitDefaultOptions: {
    color: "#053E9C"
  }
});
hal.commit({
  message: "2010/04/01 HAL東京 先端ロボット開発学科 入学",
  author: "竹井 彰平 <shy.azusa@gmail.com>"
});
hal.commit({
  message: "2014/03/31 HAL Event Week 金賞 受賞",
  author: "竹井 彰平 <shy.azusa@gmail.com>"
});
hal.merge(master, {message: "2014/03/31 HAL東京 先端ロボット開発学科 卒業", author: "竹井 彰平 <shy.azusa@gmail.com>"});
var geocode = gitGraph.branch({
  name: "geocode",
  color: "#03A3E1",
  commitDefaultOptions: {
    color: "#03A3E1"
  }
});
geocode.commit({
  message: "2014/04/01 株式会社ジオコード 入社",
  author: "竹井 彰平 <shy.azusa@gmail.com>"
});
geocode.commit({
  message: "2014/07 社内インフラツールなど開発",
  author: "竹井 彰平 <shy.azusa@gmail.com>"
});
geocode.commit({
  message: "2014/10 人事評価ツール開発",
  author: "竹井 彰平 <shy.azusa@gmail.com>"
});
geocode.commit({
  message: "2014/11 SEO順位レポートツール開発",
  author: "竹井 彰平 <shy.azusa@gmail.com>"
});
geocode.commit({
  message: "2014/12 代理店用レポートツール開発",
  author: "竹井 彰平 <shy.azusa@gmail.com>"
});
geocode.commit({
  message: "2015/01 基幹システム連動API開発",
  author: "竹井 彰平 <shy.azusa@gmail.com>"
});
geocode.commit({
  message: "2015/04 リスティング管理ツール開発",
  author: "竹井 彰平 <shy.azusa@gmail.com>"
});
geocode.commit({
  message: "2015/08 営業支援ツール開発",
  author: "竹井 彰平 <shy.azusa@gmail.com>"
});
geocode.commit({
  message: "2015/10 勤怠交通費清算アプリ開発",
  author: "竹井 彰平 <shy.azusa@gmail.com>"
});
geocode.merge(master, {message: "2017/07/31 株式会社ジオコード 退職", author: "竹井 彰平 <shy.azusa@gmail.com>"});
var temona = gitGraph.branch({
  name: "temona",
  color: "#FA8333",
  commitDefaultOptions: {
    color: "#FA8333"
  }
});
temona.commit({
  message: "2017/08/01 テモナ株式会社 入社",
  author: "竹井 彰平 <shy.azusa@gmail.com>"
});
temona.commit({
  message: "2017/08 単品通販システム開発",
  author: "竹井 彰平 <shy.azusa@gmail.com>"
});
temona.merge(master, {message: "2019/10/31 テモナ株式会社 退職", author: "竹井 彰平 <shy.azusa@gmail.com>"});
var speee = gitGraph.branch({
  name: "speee",
  color: "#01268E",
  commitDefaultOptions: {
    color: "#01268E"
  }
});
speee.commit({
  message: "2019/11/01 株式会社Speee 入社",
  author: "竹井 彰平 <shy.azusa@gmail.com>"
});
speee.commit({
  message: "2019/11/01 リフォーム事業開発",
  author: "竹井 彰平 <shy.azusa@gmail.com>"
});
speee.merge(master, {message: "2023/03/31 株式会社Speee 退職", author: "竹井 彰平 <shy.azusa@gmail.com>"});
var lincwell = gitGraph.branch({
  name: "lincwell",
  color: "#52B5E9",
  commitDefaultOptions: {
    color: "#52B5E9"
  }
});
speee.commit({
  message: "2023/04/01 株式会社Linc'well 入社",
  author: "竹井 彰平 <shy.azusa@gmail.com>"
});
speee.commit({
  message: "2023/04/01 オンライン診療開発",
  author: "竹井 彰平 <shy.azusa@gmail.com>"
});
