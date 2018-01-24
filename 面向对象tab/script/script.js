//1、创建构造函数
function Tab(targetID) {
    //2、把变量变成对象的属性
    this.tab = document.getElementById(targetID);
    this.spans = this.tab.getElementsByTagName('span');
    this.lis = this.tab.getElementsByTagName('li');
    var _this = this;//此时this指向实例对象
    for (var i = 0; i < this.spans.length; i++) {
        this.spans[i].onclick = function () {
            _this.clickTab(this);//此时this指向点击的span
        }
    };
}
//3、把函数变成对象的方法
Tab.prototype.clickTab = function (target) {//target指向点击的span
    for (var i = 0; i < this.spans.length; i++) {
        if (this.spans[i] == target) {//此时this指向实例对象
            this.spans[i].className = 'select';
            this.lis[i].className = 'show';
        } else {
            this.spans[i].className = '';
            this.lis[i].className = '';
        }
    }
}
//4、实例对象-多处使用
var tab1 = new Tab('tab');
var tab2 = new Tab('tab2');
