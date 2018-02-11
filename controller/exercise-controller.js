
var exerciseController = {
  listExercises: function() {
    var allItems = [
      {
        id: '251c2489-9d8f-92b7-d597-6bfeb1304812'
      }
    ]
    return {
      paging: {
        total: allItems.length,
        page: 0,
        pageSize: 10
      },
      items: allItems
    }
  },
  getExercise: function(id) {
    return this.listExercises()
      .items
      .find(function(item) {
      return item.id == id;
    })
  }
}

module.exports = exerciseController;