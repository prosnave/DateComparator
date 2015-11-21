var index = 0;

var evansTime = "";


function newDate(index){

    var myDate = new Date(1990,0,1);

    var timestamp = myDate.setDate(myDate.getDate() + index);

    date = new Date(timestamp),
    datevalues = 
       ""+date.getFullYear()+
          date.getMonth()+
          date.getDate();
    return parseInt(datevalues);
}

 for (var year = 1990; year < 1991; year++) {

    for (var month = 0; month < 12; month++) {

        for(var day = 1; day < 29; day++) {
            
            evansTime = ""+year+month+day;

            intEvansTime = parseInt(evansTime);

            gregorial = newDate(index);
            
            if (intEvansTime == gregorial ){

                alert(intEvansTime + "equals"+ gregorial);

            }else{

                console.log(intEvansTime, gregorial );
            }

            index++

            console.log(index);
        }
    }
}