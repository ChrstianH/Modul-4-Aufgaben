import { useParams } from "react-router-dom";

export default function DetailsPage() {
  const { id } = useParams();
  console.log(id);

  return <></>;
}
