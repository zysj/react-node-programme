

!function(factory,global,$){

    global = global || window;
    if(!$ || $() instanceof jQuery !== true)return;
    if(typeof module == 'object' && typeof exports == 'object')return module.exports = factory(global);
    if(typeof define == 'function' && typeof define.amd == 'object')return define(factory);

    return factory(global);

}(function(global){

    var verifyMethod = {
        'required':{
            method:isNull,
            errmsg:'输入内容不能为空'
        },
        'maxLength':{
            method:isMaxLength,
            errmsg:'输入内容长度不能超过'
        },
        'btwLen':{
            method:isBtwLen,
            errmsg:'输入内容长度在'
        },
        'email':{
            method:isRegValid,
            errmsg:'输入的邮箱格式不正确'
        },
        'phone':{
            method:isRegValid,
            errmsg:'输入的手机号码格式不正确'
        },
        'identity':{
            method:isRegValid,
            errmsg:'输入的身份证号码格式不正确'
        },
        'date':{
            method:isRegValid,
            errmsg:'输入的日期格式不正确'
        },
        'url':{
            method:isRegValid,
            errmsg:'输入的链接格式不正确'
        },
        'money':{
            method:isRegValid,
            errmsg:'输入的金额格式不正确'
        },
    }

    var defaultVerify = {
        'money':[/^\d{1,13}(\.(\d{1,2}))?$/],
    }

    function isNull(el){
        if(!el)return;
        var str = el.val();
        return str == null || str == '';
    }

    function isMaxLength(el){
        var len = +el.attr('maxLength');
        if(isNaN(len))return false;
        var val = el.val();
        val += '';
        return val.length > len;
    }

    function isBtwLen(el,opt){
        if(!el)return;
        var min = el.data('min');
        var max = el.data('max');
        if(!min || !max)return false;
        var len = el.val().length;
        opt.errmsg += min + '~' + max + '之间';
        return len > max || len < min;
    }

    function validatePwd(el){
        if(!el)return;
        var str = el.val().trim();
        var level = 0;
        if(/[^A-Za-z0-9\!\,\.\?\+\=\-\*]/g.exec(str)){
            return 0;
        }
        if(/\d+/g.exec(str)){
            level++;
        }
        if(/[A-Za-z]+/g.exec(str)){
            level++;
        }
        if(/[\!\,\.\?\+\=\-\*]+/g.exec(str)){
            level++;
        }
        return level;
    }

    function isRegValid(el,reg){
        if(!el || Object.prototype.toString.call(reg)  !== '[object RegExp]')return false;
        var val = el.val().trim();
        return !reg.exec(val);
    }

    function arrToObj(arr){
        var obj = {};
        for(var i = 0,len=arr.length;i<len;i++){
            obj[arr[i]] = {};
        }
        return obj;
    }

    function validateUtil(option){
        if(this instanceof validateUtil !== true){
            return new validateUtil(option);
        }
        this.option = $.extend({},option);
        this.verify = $.extend({},defaultVerify,this.option.verify);
        this.layer = this.option.layer;
    }

    $.extend(validateUtil,{
        'isNull':isNull,
        'isRegValid':isRegValid,
        'validatePwd':validatePwd,
        'isMaxLength':isMaxLength,
        'isBtwLen':isBtwLen
    });

    validateUtil.prototype.validate = function(el,option){
        if(!el)return;
        var errmsg = "";
        var verify = this.verify;
        var opt = {};
        for(var i in option){
            opt = $.extend({},verifyMethod[i],option[i]);
            var onErr = opt.onErr || this.defaultOnErr;
            var method = opt.method;
            if(method){
                if(i == 'btwLen' && method(el,opt))return onErr.call(this,el,opt);
                if(method(el,verify[i] ? verify[i][0] : ''))return onErr.call(this,el,opt);
            }
        }
        opt.errmsg = '';
        onErr.call(this,el,opt);
        return opt;
    }

    validateUtil.prototype.validateInput = function(el,option){
        if(!el)return;
        var opt = {};
        var that = this;
        if(Object.prototype.toString.call(option) === '[object Array]')option = arrToObj(option);
        el.on('keyup blur',function(e){
            that.validate(el,option)
        });
    }

    validateUtil.prototype.defaultOnErr = function(el,opt){
        var errMsg = el.siblings('.error-msg');
        opt.errmsg && this.layer && this.layer.msg(opt.errmsg);
        return errMsg.html(opt.errmsg);
    }

    validateUtil.prototype.validatePwd = function(el,callback){
        if(!el)return;
        var that = this;
        el.on('keyup blur',function(e){
            var self = $(this);
            var level = validatePwd(el);
            var errmsg = '';
            if(typeof callback == 'function'){
                callback.call(null,level);
            }else{
                if(level<2){
                    errmsg = '密码必须包含英文、数字和特殊字符!、,、.、?、+、=、-、*的其中两种!';
                }
                that.defaultOnErr(el,{errmsg:errmsg});
            }
        });
    }

    validateUtil.prototype.ajaxValidate = function(el,ajaxOption,completeCb){
        if(!el || !ajaxOption || typeof completeCb != 'function')return;
        var opt = $.extend({},ajaxOption);
        var timer = null;
        el.on('keyup blur',function(e){
            if(timer)clearTimeout(timer);
            var self = $(this);
            var name = self.attr('name');
            timer = setTimeout(function(){
                var loading = $("<span class='loading'></span>");
                self.before(loading);
                opt.data[name] = self.val();
                $.ajax(opt).done(function(){
                    loading.remove();
                    completeCb.apply(null,arguments);
                });
            },700);
        });
    }

    return validateUtil
},window,window.jQuery);