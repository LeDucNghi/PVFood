import { useEffect, useState } from "react";

import PropTypes from "prop-types";
import axios from "axios";

useAxios.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  body: PropTypes.object,
  headers: PropTypes.object,
};

useAxios.defaultProps = {
  url: "",
  method: "get",
  body: {},
  headers: {},
};

export default function useAxios({ url, method, body, headers }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchNewData = async () => {
      setLoading(true);
      try {
        const res = await axios[method](url, body, headers);
        if (res) {
          setLoading(false);
          setData(res.data);
        }
      } catch (error) {
        console.log(
          "🚀 ~ file: useAxios.js ~ line 33 ~ fetchNewData ~ error",
          error
        );
        setError(error.message);
      }
    };

    fetchNewData();
  }, [url, method, body, headers]);

  return { data, loading, error };
}
