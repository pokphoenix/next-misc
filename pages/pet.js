import Image from 'next/image'
import img from '../public/1.jpg'
const PetsPage = () => {
    return ( 
       
        <div>
             <Image src={img} placeholder='blur' alt='pet' width='250' height='450' />
            {
                ['1','2','3','4','5'].map((path) => {
                    return (
                        

                        <div key={path}>
                            {/*<img src={`/${path}.jpg`} alt='pet' width='250' /> this line will response maximum image size ex. 5MB  but wehn use Image component It will convert from .jpg to .webp  reduce the size to 200kb */}
                            <Image src={`/${path}.jpg`} alt='pet' width='250' height='450' />
                        </div>
                    )
                })
            }
        </div>
     );
}
 
export default PetsPage;