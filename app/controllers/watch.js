import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    setReportDetailsTabToSummary: function() {
      this.set("reportsDetailsTab", 'summary');
    },

    setReportDetailsTabToMap: function() {
      this.set("reportsDetailsTab", 'map');
    }
  }

});
