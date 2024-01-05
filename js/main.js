
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
 
  var DT_Week = new Date; 
  var first_Week = DT_Week.getDate() - DT_Week.getDay()+1; // 本周第一天
  getWeeksDate(first_Week+wod*7);
  document.getElementById("week_order").value=wod;
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

//醫生資訊,日期,午別
function GetRegForm(DocInfo,RegDate,RegNoon,DocName,RegNum) {
  var DT_Week = new Date; 
  var first_Week = DT_Week.getDate() - DT_Week.getDay()+1; // 本周第一天
   var wo=document.getElementById("week_order").value;
   document.getElementById("DocName").innerHTML = '醫師姓名：'+ DocInfo.getElementsByTagName('p')[0].innerHTML;
   document.getElementById("DocDate").innerHTML = '看診日期：'+  GetDateRangeST(first_Week+7*wo+RegDate)+RegNoon;
   document.getElementById("Info_Date").innerHTML = '看診日期：'+ GetDateRangeST(first_Week+7*wo+RegDate);
   document.getElementById("Info_Noon").innerHTML = '時段：'+ RegNoon;
   document.getElementById("Info_Department").innerHTML = '科別：'+ document.getElementById("Department").innerHTML;
   document.getElementById("Info_DocName").innerHTML = '看診醫師：'+ DocName;
   var _RegNum=RegNum+1;
   document.getElementById("Info_RegNum").innerHTML = '看診號:'+ _RegNum;
   
   
   document.getElementById("reviewsSection").hidden=false;
  
} 

function GetDateRangeST(_Date){
    var _DT = new Date;
    var _day = new Date(_DT.setDate(_Date));
  
    // 本周第一天
    var year = _day.toLocaleString("zh-TW", { year: "numeric" }).replace('年','/');
    var month = _day.toLocaleString("zh-TW", { month: "short" }).replace('月','/');
    var day = _day.toLocaleString("zh-TW", { day: "numeric" }).replace('日','');;
  
    var formattedDate = [year, month, day].join('');
  
    return formattedDate;
}



// (function() {
//   'use strict';
//    window.addEventListener('load', function() {
//   // Fetch all the forms we want to apply custom Bootstrap validation styles to
//   var forms = document.getElementsByClassName('needs-validation');
//   // Loop over them and prevent submission
//   var validation = Array.prototype.filter.call(forms, function(form) {
//     form.addEventListener('submit', function(event) {
//       if (form.checkValidity() === false) {
//         event.preventDefault();
//         event.stopPropagation();
//       }
//       $('#InfoModal').modal('show');
//       form.classList.add('was-validated');
//     }, false);
//   }, false);
//  }, false);
// })();  


// (function() {
//   'use strict';
//    window.addEventListener('DOMContentLoaded', function() {
//     const form = document.getElementById("RegForm");

//     function FormSubmit(event) {
//       if (form.checkValidity() === false) {
//         event.preventDefault();
//         event.stopPropagation();
//       }
//       $('#InfoModal').modal('show');
//       form.classList.add('was-validated');
//     }
    
//     form.addEventListener("submit", FormSubmit);
//  }, true);
// })();  


$(function () {
  $("#btnSubmit").on("click", function (e) {
      var form = $("#RegForm")[0];
      var isValid = form.checkValidity();
      if (!isValid) {
          e.preventDefault();
          e.stopPropagation();
      }
      form.classList.add('was-validated');
      $('#InfoModal').modal('show');
      return false; // For testing only to stay on this page
  });
});


$(document).ready(function(){
  // $("#myBtn").click(function(){
  //   $("#myModal").modal("show");
  // });
 
  $("#InfoModal").on('hidden.bs.modal', function(){
    // alert('The modal is now hidden.');
    document.getElementById("reviewsSection").hidden=true;
    document.getElementById("featuresSection").hidden=true;
    document.getElementById("week_order").value=0;
    document.getElementById("RegForm").reset();
  });
});
 
// $("#InfoModal").on("hidden.bs.modal", function () {
//   // location.reload(true);
//   //location.href = location.href;
//   document.getElementById("reviewsSection").hidden=true;
//   document.getElementById("featuresSection").hidden=true;
//   document.getElementById("week_order").value=0;
//   document.getElementById("RegForm").reset();
// });



// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}