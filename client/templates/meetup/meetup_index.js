Template.meetupIndex.helpers({
  meetups: function () {
    var events =Template.instance().events.get()
    return Template.instance().events.get()
  },
  //convert event time to date object since moFormat doesn't accept millisecond timestamps
  date: function (time) {
    console.log(time)
    return moment(time).format('LLLL')
  }
});

Template.meetupIndex.onCreated(function () {
  var instance = this
  //reactive var to fetch events from meetup.com
  instance.events = new ReactiveVar()
  //get meetup events from server method
  Meteor.call('getMeetupEvents', function (error, result) {
    if (error)
      console.log(error)
    else
      console.log(result)
    instance.events.set(result)
  })

});
