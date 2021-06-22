student_name=[];
function submit()
{
    var display_name=[];
    for(var j=1;j<=4;j++){
        var name=document.getElementById("name_of_the_student_"+j).value;
    student_name.push(name);  }
    for(var k=0;k<4;k++){
      display_name.push("<h4>NAME-"+student_name[k]+"</h4>");
    }
    document.getElementById("display_name_with_commas").innerHTML=display_name;
    var remove_comma=display_name.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_comma;
    document.getElementById("submit_button").style.display = "none"; 
    document.getElementById("sort_button").style.display = "inline-block"; }
    
    function sorting(){
        var display_name=[];
        student_name.sort();
        for(var k=0;k<4;k++){
            display_name.push("<h4>NAME-"+student_name[k]+"</h4>");
          }
          
          var remove_comma=display_name.join(" ");
          document.getElementById("display_name_without_commas").innerHTML=remove_comma;
    }