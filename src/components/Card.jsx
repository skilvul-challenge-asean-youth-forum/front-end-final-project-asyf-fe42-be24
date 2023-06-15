import TextButton from "@/components/Button/TextButton";

const Card = () => {
  return (
    <div className="max-w-sm mx-auto rounded overflow-hidden shadow-lg mb-4 ">
      <img
        className="w-full h-48 object-cover object-center"
        src="https://aseanyouthforum.org/wp-content/uploads/2019/03/DSC_0282AYF-1024x681.jpg"
        alt="Card"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Card Title</div>
        <p className="text-gray-700 text-base mb-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus
          vitae, quia, nobis, officiis numquam atque aut autem esse expedita
          dolorem iure, ut doloremque repellat cupiditate dicta. Nihil, sit.
        </p>
        <TextButton />
      </div>
    </div>
  );
};

export default Card;
