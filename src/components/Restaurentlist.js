import React from 'react'
import { useState, useEffect } from 'react'
import RestCard from './RestCard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RestaurantListAction } from '../actions/restaurantAction'
import { useDispatch, useSelector } from 'react-redux';
import { restaurantListReducer } from '../reducers/restaurantReducer';


function Restaurentlist() {
   //  const [allrestaurent, setAllrestaurent] = useState([])

   //fn to api call for datas inside json file
   //   const getrestaurentdata=async()=>{
   //      await fetch('/restaurants.json').then(data=>{data.json().then(result=>{
   //        setAllrestaurent(result.restaurants)      

   //      })
   //    })
   // }

   //console.log(allrestaurent);

       const dispatch = useDispatch()

       const result=useSelector(state=>state.restaurentReducer)
       const {restaurantList}=result




   useEffect(() => {
      dispatch(RestaurantListAction())
      //getrestaurentdata()
   }, [])
   return (
      <Row>
         {
            restaurantList.map(item => (
               <RestCard data={item} />
            ))
         }

      </Row>
   )
}

export default Restaurentlist