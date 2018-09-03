[].slice.call(类数组)
document.getElementById('')
document.getElementsByClassName('')[0].getElementsByTagName
array.forEach(element => {
    
});
for (var j = 0; j < array.length; j++) {
    
}


!function(){
    //选项卡封装。参数一：类数组或数组。参数二：默认选中。参数三：类名。默认active
    function tabFun(element, activeNum, className="active") {
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
    }
}();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import Switch from 'react-router/Switch';
import Route from 'react-router/Route';

var renderRoutes = function renderRoutes(routes) {
  var extraProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return routes ? React.createElement(
    Switch,
    null,
    routes.map(function (route, i) {
      return React.createElement(Route, {
        key: route.key || i,
        path: route.path,
        exact: route.exact,
        strict: route.strict,
        render: function render(props) {
          return React.createElement(route.component, _extends({}, props, extraProps, { route: route }));
        }
      });
    })
  ) : null;
};

export default renderRoutes;


//////////////////
// WEBPACK FOOTER
// ./node_modules/react-router-config/es/renderRoutes.js
// module id = 1225
// module chunks = 9