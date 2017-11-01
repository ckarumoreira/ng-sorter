(function () {
  angular.module("ng-sorter.filters")
  .filter("sort", function () {
    return function (arr, opt) {
      if (!angular.isArray(arr) || arr.length === 0) {
        return arr;
      }

      let array = arr.slice();

      let options = angular.copy(opt);

      let filters = options.priority.filter(function (item) {
        return options.config[item].sort !== 'none';
      });
      
      let sortStack;

      if (filter.length >= 1) {
        let config = options.config[filters[0]];
        let sortStack = firstBy(config.func, ConfigureSort(config));

        for (let i = 1; i < filters.length; i++) {
          config = options.config[filters[i]];
          sortStack = sortStack.thenBy(config.func, ConfigureSort(config));
        }
      }
      
      if (sortStack) {
        array.sort(sortStack);
      }

      return array;
    };

    function ConfigureSort(config) {
      let options = { ignoreCase: true };
      if (config.sort == 'descending') {
        options.direction = -1;
      }
      return options;
    }
  });
})();