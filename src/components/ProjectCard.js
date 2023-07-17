import {Col} from 'react-bootstrap';
export const ProjectCard = ({title, description, imgUrl, technologies}) => {
    return(
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} className='proj-img'/>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <span >{technologies}</span>
                </div>
            </div>
        </Col>
    )
}