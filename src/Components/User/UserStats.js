import React, { useEffect } from "react";
import Head from "../Helper/Head";
import useFetch from "../../Hooks/useFetch";
import { STATS_GET } from "../../api";
import Loading from "../Helper/Loading";
import Error from "../Helper/Error";
import UserGraphs from "./UserGraphs";

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
      <div>
        <Head title="Estatísticas" />
        <UserGraphs data={data} />
      </div>
    );
  else return null;
};

export default UserStats;
