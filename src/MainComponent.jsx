import {useEffect,useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewsFetch from "./NewsFetch";
import InfoSections from "./InfoSections";
import Business from './InformationSections/Business';
import Entertainment from './InformationSections/Entertainment';
import General from './InformationSections/General';
import Health from './InformationSections/Health';
import Science from './InformationSections/Science';
import Sports from './InformationSections/Sports';
import Technology from './InformationSections/Technology';


export default function MainComponent(props) {
  // eslint-disable-next-line react/prop-types
  const location = props.location;
  const [country, setCountry] = useState('us');
  
  const onCountryChange = (event) => {
    setCountry(event.target.value);
  };

  useEffect(() => {
    setCountry(location)
    }, [location])

return(
  <div className="bg-gray-950/80 h-full text-center text-white m-auto">
    <div className=" bg-gray-950">
    <h1 className="text-2xl sm:text-5xl"><a href='/'><span className='text-red-700'>W</span>orld <span className='text-red-700'>W</span>ide <span className='text-red-700'>N</span>ews</a></h1>
    <h2 className="pt-2 text-xs sm:text-base">Your Daily Source Of Information</h2>
    <h2 className="border-b-2 text-xs sm:text-base">Enjoy our content, or choose your country manually<br/>
    <select className='text-black mb-2' value={country} onChange={onCountryChange}>
        <option value="ae">United Arab Emirates</option>
        <option value="ar">Argentina</option>
        <option value="at">Austria</option>
        <option value="au">Australia</option>
        <option value="be">Belgium</option>
        <option value="bg">Bulgaria</option>
        <option value="br">Brazil</option>
        <option value="ca">Canada</option>
        <option value="ch">Switzerland</option>
        <option value="cn">China</option>
        <option value="co">Colombia</option>
        <option value="cu">Cuba</option>
        <option value="cz">Czech Republic</option>
        <option value="de">Germany</option>
        <option value="eg">Egypt</option>
        <option value="fr">France</option>
        <option value="gb">United Kingdom</option>
        <option value="gr">Greece</option>
        <option value="hk">Hong Kong</option>
        <option value="hu">Hungary</option>
        <option value="id">Indonesia</option>
        <option value="ie">Ireland</option>
        <option value="il">Israel</option>
        <option value="in">India</option>
        <option value="it">Italy</option>
        <option value="jp">Japan</option>
        <option value="kr">South Korea</option>
        <option value="lt">Lithuania</option>
        <option value="lv">Latvia</option>
        <option value="ma">Morocco</option>
        <option value="mx">Mexico</option>
        <option value="my">Malaysia</option>
        <option value="ng">Nigeria</option>
        <option value="nl">Netherlands</option>
        <option value="no">Norway</option>
        <option value="nz">New Zealand</option>
        <option value="ph">Philippines</option>
        <option value="pl">Poland</option>
        <option value="pt">Portugal</option>
        <option value="ro">Romania</option>
        <option value="rs">Serbia</option>
        <option value="ru">Russia</option>
        <option value="sa">Saudi Arabia</option>
        <option value="se">Sweden</option>
        <option value="sg">Singapore</option>
        <option value="si">Slovenia</option>
        <option value="sk">Slovakia</option>
        <option value="th">Thailand</option>
        <option value="tr">Turkey</option>
        <option value="tw">Taiwan</option>
        <option value="ua">Ukraine</option>
        <option value="us">United States</option>
        <option value="ve">Venezuela</option>
        <option value="za">South Africa</option>
      </select>
    </h2>
    </div>
    <Router>
      <InfoSections/>
      <Routes>
        <Route path='/' element={<NewsFetch country={country} section='general'/>}></Route>
        <Route path='/business' element={<Business country={country}/>}></Route>
        <Route path='/entertainment' element={<Entertainment country={country}/>}></Route>
        <Route path='/general' element={<General country={country}/>}></Route>
        <Route path='/health' element={<Health country={country}/>}></Route>
        <Route path='/science' element={<Science country={country}/>}></Route>
        <Route path='/sports' element={<Sports country={country}/>}></Route>
        <Route path='/technology' element={<Technology country={country}/>}></Route>
      </Routes>
    </Router>
  </div>
)
}