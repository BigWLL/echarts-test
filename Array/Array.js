/*
* 会改变数组自身的方法
*
* */
(function(){
    //console.log('匿名函数自调');
    var Array1 =['one','two','three','four','five'];
    var Array2 = [{name: 'wang',age: 10},{name: 'li',age: 20},{name: 'll',age: 8},]
    console.log(Array1.indexOf('four'));
    //indexOf()方法可返回某个指定的字符串值在字符串中首次出现的位置。(对大小写敏感，当检索的字符串值不存在时返回-1)

    //原型是javaScript全局构造函数，它可以构建新JavaScript对象的属性和方法；
    //Array.prototype属性表示Array构造函数的原型
    Array.prototype.myUcase=function(){
        for (i=0;i<this.length;i++){
            this[i]=this[i].toUpperCase();
        }
    };
    Array1.myUcase();
    console.dir(Array1);

    //
    if(!Array.prototype.first){
        Array.prototype.first = function(){
            console.log('如果JavaScript本身不提供first()方法，添加一个返回数组的第一个元素的方法');
            return this[0];
        }
    }

    console.log(Array.isArray(Array.prototype)) //true //Array.prototype本身也是一个Array

    //总结：Array实例继承自Array.prototype
    //Array.prototype.constructor
    //所有的数组实例都继承了这个属性，它的值就是 Array，表明了所有的数组都是由 Array 构造出来的。

    //数组的方法
    //会改变自身的方法：(会改变调用它们的对象自身的值)：
    Array.prototype.copyWithin() //在数组内部，将一段元素序列拷贝到另一段元素序列上，覆盖原有的值，并返回它，而不修改其大小
    //arr.copyWithin(target[, start[, end[) 返回：改变后的数组
    //0 为基底的索引，复制序列到该位置。如果是负数，target 将从末尾开始计算
    //一个可变方法，不会改变this的length，但是会改变this本身的内容，IE不支持
    Array.prototype.fill() // 法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。
    // arr.fill(value[, start[, end]]) //value用来填充数组元素的值, 返回值：修改后的数组
    //不更改数组的长度
    Array.prototype.pop() // 从数组中删除最后一个元素，并返回该元素的值，会更改数组的长度；(当数组为空时返回undefined）
    //arr.pop()
    Array.prototype.push() //将一个或多个元素添加到数组的末尾，并返回新数组的长度；
    //arr.push(element1,...,elementN) //elementN被添加到数组末尾的元素
    Array.prototype.reverse() //方法将数组中元素的位置颠倒。第一个数组元素成为最后一个数组元素，最后一个数组元素成为第一个
    //arr.reverse()
    Array.prototype.shift() // 从数组中删除第一元素，并返回该元素的值，更改数组的长度；
    //arr.shift()
    Array.prototype.unshift() // 在数组的开头添加一个或者多个元素，返回数组的新长度
    //arr.unshift(element1,...,elementN)//elementN被添加到数组头部的元素
    Array.prototype.sort() // 用原地算法对数组元素进行排序，并返回数组，排序并不一定是稳定的，默认根据Unicode码点排序
    // arr.sort([compareFunction]) compareFunction用来指定按某种顺序进行排列的函数
    //由于它取决于具体实现，因此无法保证排序的时间和空间复杂性。
    // 注意：排序后的数组。请注意，数组已原地排序，并且不进行复制。
    //如果：compareFunction(a, b) 小于 0 ，那么 a 会被排列到 b 之前
    //如果：compareFunction(a, b) 大于 0 ，那么 b 会被排列到 a 之前
    //如果：compareFunction(a, b) 等于 0 ，那么 a 和 b 的位置不变

    Array.prototype.splice()
    //在任意的位置给数组添加或删除任意个元素
    //array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
    //start 指定修改的开始位置（从0技术），若超出数组长度，则从数组末尾开始添加
    //deleteCount 要移除的数组元素的个数，0，则不移除（至少要添加一个新元素）
    //item1,item2 要添加进数组的元素,从start 位置开始。如果不指定，则 splice() 将只删除数组元素
    //①、从start位置开始删除[start，end]的元素。
    // array.splice(start)
    //②、从start位置开始删除[start，Count]的元素。
    //array.splice(start, deleteCount)
    //③、从start位置开始添加item1, item2, ...元素。
    //array.splice(start, 0, item1, item2, ...)
    //返回值：由被删除的元素组成的一个数组。如果只删除了一个元素，则返回只包含一个元素的数组。
    // 如果没有删除元素，则返回空数组


})();
// 上述() 是指自调，“!+-()”运算符是最高的，之所以使用()是应为它更安全，可以减少不必要的麻烦；
//(function(){})();这样写好处是在内部定义的变量不会跟外部的变量有冲突，保护内部变量的作用；

