/*
 *  Document   : tablesGeneral.js
 *  Author     : pixelcave
 */
var TablesGeneral = function () {
    return {
        init: function () {
            $("thead input:checkbox").click(function () {
                var e = $(this).prop("checked"),
                    s = $(this).closest("table");
                $("tbody input:checkbox", s).each(function () {
                    $(this).prop("checked", e)
                })
            });
            var e = $("#general-table");
            $("#style-default").click(function () {
                e.removeClass("table-bordered").removeClass("table-borderless")
            }), $("#style-bordered").click(function () {
                e.removeClass("table-borderless").addClass("table-bordered")
            }), $("#style-borderless").click(function () {
                e.removeClass("table-bordered").addClass("table-borderless")
            }), $("#style-striped").on("click", function () {
                $(this).toggleClass("active"), $(this).hasClass("active") ? e.addClass("table-striped") : e.removeClass("table-striped")
            }), $("#style-condensed").on("click", function () {
                $(this).toggleClass("active"), $(this).hasClass("active") ? e.addClass("table-condensed") : e.removeClass("table-condensed")
            }), $("#style-hover").on("click", function () {
                $(this).toggleClass("active"), $(this).hasClass("active") ? e.addClass("table-hover") : e.removeClass("table-hover")
            })
        }
    }
}();