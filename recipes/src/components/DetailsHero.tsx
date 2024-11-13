export default function DetailsHero(props: {
  name: string;
  image_url: string | null;
}) {
  const background = props.image_url;

  const imgStyle = {
    backgroundImage: `url(${background}`,
  };

  return (
    <div className="details-hero" style={imgStyle}>
      <h2 className="details-hero-text">{props.name}</h2>
    </div>
  );
}
