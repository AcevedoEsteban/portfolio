import TextRotator from "./TextRotator";

 
const HeroTexts = () => {
 
  
  return (
    <>
      <h3 className="font-poppins text-2xl max-sm:text-xl text-gray-400" >My Name is</h3>
      <h1 className="font-rubik text-8xl name_underline text-custom-white max-sm:text-6xl " >
        Esteban<br /> Acevedo
      </h1>
        <TextRotator/>
     
    </>
  );
};
export default HeroTexts