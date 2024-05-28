/*Vue+Element样式弹窗*/
new Vue({
    data: function () {
        this.$notify({
            title: "你已被发现😜",
            message: "小伙子，扒源记住要遵循GPL协议！",
            position: 'top-left',
            offset: 50,
            showClose: true,
            type: "info",
            duration: 5000
        });
    }
})
/*Vue+Element样式弹窗(随手放在这里)*/



// 防抖全局计时器
let TT = null;    //time用来控制事件的触发
// 防抖函数:fn->逻辑 time->防抖时间
function debounce(fn, time) {
    if (TT !== null) clearTimeout(TT);
    TT = setTimeout(fn, time);
}
// 防抖全局计时器

