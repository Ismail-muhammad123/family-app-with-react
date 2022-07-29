import React, { Component } from 'react'
import { useNavigate  } from 'react-router-dom';

export default class AddTrial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            country: '',
            company: '',
        };
    
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleCompanyChange = this.handleCompanyChange.bind(this);
        this.handleCountryChange = this.handleCountryChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    gotoHome = () => {
        let navigate = useNavigate();
        navigate("http://localhost:3000/dashboard");
    }
    
    handleNameChange(event) {
    this.setState({name: event.target.value});
    }
    handleCountryChange(event) {
    this.setState({country: event.target.value});
    }
    handleCompanyChange(event) {
    this.setState({company: event.target.value});
    }
    
      handleSubmit(event) {
        const requestOptions = {
            mode: 'no-cors',
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: this.state.name, company: this.state.company, country: this.state.country })
        };
        fetch('http://localhost/work/trials.php', requestOptions)
        .then(res => console.log(res.status))
            .then(_ => this.gotoHome)
            .catch(err => console.log(err));
            event.preventDefault();
      }

  render() {
    return (
        <section class="container">
        <form action="" method="post" onSubmit={this.handleSubmit} class="signup">
            <h1>Add Family Trials</h1>
            <div class="inputs">
                <label for="name">Family Name</label>
                <input type="name" name="name" id="name" value={this.state.name} onChange={this.handleNameChange} />
            </div>
            <div class="inputs">
                <label for="country">Country</label>
                <input type="text" name="country" id="country" value={this.state.country} onChange={this.handleCountryChange} />
            </div>
            <div class="inputs">
                <label for="company">Companies <span style={{fontSize:"12px"}}>(separate with commas if multiple)</span></label>
                <input type="text" name="company" id="company" value={this.state.company} onChange={this.handleCompanyChange} />
            </div>

            <div class="buttons" style={{justifyContent: "center"}}>
                <input style={{padding: "10px", background: "blue"}} type="submit" value="Register" name="submit" />
            </div>
        </form>
    </section>
    )
  }
}
