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
        nombre: '',
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

    //Asigno el/los elemento(s) que cumple(n) con el criterio
    $scope.resultados.find(element => element.nombre == "Coeficiente de optimismo-pesimismo").resultado = data.map(function(x) {return x.nombre}).join(', ');

    //Asigno el valor que tienen el/los elemento(s) correspondiente(s)
    $scope.resultados.find(element => element.nombre == "Coeficiente de optimismo-pesimismo").valor = data[0].coeficiente;  
}

function razon(){
    ///Aplico formula a cada elemento del arreglo
    let data = $scope.lista.map((function(e) {
        return({
            nombre: e.nombre,
            razon:  ((parseInt(e.dalta) + parseInt(e.dmedia) + parseInt(e.dbaja))/3).toFixed(2)
        })  
    }));
    ///Elementos con razón suficiente (max de la formula anterior)
    data = data.filter(element => element.razon == Math.max.apply(Math, data.map(function(o) { return o.razon; })));

    //Asigno el/los elemento(s) que cumple(n) con el criterio
    $scope.resultados.find(element => element.nombre == "Razón suficiente").resultado = data.map(function(x) {return x.nombre}).join(', ');

    //Asigno el valor que tienen el/los elemento(s) correspondiente(s)
    $scope.resultados.find(element => element.nombre == "Razón suficiente").valor = data[0].razon;  



    // let laplace =[];

    // for (let i = 0; i<$scope.lista.length; i++){
    //         let prome = (parseFloat ($scope.lista[i].dalta) + parseFloat($scope.lista[i].dmedia) + parseFloat($scope.lista[i].dbaja)) / 3;
    //       laplace.push(prome.toFixed(2)); 
    // }

    // let high = Math.max.apply(null, laplace);
    // console.log(high);
}

function minimax(){
    ///Aplico formula a cada elemento del arreglo
    const alta = Math.max.apply(Math, $scope.lista.map(function(o) { return o.dalta; }));
    const media = Math.max.apply(Math, $scope.lista.map(function(o) { return o.dmedia; }));
    const baja = Math.max.apply(Math, $scope.lista.map(function(o) { return o.dbaja; }));
    let data = $scope.lista.map((function(e) {
        var elements = {
            nombre: e.nombre,
            alta:  alta - e.dalta,
            medida: media - e.dmedia,
            baja: baja - e.dbaja
        }
        elements.minimax = ((elements.alta + elements.medida + elements.baja)/3).toFixed(2);
        return(elements)  
    }));
    ///Elementos minimax (min de la formula anterior)
    data = data.filter(element => element.minimax == Math.min.apply(Math, data.map(function(o) { return o.minimax; })));


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
    razon();
    minimax();
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

