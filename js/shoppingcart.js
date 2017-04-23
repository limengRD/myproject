    Vue.component('shoppingcart',{ 
         name:'shoppingcart',
         data () {
             return {
                 key:"aaa" ,
                 goods:{},
                 totalMoney:0,
                 items:[],
                 checkAllFlag:false   
             }
         },
         mounted:function(){
                this.cartView();
            },
         methods:{
            cartView:function(){
                var _this = this
                this.$http.get("/static/cartData.json").then(function(res){
                              console.log(res)
                             _this.totalMoney = res.body.result.totalMoney;
                             _this.items = res.body.result.list;
                        });
            },
            doSubtraction:function(item){
                if(item.productQuentity>1) 
                {
                    item.productQuentity = item.productQuentity-1;
                }
            },
            doAdd:function(item){
                item.productQuentity=item.productQuentity+1;
            },
            selectProduct:function(item){
                if(typeof item.checked == "undefined"){
                    Vue.set(item,"checked",true);
                }else{
                    item.checked = !item.checked;
                }
            },
            checkAll:function(){
                this.checkAllFlag = !this.checkAllFlag;
                var _this = this;
                    this.items.forEach(function(item,index){
                        if(typeof item.checked == 'undefined'){
                            _this.$set(item,"checked",_this.checkAllFlag);
                        }else{
                            item.checked = _this.checkAllFlag;
                        }
                    }); 
            }
        },
        watch:{
            item:function(a,b){
             
            }
        }
  })