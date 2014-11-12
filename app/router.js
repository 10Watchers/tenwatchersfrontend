import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {

  this.route("watch", { path: "/watch" });
  this.route("shout", { path: "/shout" });
  this.route("heartbeat", { path: "/heartbeat" });

});

export default Router;
