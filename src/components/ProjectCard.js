import { Col } from "react-bootstrap";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  technologies,
}) => {
  return (
    <Col xs={12} sm={6} md={6} lg={6}>
      <div className="project-card">
        <div className="project-image">
          <img src={imgUrl} alt={title} />
        </div>

        <div className="project-info">
          <div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>

          <span className="project-tech">
            {technologies}
          </span>
        </div>
      </div>
    </Col>
  );
};