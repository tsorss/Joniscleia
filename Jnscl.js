(function () {

    function extend() {
            if (!window.bot) {
            return setTimeout(extend, 1 * 1000);
        }

        var bot = window.bot;

        bot.retrieveSettings();

        bot.commands.cookieCommand.cookies =['deu-lhe um biscoito de chocolate!',
                    'te deu uma Bolacha de aveia caseira macia!',
                    'te deu uma Bolacha podre. Era a última do pacote.',
                    'te deu uma Bolacha sabor Arroz.',
                    'deu-lhe um biscoito de chocolate. Oh, não, são passas.',
                    'te deu uma Bolacha gigante. Quando é tocada, se duplica numa outra bolacha... estranho',
                    'te deu um biscoito da sorte, tem escrito: "Por que você não está trabalhando.',
                    'te deu um biscoito da sorte, tem escrito: "Cumprimente agora a pessoa que você ama"',
                    'te deu um biscoito da sorte, tem escrito: "Arrisque-se!"',
                    'te deu um biscoito da sorte, tem escrito: "Saia desse computador!"',
                    'te deu um biscoito da sorte, tem escrito: "Não esqueça de comer os vegetais"',
                    'te deu um biscoito da sorte, tem escrito: "Se você mecher o quadril, vão te achar sexy!',
                    'te deu um biscoito da sorte, tem escrito: "Eu te amo"',
                    'te deu uma Bolacha de ouro, mas não dá pra comer... Merda!',
                    'te deu um Oreo e um copo de leite.',
                    'te deu uma Bolacha de arco-íris feito com águas do tietê :heart:',
                    'te deu uma Bolacha que foi esquecida na chuva... eu não comeria.',
                    'te trouxe bolachas fresquinhas... parecem deliciosas!'
                ];

        bot.loadChat();
    }

    
    localStorage.setItem("basicBotsettings", JSON.stringify({
        botName: "JoniscléiaBot",
        language: "portuguese",
        chatLink: "https://rawgit.com/Yemasthui/basicBot/master/lang/pt.json",
        maximumAfk: 120,
        afkRemoval: true,
        maximumDc: 120,
        bouncerPlus: true,
        lockdownEnabled: false,
        lockGuard: false,
        maximumLocktime: 10,
        cycleGuard: true,
        maximumCycletime: 10,
        timeGuard: true,
        maximumSongLength: 10,
        autodisable: true,
        commandCooldown: 3,
        usercommandsEnabled: true,
        lockskipPosition: 3,
        lockskipReasons: [
                ["tema", "A música não se encaixa nos padrões da sala. "],
                ["op", "Essa música está na lista OverPLayed. "],
                ["historico", "A música ainda está no histórico. "],
                ["mix", "Você tocou um mix (muito longo) - não permitido. "],
                ["som", "A música que você tocou tinha má qualidade ou estava sem som. "],
                ["nsfw", "A música que você tocou é NSFW (impróprio). "],
                ["indisponivel", "A música que você tocou está indisponível. "]
            ],
        afkpositionCheck: 15,
        afkRankCheck: "ambassador",
        motdEnabled: true,
        motdInterval: 8,
        motd: "!roulette",
        filterChat: true,
        etaRestriction: true,
        welcome: false,
        opLink: null,
        rulesLink: null,
        themeLink: null,
        fbLink: "https://www.facebook.com/",
        youtubeLink: null,
        website: "https://www.facebook.com/",
        intervalMessages: [1],
        messageInterval: 5,
        songstats: false,
        commandLiteral: "!"
    }));

    $.getScript('https://rawgit.com/Yemasthui/basicBot/master/basicBot.js', extend);

}).call(this);
