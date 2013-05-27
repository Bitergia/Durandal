define(['durandal/system','durandal/app'], function (system,app) {
    function activate() {
        system.log('View Activating', this);
    }

    function viewAttached() {
        system.log('View Activated', this);
        Report.convertGlobal();
    }
    
    return {
        activate: activate,
        viewAttached: viewAttached
    };
});
