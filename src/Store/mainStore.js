import {createStore} from "redux"

const counterReducer=(store={check:"",isLoaded:false,isLoadedJump:false},action)=>{
 if(action.type === "ELEMENTARY"){
  return {check:"elementary",isLoaded:store.isLoaded,isLoadedJump:store.isLoadedJump}
 }
 else if(action.type === "INTERMEDIATE"){
  return {check:"intermediate",isLoaded:store.isLoaded,isLoadedJump:store.isLoadedJump}
 }
 else if(action.type === "MASTER"){
  return {check:"master",isLoaded:store.isLoaded,isLoadedJump:store.isLoadedJump}
 }
 else if(action.type === "PUNCTUATION"){
  return {check:"punctuation",isLoaded:store.isLoaded,isLoadedJump:store.isLoadedJump}
 }
 else if(action.type === "NUMBERS"){
  return {check:"numbers",isLoaded:store.isLoaded,isLoadedJump:store.isLoadedJump}
 }
 else if(action.type === "SCHARACTERS"){
  return {check:"scharacters",isLoaded:store.isLoaded,isLoadedJump:store.isLoadedJump}
 }
 else if(action.type === "fifteenSecs"){
  return {check:"fifteenSecs",isLoaded:store.isLoaded,isLoadedJump:store.isLoadedJump}
 }
 else if(action.type === "thirtySecs"){
  return {check:"thirtySecs",isLoaded:store.isLoaded,isLoadedJump:store.isLoadedJump}
 }
 else if(action.type === "fourtySecs"){
  return {check:"fourtySecs",isLoaded:store.isLoaded,isLoadedJump:store.isLoadedJump}
 }
 else if(action.type === "fiftySecs"){
  return {check:"fiftySecs",isLoaded:store.isLoaded,isLoadedJump:store.isLoadedJump}
 }
 else if(action.type === "RETRY"){
  return {check:"RETRY",isLoaded:store.isLoaded,isLoadedJump:store.isLoadedJump}
 }
 else if(action.type === "SHOWANIMATIONS"){
  return {check:"SHOWANIMATIONS",isLoaded:store.isLoaded,isLoadedJump:store.isLoadedJump}
 }
 else if(action.type === "JUMP"){
  return {check:"JUMP",isLoaded:store.isLoaded,isLoadedJump:store.isLoadedJump}
 }
 else if(action.type === "NOTHING"){
  return {check:"NOTHING",isLoaded:store.isLoaded,isLoadedJump:store.isLoadedJump}
 }
 else if(action.type === "JUMP_AND_KEYBOARD"){
  return {check:" JUMP_AND_KEYBOARD",isLoaded:store.isLoaded,isLoadedJump:store.isLoadedJump}
 }
 else if(action.type === "keyboardLoaded"){
  return {check:" keyboardLoaded",isLoaded:!store.isLoaded,isLoadedJump:store.isLoadedJump}
 }

 else if(action.type === "jumpLoaded"){
  return {check:" jumpLoaded",isLoaded:store.isLoaded,isLoadedJump:!store.isLoadedJump}
 }

 
 
 return store;
}

const counterStore =createStore(counterReducer);

export default counterStore;