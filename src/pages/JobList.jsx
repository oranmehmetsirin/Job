import { useSelector } from "react-redux";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Card from "../components/Card";
import Filter from "../components/Filter";

const JobList = ({ retry }) => {
  const { isLoading, error, jobs } = useSelector((store) => store.job);
  return (
    <div className="list-page">
      <Filter />
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error msg={error} retry={retry} />
      ) : (
        <div className="card-wrapper">
          {jobs.map((i) => {
            <Card key={i.id} job={i} />;
          })}
        </div>
      )}
    </div>
  );
};

export default JobList;
