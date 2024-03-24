import './ProjectItem.css';
interface Props {
  imgName: string;
  name: string;
}

function ProjectItem({ imgName, name }: Props) {
  return (
    <div className="ProjectItem">
      <div className="img-box">
        <img alt="" className={imgName} />
      </div>
      <div className="gradient-img"></div>
      <p>{name}</p>
    </div>
  );
}

export default ProjectItem;
