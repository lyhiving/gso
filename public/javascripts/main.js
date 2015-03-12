(function () {
    var common;
    this.setAsDefault = function () {
      var _external = window.external;
      if (_external && ('AddSearchProvider' in _external) && ('IsSearchProviderInstalled' in _external)) {
            var isInstalled = 0;
            try {
               isInstalled = _external.IsSearchProviderInstalled('http://uc.my');
                if (isInstalled > 0) {
                    alert("已添加过此搜索引擎");
                }
            } catch (err) {
              isInstalled = 0;
            }
            console.log("isInstalled: " + isInstalled);
          _external.AddSearchProvider('http://uc.my/opensearch.xml');
      } else {
          window.open('http://uc.my');
      }
      return false;
   };

   /**
    * 切换弹出框显示
    * @param  {[type]} id        [弹出框元素id]
    * @param  {[type]} eventName [事件名称]
    */
   this.swithPopver = function  (id,eventName) {
        var ele = document.getElementById(id);
        if ((eventName && eventName === 'blur') || ele.style.display === 'block') {
            ele.style.display = 'none';
        } else {
            ele.style.display = 'block';
        }
    };
})();
