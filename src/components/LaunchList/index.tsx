import * as React from 'react';
import { useLaunchListQuery } from '../../generated/graphql';
import LaunchList, { OwnProps } from './LaunchList';
import { SwishSpinner } from "react-spinners-kit";


const LaunchListContainer = (props: OwnProps) => {
  const { data, error, loading } = useLaunchListQuery();

  if (loading) {
    return <SwishSpinner
    size={30}
    frontColor="#686769"
    loading={loading}
    />;
    // return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return <LaunchList data={data} {...props} />;
};

export default LaunchListContainer;