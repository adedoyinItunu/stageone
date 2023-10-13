import { useEffect, useState } from "react";

export default function Fetcher(url) {
  const [state, setState] = useState({ data: null, loading: true });

  useEffect(() => {
    setState((state) => ({ data: state.data, loading: false }));
  });
  fetch(url)
    .then((x) => x.json())
    .then(
      (y) => {
        setState({ data: y, loading: false });
      },
      [url, setState]
    );
  return state;
}
