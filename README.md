# GTFSスナップショット

日進市の**くるりんバス**のGTFS（標準的なバスフォーマット）を可視化するアプリです．

### 利用したインフラ・オープンデータ

- [**くるりんバス**のGTFS](http://www.city.nisshin.lg.jp/shisetsu/bus/022879.html)

### 利用したその他のオープンデータ（オープンソース）

- [Leaflet.js](https://leafletjs.com/)
- [OpenStreetMap](https://openstreetmap.jp/)

### インストール方法

アンドロイド版のインストール・パッケージのみビルドしています．
packageフォルダにある**gtfs-snapshot.apk**を，
アンドロイド端末にダウンロードし，インストールしてください．

### 使用方法

1. 実行するとトップ画面が表示されます．**スタート**をタップしてください．

[![Image from Gyazo](https://i.gyazo.com/2e05e5e7c98b8f548e373e236aeb4070.jpg)](https://gyazo.com/2e05e5e7c98b8f548e373e236aeb4070)

2. メイン画面です．日進市のオープンストリートマップが表示されます．画面下部に操作用のインターフェイスがあります．
バス停を選択すると，選択したバス停が地図でフォーカスされ，時刻表がポップアップで表示されます．
また，スライダーを左右に動かすと，指定時間帯のバスの動きが可視化されます．
このとき，指定時刻から３分以内に到着するバス停は黄色，指定時刻にバスが到着するバス停は緑色，過去３分にバスが通り過ぎたバス停は赤色で表示されます．
スライダーの右にある**プレイ**をタップすると，スライダーは自動で動きます．

[![Image from Gyazo](https://i.gyazo.com/97e63382e7ce8bcc5b2eeabdbc495e7d.jpg)](https://gyazo.com/97e63382e7ce8bcc5b2eeabdbc495e7d)

[![Image from Gyazo](https://i.gyazo.com/fa400fd4924990320ae27c1ccca34bf2.jpg)](https://gyazo.com/fa400fd4924990320ae27c1ccca34bf2)

[![Image from Gyazo](https://i.gyazo.com/8d9dfde6f375702854c5ee7969d23014.jpg)](https://gyazo.com/8d9dfde6f375702854c5ee7969d23014)