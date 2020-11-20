var Person = {
  name: "Join 001",
  age: 21,
  showInfo: function(calback) {
    calback();
  },
  render: function() {
    console.log('this 001', this);
    // let _self = this;

    this.showInfo(function() {
      console.log('this 002', this);
      console.log('this.name', this.name);
      console.log('this.age', this.age);

      function getThis() {
        console.log('getThis', this);
      }

      getThis();
    });
  },
  renderBind: function() {
    console.log('this 001', this);

    this.showInfo(function() {
      console.log('this 002', this);
      console.log('this.name', this.name);
      console.log('this.age', this.age);

      function getThis() {
        console.log('getThis', this);
      }

      getThis();
      
    }.bind(this));
  },
  renderBindObject: function() {
    console.log('this 001', this);

    this.showInfo(function() {
      console.log('this 002', this);
    }.bind({name: "Join 002", age: 20}));
  },
  renderEs6: function() {
    console.log('this 001', this);

    this.showInfo(() => {
      console.log('this 002', this);
      console.log('this.name', this.name);
      console.log('this.age', this.age);
    });
  }
}

Person.render();
// Person.renderBind();
// Person.renderBindObject();
// Person.renderEs6();