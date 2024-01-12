const api = "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"
const inp = document.getElementById("inp")
const images = document.querySelector(".images")
const getImages = async()=>{
  const methods = {
    method :"POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${api}`
    },
    body :JSON.stringify(
      {
        "prompt": inp.value,
        "n":3,
        "size":"256x256"
    }
    )

  }
 const res = await fetch(" https://api.openai.com/v1/images/generations", methods)
 const data = await res.json()
 console.log(data)
 let imgs = data.data
 console.log(imgs)
images.innerHTML = ""
 imgs.map((image)=>{
  images.innerHTML += `<div> <img style="width:200px" src="${image.url}"></div>`

 })
}
