  new Vue({
    el: '#app',
    mounted() {
      $('.ui.checkbox').checkbox();
      $('.ui.dropdown').dropdown();
    },
    methods:{
      toggleInfoBox(){
        this.displayViewBox = !this.displayViewBox;
      },
      mouseOver(){
        this.isFace = !this.isFace;
        console.log('face');
      }
    },
    filter: {
      formatDate: function(value){
          return moment(value, "YYYY-MM-DD").format('MMMM Do YYYY');
      }
    },
    data: {
      isShowAll: false,
      displayViewBox: false,
      isSettings: false,
      isRecentTab: false,
      isFace: false,
      recent_tab_responses: [{
          date: '2017-11-24',       //YYYY-MM-DD format
          dayExists: true,       // Boolean. True if any data has been keyed in for the day. False if there is no data for that day.
          dayType: 'Good',        // 3 Possible values: ‘Good’, ‘Okay’, ‘Mig’ or null
                                  // if dayExists = false, this will be null
          activeLevel: 'Full',    // 3 Possible values: ‘Full’, ‘Half’, ‘None’
                                  // How the user selection should be mapped to the data:
                                  //      "No Activities Affected" -> 'Full'
                                  //      "Slowed Down" -> 'Half'
                                  //      "Missed Actitivies" ->  'None'
          treatment: [ 'Sumatriptan', 'Topiramate'], // an array of string of treatment names. This represents the treatments selected for this day.
          notes: ''
      },
      {
          date: '2017-11-23',
          dayExists: true,
          dayType: 'Good',
          activeLevel: 'Full',
          treatment: ['Sumatriptan', 'Running'],
          notes: ''
      },
      {
          date: '2017-11-22',
          dayExists: true,
          dayType: 'Good',
          activeLevel: 'Full',
          treatment: ['Sleeping', 'Lemon Tea'],
          notes: ''
      },
      {
          date: '2017-11-21',
          dayExists: true,
          dayType: 'Good',
          activeLevel: 'Full',
          treatment: ['Dark Room Rest'],
          notes: ''
      },
      {
        date: '2017-11-20',
        dayExists: true,
        dayType: 'Good',
        activeLevel: 'Full',
        treatment: [ ],
        notes: ''
      }
    ],
    settings_tab_responses: [{
      name: 'Sumatriptan', // this is the name of the med or relief. names are unique,
      customType: 'others',	// this affects the value selected in the dropdown. 4 Possible values: ‘others’, ‘preventative’, ‘relief’, ‘rescue’
      status: true		// this maps to the toggle. if it's true, it will be shown in the initial expansion. when users tap on "Show All", all treatments will be shown regardless of their status.
    },
    {
      name: 'Topiramate',
      customType: 'preventative',
      status: true
    },
    {
      name: 'Dark Room Rest',
      customType: 'relief',
      status: true
    },
    {
      name: 'Lemon Tea',
      customType: 'relief',
      status: false
    },
    {
      name: 'Sleeping',
      customType: 'relief',
      status: false
    },
    {
      name: 'Running',
      customType: 'relief',
      status: false
    }
   ]
  }
});
