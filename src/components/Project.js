import styled from 'styled-components';
import GithubIcon from './GithubIcon';
const Project = (props) => {
  const ProjectWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 70px;
  `
  const ProjectContainer = styled.div`
    position: relative;
    max-width: 1200px;
    display: flex;
    gap: 10px;
    justify-content: space-between;
    @media (max-width: ${props.mediaWidth.tablet}) {
      flex-direction: ${props.reverse ? 'column-reverse' : 'column'};
      align-items: center;
    }
  `

  const ImageContianer = styled.div`
    max-width:600px;
    z-index: 3;
  `

  const ProjectImage = styled.img`
    width:100%;
    transition: transform .1s ease-in ;
    &:hover{
      transform: scale(1.03)
    }
  `
  const Frame = styled.div`
      position: absolute;
      z-index: -3;
      //box-shadow: 0px 0px 20px 0px ${props.colors.accent};
      border: 1px solid ${props.colors.accent};
      padding: 20px 40px;
      width: 100%;
      height: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      @media (max-width: ${props.mediaWidth.tablet}) {
      border: 0;
      padding: 0;
    }
    &::before {
      content: '';
      box-sizing: border-box;
      position: absolute;
      border: 1px solid ${props.colors.accent};
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      transform: translate(6px, 6px);
      @media (max-width: ${props.mediaWidth.tablet}) {
      display: none;
      }
    }
  `

  const ProjectDetail = styled.div`

  `
  const ProjectDetailContent = styled.div`
    width: 300px;
    flex-shrink: 0;
    text-align: ${props.reverse ?  'start' : 'end' };
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: ${props.reverse ?  'flex-start' : 'flex-end' };
    gap: 20px;
    @media (max-width: ${props.mediaWidth.tablet}) {
      text-align: center;
      align-items: center;
    }
  `
  const ProjectTitle = styled.div`
    color: ${props.colors.accent}; 
    font-size: 1.3rem;
    font-weight: 700;
  `

  const ProjectDescription = styled.div`
    color: ${props.colors.content};
  `

  return(
    <ProjectWrapper>
      {props.reverse ?       
      <ProjectContainer>
        <ProjectDetail>
          <ProjectDetailContent>
            <ProjectTitle> {props.project.name} </ProjectTitle>
            <ProjectDescription> {props.project.description} </ProjectDescription>
            <GithubIcon link={props.project.github} colors={props.colors}/>
            <Frame />
          </ProjectDetailContent>
        </ProjectDetail>
        <ImageContianer>
        <a href={props.project.link}><ProjectImage src={props.project.image} /></a>
        </ImageContianer>
        {/* <Frame /> */}
      </ProjectContainer> :

      <ProjectContainer>
        <ImageContianer>
        <a href={props.project.link}><ProjectImage src={props.project.image} /></a>
        </ImageContianer>
        <ProjectDetail>
          <ProjectDetailContent>
            <ProjectTitle> {props.project.name} </ProjectTitle>
            <ProjectDescription> {props.project.description} </ProjectDescription>
            <GithubIcon link={props.project.github} colors={props.colors}/>
            <Frame />
          </ProjectDetailContent>
        </ProjectDetail>
        {/* <Frame /> */}
      </ProjectContainer>}
    </ProjectWrapper>
  );
};

export default Project;