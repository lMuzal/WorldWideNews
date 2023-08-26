/* eslint-disable react/prop-types */
import NewsFetch from "../NewsFetch"

export default function Sports(props){
  return(
    <div>
      <NewsFetch country={props.country} section='sports'/>
    </div>
  )
}