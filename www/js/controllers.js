angular.module('registry.controllers', [])

.controller('MainController', function($scope, API){
    $scope.signin = function(){
        API.signin();
    }
})

.controller('RegistryDetailsController', function($scope, $routeParams, API){
    API.getFileWithId($routeParams.registryId).success(function(data, status, headers, config){
        $scope.data = data;
        $scope.composeFile = jsyaml.dump(data.compose);
    })
})

.controller('RegistryController', function($scope, API){
    API.getFiles().success(function(data, status, headers, config){
        $scope.files = data;
    }).error(function(data, status, headers, config){
        console.log(data);
    })
})

.controller('CreateController', function($scope, $window, API){
    $scope.createNew = function(){
        var title = this.data.title;
        var composeFile = jsyaml.load(this.data.composefile);
        var readMe = this.data.readme;

        var form = {
            title: title.replace(/\(\(/g,'{{').replace(/\)\)/, '}}').replace(/'/g,'\''),
            compose: composeFile,
            readme: readMe,
            tags: ["hello", "world","stack"]
        }
        API.saveFile(form).success(function(data, status, headers, config){
            $window.location.href = ('/registry');
        }).error(function(data, status, header, config){
            console.log(data);
        })
    }
})
