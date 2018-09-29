/*
* 数组的遍历方法
* 注意：
* 不要尝试在遍历过程中对原数组进行任何修改；
*
* 果你在回调函数中为当前数组添加了新的元素，那么那些新添加的元素是不会被遍历到的。
* 此外，如果在回调函数中对当前数组进行了其它修改，比如改变某个元素的值或者删掉某个元素，
* 那么随后的遍历操作可能会受到未预期的影响。
*
*注意： 没有办法中止或者跳出 forEach 循环，除了抛出一个异常。
* 如果你需要这样，使用forEach()方法是错误的，你可以用一个简单的循环作为替代。
* 如果您正在测试一个数组里的元素是否符合某条件，且需要返回一个布尔值，那么可使用 Array.every 或 Array.some。
* 如果可用，新方法 find() 或者findIndex() 也可被用于真值测试的提早终止。
*
* */

    //Array.prototype.forEach()
    //forEach() 方法对数组的每一个元素执行一次提供的函数
    //array.forEach(callback(currentValue,index,array){//do something},this)
    //array.forEach(callback[,thisArg])
    //参数 currentValue数组中正在处理的当前元素；index可选数组中正在处理的当前元素的索引；array可选forEach()方法正在操作的数组。thisArg可选可选参数。当执行回调 函数时用作this的值(参考对象)
    //返回值：undefined
    //forEach 方法按升序为数组中含有效值的每一项执行一次callback 函数，那些已删除或者未初始化的项将被跳过

    // Array.prototype.every()
        //every() 方法测试数据的所有元素是否都通过了指定函数的测试
        //arr.every(callback[,thisArg]) callback用来测试每一个元素的函数，thisArg执行callback时使用的this值
        //描述：方法为数组中的每个元素执行一次 callback 函数，直到它找到一个使 callback 返回 false（表示可转换为布尔值 false 的值）的元素。

    //Array.prototype.some()
    //some() 方法测试数组中的某些元素是否通过由提供的函数实现的测试；
    //arr.some(callback[, thisArg])

    //filter()
    //方法创建一个新数组，其包含通过所提供函数实现的测试的所有元素
    //var new_array = arr.filter(callback(element[, index[, array]])[, thisArg])


(function () {
    //遍历方法
    var item = ['item1','item2','item3'];
    var copy = [];
    var copyto = [];
    for (var i=0 ; i<item.length; i++ ){
        copy.push(item[i]);
    }
    console.log(copy);
    copy.forEach(function(item,index){
        // copy.push(item);
        copyto.push({key: index,value: item}) //处理成数组对象的形式
    })
    console.log(copyto);

    //对象复制函数
    function copyt(obj){
        //Object.create()创建一个具有指定原型且可选择性的包含指定属性的对象
        //Object.getPrototypeOf 返回对象的原型
        //Object.getOwnPropertyNames返回对象自己的属性的名称。一个对象的自己的属性是指直接对该对象定义的属性，而不是从该对象的原型继承的属性。对象的属性包括字段（对象）和函数。
        //Object.getOwnPropertyDescriptor获取指定对象的自身属性描述符，自身属性描述符是指直接在对象上定义（而非从对象的原型继承）的描述符
        //Object.defineProperty将属性添加到对象，或修改现有属性的特性
        var copys = Object.create(Object.getPrototypeOf(obj));
        var propNames = Object.getOwnPropertyNames(obj);
        propNames.forEach(function(name){
            var desc = Object.getOwnPropertyDescriptor(obj,name)
            Object.defineProperty(copys,name,desc)
        })
        return copys;
    }
    var obj1 = { a: 1, b: 2 };
    var obj2 = copyt(obj1);
    console.log(obj2)
    //如果数组在迭代时被修改了，则其他元素会被跳过
    var words = ["one", "two", "three", "four","six"];
    words.forEach(function(word) {
        console.log(word);
        if (word === "two") {
            words.shift();
        }
    });
    console.log(words)

    //检测所有数组元素的大小
    function isBig(element, index, array){
        return (element >= 10)
    }
    var passed = [12, 5, 8, 130, 44].every(isBig);
    console.log('passed',passed); //false
    var passed2 = [12,30,10].every(isBig);
    console.log('passed2',passed2); //true

    //检测数组元素的值
    var passedSome = [4, 5, 8, 3, 1].every(isBig);
    console.log('passedSome',passedSome); // false
    var passed2Some = [12,30,3].every(isBig);
    console.log('passed2Some',passed2Some) //true

    //[4, 5, 8, 3, 1].some(x => x > 10); //false //使用箭头函数（提供了更少的语法）

    //使用some() 模拟includes(),判断数组元素中是否存在某个值
    function checkA(arr, val){
        return arr.some(function(arrVal){
            console.log(arrVal);
            return val === arrVal;
        });
    }
    console.log('some()模拟includes',checkA(words,'six')) // true
    console.log('some()模拟includes',checkA(words,'nine')) // false

    //filter() 筛选排除掉所有的小值
    var filtered = [12,3,56,7,11,6,123].filter(isBig)
    console.log('filtered',filtered);
    //过滤json中的无效条目
    //以下实例使用filter() 创建具有非零id的json
    var arr = [
        { id: 15 },
        { id: -1 },
        { id: 0 },
        { id: 3 },
        { },
        { id: 12.2 },
        { id: null },
        { id: NaN },
        { id: 'undefined' }]
    var invalid = 0;
    function isNumber(obj){
        return obj !== undefined && typeof(obj) === 'number' && !isNaN(obj);
    }
    function filterByID(item){
        if(isNumber(item.id) && item.id !== 0){
            return true;
        }
        invalid++;
        return false;
    }
    var arrByID = arr.filter(filterByID);
    console.log('Filtered Array\n', arrByID);

    //在数组中搜索
    var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
    function filterItem(query){
        return fruits.filter(function(el){
            return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
        })
    }
    console.log(filterItem('ap')); // ["apple", "grapes"]
})();