import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {

  this.route("watch", { path: "/watch" }, function() {
    this.route('summary', { path: "/:group_id/summary" });
    this.route('map', { path: "/:group_id/map" });
  });
  this.route("shout", { path: "/shout" });
  this.route("heartbeat", { path: "/heartbeat" });

});

export default Router;
