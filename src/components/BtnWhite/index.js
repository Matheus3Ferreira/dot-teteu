import "../../global/style.css";
import "./style.css";

export default function BtnWhite(props) {
    const url = "/" + props.url;
  return (
    <a href={url}>
        <button className="button-white text">About me</button>
    </a>
  )
}