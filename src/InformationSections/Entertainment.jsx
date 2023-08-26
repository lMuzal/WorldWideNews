/* eslint-disable react/prop-types */
import NewsFetch from "../NewsFetch"

export default function Entertainment(props){
  return(
    <div>
      <NewsFetch country={props.country} section='entertainment'/>
    </div>
  )
}