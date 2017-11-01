(function () {
  angular.module("ng-sorter.filters")
  .filter("sort", function () {
    return function (arr, opt) {
      if (!angular.isArray(arr) || arr.length === 0) {
        return arr;
      }

      let list = arr.slice();

      let options = angular.copy(opt);

      let filters = options.priority.filter(function (item) {
        return options.config[item].direction !== 'none';
      });
      
      if (filters.length > 0) {
        let sortStack = firstBy(function (item) { return 0; });
        
        for (let i = 0; i < filters.length; i++) {
          let filter = filters[i];
          let config = options.config[filter];
          if (config.direction === 'desc') {
            sortStack = sortStack.thenBy(config.func, -1);
          } else {
            sortStack = sortStack.thenBy(config.func);
          }
        }
        
        list.sort(sortStack);
      }

      return list;
    };
  });
})();