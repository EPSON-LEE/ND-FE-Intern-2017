var SY,SM,SD,cy,cm
// 年 
SY = new Date().getFullYear();
// 月
SM = new Date().getMonth()+1;
// 日
SD = new Date().getDate();
// select select框显示的年份
cy = document.getElementById("cy");
// select select框显示的月份
cm = document.getElementById("cm");
// 页面加载完成执行的代码
window.onload = function(){
    
}
// 下拉列表显示的年份
function YearAll(Y){
    var Ystr = ""
    for (var y = Y - 10; y <= Y + 10; y++) {
        Ystr += "<li onclick='getym(this,\"cy\")'>"+ y +"</li>"
    }
    return Ystr
}
// 下拉列表现实的月份
function DateAll(Y,M){
    var Mstr = "",Mnum = GetDaysInMonth(Y,M)
    for (var m = 1; m <= 12; m++) {
        Mstr += "<li onclick='getym(this,\"cm\")'>"+ (m < 10 ? "0" + m : m) +"</li>"
    }
    return Mstr
}

function getym(o,s){
    document.getElementById(s).innerHTML = parseInt(o.innerHTML)
    getDynamicTable(parseInt(cy.innerHTML),parseInt(cm.innerHTML))
}
function Month(s){
    var y = parseInt(cy.innerHTML),
        m = parseInt(cm.innerHTML);
    if (s == "l") {
        if (m <= 1) {
            m = 12
            y --
        } else {
            m --
        }
    } else {
        if (m >= 12) {
            m = 1
            y ++
        } else {
            m ++
        }
    }
    cy.innerHTML = y
    cm.innerHTML = m
    getDynamicTable(y,m)
}

// 生成动态的 日历表格
function getDynamicTable(Y,M){
    var Temp,i,j
    var FirstDate,MonthDate,CirNum,ErtNum // '当月第一天为星期几,当月的总天数,表格的单元格数及循环数,表格第一排空格数与当月天数之和

    FirstDate = GetWeekdayMonthStartsOn(Y,M)// '得到该月的第一天是星期几  0-6

    MonthDate = GetDaysInMonth(Y,M)// '得到该月的总天数 30
    ErtNum = FirstDate + MonthDate// -1 
    
    Temp = ""
    TDstyle = " "   
    if (ErtNum > 35){
        CirNum = 42
    }else if (ErtNum == 28){
        CirNum = 28 
    }else{
        CirNum = 35
    }
    j=1
    //alert(Y+","+M)
    //alert("第一天:"+FirstDate+"; 总天数:"+MonthDate+"; ErtNum:"+ErtNum+"; 表格行数:"+(CirNum/7))
    for (i = 1; i <= CirNum; i++){
        if (i == 1){
            Temp += "<table><tr><th>S</th><th>M</th><th>T</th><th>W</th><th>T</th><th>F</th><th>S</th></tr><tr>"
        }
        if (i < FirstDate + 1 || i > ErtNum){
            Temp += "<td></td>"
        }else{
            Temp += (SY == Y && SM == M && SD == j ? "<td class='now'>" : "<td>") + j +"</td>"
            j = j + 1
        }
        if (i % 7 == 0 && i < ErtNum){
            Temp += "</tr><tr>"
        }
        if (i == CirNum){
            Temp += "</tr></table>"
        }
    }
    document.getElementById("DayAll").innerHTML = Temp
}
//'得到该月的总天数
function GetDaysInMonth(Y,M){               
    if (M==1||M==3||M==5||M==7||M==8||M==10||M==12)
        return 31;
    else if (M==4||M==6||M==9||M==11)
        return 30;
    else if (M==2)
        if((Y%4==0 && Y%100!=0)||(Y%100==0 && Y%400==0))
            return 29;
        else
            return 28;
    else
        return 28;
}
//'得到该月的第一天是星期几
function GetWeekdayMonthStartsOn(Y,M){      
    var date = new Date(Y,M-1,1)
    return date.getDay()
}