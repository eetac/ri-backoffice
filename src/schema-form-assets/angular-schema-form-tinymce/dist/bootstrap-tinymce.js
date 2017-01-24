angular.module("schemaForm").run(["$templateCache", function($templateCache) {$templateCache.put("directives/decorators/bootstrap/tinymce/tinymce.html","<div class=\"form-group {{form.htmlClass}}\" ng-class=\"{\'has-error\': hasError()}\">\r\n    <label class=\"control-label\" ng-show=\"showTitle()\">{{form.title}}</label>\r\n    <textarea\r\n            ri-tinymce=\"form.tinymceOptions\"\r\n            ui-tinymce\r\n            ng-model=\"$$value$$\"\r\n            schema-validate=\"form\">\r\n    </textarea>\r\n    <span class=\"help-block\">{{ (hasError() && errorMessage(schemaError())) || form.description}}</span>\r\n</div>");
$templateCache.put("directives/decorators/bootstrap/tinymce/tinyvision.html","<!--<!DOCTYPE html>-->\r\n<!--<html lang=\"en\">-->\r\n<!--<head>-->\r\n<!--<meta charset=\"utf-8\">-->\r\n<!--<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge, chrome=1\">-->\r\n<!--<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">-->\r\n<!--<title>TinyVision</title>-->\r\n<style>\r\n    /*body {*/\r\n    /*margin: 0 !important;*/\r\n    /*padding: 51px 0 0 !important;*/\r\n    /*}*/\r\n\r\n    @-webkit-keyframes spin {\r\n        100% {\r\n            -webkit-transform: rotate(360deg);\r\n        }\r\n    }\r\n\r\n    @-moz-keyframes spin {\r\n        100% {\r\n            -moz-transform: rotate(360deg);\r\n        }\r\n    }\r\n\r\n    @-ms-keyframes spin {\r\n        100% {\r\n            -ms-transform: rotate(360deg);\r\n        }\r\n    }\r\n\r\n    @-o-keyframes spin {\r\n        100% {\r\n            -o-transform: rotate(360deg);\r\n        }\r\n    }\r\n\r\n    @keyframes spin {\r\n        100% {\r\n            transform: rotate(360deg);\r\n        }\r\n    }\r\n\r\n    @font-face {\r\n        font-family: \'TinyVision\';\r\n        font-style: normal;\r\n        font-weight: normal;\r\n        src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAVEAA0AAAAAB2AAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAABMAAAABoAAAAcZoJdrEdERUYAAAFMAAAAHwAAACAANAAGT1MvMgAAAWwAAABIAAAAVi+63AZjbWFwAAABtAAAAEoAAAFY4yrQ3Wdhc3AAAAIAAAAACAAAAAj//wADZ2x5ZgAAAggAAAGOAAAB6KMbuPpoZWFkAAADmAAAADAAAAA2/jwvN2hoZWEAAAPIAAAAIAAAACQENQAMaG10eAAAA+gAAAAZAAAAHAhfAABsb2NhAAAEBAAAABAAAAAQALYBaG1heHAAAAQUAAAAHQAAACAASwBLbmFtZQAABDQAAADjAAABrcBFeh9wb3N0AAAFGAAAACoAAABQNaZ8cXicY2BgYGQAgpOd+YYg+lxNuS2MBgBAwQXwAAB4nGNgZGBg4ANiCQYQYGJgZGBmYAOSLGAeAwAEpgA7AHicY2BkfM44gYGVgYPRhzGNgYHBHUp/ZZBkaGFgYGJgZWaAAwEEkyEgzTWFweEBwwcGxgf/HzDoMT5gUGhgYGAEyQEA4m0MwnicY2BgYGaAYBkGRgYQCALyGMF8FgYzIM0BhEwgiQdMHxj+/wezGGAsAYhaNrBOFiDNysDACORBjALSIJ1MDKiAkWHYAwAG8Qi3AAAAAAAB//8AAnicLVDBbtNAEJ3ZXY+DjXBDN45Q1TjZxDZO1ZY6zlrQpglcEDFKJSS4IkX0UglO7Z1PQr30Uj6AfwApPfYnku4W7+w+6b15q6cZQIDNigGugAE0scdgbcga7DEKCLzBWxjAe4BYus+wr5LUJZVMsNDHmIcywA6Ocl2asrxsSdpDlRRTTPqKXFOWTvDUuMJ2qfMQf+Hzy7NsEcVO4Pvuz4ZPqSx20neSP2VuycmtxeGbxGqcXnPavloMzx5/XCN+/Brtxo51eV5A6baMu84uOXc1T/9TwWpfPctmhX/NLC70AAZFokiGeVtSXx2igQNWnLK8w1rSbYf4obqoqot/rWDLW46m2Vx3u3r+qdJRf+n9tq3qexD6y0GtRrrKpqOlZ3I2G8hYbHJewNjsrDjERAVILRke4yPkemIXZpN7KhkXurRgl2PBxHcQf/BvvGGeI2YktKAZp5u3++s/4+qlwi8n+/Om3ImGfvzqXhiXuUI455yInzuLg1k1jqdbDTH5fJQ19zph88kJPAD760w4AAB4nGNgZGBgAOLig5O74/ltvjJwMzGAwLmaclsY/f///wdMqowPgFwOBrA0AFmcDOx4nGNgZGBgfPD/AYMek8r///8YmFQZgCIogB0Aov8GQXicY2KAglUQinEbEN9mYGBSYWAAABtJAmYAAAAAAAAAAAAAAAAOAHQAqAD0eJxjYGRgYGBn8GBgYgABEMnIABJzAPMZAAosAJcAAAB4nIWOMW7CQBBFn8EQBVCqKLVTpcLadapwAMoUEXJPsbIsIVtaoOAIuUDuwSnoOUYOkDqfzUhJEYnVzsyb2b8zA8z4IONyMiY8GA+4wRsPeeLdOJfmZDxiyqfxmEk2kzLLb1W5T78uPOCOR+Mhr7wY59IcjUeaejYeq/7FipaOA7XiVtYrY9V2h7rdtr34jUDDng1rotLQ7DdrwTJJdylGKQIFFSVOcSH7r/HPi5dmbr6S9zyrXd/tln1sQlGVrlgUvyso8W6uWzkv4dWFa60S/4z0aSnqEFM3X7rrTb4B1lJDbQB4nGNgYsAP2IGYkYGJkYmRmZGFkZW9NC/TzcDAAES7ImgjKG0IAJXlCMMAAA==) format(\"woff\"), url(data:application/x-font-ttf;charset=utf-8;base64,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) format(\"truetype\");\r\n    }\r\n\r\n    #tinyvision .tv-icon {\r\n        display: inline-block;\r\n        font-family: \'TinyVision\';\r\n        font-style: normal;\r\n        font-size: 16px;\r\n        text-transform: none;\r\n        font-variant: normal;\r\n        font-weight: normal;\r\n        line-height: 1;\r\n        speak: none;\r\n        vertical-align: text-bottom;\r\n        -webkit-font-smoothing: antialiased;\r\n    }\r\n\r\n    #tinyvision .tv-icon-upload:before {\r\n        content: \"\\e001\";\r\n    }\r\n\r\n    #tinyvision .tv-toolbar {\r\n        border-bottom: 1px solid #9e9e9e;\r\n        left: 0;\r\n        padding: 10px;\r\n        position: fixed;\r\n        right: 0;\r\n        top: 0;\r\n        z-index: 1000;\r\n    }\r\n\r\n    #tinyvision .tv-toolbar-left {\r\n        float: left;\r\n    }\r\n\r\n    #tinyvision .tv-toolbar-left > * {\r\n        float: left;\r\n        margin-right: 3px;\r\n    }\r\n\r\n    #tinyvision .tv-toolbar-right > * {\r\n        float: left;\r\n        margin-left: 3px;\r\n    }\r\n\r\n    #tinyvision .tv-upload .tv-icon-upload {\r\n        margin-right: 3px;\r\n    }\r\n\r\n    #tinyvision .tv-search .tv-icon-search {\r\n        cursor: text;\r\n        left: 11px;\r\n        position: absolute;\r\n        top: 6px;\r\n    }\r\n\r\n    #tinyvision .tv-search input {\r\n        padding-left: 35px;\r\n        width: 200px;\r\n    }\r\n\r\n    #tinyvision .tv-notice {\r\n        border: 1px solid #eee;\r\n        color: #9e9e9e;\r\n        display: none;\r\n        font-size: 20px;\r\n        margin: 15% auto 0;\r\n        padding: 20px;\r\n        text-align: center;\r\n        white-space: normal;\r\n        width: 50%;\r\n    }\r\n\r\n    #tinyvision .tv-items {\r\n        list-style: none;\r\n        margin: 10px auto;\r\n        width: 660px;\r\n    }\r\n\r\n    #tinyvision .tv-item {\r\n        float: left;\r\n        margin: 10px;\r\n    }\r\n\r\n    #tinyvision .tv-item.selected .tv-item-image {\r\n        border: 2px solid #0088cc !important;\r\n        padding: 4px;\r\n    }\r\n\r\n    #tinyvision .tv-item.selected .tv-item-name {\r\n        color: #0088cc !important;\r\n    }\r\n\r\n    #tinyvision .tv-item-link {\r\n        cursor: pointer;\r\n        display: block;\r\n        text-decoration: none;\r\n    }\r\n\r\n    #tinyvision .tv-item-link:hover .tv-item-image {\r\n        border-color: #9e9e9e;\r\n    }\r\n\r\n    #tinyvision .tv-item-link:hover .tv-item-name {\r\n        color: #000;\r\n    }\r\n\r\n    #tinyvision .tv-item-dir {\r\n        border: 1px solid #eee;\r\n        height: 100px;\r\n        line-height: 100px;\r\n        padding: 5px;\r\n        text-align: center;\r\n        width: 100px;\r\n    }\r\n\r\n    #tinyvision .tv-item-dir span {\r\n        font-size: 70px;\r\n        font-family: \'Glyphicons Halflings\';\r\n        color: #696969;\r\n    }\r\n\r\n    #tinyvision .tv-item-image {\r\n        border: 1px solid #eee;\r\n        height: 100px;\r\n        line-height: 100px;\r\n        padding: 5px;\r\n        text-align: center;\r\n        width: 100px;\r\n    }\r\n\r\n    #tinyvision .tv-item-image img {\r\n        max-height: 100px;\r\n        max-width: 100px;\r\n        min-height: 1px;\r\n        min-width: 1px;\r\n        vertical-align: middle;\r\n    }\r\n\r\n    #tinyvision .tv-item-name {\r\n        color: #9e9e9e;\r\n        padding: 5px;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n        white-space: nowrap;\r\n        width: 100px;\r\n    }\r\n\r\n    .cf:before,\r\n    .cf:after {\r\n        content: \' \';\r\n        display: table;\r\n    }\r\n\r\n    .cf:after {\r\n        clear: both;\r\n    }\r\n</style>\r\n<!--<link rel=\"stylesheet\" href=\"tinyvision.css\">-->\r\n<!--</head>-->\r\n<!--<body>-->\r\n<div class=\"mce-container\" id=\"tinyvision\">\r\n    <div class=\"tv-toolbar mce-panel cf\">\r\n        <div class=\"tv-toolbar-left\">\r\n            <div class=\"tv-upload mce-widget mce-btn\">\r\n                <button type=\"button\" ng-click=\"openUploadModal()\" id=\"upload\"><span\r\n                        class=\"tv-icon tv-icon-upload\"></span> Upload\r\n                </button>\r\n            </div>\r\n        </div>\r\n        <!--<div class=\"tv-toolbar-right\">-->\r\n        <!--<div class=\"tv-search mce-widget\">-->\r\n        <!--<span class=\"tv-icon tv-icon-search\"></span>-->\r\n        <!--<input class=\"mce-textbox\" id=\"search\" placeholder=\"Search\">-->\r\n        <!--</div>-->\r\n        <!--<div class=\"tv-refresh mce-widget mce-btn\">-->\r\n        <!--<button type=\"button\" id=\"refresh\"><span class=\"tv-icon tv-icon-refresh\"></span></button>-->\r\n        <!--</div>-->\r\n        <!--</div>-->\r\n    </div>\r\n    <div class=\"tv-notice\" id=\"notice\"></div>\r\n    <ol class=\"tv-items cf\" id=\"items\">\r\n        <li ng-if=\"pathStack\" class=\"tv-item\">\r\n            <a ng-click=\"findByPath(\'..\')\" class=\"tv-item-link\" title=\"{{name}}\">\r\n                <div class=\"tv-item-dir\">\r\n                    <span class=\"glyphicon glyphicon-folder-open\" aria-hidden=\"true\"></span>\r\n                </div>\r\n                <div class=\"tv-item-name\">..</div>\r\n            </a>\r\n        </li>\r\n        <li ng-repeat=\"e in data.directories track by $index\" class=\"tv-item\">\r\n            <a ng-click=\"findByPath(e)\" class=\"tv-item-link\" title=\"{{name}}\">\r\n                <div class=\"tv-item-dir\">\r\n                    <span class=\"glyphicon glyphicon-folder-close\" aria-hidden=\"true\"></span>\r\n                </div>\r\n                <div class=\"tv-item-name\">{{e}}</div>\r\n            </a>\r\n        </li>\r\n        <li ng-repeat=\"e in data.image track by $index\" class=\"tv-item\" ng-class=\"{\'selected\':selected==e}\">\r\n            <a ng-click=\"setSelected(e)\" class=\"tv-item-link\" title=\"{{e}}\">\r\n                <div class=\"tv-item-image\">\r\n                    <img ng-src=\"/gallery/{{pathStack}}/{{e}}\">\r\n                </div>\r\n                <div class=\"tv-item-name\">{{e}}</div>\r\n            </a>\r\n        </li>\r\n        <li ng-repeat=\"e in data.video track by $index\" class=\"tv-item\" ng-class=\"{\'selected\':selected==e}\">\r\n            <a ng-click=\"setSelected(e)\" class=\"tv-item-link\" title=\"{{e}}\">\r\n                <div class=\"tv-item-image\">\r\n                    <img ng-src=\"/gallery/{{pathStack}}/{{e}}\">\r\n                </div>\r\n                <div class=\"tv-item-name\">{{e}}</div>\r\n            </a>\r\n        </li>\r\n    </ol>\r\n</div>\r\n<!--&lt;!&ndash;<script src=\"tinyvision.min.js\"></script>&ndash;&gt;-->\r\n<!--</body>-->\r\n<!--</html>-->\r\n<!--MODAL FOR VALIDATION-->\r\n<style>\r\n    .modal {\r\n        z-index: 15001 !important;\r\n    }\r\n\r\n    .modal-dialog {\r\n        z-index: 15001 !important;\r\n    }\r\n\r\n    #mce-modal-block {\r\n        z-index: 15000 !important;\r\n    }\r\n\r\n    .mce-floatpanel {\r\n        z-index: 15001 !important;\r\n    }\r\n\r\n    #mce-modal-block .mce-panel {\r\n        z-index: 15001 !important;\r\n    }\r\n\r\n    droplet {\r\n        display: inline-block;\r\n        z-index: 15003;\r\n        position: relative;\r\n        border-radius: 2px;\r\n        width: 100%;\r\n        height: 400px;\r\n        background-color: rgba(255, 255, 255, .1);\r\n        margin-top: -5px;\r\n        padding-top: 5px;\r\n        transition: box-shadow 0.35s;\r\n    }\r\n\r\n    droplet.event-dragover {\r\n        box-shadow: inset 0 0 100px rgba(255, 255, 255, .25), inset 0 0 5px rgba(255, 255, 255, .25);\r\n    }\r\n\r\n    droplet ul.files {\r\n        height: 100%;\r\n        width: 100%;\r\n        overflow-y: auto;\r\n        padding: 5px;\r\n        list-style-type: none;\r\n        transition: all .5s;\r\n    }\r\n\r\n    droplet ul.files li {\r\n        width: 100px;\r\n        height: 100px;\r\n        padding: 1px;\r\n        float: left;\r\n        position: relative;\r\n        margin: 5px;\r\n    }\r\n\r\n    droplet ul.files li img.droplet-preview {\r\n        max-width: 96px;\r\n        background-size: cover;\r\n        background-repeat: no-repeat;\r\n        height: 96px;\r\n        width: 96px;\r\n        background-color: white;\r\n        box-shadow: 0 0 10px rgba(0, 0, 0, .25);\r\n        border: 1px solid white;\r\n        display: block;\r\n    }\r\n\r\n    droplet ul.files li div.delete {\r\n        background-color: rgba(0, 0, 0, .25);\r\n        width: 50px;\r\n        height: 50px;\r\n        font-family: Lato, Arial, Tahoma, Helvetica, sans-serif;\r\n        color: white;\r\n        font-size: 25px;\r\n        text-shadow: 1px 1px 0 rgba(0, 0, 0, .25);\r\n        text-align: center;\r\n        cursor: pointer;\r\n        line-height: 50px;\r\n        position: absolute;\r\n        border-radius: 50%;\r\n        z-index: 1010;\r\n        top: 25px;\r\n        left: 25px;\r\n        opacity: 0;\r\n        transition: all .30s;\r\n        transform: scale(0.5);\r\n    }\r\n\r\n    droplet ul.files li:hover div.delete {\r\n        opacity: 1;\r\n        transform: scale(1);\r\n    }\r\n\r\n    droplet ul.files li div.delete:hover {\r\n        background-color: rgba(0, 0, 0, .45);\r\n    }\r\n\r\n    droplet ul.files li div.size {\r\n        background-color: rgba(255, 255, 255, .5);\r\n        position: absolute;\r\n        bottom: 5px;\r\n        right: 5px;\r\n        pointer-events: none;\r\n        font-size: 9px;\r\n        font-family: Lato, Arial, Tahoma, Helvetica, sans-serif;\r\n        padding: 1px 4px;\r\n    }\r\n</style>\r\n<script type=\"text/ng-template\" id=\"imgUploader.html\">\r\n    <div class=\"modal-header\">\r\n        <h3 class=\"modal-title\">Upload Files</h3>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <droplet ng-model=\"dropletint\">\r\n\r\n            <!--<div class=\"loading\" ng-class=\"{ visible: dropletint.isUploading() }\">\r\n                <svg viewBox=\"0 0 400 400\">\r\n                    <path class=\"loading-path\" data-progressbar ng-model=\"dropletint.progress.percent\"\r\n                          d=\"M 0,1 L 398,1 L 398,234 L 1,234 L 0,1\"\r\n                          stroke=\"#D3B2D1\" stroke-width=\"1\" fill-opacity=\"0\"\r\n                          style=\"stroke-dasharray: 392px, 392px;stroke-dashoffset: 392px;\"></path>\r\n                </svg>\r\n            </div>-->\r\n\r\n            <section ng-show=\"dropletint.isUploading()\">Upload done. Press Cancel button or ESC key</section>\r\n\r\n            <ul class=\"files\">\r\n                <li ng-hide=\"dropletint.isUploading()\"\r\n                    ng-repeat=\"filemodel in dropletint.getFiles(dropletint.FILE_TYPES.VALID)\">\r\n                    <droplet-preview ng-model=\"filemodel\"></droplet-preview>\r\n                    <div class=\"delete\" ng-click=\"filemodel.deleteFile()\">&times;</div>\r\n                    <div class=\"size\">{{filemodel.file.size / 1024 / 1024 | number: 1}}MB</div>\r\n                </li>\r\n            </ul>\r\n        </droplet>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button class=\"btn btn-default\" ng-click=\"cancel()\">Cancel</button>\r\n        <button class=\"btn btn-primary\" ng-click=\"dropletint.uploadFiles()\" ng-hide=\"dropletint.isUploading()\">\r\n            Upload files\r\n        </button>\r\n    </div>\r\n</script>");}]);
angular.module('schemaForm').directive('riTinymce', ['$http', '$window', '$modal', function ($http, $window, $modal) {

    var defaultConf = {
        plugins: "code image -tinyvision autoresize fullscreen media link paste preview textcolor",
        toolbar1: "undo redo | styleselect fontsizeselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media | preview | fullscreen | forecolor backcolor",
        image_advtab: true,
        forced_root_block: 'p',
        width: '100%',
        height: 400,
        autoresize_min_height: 400,
        autoresize_max_height: 800,
        fullscreen_new_window: true,
        skin_url: 'extra/tinymce/skins/lightgray',
        fullscreen_settings: {
            theme_advanced_path_location: "top"
        },
        paste_preprocess: function (pl, o) {
            o.content = o.content.replace(/(<b>)/ig, "<strong>");
            o.content = o.content.replace(/(<\/b>)/ig, "</strong>");
            o.content = o.content.replace(/(<i>)/ig, "<em>");
            o.content = o.content.replace(/(<\/i>)/ig, "</em>");
        },
        //valid_elements: 'p,a[href],span[class],div[class],img[style|class|src|border=0|alt|title|hspace|vspace|width|height|align|onmouseover|onmouseout|name]',
        tinyvision: {
            source: '/gallery',
            // upload: function () {
            //     $modal.open({
            //         templateUrl: 'imgUploader.html',
            //         controller: 'ModalImgUploaderCtrl',
            //         size: 'md'
            //     });
            // }
        }
    };


    return {
        restrict: 'A',
        require: 'ngModel',
        scope: false,
        link: function (scope, element, attrs, ngModel) {
            var tinyInstance;

            function ensureInstance() {
                if (!tinyInstance) {
                    tinyInstance = tinymce.get(attrs.id);
                }
            }

            function destroy() {
                ensureInstance();
                if (tinyInstance) {
                    console.log("in destroy", tinyInstance);
                    tinyInstance.remove();
                    tinyInstance = null;
                }
            };

            var init = function (config) {
                config = angular.extend(config || {}, defaultConf, {
                    selector: '#' + attrs.id,
                    setup: function (editor) {
                        // tinyMCE.PluginManager.load('tinyvision', '/admin/extra/tinyvision/build/plugin.min.js');
                        $window['focus' + attrs.id] = function () {
                            tinymce.execCommand('mceFocus', false, attrs.id);
                        };

                        var update = function () {
                            var content = editor.getContent();
                            if (ngModel.$viewValue !== content) {
                                ngModel.$setViewValue(content);

                                //certain things like 'destroy' below triggers update inside a $digest cycle.
                                if (!scope.$root.$$phase) {
                                    scope.$apply();
                                }
                            }
                        };

                        editor.on('change', update);
                        editor.on('KeyUp', update);
                        editor.on('ExecCommand', update);
                        editor.on('focus', function (e) {
                            angular.element(e.target.contentAreaContainer).addClass('tx-tinymce-active');
                        });
                        editor.on('blur', function (e) {
                            angular.element(e.target.contentAreaContainer).removeClass('tx-tinymce-active');
                        });
                    }
                });

                tinymce.init(config);
            };

            // If config is set watch it for changes, otherwise just init.
            if (attrs.riTinymce) {
                scope.$watch(attrs.riTinymce, function (c, old) {
                    console.log(c);
                    destroy();
                    if (c) init(c);
                    else init();
                });
            } else {
                init();
                destroy();
            }
        }
    };
}]);
angular.module('schemaForm')
    .run(["$templateCache", function ($templateCache) {
        // Register the plugin with TinyMCE.
        tinymce.PluginManager.add('tinyvision', function (editor, pluginUrl) {
            /**
             * Object to encapsulate everything.
             *
             * @type {Object}
             */
            var self = {};

            /**
             * TinyVision window.
             *
             * @type {tinymce.ui.Window}
             * @see  {@link http://www.tinymce.com/wiki.php/api4:class.tinymce.ui.Window}
             */
            self.win = null;

            /**
             * Height of the TinyVision window.
             *
             * @constant {number}
             * @default
             */
            self.WINDOW_HEIGHT = 537;

            /**
             * URL to open in the TinyVision window's iframe.
             *
             * @constant {string}
             * @default
             */
            self.WINDOW_BODY = '<tinyvision></tinyvision>';//'directives/decorators/bootstrap/tinymce/tinyvision.html';//pluginUrl + '/tinyvision.html';

            /**
             * Width of the TinyVision window.
             *
             * @constant {number}
             * @default
             */
            self.WINDOW_WIDTH = 702;

            /**
             * Get the URL of the TinyMCE editor skin. TinyMCE doesn't provide an
             * accessor method, so the style sheets have to be manually parsed.
             *
             * @return {string} URL of the TinyMCE editor skin.
             */
            self.skinUrl = function () {
                var regex = /\/skins\/\w+\/skin(\.min)?\.css$/,
                    styleSheets = document.styleSheets,
                    styleSheetsLength = styleSheets.length,
                    styleSheetHref,
                    url;

                for (var i = 0; i < styleSheetsLength; i += 1) {
                    styleSheetHref = styleSheets[i].href;

                    if (styleSheetHref && styleSheetHref.match(regex)) {
                        url = styleSheetHref;
                        break;
                    }
                }

                return url;
            };

            /**
             * Get the iframe's window object.
             *
             * @return {Window} iframe's window object.
             */
            self.scope = function () {
                return angular.element(self.win.getEl()).scope().$$childTail;
            };

            /**
             * Get the currently selected item's data.
             *
             * @return {?Object} Item data.
             */
            self.selected = function () {
                return self.scope().getCompleteSelected();
            };

            /**
             * Populate the field that TinyVision was launched from with the selected
             * item's `value`. Empties the field value if nothing selected.
             *
             * @param  {Element} field Field that TinyVision was launched from.
             * @return {Object} self
             */
            self.populateField = function (field) {
                var selected = self.selected();

                field.value = selected ? selected : '';

                return self;
            };

            /**
             * Open the TinyMCE window for TinyVision. The window consists primarily of
             * an iframe with the toolbar and items list.
             *
             * @param  {string} fieldId ID of field to populate with the selected value.
             * @param  {string} fieldValue Current value of the field to populate.
             * @param  {string} type The type of files to display.
             * @param  {tinymce.ui.Window} parentWin Window launching TinyVision.
             * @return {Object} self
             */
            self.openWindow = function (fieldId, fieldValue, type, parentWin) {
                self.win = editor.windowManager.open({
                    title: 'Select ' + type,
                    html: self.WINDOW_BODY,
                    buttons: [
                        {
                            text: 'Select',
                            subtype: 'primary',
                            onclick: function () {
                                self.populateField(parentWin.document.getElementById(fieldId));
                                self.win.close();
                            }
                        },
                        {
                            text: 'Cancel',
                            onclick: 'close'
                        }
                    ],
                    width: self.WINDOW_WIDTH,
                    height: self.WINDOW_HEIGHT
                }, {
                    // Values passed to the iframe.
                    fieldValue: fieldValue,
                    options: editor.settings.tinyvision,
                    skinUrl: self.skinUrl(),
                    type: type
                });
                taka = self.win;
                angular.element(document).injector().invoke(["$compile", "$rootScope", function ($compile, $rootScope) {
                    var $targetDom = $("#" + self.win._id + "-body");
                    var $scope = $targetDom.html("<tinyvision></tinyvision>").scope();
                    $compile($targetDom)($scope);
                    $rootScope.$digest();
                }]);

                return self;
            };

            // Add a TinyMCE command that other plugins can call to launch TinyVision.
            editor.addCommand('tinyvision', function (options) {
                self.openWindow(options.fieldId, options.fieldValue, options.type, options.win);
            });

            // Modify the editor's config to register TinyVision as the file browser.
            /* jshint -W106 */
            editor.settings.file_browser_callback = self.openWindow;
            /* jshint +W106 */
        });
    }])
    .directive("tinyvision", ['$http', '$modal', 'models', function ($http, $modal, models) {
        return {
            restrict: 'E',
            templateUrl: "directives/decorators/bootstrap/tinymce/tinyvision.html",
            scope: true,
            link: function (scope, element, attrs, ngModel) {
                var pathStack = [];
                scope.findByPath = function (path) {
                    if (path === "..") {
                        pathStack.pop();
                    } else {
                        pathStack.push(path);
                    }
                    models.galleryGetByPath(pathStack.join("/"), function (data) {
                        scope.pathStack = pathStack.join("/");
                        scope.data = data;
                    });
                };
                scope.setSelected = function (e) {
                    scope.selected = e;
                };
                scope.getCompleteSelected = function () {
                    return "/gallery" + pathStack.join("/") + "/" + scope.selected;
                };
                scope.openUploadModal = function () {
                    $modal.open({
                        templateUrl: 'imgUploader.html',
                        controller: 'ModalImgUploaderCtrl',
                        size: 'md'
                    });
                };
                scope.findByPath("");
            }
        }
    }])
    .controller('ModalImgUploaderCtrl', ["$scope", "$modalInstance", "$timeout", "loginProvider", function ($scope, $modalInstance, $timeout, loginProvider) {
        $scope.success = false;
        $scope.error = false;
        $scope.$on('$dropletReady', function whenDropletReady() {
            loginProvider.getUser(function (user) {
                console.log(user);
                $scope.dropletint.allowedExtensions(['png', 'jpg', 'bmp', 'gif']);
                $scope.dropletint.setRequestHeaders({
                    "Authorization": "BEARER " + user.token
                });
                $scope.dropletint.defineHTTPSuccess([200, 201]);
                $scope.dropletint.setRequestUrl('/gallery/');
            });
        });

        $scope.$on('$dropletSuccess', function onDropletSuccess(event, response, files) {
            $modalInstance.close();
        });

        $scope.cancel = function () {
            $modalInstance.close();
        };

        $modalInstance.result.finally(function () {
            // $('iframe').contents().find('#refresh').trigger('click');
        });

    }]);
angular.module('schemaForm').config(
    ['schemaFormProvider', 'schemaFormDecoratorsProvider', 'sfPathProvider',
        function (schemaFormProvider, schemaFormDecoratorsProvider, sfPathProvider) {

            var wysiwyg = function (name, schema, options) {
                if (schema.type === 'string' && schema.format == 'html') {
                    var f = schemaFormProvider.stdFormObj(name, schema, options);
                    f.key = options.path;
                    f.type = 'wysiwyg';
                    f.tinymceOptions = schema.tinymceOptions;
                    options.lookup[sfPathProvider.stringify(options.path)] = f;
                    return f;
                }
            };

            schemaFormProvider.defaults.string.unshift(wysiwyg);

            //Add to the bootstrap directive
            schemaFormDecoratorsProvider.addMapping('bootstrapDecorator', 'wysiwyg',
                'directives/decorators/bootstrap/tinymce/tinymce.html');
            schemaFormDecoratorsProvider.createDirective('wysiwyg',
                'directives/decorators/bootstrap/tinymce/tinymce.html');
        }]);
