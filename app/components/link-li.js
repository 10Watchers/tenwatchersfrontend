// Copied with gratitude from http://discuss.emberjs.com/t/bootstrap-active-links-and-lis/5018
// Enables <li> tags to get the "active" class if any of its children contains class="active"
import Ember from 'ember';

var LinkLiComponent = Ember.Component.extend({
  tagName: 'li',
  classNameBindings: ['active'],
  active: function() {
    return this.get('childViews').anyBy('active');
  }.property('childViews.@each.active')
});

export default LinkLiComponent;
