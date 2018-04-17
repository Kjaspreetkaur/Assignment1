angular.module('starter.services', [])

.factory('Logins',function(){
  var logins =[{
   id :'',
   name: '',
   email: '',
  }];
 
  return {
   save:function(login){
     logins.push(login);
     console.log(logins);
   },

   exists:function(email){
     for(var i=0; i < logins.length; i++){
       if(logins[i].email == email){
         return true;
       }
     }
     return false;
   }
  };
 })

.factory('Charts', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var charts = [{
    id: 0,
    name: 'Apple',
    lastText: 'Calorie: 90, good to eat in Morning',
    Calorie: '90',
    face: 'img/apple.jpg'
  }, {   
    id: 1,
    name: 'Banana',
    lastText: 'Calorie: 105, good for Breakfast, Lunch',
    Calorie: '105',
    face: 'img/banana.jpg'
  }, {
    id: 2,
    name: 'Avocado',
    lastText: 'Calories: 160, good for Breakfast, Lunch',
    Calorie: '160',
    face: 'img/avocado.jpg'
  }, {
    id: 3,
    name: 'Curded Cheese',
    lastText: 'Calories: 405, good for Breakfast, Lunch',
    Calorie: '405',
    face: 'img/chesse.jpg'
  }, {
    id: 4,
    name: 'Blueberries',
    lastText: 'Calories: 56, best in Breakfast',
    Calorie: '56',
    face: 'img/blueberries.jpg'
  }];

  return {
    all: function() {
      return charts;
    },
    //add: function(chart) {
    //  charts.splice(charts.indexOf(chart), 1);
    //},
    get: function(chartId) {
      for (var i = 0; i < charts.length; i++) {
        if (charts[i].id === parseInt(chartId)) {
          return charts[i];
        }
      }
      return null;
    }
  };
});
