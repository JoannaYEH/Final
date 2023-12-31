
function changeDepartment(link) {
  document.getElementById("Department").innerHTML = link.innerHTML;
  document.getElementById("featuresSection").hidden=false;
  var DT = new Date; 
  var first = DT.getDate() - DT.getDay()+1; // 本周第一天
  //var last = first + 6; // 本周最後一天
  
  document.getElementById("btn_week_st").innerHTML =GetDateRangeST(first)+'~'+GetDateRangeST(first + 6);
  document.getElementById("btn_week_nd").innerHTML =GetDateRangeST(first+7)+'~'+GetDateRangeST(first + 13);
  document.getElementById("btn_week_rd").innerHTML =GetDateRangeST(first+14)+'~'+GetDateRangeST(first + 20);
  document.getElementById("btn_week_th").innerHTML =GetDateRangeST(first+21)+'~'+GetDateRangeST(first + 27);

}
function GetRegForm(DocInfo) {
   document.getElementById("DocName").innerHTML = '醫師姓名：'+ DocInfo.getElementsByTagName('p')[0].innerHTML;
   document.getElementById("DocDate").innerHTML = '看診日期：'+ DocInfo.getElementsByTagName('p')[1].innerHTML;
   document.getElementById("reviewsSection").hidden=false;
  
} 

function GetDateRangeST(_Date){
    var _DT = new Date;
    var _day = new Date(_DT.setDate(_Date));
  
    // 本周第一天
    var year = _day.toLocaleString("zh-TW", { year: "numeric" });
    var month = _day.toLocaleString("zh-TW", { month: "short" });
    var day = _day.toLocaleString("zh-TW", { day: "numeric" });
  
    var formattedDate = [year, month, day].join('');
  
    return formattedDate;
}
