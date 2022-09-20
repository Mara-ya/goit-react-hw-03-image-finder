import { Component } from "react";
import { Searcher, SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput } from "./Searchbar.slyled";

export class Searchbar extends Component {
    state = {
        searchQuery: '',
    }

    handleChange = e => {
        this.setState({searchQuery: e.target.value});
    }

    handleSubmit = e => {
        e.preventDefault();
        const {searchQuery} = this.state;
        this.props.onSubmit(searchQuery);
        this.reset();
    }

    reset = () => {
        this.setState({searchQuery: ''});
    };

    render(){
        const {searchQuery} = this.state
        return (
            <Searcher>
                <SearchForm onSubmit={this.handleSubmit}>
                    <SearchFormButton type="submit">
                        <SearchFormButtonLabel>Search</SearchFormButtonLabel>
                    </SearchFormButton>
    
                    <SearchFormInput
                        className="input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={searchQuery}
                        onChange={this.handleChange}
                    />
                </SearchForm>
            </Searcher>
        )
    }
}