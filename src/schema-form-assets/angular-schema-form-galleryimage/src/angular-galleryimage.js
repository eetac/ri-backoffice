angular.module('schemaForm')
    .directive('riSingleGalleryView', function ($routeParams, models, $modal) {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, element, attrs, ngModel) {
                var defaultImage = 'images/open_gallery.png';
                scope.defaultErrorImage = 'images/image_not_found.png';

                ngModel.$render = function (image) {
                    if (image) {
                        ngModel.$setViewValue(image);
                    } else if (image === "") {
                        ngModel.$setViewValue("");
                    }
                    scope.image = ngModel.$viewValue + random() || defaultImage;
                    scope.imageExists = ngModel.$viewValue || false;
                };

                scope.delete = function () {
                    ngModel.$render("");
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
                        ngModel.$render(selectedImage);
                    });
                };

                angular.element(element).find('img').bind('error', function () {
                    angular.element(this).attr("src", scope.defaultErrorImage);
                });

                function random() {
                    return "?time=" + Date.now();
                }
            }
        }
    })
    .controller('SingleItemGalleryModalCtrl', ["$scope", "$modalInstance",
        function ($scope, $modalInstance) {

            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };

            $scope.select = function () {
                $modalInstance.close($scope.ngModel);
            };
        }]
    );
