// import React from 'react';
// import s from './StyleContacts.module.scss';

// class Contacts extends React.Component {
//   state = {
//     contacts: [],
//     name: '',
//   };

//   handleInputChange = event => {
//     this.setState({ inputValue: event.currentTarget.value });
//   };

//   handleChange = e => {
//     const { name, value } = e.currentTarget;
//     this.setState({ [name]: value });
//   };

//   handleButton = event => {
//       event.preventDefault()
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleButton}>
//         <h2>Phonebook</h2>
//         <div className={s.ContainerIput}>
//           <h3>Name</h3>
//           <input
//             type="text"
//             value={this.state.name}
//             onChange={this.handleInputChange}
//           />
//           <button>Add contact</button>
//         </div>
//         <h2>Contacts</h2>
//       </form>
//     );
//   }
// }

// export default Contacts;