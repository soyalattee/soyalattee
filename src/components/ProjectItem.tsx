interface Props {
  imgName: string;
  name: string;
}

function ProjectItem({ imgName, name }: Props) {
  return (
    <div className="ProjectItem">
      <img alt="" className={imgName} />
      <p>{name}</p>
    </div>
  );
}

export default ProjectItem;