(function(){
    var array1 = [1,2,3,4,5];
    console.log(array1.copyWithin(0,3,4)); // [4, 2, 3, 4, 5] //将位置3到4之间的值拷批到0位置处
    console.log(array1.copyWithin(1,3)); // [4, 4, 5, 4, 5] //将位置3之后的值拷批到1位置开始依次后面覆盖

    console.log(array1.fill('one',3)); //[4, 4, 5, "one", "one"]

    var popped = array1.pop();
    console.log(array1); // [4, 4, 5, "one"]
    console.log(popped) // one

    //push
    var total = array1.push('push-name','push-age');
    console.log(total) // 6
    console.log(array1) // [4, 4, 5, "one", "push-name", "push-age"]

    var moreVegs = ['celery','beet'];
    Array.prototype.push.apply(array1,moreVegs); //使用 apply() 添加第二个数组的所有元素
    console.log(array1); //[4, 4, 5, "one", "push-name", "push-age", "celery", "beet"]
    //相当于
    array1.push('celery','beet');
    console.log(array1); //[4, 4, 5, "one", "push-name", "push-age", "celery", "beet", "celery", "beet"]

    function mainP(){
        var temp = [];
        array1.map(function(item,i){
            temp.push(
                '<li class="' + i +' ">' + item + '</li>'
            )
        });
        return temp;
    }
    console.log(mainP().join(""));

    var dom = document.getElementById('mainUl');
    // document.write(mainP().join(""));
    function domPush(){
        dom.innerHTML= mainP().join("")
    }
    domPush();

    //reverse()
    array1.reverse();
    console.log('reverse',array1); //["beet", "celery", "beet", "celery", "push-age", "push-name", "one", 5, 4, 4]

    //shift()
    var shifted = array1.shift();
    console.log('调用shift之前',array1); //["celery", "beet", "celery", "push-age", "push-name", "one", 5, 4, 4]
    console.warn('被删除的项',shifted); // beet

    //unshift()
    var unshift = array1.unshift('xinjia');
    console.log(array1); //["xinjia", "celery", "beet", "celery", "push-age", "push-name", "one", 5, 4, 4]
    console.log(unshift); // 10

    //sort()
    //console.log(array1.sort()) //[4, 4, 5, "beet", "celery", "celery", "one", "push-age", "push-name", "xinjia"]
    //sort(使用函数返回值排序)
    //比较数字而非字符串，比较函数可以使用a减b,将会是升序
    var number = [10,9,4,5,1,30];
    // number.sort(function(a,b){return a - b});
    // console.log(number); // [1, 4, 5, 9, 10, 30]
    function compare(a,b){
        if(a < b){
            console.log('1')
            return -1 ; //a排在b前面,升序
        }
        if(a > b){
            console.log('2')
            return 1; // b排在a前面，降序
        }
        console.log('3')
        return 0; //位置不变
    }
    // console.log('排序',array1.sort(compare)) //(10) ["beet", "celery", "celery", "one", "push-age", "push-name", "xinjia", 4, 4, 5]

    //对象可以按照某个属性排序
    //在使用sort排序之前，先清洗数据，在进行sort排序
    var items = [
        { name: 'Edward', value: 21 },
        { name: 'Sharpe', value: 37 },
        { name: 'And', value: 45 },
        { name: 'The', value: -12 },
        { name: 'Magnetic' },
        { name: 'Magnetic',value: 10 },
        { name: 'Zeros', value: 37 }
    ];
    //处理数据

    console.log('items---',items);

    debugger;

        var temp = [];
        var temp2 = [];
        items.map(function(item,i){
            if(!item.value){
                console.log('===',item,i);
                temp.push(item);
            }else{
                temp2.push(item)
            }
        });

        temp.map(function(item,i){
            temp2.push(item);//把数组中value值undefined的数组项，放到数组的末尾
        });
        console.log('////',temp2);

    //按照value值排序
    temp2.sort(function(a, b){
        return (a.value - b.value);
    });
    console.log('按value排序：',temp2);


    //按照name值排序
    temp2.sort(function(a, b){
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();
        if(nameA < nameB){
            return -1;
        }
        if(nameA > nameB){
            return 1;
        }
        return 0;
    });
     console.log('按照name排序', temp2);

     //对非ASCII字符排序（如包含类似 e, é, è, a, ä 等字符的字符串）。一些非英语语言的字符串需要使用 String.localeCompare。这个函数可以将函数排序到正确的顺序
    var itemsF = ['réservé', 'premier', 'cliché', 'communiqué', 'café', 'adieu','ac'];
    itemsF.sort(
        function(a,b){
            return a.localeCompare(b);
        }
    );
    console.warn('非ASCII字符', itemsF);

    //使用映射改善排序
    //当compareFunction较为复杂时，且元素较多时，某些compareFunction可能会导致很高的负载，使用map辅助排序
    //基本思想是首先将数组中的每个元素比较的实际值取出来，排序后再将数组恢复。

    var list = ['Delta', 'alpha', 'CHARLIE', 'bravo'];
    //对需要排序的数字和位置进行临时的存储；
    var mapped = list.map(function(el,i){
        return {index: i, value: el.toLowerCase()};
    });
    console.log(mapped);

    //按照多个值排序数组
    mapped.sort(
        function(a,b){
            // a.value > b.value 为true or false 加号，会转为数字0或1
            return  +(a.value > b.value) || +(a.value > b.value) -1
        }
    );
    console.log('-=+',mapped);
    //根据索引得到排序结果
    var result = mapped.map(function(el){
        return list[el.index];
    })
    console.log('result',result)

    //splice()
    //splice()会直接对数组进行修改
    //从第二位开始插入drum
    var removed = array1.splice(2,0,'drum');//start开始位置，包括当前位置
    console.log('插入数组drum',array1);
    console.log('插入数组drum返回值',removed); //splice()的返回值时删除的项（元素）
   // var removed2 = array1.splice(2,1);
   // var removed3 = array1.splice(2,1,'add');
    var removed4 = array1.splice(array1.length -3 ,1,'add');
   // var removed5 = array1.splice(2); // 第二位开始删除之后所有元素

    console.log('删除数组',array1);
    console.log('删除数组的返回值',removed4); //splice()的返回值时删除的项（元素）
})();