/* eslint-disable react/prop-types */
import NewsFetch from "../NewsFetch"

export default function Science(props){
  return(
    <div>
      <NewsFetch country={props.country} section='science'/>
    </div>
  )
}