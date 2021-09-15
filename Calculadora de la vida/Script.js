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
        nombre: 'Chriss',
        dalta: '',
        dmedia: '',
        dbaja: ''
    })
};

$scope.recuperarValores = function() {
    var jsonDiv = document.getElementById("JSON");
    jsonDiv.innerHTML = "";
    console.log($scope.lista);
    console.log($scope.lista[0].dalta.trimLeft().trimRight())
    const maxDalta = 
          $scope.lista.filter(element => element.dalta == Math.max.apply(Math, $scope.lista.map(function(o) { return o.dalta; })));
    const minDbaja = $scope.lista.filter(element => element.dbaja == Math.min.apply(Math, $scope.lista.map(function(o) { return o.dbaja; })));

 
    //$("#JSON").text('Max: ' + JSON.stringify(maxDalta) + '\nMin: ' + JSON.stringify(minDbaja));
    var tag = document.createElement("p");
    var text = document.createTextNode(
        "Max element(s): " + 
        JSON.stringify(
                maxDalta.map(function(x) {
                return x.nombre;
            })
        ) 
    );
    tag.appendChild(text);
    jsonDiv.appendChild(tag);
    
    tag = document.createElement("p");
    text = document.createTextNode(
        "Min element(s): " + 
        JSON.stringify(
                minDbaja.map(function(x) {
                return x.nombre;
            })
        )
    );
    tag.appendChild(text);
    jsonDiv.appendChild(tag);
 
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

