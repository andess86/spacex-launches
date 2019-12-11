import * as React from 'react';
import { SwishSpinner } from "react-spinners-kit";
import { useLaunchProfileQuery } from '../../generated/graphql';
import LaunchProfile from './LaunchProfile';

interface OwnProps {
    id: number;
  }

  const LaunchProfileContainer = ({ id }: OwnProps) => {
    const { data, error, loading, refetch } = useLaunchProfileQuery({
      variables: { id: String(id) },
    });
    React.useEffect(() => {
      refetch();
    }, [id]);

    if (loading) {
      return <SwishSpinner
      size={30}
      frontColor="#686769"
      loading={loading}
      />;
      // return <div>Loading...</div>;
    }

  if (error) {
    return <div>ERROR</div>;
  }

  if (!data) {
    return <div>Select a flight from the panel</div>;
  }

  return <LaunchProfile data={data} />;
};

export default LaunchProfileContainer;