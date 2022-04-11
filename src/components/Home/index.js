import React, { Fragment } from 'react';
import SearchBar from './../SearchBar';
import SearchResults from './../SearchResults';
import FilterType from './../FilterType';

const HomeComponent = () => {
  return (
    <Fragment>
      <main className="row">
        <section className="col">
          <SearchBar category="vehicle"/>
        </section>
      </main>
      <section className="col-12 align-self-start">
        <section className="row">
          <FilterType category="vehicle"/>
          <SearchResults category="vehicle"/>
        </section>      
      </section>
    </Fragment>
  )
}

export default HomeComponent;
// todo : create a component for starships
