import { createContext, useState } from "react";

export const Globalvar = createContext(null);

const API="https://forkify-api.herokuapp.com/api/v2/recipes";

export default function GlobalState({ children }) {
  const [searchparam, setsearchparam] = useState("");
  const [recipielist, setrecipielist] = useState([]);
  const[recipedata, setrecipedata]=useState(null)
  const[whishlist, setwhishlist]=useState([])

  async function handlesearch(e) {
    e.preventDefault();
    try {
      const res = await fetch(
        `${API}?search=${searchparam}`
      );
      const data =await res.json();
      if(data.data.recipes){
setrecipielist(data.data.recipes)
setsearchparam('')
      }

    } catch (e) {
      console.log(e);
    }
  }


function handlewhishlist(currentitem){
   const cpylist=[...whishlist];
   const index=cpylist.findIndex(item=>item.id===currentitem.id)

   if(index===-1){
    cpylist.push(currentitem)
   }else{
    cpylist.splice(index)
   }
setwhishlist(cpylist)
}
console.log(whishlist)
//   console.log(recipielist)
  return (
    <Globalvar.Provider value={{ API,searchparam, setsearchparam, handlesearch,recipielist ,recipedata, setrecipedata,handlewhishlist,whishlist, setwhishlist}}>
      {children}
    </Globalvar.Provider>
  );
}
