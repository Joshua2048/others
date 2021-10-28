//柯里化函数
function curry (fn) {
    var _argLen = fn.length;  //记录原始函数的形参个数
    console.log(_argLen,"_argLen")
    var _args = [].slice.call(arguments, 1);  //把传入的第2个及以后参数转换为数组 []
    function wrap () {  //curry函数
        //把当前参数转换为数组，与前面参数进行合并
        _args = _args.concat([].slice.call(arguments)); //[1]
        console.log(_args,"wrap")
        function act () {  //参数处理函数
            //把当前参数转换为数组，与前面参数进行合并
            _args = _args.concat([].slice.call(arguments)); //[]
            console.log(_args, "act")
            //如果传入参数总和大于等于原始参数的个数，触发执行条件
            if ((_argLen == 0 && arguments.length == 0) ||
                (_argLen > 0 && _args.length >= _argLen)) {
                //执行原始函数，并把每次传入参数传入进去，返回执行结果，停止curry
                return fn.apply(null, _args);
            }
            return arguments.callee;
        }
        //如果传入参数大于等于原始函数的参数个数，即触发了执行条件
        if ((_argLen == 0 && arguments.length == 0) ||
            (_argLen > 0 && _args.length >= _argLen)) {
            //执行原始函数，并把每次传入参数传入进去，返回执行结果，停止curry
            return fn.apply(null, _args);
        }
        act.toString = function () {  //定义处理函数的字符串表示为原始函数的字符串表示
            return fn.toString();
        }
        return act;  //返回处理函数
    }
    return wrap;  //返回curry函数
}
// var add = function () {
//     //迭代所有参数值，返回最后汇总的值
//     return [].slice.call(arguments).reduce(function (a,b) {
//         //如果元素的值为数值，则参与求和运算，否则设置为0，跳过非数字的值
//         return (typeof a == "number" ? a : 0) + (typeof b =="number" ? b : 0);
//     })
// }
var add = function (a, b, c) {
    return [a, b, c]
}
var curried = curry(add);
console.log(curried(1) (2) (3));  //6
// var curried = curry(add, 2);
