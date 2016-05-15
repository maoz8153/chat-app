module.exports = function () {
    var indexFolder = './views/';
    var indexRead = './views/index.ejs';
    var app = './public/app/';
    var client = 'public/';
    var config = {
        indexFolder : indexFolder,
        indexRead : indexRead,
        client : client,
        app : app,
        htmlTemplates : app + '**/*.html',
        js : [
                app + 'app.js',
                app + 'app.run.js',
                app + '**/*.modules.js',
                app + '**/*.js'
            ],
        bower : {
            json : require('./bower.json'),
            directory : './public/assets/vendors/',
            ignore :  '../public/'
        },
        templateCache : {
            file : 'templates.js',
            options : {
                module : 'app',
                standAlone : false,
                root : 'app/'
            }
        }
    };

    config.getInjectDep = function () {
        var options = {
            bowerJson : config.bower.json,
            directory : config.bower.directory,
            ignorePath : config.bower.ignore
        };
        return options;
    };

    return config;
};


