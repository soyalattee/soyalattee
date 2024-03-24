import './ProjectItem.css';
interface Props {
  imgName: string;
  name: string;
  text: string;
  url?: string;
}

function ProjectItem({ imgName, name, text, url }: Props) {
  return url !== '' ? (
    <a className="ProjectItem" href={url} target="_blank" rel="noreferrer">
      <div className="img-box">
        <img alt="" className={imgName} />
      </div>
      <div className="gradient-img"></div>
      <p>{name}</p>
      <p className="info">{text}</p>
    </a>
  ) : (
    <div className="ProjectItem">
      <div className="img-box">
        <img alt="" className={imgName} />
      </div>
      <div className="gradient-img"></div>
      <p>{name}</p>
      <p className="info">{text}</p>
    </div>
  );
}

export default ProjectItem;
