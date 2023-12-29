
function changeDepartment(link) {
  document.getElementById("Department").innerHTML = link.innerHTML;
  document.getElementById("featuresSection").hidden=false;

}


function GetRegForm(DocInfo) {
   document.getElementById("DocName").innerHTML = '醫師姓名：'+ DocInfo.getElementsByTagName('p')[0].innerHTML;
   document.getElementById("DocDate").innerHTML = '看診日期：'+ DocInfo.getElementsByTagName('p')[1].innerHTML;
   document.getElementById("reviewsSection").hidden=false;
  
}        