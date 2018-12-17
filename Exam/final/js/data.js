$(document).ready(function(){
  $.ajax({
    url: "https://api.aerisapi.com/fires/closest?p=boulder,co&filter=critical&radius=200miles&from=-10months&limit=10&client_id=cLIRdhJ7my4ieF30QQr2z&client_secret=qLoQFSaZRe3QUrU2TU5WQL9RVOxPo7aVX8tGVM13",
    dataType: "json",
    success: function(json) {
      var response = json.response;
      var list = document.getElementById("datalist");
      $.each(response, function(index,item){
        var name = item.report.name;
        var location = item.report.location;
        var acre = item.report.areaAC;
        var percent = item.report.perContained;

        datalist.innerHTML += "<span class='name'><br>" + name + "</span><span class='location'>"
+ location + "</span><span class='acre'><br>" + acre + "</span><span class='percent'>"
+ percent + "</span><br>";
      });
    }
  });
});
