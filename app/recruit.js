const request = require("request");
const common = require("./common.js");

module.exports = {
    handleRecruit: handleRecruit
}

function handleRecruit(msg) {

    if (msg.content.startsWith("next")) {
        var strCmd = msg.content.replace(/　/g, " ");
        strCmd = strCmd.replace("  ", " ");
        const args = strCmd.split(" ");
        args.shift();
        if (strCmd.match("〆")) {
            msg.react("👌");
            msg.guild.channels
                .find("id", "698352312309252104")
                .send("``` " + msg.author.username + "の募集 〆```");
        } else {
            request.get("https://splatoon2.ink/data/schedules.json", function (
                error,
                response,
                body
            ) {
                if (!error && response.statusCode == 200) {
                    const data = JSON.parse(body);
                    const l_args = common.getLeague(data, 1).split(",");
                    let txt =
                        "@everyone 【リグマ募集】\n" +
                        msg.author.username +
                        "がリグメン募集中！\n";
                    if (args.length > 0) txt += "[参加条件] " + args.join(" ") + "\n";
                    const stage_a =
                        "https://splatoon2.ink/assets/splatnet" +
                        data.league[1].stage_a.image;
                    const stage_b =
                        "https://splatoon2.ink/assets/splatnet" +
                        data.league[1].stage_b.image;
                    sendLeagueMatch(msg, txt, l_args);
                    msg.guild.channels
                        .find("id", "698352312309252104")
                        .send({ files: [stage_a, stage_b] });
                } else {
                    msg.channel.send("なんかエラーでてるわ");
                }
            });
        }
    }

    if (msg.content.startsWith("now") || msg.content.startsWith("nou")) {
        var strCmd = msg.content.replace(/　/g, " ");
        strCmd = strCmd.replace("  ", " ");
        const args = strCmd.split(" ");
        args.shift();
        if (strCmd.match("〆")) {
            msg.react("👌");
            msg.guild.channels
                .find("id", "698352312309252104")
                .send("``` " + msg.author.username + "の募集 〆```");
        } else {
            request.get("https://splatoon2.ink/data/schedules.json", function (
                error,
                response,
                body
            ) {
                if (!error && response.statusCode == 200) {
                    const data = JSON.parse(body);
                    const l_args = common.getLeague(data, 0).split(",");
                    let txt =
                        "@everyone 【リグマ募集】\n" +
                        msg.author.username +
                        "がリグメン募集中！\n";
                    if (args.length > 0) txt += "[参加条件] " + args.join(" ") + "\n";
                    const stage_a =
                        "https://splatoon2.ink/assets/splatnet" +
                        data.league[0].stage_a.image;
                    const stage_b =
                        "https://splatoon2.ink/assets/splatnet" +
                        data.league[0].stage_b.image;
                    sendLeagueMatch(msg, txt, l_args);
                    msg.guild.channels
                        .find("id", "698352312309252104")
                        .send({ files: [stage_a, stage_b] });
                } else {
                    msg.channel.send("なんかエラーでてるわ");
                }
            });
        }
    }

    if (msg.content.startsWith("nawabari")) {
        var strCmd = msg.content.replace(/　/g, " ");
        strCmd = strCmd.replace("  ", " ");
        const args = strCmd.split(" ");
        args.shift();
        if (strCmd.match("〆")) {
            msg.react("👌");
            msg.guild.channels
                .find("id", "698352312309252104")
                .send("```" + msg.author.username + "の募集 〆```");
        } else {
            request.get("https://splatoon2.ink/data/schedules.json", function (
                error,
                response,
                body
            ) {
                if (!error && response.statusCode == 200) {
                    const data = JSON.parse(body);
                    const stage_a =
                        "https://splatoon2.ink/assets/splatnet" +
                        data.regular[0].stage_a.image;
                    const stage_b =
                        "https://splatoon2.ink/assets/splatnet" +
                        data.regular[0].stage_b.image;
                    let txt =
                        "@everyone 【ナワバリ募集】\n" +
                        msg.author.username +
                        "がナワバリ中！\n";
                    if (args.length > 0) txt += "[参加条件] " + args.join(" ") + "\n";
                    txt += "よければ合流しませんか？";
                    const date =
                        common.unixTime2mdwhm(data.regular[0].start_time) +
                        " – " +
                        common.unixTime2mdwhm(data.regular[0].end_time);
                    const regular_stage =
                        common.stage2txt(data.regular[0].stage_a.id) +
                        "\n" +
                        common.stage2txt(data.regular[0].stage_b.id) +
                        "\n";

                    msg.guild.channels.find("id", "698352312309252104").send(txt, {
                        embed: {
                            author: {
                                name: "レギュラーマッチ",
                                icon_url: "https://splatoon2.ink/assets/img/battle-regular.01b5ef.png"
                            },
                            color: 1693465,
                            fields: [{
                                name: date,
                                value: regular_stage
                            }],
                            thumbnail: {
                                url: "https://splatoon2.ink/assets/img/battle-regular.01b5ef.png"
                            }
                        }
                    });
                    msg.guild.channels
                        .find("id", "698352312309252104")
                        .send({ files: [stage_a, stage_b] });
                } else {
                    msg.channel.send("なんかエラーでてるわ");
                }
            });
        }
    }

    if (msg.content.startsWith("run")) {
        var strCmd = msg.content.replace(/　/g, " ");
        strCmd = strCmd.replace("  ", " ");
        const args = strCmd.split(" ");
        args.shift();
        if (strCmd.match("〆")) {
            msg.react("👌");
            msg.guild.channels
                .find("id", "698352312309252104")
                .send("``` " + msg.author.username + "の募集 〆```");
        } else {
            request.get("https://splatoon2.ink/data/coop-schedules.json", function (
                error,
                response,
                body
            ) {
                if (!error && response.statusCode == 200) {
                    const data = JSON.parse(body);
                    const stage =
                        "https://splatoon2.ink/assets/splatnet" +
                        data.details[0].stage.image;
                    let txt =
                        "@everyone 【バイト募集】\n" +
                        msg.author.username +
                        "がバイト中！\n";
                    if (args.length > 0) txt += "[参加条件] " + args.join(" ") + "\n";
                    txt += "よければ合流しませんか？";
                    const date =
                        common.unixTime2mdwhm(data.details[0].start_time) +
                        " – " +
                        common.unixTime2mdwhm(data.details[0].end_time);
                    const coop_stage = common.coop_stage2txt(data.details[0].stage.image) + "\n";
                    const weapons =
                        (data.details[0].weapons[0] ?
                            common.weapon2txt(data.details[0].weapons[0].id) :
                            "？") +
                        "・" +
                        (data.details[0].weapons[1] ?
                            common.weapon2txt(data.details[0].weapons[1].id) :
                            "？") +
                        "・" +
                        (data.details[0].weapons[2] ?
                            common.weapon2txt(data.details[0].weapons[2].id) :
                            "？") +
                        "・" +
                        (data.details[0].weapons[3] ?
                            common.weapon2txt(data.details[0].weapons[3].id) :
                            "？");

                    msg.guild.channels.find("id", "698352312309252104").send(txt, {
                        embed: {
                            author: {
                                name: "SALMON RUN",
                                icon_url: "https://splatoon2.ink/assets/img/salmon-run-mini.aee5e8.png"
                            },
                            title: date,
                            color: 16733696,
                            fields: [{
                                name: weapons,
                                value: coop_stage
                            }],
                            image: {
                                url: stage
                            }
                        }
                    });
                } else {
                    msg.channel.send("なんかエラーでてるわ");
                }
            });
        }
    }

    if (msg.content.startsWith("fn")) {
        sendOtherGamesRecruite(msg, "フォートナイト", "");
    }

    if (msg.content.startsWith("mk")) {
        sendOtherGamesRecruite(msg, "マリオカート", "");
    }

    if (msg.content.startsWith("mc")) {
        sendOtherGamesRecruite(msg, "マインクラフト", "");
    }

    if (msg.content.startsWith("oc")) {
        sendOtherGamesRecruite(msg, "オーバークロック2", "");
    }

    if (msg.content.startsWith("sb")) {
        sendOtherGamesRecruite(msg, "スマブラSP", "");
    }

    if (msg.content.startsWith("mh")) {
        sendOtherGamesRecruite(msg, "モンハンワールド", "");
    }

    if (msg.content.startsWith("!apex")) {
        sendOtherGamesRecruite(msg, "ApexLegends", "");
    }

    if (msg.content.startsWith("!dbd")) {
        sendOtherGamesRecruite(msg, "Dead by Daylight", "");
    }
}

