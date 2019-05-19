import React, { Component } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { getMetaData } from '../../../../shared/controllers/meta';
import { hasWindow } from '../../../utils/util';

const Page = (config) => (WrappedComponent) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        metaData: null
      }
    }

    componentDidMount() {
      this.fetchMetaData();
    }

    fetchMetaData() {
      if (hasWindow()) {
        const meta = config && config.meta ? config.meta : null;
        const dataDependency = config && config.dataDependencyProp
          ? this.props[config.dataDependencyProp] || null
          : null;

        getMetaData(window.location.pathname, meta, dataDependency)
          .then(({ metaData }) => {
            this.setState({ metaData })
            this.pushDataLayer(metaData);
          })
          .catch(err => {
            throw new Error(err);
          });
      }
    }

    setHelmet() {
      const { title, description } = this.state.metaData;
      return hasWindow() && (
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
        </Helmet>
      )
    }

    pushDataLayer(data = this.state.metaData) {
      if (hasWindow() && window.dataLayer) {
        const { title, description } = data;
        window.dataLayer.push({
          'event': 'virtualPageView',
          'title': title,
          'description': description
        });
      }
    }

    render() {
      return (
        <div>
          {
            this.state.metaData &&
            this.setHelmet()
          }
          <WrappedComponent {...this.props} />
        </div>
      )
    }
  }
}

Page.propTypes = {
  config: PropTypes.shape({
    // (optional) the key within this.props where the data that this page's meta depends on
    meta: PropTypes.object,
    // static meta data if wanting to bypass getting it automatically
    dataDependencyProp: PropTypes.string
  })
}

Page.defaultProps = {
  config: {}
}

export default Page;
