/* eslint-disable react/prop-types */
import NewsFetch from "../NewsFetch"

export default function General(props){
  return(
    <div>
      <NewsFetch country={props.country} section='general'/>
    </div>
  )
}