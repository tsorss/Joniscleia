(function () {

    function extend() {
            if (!window.bot) {
            return setTimeout(extend, 1 * 1000);
        }

        var bot = window.bot;

        bot.retrieveSettings();

        bot.commands.cookieCommand.cookies =['te deu uma bolacha de chocolate!',
                    'te deu uma Bolacha de aveia!',
                    'te deu uma Bolacha podre. Era a última do pacote.',
                    'te deu uma Bolacha sabor Arroz.',
                    'deu-lhe um biscoito de chocolate. Oh, não, são passas.',
                    'te deu uma Bolacha gigante. Quando é tocada, se duplica numa outra bolacha... estranho',
                    'te deu um biscoito da sorte, escrito: "A Rapadura é doce mas não é mole não!"',
                    'te deu um biscoito da sorte, escrito: "Deus Tá vendo essa tua zoeira."',
                    'te deu um biscoito da sorte, escrito: "Fica de olho nesse teu cu!"',
                    'te deu um biscoito da sorte, escrito: "Vou Rarkear!"',
                    'te deu um biscoito da sorte, escrito: "Apanga!"',
                    'te deu um biscoito da sorte, escrito: "Filho ta punta!"',
                    'te deu um biscoito da sorte, escrito: "Vai si funte!"',
                    'te deu uma Bolacha de ouro, mas não dá pra comer... Merda!',
                    'te deu uma Bolacha água e sal e um copo de Xamego.',
                    'te deu uma Bolacha de Merda feito com águas do tietê :poop:',
                    'te deu uma Bolacha que foi esquecida na chuva... eu não comeria.',
                    'te trouxe bolachas arficanas... parecem estar com Ebola!'
                ];

        bot.loadChat();
    }

    
    localStorage.setItem("basicBotsettings", JSON.stringify({
        botName: "JoniscléiaBot",
        language: "portuguese",
        chatLink: "https://rawgit.com/tsorss/Joniscleia/master/chat.js",
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

    $.getScript('https://rawgit.com/tsorss/Joniscleia/master/cht.js', extend);

}).call(this);
