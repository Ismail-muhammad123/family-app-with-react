import React, { Component } from 'react'

export default class Reports extends Component {
    constructor(props){
        super(props);

        this.state = {
            projects: [],
            trials: [],
        };
    }
    
    componentDidMount() {
        fetch('http://localhost/work/records_reports.php')
        .then((res)=> {
            console.log(res.data);
            return res;
        })
        .then(response => response.json())
        .then(res => {
            console.log(res)
            return res
        })
        .then(data => this.setState({ projects: data.projects, trials: data.trials }));
    }

  render() {
    const { projects } = this.state;
    const { trials } = this.state;

    console.log(projects);
    console.log(trials);



    const projectRows = projects.map((project)=><tr>
    <td>{project['id']}</td>
    <td>{project['name']}</td>
    <td>{project['country']}</td>
    <td>{project['company']}</td>
</tr> );

    const trialRows = trials.map((trial)=><tr>
    <td>{trial['id']}</td>
    <td>{trial['name']}</td>
    <td>{trial['country']}</td>
    <td>{trial['company']}</td>
</tr> );

    return (
        <div className='container p-3 row'>
           <div className='col-6'>
           <h3 className='text-uppercase'>
                List of Projects 
            </h3>
            <table class='table border'>
            <thead>
            <th>ID</th>
            <th>Name</th>
            <th>Country</th>
            <th>Company</th>
            </thead>
            <tbody>
                {projectRows}
            </tbody>
            </table>
           </div>
            <div className='col-6'>
            <h3 className='text-uppercase'>
                List of Trials
            </h3>
            <table class='table border '>
            <thead>
            <th>ID</th>
            <th>Name</th>
            <th>Country</th>
            <th>Company</th>
            </thead>
            <tbody>
                {trialRows}
            </tbody>
            </table>
            </div>
        </div>
    ) 
    }
}
