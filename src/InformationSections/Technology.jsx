/* eslint-disable react/prop-types */
import NewsFetch from "../NewsFetch"

export default function Technology(props){
  return(
    <div>
      <NewsFetch country={props.country} section='technology'/>
    </div>
  )
}