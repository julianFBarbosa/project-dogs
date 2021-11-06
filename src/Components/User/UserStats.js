import React, { lazy, Suspense, useEffect } from "react";
import Head from "../Helper/Head";
import useFetch from "../../Hooks/useFetch";
import { STATS_GET } from "../../api";
import Loading from "../Helper/Loading";
import Error from "../Helper/Error";

const UserGraphs =  lazy(() => import('./UserGraphs'));

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    (async () => {
      const { url, options } = STATS_GET();

      await request(url, options);
    })();
  }, [request]);
  
  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <Suspense fallback={<div></div>}>
        <Head title="Estatísticas" />
        <UserGraphs data={data} />
      </Suspense>
    );
  else return null;
};

export default UserStats;
