import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

      var CompanyApp = React.createClass({
        getInitialState: function() {
          return {companylist:this.props.companies};
        },
        handleNewRowSubmit: function( newcompany ) {
          this.setState( {companylist: this.state.companylist.concat([newcompany])} );
          console.log( "3456" );
        },
        render: function() {
          var tableStyle = {width: '100%'};
          var leftTdStyle = {width: '60%',padding:'20px',verticalAlign: 'top'};
          var rightTdStyle = {width: '40%',padding:'20px',verticalAlign: 'top'};
          return (
            <table style={tableStyle}>
              <tr>
                <td style={leftTdStyle}>
                  <CompanyList clist={this.state.companylist}/>
                </td>
                <td style={rightTdStyle}>
                  <NewRow onRowSubmit={this.handleNewRowSubmit}/>
                </td>
              </tr>
          </table>
          );
        }
      });

      var CompanyList = React.createClass({

        render: function() {
          var companies = this.props.clist.map(function (company) {
                        console.log( company );
                        return (
                            <tr>
                              <td>{company.cname}</td>
                              <td>{company.ecount}</td>
                              <td>{company.hoffice}</td>
                            </tr>
                        );
                      });
          return (
            <div>
              <h3>List of Companies</h3>
              <table className="table table-striped">
                <thead>
				    <tr>
						<th>Company Name</th>
                		<th>Employees</th>
                		<th>Head Office</th>
					</tr>
				</thead>
                <tbody>{companies}</tbody>
              </table>
            </div>
            );
        }
      });

      var NewRow = React.createClass({
        handleSubmit: function() {
          var cname = this.refs.cname.getDOMNode().value;
          var ecount = this.refs.ecount.getDOMNode().value;
          var hoffice = this.refs.hoffice.getDOMNode().value;
          var newrow = {cname: cname, ecount: ecount, hoffice: hoffice };
          this.props.onRowSubmit( newrow );

          this.refs.cname.getDOMNode().value = '';
          this.refs.ecount.getDOMNode().value = '';
          this.refs.hoffice.getDOMNode().value = '';
          return false;
        },
        render: function() {
          var inputStyle = {padding:'12px'}
          return (
            <div className="well">
              <h3>Add A Company</h3>
            <form onSubmit={this.handleSubmit}>
              <div className="input-group input-group-lg" style={inputStyle}>
                <input type="text"  className="form-control col-md-8"  placeholder="Company Name" ref="cname"/>
              </div>
              <div className="input-group input-group-lg" style={inputStyle}>
                <input type="text"  className="form-control col-md-8" placeholder="Employee Count" ref="ecount"/>
              </div>
              <div className="input-group input-group-lg" style={inputStyle}>
                <input type="text"  className="form-control col-md-8" placeholder="Headoffice" ref="hoffice"/>
              </div>
              <div className="input-group input-group-lg" style={inputStyle}>
                <input type="submit"  className="btn btn-primary" value="Add Company"/>
              </div>
            </form>
            </div>
            );
        }
      });
      var defCompanies = [{cname:"Infosys",ecount:150000,hoffice:"Bangalore"},{cname:"TCS",ecount:140000,hoffice:"Mumbai"}];
