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
