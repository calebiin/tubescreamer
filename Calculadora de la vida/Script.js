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

$scope.resultados = [
    {
        nombre: "Maximin",
        elemento: "",
        valor: ""
    },
    {
        nombre: "Maximax",
        elemento: "",
        valor: ""
    },
    {
        nombre: "Coeficiente de optimismo-pesimismo",
        elemento: "",
        valor: ""
    },
    {
        nombre: "Razón suficiente",
        elemento: "",
        valor: ""
    },
    {
        nombre: "Minimax",
        elemento: "",
        valor: ""
    }
]

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

function maximin(){
    ///Elementos con mejor rendimiento en demanda baja
    const data = $scope.lista.filter(element => element.dbaja == Math.max.apply(Math, $scope.lista.map(function(o) { return o.dbaja; })));

    //Asigno el/los elemento(s) que cumple(n) con el criterio
    $scope.resultados.find(element => element.nombre == "Maximin").resultado = data.map(function(x) {return x.nombre}).join(', ');

    //Asigno el valor que tienen el/los elemento(s) correspondiente(s)
    $scope.resultados.find(element => element.nombre == "Maximin").valor = data[0].dbaja;   
};

function maximax(){
    ///Elementos con mejor rendimiento en demanda alta
    const data = $scope.lista.filter(element => element.dalta == Math.max.apply(Math, $scope.lista.map(function(o) { return o.dalta; })));

    //Asigno el/los elemento(s) que cumple(n) con el criterio
    $scope.resultados.find(element => element.nombre == "Maximax").resultado = data.map(function(x) {return x.nombre}).join(', ');

    //Asigno el valor que tienen el/los elemento(s) correspondiente(s)
    $scope.resultados.find(element => element.nombre == "Maximax").valor = data[0].dalta;  
}

function coeficiente(){
    ///Aplico formula a cada elemento del arreglo
    const p = 0.6;
    const q = 1 - p;
    let data = $scope.lista.map((function(element) {
        return({
            nombre: element.nombre,
            coeficiente: p*element.dalta + q*element.dbaja
        })  
    }));
    ///Elementos con coeficiente de optimismo-pesimismo (max de la formula anterior)
    data = data.filter(element => element.coeficiente == Math.max.apply(Math, data.map(function(o) { return o.coeficiente; })));
    console.log(data);
    //Asigno el/los elemento(s) que cumple(n) con el criterio
    $scope.resultados.find(element => element.nombre == "Coeficiente de optimismo-pesimismo").resultado = data.map(function(x) {return x.nombre}).join(', ');

    //Asigno el valor que tienen el/los elemento(s) correspondiente(s)
    $scope.resultados.find(element => element.nombre == "Coeficiente de optimismo-pesimismo").valor = data[0].coeficiente;  
}

function razon(){
    ///Promedio de todos los valores
    const data = [
        {
            nombre: "un nombre",
            razon: 0
        }
    ]

    //Asigno el/los elemento(s) que cumple(n) con el criterio
    $scope.resultados.find(element => element.nombre == "Razón suficiente").resultado = data.map(function(x) {return x.nombre}).join(', ');

    //Asigno el valor que tienen el/los elemento(s) correspondiente(s)
    $scope.resultados.find(element => element.nombre == "Razón suficiente").valor = data[0].razon;  
}

function minimax(){
    ///Coste de oportunidad
    const data = [
        {
            nombre: "un nombre",
            minimax: 0
        }
    ]

    //Asigno el/los elemento(s) que cumple(n) con el criterio
    $scope.resultados.find(element => element.nombre == "Minimax").resultado = data.map(function(x) {return x.nombre}).join(', ');

    //Asigno el valor que tienen el/los elemento(s) correspondiente(s)
    $scope.resultados.find(element => element.nombre == "Minimax").valor = data[0].minimax;  
}
$scope.recuperarValores = function() {
    //Llamo las funciones para calcular las fórmulas
    maximin();
    maximax();
    coeficiente();
    //razon();
    //minimax();
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

