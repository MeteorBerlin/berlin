Template.index.helpers({
  resources: function () {
    return Resources.find()
  }
})

Template.index.onCreated(function () {
  var instance = this
  this.autorun(function () {
    instance.subscribe('resources')

  })
})