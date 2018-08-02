import * as React from 'react';

import { Spinner } from '@blueprintjs/core';

interface IImportedModule {
  default: React.Component | React.StatelessComponent
}

export default function asyncComponent(importComponent: () => Promise<IImportedModule>): React.ComponentClass {
  interface IAsyncComponentState {
    Component: null | React.ComponentClass;
  }

  class AsyncComponent extends React.Component {

    public state: IAsyncComponentState;

    constructor(props: any) {
      super(props);
      this.state = {
        Component: null,
      };
    }

    public async componentDidMount() {
      const { default: Component } = await importComponent();
      setTimeout(() => this.setState({
        Component,
      }), 2000);
    }

    public render() {
      const { Component } = this.state;
      return Component ? <Component {...this.props} /> : <Spinner intent='primary' size={50}/>;
    }
  }
  return AsyncComponent;
}