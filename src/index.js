const axios=require("axios")
axios(`https://api.dictionaryapi.dev/api/v2/entries/en/hello`).then((e)=>{
  console.log(e.data)
})