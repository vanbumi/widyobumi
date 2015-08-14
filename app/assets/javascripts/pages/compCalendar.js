/*
 *  Document   : compCalendar.js
 *  Author     : pixelcave
 */
var CompCalendar = function () {
    var e = $(".calendar-events"),
        t = function () {
            e.find("li").each(function () {
                var e = {
                    title: $.trim($(this).text()),
                    color: $(this).css("background-color")
                };
                $(this).data("eventObject", e), $(this).draggable({
                    zIndex: 999,
                    revert: !0,
                    revertDuration: 0
                })
            })
        };
    return {
        init: function () {
            t();
            var a = $("#add-event"),
                n = "";
            $("#add-event-btn").on("click", function () {
                return n = a.prop("value"), n && (e.append('<li class="animation-slideDown">' + $("<div />").text(n).html() + "</li>"), a.prop("value", ""), t()), !1
            });
            var r = new Date,
                l = r.getDate(),
                i = r.getMonth(),
                o = r.getFullYear();
            $("#calendar").fullCalendar({
                header: {
                    left: "prev,next",
                    center: "title",
                    right: "month,agendaWeek,agendaDay"
                },
                firstDay: 1,
                editable: !0,
                droppable: !0,
                drop: function (e, t) {
                    var a = $(this).data("eventObject"),
                        n = $.extend({}, a);
                    n.start = e, n.allDay = t, $("#calendar").fullCalendar("renderEvent", n, !0), $(this).remove()
                },
                events: [{
                    title: "Gaming Day",
                    start: new Date(o, i, 1),
                    color: "#9b59b6"
                }, {
                    title: "Live Conference",
                    start: new Date(o, i, 3)
                }, {
                    title: "Top Secret Project",
                    start: new Date(o, i, 4),
                    end: new Date(o, i, 8),
                    color: "#1abc9c"
                }, {
                    id: 999,
                    title: "Gym (repeated)",
                    start: new Date(o, i, l - 3, 15, 0),
                    allDay: !1
                }, {
                    id: 999,
                    title: "Gym (repeated)",
                    start: new Date(o, i, l + 3, 15, 0),
                    allDay: !1
                }, {
                    title: "Job Meeting",
                    start: new Date(o, i, l, 16, 0),
                    allDay: !1,
                    color: "#f39c12"
                }, {
                    title: "Awesome Project",
                    start: new Date(o, i, l, 9, 0),
                    end: new Date(o, i, l, 12, 0),
                    allDay: !1,
                    color: "#d35400"
                }, {
                    title: "Book Reading",
                    start: new Date(o, i, 15),
                    end: new Date(o, i, 16),
                    allDay: !0,
                    color: "#3498db"
                }, {
                    title: "Party",
                    start: new Date(o, i, l + 8, 21, 0),
                    end: new Date(o, i, l + 8, 23, 30),
                    allDay: !1
                }, {
                    title: "Follow me on Twitter",
                    start: new Date(o, i, 20),
                    end: new Date(o, i, 24),
                    url: "http://twitter.com/pixelcave",
                    color: "#e74c3c"
                }]
            })
        }
    }
}();