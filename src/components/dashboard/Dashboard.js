import React, { Component } from 'react'
import chart from "../../images/chart.PNG";

export default class Dashboard extends Component {
  constructor(props){
    super(props);

    this.state = {
        families: [],
    };
}

componentDidMount() {
    fetch('http://localhost/work/families.php')
    .then((res)=> {
        console.log(res.data);
        return res;
    })
    .then(response => response.json())
    .then(res => {
        console.log(res)
        return res
    })
    .then(families => this.setState({ families }));
}
  render() {
    const { families } = this.state;




    const familyRows = families.map((family)=><tr>
    <td>{family['id']}</td>
    <td>{family['name']}</td>
    <td>{family['address']}</td>
    <td>{family['number']}</td>
</tr> );
    return (
      <>
      <div className='row'>
        <div className='col-4'>
            <img src={chart} height={300} width={350}  alt="" />
        </div>
        <div className='col-6 p-5 text-center'>
            <h3 className='pb-3'>
                Dashboard Report
            </h3>
            <p>
            psum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy tem passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </p>
            <hr/>
            <div className='row'>
          <div className='col-12'>
          <h3 className='text-uppercase'>
                List of Families 
            </h3>
            <table class='table border'>
            <thead>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Number</th>
            </thead>
            <tbody>
                {familyRows}
            </tbody>
            </table>
          </div>
          </div>
        </div>
      </div>
     
      </>
    )
  }
}
