(function () {
  angular.module('ng-sorter.components')
  .directive('sorter', function () {
    return {
      templateUrl: 'components/sorter.template.html',
      restrict: 'AE',
      scope: {
        order: '=',
        onOrderChange: '&'
      },
      controller: [
        '$scope',
        function ($scope) {
          $scope.asc = function () {
            if ($scope.isAsc()) {
              $scope.order.direction = 'none';
            } else {
              $scope.order.direction = 'asc';
            }

            $scope.onOrderChange();
          };
          $scope.desc = function () {
            if ($scope.isDesc()) {
              $scope.order.direction = 'none';
            } else {
              $scope.order.direction = 'desc';
            }
            
            $scope.onOrderChange();
          };
          
          $scope.isAsc = function () {
            return $scope.order.direction === 'asc';
          };
          
          $scope.isDesc = function () {
            return $scope.order.direction === 'desc';
          };
        }
      ]
    };
  });
})();