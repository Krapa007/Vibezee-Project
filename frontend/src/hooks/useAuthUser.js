import { useQuery } from "@tanstack/react-query";
import { getAuthUser } from "../lib/api";
import React from "react";

const useAuthUser = () => {
  //tenstack query
  const authUser =
    //useQuery used for fetching data (GET requests) from the server
    useQuery({
      queryKey: ["authUser"], //This is the unique name for the cache of this query.
      queryFn: getAuthUser,
      retry: false, //auth check
    });
  return { isLoading: authUser.isLoading, authUser: authUser.data?.user };
};

export default useAuthUser;
