const containerEl=document.querySelector("#container");

;(()=>{
    fetch("https://fakestoreapi.com/products")
    .then(api=>api.json())
    .then(date=>{
        date.forEach(user=>{
            const card=document.createElement("div")
            card.className='card'
            containerEl.appendChild(card)

            const imgWrapperEl = document.createElement("div")
            imgWrapperEl.className = 'item-img__wrapper'
            card.appendChild(imgWrapperEl)

            const itemImg = document.createElement("img")
            itemImg.src = user.image
            itemImg.className = 'img'
            imgWrapperEl.appendChild(itemImg)


            const priceEl=document.createElement("p")
            priceEl.className="description"
            card.appendChild(priceEl)
            priceEl.textContent="Price: $" + user.price

            const discountEl=document.createElement("p")
            discountEl.className='description'
            card.appendChild(discountEl)
            discountEl.textContent="Discount: "+ user.rating.count

            const descriptionEl=document.createElement("p")
            descriptionEl.className='description'
            card.appendChild(descriptionEl)
            descriptionEl.textContent="Desc: "+ user.description

            const productNameEl = document.createElement("p")
            productNameEl.className='name'
            card.appendChild(productNameEl)
            productNameEl.textContent="Name: " + user.title

            const deleteImg=document.createElement("img")
            deleteImg.className='delete'
            card.appendChild(deleteImg)
            deleteImg.src = "../svg/delete.svg"
            
            deleteImg.addEventListener('click',()=>{
                const agree = confirm("Are you sure?")
                if(agree){
                    fetch('https://dummyjson.com/products/' + user.id, {
                    method: 'DELETE',
                  })
                  .then(res => res.json())
                  containerEl.removeChild(card)
                  
                }
            })
        })
        
    })
})() 

