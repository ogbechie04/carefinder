import image1 from "../assets/hospital-card-images/img-1.svg"
import image2 from "../assets/hospital-card-images/img-2.svg"
import image3 from "../assets/hospital-card-images/img-3.svg"
import image4 from "../assets/hospital-card-images/img-4.svg"
import image5 from "../assets/hospital-card-images/img-5.svg"
import image6 from "../assets/hospital-card-images/img-6.svg"
import image7 from "../assets/hospital-card-images/img-7.svg"
import image8 from "../assets/hospital-card-images/img-8.svg"
import image9 from "../assets/hospital-card-images/img-9.svg"
import image10 from "../assets/hospital-card-images/img-10.svg"
import image11 from "../assets/hospital-card-images/img-11.svg"
import image12 from "../assets/hospital-card-images/img-12.svg"
import image13 from "../assets/hospital-card-images/img-13.svg"
import image14 from "../assets/hospital-card-images/img-14.svg"
import image15 from "../assets/hospital-card-images/img-15.svg"

const hospitalCardImage = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15]

function GenerateRandomImage() {
    const imageIndex = Math.floor(Math.random() * hospitalCardImage.length)
    return hospitalCardImage[imageIndex]
}

export default GenerateRandomImage