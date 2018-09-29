/*
* 数组中不会改变自身的方法
* 不会改变调用他们的对象的值，只会返回一个新的数组或者返回一个其他的期望值；
* */
(function () {
    Array.prototype.concat()
    //返回一个由当前数组和其它若干个数组或者若干个非数组值组合而成的新数组；
    //方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。
    // var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])
    //注意：
    //concat方法不会改变this或任何作为参数提供的数组，而是返回一个浅拷贝，
    // 它包含与原始数组相结合的相同元素的副本。 原始数组的元素将复制到新数组
    //数组/值在连接时保持不变。
    // 此外，对于新数组的任何操作（仅当元素不是对象引用时）都不会对原始数组产生影响，反之亦然。
    Array.prototype.join()
    //连接所有数组元素或(一个类数组对象)组成一个字符串,不会改变数组！
    //str = arr.join(); // 默认为“,”
    //str = arr.join(""); // 分隔符 === 空字符串 ""
    //str = arr.join(separator) // 分隔符；指定一个字符串来分隔数组的每个元素
    //返回值：一个所有数组元素连接的字符串，如果arr.length 为0，则返回空字符串；
    //注意：如果元素是undefined 或者null， 则会转化成空字符串。

    // 扩展：类数组对象：虽然该对象并不是由Array构造函数所创建的，它依然呈现出数组的行为，在这种情况下，这些对象被称为“类数组对象”。
            //特性：可以在数组对象上应用数组的操作方法，
    Array.prototype.slice()
    //用于把一个字符串分割成字符串数组；
    // 返回一个从开始到结束（不包括结束）选择的数组的一部分浅拷贝到另一个新数组对象，且原始数组不会被修改；
    // stringObject.split(separator,howmany)
    //separator	必需。字符串或正则表达式，从该参数指定的地方分割 stringObject。
    //注意
    // 如果把空字符串（""）用作separator，那么stringObject 中的每个字符之间都会被分割；
    // String.split() 执行的操作与Array.join 执行的操作是相反的；
    //类数组（Array-like）对象
    //slice 方法可以将一个类数组（Array-like）对象/集合转换成一个新数组，
    // 你只需将该方法绑定到这个对象上，一个函数中的arguments就是一个类数组对象的例子；
    Array.prototype.includes()
    //includes() 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回true，否则返回false
    // arr.includes(seartchElement) //seartchElement需要朝赵的元素
    // arr.includes(seartchElement, fromIndex) // fromIndex 从该索引处开始查找searchElement,如果为负值，则按升序从 array.length + fromIndex 的索引开始搜索。默认为 0。
    // 返回值： boolean
    Array.prototype.toString()
    //可以把一个逻辑值转换为字符串，并返回结果；返回一个字符串，表示指定的数组及其元素；
    //arr.toString()
    //Array对象覆盖了Object的toString方法，对于数组对象，toString方法连接数组并返回一个字符串，其中包含用逗号分隔的每一个数组元素
    // toString() 方法是通用的，可被用于任何对象。将调用Object.prototype.toString()，并返回结果值。
    Array.prototype.toLocaleString()
    //arr.toLocaleString([locales[,options]])
    //locales (可选)带有BCP 47语言标记的字符串或字符串数组
    //options (可选) 一个可配置属性的对象，对于数字： Number.prototype.toLocaleString(),
    //对于日期： Date.prototype.toLocaleString()
    //返回值：表示数组元素的字符串
    Array.prototype.indexOf()
    //返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1
    //arr.indexOf(searchElement)
    //arr.indexOf(searchElement[, fromIndex = 0]) //formIndex 开始查找的位置
    //返回值： 首个被找到的元素在数组中的索引位置；若没有找到则返回-1

    Array.prototype.lastIndexOf()
    //返回指定元素的数组中的最后一个的索引，若不存在则返回-1；从数组的后面向前查找；
    //arr.lastIndexOf(searchElement[,fromIndex = arr.length-1)
    //fromIndex从此位置开始逆向查找


})();
//test begin
(function () {
    //concat()
    var al = ['a', 'g', 'b'];
    var num = [5, 4, 6];
    //将数组连接
    var newA = al.concat(num, num);
    console.log('数组连接：', newA);
    //将值连接到数组
    var na = {'mae': 11, 'func': 31};
    var newB = al.concat('sf', [12, 3, 5], na);
    console.log('将值连接到数组：', newB);
    //合并嵌套数组
    var num1 = [[23]];
    var num2 = [[3], ['ds']];
    var newC = num1.concat(num2);
    num1[0].push('da');
    console.log('合并嵌套数组：', newC);

    //join()
    console.log('默认逗号来连接',al.join()); //a,g,b
    console.log('逗号和空格来连接',al.join(', ')); //a, g, b
    console.log('空字符串来连接',al.join('')); //agb
    console.log('加号来连接',al.join(' + ')); //a + g + b
    //连接类数组对象
    //通过Array.prototype.join 上调用 Function.prototype.call
    function f(a,b,c){
        var s = Array.prototype.join.call(arguments);
        console.log(s); // 1,2,false
    }
    f(1,'2',false)

    var o ={0:42,1:52,2:63,length:3}
    console.log('@',o);
    console.log(Array.prototype.join.call(o,' '));
    var a = 'a#b#fd#copy';
    // 把字符串转换成数组
    console.log(a.split('#')); // ["a", "b", "fd", "copy"]

    //slice()
    var myHonda = {color : 'red', wheels: 4, engine: {cylinders :4, size: 2.2}};
    var fruits = [myHonda,'Banana','Orange','lemon','Apple','Mango'];
    var citrus = fruits.slice(1,3);
    console.log(citrus); //["Orange", "lemon"]
    console.log(fruits); //[{...},'Banana','Orange','lemon','Apple','Mango']
    console.log(fruits.slice(0,2)); // [{…}, "Banana"]
    console.log(JSON.stringify(fruits));
    //Array-like 类数组对象
    console.log('数组分割',myHonda)
    function list() {
        return Array.prototype.slice.call(arguments);
    }

    var list1 = list(1, 2, 3);
    console.log(list1)

    // toString()
    console.log('toString',fruits.toString()); //[object Object],Banana,Orange,lemon,Apple,Mango

    //toLocaleString()
    //总是在prices数组中显示字符串和数字的货币符号：
    var prices = ['￥7',500,8234,12]
    var pricesed = prices.toLocaleString('ja-JP', {style: 'currency',currency: 'JPY'});
    console.log(pricesed);
//?????toLocaleString() 效果未能正常实现，可能是所传参数有问题？？？？？？
    console.log(prices[2].toLocaleString(),'当处理number类型的值时，可以把数字处理成三位加逗号的格式');

    //indexOf()
    var ar = ['lemon','Banana','Orange','lemon','Apple','Mango','Orange'];
    var sa = ar.indexOf('Orange');
    console.log(sa);


    //lastIndexOf()
    var index = ar.lastIndexOf('lemon');
    console.warn(index);
    // 查找到一个元素在数组中在数组中所有的索引的下标，并使用push将所有添加到另一个数组中；
    var indeces =[];
    var array = ['a', 'b', 'a', 'c', 'a', 'd'];
    var element = 'a';
    var idx = array.lastIndexOf(element);
    console.log('```',idx);
    while (idx != -1) {
        indeces.push(idx);
        idx = (idx > 0 ? array.lastIndexOf(element, idx - 1) : -1);
        console.log('ind',indeces,idx);
    }
})();

//includes()
    // [1, 2, 3].includes(2);
    // (function() {
    //     console.log([].includes.call(arguments, 'a')); // true
    // })('a','b','c');