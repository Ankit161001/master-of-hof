import React from 'react';

class HigherOrderComponent extends React.Component {
    
  constructor(){
      super();
      this.state = {
          userData: [
              { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
              { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
              { id: '3', name: 'John', user_type: 'Teacher', age:24,years: 2},
              { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
              { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}
          ]
      }
  }


    // display all items
  renderItems = () => {
    const data = this.state.userData;
    const mapRows = data.map((item) => (
        <React.Fragment key={item.id}>
            <li className="list-elements">
                {/* Passing unique value to 'key' prop, eases process for virtual DOM to remove specific element and update HTML tree  */}
                <span className='list-word'>Id: {item.id}</span>
                <span className='list-word'>Name : {item.name}</span>
                <span className='list-word'>User Type: {item.user_type}</span>
          </li>
        </React.Fragment>
    ));
    return mapRows;
  };

  filter = (str) => {
    if(str.user_type == 'Designer') {
      return <>
        <li className="list-elements">
          {/* Passing unique value to 'key' prop, eases process for virtual DOM to remove specific element and update HTML tree  */}
          <span className='list-word'>Id: {str.id}</span>
          <span className='list-word'>Name : {str.name}</span>
          <span className='list-word'>User Type: {str.user_type}</span>
          </li>
      </>
    }
  }

  filtertype = () => {
    const data = this.state.userData;
    const mapRows = data.map((item) => (
      <React.Fragment key = {item.id}>
          {this.filter(item)}
      </React.Fragment>
    ));
    return mapRows;
  }

  filterJ = (str) => {
    let bool = str.name.startsWith('J');
    if(bool == true) {
      return <>
        <li className="list-elements">
          {/* Passing unique value to 'key' prop, eases process for virtual DOM to remove specific element and update HTML tree  */}
          <span className='list-word'>Id: {str.id}</span>
          <span className='list-word'>Name : {str.name}</span>
          <span className='list-word'>User Type: {str.user_type}</span>
          </li>
      </>
    }
  }

  filtertype1 = () => {
    const data = this.state.userData;
    const mapRows = data.map((item) => (
      <React.Fragment key = {item.id}>
          {this.filterJ(item)}
      </React.Fragment>
    ));
    return mapRows;
  }

  filterAge = (str) => {
    if(str.age > 28 && str.age <= 50) {
      return <>
        <li className="list-elements">
          {/* Passing unique value to 'key' prop, eases process for virtual DOM to remove specific element and update HTML tree  */}
          <span className='list-word'>Id: {str.id}</span>
          <span className='list-word'>Name : {str.name}</span>
          <span className='list-word'>User Type: {str.user_type}</span>
          </li>
      </>
    }
  }

  filtertype2 = () => {
    const data = this.state.userData;
    const mapRows = data.map((item) => (
      <React.Fragment key = {item.id}>
          {this.filterAge(item)}
      </React.Fragment>
    ));
    return mapRows;
  }

  filterExp = (str) => {
    let sum = 0
    for (let index = 0; index < str.length; index++) {
      if(str[index].user_type == 'Designer') {
        sum = sum + str[index].years;   
      }
    }
    return <>
      <li className="list-elements">
      <span className='list-word'>{sum}</span>
      </li>
    </>
  }

  filtertype3 = () => {
    const data = this.state.userData;
    const mapRows = this.filterExp(data)
    return mapRows;
  }

  render() {
    return (
      // instead of a parent div tag we can also use React.Fragment
      <React.Fragment>
      <h2>Display all items</h2>
      <div className="display-box">
      <ul>{this.renderItems()} </ul>
      </div>
      <h2>Display based on UserType</h2>
      <div className="display-box">
      <ul>{this.filtertype()} </ul>
      </div>
      <h2>Filter all data starting with J</h2>
      <div className="display-box">
      <ul>{this.filtertype1()} </ul>
      </div>
      <h2>Filter Age greater than 25 and less than or equal to 50</h2>
      <div className="display-box">
      <ul>{this.filtertype2()} </ul>
      </div>
      <h2>Years of experience of Designers</h2>
      <div className="display-box">
      <ul>{this.filtertype3()} </ul>
      </div>
      </React.Fragment>
    )
  }

}

export {HigherOrderComponent}