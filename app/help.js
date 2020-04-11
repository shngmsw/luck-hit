module.exports = {
  handleHelp: handleHelp
}

function handleHelp(msg) {
    var strCmd = msg.content.replace(/　/g, ' ');
    strCmd = strCmd.replace('  ', ' ');
    const args = strCmd.split(' ');
    args.shift();
    if (args[0] == '2') {
        msg.channel.send('', {
            embed: {
                author: {
                    name: 'ねずこちゃんの使い方(2/2)',
                },
                title: 'ねずこちゃんの使い方(2/2)',
                color: 0x1bc2a5,
                fields: [{
                        name: 'ステージ情報を表示[now / next / nawabari / run]',
                        value: '```show ○○○```\n',
                    },
                    {
                        name: 'ランダム系コマンド',
                        value: 'ブキをランダムで選出：```buki 複数の場合は数字を記入```\n' +
                            'ブキ種別ごとのランダム選出方法を表示：```buki help```\n' +
                            'ガチルールをランダムで選出：```rule```\n' +
                            'ガチルールとステージをランダムで選出：```rule stage```\n' +
                            'サブウェポンをランダムで選出：```sub```\n' +
                            'スペシャルウェポンをランダムで選出：```special```',
                    },
                    {
                        name: '選択肢の中からランダム選出',
                        value: '```pick 複数選出の場合は数字を記入 選択肢を半スペ空け or 改行して記入```',
                    },
                    {
                        name: '接続してるボイチャから数字分のヒトをランダム抽出',
                        value: '```vpick 複数選出の場合は数字を記入```',
                    },
                    {
                        name: 'プラベの観戦者を抽出',
                        value: '```kansen 試合回数分の数字を記入```',
                    },
                    {
                        name: '自分のフレンドコードを表示',
                        value: '```fc @自分```\n「フレンドコード」チャンネルの直近100件に書いてあればそちらを優先します。',
                    },
                    {
                        name: '自分のフレンドコードを登録',
                        value: '```fcadd 0000-0000-0000```\nもう一度登録すると上書きされます。他人のは登録できません。',
                    },
                    {
                        name: 'wikipediaで調べる',
                        value: '```wiki 〇〇```',
                    },
                ],
            },
        });
    } else {
        msg.channel.send('', {
            embed: {
                author: {
                    name: 'ねずこちゃんの使い方(1/2)',
                },
                title: 'ねずこちゃんの使い方(1/2)',
                color: 0x1bc2a5,
                fields: [{
                        name: 'botのコメンド一覧を表示',
                        value: '```help または help 2```',
                    },
                    {
                        name: '現在のリグマ情報を表示して募集',
                        value: '```now 参加条件があれば記載```\n',
                    },
                    {
                        name: '次回のリグマ情報を表示して募集',
                        value: '```next 参加条件があれば記載```\n',
                    },
                    {
                        name: '現在のナワバリ情報を表示して募集',
                        value: '```nawabari 参加条件があれば記載```\n',
                    },
                    {
                        name: 'サーモンラン情報を表示して募集',
                        value: '```run 参加条件があれば記載```\n',
                    },
                    {
                        name: '別ゲー募集コマンド',
                        value: 'フォートナイト：```fn 参加条件があれば記載```\n' +
                            'マリオカート：```mk 参加条件があれば記載```\n' +
                            'MINECRAFT：```mc 参加条件があれば記載```\n' +
                            'オーバークック2：```oc 参加条件があれば記載```\n' +
                            'スマブラSP：```sb 参加条件があれば記載```\n' +
                            'Dead by Daylight：```!dbd 参加条件があれば記載```\n' +
                            'モンスターハンター：```mh 参加条件があれば記載```\n' +
                            'ApexLegends：```!apex 参加条件があれば記載```\n'
                    },
                    {
                        name: 'ヒメ派のフェスメンバーを募集',
                        value: '```fes a 参加条件があれば記載```',
                    },
                    {
                        name: 'イイダ派のフェスメンバーを募集',
                        value: '```fes b 参加条件があれば記載```',
                    },
                    {
                        name: '役職に応じて自動でフェスメンバーを募集\n※ヒメ派、イイダ派どちらかを投票して役職がついてる場合のみ',
                        value: '```fes 参加条件があれば記載```',
                    },
                ],
            },
        });
    }
}