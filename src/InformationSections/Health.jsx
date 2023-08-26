/* eslint-disable react/prop-types */
import NewsFetch from "../NewsFetch"

export default function Health(props){
  return(
    <div>
      <NewsFetch country={props.country} section='health'/>
    </div>
  )
}