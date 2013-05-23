define(['durandal/plugins/router'], function (router) {
    
    return {
        router: router,
        activate: function () {
            router.map([
                { route: '', moduleId: 'browser/summary/index', title: 'Summary', nav: true },
                { route: 'summary', moduleId: 'browser/summary/index', title: 'Summary', nav: true }
            ]).buildNavigationModel();
            
            return router.activate();
        }
    };
});
