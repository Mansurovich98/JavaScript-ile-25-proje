let weightInput = document.getElementById('text')
        let selectInput = document.getElementById("select")
        let buton = document.getElementById("button")


        buton.addEventListener("click", e => {
            let theNumber = Number(weightInput.value)
            if(!isNaN(theNumber) ){
                document.querySelector('.warning_box').style.display = 'none'
                document.querySelector('.image_box').style.display = 'block'
                document.querySelector('.calculate_box').style.display = 'block'
                
                document.getElementById('image').src = `${selectInput.value}.png`

                let option = selectInput.value
                document.getElementById('planet_name').textContent = option
                switch(option){
                    case 'Mercury' :
                        let n = theNumber * (3.7 / 9.81)
                        document.querySelector('.weight').textContent = n.toFixed(2) + ' N'
                        console.log(n)
                        break
                    case 'Venus' :
                        let n1 = theNumber * (8.87 / 9.81)
                        document.querySelector('.weight').textContent = n1.toFixed(2) + ' N'
                        break
                    case 'Earth' :
                        let n2 = theNumber * (9.81 / 9.81)
                        document.querySelector('.weight').textContent = n2.toFixed(2) + ' N'
                        break
                    case 'Mars' :
                        let n3 = theNumber * (3.71 / 9.81)
                        document.querySelector('.weight').textContent = n3.toFixed(2) + ' N'
                        break
                    case 'Jupiter' :
                        let n4 = theNumber * (24.79 / 9.81)
                        document.querySelector('.weight').textContent = n4.toFixed(2) + ' N'
                        break
                    case 'Saturn' :
                        let n5 = theNumber * (10.44 / 9.81)
                        document.querySelector('.weight').textContent = n5.toFixed(2) + ' N'
                        break    
                    case 'Uranus' :
                        let n6 = theNumber * (8.69 / 9.81)
                        document.querySelector('.weight').textContent = n6.toFixed(2) + ' N'
                        break             
                    case 'Neptun' :
                        let n7 = theNumber * (11.15 / 9.81)
                        document.querySelector('.weight').textContent = n7.toFixed(2) + ' N'
                        break
                    default :
                        console.log('sayi gir')
                }
                
                
            }
        })