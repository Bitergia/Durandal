define(['durandal/plugins/router'], function (router) {    
    return {
        router: router,
        activate: function () {
            router.map([
                { route: '', moduleId: 'browser/summary/index', title: 'Summary', nav: true },
                { route: 'summary', moduleId: 'browser/summary/index', title: 'Summary', nav: true },
                { route: 'scm', moduleId: 'browser/scm/index', title: 'Source Code', nav: true },
                { route: 'its', moduleId: 'browser/its/index', title: 'Tickets', nav: true },
                { route: 'mls', moduleId: 'browser/mls/index', title: 'Mailing Lists', nav: true },
                { route: 'demographics', moduleId: 'browser/demographics/index', title: 'Demography', nav: true },
                { route: 'experimental', moduleId: 'browser/experimental/index', title: 'Experimental', nav: true }
            ]).buildNavigationModel();
            
            return router.activate();
        }
    };
});
