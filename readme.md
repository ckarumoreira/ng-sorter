# ng-sorter
A module for multi-field dynamic sort on ng-repeat from AngularJS.

## Dependencies
[thenBy.js](https://github.com/Teun/thenBy.js)

## Installation
    bower install --save ng-sorter

## Configuration

* Import the ng-sorter.min.js script in your page. For example:
```html
<script src="ng-sorter.min.js"></script>
```
* Include the module name 'ng-sorter' in your angular app. For example:
```javascript
angular.module('app', ['ng-sorter']);
```

## Usage
You must define a configuration for your sort inside your controller following this schema:
```javascript
this.order = {
  priority: [ 'columnA', 'columnB', 'columnC' ],
  config: {
    columnA: { direction: 'asc', func: function (item) { return item.columnA; } },
    columnB: { direction: 'desc', func: function (item) { return item.columnB; } },
    columnC: { direction: 'none', func: function (item) { return item.columnC.sorting.by.inner.property; } }
  }
}
```
Then, you must add the `sort` filter to your `ng-repeat`, like this:
```html
<tr ng-repeat="$item in $ctrl.collection | sort: $ctrl.order">
(...)
</tr>
```

If you want to control your filter from your view, you can add the `sorter` element to your `th` elements. For example:
```html
<th>
    Column A Header
    <sorter order="order.config.columnA" />
</th>
```

## Planned Changes
* Custom service to help the building of the sort configuration.

## Author
[Carlos Moreira](http://www.codepen.io/ckarumoreira)

## Acknowledgments
* Thank you, [Teun](https://github.com/Teun), for your thenBy.js. Pretty handy lib.