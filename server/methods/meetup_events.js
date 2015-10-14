Meteor.methods({
  getMeetupEvents: function () {
    var result = HTTP.get('https://api.meetup.com/2/events?sign=true&group_urlname=meteor-berlin&key=65334e5054492554736e373f5f55038')

    //returns the array with the event objects
    return result.data.results
  }
})