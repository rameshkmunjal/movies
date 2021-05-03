import React from 'react';

class SearchBar extends React.Component
{
    state = { term: '' };

    

    onSearch = (event) =>{
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }

    render(){
        //console.log(this.state.term);
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onSearch}>
                    <div className="field">
                        <label>Search</label>
                        <input
                            type="text"
                            onChange={e=>this.setState({term:e.target.value})}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;