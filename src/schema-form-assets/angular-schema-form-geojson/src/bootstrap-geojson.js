(function () {
    angular.module('schemaForm').config(
        ['schemaFormProvider', 'schemaFormDecoratorsProvider', 'sfPathProvider',
            function (schemaFormProvider, schemaFormDecoratorsProvider, sfPathProvider) {
                var geojson = function (name, schema, options) {
                    if (schema.type == 'geojson') {
                        var f = schemaFormProvider.stdFormObj(name, schema, options);
                        f.key = options.path;
                        f.type = 'geojson';
                        options.lookup[sfPathProvider.stringify(options.path)] = f;
                        return f;
                    }
                };

                if (!schemaFormProvider.defaults.geojson)
                    schemaFormProvider.defaults.geojson = [];

                schemaFormProvider.defaults.geojson.unshift(geojson);

                //Add to the bootstrap directive
                schemaFormDecoratorsProvider.addMapping(
                    'bootstrapDecorator',
                    'geojson',
                    'directives/decorators/bootstrap/geojson/geojson.html'
                );
                schemaFormDecoratorsProvider.createDirective(
                    'geojson',
                    'directives/decorators/bootstrap/geojson/geojson.html'
                );
            }
        ]);
})();