import React, { lazy, Suspense, Fragment } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import SearchBar from './../SearchBar';
const SearchResults = lazy(() => import('./../SearchResults'));
const FilterType = lazy(() => import('./../FilterType'));
const Exception = lazy(() => import('./../common/Exception'));

const HomeComponent = () => {
  return (
    <Fragment>
      <Suspense fallback={<h1 title="fallbackLazy">fetching data...</h1>}>
        <ErrorBoundary
          FallbackComponent={Exception}
          onError={(error, errorInfo) => console.log({ error, errorInfo })}>

          <main className="row">
            <section className="col">
              <SearchBar category="vehicle" />
            </section>
          </main>
          <section className="col-12 align-self-start">
            <section className="row">
              <FilterType category="vehicle" />
              <SearchResults category="vehicle" />
            </section>
          </section>
        </ErrorBoundary>
      </Suspense>
    </Fragment>
  )
}

export default HomeComponent;
// todo : create a component for starships
