import React, { Component } from 'react';
import CreatableSelect from 'react-select/creatable';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export default class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	name: '',
    	lastName: '',
    	email: '',
    	hobbies: [],
    	nameError: '',
    	lastNameError: '',
      emailError: '',
      selectedOption: []
  }
    this.handleUserInput = this.handleUserInput.bind(this);
  }

 validate = (input) => {
	let nameError = '';
	let lastNameError = '';
	let emailError = '';
  var letters = /^[A-Za-z]+$/;
  var emailRegex = /\S+@\S+\.\S+/;

	switch (input) {
    case 'name': 
      nameError = 
        !this.state.name.match(letters)
          ? 'Only letters are allowed!'
          : '';
          this.setState({nameError});
      break;
    case 'lastName': 
      lastNameError = 
         !this.state.lastName.match(letters)
          ? 'Only letters are allowed!'
          : '';
          this.setState({lastNameError});
      break;
    case 'email': 
      emailError = 
        emailRegex.test(this.state.email)
          ? ''
          : 'Email is not valid!';
          this.setState({emailError});
      break;
    default:
      break;
  }
 }

handleUserInput (e) {
 	e.preventDefault();
  this.setState({[e.target.name]: e.target.value});
  const isValid = this.validate(e.target.name);
  if (isValid) {
  	console.log(this.state);
  }
}

handleChange = (selectedOption) => {
  this.setState(
    { selectedOption },
    () => console.log(`Option selected:`, this.state.selectedOption)
  );
};

  render() {
    const { selectedOption } = this.state;

    return (
    	<div className="row">
    		<div className="col-lg-6 line">
    		 <form>
    		 <div className="col-lg-12 formclass" >
		        <label >
		          Name
		        </label><br/>
            <input type="text" name="name" value={this.state.name} onChange={this.handleUserInput} />
            <div>{this.state.nameError}</div>
		      </div>
		      <div className="col-lg-12 formclass">
		        <label >
		          Last Name
		        </label><br/>
            <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleUserInput} />
		          <div>{this.state.lastNameError}</div>
		      </div>
		      <div className="col-lg-12 formclass">
		        <label >
		          E-mail
		        </label><br/>
            <input type="text" name="email"  value={this.state.email} onChange={this.handleUserInput} />
		        <div>{this.state.emailError}</div>
			  </div>
        <br />
        <div className="col-lg-12 formclass">
        <label >
		         Hobbies
		        </label><br/>

            <CreatableSelect
              value={selectedOption}
              onChange={this.handleChange}
              options={options}
              isMulti
            />
            </div>
		      </form>
    		  </div>
    		<div className="col-lg-6">
    			<div className="col-lg-12"><br/>
		        <p>{'{ '}{this.state.name}{' }'}</p>
		      </div>
		      <div className="col-lg-12"><br/>
		        <p>{'{ '}{this.state.lastName}{' }'}</p>
		      </div>
		      <div className="col-lg-12"><br/>
		        <p>{'{ '}{this.state.email}{' }'}</p>
			  </div>
		      <div className="col-lg-12"><br/>
          <div>{'Hobbies'}{selectedOption.map(option => (<p>{'{ '}{option.label}{' }'}</p>))}</div>
			  </div>
    		</div>
    	</div>
     
    );
  }
}