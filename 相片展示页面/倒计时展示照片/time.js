function BirthDay() {
    window.setTimeout("BirthDay()", 1000);
        BirthDay = new Date("01/12/2002 09:00:00"); // 修改出生日期
        today = new Date();
        timeold = (today.getTime() - BirthDay.getTime());
        sectimeold = timeold / 1000
        secondsold = Math.floor(sectimeold);
        msPerY = 365* 24 * 60 * 60 * 1000
        e_Yearsold = timeold / msPerY 
        yearsold = Math.floor(e_Yearsold);

        msPerday = 24 * 60 * 60 * 1000
        e_daysold = timeold / msPerday 
        daysold = Math.floor(e_daysold); 

        e_hrsold = (e_daysold - daysold) * 24;
        hrsold = Math.floor(e_hrsold);

        e_minsold = (e_hrsold - hrsold) * 60;
        minsold = Math.floor((e_hrsold - hrsold) * 60);
        
        seconds = Math.floor((e_minsold - minsold) * 60);
        span_dt_dt.innerHTML =yearsold+ "年---------------"+ daysold + "天" + hrsold + "小时" ;
    }
    BirthDay();
