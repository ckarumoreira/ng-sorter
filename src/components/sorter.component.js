(function () {
  angular.module('ng-sorter.components')
  .component('sorter', {
    templateUrl: 'sorter/sorter.template.html',
    bindings: {
      order: '=',
      // order: { priority: ["key"], config: { "key": { direction: -1, func: function (item) { return item.property; } } } }
      baseIcon: '<',
      ascIcon: '<',
      descIcon: '<'
    },
    controller: function () {
      let self = this; 

      this.$onInit = function () {
        if (this.baseIcon) {
          self.classes.asc.push(this.baseIcon);
          self.classes.desc.push(this.baseIcon);
        }
        self.classes.asc.push(this.ascIcon);
        self.classes.desc.push(this.descIcon);

        ChangeTo(self.order.sort);
      };

      function ChangeTo(state) {
        this.classes[this.order.sort].pop();

        if (this.order.sort == state) {
          this.order.sort = 'none';
        } else {
          this.order.sort = state;
          this.classes[state].push('active');
        }
      }

      function IsState(state) {
        return this.order.sort === state;
      }
      
      this.classes = {
        ascending: [],
        descending: []
      };

      this.asc = function () { ChangeTo('ascending'); }
      this.desc = function () { ChangeTo('descending'); }
        
      this.isAsc = function () { return IsState('ascending'); };
      this.isDesc = function () { return IsState('descending'); };
    }
  });
})();