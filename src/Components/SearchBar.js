import React, { Component } from 'react';
import {Paper, TextField} from '@material-ui/core';
import './comp.css';

   
export default class SearchBar extends Component {
        state={
            searchTerm:'',
        }

        handleChange=(event)=>{
            this.setState({
                   searchTerm:event.target.value
            })
        }


        handleSubmit=(event)=>{
            const {searchTerm}=this.state;
            const {onFormSubmit}=this.props;
            onFormSubmit(searchTerm);
            event.preventDefault()
        }


    render() {
        return (
            <div className="searchbar">
                <h1>V-Tube</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} placeholder='search here'/> 
                </form>
            </div>                    

        );
    }
}
