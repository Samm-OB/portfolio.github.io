!(function (_) {
  "use strict";
  var $,
    e,
    t,
    l,
    s,
    a,
    n,
    c,
    p,
    o,
    i,
    r,
    h,
    d,
    v,
    g,
    u,
    m = !1;
  function w(_, $) {
    var e = new Date();
    e.setTime(e.getTime() + 36e5),
      (document.cookie = _ + "=" + $ + ";expires=" + e.toUTCString());
  }
  function b(_) {
    var $ = document.cookie.match("(^|;) ?" + _ + "=([^;]*)(;|$)");
    return $ ? $[2] : null;
  }
  -1 != location.href.indexOf("envato-elements")
    ? (null == b("isEnvatoEl") && w("isEnvatoEl", "yes"), (m = !0))
    : (m = !1),
    !b("hideBslPopup") &&
      (($ = _(".bsl-popup__buttons")),
      (e = _(".bsl-popup__content-help")),
      (t = _(".bsl-popup__content-related")),
      (l = _(".bsl-popup__content .bsl-popup__menu")),
      (s = _(".bsl-popup__content .bsl-popup__tab-related")),
      (a = _(".bsl-popup__content .bsl-popup__tab-all")),
      (n = _(".bsl-popup__content .bsl-popup__tab-demo")),
      (c = _(".bsl-popup__content .bsl-popup__tab-version")),
      (p = _(".bsl-popup").data("theme")),
      (o = _(".bsl-popup").data("category")),
      (i = !1),
      (r = !1),
      (h = !1),
      (d = !1),
      (v = !1),
      (g = !1),
      (u = !1),
      _(document).on("click", "#relatedThemes", function () {
        return (
          _(this).hasClass("active")
            ? (t.parent().removeClass("opened"), _(this).removeClass("active"))
            : (_(this)
                .parent()
                .find("a:not(#relatedThemes)")
                .removeClass("active"),
              _(this).addClass("active"),
              t.parent().find(".bsl-popup__content").removeClass("active"),
              t.addClass("active"),
              t.parent().hasClass("opened") || t.parent().addClass("opened"),
              i.demo
                ? _('.bsl-popup__menu a[href="#tab-demo"]').trigger("click")
                : _('.bsl-popup__menu a[href="#tab-related"]').trigger(
                    "click"
                  )),
          0 == _(".bsl-popup__tab-related ul li").length &&
            0 == _('.bsl-popup__menu a[href="#tab-demo"]').length &&
            _('.bsl-popup__menu a[href="#tab-all"]').trigger("click"),
          !1
        );
      }),
      _(document).on("click", "#helpThemes", function () {
        var $, t, l;
        return (
          _(this).hasClass("active")
            ? (e.parent().removeClass("opened"), _(this).removeClass("active"))
            : (_(this)
                .parent()
                .find("a:not(#helpThemes)")
                .removeClass("active"),
              _(this).addClass("active"),
              e.parent().find(".bsl-popup__content").removeClass("active"),
              e.addClass("active"),
              e.parent().hasClass("opened") || e.parent().addClass("opened"),
              ($ = e),
              (l = '<ul class="help-list">'),
              void 0 != (t = i).links.doc &&
                (l +=
                  '<li><a href="' +
                  t.links.doc +
                  '" target="_blank" rel="noopener"><svg id="svg-icon-document" enable-background="new 0 0 300 300" height="512" viewBox="0 0 300 300" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m263.701 96.699c-7.55-7.511-17.563-11.644-28.209-11.644-.034 0-.07 0-.104 0-6.7.017-13.143 1.671-18.875 4.768v-11.823c0-2.122-.843-4.157-2.343-5.657l-48-48c-1.5-1.5-3.535-2.343-5.657-2.343h-128c-4.418 0-8 3.582-8 8v240c0 4.418 3.582 8 8 8h176c4.418 0 8-3.582 8-8v-24c0-4.418-3.582-8-8-8s-8 3.582-8 8v16h-45.058c.008-.005.015-.011.023-.017.057-.039.111-.083.167-.123.204-.147.402-.305.594-.474.076-.067.151-.134.224-.204.058-.055.121-.104.178-.162l95.912-96.403c.003-.003.006-.005.009-.008s.005-.006.008-.009l11.276-11.334c7.536-7.574 11.671-17.629 11.644-28.314-.028-10.683-4.215-20.717-11.789-28.253zm-95.19-47.386 20.687 20.687h-20.687zm-68.748 155.464c-.068.072-.133.146-.198.22-.171.196-.33.398-.478.606-.038.053-.078.103-.115.157-.187.277-.357.561-.505.854-.016.031-.028.064-.044.095-.131.266-.244.538-.344.814-.026.071-.05.141-.074.212-.099.302-.185.607-.247.917-.003.012-.007.024-.01.036l-.005.023c-.002.011-.004.021-.006.032l-10.509 53.257h-46.717v-224h112v40c0 4.418 3.582 8 8 8h40v16c0 .469.048.925.126 1.372l-4.785 4.81c-.001.001-.003.003-.005.004s-.003.003-.004.005l-95.917 96.407c-.058.057-.107.12-.163.179zm4.837 51.835 5.952-30.159 24.176 24.054zm46.339-12.547-34.027-33.854 84.636-85.068 34.027 33.854zm101.563-102.083-5.642 5.671-34.027-33.853 5.642-5.671c4.521-4.545 10.542-7.057 16.952-7.073h.063c6.387 0 12.396 2.479 16.925 6.986 4.545 4.521 7.057 10.542 7.073 16.952.017 6.411-2.464 12.444-6.986 16.988z"/><path d="m190.32 159.111-45.14 45.37c-3.116 3.132-3.103 8.198.029 11.314 1.561 1.553 3.602 2.329 5.643 2.329 2.054 0 4.108-.786 5.671-2.357l45.14-45.37c3.116-3.132 3.103-8.198-.029-11.314-3.132-3.117-8.197-3.104-11.314.028z"/><path d="m64.511 86h48c4.418 0 8-3.582 8-8s-3.582-8-8-8h-48c-4.418 0-8 3.582-8 8s3.582 8 8 8z"/><path d="m160.511 102h-96c-4.418 0-8 3.582-8 8s3.582 8 8 8h96c4.418 0 8-3.582 8-8s-3.581-8-8-8z"/><path d="m136.511 126h-72c-4.418 0-8 3.582-8 8s3.582 8 8 8h72c4.418 0 8-3.582 8-8s-3.581-8-8-8z"/><path d="m112.511 150h-48c-4.418 0-8 3.582-8 8s3.582 8 8 8h48c4.418 0 8-3.582 8-8s-3.581-8-8-8z"/></g></svg><span>Documentation</span></a></li>'),
              (l +=
                '<li><a href="' +
                "https://1.envato.market/c/1790164/275988/4415?u=" +
                t.links.support +
                '" target="_blank" rel="noopener"><svg id="svg-icon-help" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><path d="M437.02,74.98C388.667,26.629,324.38,0,256,0S123.333,26.629,74.98,74.98C26.629,123.333,0,187.62,0,256s26.629,132.667,74.98,181.02C123.333,485.371,187.62,512,256,512s132.667-26.629,181.02-74.98C485.371,388.667,512,324.38,512,256S485.371,123.333,437.02,74.98z M256,30c56.921,0,108.988,21.161,148.767,56.019l-69.813,69.813c-21.736-17.169-49.168-27.43-78.954-27.43c-29.785,0-57.218,10.261-78.953,27.43l-69.813-69.813C147.012,51.161,199.079,30,256,30z M353.598,256c0,53.816-43.782,97.598-97.598,97.598c-53.816,0-97.598-43.782-97.598-97.598c0-53.816,43.782-97.598,97.598-97.598C309.816,158.402,353.598,202.184,353.598,256z M30,256c0-56.922,21.162-108.989,56.021-148.768l69.813,69.813c-17.17,21.736-27.432,49.169-27.432,78.956c0,29.785,10.261,57.218,27.43,78.954l-69.813,69.813C51.161,364.988,30,312.921,30,256z M256,482c-56.922,0-108.989-21.162-148.769-56.021l69.813-69.813c21.736,17.17,49.169,27.431,78.955,27.431s57.219-10.261,78.956-27.432l69.813,69.813C364.989,460.838,312.922,482,256,482z M425.981,404.766l-69.813-69.813c17.169-21.736,27.43-49.168,27.43-78.953c0-29.786-10.261-57.219-27.431-78.955l69.813-69.813C460.838,147.011,482,199.078,482,256C482,312.921,460.839,364.988,425.981,404.766z"/></g></g></svg><span>Get Support</span></a></li>'),
              (l +=
                '<li><a href="' +
                t.links.changelog +
                '" target="_blank" rel="noopener"><svg id="svg-icon-file" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="548.291px" height="548.291px" viewBox="0 0 548.291 548.291" style="enable-background:new 0 0 548.291 548.291;" xml:space="preserve"><g><path d="M486.201,196.124h-13.166V132.59c0-0.396-0.062-0.795-0.115-1.196c-0.021-2.523-0.825-5-2.552-6.963L364.657,3.677c-0.033-0.031-0.064-0.042-0.085-0.073c-0.63-0.707-1.364-1.292-2.143-1.795c-0.229-0.157-0.461-0.286-0.702-0.421c-0.672-0.366-1.387-0.671-2.121-0.892c-0.2-0.055-0.379-0.136-0.577-0.188C358.23,0.118,357.401,0,356.562,0H96.757C84.894,0,75.256,9.651,75.256,21.502v174.613H62.092c-16.971,0-30.732,13.756-30.732,30.733v159.812c0,16.968,13.761,30.731,30.732,30.731h13.164V526.79c0,11.854,9.638,21.501,21.501,21.501h354.776c11.853,0,21.501-9.647,21.501-21.501V417.392h13.166c16.966,0,30.729-13.764,30.729-30.731V226.854C516.93,209.872,503.167,196.124,486.201,196.124z M96.757,21.502h249.054v110.009c0,5.939,4.817,10.75,10.751,10.75h94.972v53.861H96.757V21.502z M317.816,303.427c0,47.77-28.973,76.746-71.558,76.746c-43.234,0-68.531-32.641-68.531-74.152c0-43.679,27.887-76.319,70.906-76.319C293.389,229.702,317.816,263.213,317.816,303.427z M82.153,377.79V232.085h33.073v118.039h57.944v27.66H82.153V377.79z M451.534,520.962H96.757v-103.57h354.776V520.962z M461.176,371.092c-10.162,3.454-29.402,8.209-48.641,8.209c-26.589,0-45.833-6.698-59.24-19.664c-13.396-12.535-20.75-31.568-20.529-52.967c0.214-48.436,35.448-76.108,83.229-76.108c18.814,0,33.292,3.688,40.431,7.139l-6.92,26.37c-7.999-3.457-17.942-6.268-33.942-6.268c-27.449,0-48.209,15.567-48.209,47.134c0,30.049,18.807,47.771,45.831,47.771c7.564,0,13.623-0.852,16.21-2.152v-30.488h-22.478v-25.723h54.258V371.092L461.176,371.092z"/><path d="M212.533,305.37c0,28.535,13.407,48.64,35.452,48.64c22.268,0,35.021-21.186,35.021-49.5c0-26.153-12.539-48.655-35.237-48.655C225.504,255.854,212.533,277.047,212.533,305.37z"/></g></svg><span>Changelog</span></a></li>'),
              (l += "</ul>"),
              $.html(l)),
          !1
        );
      }),
      _(document).on("click", "#closeBslpopup", function () {
        return (
          _(this).parent().find("a").removeClass("active"),
          t.parent().removeClass("opened"),
          !1
        );
      }),
      _(document).on("click", ".bsl-popup__menu a", function () {
        _(this).parent().find("a").removeClass("active"),
          _(this).addClass("active");
        var $,
          e,
          t,
          l,
          o,
          m,
          w,
          b,
          f,
          x,
          C,
          k,
          z,
          y,
          M,
          B,
          T = _(this).attr("href").replace("#tab-", "");
        return (
          _(".bsl-popup__tab").removeClass("active"),
          _(".bsl-popup__tab-" + T).addClass("active"),
          "demo" != T ||
            d ||
            ((d = !0),
            ($ = n),
            (e = i),
            (t = p),
            (l = "<ul>"),
            _.each(e.demo, function (_, $) {
              l +=
                '<li><a href="' +
                $.url +
                '"><img src="' +
                $.preview +
                '" alt="' +
                $.title +
                '" /><span>' +
                $.title +
                "</span></a></li>";
            }),
            (l += "</ul>"),
            $.html(l)),
          "related" != T ||
            v ||
            ((v = !0),
            (o = s),
            (m = r),
            (w = i),
            (b = p),
            (f = []),
            (x = w.tags.split(",")),
            (C = "<ul>"),
            _.each(m, function ($, e) {
              $ != b &&
                _.each(x, function (_, t) {
                  e.tags.includes(t) &&
                    -1 === f.findIndex((_) => _.slug == $) &&
                    f.push({ slug: $, item: e });
                });
            }),
            _.each(f, function (_, $) {
              C +=
                '<li><a href="' +
                "https://1.envato.market/c/1790164/275988/4415?u=" +
                $.item.links.url +
                '" target="_blank"><img src="' +
                $.item.preview +
                '" alt="' +
                $.item.title +
                '" /><span>' +
                $.item.title +
                "</span></a></li>";
            }),
            (C += "</ul>"),
            o.html(C)),
          "all" != T ||
            g ||
            ((g = !0),
            (function $(e, t, l, s) {
              var a = [];
              l.tags.split(",");
              var n = "<ul>";
              _.each(t, function (_, $) {
                _ != s && a.push({ slug: _, item: $ });
              }),
                _.each(a, function (_, $) {
                  n +=
                    '<li><a href="' +
                    "https://1.envato.market/c/1790164/275988/4415?u=" +
                    $.item.links.url +
                    '" target="_blank"><img src="' +
                    $.item.preview +
                    '" alt="' +
                    $.item.title +
                    '" /><span>' +
                    $.item.title +
                    "</span></a></li>";
                }),
                (n += "</ul>"),
                e.html(n);
            })(a, r, i, p)),
          "version" != T ||
            u ||
            ((u = !0),
            (k = c),
            (z = h),
            (y = p),
            (M = []),
            _.each(z, function ($, e) {
              _.each(e, function (_, e) {
                _ == y && M.push({ slug: $, item: e });
              });
            }),
            (B = "<ul>"),
            _.each(M, function (_, $) {
              B +=
                '<li><a href="' +
                "https://1.envato.market/c/1790164/275988/4415?u=" +
                $.item.links.url +
                '" target="_blank"><img src="' +
                $.item.preview +
                '" alt="' +
                $.item.title +
                '" /><span>' +
                $.item.title +
                " [" +
                $.slug +
                "]</span></a></li>";
            }),
            (B += "</ul>"),
            k.html(B)),
          !1
        );
      }),
      _(document).on("click", "#hideBslpopup", function () {
        return _(".bsl-popup").remove(), w("hideBslPopup", "yes"), !1;
      }));
})(jQuery);
