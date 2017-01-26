angular.module("schemaForm").run(["$templateCache", function($templateCache) {$templateCache.put("directives/decorators/bootstrap/galleryimage/galleryimage.html","<!--<link rel=\"stylesheet\" href=\"//cdnjs.cloudflare.com/ajax/libs/jasny-bootstrap/3.1.3/css/jasny-bootstrap.min.css\">-->\r\n<div class=\"form-group\" ng-class=\"{\'has-error\': hasError()}\">\r\n    <label class=\"control-label\" ng-show=\"showTitle()\">{{form.title}}</label>\r\n\r\n    <div class=\"input-group\">\r\n        <a ri-single-gallery-view ng-click=\"openGallery()\" ng-model=\"$$value$$\" alt=\"Click to open Gallery\">\r\n            <img ng-src=\"{{image}}\" class=\"img-thumbnail\" width=\"200\" height=\"150\">\r\n        </a>\r\n        {{$$value$$}}\r\n        <div>\r\n            <a ng-if=\"imageExists\" download=\"{{$$value$$}}\" ng-href=\"{{image}}\" target=\"_self\"\r\n               class=\"btn btn-default\"><span class=\"glyphicon glyphicon-cloud-download\"></span></a>\r\n            <!-- download -->\r\n            <a ng-if=\"imageExists\" ng-click=\"delete()\" class=\"btn btn-default\"><span\r\n                    class=\"glyphicon glyphicon-trash\"></span></a> <!-- delete from server -->\r\n        </div>\r\n    </div>\r\n    <span class=\"help-block\">{{ (hasError() && errorMessage(schemaError())) || form.description}}</span>\r\n</div>\r\n<script type=\"text/ng-template\" id=\"galleryImage.html\">\r\n\r\n    <div class=\"modal-header\">\r\n        <h3 class=\"modal-title\">Gallery</h3>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <tinyvision ng-model=\"ngModel\"></tinyvision>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button class=\"btn btn-default\" ng-click=\"cancel()\">Cancel</button>\r\n        <button class=\"btn btn-default\" ng-click=\"select()\">Select</button>\r\n    </div>\r\n    <style>\r\n        .modal-body #tinyvision .tv-toolbar {\r\n            position: absolute;\r\n        }\r\n\r\n        .modal-body #tinyvision .tv-items {\r\n            margin: 50px 0 0 0;\r\n            width: 100%;\r\n        }\r\n    </style>\r\n</script>");}]);
angular.module('schemaForm')
    .directive('riSingleGalleryView', function ($routeParams, models, $modal) {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, element, attrs, ngModel) {
                var defaultImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAACWBAMAAABp8toqAAAAG1BMVEXMzMwAAA6ysrSZmZx/f4QZGSVmZm0zMz1MTFW+Yrt7AAAACXBIWXMAAA7EAAAOxAGVKw4bAAACpElEQVRoge2WzVPaQBiH300gcLSkTD2G0qnXQOyMx9gWzjIS5AhOwStMC3hEO4p/dvczCWkT+ai33zOazJo3++y+7+5GIgAAAAAAAAAAAAAAAAAAAABAFqvpvRLxsZ1qfCMq+fs6Sr16/bZwEE/13ocwbi6JKqM9HdbiK9mLoqFd/ib6dJykPOMXp5Yf4Ljb7UMkE3nd5Ae0MrM8RPJeXhv5+Rpm2gdISifyVlk73sVK1v9ixWvgeJ/FjWPHmexu7sOURMbRLdnfxYITr+RKqjN5c67YxeD8gXdyNggmI2LnqsWfzHQkG/7o3iQSFUeuEz1TRzxv5Uv0zO0Tds+vvMYrvuCuiT15XKzmqCMt/tsIY4mKI3fDE83EcF7y01XWkhoTXW5Udu6I8Zvl6lGUoijqq3mPjETH0elMp8Ny/9W9loRqmDU5mpZKX4OYcPf1KKwgCAZKsjYSHUfvPPk2L+7VLjMR64v5Mn3Ml62+nomAd03N7l0s0XF0ap4WrbikJr6cV3k5nU7HSvJLBqxNN53hcyLRcXoHdArrnlpdKcnUSyR6dS3JuU6nS8dpCU96Qd2TfZJOl0yEluh9spRDTSQmO0rCR1JQ92THy8I3vOo6I9E7fimWksydLvw6/bpVK6p7cnYx8VbHLJKU5NJXEpGPRiwxnSoJvRSfNOYUZmK+A/mzLam6SiJGs4olOs5IWkV15zONQrLnPrFJSGdc2OIHWJCW0Fh8TwZiFl+miUTFGUk5e4xmcHpR/ZGPvT1fiEVvzW96P7ck9gP/MvKDsBf1nUSi4oykVFh30W3gyQRZgWoHf828Kb/xVnv7r+m44rrHsL3/OUijT6e3lXR2CztKYr9Wkv8gaY7D3QIrR0iix8PfBQAAAAAAAAAAAAAAAPDm/AECB3+G8g7z5QAAAABJRU5ErkJggg==';

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

angular.module('schemaForm').config(
    ['schemaFormProvider', 'schemaFormDecoratorsProvider', 'sfPathProvider',
        function (schemaFormProvider, schemaFormDecoratorsProvider, sfPathProvider) {

            var gallery = function (name, schema, options) {
                if (schema.type === 'gallery') {
                    var f = schemaFormProvider.stdFormObj(name, schema, options);
                    f.key = options.path;
                    f.type = 'gallery';
                    f.index = 'arrayIndex';
                    f.path = schema.path;
                    options.lookup[sfPathProvider.stringify(options.path)] = f;
                    return f;
                }
            };

            if (!schemaFormProvider.defaults.gallery)
                schemaFormProvider.defaults.gallery = [];

            schemaFormProvider.defaults.gallery.unshift(gallery);

            //Add to the bootstrap directive
            schemaFormDecoratorsProvider.addMapping(
                'bootstrapDecorator',
                'gallery',
                'directives/decorators/bootstrap/galleryimage/galleryimage.html'
            );
            schemaFormDecoratorsProvider.createDirective(
                'gallery',
                'directives/decorators/bootstrap/galleryimage/galleryimage.html'
            );
        }
    ]);
