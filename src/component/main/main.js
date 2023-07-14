import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCatData } from "../../redux/reduce-and-action";
import '../main/main.css'

const Main = () => {
    const dispatch = useDispatch();
    const catData = useSelector((state) => state.api.data);
    const isLoading = useSelector((state) => state.api.loading);
    const error = useSelector((state) => state.api.error);
  
    useEffect(() => {
      dispatch(fetchCatData());
    }, [dispatch]);
  
    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error}</div>;
    }
  return (
    <>
      <div className="container">
        <div className="card">
          {catData.map((item,i) => (
             <img className="card-img" src={item.url} alt='images' />
          )
          )}
        </div>
      </div>

    </>
  );




}
export default Main;