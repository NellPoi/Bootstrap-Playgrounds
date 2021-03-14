try {
    const makeAClean = (n = 20) => {
        let i = "=", e = 0;
        while (e < n) {
            i += "="
            e++;
        }
        console.log(i)
    };

//创建空的对象
    var loneyFamily = {}
//创建对象并添加成员
    var family = {
        "father": " 13607553887",
        "mother": " 13607559600",
        "son": " 15960623557",
        call: (num) => {
            console.log("打电话给" + num)
        }
    }
//输出整个对象
    console.log(family)
//输出father成员的字符串型的值
    console.log(family.father)
//数组内的多个对象
    var school = [{
        "college": "信息与智慧交通学院",
        "year": "2020"
    }, {
        "college": "信息系学院",
        "year": "2019"
    }]
//访问数组的第一个对象的成员进行拼接
    console.log(school[0].year + school[0].college)
    console.log(family["father"] + family["son"])
    makeAClean()
//为对象增加属性和方法
    school[0].test = 'this is new attribute!'
    school[0]['test2'] = "123"
    school[0].introduce = () => {
        console.log("this is new function!")
    }
    console.log(family.test)
    school[0].introduce();
    console.log(school[0].test2)
    makeAClean()
//可变成员名
    var o6 = {}
    var key = "id";
    o6[key] = 123;
    console.log(o6)

    makeAClean()
//动态的给对象添加成员
    var o7 = {}
    var member = document.getElementById("debug-input-text1")
    var element = document.getElementById("debug-input-text2")

    function debug_Object() {
        o7[member.value] = element.value
        console.info(o7)
    }

    makeAClean()
//便利对象成员
    for (var k in family) {
        console.log(k)
    }
    makeAClean()
//判断对象中某个成员是否存在
    console.log('mother' in family)//输出结果：true 存在

    makeAClean()
//浅拷贝
    var phone = {"iPhone 12 mini": "5999", "iPad Air 4": "5999"}
    var phone_cheap = phone//浅拷贝
    phone_cheap["iPhone 12 mini"] = "5699"//修改成员的值，旧的成员值也会跟着变化
    console.log(phone)//Object {iPhone 12 mini: "5699", iPad Air 4: "5999"}
    console.log(phone_cheap)//Object {iPhone 12 mini: "5699", iPad Air 4: "5999"}
    var phone_really = {}

//深拷贝
    deepCopy()

    function deepCopy(phone) {
        for (var i in phone) {
            phone_really[i] = (typeof phone[i] === 'object') ? deepCopy(phone[i]) : phone_really[i];
        }
        console.log(phone_really)
    }

    makeAClean()
//JavaScript 内置的构造函数
    var obj1 = new Object()//创建object对象
    var str = new String('123')//创建String对象
    console.log(obj1)
    console.log(str)

    makeAClean()

    class book {
        constructor(name, price, type) {
            this.name = name
            this.price = price
            this.type = type
        }

        static printInfo() {
            console.log("你买的书是：" + this.name + ",价格为：" + this.price)
            // console.info(new book("高等数学",39,"必修"))
        }

        static printDefault() {
            console.log(new book('高等数学', "39", "选修"))
        }
    }

    var order = new book("新华字典", "100", "选修")
    //实例化会自动调用constructor构造方法
    book.printInfo()
    book.printDefault()

    makeAClean()

    function Person() {
        var name = "Tim Cook"
        this.getName = () => {
            return name
        }
    }

    var p = new Person()
    console.log(p.name) //访问私有成员，返回undefined
    console.log(p.getName())

} catch (error) {
    // 缺点：
    // try catch是有范围限制的，并不能捕捉到所有断点
    // 捕捉到断点时，浏览器具有比IDE更高的优先级，IDE则不能显示断点信息
    var tmp = null, title = document.title;
    let throwError = prompt('实时断点:\n' + error, error)
    if (throwError != 0 && throwError != tmp) {
        document.title = "断点状态｜点击确定百度搜索该错误"
        window.location.href = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=" + throwError
    } else {
        document.title = title
    }
}