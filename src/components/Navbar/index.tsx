import { Container, Content, Icon } from "./style";
import logoImage from "./assets/logo.svg";
import homeImage from "./assets/home.svg";
import moviesImage from "./assets/movies.svg";
import tvImage from "./assets/tv.svg";
import favImage from "./assets/fav.svg";

const Navbar = () => {
    return <Container>
        <img src={logoImage} alt="" />

        <Content>
            <Icon src={homeImage} alt="" />
            <Icon src={moviesImage} alt="" />
            <Icon src={tvImage} alt="" />
            <Icon src={favImage} alt="" />

        </Content>
    </Container>
}
export { Navbar }