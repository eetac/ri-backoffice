angular.module('schemaForm')
    .directive('riSingleGalleryView', function ($routeParams, models, $modal, models) {
        return {
            restrict: 'A',
            require: 'ngModel',
            // scope: {
            //     ngModel: "="
            // },
            link: function (scope, element, attrs, ngModel) {
                var defaultImage = '//dummyimage.com/200x150/cccccc/ffffff&text=Upload+Image';

                ngModel.$render = function (image) {
                    if (image) {
                        ngModel.$setViewValue(image);
                    } else if (image === "") {
                        ngModel.$setViewValue("");
                    }
                    scope.image = ngModel.$viewValue || defaultImage;
                    scope.imageExists = ngModel.$viewValue || false;
                };

                scope.delete = function () {
                    console.log("delete");
                    // models.galleryDeleteByPath(ngModel.$viewValue, function () {
                    // ngModel.$setViewValue("");
                    ngModel.$render("");
                    // scope.image = defaultImage;
                    // });
                };

                scope.openGallery = function () {
                    $modal.open({
                        templateUrl: 'galleryImage.html',
                        controller: 'SingleItemGalleryModalCtrl',
                        size: 'lg',
                        resolve: {
                            ngModal: function () {
                                return ngModel;
                            }
                        }
                    }).result.then(function (selectedImage) {
                        // ngModel.$setViewValue(selectedImage);
                        // scope.image = ngModel.$modelValue;
                        // scope.imageExists = true;
                        ngModel.$render(selectedImage);
                    });
                };
            }
        }
    })
    .controller('SingleItemGalleryModalCtrl', ["$scope", "$modalInstance", "$timeout", "loginProvider", "ngModal",
        function ($scope, $modalInstance, $timeout, loginProvider, ngModal) {

            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };

            $scope.select = function () {
                $modalInstance.close($scope.ngModel);
            };
        }]
    );
