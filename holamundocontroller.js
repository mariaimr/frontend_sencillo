angular.module('app',[])
.controller('holaController',function($scope) {
    $scope.saludo= "hola chachos";
    $scope.objeto={
      nombre: 'Maria',
      edad: '21'
    }
    $scope.saludeme = function(){
      alert("Hola chacho "+ $scope.objeto.nombre);
    }
    $scope.arreglo=[{
      nombre: 'Maria',
      edad: '21'
    },{
      nombre: 'Isabel',
      edad: '22'
    },{
      nombre: 'Martinez',
      edad: '13'
    }
  ];
})
