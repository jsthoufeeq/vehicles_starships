import React, { componentDidCatch } from 'react';

const ErrorBoundary = ({ children }) => {

  componentDidCatch = (error, errorInfo) => {
    console.log(error);
  }
  return (
    children
  )
}

export default ErrorBoundary;