var MyTools = {
    tabFun: function (element, activeNum, className) {
        //选项卡封装。参数一：类数组或数组。参数二：默认选中。参数三：类名。默认active
        var arr = [].slice.call(element);
        for (var j = 0; j < arr.length; j++) {
            arr[j].classList.remove(className);
        }
        arr[activeNum].classList.add(className);
        arr.forEach(function(e, i){
            e.onclick = function() {
                for (var j = 0; j < arr.length; j++) {
                    arr[j].classList.remove(className);
                }
                e.classList.add(className);
            }
        })
    },
    publicDesensitization: function (){
        //全局公用的对数据脱敏处理方法  参数可以是单个也可以是多个，但是格式必须是字符串
        //先将内置的 arguments 转换为真正的数组
        var dataArr = Array.prototype.slice.apply(arguments);
        for (var i = 0; i < dataArr.length; i++) {
            var data = dataArr[i];
            // 正则判断返回相应数据
            if(/(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(data) || /^(13[0-9]|16[0-9]|19[0-9]|147|15[0-9]|17[6-8]|18[0-9])\d{8}|17[0-9]\d{8}$/.test(data) || /(^(?:(?![IOZSV])[\dA-Z]){2}\d{6}(?:(?![IOZSV])[\dA-Z]){10}$)|(^\d{15}$)/.test(data)){
                //身份证号 || 手机号  ||  营业执照    前三后四
                data = data.substr(0,3) + "****" + data.substr(-4);
            }else if(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/.test(data)){
                //邮箱号码  前二 后以 @ 分割
                data = data.substr(0,2) + "****" + data.substr(data.indexOf('@'));
            }else if(/^\d{16}|\d{19}$/.test(data)){
                //银行卡号  后四位
                data = "****" + data.substr(-4);
            }else if(data.indexOf('公司') > -1){
                //企业名称  前二后四
                data = data.substr(0,2) + "****" + data.substr(-4);
            }else{
                return;
            }
            dataArr[i] = data;
        }
        
        return dataArr;
    }
};

//函数自执行。tab选项卡
!function (element1, activeNum, className, element2) {
    //选项卡封装。参数一：类数组或数组。参数二：默认选中。参数三：类名。默认active。参数四：对应要显示的数组

    forArr(); //大清洗
    element1[activeNum].classList.add(className);
    element2[activeNum].classList.add("show");

    element1.forEach(function(e, i){
        e.onclick = function() {
            forArr(); //大清洗
            e.classList.add(className);
            element2[i].classList.add("show");
        }
    });

    function forArr () {
        for (var j = 0; j < element1.length; j++) {
            element1[j].classList.remove(className);
            element2[j].classList.remove("show");
        }
    }
}(help_left_menu, 0, className="active", gzg_help_right_list);

// nav选中(路由选中)
    //参数1：路由数据(数组)，如：var pathArr =  ['/index','//','//','/white_paper'];
    // 参数2：需要active的元素(类数组 || 数组);
    function router_activ(arr, nav_list) {
        nav_list = [].slice.call(nav_list);
        arr.forEach(function (e, i) {
            nav_list[i].classList.remove('active'); //大清洗
            //包含特定字符串的选中
            if(window.location.pathname.indexOf(e) != -1) {
                nav_list[i].classList.add('active');
            }
        });
    }

