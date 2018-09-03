!function () {
    //设置开始运营的时间，转成时间戳
    var Start_operating_time = new Date('2017-7-29 16:00:00:000');
    
    //获取现在时间戳
    var current_time = new Date().getTime();

    //经过了多少时间(毫秒))
    var Past_time = current_time - Start_operating_time;

    //日期格式转时间戳。第一、第二种：会精确到毫秒。第三种：只能精确到秒，毫秒用000替代。
    var date = new Date('2014-04-23 18:55:49:123');
    // 有三种方式获取
    var time1 = date.getTime();
    var time2 = date.valueOf();
    var time3 = Date.parse(date);
    console.log(time1);//1398250549123
    console.log(time2);//1398250549123
    console.log(time3);//1398250549000

    //转日期格式
    function timestampToTime(timestamp) {
        // var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        var D = date.getDate() + ' ';
        var h = date.getHours() + ':';
        var m = date.getMinutes() + ':';
        var s = date.getSeconds();
        return Y+M+D+h+m+s;
    }
    console.log(timestampToTime(current_time));//2014-06-18 10:33:24
    console.log(Past_time);//2014-06-18 10:33:24

    
}()

!function (){
    //网站运行了年 月 日
    //设置开始运营的时间，转成时间戳
    var Start_time = new Date('2016-8-29 16:00:00:000');
    function Time_conversion (Start_time) {
        //获取现在时间戳
        var current_time = new Date().getTime();

        //经过了多少时间(毫秒)
        var Past_time = current_time - Start_time;

        var s = Past_time / 1000; //转换秒

        var Y = Math.floor(s/31536000);
        var remainder = s % 31536000; //余数

        var M = Math.floor(remainder / 2592000);
        remainder = remainder % 2592000;

        var D = Math.floor(remainder/86400);

        return {
            Y: Y,
            M: M,
            D: D
        };
    }
    console.log(Time_conversion(Start_time));
}()