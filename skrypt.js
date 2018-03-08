javascript:

    var zagroda = 18000;
var arr = [];
var str = "<textarea>";

var topCount;
var lkCount;
var tarCount;
//Pobranie miejsca na którym występują dane jednostki
$("#units_table thead tr th").each(function(index, valueTab) {
    var unit = $(this).find("img").attr("title");

    if (unit === "Topornik") {
        topCount = index;
    }

    if (unit === "Lekki kawalerzysta") {
        lkCount = index;
    }

    if (unit === "Taran") {
        tarCount = index;
    }
});



$("#units_table tbody").each(function(index, valueTab) {
    var loopTr = 0;
    var top = 0;
    var lk = 0;
    var tar = 0;
    var zag = 0;
    $(valueTab).find("tr td").each(function(index, valueTd) {

        if (index === topCount) {
            var count = $(valueTd).html();

            top += +count
            zag += +count;
        }

        if (index === lkCount) {
            var count = $(valueTd).html();
            lk += +count
            zag += +count * 4;
        }

        if (index === tarCount) {
            var count = $(valueTd).html();
            tar += +count
            zag += +count * 5;
        }


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
    if (value.zag > zagroda) {
        str += value.coord + " top:" + value.top + " lk:" + value.lk + " tar:" + value.tar + "\n"
    }

});

str += "</textarea>"

$("#overview_menu").append(str);