javascript:

    var arr = [];
var str = "<textarea>";
$("#units_table tbody").each(function(index, valueTab) {
    var loopTr = 0;
    var top = 0;
    var lk = 0;
    var tar = 0;
    var zag = 0;
    $(valueTab).find("tr").each(function(index, valueTr) {
        var loopTd = 0;
        if (loopTr != 1) {
            $(valueTr).find(".unit-item").each(function(index, valueTd) {

                if (loopTd == 2) {
                    var count = $(valueTd).html();

                    top += +count
                    zag += +count;
                }

                if (loopTd == 4) {
                    var count = $(valueTd).html();
                    lk += +count
                    zag += +count * 4;
                }

                if (loopTd == 6) {
                    var count = $(valueTd).html();
                    tar += +count
                    zag += +count * 5;
                }
                loopTd++;
            });
        }

        loopTr++;
    });
    var label = $(this).find(".quickedit-label").text();
    var rCoordCel = /\d{3}[|]\d{3}/g;
    var coord = rCoordCel.exec(label);
    var valueToPush = {};
    valueToPush.top = top;
    valueToPush.lk = lk;
    valueToPush.tar = tar;
    valueToPush.zag = zag;
    valueToPush.coord = coord[0];
    arr.push(valueToPush);
});


$.each(arr, function(key, value) {
    if (value.zag > 15000) {
        str += value.coord + " top:" + value.top + " lk:" + value.lk + " tar:" + value.tar + "\n"
    }

});


str += "</textarea>"

$("#overview_menu").append(str);