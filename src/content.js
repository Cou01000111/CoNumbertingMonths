window.onload = function () {
    var h2s = new Array();
    var relativeTimes = new Array();
    var _h2s = document.getElementsByTagName("h2");
    var _relativeTimes = document.getElementsByTagName("relative-time");
    _h2s = Array.from(_h2s);
    _relativeTimes = Array.from(_relativeTimes);
    //console.log(data1);
    console.log(_h2s);
    console.log(_relativeTimes);
    _h2s.forEach(element => {
        h2s.push(element.innerHTML.substr(11, element.lenth));
    });
    _relativeTimes.forEach(element => {
        relativeTimes.push(element.innerHTML.substr(3, element.lenth));
    });
    ChangeH2s(h2s);
    ChangeReativeTimes(relativeTimes);
    console.log(h2s);
    console.log(relativeTimes);
    for (let i = 0; i < _h2s.length; i++) {
        _h2s[i].innerHTML = "Commits on " + h2s[i].join('/');
    }
    for (let i = 0; i < _relativeTimes.length; i++) {
        _relativeTimes[i].innerHTML = "on " + relativeTimes[i].join('/');
    }
};

function ChangeH2s(datas) {
    for (let i = 0; i < datas.length; i++) {
        var date = datas[i].split(" ");
        date[1] = date[1].substr(0, 2);
        date[0] = ConvMonth(date[0]);
        console.log(date);

        var newDate = [date[2], date[0], date[1]];
        datas[i] = newDate;
    }
}


function ChangeReativeTimes(datas) {
    for (let i = 0; i < datas.length; i++) {
        var date = datas[i].split(" ");
        date[1] = ConvMonth(date[1]);
        console.log(date);
        var newDate = [date[2], date[1], date[0]];
        datas[i] = newDate;
    }
}

function ConvMonth(month) {
    if (month == "Jan") {
        return "1";
    } else if (month == "Feb") {
        return "2";
    } else if (month == "Mar") {
        return "3";
    } else if (month == "Apr") {
        return "4";
    } else if (month == "May") {
        return "5";
    } else if (month == "Jun") {
        return "6";
    } else if (month == "Jul") {
        return "7";
    } else if (month == "Aug") {
        return "8";
    } else if (month == "Sep") {
        return "9";
    } else if (month == "Oct") {
        return "10";
    } else if (month == "Nov") {
        return "11";
    } else if (month == "Dec") {
        return "12";
    }else{

    }
}
