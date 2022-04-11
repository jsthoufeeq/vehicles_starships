import React from 'react';

class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    errorService.log({ error, errorInfo });
  }
  render() {
    if (this.state.hasError) {
      return <h1>Oops, Error</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
