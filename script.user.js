// ==UserScript==
// @name            Hangouts Design Theme for Google Chat Web
// @name:de         Hangouts Design Theme für Google Chat Web
// @version         1.0.3
// @description     Use Google Chat Web with the old Hangouts Design Theme
// @description:de  Google Chat Web mit dem alten Hangouts-Design-Theme verwenden
// @icon            https://ssl.gstatic.com/ui/v1/icons/mail/images/favicon_chat_r2.ico
// @author          TalkLounge (https://github.com/TalkLounge)
// @namespace       https://github.com/TalkLounge/hangouts-design-theme-for-google-chat-web
// @license         MIT
// @match           https://mail.google.com/chat/*
// @match           https://chat.google.com/u/0/*
// @require         https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js
// @grant           GM.setValue
// @grant           GM.getValue
// @grant           GM.deleteValue
// ==/UserScript==

(function ($, undefined) { // Safe jQuery import, Thanks to https://stackoverflow.com/a/29363547
    $(async function () {
        const BACKGROUNDS = [
            { // Bird
                src: "https://www.gstatic.com/chat/hangouts/bg/f466d78212377293b5b745200add730f-stclair.jpg",
                srcAlt: "",
                author: "Tim St. Clair",
                profile: "https://www.gstatic.com/chat/hangouts/bg/photographer/TimStClair.jpg",
                profileAlt: ""
            },
            { // Corn Field
                src: "https://www.gstatic.com/chat/hangouts/bg/8b5e7ba224b738d2230391a5a15802bb-davec.jpg",
                srcAlt: "",
                author: "Dave Cohen",
                profile: "https://www.gstatic.com/chat/hangouts/bg/photographer/DaveCohen.jpg",
                profileAlt: ""
            },
            { // Pink Flower with Bee
                src: "https://www.gstatic.com/chat/hangouts/bg/2f1c3d68387ec036b4e49469c3289dae-GregSpencerDude.jpg",
                srcAlt: "",
                author: "Greg Spencer",
                profile: "https://www.gstatic.com/chat/hangouts/bg/photographer/GregSpencer.jpg",
                profileAlt: ""
            },
            { // Green Plant with Dragonfly
                src: "https://www.gstatic.com/chat/hangouts/bg/1d1d6f6311e7950d18720796905a4cbd-AnushElangovan-02.jpg",
                srcAlt: "",
                author: "Anush Elangovan",
                profile: "https://www.gstatic.com/chat/hangouts/bg/photographer/AnushElangovan.jpg",
                profileAlt: ""
            },
            { // Mountains with Pink Sky
                src: "https://www.gstatic.com/chat/hangouts/bg/734d92065df4177a006d5438caa46ae1-AKrishnaswamy-01.jpg",
                srcAlt: "",
                author: "Aravind Krishnaswamy",
                profile: "https://www.gstatic.com/chat/hangouts/bg/photographer/AravindKrishnaswamy.jpg",
                profileAlt: ""
            },
            { // Sheep Flock with Dog
                src: "https://www.gstatic.com/chat/hangouts/bg/c08b5d898d4000793c509ed40f804e2a-Matiash-03.jpg",
                srcAlt: "",
                author: "Brian Matiash",
                profile: "https://www.gstatic.com/chat/hangouts/bg/photographer/BrianMatiash.jpg",
                profileAlt: ""
            },
            { // Tourist Spot: Moai
                src: "https://www.gstatic.com/chat/hangouts/bg/e4c50a95c0148bb14931a73c2ae80d35-AnushElangovan-01.jpg",
                srcAlt: "",
                author: "Anush Elangovan",
                profile: "https://www.gstatic.com/chat/hangouts/bg/photographer/AnushElangovan.jpg",
                profileAlt: ""
            },
            { // Lake with Dark Clouds
                src: "https://www.gstatic.com/chat/hangouts/bg/d737e8519d5e7d6e0fe5fec9e35b2e2c-echang.jpg",
                srcAlt: "",
                author: "Emily Chang",
                profile: "https://www.gstatic.com/chat/hangouts/bg/photographer/EmilyChang.jpg",
                profileAlt: ""
            },
            { // Orange Flower
                src: "https://www.gstatic.com/chat/hangouts/bg/74474c3fc567f4dd012954c96e58d8d6-ChristopherJohnson.jpg",
                srcAlt: "",
                author: "Christopher Johnson",
                profile: "https://www.gstatic.com/chat/hangouts/bg/photographer/ChristopherJohnson.jpg",
                profileAlt: ""
            },
            { // Mossy Tree with River
                src: "https://www.gstatic.com/chat/hangouts/bg/cbccbd84d54a52e3ba7b148f2711b629-Matiash-02.jpg",
                srcAlt: "",
                author: "Brian Matiash",
                profile: "https://www.gstatic.com/chat/hangouts/bg/photographer/BrianMatiash.jpg",
                profileAlt: ""
            },
            { // Two Lions
                src: "https://www.gstatic.com/chat/hangouts/bg/650ec88f5cc9e0c827fe6ac61117211d-VidyaNagarajan.jpg",
                srcAlt: "",
                author: "Vidya Nagarajan",
                profile: "https://www.gstatic.com/chat/hangouts/bg/photographer/VidyaNagarajan.jpg",
                profileAlt: ""
            },
            { // Nature Waterfall
                src: "https://www.gstatic.com/chat/hangouts/bg/bbafcf27dfe823a255e7fa549b5b6ba5-Matiash-01.jpg",
                srcAlt: "",
                author: "Brian Matiash",
                profile: "https://www.gstatic.com/chat/hangouts/bg/photographer/BrianMatiash.jpg",
                profileAlt: ""
            },
            { // Coast Line
                src: "https://www.gstatic.com/chat/hangouts/bg/a968e293d984aa05eee42df9a8d91dc2-AKrishnaswamy-03.jpg",
                srcAlt: "",
                author: "Aravind Krishnaswamy",
                profile: "https://www.gstatic.com/chat/hangouts/bg/photographer/AravindKrishnaswamy.jpg",
                profileAlt: ""
            },
            { // Snowy Valley
                src: "https://www.gstatic.com/chat/hangouts/bg/b4a063d93b237f1e21c1bd2ef77d2c45-PaulMoody.jpg",
                srcAlt: "",
                author: "Paul Moody",
                profile: "https://www.gstatic.com/chat/hangouts/bg/photographer/PaulMoody.jpg",
                profileAlt: ""
            },
            { // Three Light Aircrafts
                src: "https://www.gstatic.com/chat/hangouts/bg/47b6231b6b9171fefbdda2f4750f1fda-nbutko.jpg",
                srcAlt: "",
                author: "Nicholas Butko",
                profile: "https://www.gstatic.com/chat/hangouts/bg/photographer/NicholasButko.jpg",
                profileAlt: ""
            },
            { // Valley with big Lake
                src: "https://www.gstatic.com/chat/hangouts/bg/1cfdd2ae9f28d352d2853628cdb70659-TreyRatcliff.jpg",
                srcAlt: "",
                author: "Trey Ratcliff",
                profile: "https://www.gstatic.com/chat/hangouts/bg/photographer/TreyRatcliff.jpg",
                profileAlt: ""
            }
        ];
        const TRANSLATIONS = { en: "Photo by", de: "Foto von" };
        const LANG = navigator.language || navigator.userLanguage;
        const TRANSLATION = TRANSLATIONS[LANG] || TRANSLATIONS["en"];
        let interval;

        function insertStyle(styles) {
            const html = `
            <style>
                ${styles.trim()}
            </style>
            `.trim();

            const child = $.parseHTML(html);
            $("head").append(child);
        }

        function insertBackground() {
            const ran = Math.floor(Math.random() * (BACKGROUNDS.length - 1));
            const html = `
            <div class="HDfGC-bg">
                <div class="HDfGC-bg-img"></div>
                <div class="HDfGC-bg-grad"></div>
                <div class="HDfGC-bg-author">
                    <div class="HDfGC-bg-author-img"></div>
                    <div class="HDfGC-bg-author-name-wrapper">
                        <div class="HDfGC-bg-author-name">${TRANSLATION} ${BACKGROUNDS[ran].author}</div>
                    </div>
                </div>
            </div>
            `.replace(/>\s+</g, '><').trim(); // Clean up formatted html, Thanks to https://stackoverflow.com/a/27841683

            const child = $.parseHTML(html);
            $("body").prepend(child);

            insertStyle(`
            .HDfGC-bg {
                position: fixed;
                width: 100%;
                height: 100%
            }

            .HDfGC-bg-img {
                background-image: url("${BACKGROUNDS[ran].src}");
                background-size: cover;
                height: 100%
            }

            .HDfGC-bg-grad {
                background-image: -moz-linear-gradient(rgba(0,0,0,.4) 0%,rgba(0,0,0,.6) 75%,rgba(0,0,0,.8) 100%);
                background-image: linear-gradient(rgba(0,0,0,.4) 0%,rgba(0,0,0,.6) 75%,rgba(0,0,0,.8) 100%);
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0
            }

            .HDfGC-bg-author {
                right: 1.3vw;
                bottom: 1.3vw;
                position: absolute
            }

            .HDfGC-bg-author-img {
                background-image: url("${BACKGROUNDS[ran].profile}");
                background-size: cover;
                display: inline-block;
                height: 32px;
                vertical-align: middle;
                width: 32px;
                border-radius: 50%
            }

            .HDfGC-bg-author-name-wrapper {
                font-size: 13px;
                color: white;
                display: inline-block;
                margin-left: 16px;
                vertical-align: middle;
            }

            /* Background */
            .wl {
                background: inherit;
            }

            /* Sidebar Icon */
            #Layer_1 {
                display: none;
            }
            `);

            $('[role="complementary"]').css("display", "none");
        }

        function invertColors() {
            insertStyle(`
            /* Navbar Icons */
            .gb_Na svg, .gb_Rc svg, .gb_dd .gb_ld, .gb_3c .gb_ld {
                color: white !important;
            }

            /* Online Status */
            .Yb.bax.bCd {
                background: none;
            }

            /* Online Status */
            .Yc.bax {
                color: white;
            }
            `);

            $("a img").eq(0).attr("srcset", "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_chat_dark_2x.png 2x ,https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_chat_dark_1x.png 1x")
        }

        function changeDetails() {
            insertStyle(`
            /* Welcome Screen */
            .nH.bkK {
                display: none;
            }

            /* Search Bar */
            #aso_search_form_anchor {
                display: none;
            }

            /* Chats & Groups Nav */
            .aeN {
                max-width: none !important;
            }
            `);

            $('[role="navigation"]').css("background-color", "white");
            $('[role="navigation"]').css("border-top-left-radius", "4px");
            $('[role="navigation"]').css("border-top-right-radius", "4px");
            $('[role="navigation"]').css("width", "20.83vw");
            $('[role="navigation"]').css("top", "3vh");
            $('[role="navigation"]').css("left", "3.5vw");
        }

        function initMain() {
            if ($("#loading").is(":visible")) { // Stop when not completely loaded
                return;
            }

            //console.log("--------------initMain()--------------");

            window.clearInterval(interval);

            insertBackground();
            invertColors();
            changeDetails();

            $(".dw .no").empty();
            window.setInterval(() => {
                $(".dB").each(function () {
                    $(this).css("width", "20.83vw");
                    $(this).parent().parent().parent().parent().css("width", "21.33vw");
                    $(this).css("height", "92.7vh");
                });
            }, 500);
        }

        function initFrameUsers() {
            if (!$('[role="list"] [role="listitem"] div').length) { // Stop when not completely loaded
                return;
            }

            //console.log("--------------initFrameUsers()--------------");

            window.clearInterval(interval);

            window.setInterval(() => {
                $('[role="list"] [role="listitem"]').each(function (index) {
                    if ($(this).attr("jsaction")) {
                        $(this).removeAttr("jsaction");
                        const elem = $(this).find('div[role="button"][jsaction]').get(0);
                        $(this).find('[role="link"]').eq(0).click(function (e) {
                            elem.click();
                        });
                    }
                });
            }, 500);
        }

        function initFrameGroups() {
            if (!$('[role="list"] [role="listitem"] div').length) { // Stop when not completely loaded
                return;
            }

            //console.log("--------------initFrameGroups()--------------");

            window.clearInterval(interval);

            window.setInterval(() => {
                $('[role="list"] [role="listitem"]').each(function (index) {
                    if ($(this).attr("jsaction")) {
                        $(this).removeAttr("jsaction");
                        const elem = $(this).find('div[role="button"][jsaction]').get(0);
                        $(this).find('[role="link"]').eq(0).click(function (e) {
                            elem.click();
                        });
                    }
                });
            }, 500);
        }

        // Start injected function
        //console.log(window.location.href, window.top === window.self);
        if (window.location.href.startsWith("https://mail.google.com/chat/u/0/") && window.top == window.self) { // Main Page
            if (! await GM.getValue("reload") || new Date().getTime() - await GM.getValue("reload") > 10 * 1000) { // Must be loaded without Cache otherwise the IFrames will not be injected
                await GM.setValue("reload", new Date().getTime());
                window.setTimeout(() => {
                    $.ajax({
                        url: window.location.href,
                        headers: {
                            "Pragma": "no-cache",
                            "Expires": -1,
                            "Cache-Control": "no-cache"
                        }
                    }).done(function () {
                        window.location.reload(true);
                    });
                }, 500);
            } else {
                await GM.deleteValue("reload");
                interval = window.setInterval(initMain, 500);
            }
        } else if (window.location.href.startsWith("https://chat.google.com/u/0/mole/world") && window.top != window.self) { // IFrame Users
            interval = window.setInterval(initFrameUsers, 500);
        } else if (window.location.href.startsWith("https://chat.google.com/u/0/") && window.top != window.self && window.location.href.indexOf("id=rooms") != -1) { // IFrame Groups
            interval = window.setInterval(initFrameGroups, 500);
        }
    });
})(window.jQuery.noConflict(true));