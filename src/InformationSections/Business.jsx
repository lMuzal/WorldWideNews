/* eslint-disable react/prop-types */
import NewsFetch from "../NewsFetch"

export default function Business(props){
  return(
    <div>
      <NewsFetch country={props.country} section='business'/>
    </div>
  )
}