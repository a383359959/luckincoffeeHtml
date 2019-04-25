define("/index/index", ["/common/sensors"],
    function(i) {
        var t = $(window),
            d = t.scrollTop(),
            c = t.height(),
            n = t.width(),
            e = $("#docwrap").height(),
            l = window.localStorage,
            r = $("#cover"),
            p = $("#gotoTop"),
            v = $(".animate-item"),
            h = r.find(".video-wrap"),
            m = n / 1920,
            u = 1080 * m,
            o = u < c ? u: c,
            f = window.globUrl.baseImagesUrl,
            a = navigator.userAgent.toLowerCase(),
            w = /(mobile|silk-accelerated=true)/.test(a),
            s = a.match(/(msie |trident\/)([\d.]+)/),
            g = window.location.host,
            y = /(.cn)$/.test(g),
            b = w || s && "msie " === s[1] && parseInt(s[2], 10) < 9 || y;
        function k(i, e) {
            if (i.highDev) return "function" == typeof e && e();
            i.highDev = !0;
            var o, a, s, t = $(".img-el", i.item),
                n = t.eq(0);
            $.each(t,
                function(i, e) {
                    a = $(e),
                        b ? (s = f + a.data("img").replace("@2x", ""), a.css({
                            "background-image": "url(" + s + ")",
                            filter: 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + s + '",  sizingMethod="scale")'
                        })) : a.css({
                            "background-image": "url(" + f + a.data("img") + ")"
                        })
                }),
            "function" == typeof e && ((o = new Image).onload = function() {
                e()
            },
                o.src = f + n.data("img"))
        }
        function x() {
            var o, a, s = e / 2 < d,
                t = (a = [], $.each(v,
                    function(i, e) {
                        o = $(e),
                            a.push({
                                item: o,
                                id: o.attr("id"),
                                actionTop: o.offset().top - .7 * c,
                                animate: !1,
                                highDev: !1
                            })
                    }), d > a[1].top ? a.reverse() : a),
                n = t.length;
            t.length;
            return {
                play: function(i) {
                    $.each(t,
                        function(o, a) {
                            i > a.actionTop && k(a,
                                function() {
                                    var i, e;
                                    e = function() {
                                        var i = s ? 0 < o ? o - 1 : null: o + 1 < n ? o + 1 : null;
                                        i && k(t[i])
                                    },
                                    (i = a).animate || (1, i.item.find(".item-wrap").addClass("show-animate"), e())
                                })
                        })
                }
            }
        }
        function C() {
            h.css({
                height: u
            }),
                h.find("#autoplay").css({
                    width: n
                })
        }
        function I() {
            var i = r.find(".item-wrap");
            c = t.height(),
                n = t.width(),
                o = (u = 1080 * (m = n / 1920)) < c ? u: c,
                i.css({
                    width: "100%",
                    position: "relative",
                    margin: 0,
                    left: 0
                }),
            b || (r.css({
                height: o
            }), i.css({
                width: n,
                height: o,
                backgroundSize: "100%"
            }), $(".cover-logo").css({
                transform: "scale(" + m + ", " + m + ")",
                "-ms-transform": "scale(" + m + ", " + m + ")"
            }), $("#statement-shade").css({
                width: n,
                height: c
            }))
        } !
            function() {
                var i, e;
                $(".homepage").addClass("active").attr("href", "javascript:;"),
                /MSIE 8/.test(navigator.appVersion) && $(".hd").css({
                    backgroundImage: "url(" + globUrl.baseImagesUrl + "/index/sprite.png)"
                }),
                    I(),
                w && p.hide(),
                    b ? C() : (i = "", i += '<video id="autoplay" style="width: ' + n + 'px;" muted autoplay="autoplay" loop="loop">', i += '    <source class="mp4" type="video/mp4" src="' + f + '/index/8sautoplay.mp4">', e = i += "</video>", h.css({
                        height: u
                    }).append(e),
                        function() {
                            var i, e, o = $("#playBtn"),
                                a = $("<div />").attr({
                                    id: "playBox"
                                });
                            function s(i) {
                                var e = $("body");
                                i ? e.css({
                                    width: window.innerWidth,
                                    height: window.innerHeight,
                                    overflow: "hidden"
                                }) : e.attr("style", "")
                            }
                            i = function(i, e) {
                                $("#playBtn, #replay").on("click",
                                    function() {
                                        s(!0),
                                            a.show(),
                                            i.play(),
                                            e.mask.hide(),
                                            e.replay.hide()
                                    }),
                                    e.closeBtn.on("click",
                                        function() {
                                            s(),
                                                a.hide(),
                                                i.currentTime = 0,
                                                i.pause()
                                        }),
                                    i.onended = function() {
                                        e.mask.show(),
                                            e.replay.css({
                                                transform: "scale(" + m + ", " + m + ")",
                                                "-ms-transform": "scale(" + m + ", " + m + ")"
                                            }).show()
                                    },
                                    i.onplay = function() {
                                        e.mask.hide(),
                                            e.replay.hide()
                                    }
                            },
                                e = "",
                                e += '<div class="video-view">',
                                e += '    <video id="play-tvc" class="video" controls preload="auto">',
                                e += '        <source class="mp4" type="video/mp4" src="' + f + '/index/luckincoffee_TVC30.mp4"',
                                e += "    </viceo>",
                                e += "</div>",
                                e += '<div class="controls">',
                                e += '    <div id="play">播放</div>',
                                e += '    <div class="vtime">',
                                e += '        <span id="ctime">当前时间</span> / <span id="atime">总时长</span>',
                                e += "    </div>",
                                e += '    <div class="progress bars">',
                                e += '        <div id="abar" class="abar">总长度</div>',
                                e += '        <div id="pbar" class="pbar">载入长度</div>',
                                e += '        <div id="cbar" class="cbar">当前长度</div>',
                                e += '        <div id="bdot" class="dot">小圆点</div>',
                                e += "    </div>",
                                e += '    <div id="mute">静音按钮</div>',
                                e += '    <div class="voice">',
                                e += '        <div id="avoice" class="abar">底色</div>',
                                e += '        <div id="cvoice" class="cbar">当前音量</div>',
                                e += '        <div id="vdot" class="dot">小圆点</div>',
                                e += "    </div>",
                                e += '    <div id="full">全屏</div>',
                                e += '    <div id="exit">退出</div>',
                                e += "</div>",
                                e += '<div id="mask" class="mask"></div>',
                                e += '<div id="replay" class="replay"></div>',
                                e += '<div id="close" class="close"></div>',
                                o.addClass("show"),
                                a.html(e).appendTo(r),
                                i(a.find("#play-tvc")[0], {
                                    playBtn: a.find("#play"),
                                    atime: a.find("#atime"),
                                    ctime: a.find("#ctime"),
                                    closeBtn: a.find("#close"),
                                    mask: a.find("#mask"),
                                    replay: a.find("#replay")
                                })
                        } ());
                var o, a = x();
                if (a.play(d), o = a, $(window).on("scroll",
                    function(i) {
                        300 < (d = t.scrollTop()) ? p.addClass("show") : p.removeClass("show"),
                            o.play(d)
                    }), $(".code").on("mouseenter",
                    function() {
                        $(this).addClass("show-code")
                    }).on("mouseleave",
                    function() {
                        $(this).removeClass("show-code")
                    }), $("#play").on("click",
                    function() {}), $(window).on("resize",
                    function() {
                        I(),
                        b || C()
                    }), $(".showcooperation, #cooperation-pop").on("mouseenter",
                    function() {
                        $("#cooperation-pop").show()
                    }), $(".showcooperation, #cooperation-pop").on("mouseleave",
                    function(i) {
                        $("#cooperation-pop").hide()
                    }), p.on("click",
                    function() {
                        p.hide(),
                            $("html, body").animate({
                                    scrollTop: 0
                                },
                                d / 3,
                                function() {
                                    p.attr({
                                        style: ""
                                    }).removeClass("show")
                                })
                    }), $("#statement-pop").on("click", ".close",
                    function(i) {
                        $("#statement-shade").hide(),
                            $("body").css({
                                overflow: "auto"
                            })
                    }), window.localStorage) {
                    var s = l.getItem("visited");
                    s && null !== s || (l.setItem("visited", !0), $("body").css({
                        overflow: "hidden"
                    }), $("#statement-shade").show().css({
                        width: n,
                        height: c
                    }))
                }
            } ()
    }),
    require(["/index/index"]);