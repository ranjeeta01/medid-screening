import React, {Component, useState, useEffect} from 'react';
import '../App.css';
import {useSelector, useDispatch} from 'react-redux';
import { searchResult, suggestItems,selectItems} from '../redux/SearchIndex'
import {allergyRef} from '../firebase'

function Search(){
  const dispatch = useDispatch();
  const [loading,setLoading] = useState(false);
  const allergies = useSelector(state => state.result.results);
  const suggestions = useSelector(state => state.suggestion.suggestions);
  const selected = useSelector(state => state.selected.selected);
  function compareFunc(a,b){
    const freqA = a.Frequency;
    const freqB = b.Frequency;
    let comparison = 0;
    if(freqA>freqB){
      comparison = -1;
    } else if(freqA<freqB){
      comparison = 1;
    }
    return comparison;
  }

  function getData(){
    setLoading({
      loading:true
    })
    allergyRef.on('value',snap => {
      const items = [];
      snap.forEach(shot => {
        items.push({...shot.val(),key: shot.key});
      });
      items.sort(compareFunc);
      setLoading({
        loading: false
      });
      dispatch(searchResult(items))
    })
  }

  function suggestionSelected(value) {
    dispatch(selectItems(value.Name));
    document.getElementById("inputAllergy").value = value.Name;
  }

  function renderSuggestions(){
    if(suggestions.length === 0){
      return null;
    }
    return(
      <ul>
        {
          suggestions.map(item => <li onClick={()=> suggestionSelected(item)}>{item.Name}</li>)
        }
      </ul>
    )
  }

  function clearInput() {
    dispatch(selectItems(""))
    document.getElementById("inputAllergy").value = "";
    dispatch(suggestItems([]))
  }

  function handleOnInputChange(event){
    const query = event.target.value
    if(!query){
      dispatch(suggestItems([]))
    }
    else{
      let s = allergies.filter(function(a){
      return a.Name.toLowerCase().includes(query)
      })
      dispatch(suggestItems(s))
    }
    suggestions.map(item => console.log(item.Name))
  }
  useEffect(() => {
    getData();
  },[]);
  return(
    <div className="App-header">
          <h2>Medid</h2>
          <br/>
          <label for="inputName">Name</label>
          <input type="text" placeholder="Your Name.." id="inputName"/>
          <br/>
          <label for="gender">Gender</label>
              <select id="gender" name="gender" placeholder="">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Transgender">Transgender</option>
              </select>
          <br/>
          <label for="inputDate">Date of Birth</label>
          <input type="date" placeholder="dd/mm/yyyy" id="inputDate"/>
          <br/>
          <label for="inputAllergy">Enter Allergy Name</label>
          <input type="text" id="inputAllergy" onChange={handleOnInputChange}/>
          <button onClick={clearInput}>X</button>
          {renderSuggestions()}
          <br/>
          <button>Submit</button>
          <h6 className="sign-edit">@Ranjeeta-Kumari</h6>
    </div>
  )
}

export default Search;