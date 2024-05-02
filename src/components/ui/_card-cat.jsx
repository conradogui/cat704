import { Button } from "@/components/ui/button"


const CardCat = (props) => {
  return (
    <div className="bg-white rounded-xl py-10 px-5">
      <img src={props.photosrc} alt="" />
      <h2 className="text-xl font-bold">
        {props.name}
      </h2>
      <h3>{props.breed}</h3>
      <p className="first-letter:uppercase mt-2">
        {props.description ? props.description : "Sem descrição :3"}
      </p>

      <div className="mt-5">
        Email Owner: {props.owner}
      </div>
      <Button className="mt-5 bg-green-700 text-white transition-all lg:hover:bg-green-500">Edit</Button>
    </div>
  );
}

export default CardCat;