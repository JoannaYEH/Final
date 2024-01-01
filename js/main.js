
function changeDepartment(link) {
  document.getElementById("Department").innerHTML = link.innerHTML;
  document.getElementById("featuresSection").hidden=false;
  var DT = new Date; 
  var first = DT.getDate() - DT.getDay()+1; // 本周第一天
  //var last = first + 6; // 本周最後一天
  
  document.getElementById("btn_week_st").innerHTML = GetDateRangeST(first)+'~'+GetDateRangeST(first+6);
  document.getElementById("btn_week_nd").innerHTML = GetDateRangeST(first+7)+'~'+GetDateRangeST(first + 13);
  document.getElementById("btn_week_rd").innerHTML = GetDateRangeST(first+14)+'~'+GetDateRangeST(first + 20);
  document.getElementById("btn_week_th").innerHTML = GetDateRangeST(first+21)+'~'+GetDateRangeST(first + 27);

  getWeeksDate(first);
}

function GetWeekTable(wod){
  //var weekod=document.getElementById("week_order").innerHTML;
  var DT_Week = new Date; 
  var first_Week = DT_Week.getDate() - DT_Week.getDay()+1; // 本周第一天
  getWeeksDate(first_Week+wod*7);
}

function getWeeksDate(_Fst){
  document.getElementById("Week_Mon").innerHTML = GetDateRangeST(_Fst);
  document.getElementById("Week_Tue").innerHTML = GetDateRangeST(_Fst+1);
  document.getElementById("Week_Wed").innerHTML = GetDateRangeST(_Fst+2);
  document.getElementById("Week_Thu").innerHTML = GetDateRangeST(_Fst+3);
  document.getElementById("Week_Fri").innerHTML = GetDateRangeST(_Fst+4);
  document.getElementById("Week_Sat").innerHTML = GetDateRangeST(_Fst+5);
  document.getElementById("Week_Sun").innerHTML = GetDateRangeST(_Fst+6);

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

(function() {
  'use strict';
  window.addEventListener('load', function() {
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.getElementsByClassName('needs-validation');
  // Loop over them and prevent submission
  var validation = Array.prototype.filter.call(forms, function(form) {
    form.addEventListener('submit', function(event) {
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      else{
        $('#InfoModal').modal('show');
      }
      
      //form.classList.add('was-validated');
    }, false);
  });
}, false);
})();

$("#InfoModal").on("hide.bs.modal", function () {
  // location.reload(true);
  location.href = location.href;
});