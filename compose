//函数合成，从右到左合成函数
var compose = function () {
    var _arguments = arguments;  //缓存外层函数
    var length = _arguments.length;  //缓存长度
    var index = length;  //定义游标变量
    //检测函数，如果存在非函数参数，则抛出异常
    while (index --) {
        if (typeof _arguments[index] !== 'function') {
            throw new TypeError('参数必须为函数！');
        }
    }
    return function () {
        var index = length - 1;  //定位到最后一个参数下标
        //如果存在两个及以上参数，则调用最后一个参数函数，并传入内层函数；否则直接返回第 1 个参数函数。
        var result = length ? _arguments[index].apply(this, arguments) : arguments[0];
        //迭代参数函数
        while (index -- ) {
            //把右侧函数的执行结果作为参数传给左侧参数函数，并调用。
            result = _arguments[index].call(this, result);
        }
        return result;  //返回最左侧参数函数的执行结果
    }
}
//反向函数合成，即从左到右合成函数
var composeLeft = function () {
    return compose.apply(null, [].reverse.call(arguments));
}
