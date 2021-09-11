'use strict';

var app = angular.module('TablaDemo', []);
app.controller('TablaCtrl', ['$scope', function($scope) {
$scope.lista = [{
    nombre: 'Radio',
    dalta: '100',
    dmedia: '40',
    dbaja: '20'
}, {
    nombre: 'Tv',
    dalta: '80',
    dmedia: '20',
    dbaja: '5'
}, {
    nombre: 'Prensa',
    dalta: '90',
    dmedia: '35',
    dbaja: '25'
}];


$scope.eliminar = function(row) {
    if (confirm("¿Seguro que desea eliminar?")) {
    $scope.lista.splice(row, 1);
    }
};

$scope.agregar = function() {
    $scope.lista.push({
        nombre: 'Nuevo elemento',
        dalta: '',
        dmedia: '',
        dbaja: ''
    })
};

$scope.recuperarValores = function() {
    console.log($scope.lista);
    console.log($scope.lista[0].dalta.trimLeft().trimRight())
    const maxDalta = 
          $scope.lista.filter(element => element.dalta == Math.max.apply(Math, $scope.lista.map(function(o) { return o.dalta; })));
    const minDbaja = $scope.lista.filter(element => element.dbaja == Math.min.apply(Math, $scope.lista.map(function(o) { return o.dbaja; })));
    
  
    $("#JSON").text('Max: ' + JSON.stringify(maxDalta) + '\nMin: ' + JSON.stringify(minDbaja));
  
   //$("#JSON").text('EL/los maximo(s) son: ' + maxDalta[0].nombre );
};
}]);

app.directive('editableTd', [function() {
return {
    restrict: 'A',
    link: function(scope, element, attrs) {
    element.css("cursor", "pointer");
    element.attr('contenteditable', 'true');

    element.bind('blur keyup change', function() {
        scope.lista[attrs.row][attrs.field] = element.text();
    });

    element.bind('click', function() {
        document.execCommand('selectAll', false, null)
    });
    }
};
}]);