import axios from "axios"

var axiosConfig = {
  /*	headers: {
		Server: "nginx",
		"Content-Type": "application/json; charset=utf-8",
		Connection: "keep-alive",
		"Access-Control-Allow-Origin": "*",
		"Cache-Control": "no-cache",
		"X-Accel-Buffering": "no",
	},*/
}

//<------------------ It is using async await -------------------------------------->

export const getInfoAsync = async url => {
  var postData = {
    query: url,
  }
  try {
    const send = await axios.post(
      "https://api.lykkesdigitalt.no/pa11y-gatsby",
      postData,
      axiosConfig
    )

    if (send === undefined) {
      console.log("This is Not defined")
      return await send
    }

    return await send.data[0].ResultDescription
  } catch (err) {
    console.log(err)
    console.log("Write correct website")
  }
}

// <------------------ this is using traditional .then and .catch method ( Not used )--------------------->
// export const getInfo = url => {
// 	var postData = {
// 		query: url,
// 	}

// 	axios
// 		.post("https://api.lykkesdigitalt.no/pa11y-gatsby", postData, axiosConfig)
// 		.then(res => {
// 			console.log("RESPONSE RECEIVED: ", res.data[0].ResultDescription)
// 			return res.data[0].ResultDescription
// 		})
// 		.catch(err => {
// 			console.log("AXIOS ERROR: ", err)
// 		})
// }
