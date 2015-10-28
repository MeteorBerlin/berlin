Template.jobItem.events({
  'click .delete.button': function (e, templ) {
    console.log(this._id)
    if (confirm('Delete?'))
      Jobs.remove(this._id)
  }
});

