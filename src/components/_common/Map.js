import styled from 'styled-components';

//images
import auditorium from '../../assets/images/Map/auditorium.svg';
import ecc from '../../assets/images/Map/ecc.svg';
import education from '../../assets/images/Map/education.svg';
import humanecology from '../../assets/images/Map/humanecology.svg';
import maingate from '../../assets/images/Map/maingate.svg';
import posco from '../../assets/images/Map/posco.svg';
import shinsegae from '../../assets/images/Map/shinsegae.svg';
import sportstrack from '../../assets/images/Map/sportstrack.svg';
import studentunion from '../../assets/images/Map/studentunion.svg';

const Map = ({place, page}) => {
  var selectedImage;

  switch (place) {
    case '대강당':
      selectedImage = auditorium;
      break;
    case 'ECC':
      selectedImage = ecc;
      break;
    case '교육관':
      selectedImage = education;
      break;
    case '생활환경관':
      selectedImage = humanecology;
      break;
    case '잔디광장':
      selectedImage = maingate;
      break;
    case '포스코관':
      selectedImage = posco;
      break;
    case '신세계관':
      selectedImage = shinsegae;
      break;
    case '스포츠트랙':
      selectedImage = sportstrack;
      break;
    case '학문관':
      selectedImage = studentunion;
      break;
    default:
      break;
  }

  return <Img page={page} src={selectedImage} alt={place} />;
};

export default Map;

const Img = styled.img`
  width: ${({page}) => (page === 'detail' ? '305px' : '348px')};
  height: ${({page}) => (page === 'detail' ? '305px' : '348px')};
`;
