
let address = location.href
if(!address.includes("?name=")){
	location.href = address+ `?name=name`
}

let name = address.slice(address.indexOf("=")+1,address.length)
let person_name = document.getElementById("person_name")
let surname = document.getElementById("surname")
person_name.innerText = name
surname.innerText = name


image_name = ["image/5.png","image/6.png","image/7 (1).png"]
let image_count = 1

image_slider_image = document.getElementById("image_slider_image")

setTimeout(()=>{
		if(image_count==3){
		image_count = 1
	}
		image_slider_image.src = image_name[image_count]
	

	image_count += 1
	


},2500)



let input = document.getElementById('input')
document.body.appendChild(input)
let value = ""
let see_btn = document.getElementById("see")
input.addEventListener('input',(e)=>{
	 value = e.target.value
})


see_btn.addEventListener("click",(e)=>{
	if(value==""){
		return
	}

	let index = location.href.indexOf("?")
	let loc = location.href.slice(0,index)

	
	input.focus()
	input.value = `${loc}?name=${value}`
	input.select()
	input.setSelectionRange(0,99999)

	document.execCommand("copy")
	input.style.display = none
	
	alert("link copied to clip board")
})




let hover_image = document.getElementById("hover_image")
let maxWidthImage = 0



var x = setInterval(()=>{
		maxWidthImage=maxWidthImage+10
	hover_image.style.maxWidth = `${maxWidthImage}px` 
	
	if(maxWidthImage>380){
		
		maxWidthImage = 0
	}
},40)




let audio = document.getElementById("audio")
let audio_btn = document.getElementById("audio_btn")

audio_btn.addEventListener("click",()=>{
	console.log('clicked')
	audio.play()
	audio_btn.style.display = "none"
})

setTimeout(()=>{
	var promise =audio.play();

if (promise !== undefined) {
  promise.then(() => {
   	audio.play()
  }).catch(error => {
   		audio_btn.style.display = "block"
  });
}
},1000)