function sendOtherGamesRecruite(msg, gameName, imageUrl) {
    var strCmd = msg.content.replace(/　/g, " ");
    strCmd = strCmd.replace("  ", " ");
    const args = strCmd.split(" ");
    args.shift();
    if (args[0] == "〆") {
        msg.react("👌");
        msg.guild.channels
            .find("id", "698352312309252104")
            .send("``` " + msg.author.username + "の募集 〆```");
    } else {
        let txt =
            "@everyone 【" + gameName +"】\n" +
            msg.author.username +
            "が参加者募集中！\n";
        if (args.length > 0) txt += ">>> [参加条件] " + args.join(" ");
        msg.guild.channels.find("id", "698352312309252104").send(txt, {
            files: [imageUrl]
        });
    }
}

function sendLeagueMatch(msg, txt, l_args) {
    var l_date = l_args[0];
    var l_rule = l_args[1];
    var l_stage = l_args[2];
    var tuhmbnail_url;

    if (l_rule == "ガチエリア") {
        tuhmbnail_url =
            "https://cdn.glitch.com/4ea6ca87-8ea7-482c-ab74-7aee445ea445%2Fobject_area.png";
    } else if (l_rule == "ガチヤグラ") {
        tuhmbnail_url =
            "https://cdn.glitch.com/4ea6ca87-8ea7-482c-ab74-7aee445ea445%2Fobject_yagura.png";
    } else if (l_rule == "ガチホコバトル") {
        tuhmbnail_url =
            "https://cdn.glitch.com/4ea6ca87-8ea7-482c-ab74-7aee445ea445%2Fobject_hoko.png";
    } else if (l_rule == "ガチアサリ") {
        tuhmbnail_url =
            "https://cdn.glitch.com/4ea6ca87-8ea7-482c-ab74-7aee445ea445%2Fobject_asari.png";
    } else {
        tuhmbnail_url =
            "https://cdn.glitch.com/4ea6ca87-8ea7-482c-ab74-7aee445ea445%2Fleague.png";
    }

    msg.guild.channelsfind("id", "698352312309252104").send(txt, {
        embed: {
            author: {
                name: "リーグマッチ",
                icon_url: "https://cdn.glitch.com/4ea6ca87-8ea7-482c-ab74-7aee445ea445%2Fleague.png"
            },
            color: 0xf02d7d,
            fields: [{
                name: l_date + "　" + l_rule,
                value: l_stage
            }],
            thumbnail: {
                url: tuhmbnail_url
            }
        }
    });
}