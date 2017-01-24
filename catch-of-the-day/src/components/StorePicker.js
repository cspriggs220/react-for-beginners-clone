import React from 'react';
import { getFunName } from '../helpers'

class StorePicker extends React.Component {
  // One way to access {this} inside other methods
  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }

  goToStore(event) {
    event.preventDefault();
    console.log('You changed the URL');
    // first grab text from the box
    const storeId = this.storeInput.value;
    console.log(`Goign to ${storeId}`)
    // once the router is surfaced we can then use its methods
    // second transition from / to /store/:storeid
    this.context.router.transitionTo(`/store/${storeId}`)
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => { this.storeInput = input}} />
        <button type="submit">Visit Store →</button>
      </form>
    )
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;
